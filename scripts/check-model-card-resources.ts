import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function checkModelCardResources() {
  const cards = await sql`
    SELECT card_id, title, full_content
    FROM cards
    WHERE card_type = 'resource'
    AND (
      title ILIKE '%model card%'
      OR card_id LIKE '%model-card%'
      OR full_content::text LIKE '%model-card-template%'
    )
  `;

  console.log(`Found ${cards.length} model-card related resource cards:\n`);
  cards.forEach((card: any) => {
    console.log(`${card.card_id}`);
    console.log(`  Title: ${card.title}`);
    console.log(`  Download: ${card.full_content?.downloadUrl || 'NONE'}`);
    console.log('');
  });
}

checkModelCardResources().catch(console.error);
