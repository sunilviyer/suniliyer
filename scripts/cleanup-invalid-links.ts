import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function cleanupInvalidLinks() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║         REMOVING INVALID LEARN_MORE LINKS                    ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  // First, fix the typo: environmental-cost-of-ai should be environmental-cost-ai
  console.log('1️⃣  Fixing typo: environmental-cost-of-ai → environmental-cost-ai\n');

  const typoFix = await sql`
    UPDATE cards
    SET learn_more = 'environmental-cost-ai'
    WHERE card_id = 'res-sustainable-ai-reporting-framework'
    RETURNING card_id, title, learn_more;
  `;

  if (typoFix.length > 0) {
    console.log(`✅ ${typoFix[0].card_id}`);
    console.log(`   Updated to: ${typoFix[0].learn_more}\n`);
  }

  console.log('═══════════════════════════════════════════════════════════════\n');
  console.log('2️⃣  Removing learn_more links that point to non-existent articles\n');

  // Cards with links to non-existent articles
  const invalidCards = [
    'res-ai-compute-governance-checklist',      // → ai-infrastructure (doesn't exist)
    'res-ai-impact-identification-framework',   // → ai-impact-assessment-guide (doesn't exist)
    'res-data-quality-assessment',              // → data-quality-for-ai (doesn't exist)
  ];

  let successCount = 0;
  let errorCount = 0;

  for (const cardId of invalidCards) {
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
  console.log(`\n✅ Typo fixed: 1`);
  console.log(`✅ Invalid links removed: ${successCount}`);
  console.log(`❌ Errors: ${errorCount}`);
  console.log(`\n📊 TOTAL CLEANED UP: ${successCount + 1}\n`);
}

cleanupInvalidLinks().catch(console.error);
