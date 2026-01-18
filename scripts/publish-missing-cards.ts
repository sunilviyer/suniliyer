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

async function publishCards() {
  try {
    const result = await sql`
      UPDATE cards
      SET status = 'published'
      WHERE card_id IN ('ex-dartmouth-workshop', 'fw-oecd-ai-principles')
      RETURNING card_id, title, status
    `;

    console.log('Published cards:');
    console.table(result);
  } catch (error) {
    console.error('Error:', error);
  }
}

publishCards();
