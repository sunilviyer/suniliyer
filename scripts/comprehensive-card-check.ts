import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function comprehensiveCardCheck() {
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('       COMPREHENSIVE CARD-ARTICLE REFERENCE CHECK               ');
  console.log('═══════════════════════════════════════════════════════════════\n');

  // Get all published cards
  const allCards = await sql`
    SELECT card_id, title, card_type, used_in_articles, status
    FROM cards
    WHERE status = 'published'
    ORDER BY card_id
  `;

  console.log(`Total published cards: ${allCards.length}\n`);

  let mismatchCount = 0;
  const mismatches: any[] = [];

  for (const card of allCards) {
    // Find articles that reference this card
    const articles = await sql`
      SELECT slug
      FROM articles
      WHERE yaml_content::text LIKE ${'%' + card.card_id + '%'}
    `;

    const articlesInContent = articles.map((a: any) => a.slug).filter(Boolean);
    const articlesInArray = card.used_in_articles || [];

    // Check for mismatches
    const inContentNotArray = articlesInContent.filter(s => !articlesInArray.includes(s));
    const inArrayNotContent = articlesInArray.filter(s => !articlesInContent.includes(s));

    if (inContentNotArray.length > 0 || inArrayNotContent.length > 0) {
      mismatchCount++;
      mismatches.push({
        cardId: card.card_id,
        title: card.title,
        cardType: card.card_type,
        inContentNotArray,
        inArrayNotContent,
        articlesInContent,
        articlesInArray
      });
    }
  }

  if (mismatchCount === 0) {
    console.log('✅ NO MISMATCHES FOUND! All cards are correctly tracked.\n');
  } else {
    console.log(`⚠️  FOUND ${mismatchCount} CARDS WITH MISMATCHES:\n`);

    mismatches.forEach(m => {
      console.log(`\n📋 ${m.cardId}`);
      console.log(`   Title: ${m.title}`);
      console.log(`   Type: ${m.cardType}`);

      if (m.inContentNotArray.length > 0) {
        console.log(`   ❌ In content but NOT in array: ${JSON.stringify(m.inContentNotArray)}`);
      }

      if (m.inArrayNotContent.length > 0) {
        console.log(`   ⚠️  In array but NOT in content: ${JSON.stringify(m.inArrayNotContent)}`);
      }

      console.log(`   📄 Should be: ${JSON.stringify(m.articlesInContent)}`);
      console.log(`   💾 Currently: ${JSON.stringify(m.articlesInArray)}`);
    });

    console.log('\n\n═══════════════════════════════════════════════════════════════');
    console.log('                   FIXING ALL MISMATCHES                        ');
    console.log('═══════════════════════════════════════════════════════════════\n');

    for (const m of mismatches) {
      await sql`
        UPDATE cards
        SET used_in_articles = ${m.articlesInContent}
        WHERE card_id = ${m.cardId}
      `;
      console.log(`✓ Fixed: ${m.cardId}`);
    }

    console.log(`\n✅ Fixed ${mismatchCount} cards\n`);
  }

  // Also check for cards with invalid types
  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('            CHECKING FOR INVALID CARD TYPES                     ');
  console.log('═══════════════════════════════════════════════════════════════\n');

  const validTypes = [
    'concept', 'example', 'milestone', 'framework', 'resource', 'insight',
    'scenario', 'operational-pattern', 'market-insight', 'technical-concept',
    'article-link', 'trend', 'quote'
  ];

  const invalidTypeCards = allCards.filter((card: any) => !validTypes.includes(card.card_type));

  if (invalidTypeCards.length > 0) {
    console.log(`⚠️  FOUND ${invalidTypeCards.length} CARDS WITH INVALID TYPES:\n`);
    invalidTypeCards.forEach((card: any) => {
      console.log(`   - ${card.card_id}: type="${card.card_type}"`);
    });
  } else {
    console.log('✅ All card types are valid\n');
  }
}

comprehensiveCardCheck().catch(console.error);
