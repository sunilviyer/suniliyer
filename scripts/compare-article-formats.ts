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

async function compareFormats() {
  try {
    // Check a history article
    const history = await sql`
      SELECT
        slug,
        LEFT(yaml_content, 100) as content_preview
      FROM articles
      WHERE slug = 'ai-history'
      LIMIT 1
    `;

    console.log('History article (working):');
    console.log(history[0]?.content_preview);

    // Check a risk article
    const risk = await sql`
      SELECT
        slug,
        LEFT(yaml_content, 100) as content_preview
      FROM articles
      WHERE slug = 'when-ai-goes-wrong'
      LIMIT 1
    `;

    console.log('\nRisk article (failing):');
    console.log(risk[0]?.content_preview);
  } catch (error) {
    console.error('Error:', error);
  }
}

compareFormats();
