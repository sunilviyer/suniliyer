import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function fixFutureHeaderImages() {
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('          FIXING FUTURE ARTICLE HEADER IMAGES                  ');
  console.log('═══════════════════════════════════════════════════════════════\n');

  const updates = [
    { slug: 'agi-governance', image: '/images/future/agi-governance.webp', title: 'AGI: Hype, Hope, and Governance' },
    { slug: 'ai-national-security', image: '/images/future/ai-national-security.webp', title: 'AI and National Security' },
    { slug: 'ai-safety', image: '/images/future/ai-safety.webp', title: 'AI Safety' },
    { slug: 'future-ai-regulation', image: '/images/future/future-ai-regulation.webp', title: 'Future of AI Regulation' },
    { slug: 'ai-governance-careers', image: '/images/future/ai-governance-careers.webp', title: 'AI Governance Careers' },
    { slug: 'trustworthy-ai', image: '/images/future/trustworthy-ai.webp', title: 'Trustworthy AI: Seven Pillars' }
  ];

  console.log(`Updating ${updates.length} articles with header images...\n`);

  for (const update of updates) {
    try {
      // Update the headerImage field in yaml_content
      await sql`
        UPDATE articles
        SET yaml_content = jsonb_set(
          yaml_content::jsonb,
          '{headerImage}',
          ${JSON.stringify(update.image)}::jsonb
        )
        WHERE slug = ${update.slug}
        AND path = 'future'
      `;

      console.log(`✅ ${update.title}`);
      console.log(`   Slug: ${update.slug}`);
      console.log(`   Image: ${update.image}\n`);
    } catch (error) {
      console.error(`❌ Error updating ${update.slug}:`, error);
    }
  }

  console.log('═══════════════════════════════════════════════════════════════');
  console.log('                    VERIFICATION                               ');
  console.log('═══════════════════════════════════════════════════════════════\n');

  // Verify all future articles now have header images
  const allFutureArticles = await sql`
    SELECT
      article_id,
      slug,
      title,
      yaml_content::json->>'headerImage' as header_image
    FROM articles
    WHERE path = 'future'
    ORDER BY position
  `;

  console.log('Current status of all Future articles:\n');

  let missingCount = 0;
  for (const article of allFutureArticles) {
    const status = article.header_image ? '✅' : '❌';
    console.log(`${status} ${article.title}`);
    console.log(`   ${article.header_image || 'MISSING'}\n`);
    if (!article.header_image) missingCount++;
  }

  console.log('═══════════════════════════════════════════════════════════════');
  console.log(`✅ Fixed: ${updates.length} articles`);
  console.log(`${missingCount === 0 ? '✅' : '⚠️'} Missing: ${missingCount} articles`);
  console.log('═══════════════════════════════════════════════════════════════\n');
}

fixFutureHeaderImages().catch(console.error);
