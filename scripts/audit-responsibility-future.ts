import { neon } from '@neondatabase/serverless';
import { existsSync } from 'fs';
import { join } from 'path';

const sql = neon(process.env.DATABASE_URL!);

async function auditResponsibilityFuture() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║   COMPREHENSIVE AUDIT: RESPONSIBILITY & FUTURE (16 articles) ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  // Get all articles in responsibility and future paths
  const articles = await sql`
    SELECT article_id, slug, title, path, status, yaml_content
    FROM articles
    WHERE path IN ('responsibility', 'future')
    ORDER BY path, position;
  `;

  console.log(`Found ${articles.length} articles\n`);
  console.log('═══════════════════════════════════════════════════════════════\n');

  const issues: any[] = [];
  const summary = {
    total: articles.length,
    missingImages: 0,
    missingContent: 0,
    missingTldr: 0,
    missingKeyLearnings: 0,
    missingAdditionalResources: 0,
    missingTags: 0,
    missingReadTime: 0,
    missingUpdatedDate: 0,
    noResourceCards: 0,
  };

  for (const article of articles) {
    const content = article.yaml_content ? JSON.parse(article.yaml_content as string) : null;
    const articleIssues: string[] = [];

    // Check header image
    const expectedImage = `/images/${article.path}/${article.slug}.webp`;
    const imagePath = join('/Volumes/External/aidefence/public', expectedImage);

    if (!existsSync(imagePath)) {
      articleIssues.push(`🖼️  Missing image: ${expectedImage}`);
      summary.missingImages++;
    }

    // Check content fields
    if (!content || !content.content || content.content.length === 0) {
      articleIssues.push('📝 Missing article content');
      summary.missingContent++;
    }

    if (!content?.tldr) {
      articleIssues.push('⚠️  Missing TLDR');
      summary.missingTldr++;
    }

    if (!content?.keyLearnings || content.keyLearnings.length === 0) {
      articleIssues.push('📚 Missing Key Learnings');
      summary.missingKeyLearnings++;
    }

    if (!content?.additionalResources || content.additionalResources.length === 0) {
      articleIssues.push('📎 Missing Additional Resources');
      summary.missingAdditionalResources++;
    }

    // SEO fields
    if (!content?.tags || content.tags.length === 0) {
      articleIssues.push('🏷️  Missing Tags');
      summary.missingTags++;
    }

    if (!content?.readTime) {
      articleIssues.push('⏱️  Missing Read Time');
      summary.missingReadTime++;
    }

    if (!content?.updatedDate) {
      articleIssues.push('📅 Missing Updated Date');
      summary.missingUpdatedDate++;
    }

    // Check for resource cards
    const resourceCards = await sql`
      SELECT card_id, title, card_type
      FROM cards
      WHERE ${article.slug} = ANY(used_in_articles)
        AND card_type = 'resource'
        AND status = 'published';
    `;

    if (resourceCards.length === 0) {
      articleIssues.push('📦 No resource cards');
      summary.noResourceCards++;
    }

    // Print article status
    if (articleIssues.length > 0) {
      console.log(`❌ ${article.slug} (${article.path})`);
      console.log(`   Title: ${article.title}`);
      console.log(`   Status: ${article.status}`);
      articleIssues.forEach(issue => console.log(`   ${issue}`));
      if (resourceCards.length > 0) {
        console.log(`   ✅ Has ${resourceCards.length} resource card(s)`);
      }
      console.log('');

      issues.push({
        slug: article.slug,
        path: article.path,
        issues: articleIssues,
      });
    } else {
      console.log(`✅ ${article.slug} (${article.path}) - Complete`);
      console.log(`   Has ${resourceCards.length} resource card(s)\n`);
    }
  }

  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('\n📊 SUMMARY:\n');
  console.log(`Total Articles: ${summary.total}`);
  console.log(`Articles with Issues: ${issues.length}\n`);

  console.log('🖼️  Image Issues:');
  console.log(`   Missing images: ${summary.missingImages}\n`);

  console.log('📝 Content Issues:');
  console.log(`   Missing content: ${summary.missingContent}`);
  console.log(`   Missing TLDR: ${summary.missingTldr}`);
  console.log(`   Missing Key Learnings: ${summary.missingKeyLearnings}`);
  console.log(`   Missing Additional Resources: ${summary.missingAdditionalResources}\n`);

  console.log('🔍 SEO Issues:');
  console.log(`   Missing Tags: ${summary.missingTags}`);
  console.log(`   Missing Read Time: ${summary.missingReadTime}`);
  console.log(`   Missing Updated Date: ${summary.missingUpdatedDate}\n`);

  console.log('📦 Resource Cards:');
  console.log(`   Articles without resource cards: ${summary.noResourceCards}\n`);

  console.log('═══════════════════════════════════════════════════════════════\n');

  // List missing images
  if (summary.missingImages > 0) {
    console.log(`\n📋 MISSING IMAGES LIST (${summary.missingImages}):\n`);
    for (const article of articles) {
      const expectedImage = `/images/${article.path}/${article.slug}.webp`;
      const imagePath = join('/Volumes/External/aidefence/public', expectedImage);

      if (!existsSync(imagePath)) {
        console.log(`   - ${expectedImage}`);
        console.log(`     Article: ${article.slug} (${article.title})\n`);
      }
    }
  }
}

auditResponsibilityFuture().catch(console.error);
