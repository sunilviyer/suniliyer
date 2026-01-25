import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

// Map of card_id to correct download_url
const corrections = {
  'res-algorithmic-bias-detection': '/downloads/resources/bias-detection-toolkit.pdf',
  'res-data-quality-assessment': '/downloads/resources/data-quality-assessment.pdf',
  'res-foundation-model-due-diligence': '/downloads/resources/foundation-model-due-diligence.pdf',
  'res-genai-governance-implementation': '/downloads/resources/genai-governance-implementation.pdf',
  'res-sustainable-ai-reporting-framework': '/downloads/resources/sustainable-ai-reporting-framework.pdf',
  'res-use-case-explainability-assessment': '/downloads/resources/use-case-explainability-assessment.pdf',
};

async function fixDownloadUrls() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║         FIXING DOWNLOAD URLs TO MATCH ACTUAL FILES           ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  let successCount = 0;
  let errorCount = 0;

  for (const [cardId, correctUrl] of Object.entries(corrections)) {
    try {
      const result = await sql`
        UPDATE cards
        SET download_url = ${correctUrl}
        WHERE card_id = ${cardId}
        RETURNING card_id, title, download_url;
      `;

      if (result.length > 0) {
        console.log(`✅ ${cardId}`);
        console.log(`   Title: ${result[0].title}`);
        console.log(`   NEW URL: ${result[0].download_url}\n`);
        successCount++;
      } else {
        console.log(`⚠️  ${cardId} - Card not found\n`);
        errorCount++;
      }
    } catch (error) {
      console.log(`❌ ${cardId} - Error: ${error}\n`);
      errorCount++;
    }
  }

  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log(`\n✅ Successfully fixed: ${successCount} download URLs`);
  console.log(`❌ Errors: ${errorCount}\n`);
}

fixDownloadUrls().catch(console.error);
