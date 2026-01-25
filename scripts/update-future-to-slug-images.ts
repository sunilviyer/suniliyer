import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function updateFutureToSlugImages() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║   UPDATE FUTURE IMAGES TO SLUG-BASED NAMING                  ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  const imageMapping: Record<string, { old: string; new: string }> = {
    'agi-governance': {
      old: 'artificial-general-intelligence-hype-hope-and-governance.webp',
      new: 'agi-governance.webp'
    },
    'ai-existential-risk': {
      old: 'ai-agents-and-autonomous-systems-the-next-frontier.webp',
      new: 'ai-existential-risk.webp'
    },
    'ai-national-security': {
      old: 'digital-sovereignty-national-vs-global-standards.webp',
      new: 'ai-national-security.webp'
    },
    'ai-safety': {
      old: 'ai-alignment-technical-and-governance-challenges.webp',
      new: 'ai-safety.webp'
    },
    'future-ai-ethics': {
      old: 'global-ai-governance-institutions-international-bodies.webp',
      new: 'future-ai-ethics.webp'
    },
    'future-ai-regulation': {
      old: 'the-future-of-ai-regulation-whats-coming-next.webp',
      new: 'future-ai-regulation.webp'
    },
    'ai-governance-careers': {
      old: 'ai-governance-career-path-aigp-and-beyond.webp',
      new: 'ai-governance-careers.webp'
    },
    'trustworthy-ai': {
      old: 'ai-standards-development-iso-ieee-frameworks.webp',
      new: 'trustworthy-ai.webp'
    },
  };

  let successCount = 0;
  let errorCount = 0;

  for (const [slug, { old: oldFilename, new: newFilename }] of Object.entries(imageMapping)) {
    try {
      // Use REPLACE to update YAML content
      const result = await sql`
        UPDATE articles
        SET yaml_content = REPLACE(
          yaml_content,
          ${oldFilename},
          ${newFilename}
        )
        WHERE slug = ${slug}
          AND path = 'future'
        RETURNING slug;
      `;

      if (result.length > 0) {
        console.log(`✅ ${slug}`);
        console.log(`   Updated: ${oldFilename} → ${newFilename}\n`);
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

updateFutureToSlugImages().catch(console.error);
