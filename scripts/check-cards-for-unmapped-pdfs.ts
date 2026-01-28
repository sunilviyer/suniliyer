import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function checkCardsForUnmappedPDFs() {
  console.log('Checking if unmapped PDFs could match any cards without downloads...\n');
  console.log('Unmapped PDFs:');
  console.log('  1. governance-raci.pdf');
  console.log('  2. model-card-template.pdf\n');

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
      SELECT card_id, title, trigger_text, summary, full_content
      FROM cards
      WHERE card_id = ${cardId}
    `;

    if (card) {
      console.log(`\n${card.card_id}`);
      console.log(`  Title: ${card.title}`);
      console.log(`  Trigger: ${card.trigger_text || 'NULL'}`);
      console.log(`  Summary: ${card.summary?.substring(0, 150) || 'NULL'}...`);

      const content = card.full_content || {};
      console.log(`  Type: ${content.type || 'NULL'}`);
      console.log(`  Tags: ${content.tags?.join(', ') || 'NULL'}`);
    }
  }

  console.log('\n\n🤔 Potential matches:');
  console.log('  governance-raci.pdf → res-ai-governance-career-pathways?');
  console.log('  model-card-template.pdf → res-transparency-disclosure-templates?');
}

checkCardsForUnmappedPDFs().catch(console.error);
