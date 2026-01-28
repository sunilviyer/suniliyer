import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function checkResourceUsage() {
  console.log('Checking which articles use these 7 resource cards...\n');

  const cardIds = [
    'res-ai-ethics-principles-implementation',
    'res-ai-governance-career-pathways',
    'res-ai-national-security-assessment',
    'res-open-source-compliance-checklist',
    'res-regulatory-horizon-scanner',
    'res-seven-pillars-implementation',
    'res-transparency-disclosure-templates'
  ];

  for (const cardId of cardIds) {
    const [card] = await sql`
      SELECT card_id, title, used_in_articles, status
      FROM cards
      WHERE card_id = ${cardId}
    `;

    if (card) {
      console.log(`${card.card_id}`);
      console.log(`  Title: ${card.title}`);
      console.log(`  Status: ${card.status}`);
      console.log(`  Used in articles: ${card.used_in_articles?.length || 0}`);
      if (card.used_in_articles && card.used_in_articles.length > 0) {
        card.used_in_articles.forEach((slug: string) => {
          console.log(`    - ${slug}`);
        });
      } else {
        console.log(`    (Not used in any articles)`);
      }
      console.log('');
    }
  }
}

checkResourceUsage().catch(console.error);
