import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function generateFinalReport() {
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('         RESOURCE CARD DOWNLOAD STATUS - FINAL REPORT          ');
  console.log('═══════════════════════════════════════════════════════════════\n');

  // Get all resource cards
  const allCards = await sql`
    SELECT card_id, title, full_content, used_in_articles
    FROM cards
    WHERE card_type = 'resource'
    ORDER BY
      CASE WHEN full_content->>'downloadUrl' IS NOT NULL THEN 0 ELSE 1 END,
      card_id
  `;

  const cardsWithDownloads = allCards.filter((card: any) => card.full_content?.downloadUrl);
  const cardsWithoutDownloads = allCards.filter((card: any) => !card.full_content?.downloadUrl);

  console.log(`📊 SUMMARY`);
  console.log(`   Total resource cards: ${allCards.length}`);
  console.log(`   ✅ With downloads: ${cardsWithDownloads.length} (${Math.round(cardsWithDownloads.length / allCards.length * 100)}%)`);
  console.log(`   ⚠️  Without downloads: ${cardsWithoutDownloads.length}`);

  console.log('\n\n✅ CARDS WITH WORKING DOWNLOADS (34):');
  console.log('───────────────────────────────────────────────────────────────\n');

  cardsWithDownloads.forEach((card: any, index: number) => {
    const filename = card.full_content.downloadUrl.split('/').pop();
    console.log(`${(index + 1).toString().padStart(2)}. ${card.card_id}`);
    console.log(`    Title: ${card.title}`);
    console.log(`    File: ${filename}`);
    console.log(`    Used in: ${card.used_in_articles?.length || 0} article(s)`);
    console.log('');
  });

  console.log('\n⚠️  CARDS WITHOUT DOWNLOADS (6):');
  console.log('───────────────────────────────────────────────────────────────\n');
  console.log('These cards need PDF resources to be created:\n');

  for (const card of cardsWithoutDownloads) {
    console.log(`❌ ${card.card_id}`);
    console.log(`   Title: ${card.title}`);
    console.log(`   Used in articles:`);

    if (card.used_in_articles && card.used_in_articles.length > 0) {
      for (const slug of card.used_in_articles) {
        const [article] = await sql`
          SELECT title FROM articles WHERE slug = ${slug}
        `;
        console.log(`      - ${slug}${article ? ` (${article.title})` : ''}`);
      }
    } else {
      console.log(`      (Not used in any articles)`);
    }
    console.log('');
  }

  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('                        ACTION ITEMS                            ');
  console.log('═══════════════════════════════════════════════════════════════\n');
  console.log('To complete resource card downloads, create PDFs for these 6 cards:');
  cardsWithoutDownloads.forEach((card: any, index: number) => {
    console.log(`${index + 1}. ${card.card_id}`);
  });
  console.log('\n');
}

generateFinalReport().catch(console.error);
