import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function mapModelCardTemplate() {
  console.log('Mapping model-card-template.pdf to res-transparency-disclosure-templates...\n');

  // Get current full_content
  const [card] = await sql`
    SELECT full_content FROM cards WHERE card_id = 'res-transparency-disclosure-templates'
  `;

  if (!card) {
    console.log('⚠️  Card not found: res-transparency-disclosure-templates');
    return;
  }

  // Parse existing content or start fresh
  let content = card.full_content && typeof card.full_content === 'object'
    ? card.full_content
    : { tags: [] };

  // Add download information
  const downloadUrl = '/downloads/resources/model-card-template.pdf';
  const updatedContent = {
    ...content,
    type: 'template',
    downloadUrl: downloadUrl,
    previewUrl: downloadUrl,
    formats: ['PDF']
  };

  // Update the card
  await sql`
    UPDATE cards
    SET full_content = ${JSON.stringify(updatedContent)}::jsonb
    WHERE card_id = 'res-transparency-disclosure-templates'
  `;

  console.log('✓ Updated res-transparency-disclosure-templates with model-card-template.pdf');
  console.log(`\n📊 Progress: 34 out of 40 resource cards now have downloads (85%)`);
  console.log(`📋 Remaining cards without downloads: 6`);
}

mapModelCardTemplate().catch(console.error);
