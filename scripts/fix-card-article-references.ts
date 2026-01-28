import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function fixCardArticleReferences() {
  const problematicCardIds = [
    'quote-vladimir-putin-leadership',
    'insight-nvidia-market-share',
    'fw-us-export-controls',
    'ex-google-project-maven',
    'fw-white-house-eo',
    'fw-china-ai-governance'
  ];

  console.log('═══════════════════════════════════════════════════════════════');
  console.log('       FIXING CARD-ARTICLE REFERENCE MISMATCHES                 ');
  console.log('═══════════════════════════════════════════════════════════════\n');

  for (const cardId of problematicCardIds) {
    console.log(`\n📋 Processing: ${cardId}`);
    console.log('─'.repeat(63));

    // Get current used_in_articles
    const [card] = await sql`
      SELECT card_id, title, used_in_articles
      FROM cards
      WHERE card_id = ${cardId}
    `;

    if (!card) {
      console.log(`❌ Card not found in database!`);
      continue;
    }

    console.log(`   Current used_in_articles: ${JSON.stringify(card.used_in_articles)}`);

    // Find all articles that reference this card in their content
    const articles = await sql`
      SELECT slug, title, yaml_content
      FROM articles
      WHERE yaml_content::text LIKE ${'%' + cardId + '%'}
    `;

    const articlesWithCard = articles
      .map((article: any) => article.slug)
      .filter(Boolean);

    console.log(`   Found in ${articlesWithCard.length} article(s): ${JSON.stringify(articlesWithCard)}`);

    // Check if they match
    const currentArray = card.used_in_articles || [];
    const needsUpdate = articlesWithCard.some(slug => !currentArray.includes(slug)) ||
                        currentArray.some(slug => !articlesWithCard.includes(slug));

    if (needsUpdate) {
      console.log(`   ⚠️  MISMATCH DETECTED - Updating...`);

      await sql`
        UPDATE cards
        SET used_in_articles = ${articlesWithCard}
        WHERE card_id = ${cardId}
      `;

      console.log(`   ✅ Updated used_in_articles to: ${JSON.stringify(articlesWithCard)}`);
    } else {
      console.log(`   ✓ Arrays match - no update needed`);
    }
  }

  console.log('\n\n═══════════════════════════════════════════════════════════════');
  console.log('                        SUMMARY                                 ');
  console.log('═══════════════════════════════════════════════════════════════\n');
  console.log('Fixed card-article reference mismatches.');
  console.log('These cards should now load properly in all articles.\n');
}

fixCardArticleReferences().catch(console.error);
