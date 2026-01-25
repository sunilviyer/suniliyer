import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function fixAllLearnMoreLinks() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║         FIXING ALL LEARN_MORE LINKS (Remove Path Prefix)    ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  // Get all cards with learn_more that has a path prefix
  const cards = await sql`
    SELECT card_id, title, learn_more, used_in_articles
    FROM cards
    WHERE card_type = 'resource'
      AND learn_more IS NOT NULL
      AND learn_more LIKE '/%'
    ORDER BY card_id;
  `;

  console.log(`Found ${cards.length} cards with path prefix in learn_more\n`);
  console.log('═══════════════════════════════════════════════════════════════\n');

  let successCount = 0;
  let errorCount = 0;

  for (const card of cards) {
    const oldLearnMore = card.learn_more as string;

    // Remove path prefix (e.g., "/history/ai-family-tree" -> "ai-family-tree")
    const newLearnMore = oldLearnMore.replace(/^\/?(history|terminology|risk|risks|responsibility|future)\//, '');

    try {
      const result = await sql`
        UPDATE cards
        SET learn_more = ${newLearnMore}
        WHERE card_id = ${card.card_id}
        RETURNING card_id, learn_more;
      `;

      console.log(`✅ ${card.card_id}`);
      console.log(`   Title: ${card.title}`);
      console.log(`   OLD: ${oldLearnMore}`);
      console.log(`   NEW: ${result[0].learn_more}\n`);
      successCount++;
    } catch (error) {
      console.log(`❌ ${card.card_id} - Error: ${error}\n`);
      errorCount++;
    }
  }

  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log(`\n✅ Successfully fixed: ${successCount} cards`);
  console.log(`❌ Errors: ${errorCount}\n`);
}

fixAllLearnMoreLinks().catch(console.error);
