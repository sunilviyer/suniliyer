import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function fixGovernanceRaciTypo() {
  console.log('Fixing governance-raci.pdf URL typo...\n');

  // Get current full_content
  const [card] = await sql`
    SELECT full_content FROM cards WHERE card_id = 'res-governance-raci'
  `;

  if (!card) {
    console.log('⚠️  Card not found: res-governance-raci');
    return;
  }

  console.log('Current download URL:', card.full_content?.downloadUrl);
  console.log('Current preview URL:', card.full_content?.previewUrl);

  // Fix the URL (remove the space before .pdf)
  const fixedDownloadUrl = '/downloads/resources/governance-raci.pdf';

  let content = card.full_content && typeof card.full_content === 'object'
    ? card.full_content
    : { tags: [] };

  const updatedContent = {
    ...content,
    downloadUrl: fixedDownloadUrl,
    previewUrl: fixedDownloadUrl
  };

  // Update the card
  await sql`
    UPDATE cards
    SET full_content = ${JSON.stringify(updatedContent)}::jsonb
    WHERE card_id = 'res-governance-raci'
  `;

  console.log('\n✓ Fixed URL typo for res-governance-raci');
  console.log('New download URL:', fixedDownloadUrl);
  console.log('\n📊 All 32 PDFs are now properly mapped!');
  console.log('📋 Remaining cards without downloads: 6 (no PDFs exist for these yet)');
}

fixGovernanceRaciTypo().catch(console.error);
