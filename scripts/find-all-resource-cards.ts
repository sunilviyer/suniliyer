import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function findAllResourceCards() {
  console.log('Finding all resource cards in database...\n');

  const resourceCards = await sql`
    SELECT
      card_id,
      title,
      trigger_text,
      status
    FROM cards
    WHERE card_type = 'resource'
    ORDER BY card_id
  `;

  console.log(`Found ${resourceCards.length} resource cards:\n`);
  resourceCards.forEach((card: any) => {
    console.log(`${card.card_id}`);
    console.log(`  Title: ${card.title}`);
    console.log(`  Trigger: ${card.trigger_text || 'NULL'}`);
    console.log(`  Status: ${card.status}`);
    console.log('');
  });
}

findAllResourceCards().catch(console.error);
