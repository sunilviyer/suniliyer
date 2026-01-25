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

async function checkContent() {
  try {
    const result = await sql`
      SELECT
        article_id,
        slug,
        LEFT(yaml_content, 200) as content_preview,
        yaml_content
      FROM articles
      WHERE slug = 'when-ai-goes-wrong'
      LIMIT 1
    `;

    console.log('Article preview:');
    console.log(result[0]?.content_preview);

    console.log('\nFull yaml_content type:');
    console.log(typeof result[0]?.yaml_content);

    console.log('\nFirst 500 chars:');
    console.log(result[0]?.yaml_content?.substring(0, 500));
  } catch (error) {
    console.error('Error:', error);
  }
}

checkContent();
