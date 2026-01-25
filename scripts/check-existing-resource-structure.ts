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

async function checkStructure() {
  try {
    const result = await sql`
      SELECT slug, yaml_content
      FROM articles
      WHERE slug = 'ai-history'
      LIMIT 1
    `;

    if (result.length > 0) {
      const content = JSON.parse(result[0].yaml_content as string);

      console.log('=== ADDITIONAL RESOURCES STRUCTURE ===');
      console.log(JSON.stringify(content.additionalResources, null, 2));

      console.log('\n=== SOURCES STRUCTURE ===');
      console.log(JSON.stringify(content.sources, null, 2));
    }

    // Also check for the missing card
    console.log('\n=== CHECKING FOR MISSING CARD ===');
    const cardResult = await sql`
      SELECT card_id, title, status
      FROM cards
      WHERE card_id = 'concept-model-drift'
    `;

    if (cardResult.length > 0) {
      console.log('Card exists:', cardResult[0]);
    } else {
      console.log('Card concept-model-drift DOES NOT EXIST in database');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

checkStructure();
