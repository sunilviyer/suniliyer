import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function checkUnmappedPDFs() {
  console.log('Checking for unmapped PDFs...\n');

  // Get all resource cards with their download URLs
  const cards = await sql`
    SELECT card_id, title, full_content
    FROM cards
    WHERE card_type = 'resource'
    ORDER BY card_id
  `;

  // Extract all PDF filenames from download URLs
  const mappedPDFs = new Set<string>();
  cards.forEach((card: any) => {
    if (card.full_content?.downloadUrl) {
      const filename = card.full_content.downloadUrl.split('/').pop();
      if (filename) {
        mappedPDFs.add(filename);
      }
    }
  });

  console.log(`Found ${mappedPDFs.size} PDFs mapped to cards\n`);

  // All PDFs in the folder
  const allPDFs = [
    'accountability-charter-template.pdf',
    'agi-signal-noise-framework.pdf',
    'ai-compute-governance-checklist.pdf',
    'ai-impact-identification-framework.pdf',
    'ai-incident-response-playbook.pdf',
    'ai-stack-assessment-framework.pdf',
    'automation-levels-decision-tree.pdf',
    'bias-detection-toolkit.pdf',
    'compliance-crosswalk-builder.pdf',
    'data-quality-assessment.pdf',
    'datasheets-for-datasets.pdf',
    'deep-learning-governance-audit.pdf',
    'deepfake-verification-protocols.pdf',
    'design-review-checklist.pdf',
    'eu-ai-act-classification-walkthrough.pdf',
    'foundation-model-due-diligence.pdf',
    'genai-governance-implementation.pdf',
    'governance-raci.pdf',
    'hallucination-mitigation-checklist.pdf',
    'hcaid-process-guide.pdf',
    'high-risk-ai-requirements-checklist.pdf',
    'iso-42001-certification-journey.pdf',
    'llm-risk-classification-framework.pdf',
    'misinformation-resilience-toolkit.pdf',
    'model-card-template.pdf',
    'multimodal-ai-governance-framework.pdf',
    'nist-ai-rmf-core-functions.pdf',
    'privacy-by-design-framework.pdf',
    'seven-pillars-trustworthy-ai.pdf',
    'sustainable-ai-reporting-framework.pdf',
    'taxonomy-of-ai-harms.pdf',
    'use-case-explainability-assessment.pdf'
  ];

  // Find unmapped PDFs
  const unmappedPDFs = allPDFs.filter(pdf => !mappedPDFs.has(pdf));

  if (unmappedPDFs.length > 0) {
    console.log(`📄 Unmapped PDFs (${unmappedPDFs.length}):`);
    unmappedPDFs.forEach(pdf => console.log(`  - ${pdf}`));
  } else {
    console.log('✅ All PDFs are mapped to cards');
  }

  // Also show cards without downloads
  console.log('\n📋 Resource cards without downloads:');
  const cardsWithoutDownloads = cards.filter((card: any) => !card.full_content?.downloadUrl);
  cardsWithoutDownloads.forEach((card: any) => {
    console.log(`  - ${card.card_id}`);
    console.log(`    Title: ${card.title}`);
  });

  console.log(`\n📊 Summary:`);
  console.log(`  Total PDFs: ${allPDFs.length}`);
  console.log(`  Mapped PDFs: ${mappedPDFs.size}`);
  console.log(`  Unmapped PDFs: ${unmappedPDFs.length}`);
  console.log(`  Cards without downloads: ${cardsWithoutDownloads.length}`);
}

checkUnmappedPDFs().catch(console.error);
