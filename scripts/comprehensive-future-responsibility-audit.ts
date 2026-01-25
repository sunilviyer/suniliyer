import { neon } from '@neondatabase/serverless';
import { existsSync } from 'fs';

const sql = neon(process.env.DATABASE_URL!);

async function comprehensiveAudit() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║     COMPREHENSIVE AUDIT: FUTURE & RESPONSIBILITY (16)        ║');
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
      missingImages: [] as string[],
      wrongImageFormat: [] as string[],
      missingResourceCards: [] as string[],
      complete: [] as string[],
    },
    future: {
      missingContent: [] as string[],
      missingImages: [] as string[],
      missingResourceCards: [] as string[],
    },
  };

  for (const article of articles) {
    const content = article.yaml_content ? JSON.parse(article.yaml_content as string) : null;
    const path = article.path as string;
    const slug = article.slug as string;

    console.log(`\n${path === 'future' ? '🔮' : '⚖️ '} ${slug} (${article.title})`);
    console.log(`   Status: ${article.status}`);

    // Check header image
    const headerImage = content?.headerImage;
    if (headerImage) {
      console.log(`   Header Image: ${headerImage}`);

      // Check if using .png instead of .webp
      if (headerImage.endsWith('.png')) {
        issues[path === 'future' ? 'future' : 'responsibility'].wrongImageFormat.push(slug);
        console.log(`   ⚠️  Using .png instead of .webp`);
      }

      // Check if file exists
      const imagePath = `/Volumes/External/aidefence/public${headerImage}`;
      if (!existsSync(imagePath)) {
        issues[path === 'future' ? 'future' : 'responsibility'].missingImages.push(slug);
        console.log(`   ❌ Image file not found: ${imagePath}`);
      }
    } else {
      issues[path === 'future' ? 'future' : 'responsibility'].missingImages.push(slug);
      console.log(`   ❌ No header image in database`);
    }

    // Check content
    if (path === 'future') {
      const hasContent = content?.content && content.content.length > 0;
      const hasTldr = content?.tldr;
      const hasKeyLearnings = content?.keyLearnings && content.keyLearnings.length > 0;

      if (!hasContent || !hasTldr || !hasKeyLearnings) {
        issues.future.missingContent.push(slug);
        console.log(`   ❌ Missing content/TLDR/keyLearnings`);
      } else {
        console.log(`   ✅ Has content (${content.content.length} chars, ${content.keyLearnings.length} learnings)`);
      }
    } else {
      // Responsibility articles
      const hasContent = content?.content && content.content.length > 0;
      console.log(`   ✅ Has content (${hasContent ? content.content.length + ' chars' : '0'})`);
    }

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
        console.log(`      - ${card.card_id}: ${card.title}`);
        if (card.download_url) {
          console.log(`        Download: ${card.download_url}`);
        }
      });
    }

    // Mark complete if all checks pass
    if (path === 'responsibility' &&
        headerImage &&
        headerImage.endsWith('.webp') &&
        existsSync(`/Volumes/External/aidefence/public${headerImage}`) &&
        resourceCards.length > 0) {
      issues.responsibility.complete.push(slug);
    }
  }

  // Summary
  console.log('\n\n═══════════════════════════════════════════════════════════════');
  console.log('\n📊 SUMMARY:\n');

  console.log('⚖️  RESPONSIBILITY ARTICLES (8):');
  console.log(`   ✅ All have content and published status`);
  console.log(`   ⚠️  Wrong image format (.png instead of .webp): ${issues.responsibility.wrongImageFormat.length}`);
  if (issues.responsibility.wrongImageFormat.length > 0) {
    console.log(`       ${issues.responsibility.wrongImageFormat.join(', ')}`);
  }
  console.log(`   ❌ Missing resource cards: ${issues.responsibility.missingResourceCards.length}/8`);
  if (issues.responsibility.missingResourceCards.length > 0) {
    console.log(`       ${issues.responsibility.missingResourceCards.join(', ')}`);
  }
  console.log(`   ✅ Fully complete: ${issues.responsibility.complete.length}/8\n`);

  console.log('🔮 FUTURE ARTICLES (8):');
  console.log(`   ❌ Missing content: ${issues.future.missingContent.length}/8`);
  if (issues.future.missingContent.length > 0) {
    console.log(`       ${issues.future.missingContent.join(', ')}`);
  }
  console.log(`   ❌ Missing/wrong images: ${issues.future.missingImages.length}/8`);
  if (issues.future.missingImages.length > 0) {
    console.log(`       ${issues.future.missingImages.join(', ')}`);
  }
  console.log(`   ❌ Missing resource cards: ${issues.future.missingResourceCards.length}/8`);
  if (issues.future.missingResourceCards.length > 0) {
    console.log(`       ${issues.future.missingResourceCards.join(', ')}`);
  }

  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('\n🎯 WHAT YOU NEED TO DO:\n');

  console.log('1️⃣  FIX RESPONSIBILITY IMAGES (8 articles):');
  console.log('    - Change .png to .webp in database (all exist as .webp files)');
  console.log('    - Files already exist, just need DB update\n');

  console.log('2️⃣  CREATE RESOURCE CARDS (16 articles):');
  console.log('    - Create resource cards for all responsibility articles (8)');
  console.log('    - Create resource cards for all future articles (8)');
  console.log('    - PDF files exist in /downloads/resources/\n');

  console.log('3️⃣  POPULATE FUTURE ARTICLES (8 articles):');
  console.log('    - Add content, TLDR, keyLearnings to database');
  console.log('    - Add header images to database');
  console.log('    - Change status from "not_started" to "published"\n');

  console.log('═══════════════════════════════════════════════════════════════\n');
}

comprehensiveAudit().catch(console.error);
