import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function updateFutureImages() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║   UPDATING FUTURE ARTICLE IMAGES (based on website display)  ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  // Mapping from website display (from WebFetch results)
  const imageMapping: Record<string, string> = {
    'agi-governance': '/images/future/artificial-general-intelligence-hype-hope-and-governance.webp',
    'ai-existential-risk': '/images/future/ai-agents-and-autonomous-systems-the-next-frontier.webp',
    'ai-national-security': '/images/future/digital-sovereignty-national-vs-global-standards.webp',
    'ai-safety': '/images/future/ai-alignment-technical-and-governance-challenges.webp',
    'future-ai-ethics': '/images/future/global-ai-governance-institutions-international-bodies.webp',
    'future-ai-regulation': '/images/future/the-future-of-ai-regulation-whats-coming-next.webp',
    'ai-governance-careers': '/images/future/ai-governance-career-path-aigp-and-beyond.webp',
    'trustworthy-ai': '/images/future/ai-standards-development-iso-ieee-frameworks.webp',
  };

  let successCount = 0;
  let errorCount = 0;

  for (const [slug, imagePath] of Object.entries(imageMapping)) {
    try {
      const result = await sql`
        UPDATE articles
        SET yaml_content = jsonb_set(
          COALESCE(yaml_content::jsonb, '{}'::jsonb),
          '{headerImage}',
          ${JSON.stringify(imagePath)}::jsonb
        )::text
        WHERE slug = ${slug}
        RETURNING slug, yaml_content::json->>'headerImage' as header_image;
      `;

      if (result.length > 0) {
        console.log(`✅ ${slug}`);
        console.log(`   Updated to: ${result[0].header_image}\n`);
        successCount++;
      } else {
        console.log(`⚠️  ${slug} - Article not found\n`);
        errorCount++;
      }
    } catch (error) {
      console.log(`❌ ${slug} - Error: ${error}\n`);
      errorCount++;
    }
  }

  console.log('═══════════════════════════════════════════════════════════════');
  console.log(`\n✅ Successfully updated: ${successCount}/8`);
  console.log(`❌ Errors: ${errorCount}/8\n`);
  console.log('═══════════════════════════════════════════════════════════════\n');
}

updateFutureImages().catch(console.error);
