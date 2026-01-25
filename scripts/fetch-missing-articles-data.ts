import { neon } from '@neondatabase/serverless';
import { writeFileSync } from 'fs';

const sql = neon(process.env.DATABASE_URL!);

async function fetchMissingArticlesData() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║           FETCH MISSING ARTICLES DATA FROM DB                ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  // Articles that need static pages created
  const missingArticles = [
    // Terminology (4 missing)
    'multimodal-ai',
    'ai-compute',
    'environmental-cost-ai',
    'black-box-problem',
    // Risk (3 missing)
    'ai-misinformation',
    'job-displacement',
    'autonomous-weapons',
    // Responsibility (8 missing - all)
    'eu-ai-act-explained',
    'nist-ai-rmf',
    'iso-42001',
    'ai-transparency',
    'ai-accountability',
    'human-centered-ai',
    'global-ai-law-tracker',
    'cross-border-compliance',
    // Future (8 missing - all)
    'agi-governance',
    'ai-existential-risk',
    'ai-national-security',
    'ai-safety',
    'future-ai-ethics',
    'future-ai-regulation',
    'ai-governance-careers',
    'trustworthy-ai',
  ];

  const articles = await sql`
    SELECT
      article_id,
      slug,
      title,
      path,
      position,
      yaml_content,
      status
    FROM articles
    WHERE slug = ANY(${missingArticles})
    ORDER BY path, position;
  `;

  console.log(`Found ${articles.length} articles in database\n`);

  const articlesByPath: Record<string, any[]> = {
    terminology: [],
    risk: [],
    responsibility: [],
    future: [],
  };

  for (const article of articles) {
    const path = article.path as string;
    if (articlesByPath[path]) {
      articlesByPath[path].push(article);
    }
  }

  // Save to JSON file for processing
  writeFileSync(
    '/tmp/missing-articles-data.json',
    JSON.stringify(articlesByPath, null, 2),
    'utf-8'
  );

  console.log('SUMMARY BY PATH:');
  console.log('═══════════════════════════════════════════════════════════════');
  for (const [path, arts] of Object.entries(articlesByPath)) {
    console.log(`${path}: ${arts.length} articles`);
    for (const art of arts) {
      console.log(`  - ${art.slug} (position ${art.position})`);
    }
    console.log('');
  }
  console.log('═══════════════════════════════════════════════════════════════');
  console.log(`\nData saved to: /tmp/missing-articles-data.json\n`);
}

fetchMissingArticlesData().catch(console.error);
