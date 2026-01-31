import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function checkFutureArticles() {
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('       FUTURE ARTICLES - HEADER IMAGE & DOWNLOAD CHECK         ');
  console.log('═══════════════════════════════════════════════════════════════\n');

  const articles = await sql`
    SELECT
      article_id,
      slug,
      title,
      yaml_content::json->>'headerImage' as header_image,
      yaml_content::json->'sources' as sources
    FROM articles
    WHERE path = 'future'
    ORDER BY position
  `;

  console.log(`Total Future Articles: ${articles.length}\n`);

  for (const article of articles) {
    console.log(`\n📄 ${article.article_id}: ${article.title}`);
    console.log(`   Slug: ${article.slug}`);
    console.log(`   Header Image: ${article.header_image || '❌ MISSING'}`);

    // Check for resource cards in this article
    const resourceCards = await sql`
      SELECT card_id, title, full_content->>'downloadUrl' as download_url
      FROM cards
      WHERE card_type = 'resource'
      AND ${article.slug} = ANY(used_in_articles)
      AND status = 'published'
    `;

    if (resourceCards.length > 0) {
      console.log(`   Resource Cards: ${resourceCards.length}`);
      resourceCards.forEach((card: any) => {
        console.log(`      - ${card.card_id}: ${card.download_url ? '✅ Has download' : '❌ NO download'}`);
      });
    } else {
      console.log(`   Resource Cards: None`);
    }

    // Check sources
    if (article.sources) {
      try {
        const sourcesStr = typeof article.sources === 'string' ? article.sources : JSON.stringify(article.sources);
        // Check if it contains internal article references
        const hasInternalRefs = sourcesStr.includes('/articles/') ||
                                sourcesStr.includes('Article_127') ||
                                sourcesStr.includes('Article_002') ||
                                sourcesStr.includes('Article_005');
        if (hasInternalRefs) {
          console.log(`   ⚠️  Contains internal article references in sources`);
        }
      } catch (e) {
        console.log(`   ⚠️  Could not parse sources field`);
      }
    }
  }

  console.log('\n\n═══════════════════════════════════════════════════════════════');
  console.log('            CHECKING /future LEARNING PATH PAGE                ');
  console.log('═══════════════════════════════════════════════════════════════\n');

  // The learning path page shows article cards with images
  // These images might be stored differently than the article header images
  console.log('Images shown on learning path page are likely from:');
  console.log('   - Article metadata (preview images)');
  console.log('   - Or separate card system for learning paths\n');
}

checkFutureArticles().catch(console.error);
