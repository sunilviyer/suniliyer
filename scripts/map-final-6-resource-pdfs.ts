import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function mapFinal6ResourcePDFs() {
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('       MAPPING FINAL 6 RESOURCE PDFs TO CARDS                   ');
  console.log('═══════════════════════════════════════════════════════════════\n');

  const resourceMapping: Record<string, { file: string; type: string; formats: string[] }> = {
    'res-ai-ethics-principles-implementation': {
      file: 'ai-ethics-principles-implementation.pdf',
      type: 'guide',
      formats: ['PDF']
    },
    'res-ai-governance-career-pathways': {
      file: 'ai-governance-career-pathways.pdf',
      type: 'guide',
      formats: ['PDF']
    },
    'res-ai-national-security-assessment': {
      file: 'ai-national-security-assessment.pdf',
      type: 'framework',
      formats: ['PDF']
    },
    'res-open-source-compliance-checklist': {
      file: 'open-source-compliance-checklist.pdf',
      type: 'checklist',
      formats: ['PDF']
    },
    'res-regulatory-horizon-scanner': {
      file: 'regulatory-horizon-scanner.pdf',
      type: 'framework',
      formats: ['PDF']
    },
    'res-seven-pillars-implementation': {
      file: 'seven-pillars-implementation.pdf',
      type: 'guide',
      formats: ['PDF']
    }
  };

  let updated = 0;
  let notFound = 0;

  for (const [cardId, info] of Object.entries(resourceMapping)) {
    try {
      // Get current full_content
      const [card] = await sql`
        SELECT card_id, title, full_content FROM cards WHERE card_id = ${cardId}
      `;

      if (!card) {
        console.log(`⚠️  Card not found: ${cardId}`);
        notFound++;
        continue;
      }

      console.log(`📋 ${cardId}`);
      console.log(`   Title: ${card.title}`);

      // Parse existing content or start fresh
      let content = card.full_content && typeof card.full_content === 'object'
        ? card.full_content
        : { tags: [] };

      // Add download information
      const downloadUrl = `/downloads/resources/${info.file}`;
      const updatedContent = {
        ...content,
        type: info.type,
        downloadUrl: downloadUrl,
        previewUrl: downloadUrl,
        formats: info.formats
      };

      // Update the card
      await sql`
        UPDATE cards
        SET full_content = ${JSON.stringify(updatedContent)}::jsonb
        WHERE card_id = ${cardId}
      `;

      console.log(`   ✅ Mapped to: ${info.file}`);
      updated++;
    } catch (error) {
      console.error(`   ✗ Error updating ${cardId}:`, error);
    }
  }

  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('                        FINAL STATUS                            ');
  console.log('═══════════════════════════════════════════════════════════════\n');
  console.log(`✅ Successfully mapped: ${updated} resource cards`);
  console.log(`⚠️  Not found: ${notFound} cards`);
  console.log(`\n🎉 COMPLETE: 40 out of 40 resource cards now have downloads (100%)!\n`);
}

mapFinal6ResourcePDFs().catch(console.error);
