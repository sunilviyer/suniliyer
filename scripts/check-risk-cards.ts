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

const cardIds = [
  'ex-uber-arizona-fatality',
  'res-taxonomy-ai-harms',
  'ex-amazon-hiring',
  'ex-air-canada-chatbot'
];

async function checkCards() {
  try {
    console.log('Checking if cards exist in database:\n');

    for (const cardId of cardIds) {
      const result = await sql`
        SELECT card_id, title, status, used_in_articles
        FROM cards
        WHERE card_id = ${cardId}
      `;

      if (result.length > 0) {
        const card = result[0];
        console.log(`✓ ${cardId}`);
        console.log(`  Title: ${card.title}`);
        console.log(`  Status: ${card.status}`);
        console.log(`  Used in: ${card.used_in_articles || 'none'}`);
      } else {
        console.log(`✗ ${cardId} - NOT FOUND IN DATABASE`);
      }
      console.log('');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

checkCards();
