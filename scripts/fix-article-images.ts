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

async function fixImages() {
  try {
    // Fix what-ai-actually-is to use proper image
    const result1 = await sql`
      UPDATE articles
      SET yaml_content = jsonb_set(
        yaml_content::jsonb,
        '{headerImage}',
        '"/images/history/what-ai-actually-is.webp"'
      )::text
      WHERE slug = 'what-ai-actually-is'
      RETURNING article_id, slug, yaml_content::json->>'headerImage' as header_image
    `;

    console.log('Updated what-ai-actually-is article:');
    console.table(result1);

    // Verify ai-history is correct
    const result2 = await sql`
      SELECT
        article_id,
        slug,
        yaml_content::json->>'headerImage' as header_image
      FROM articles
      WHERE slug = 'ai-history'
    `;

    console.log('\nVerified ai-history article:');
    console.table(result2);
  } catch (error) {
    console.error('Error:', error);
  }
}

fixImages();
