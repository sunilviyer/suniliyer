import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function fixAGIGovernanceSources() {
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('      FIXING AGI GOVERNANCE ARTICLE - REMOVING INTERNAL        ');
  console.log('                  ARTICLE REFERENCES                           ');
  console.log('═══════════════════════════════════════════════════════════════\n');

  // Get current sources
  const [article] = await sql`
    SELECT
      article_id,
      slug,
      title,
      yaml_content::json->'sources' as sources
    FROM articles
    WHERE slug = 'agi-governance'
  `;

  console.log('Current sources:');
  console.log(JSON.stringify(article.sources, null, 2));
  console.log('\n');

  // Keep only external sources (filter out Article_127, Article_002, Article_005)
  const externalSources = [
    "Bostrom, N. (2014). Superintelligence: Paths, Dangers, Strategies.",
    "OpenAI (2023). GPT-4 Technical Report."
  ];

  console.log('Updating to external sources only:');
  console.log(JSON.stringify(externalSources, null, 2));
  console.log('\n');

  // Update the article
  await sql`
    UPDATE articles
    SET yaml_content = jsonb_set(
      yaml_content::jsonb,
      '{sources}',
      ${JSON.stringify(externalSources)}::jsonb
    )
    WHERE slug = 'agi-governance'
    AND path = 'future'
  `;

  console.log('✅ Updated AGI Governance article sources\n');

  // Verify
  const [updated] = await sql`
    SELECT
      yaml_content::json->'sources' as sources
    FROM articles
    WHERE slug = 'agi-governance'
  `;

  console.log('═══════════════════════════════════════════════════════════════');
  console.log('                      VERIFICATION                             ');
  console.log('═══════════════════════════════════════════════════════════════\n');
  console.log('Updated sources:');
  console.log(JSON.stringify(updated.sources, null, 2));
  console.log('\n✅ Internal article references removed successfully\n');
}

fixAGIGovernanceSources().catch(console.error);
