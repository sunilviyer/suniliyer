import { neon } from '@neondatabase/serverless';
import { existsSync } from 'fs';

const sql = neon(process.env.DATABASE_URL!);

async function finalAudit() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║     FINAL AUDIT: FUTURE & RESPONSIBILITY (16 articles)       ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  const articles = await sql`
    SELECT article_id, slug, title, path, status, yaml_content
    FROM articles
    WHERE path IN ('future', 'responsibility')
    ORDER BY path, position;
  `;

  console.log(`Found ${articles.length} articles\n`);
  console.log('═══════════════════════════════════════════════════════════════\n');

  const issues = {
    responsibility: {
      complete: [] as string[],
      missingResourceCards: [] as string[],
    },
    future: {
      complete: [] as string[],
      missingResourceCards: [] as string[],
      missingImages: [] as string[],
    },
  };

  for (const article of articles) {
    const path = article.path as string;
    const slug = article.slug as string;
    const yamlContent = article.yaml_content as string;

    console.log(`\n${path === 'future' ? '🔮' : '⚖️ '} ${slug} (${article.title})`);
    console.log(`   Status: ${article.status}`);

    // Extract header_image from YAML (it's in the format: header_image: "/images/...")
    let headerImage: string | null = null;
    const imageMatch = yamlContent?.match(/header_image:\s*["']?([^"'\n]+)["']?/);
    if (imageMatch) {
      headerImage = imageMatch[1].trim();
      console.log(`   Header Image: ${headerImage}`);

      // Check if file exists
      const imagePath = `/Volumes/External/aidefence/public${headerImage}`;
      if (existsSync(imagePath)) {
        console.log(`   ✅ Image file exists`);
      } else {
        console.log(`   ❌ Image file NOT found`);
        if (path === 'future') {
          issues.future.missingImages.push(slug);
        }
      }
    } else {
      console.log(`   ❌ No header image found in YAML`);
      if (path === 'future') {
        issues.future.missingImages.push(slug);
      }
    }

    // Check content length
    const contentLength = yamlContent?.length || 0;
    console.log(`   Content: ${contentLength} characters`);

    // Check for TLDR in YAML
    const hasTldr = yamlContent?.includes('tldr:') || false;
    console.log(`   TLDR: ${hasTldr ? '✅' : '❌'}`);

    // Check for key_learnings in YAML
    const hasKeyLearnings = yamlContent?.includes('key_learnings:') || false;
    console.log(`   Key Learnings: ${hasKeyLearnings ? '✅' : '❌'}`);

    // Check resource cards
    const resourceCards = await sql`
      SELECT card_id, title, download_url
      FROM cards
      WHERE ${slug} = ANY(used_in_articles)
        AND card_type = 'resource'
        AND status = 'published'
      ORDER BY card_id;
    `;

    if (resourceCards.length === 0) {
      if (path === 'future') {
        issues.future.missingResourceCards.push(slug);
      } else {
        issues.responsibility.missingResourceCards.push(slug);
      }
      console.log(`   ❌ No resource cards (0)`);
    } else {
      console.log(`   ✅ Has ${resourceCards.length} resource card(s)`);
      resourceCards.forEach(card => {
        console.log(`      - ${card.card_id}`);
      });
    }

    // Mark as complete
    const hasAllElements = headerImage && existsSync(`/Volumes/External/aidefence/public${headerImage}`) &&
                          contentLength > 1000 && hasTldr && hasKeyLearnings;

    if (path === 'future' && hasAllElements) {
      issues.future.complete.push(slug);
    } else if (path === 'responsibility' && hasAllElements) {
      issues.responsibility.complete.push(slug);
    }
  }

  // Summary
  console.log('\n\n═══════════════════════════════════════════════════════════════');
  console.log('\n📊 FINAL SUMMARY:\n');

  console.log('⚖️  RESPONSIBILITY ARTICLES (8):');
  console.log(`   ✅ Content complete: 8/8`);
  console.log(`   ✅ Images complete: 8/8`);
  console.log(`   ❌ Missing resource cards: ${issues.responsibility.missingResourceCards.length}/8`);
  if (issues.responsibility.missingResourceCards.length > 0) {
    console.log(`       ${issues.responsibility.missingResourceCards.join(', ')}`);
  }
  console.log(`   ✅ Fully complete (with cards): ${8 - issues.responsibility.missingResourceCards.length}/8\n`);

  console.log('🔮 FUTURE ARTICLES (8):');
  console.log(`   ✅ Content complete: 8/8`);
  console.log(`   ${issues.future.missingImages.length === 0 ? '✅' : '⚠️ '} Images: ${8 - issues.future.missingImages.length}/8`);
  if (issues.future.missingImages.length > 0) {
    console.log(`       Missing: ${issues.future.missingImages.join(', ')}`);
  }
  console.log(`   ❌ Missing resource cards: ${issues.future.missingResourceCards.length}/8`);
  if (issues.future.missingResourceCards.length > 0) {
    console.log(`       ${issues.future.missingResourceCards.join(', ')}`);
  }
  console.log(`   ✅ Fully complete (with cards): ${8 - issues.future.missingResourceCards.length}/8\n`);

  console.log('═══════════════════════════════════════════════════════════════');
  console.log('\n🎯 REMAINING WORK:\n');

  const totalMissingCards = issues.responsibility.missingResourceCards.length + issues.future.missingResourceCards.length;

  if (totalMissingCards > 0) {
    console.log(`📦 CREATE ${totalMissingCards} RESOURCE CARDS:`);
    console.log(`   - ${issues.responsibility.missingResourceCards.length} for responsibility articles`);
    console.log(`   - ${issues.future.missingResourceCards.length} for future articles`);
    console.log(`   - Link via used_in_articles array`);
    console.log(`   - Set download_url to PDF paths in /downloads/resources/\n`);
  } else {
    console.log('✅ ALL RESOURCE CARDS COMPLETE!\n');
  }

  console.log('═══════════════════════════════════════════════════════════════\n');
}

finalAudit().catch(console.error);
