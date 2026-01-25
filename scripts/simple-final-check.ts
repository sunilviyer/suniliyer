import { neon } from '@neondatabase/serverless';
import { existsSync } from 'fs';

const sql = neon(process.env.DATABASE_URL!);

async function simpleFinalCheck() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║          SIMPLE FINAL CHECK: All 16 Articles                 ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  // Check responsibility articles (JSON format)
  console.log('⚖️  RESPONSIBILITY ARTICLES (8):\n');

  const respArticles = await sql`
    SELECT
      slug,
      status,
      yaml_content::json->>'headerImage' as header_image,
      LENGTH(yaml_content::json->>'content') as content_length,
      yaml_content::json->>'tldr' IS NOT NULL as has_tldr,
      jsonb_array_length((yaml_content::jsonb->'keyLearnings')::jsonb) as key_learnings_count
    FROM articles
    WHERE path = 'responsibility'
    ORDER BY position;
  `;

  let respMissingImages = 0;
  let respComplete = 0;

  for (const article of respArticles) {
    const imageExists = article.header_image ?
      existsSync(`/Volumes/External/aidefence/public${article.header_image}`) : false;

    const isComplete = article.header_image && imageExists &&
                      article.content_length > 1000 && article.has_tldr;

    console.log(`   ${isComplete ? '✅' : '⚠️ '} ${article.slug}`);
    console.log(`      Image: ${imageExists ? '✅' : '❌'} ${article.header_image || 'MISSING'}`);
    console.log(`      Content: ${article.content_length} chars`);
    console.log(`      TLDR: ${article.has_tldr ? '✅' : '❌'}`);
    console.log(`      Key Learnings: ${article.key_learnings_count || 0}`);

    if (!imageExists) respMissingImages++;
    if (isComplete) respComplete++;

    console.log('');
  }

  console.log('═══════════════════════════════════════════════════════════════\n');
  console.log('🔮 FUTURE ARTICLES (8):\n');

  // Check future articles (YAML format)
  const futureArticles = await sql`
    SELECT
      slug,
      status,
      yaml_content
    FROM articles
    WHERE path = 'future'
    ORDER BY position;
  `;

  let futureMissingImages = 0;
  let futureComplete = 0;

  for (const article of futureArticles) {
    const yamlContent = article.yaml_content as string || '';

    // Extract header_image from YAML
    const imageMatch = yamlContent.match(/header_image:\s*["']?([^"'\n]+)["']?/);
    const headerImage = imageMatch ? imageMatch[1].trim() : null;
    const imageExists = headerImage ?
      existsSync(`/Volumes/External/aidefence/public${headerImage}`) : false;

    const hasTldr = yamlContent.includes('tldr:');
    const hasKeyLearnings = yamlContent.includes('key_learnings:');
    const contentLength = yamlContent.length;

    const isComplete = headerImage && imageExists && contentLength > 1000 && hasKeyLearnings;

    console.log(`   ${isComplete ? '✅' : '⚠️ '} ${article.slug}`);
    console.log(`      Image: ${imageExists ? '✅' : '❌'} ${headerImage || 'MISSING'}`);
    console.log(`      Content: ${contentLength} chars`);
    console.log(`      TLDR: ${hasTldr ? '✅' : '❌'}`);
    console.log(`      Key Learnings: ${hasKeyLearnings ? '✅' : '❌'}`);

    if (!imageExists) futureMissingImages++;
    if (isComplete) futureComplete++;

    console.log('');
  }

  // Resource cards check
  console.log('═══════════════════════════════════════════════════════════════\n');
  console.log('📦 RESOURCE CARDS:\n');

  const allSlugs = [
    ...respArticles.map(a => a.slug),
    ...futureArticles.map(a => a.slug)
  ];

  const resourceCards = await sql`
    SELECT card_id, title, used_in_articles, download_url
    FROM cards
    WHERE card_type = 'resource'
      AND status = 'published'
      AND used_in_articles && ARRAY[${sql(allSlugs)}]::text[]
    ORDER BY card_id;
  `;

  console.log(`   Total resource cards: ${resourceCards.length}`);

  if (resourceCards.length > 0) {
    console.log('\n   Cards found:');
    for (const card of resourceCards) {
      const articles = (card.used_in_articles as string[]).filter(a => allSlugs.includes(a));
      console.log(`   - ${card.card_id}`);
      console.log(`     Used in: ${articles.join(', ')}`);
      console.log(`     Download: ${card.download_url || 'NONE'}\n`);
    }
  }

  // Final summary
  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('\n📊 SUMMARY:\n');
  console.log(`⚖️  Responsibility: ${respComplete}/8 complete`);
  console.log(`   Missing images: ${respMissingImages}/8`);
  console.log(`🔮 Future: ${futureComplete}/8 complete`);
  console.log(`   Missing images: ${futureMissingImages}/8`);
  console.log(`📦 Resource cards: ${resourceCards.length} total`);

  const articlesWithCards = new Set();
  for (const card of resourceCards) {
    for (const article of (card.used_in_articles as string[])) {
      if (allSlugs.includes(article)) {
        articlesWithCards.add(article);
      }
    }
  }
  console.log(`   Articles with cards: ${articlesWithCards.size}/16`);
  console.log(`   Articles missing cards: ${16 - articlesWithCards.size}/16`);

  console.log('\n═══════════════════════════════════════════════════════════════\n');

  if (articlesWithCards.size < 16) {
    console.log('🎯 NEXT STEP: Create resource cards for articles without them\n');
  } else {
    console.log('✅ ALL ARTICLES HAVE RESOURCE CARDS!\n');
  }
}

simpleFinalCheck().catch(console.error);
