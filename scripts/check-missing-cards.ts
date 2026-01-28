import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function checkCards() {
  const missingCardIds = [
    'ex-eu-ai-act', 'ex-amazon-hiring', 'ex-uber-arizona-fatality',
    'ex-nyc-local-law-144', 'ex-google-project-maven', 'ex-deepmind-alphafold',
    'fw-nist-ai-rmf', 'fw-eu-ai-act', 'fw-iso-42001', 'fw-gdpr-article-22',
    'fw-white-house-eo', 'fw-china-ai-governance', 'fw-singapore-model',
    'fw-us-export-controls', 'res-ai-impact-identification-framework',
    'res-datasheets-for-datasets', 'res-ai-stack-assessment-framework',
    'sc-transparent-vs-opaque-loans', 'pattern-tiered-explanation-system',
    'trend-customer-service-collab', 'concept-narrow-ai',
    'quote-vladimir-putin-leadership', 'insight-nvidia-market-share',
    'ms-alphafold-2020'
  ];

  console.log('Checking cards from bug report...\n');

  for (const cardId of missingCardIds) {
    const [card] = await sql`
      SELECT card_id, card_type, status, used_in_articles
      FROM cards
      WHERE card_id = ${cardId}
    `;

    if (card) {
      console.log(`✓ ${cardId}: EXISTS (status=${card.status}, articles=${card.used_in_articles.length})`);
    } else {
      console.log(`✗ ${cardId}: MISSING`);
    }
  }
}

checkCards().catch(console.error);
