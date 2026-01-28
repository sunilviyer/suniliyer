import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function checkSevenPillarsUsage() {
  console.log('Checking seven-pillars-trustworthy-ai.pdf usage...\n');

  const cards = await sql`
    SELECT card_id, title, full_content
    FROM cards
    WHERE card_type = 'resource'
    AND full_content::text LIKE '%seven-pillars%'
  `;

  console.log(`Found ${cards.length} cards using seven-pillars PDF:\n`);
  cards.forEach((card: any) => {
    console.log(`${card.card_id}`);
    console.log(`  Title: ${card.title}`);
    console.log(`  Download: ${card.full_content?.downloadUrl || 'NONE'}`);
    console.log('');
  });

  // Also check the specific card that should have it
  console.log('Checking res-seven-pillars-implementation specifically:');
  const [specificCard] = await sql`
    SELECT card_id, title, full_content
    FROM cards
    WHERE card_id = 'res-seven-pillars-implementation'
  `;

  if (specificCard) {
    console.log(`  Card ID: ${specificCard.card_id}`);
    console.log(`  Title: ${specificCard.title}`);
    console.log(`  Has download: ${!!specificCard.full_content?.downloadUrl}`);
    console.log(`  Download URL: ${specificCard.full_content?.downloadUrl || 'NONE'}`);
  }
}

checkSevenPillarsUsage().catch(console.error);
