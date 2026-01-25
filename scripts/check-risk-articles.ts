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

async function checkRiskArticles() {
  try {
    const articles = await sql`
      SELECT
        article_id,
        slug,
        title,
        path,
        status,
        position,
        yaml_content IS NOT NULL as has_content,
        LENGTH(yaml_content) as content_length
      FROM articles
      WHERE path = 'risk'
      ORDER BY position
    `;

    console.log('Risk articles found:');
    console.table(articles);

    // Check for any cards used in risk articles
    if (articles.length > 0) {
      const slugs = articles.map((a: any) => a.slug);
      const cards = await sql`
        SELECT
          card_id,
          title,
          card_type,
          status,
          used_in_articles
        FROM cards
        WHERE used_in_articles && ${slugs}
        ORDER BY card_id
      `;

      console.log('\nCards used in risk articles:');
      console.table(cards);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

checkRiskArticles();
