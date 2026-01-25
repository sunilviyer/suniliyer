import { neon } from '@neondatabase/serverless';
import { existsSync } from 'fs';
import { join } from 'path';

const sql = neon(process.env.DATABASE_URL!);

const publishedArticles = [
  'when-ai-goes-wrong',
  'what-ai-actually-is',
  'ai-technology-stack',
  'ai-vs-automation',
  'ai-family-tree',
  'algorithmic-bias',
  'types-of-ai-intelligence',
  'ai-hallucinations',
  'data-behind-ai',
  'ai-privacy',
  'how-machines-learn',
  'foundation-models',
  'deep-learning-decoded',
  'deepfakes-synthetic-media',
  'multimodal-ai',
  'generative-ai-explained',
  'ai-misinformation',
  'ai-compute',
  'environmental-cost-ai',
  'job-displacement',
  'large-language-models',
  'ai-history',
  'autonomous-weapons',
  'black-box-problem',
];

interface Issue {
  article: string;
  type: 'missing_image' | 'image_mismatch' | 'invalid_learn_more' | 'missing_download' | 'missing_learn_more';
  details: string;
}

async function auditAllArticles() {
  console.log('\n╔════════════════════════════════════════════════════════════════╗');
  console.log('║          COMPREHENSIVE AUDIT OF 24 PUBLISHED ARTICLES          ║');
  console.log('╚════════════════════════════════════════════════════════════════╝\n');

  const issues: Issue[] = [];

  for (const slug of publishedArticles) {
    const articleResult = await sql`
      SELECT article_id, slug, title, path, yaml_content
      FROM articles
      WHERE slug = ${slug}
      LIMIT 1;
    `;

    if (articleResult.length === 0) continue;

    const article = articleResult[0];
    const content = article.yaml_content ? JSON.parse(article.yaml_content as string) : null;

    // Check header image
    const headerImage = content?.headerImage;
    const expectedImage = `/images/${article.path}/${slug}.webp`;

    if (!headerImage) {
      issues.push({
        article: slug,
        type: 'missing_image',
        details: `No headerImage in database`,
      });
    } else if (headerImage !== expectedImage) {
      issues.push({
        article: slug,
        type: 'image_mismatch',
        details: `Has '${headerImage}' but expected '${expectedImage}'`,
      });
    }

    if (headerImage) {
      const imagePath = join('/Volumes/External/aidefence/public', headerImage);
      if (!existsSync(imagePath)) {
        issues.push({
          article: slug,
          type: 'missing_image',
          details: `File not found: ${headerImage}`,
        });
      }
    }

    // Check resource cards
    const resourceCards = await sql`
      SELECT card_id, title, download_url, learn_more
      FROM cards
      WHERE ${slug} = ANY(used_in_articles)
        AND card_type = 'resource'
      ORDER BY card_id;
    `;

    for (const card of resourceCards) {
      if (card.learn_more) {
        // Check if it's a valid slug (no slashes, just the slug)
        if (card.learn_more.includes('/')) {
          issues.push({
            article: slug,
            type: 'invalid_learn_more',
            details: `Card '${card.card_id}': learn_more is '${card.learn_more}' (should be just the slug, e.g., 'ai-history')`,
          });
        }

        // Check if article exists
        const learnMoreArticle = await sql`
          SELECT slug FROM articles WHERE slug = ${card.learn_more} LIMIT 1;
        `;

        if (learnMoreArticle.length === 0) {
          issues.push({
            article: slug,
            type: 'invalid_learn_more',
            details: `Card '${card.card_id}': article '${card.learn_more}' does not exist`,
          });
        }
      } else {
        issues.push({
          article: slug,
          type: 'missing_learn_more',
          details: `Card '${card.card_id}' (${card.title}): No learn_more link`,
        });
      }

      if (card.download_url) {
        const downloadPath = join('/Volumes/External/aidefence/public', card.download_url);
        if (!existsSync(downloadPath)) {
          issues.push({
            article: slug,
            type: 'missing_download',
            details: `Card '${card.card_id}': File not found at ${card.download_url}`,
          });
        }
      } else {
        issues.push({
          article: slug,
          type: 'missing_download',
          details: `Card '${card.card_id}' (${card.title}): No download_url`,
        });
      }
    }
  }

  // Print summary by issue type
  console.log('\n📊 SUMMARY OF ISSUES:\n');

  const missingImages = issues.filter(i => i.type === 'missing_image');
  const imageMismatch = issues.filter(i => i.type === 'image_mismatch');
  const invalidLearnMore = issues.filter(i => i.type === 'invalid_learn_more');
  const missingLearnMore = issues.filter(i => i.type === 'missing_learn_more');
  const missingDownload = issues.filter(i => i.type === 'missing_download');

  console.log(`🖼️  HEADER IMAGE ISSUES (${missingImages.length + imageMismatch.length} total):`);
  console.log(`   Missing images: ${missingImages.length}`);
  console.log(`   Name mismatches: ${imageMismatch.length}\n`);

  console.log(`🔗 LEARN MORE LINK ISSUES (${invalidLearnMore.length + missingLearnMore.length} total):`);
  console.log(`   Invalid links: ${invalidLearnMore.length}`);
  console.log(`   Missing links: ${missingLearnMore.length}\n`);

  console.log(`📥 DOWNLOAD URL ISSUES (${missingDownload.length} total):`);
  console.log(`   Missing downloads: ${missingDownload.length}\n`);

  // Print detailed issues by article
  console.log('\n\n📋 DETAILED ISSUES BY ARTICLE:\n');
  console.log('═══════════════════════════════════════════════════════════════\n');

  for (const slug of publishedArticles) {
    const articleIssues = issues.filter(i => i.article === slug);

    if (articleIssues.length > 0) {
      console.log(`❌ ${slug} (${articleIssues.length} issues):`);
      articleIssues.forEach(issue => {
        const icon = {
          missing_image: '🖼️ ',
          image_mismatch: '🔄',
          invalid_learn_more: '🔗',
          missing_learn_more: '⚠️ ',
          missing_download: '📥',
        }[issue.type];
        console.log(`   ${icon} ${issue.details}`);
      });
      console.log('');
    } else {
      console.log(`✅ ${slug} - No issues\n`);
    }
  }

  console.log('\n═══════════════════════════════════════════════════════════════\n');
  console.log(`\n✅ TOTAL ISSUES FOUND: ${issues.length}\n`);
}

auditAllArticles().catch(console.error);
