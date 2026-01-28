import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function investigateGovernanceRaci() {
  console.log('Investigating governance-raci.pdf usage...\n');

  // Check if any card currently uses it
  const cardsUsingRaci = await sql`
    SELECT card_id, title, full_content
    FROM cards
    WHERE card_type = 'resource'
    AND full_content::text LIKE '%governance-raci%'
  `;

  console.log(`Cards currently using governance-raci.pdf: ${cardsUsingRaci.length}\n`);

  if (cardsUsingRaci.length > 0) {
    cardsUsingRaci.forEach((card: any) => {
      console.log(`  - ${card.card_id}: ${card.title}`);
    });
  }

  // Check governance-related cards
  console.log('\nAll governance-related resource cards:');
  const governanceCards = await sql`
    SELECT card_id, title, full_content
    FROM cards
    WHERE card_type = 'resource'
    AND (
      title ILIKE '%governance%'
      OR card_id LIKE '%governance%'
    )
    ORDER BY card_id
  `;

  governanceCards.forEach((card: any) => {
    console.log(`\n${card.card_id}`);
    console.log(`  Title: ${card.title}`);
    console.log(`  Has download: ${!!card.full_content?.downloadUrl}`);
    if (card.full_content?.downloadUrl) {
      console.log(`  Download: ${card.full_content.downloadUrl}`);
    }
  });

  // Check the 6 remaining cards without downloads
  console.log('\n\nRemaining 6 cards without downloads:');
  const remainingCards = [
    'res-ai-ethics-principles-implementation',
    'res-ai-governance-career-pathways',
    'res-ai-national-security-assessment',
    'res-open-source-compliance-checklist',
    'res-regulatory-horizon-scanner',
    'res-seven-pillars-implementation'
  ];

  for (const cardId of remainingCards) {
    const [card] = await sql`
      SELECT card_id, title, summary
      FROM cards
      WHERE card_id = ${cardId}
    `;

    if (card) {
      console.log(`\n${card.card_id}`);
      console.log(`  ${card.title}`);
      const summary = card.summary?.substring(0, 100) || '';
      console.log(`  ${summary}...`);
    }
  }

  console.log('\n\n🤔 Analysis:');
  console.log('RACI = Responsible, Accountable, Consulted, Informed');
  console.log('This is a role clarity framework for governance.');
  console.log('\nPossible matches from remaining cards:');
  console.log('  - res-ai-governance-career-pathways? (about roles/careers)');
}

investigateGovernanceRaci().catch(console.error);
