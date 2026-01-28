import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function populateRemainingResourceDownloads() {
  console.log('Populating remaining resource card download URLs...\n');

  // Corrected mapping with actual card IDs from database
  const resourceMapping: Record<string, { file: string; type: string; formats: string[] }> = {
    'res-algorithmic-bias-detection': {
      file: 'bias-detection-toolkit.pdf',
      type: 'checklist',
      formats: ['PDF']
    },
    'res-compliance-crosswalk-builder': {
      file: 'compliance-crosswalk-builder.pdf',
      type: 'matrix',
      formats: ['PDF']
    },
    'res-hallucination-mitigation-checklist': {
      file: 'hallucination-mitigation-checklist.pdf',
      type: 'checklist',
      formats: ['PDF']
    },
    'res-hcai-design-process': {
      file: 'hcaid-process-guide.pdf',
      type: 'guide',
      formats: ['PDF']
    },
    'res-iso-42001-certification-journey': {
      file: 'iso-42001-certification-journey.pdf',
      type: 'guide',
      formats: ['PDF']
    },
    'res-llm-risk-classification-framework': {
      file: 'llm-risk-classification-framework.pdf',
      type: 'framework',
      formats: ['PDF']
    },
    'res-misinformation-resilience-toolkit': {
      file: 'misinformation-resilience-toolkit.pdf',
      type: 'checklist',
      formats: ['PDF']
    },
    'res-multimodal-ai-governance': {
      file: 'multimodal-ai-governance-framework.pdf',
      type: 'framework',
      formats: ['PDF']
    },
    'res-nist-ai-rmf-core-functions': {
      file: 'nist-ai-rmf-core-functions.pdf',
      type: 'guide',
      formats: ['PDF']
    },
    'res-privacy-by-design-framework': {
      file: 'privacy-by-design-framework.pdf',
      type: 'framework',
      formats: ['PDF']
    },
    'res-sustainable-ai-reporting-framework': {
      file: 'sustainable-ai-reporting-framework.pdf',
      type: 'framework',
      formats: ['PDF']
    },
    'res-use-case-explainability-assessment': {
      file: 'use-case-explainability-assessment.pdf',
      type: 'assessment',
      formats: ['PDF']
    }
  };

  let updated = 0;
  let notFound = 0;

  for (const [cardId, info] of Object.entries(resourceMapping)) {
    try {
      // Get current full_content
      const [card] = await sql`
        SELECT full_content FROM cards WHERE card_id = ${cardId}
      `;

      if (!card) {
        console.log(`⚠️  Card not found: ${cardId}`);
        notFound++;
        continue;
      }

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

      console.log(`✓ Updated ${cardId}`);
      updated++;
    } catch (error) {
      console.error(`✗ Error updating ${cardId}:`, error);
    }
  }

  console.log(`\n✅ Updated ${updated} additional resource cards`);
  console.log(`⚠️  ${notFound} cards not found in database`);
  console.log(`\n📊 Total resource cards with downloads: ${19 + updated}`);
}

populateRemainingResourceDownloads().catch(console.error);
