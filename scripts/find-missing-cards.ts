import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function findMissingCards() {
  const missingCardIds = [
    'quote-vladimir-putin-leadership',
    'insight-nvidia-market-share',
    'fw-us-export-controls',
    'ex-google-project-maven',
    'fw-white-house-eo',
    'fw-china-ai-governance'
  ];

  console.log('═══════════════════════════════════════════════════════════════');
  console.log('              MISSING CARDS ERROR INVESTIGATION                 ');
  console.log('═══════════════════════════════════════════════════════════════\n');

  console.log('Checking if these cards exist in database:\n');

  for (const cardId of missingCardIds) {
    const cards = await sql`
      SELECT card_id, title, card_type, status
      FROM cards
      WHERE card_id = ${cardId}
    `;

    if (cards.length === 0) {
      console.log(`❌ ${cardId} - NOT FOUND IN DATABASE`);
    } else {
      const card = cards[0];
      const statusIcon = card.status === 'draft' ? '⚠️  DRAFT' : '✅ PUBLISHED';
      console.log(`${statusIcon}: ${cardId}`);
      console.log(`   Title: ${card.title}`);
      console.log(`   Type: ${card.card_type}`);
      console.log(`   Status: ${card.status}`);
    }
    console.log('');
  }

  // Also check for any articles that might have inline card references
  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('Searching for articles with these missing card references...\n');

  const allArticles = await sql`
    SELECT article_id, slug, title, yaml_content
    FROM articles
    WHERE
      yaml_content::text LIKE '%quote-vladimir-putin%'
      OR yaml_content::text LIKE '%insight-nvidia%'
      OR yaml_content::text LIKE '%fw-us-export%'
      OR yaml_content::text LIKE '%ex-google-project-maven%'
      OR yaml_content::text LIKE '%fw-white-house-eo%'
      OR yaml_content::text LIKE '%fw-china-ai-governance%'
  `;

  if (allArticles.length > 0) {
    console.log(`Found ${allArticles.length} articles with missing card references:\n`);
    allArticles.forEach((article: any) => {
      console.log(`📄 ${article.slug}`);
      console.log(`   Title: ${article.title}`);

      // Count how many missing cards are in this article
      const content = article.yaml_content?.content || '';
      missingCardIds.forEach(cardId => {
        if (content.includes(cardId)) {
          console.log(`   - References: ${cardId}`);
        }
      });
      console.log('');
    });
  }
}

findMissingCards().catch(console.error);
