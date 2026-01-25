import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

// Cards with circular references - remove learn_more
const circularRefCards = [
  'res-algorithmic-bias-detection',
  'res-foundation-model-due-diligence',
  'res-genai-governance-implementation',
  'res-llm-risk-classification-framework',
  'res-use-case-explainability-assessment',
  'res-hallucination-mitigation-checklist',
];

async function fixCircularReferences() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║         REMOVING CIRCULAR REFERENCES (Setting NULL)          ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  let successCount = 0;
  let errorCount = 0;

  for (const cardId of circularRefCards) {
    try {
      const result = await sql`
        UPDATE cards
        SET learn_more = NULL
        WHERE card_id = ${cardId}
        RETURNING card_id, title, learn_more;
      `;

      if (result.length > 0) {
        console.log(`✅ ${cardId}`);
        console.log(`   Title: ${result[0].title}`);
        console.log(`   learn_more: ${result[0].learn_more || 'NULL (removed)'}\n`);
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
  console.log(`\n✅ Successfully removed circular references: ${successCount}`);
  console.log(`❌ Errors: ${errorCount}\n`);
}

fixCircularReferences().catch(console.error);
