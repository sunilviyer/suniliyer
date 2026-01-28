import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function fixDuplicateCards() {
  console.log('Fixing duplicate resource cards...\n');

  // res-automation-levels-decision-tree
  const [autoCard] = await sql`
    SELECT full_content FROM cards WHERE card_id = 'res-automation-levels-decision-tree'
  `;

  if (autoCard) {
    let content = autoCard.full_content && typeof autoCard.full_content === 'object'
      ? autoCard.full_content
      : { tags: [] };

    const downloadUrl = '/downloads/resources/automation-levels-decision-tree.pdf';
    const updatedContent = {
      ...content,
      type: 'decision-tree',
      downloadUrl: downloadUrl,
      previewUrl: downloadUrl,
      formats: ['PDF']
    };

    await sql`
      UPDATE cards
      SET full_content = ${JSON.stringify(updatedContent)}::jsonb
      WHERE card_id = 'res-automation-levels-decision-tree'
    `;

    console.log('✓ Updated res-automation-levels-decision-tree');
  }

  // res-taxonomy-of-ai-harms
  const [taxCard] = await sql`
    SELECT full_content FROM cards WHERE card_id = 'res-taxonomy-of-ai-harms'
  `;

  if (taxCard) {
    let content = taxCard.full_content && typeof taxCard.full_content === 'object'
      ? taxCard.full_content
      : { tags: [] };

    const downloadUrl = '/downloads/resources/taxonomy-of-ai-harms.pdf';
    const updatedContent = {
      ...content,
      type: 'guide',
      downloadUrl: downloadUrl,
      previewUrl: downloadUrl,
      formats: ['PDF']
    };

    await sql`
      UPDATE cards
      SET full_content = ${JSON.stringify(updatedContent)}::jsonb
      WHERE card_id = 'res-taxonomy-of-ai-harms'
    `;

    console.log('✓ Updated res-taxonomy-of-ai-harms');
  }

  console.log('\n✅ Fixed 2 duplicate resource cards');
  console.log('📊 Total resource cards with downloads: 33/40');
}

fixDuplicateCards().catch(console.error);
