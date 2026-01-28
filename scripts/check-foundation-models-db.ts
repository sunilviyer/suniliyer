import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function checkFoundationModels() {
  console.log('Checking foundation-models database content...\n');

  const [article] = await sql`
    SELECT
      slug,
      yaml_content::json->>'tldr' as tldr,
      yaml_content::json->>'headerImage' as header_image,
      LENGTH(yaml_content::json->>'content') as content_length,
      jsonb_array_length((yaml_content::jsonb->'keyLearnings')::jsonb) as key_learnings_count,
      jsonb_array_length((yaml_content::jsonb->'additionalResources')::jsonb) as resources_count,
      jsonb_array_length((yaml_content::jsonb->'sources')::jsonb) as sources_count
    FROM articles
    WHERE slug = 'foundation-models'
  `;

  console.log('Foundation Models article:');
  console.log(`  TLDR: ${article?.tldr ? 'EXISTS' : 'MISSING'}`);
  console.log(`  Header Image: ${article?.header_image || 'MISSING'}`);
  console.log(`  Content Length: ${article?.content_length || 0} characters`);
  console.log(`  Key Learnings: ${article?.key_learnings_count || 0} items`);
  console.log(`  Additional Resources: ${article?.resources_count || 0} items`);
  console.log(`  Sources: ${article?.sources_count || 0} items`);
}

checkFoundationModels().catch(console.error);
