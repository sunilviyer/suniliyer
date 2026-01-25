import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function fixResponsibilityImages() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║   FIXING RESPONSIBILITY IMAGE EXTENSIONS (.png → .webp)      ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  const responsibilityArticles = [
    'eu-ai-act-explained',
    'nist-ai-rmf',
    'iso-42001',
    'ai-transparency',
    'ai-accountability',
    'human-centered-ai',
    'global-ai-law-tracker',
    'cross-border-compliance',
  ];

  let successCount = 0;
  let errorCount = 0;

  for (const slug of responsibilityArticles) {
    const newImagePath = `/images/responsibility/${slug}.webp`;

    try {
      const result = await sql`
        UPDATE articles
        SET yaml_content = jsonb_set(
          yaml_content::jsonb,
          '{headerImage}',
          ${JSON.stringify(newImagePath)}::jsonb
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

fixResponsibilityImages().catch(console.error);
