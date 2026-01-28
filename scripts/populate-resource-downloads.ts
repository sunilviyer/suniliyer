import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function populateResourceDownloads() {
  console.log('Populating resource card download URLs...\n');

  // Mapping of resource card IDs to their download files
  const resourceMapping: Record<string, { file: string; type: string; formats: string[] }> = {
    'res-accountability-charter': {
      file: 'accountability-charter-template.pdf',
      type: 'template',
      formats: ['PDF']
    },
    'res-agi-signal-noise-framework': {
      file: 'agi-signal-noise-framework.pdf',
      type: 'guide',
      formats: ['PDF']
    },
    'res-ai-compute-governance-checklist': {
      file: 'ai-compute-governance-checklist.pdf',
      type: 'checklist',
      formats: ['PDF']
    },
    'res-ai-impact-identification-framework': {
      file: 'ai-impact-identification-framework.pdf',
      type: 'framework',
      formats: ['PDF']
    },
    'res-ai-incident-response-playbook': {
      file: 'ai-incident-response-playbook.pdf',
      type: 'playbook',
      formats: ['PDF']
    },
    'res-ai-stack-assessment-framework': {
      file: 'ai-stack-assessment-framework.pdf',
      type: 'assessment',
      formats: ['PDF']
    },
    'res-ai-vs-automation-decision-tree': {
      file: 'automation-levels-decision-tree.pdf',
      type: 'decision-tree',
      formats: ['PDF']
    },
    'res-bias-detection-toolkit': {
      file: 'bias-detection-toolkit.pdf',
      type: 'checklist',
      formats: ['PDF']
    },
    'res-compliance-crosswalk': {
      file: 'compliance-crosswalk-builder.pdf',
      type: 'matrix',
      formats: ['PDF']
    },
    'res-data-quality-assessment': {
      file: 'data-quality-assessment.pdf',
      type: 'assessment',
      formats: ['PDF']
    },
    'res-datasheets-for-datasets': {
      file: 'datasheets-for-datasets.pdf',
      type: 'template',
      formats: ['PDF']
    },
    'res-deep-learning-governance-audit': {
      file: 'deep-learning-governance-audit.pdf',
      type: 'checklist',
      formats: ['PDF']
    },
    'res-deepfake-verification-protocols': {
      file: 'deepfake-verification-protocols.pdf',
      type: 'guide',
      formats: ['PDF']
    },
    'res-design-review-checklist': {
      file: 'design-review-checklist.pdf',
      type: 'checklist',
      formats: ['PDF']
    },
    'res-eu-ai-act-classification': {
      file: 'eu-ai-act-classification-walkthrough.pdf',
      type: 'decision-tree',
      formats: ['PDF']
    },
    'res-foundation-model-due-diligence': {
      file: 'foundation-model-due-diligence.pdf',
      type: 'checklist',
      formats: ['PDF']
    },
    'res-genai-governance-implementation': {
      file: 'genai-governance-implementation.pdf',
      type: 'guide',
      formats: ['PDF']
    },
    'res-governance-raci': {
      file: 'governance-raci .pdf',
      type: 'matrix',
      formats: ['PDF']
    },
    'res-hallucination-mitigation': {
      file: 'hallucination-mitigation-checklist.pdf',
      type: 'checklist',
      formats: ['PDF']
    },
    'res-hcaid-process': {
      file: 'hcaid-process-guide.pdf',
      type: 'guide',
      formats: ['PDF']
    },
    'res-high-risk-ai-requirements': {
      file: 'high-risk-ai-requirements-checklist.pdf',
      type: 'checklist',
      formats: ['PDF']
    },
    'res-iso-42001-certification': {
      file: 'iso-42001-certification-journey.pdf',
      type: 'guide',
      formats: ['PDF']
    },
    'res-llm-risk-classification': {
      file: 'llm-risk-classification-framework.pdf',
      type: 'framework',
      formats: ['PDF']
    },
    'res-misinformation-resilience': {
      file: 'misinformation-resilience-toolkit.pdf',
      type: 'checklist',
      formats: ['PDF']
    },
    'res-model-card': {
      file: 'model-card-template.pdf',
      type: 'template',
      formats: ['PDF']
    },
    'res-multimodal-governance': {
      file: 'multimodal-ai-governance-framework.pdf',
      type: 'framework',
      formats: ['PDF']
    },
    'res-nist-core-functions': {
      file: 'nist-ai-rmf-core-functions.pdf',
      type: 'guide',
      formats: ['PDF']
    },
    'res-privacy-by-design': {
      file: 'privacy-by-design-framework.pdf',
      type: 'framework',
      formats: ['PDF']
    },
    'res-seven-pillars-trustworthy-ai': {
      file: 'seven-pillars-trustworthy-ai.pdf',
      type: 'guide',
      formats: ['PDF']
    },
    'res-sustainable-ai-reporting': {
      file: 'sustainable-ai-reporting-framework.pdf',
      type: 'framework',
      formats: ['PDF']
    },
    'res-taxonomy-ai-harms': {
      file: 'taxonomy-of-ai-harms.pdf',
      type: 'guide',
      formats: ['PDF']
    },
    'res-use-case-explainability': {
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

  console.log(`\n✅ Updated ${updated} resource cards`);
  console.log(`⚠️  ${notFound} cards not found in database`);
}

populateResourceDownloads().catch(console.error);
