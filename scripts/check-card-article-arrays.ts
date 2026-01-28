import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function checkCardArticleArrays() {
  const cardIds = [
    'quote-vladimir-putin-leadership',
    'insight-nvidia-market-share',
    'fw-us-export-controls',
    'ex-google-project-maven',
    'fw-white-house-eo',
    'fw-china-ai-governance'
  ];

  console.log('═══════════════════════════════════════════════════════════════');
  console.log('     CHECKING used_in_articles ARRAYS FOR PROBLEMATIC CARDS     ');
  console.log('═══════════════════════════════════════════════════════════════\n');

  for (const cardId of cardIds) {
    const [card] = await sql`
      SELECT card_id, title, used_in_articles, status
      FROM cards
      WHERE card_id = ${cardId}
    `;

    if (card) {
      console.log(`${card.card_id}:`);
      console.log(`  Title: ${card.title}`);
      console.log(`  Status: ${card.status}`);
      console.log(`  used_in_articles: ${JSON.stringify(card.used_in_articles)}`);
      console.log('');
    }
  }

  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('     TESTING getCardsByArticle FOR ai-national-security         ');
  console.log('═══════════════════════════════════════════════════════════════\n');

  const cardsForArticle = await sql`
    SELECT card_id, title, status
    FROM cards
    WHERE 'ai-national-security' = ANY(used_in_articles)
    AND status = 'published'
    ORDER BY card_id
  `;

  console.log(`Found ${cardsForArticle.length} cards for ai-national-security:\n`);
  cardsForArticle.forEach((card: any) => {
    console.log(`  - ${card.card_id} (${card.title})`);
  });
}

checkCardArticleArrays().catch(console.error);
