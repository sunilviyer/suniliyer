import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function publishDraftCards() {
  console.log('Publishing draft cards...\n');

  // Publish all draft cards that are referenced in the bug report
  const result = await sql`
    UPDATE cards
    SET status = 'published'
    WHERE status = 'draft'
    AND card_id IN (
      'ex-eu-ai-act',
      'ex-nyc-local-law-144',
      'ex-deepmind-alphafold',
      'fw-nist-ai-rmf',
      'fw-iso-42001',
      'fw-white-house-eo',
      'fw-china-ai-governance',
      'fw-singapore-model',
      'ms-alphafold-2020'
    )
    RETURNING card_id, card_type
  `;

  console.log(`✓ Published ${result.length} cards:\n`);
  result.forEach(card => {
    console.log(`  - ${card.card_id} (${card.card_type})`);
  });

  console.log('\n✅ All draft cards published!');
}

publishDraftCards().catch(console.error);
