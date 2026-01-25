import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function fixFutureImagesYaml() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║   FIXING FUTURE ARTICLE IMAGES (.png → .webp in YAML)        ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  // Mapping from website display (from WebFetch results)
  const imageMapping: Record<string, string> = {
    'agi-governance': 'artificial-general-intelligence-hype-hope-and-governance.webp',
    'ai-existential-risk': 'ai-agents-and-autonomous-systems-the-next-frontier.webp',
    'ai-national-security': 'digital-sovereignty-national-vs-global-standards.webp',
    'ai-safety': 'ai-alignment-technical-and-governance-challenges.webp',
    'future-ai-ethics': 'global-ai-governance-institutions-international-bodies.webp',
    'future-ai-regulation': 'the-future-of-ai-regulation-whats-coming-next.webp',
    'ai-governance-careers': 'ai-governance-career-path-aigp-and-beyond.webp',
    'trustworthy-ai': 'ai-standards-development-iso-ieee-frameworks.webp',
  };

  let successCount = 0;
  let errorCount = 0;

  for (const [slug, imageFilename] of Object.entries(imageMapping)) {
    try {
      // Use string replacement to change .png to .webp in the YAML content
      const result = await sql`
        UPDATE articles
        SET yaml_content = REPLACE(
          yaml_content,
          'header_image: "/images/future/' || ${slug} || '.png"',
          'header_image: "/images/future/' || ${imageFilename} || '"'
        )
        WHERE slug = ${slug}
          AND path = 'future'
        RETURNING slug;
      `;

      if (result.length > 0) {
        console.log(`✅ ${slug}`);
        console.log(`   Updated to: /images/future/${imageFilename}\n`);
        successCount++;
      } else {
        console.log(`⚠️  ${slug} - Article not found or no change needed\n`);
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

fixFutureImagesYaml().catch(console.error);
