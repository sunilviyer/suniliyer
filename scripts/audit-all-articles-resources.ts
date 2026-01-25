import { neon } from '@neondatabase/serverless';
import { readFileSync } from 'fs';
import { resolve } from 'path';

// Load .env.local manually
const envFile = readFileSync(resolve(process.cwd(), '.env.local'), 'utf-8');
const dbUrlMatch = envFile.match(/DATABASE_URL=["']?([^"'\n]+)["']?/);
if (!dbUrlMatch) {
  throw new Error('DATABASE_URL not found in .env.local');
}
const DATABASE_URL = dbUrlMatch[1];

const sql = neon(DATABASE_URL);

async function auditResources() {
  try {
    const articles = await sql`
      SELECT article_id, slug, path, yaml_content
      FROM articles
      WHERE yaml_content IS NOT NULL
      ORDER BY path, position
    `;

    console.log(`Auditing ${articles.length} articles for Additional Resources and Sources\n`);

    const missing = {
      additionalResources: [] as string[],
      sources: [] as string[],
      both: [] as string[]
    };

    for (const article of articles) {
      const content = JSON.parse(article.yaml_content as string);

      const hasAdditional = content.additionalResources && content.additionalResources.length > 0;
      const hasSources = content.sources && content.sources.length > 0;

      if (!hasAdditional && !hasSources) {
        missing.both.push(`${article.path}/${article.slug}`);
      } else if (!hasAdditional) {
        missing.additionalResources.push(`${article.path}/${article.slug}`);
      } else if (!hasSources) {
        missing.sources.push(`${article.path}/${article.slug}`);
      }
    }

    console.log('=== ARTICLES MISSING BOTH ===');
    console.log(missing.both.join('\n'));
    console.log(`\nTotal: ${missing.both.length}`);

    console.log('\n=== ARTICLES MISSING ONLY ADDITIONAL RESOURCES ===');
    console.log(missing.additionalResources.join('\n'));
    console.log(`\nTotal: ${missing.additionalResources.length}`);

    console.log('\n=== ARTICLES MISSING ONLY SOURCES ===');
    console.log(missing.sources.join('\n'));
    console.log(`\nTotal: ${missing.sources.length}`);

    console.log('\n=== SUMMARY ===');
    console.log(`Total articles: ${articles.length}`);
    console.log(`Missing both: ${missing.both.length}`);
    console.log(`Missing only additional resources: ${missing.additionalResources.length}`);
    console.log(`Missing only sources: ${missing.sources.length}`);
    console.log(`Has both: ${articles.length - missing.both.length - missing.additionalResources.length - missing.sources.length}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

auditResources();
