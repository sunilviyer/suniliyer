import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

// Map of slug to correct image path
const imageUpdates = {
  // HISTORY path
  'what-ai-actually-is': '/images/history/what-ai-actually-is.webp',
  'ai-family-tree': '/images/history/ai-family-tree.webp',
  'types-of-ai-intelligence': '/images/history/types-of-ai-intelligence.webp',
  'how-machines-learn': '/images/history/how-machines-learn.webp',
  'deep-learning-decoded': '/images/history/deep-learning-decoded.webp',
  'generative-ai-explained': '/images/history/generative-ai-explained.webp',
  'large-language-models': '/images/history/large-language-models.webp',
  'ai-history': '/images/history/ai-history.webp',

  // TERMINOLOGY path
  'ai-technology-stack': '/images/terminology/ai-technology-stack.webp',
  'ai-vs-automation': '/images/terminology/ai-vs-automation.webp',
  'data-behind-ai': '/images/terminology/data-behind-ai.webp',
  'foundation-models': '/images/terminology/foundation-models.webp',
  'multimodal-ai': '/images/terminology/multimodal-ai.webp',
  'ai-compute': '/images/terminology/ai-compute.webp',
  'environmental-cost-ai': '/images/terminology/environmental-cost-ai.webp',
  'black-box-problem': '/images/terminology/black-box-problem.webp',

  // RISK path
  'when-ai-goes-wrong': '/images/risk/when-ai-goes-wrong.webp',
  'algorithmic-bias': '/images/risk/algorithmic-bias.webp',
  'ai-hallucinations': '/images/risk/ai-hallucinations.webp',
  'ai-privacy': '/images/risk/ai-privacy.webp',
  'deepfakes-synthetic-media': '/images/risk/deepfakes-synthetic-media.webp',
  'ai-misinformation': '/images/risk/ai-misinformation.webp',
  'job-displacement': '/images/risk/job-displacement.webp',
  'autonomous-weapons': '/images/risk/autonomous-weapons.webp',
};

async function updateAllImages() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║     UPDATING ALL ARTICLE IMAGES TO .WEBP FORMAT             ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  let successCount = 0;
  let errorCount = 0;

  for (const [slug, imagePath] of Object.entries(imageUpdates)) {
    try {
      const result = await sql`
        UPDATE articles
        SET yaml_content = jsonb_set(
          yaml_content::jsonb,
          '{headerImage}',
          ${JSON.stringify(imagePath)}::jsonb
        )::text
        WHERE slug = ${slug}
        RETURNING slug, yaml_content::json->>'headerImage' as new_image;
      `;

      if (result.length > 0) {
        console.log(`✅ ${slug}`);
        console.log(`   Updated to: ${result[0].new_image}\n`);
        successCount++;
      } else {
        console.log(`⚠️  ${slug} - Article not found in database\n`);
        errorCount++;
      }
    } catch (error) {
      console.log(`❌ ${slug} - Error: ${error}\n`);
      errorCount++;
    }
  }

  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log(`\n✅ Successfully updated: ${successCount} articles`);
  console.log(`❌ Errors: ${errorCount} articles\n`);
}

updateAllImages().catch(console.error);
