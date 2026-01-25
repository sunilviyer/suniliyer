import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function findCircularReferences() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║         FINDING CIRCULAR REFERENCES IN RESOURCE CARDS        ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  // Get all resource cards with learn_more links
  const cards = await sql`
    SELECT card_id, title, learn_more, used_in_articles
    FROM cards
    WHERE card_type = 'resource'
      AND learn_more IS NOT NULL
      AND used_in_articles IS NOT NULL
    ORDER BY card_id;
  `;

  const circularRefs: any[] = [];

  for (const card of cards) {
    const learnMore = card.learn_more as string;
    const usedInArticles = card.used_in_articles as string[];

    // Extract slug from learn_more (remove path prefix if exists)
    const learnMoreSlug = learnMore.replace(/^\/?(history|terminology|risk|responsibility|future)\//, '');

    // Check if learn_more points to any article it's used in
    const hasCircular = usedInArticles.some(article => article === learnMoreSlug);

    if (hasCircular) {
      circularRefs.push({
        card_id: card.card_id,
        title: card.title,
        learn_more: learnMore,
        used_in: usedInArticles,
      });
    }
  }

  if (circularRefs.length === 0) {
    console.log('✅ No circular references found!\n');
    return;
  }

  console.log(`❌ Found ${circularRefs.length} circular references:\n`);
  console.log('═══════════════════════════════════════════════════════════════\n');

  for (const ref of circularRefs) {
    console.log(`Card: ${ref.card_id}`);
    console.log(`Title: ${ref.title}`);
    console.log(`Learn More: ${ref.learn_more}`);
    console.log(`Used In Articles: ${ref.used_in.join(', ')}`);
    console.log(`❌ CIRCULAR: Points back to article(s) it appears in\n`);
  }

  console.log('═══════════════════════════════════════════════════════════════\n');
}

findCircularReferences().catch(console.error);
