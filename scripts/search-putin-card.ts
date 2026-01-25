import { neon } from '@neondatabase/serverless';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const envFile = readFileSync(resolve(process.cwd(), '.env.local'), 'utf-8');
const dbUrlMatch = envFile.match(/DATABASE_URL=["']?([^"'\n]+)["']?/);
if (!dbUrlMatch) {
  throw new Error('DATABASE_URL not found in .env.local');
}
const DATABASE_URL = dbUrlMatch[1];

const sql = neon(DATABASE_URL);

async function searchPutinCard() {
  console.log('\n🔍 Searching for Putin quote card...\n');

  const cards = await sql`
    SELECT card_id, card_type, title, status, summary
    FROM cards
    WHERE LOWER(card_id) LIKE '%putin%'
       OR LOWER(title) LIKE '%putin%'
       OR LOWER(summary) LIKE '%putin%'
  `;

  if (cards.length === 0) {
    console.log('❌ No cards found mentioning Putin\n');

    // Search for AI leadership or weapons-related quotes
    console.log('🔍 Searching for AI leadership/weapons quotes...\n');
    const leadershipCards = await sql`
      SELECT card_id, card_type, title, status
      FROM cards
      WHERE card_type = 'quote'
        AND (LOWER(summary) LIKE '%leadership%'
             OR LOWER(summary) LIKE '%weapon%'
             OR LOWER(summary) LIKE '%dominat%')
    `;

    if (leadershipCards.length > 0) {
      console.log(`Found ${leadershipCards.length} potential quote card(s):`);
      leadershipCards.forEach(card => {
        console.log(`  - ${card.card_id} (${card.card_type}, ${card.status})`);
        console.log(`    "${card.title}"`);
      });
    } else {
      console.log('❌ No leadership/weapons quote cards found\n');
    }
  } else {
    console.log(`✅ Found ${cards.length} card(s) mentioning Putin:\n`);
    cards.forEach(card => {
      console.log(`  ✅ ${card.card_id} (${card.card_type}, ${card.status})`);
      console.log(`     "${card.title}"`);
      if (card.summary) {
        console.log(`     Summary: ${card.summary.substring(0, 100)}...`);
      }
      console.log();
    });
  }
}

searchPutinCard().catch(console.error);
