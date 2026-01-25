import { neon } from '@neondatabase/serverless';
import { existsSync } from 'fs';
import { join } from 'path';

const sql = neon(process.env.DATABASE_URL!);

async function auditArticle(slug: string) {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log(`║  AUDITING: ${slug.padEnd(50)} ║`);
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  // Get article data
  const articleResult = await sql`
    SELECT article_id, slug, title, path, status,
           yaml_content
    FROM articles
    WHERE slug = ${slug}
    LIMIT 1;
  `;

  if (articleResult.length === 0) {
    console.log('❌ Article not found in database\n');
    return;
  }

  const article = articleResult[0];
  const content = article.yaml_content ? JSON.parse(article.yaml_content as string) : null;

  console.log(`📄 Article: ${article.title}`);
  console.log(`   Path: ${article.path}`);
  console.log(`   Status: ${article.status}`);
  console.log(`   Article ID: ${article.article_id}\n`);

  // Check 1: Header image
  console.log('🖼️  HEADER IMAGE CHECK:');
  const headerImage = content?.headerImage;
  console.log(`   Database value: ${headerImage || '❌ MISSING'}`);

  if (headerImage) {
    const imagePath = join('/Volumes/External/aidefence/public', headerImage);
    const exists = existsSync(imagePath);
    console.log(`   File exists: ${exists ? '✅ YES' : '❌ NO'}`);
    console.log(`   Full path: ${imagePath}`);

    // Check if it matches slug
    const expectedImage = `/images/${article.path}/${slug}.png`;
    const matches = headerImage === expectedImage;
    console.log(`   Expected: ${expectedImage}`);
    console.log(`   Matches slug: ${matches ? '✅ YES' : '⚠️  NO (mismatch)'}\n`);
  } else {
    console.log(`   ❌ No header image in database\n`);
  }

  // Check 2: Article content
  console.log('📝 ARTICLE CONTENT CHECK:');
  console.log(`   Has content: ${content?.content ? '✅ YES' : '❌ NO'}`);
  console.log(`   Content length: ${content?.content?.length || 0} chars`);
  console.log(`   Has TLDR: ${content?.tldr ? '✅ YES' : '⚠️  NO'}`);
  console.log(`   Has tags: ${content?.tags?.length > 0 ? `✅ YES (${content.tags.length})` : '⚠️  NO'}`);
  console.log(`   Has readTime: ${content?.readTime ? '✅ YES' : '⚠️  NO'}`);
  console.log(`   Has updatedDate: ${content?.updatedDate ? '✅ YES' : '⚠️  NO'}`);
  console.log(`   Key Learnings: ${content?.keyLearnings?.length || 0} items`);
  console.log(`   Additional Resources: ${content?.additionalResources?.length || 0} items`);
  console.log(`   Sources: ${content?.sources?.length || 0} items\n`);

  // Check 3: Resource cards with download_url and learn_more
  console.log('📦 RESOURCE CARDS CHECK:');
  const resourceCards = await sql`
    SELECT card_id, title, download_url, learn_more, status
    FROM cards
    WHERE ${slug} = ANY(used_in_articles)
      AND card_type = 'resource'
    ORDER BY card_id;
  `;

  if (resourceCards.length === 0) {
    console.log('   No resource cards for this article\n');
  } else {
    console.log(`   Found ${resourceCards.length} resource card(s):\n`);

    for (const card of resourceCards) {
      console.log(`   📌 ${card.card_id}: ${card.title}`);
      console.log(`      Status: ${card.status}`);

      // Check download_url
      if (card.download_url) {
        console.log(`      ✅ Download URL: ${card.download_url}`);

        // Check if file exists
        const downloadPath = join('/Volumes/External/aidefence/public', card.download_url);
        const downloadExists = existsSync(downloadPath);
        console.log(`      ${downloadExists ? '✅' : '❌'} File exists: ${downloadPath}`);
      } else {
        console.log(`      ⚠️  No download URL`);
      }

      // Check learn_more
      if (card.learn_more) {
        console.log(`      ✅ Learn More: /articles/${card.learn_more}`);

        // Verify it's a valid article slug
        const learnMoreArticle = await sql`
          SELECT slug FROM articles WHERE slug = ${card.learn_more} LIMIT 1;
        `;

        if (learnMoreArticle.length > 0) {
          console.log(`      ✅ Valid article link`);
        } else {
          console.log(`      ❌ INVALID - article '${card.learn_more}' does not exist`);
        }
      } else {
        console.log(`      ⚠️  No learn more link`);
      }

      console.log('');
    }
  }

  console.log('═══════════════════════════════════════════════════════════════\n');
}

// Get the slug from command line argument
const slug = process.argv[2];

if (!slug) {
  console.log('Usage: npx tsx audit-single-article.ts <slug>');
  process.exit(1);
}

auditArticle(slug).catch(console.error);
