import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function checkThreeCards() {
  const cards = await sql`
    SELECT card_id, title, full_content
    FROM cards
    WHERE card_type = 'resource'
    AND (
      card_id LIKE '%privacy%' OR
      card_id LIKE '%taxonomy%' OR
      card_id LIKE '%automation%'
    )
    ORDER BY card_id
  `;

  console.log('Checking these resources:\n');
  cards.forEach((card: any) => {
    const content = typeof card.full_content === 'object' ? card.full_content : {};
    console.log(`${card.card_id}:`);
    console.log(`  Title: ${card.title}`);
    console.log(`  Has downloadUrl: ${!!content.downloadUrl}`);
    if (content.downloadUrl) {
      console.log(`  URL: ${content.downloadUrl}`);
    }
    console.log('');
  });
}

checkThreeCards().catch(console.error);
