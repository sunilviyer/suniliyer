import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function checkResourceCards() {
  console.log('Checking resource cards in database...\n');

  const resourceCards = await sql`
    SELECT
      card_id,
      card_type,
      title,
      summary,
      full_content
    FROM cards
    WHERE card_type = 'resource'
    ORDER BY card_id
    LIMIT 10
  `;

  console.log(`Found ${resourceCards.length} resource cards:`);
  resourceCards.forEach((card: any) => {
    console.log(`\n${card.card_id}:`);
    console.log(`  Title: ${card.title}`);
    console.log(`  Type: ${card.card_type}`);

    if (card.full_content) {
      const content = typeof card.full_content === 'string'
        ? JSON.parse(card.full_content)
        : card.full_content;
      console.log(`  Has downloadUrl: ${!!content.downloadUrl}`);
      console.log(`  Has previewUrl: ${!!content.previewUrl}`);
      console.log(`  Has formats: ${!!content.formats}`);
      console.log(`  Content keys: ${Object.keys(content).join(', ')}`);
    }
  });
}

checkResourceCards().catch(console.error);
