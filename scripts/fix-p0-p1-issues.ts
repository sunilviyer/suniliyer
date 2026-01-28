import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function fixP0P1Issues() {
  console.log('Starting P0 and P1 fixes...\n');

  // ==== P0 FIXES ====
  console.log('=== P0: Adding Missing Header Images ===\n');

  // Fix ai-existential-risk header image
  await sql`
    UPDATE articles
    SET yaml_content = jsonb_set(
      yaml_content::jsonb,
      '{headerImage}',
      '"/images/future/ai-existential-risk.webp"'::jsonb
    )::text
    WHERE slug = 'ai-existential-risk'
  `;
  console.log('✓ Added header image for ai-existential-risk');

  // Fix future-ai-ethics header image
  await sql`
    UPDATE articles
    SET yaml_content = jsonb_set(
      yaml_content::jsonb,
      '{headerImage}',
      '"/images/future/future-ai-ethics.webp"'::jsonb
    )::text
    WHERE slug = 'future-ai-ethics'
  `;
  console.log('✓ Added header image for future-ai-ethics\n');

  // ==== P1 FIXES ====
  console.log('=== P1: Fixing Wrong URLs in Article Content ===\n');

  // Fix AI vs Automation - wrong "Artificial intelligence" link
  const [aiVsAutomation] = await sql`
    SELECT yaml_content FROM articles WHERE slug = 'ai-vs-automation'
  `;

  if (aiVsAutomation) {
    let data = JSON.parse(aiVsAutomation.yaml_content);
    // Fix any /articles links to /terminology or /history as appropriate
    data.content = data.content.replace(
      /href="\/articles\/what-ai-actually-is"/g,
      'href="/history/what-ai-actually-is"'
    );
    await sql`
      UPDATE articles
      SET yaml_content = ${JSON.stringify(data)}
      WHERE slug = 'ai-vs-automation'
    `;
    console.log('✓ Fixed "Artificial intelligence" URL in ai-vs-automation');
  }

  // Fix Data Behind AI - training data URL
  const [dataBehindAi] = await sql`
    SELECT yaml_content FROM articles WHERE slug = 'data-behind-ai'
  `;

  if (dataBehindAi) {
    let data = JSON.parse(dataBehindAi.yaml_content);
    // Fix /articles links to proper paths
    data.content = data.content.replace(
      /href="\/articles\/training-data"/g,
      'href="/terminology/data-behind-ai"'
    );
    data.content = data.content.replace(
      /href="\/articles\//g,
      'href="/history/'
    );
    await sql`
      UPDATE articles
      SET yaml_content = ${JSON.stringify(data)}
      WHERE slug = 'data-behind-ai'
    `;
    console.log('✓ Fixed training data URL in data-behind-ai');
  }

  // Fix Foundation Models - LLM URL
  const [foundationModels] = await sql`
    SELECT yaml_content FROM articles WHERE slug = 'foundation-models'
  `;

  if (foundationModels) {
    let data = JSON.parse(foundationModels.yaml_content);
    // Fix LLM URL to point to correct article
    data.content = data.content.replace(
      /href="\/articles\/large-language-models"/g,
      'href="/history/large-language-models"'
    );
    data.content = data.content.replace(
      /href="\/articles\/llm"/g,
      'href="/history/large-language-models"'
    );
    // Also fix header image path if it's wrong
    if (data.headerImage === '/images/history/foundation-models.webp') {
      data.headerImage = '/images/terminology/foundation-models.webp';
    }
    await sql`
      UPDATE articles
      SET yaml_content = ${JSON.stringify(data)}
      WHERE slug = 'foundation-models'
    `;
    console.log('✓ Fixed LLM URL and header image path in foundation-models');
  }

  console.log('\n✅ All P0 and P1 database fixes completed!');
  console.log('\nNext steps:');
  console.log('1. Convert foundation-models page.tsx to use DatabaseArticleRenderer');
  console.log('2. Add favicon.ico to public folder');
}

fixP0P1Issues().catch(console.error);
