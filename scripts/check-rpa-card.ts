import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function checkRPACard() {
  console.log('Checking RPA vs AI card details...\n');

  const [card] = await sql`
    SELECT card_id, card_type, title, trigger_text, summary, full_content, status
    FROM cards
    WHERE card_id = 'concept-rpa-vs-ai'
  `;

  if (card) {
    console.log(`Card ID: ${card.card_id}`);
    console.log(`Type: ${card.card_type}`);
    console.log(`Status: ${card.status}`);
    console.log(`Title: ${card.title}`);
    console.log(`Trigger: ${card.trigger_text}`);
    console.log(`\nSummary (${card.summary?.length || 0} chars):`);
    console.log(card.summary);
    console.log(`\nFull Content (${card.full_content?.length || 0} chars):`);
    console.log(card.full_content || 'NULL');
  } else {
    console.log('Card not found!');
  }
}

checkRPACard().catch(console.error);
