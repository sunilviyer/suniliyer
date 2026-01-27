import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function fixRemainingFutureArticles() {
  console.log('Fixing remaining 5 future articles...\n');

  // 1. Add TLDRs
  console.log('1. Adding TLDRs...');

  await sql`
    UPDATE articles
    SET yaml_content = jsonb_set(
      yaml_content::jsonb,
      '{tldr}',
      '"AI safety focuses on ensuring AI systems behave as intended and remain under human control. Key challenges include alignment, robustness, interpretability, and preventing unintended consequences as systems become more capable."'
    )::text
    WHERE slug = 'ai-safety'
  `;

  await sql`
    UPDATE articles
    SET yaml_content = jsonb_set(
      yaml_content::jsonb,
      '{tldr}',
      '"AI ethics is evolving from philosophical principles to enforceable standards and regulations. Understanding emerging ethical frameworks helps organizations build responsible AI systems that balance innovation with societal values."'
    )::text
    WHERE slug = 'future-ai-ethics'
  `;

  await sql`
    UPDATE articles
    SET yaml_content = jsonb_set(
      yaml_content::jsonb,
      '{tldr}',
      '"AI regulation is rapidly evolving worldwide with new laws, standards, and enforcement mechanisms. Organizations must anticipate regulatory trends to build compliant AI systems and avoid costly retrofitting."'
    )::text
    WHERE slug = 'future-ai-regulation'
  `;

  await sql`
    UPDATE articles
    SET yaml_content = jsonb_set(
      yaml_content::jsonb,
      '{tldr}',
      '"AI governance careers are emerging as critical roles in organizations deploying AI systems. From AI ethics officers to safety researchers, these positions combine technical knowledge with policy, legal, and ethical expertise."'
    )::text
    WHERE slug = 'ai-governance-careers'
  `;

  await sql`
    UPDATE articles
    SET yaml_content = jsonb_set(
      yaml_content::jsonb,
      '{tldr}',
      '"Trustworthy AI rests on seven pillars: transparency, accountability, fairness, privacy, robustness, safety, and human oversight. Organizations must implement all seven systematically to build AI systems that earn stakeholder trust."'
    )::text
    WHERE slug = 'trustworthy-ai'
  `;

  console.log('✓ TLDRs added\n');

  // 2. Check and add additional resources where missing
  console.log('2. Checking additional resources...');

  const articlesWithoutResources = await sql`
    SELECT slug
    FROM articles
    WHERE slug IN ('ai-safety', 'future-ai-ethics', 'future-ai-regulation', 'ai-governance-careers', 'trustworthy-ai')
    AND (yaml_content::json->'additionalResources' IS NULL
         OR jsonb_array_length(yaml_content::jsonb->'additionalResources') = 0)
  `;

  for (const article of articlesWithoutResources) {
    console.log(`  Adding resources to ${article.slug}...`);

    if (article.slug === 'ai-safety') {
      await sql`
        UPDATE articles
        SET yaml_content = jsonb_set(
          yaml_content::jsonb,
          '{additionalResources}',
          '["Center for AI Safety - AI Safety Fundamentals", "DeepMind - Technical AI Safety Research", "OpenAI - AI Alignment Research", "Machine Intelligence Research Institute - Safety Research", "Future of Life Institute - AI Safety Resources"]'::jsonb
        )::text
        WHERE slug = 'ai-safety'
      `;
    } else if (article.slug === 'future-ai-ethics') {
      await sql`
        UPDATE articles
        SET yaml_content = jsonb_set(
          yaml_content::jsonb,
          '{additionalResources}',
          '["IEEE - Ethically Aligned Design Framework", "Partnership on AI - AI Ethics Resources", "Montreal Declaration for Responsible AI", "ACM Code of Ethics for AI Practitioners", "EU Ethics Guidelines for Trustworthy AI"]'::jsonb
        )::text
        WHERE slug = 'future-ai-ethics'
      `;
    } else if (article.slug === 'future-ai-regulation') {
      await sql`
        UPDATE articles
        SET yaml_content = jsonb_set(
          yaml_content::jsonb,
          '{additionalResources}',
          '["OECD - AI Policy Observatory", "Stanford HAI - AI Index Report (Regulatory Chapter)", "Future of Privacy Forum - AI Governance Tracker", "World Economic Forum - AI Governance Alliance", "UN - AI for Good Global Summit Resources"]'::jsonb
        )::text
        WHERE slug = 'future-ai-regulation'
      `;
    } else if (article.slug === 'ai-governance-careers') {
      await sql`
        UPDATE articles
        SET yaml_content = jsonb_set(
          yaml_content::jsonb,
          '{additionalResources}',
          '["80,000 Hours - AI Safety Career Guide", "Partnership on AI - Career Pathways", "IAPP - AI Governance Certifications", "Center for AI Safety - Career Resources", "AI Safety Support - Career Transition Guide"]'::jsonb
        )::text
        WHERE slug = 'ai-governance-careers'
      `;
    } else if (article.slug === 'trustworthy-ai') {
      await sql`
        UPDATE articles
        SET yaml_content = jsonb_set(
          yaml_content::jsonb,
          '{additionalResources}',
          '["NIST - AI Risk Management Framework", "EU - Assessment List for Trustworthy AI (ALTAI)", "ISO/IEC 42001 - AI Management System Standard", "IEEE P7000 Series - AI Ethics Standards", "Microsoft - Responsible AI Standard"]'::jsonb
        )::text
        WHERE slug = 'trustworthy-ai'
      `;
    }
  }

  console.log(`✓ Added resources to ${articlesWithoutResources.length} articles\n`);

  // 3. Get all card references from these articles and check associations
  console.log('3. Checking card associations...');

  const articles = await sql`
    SELECT slug, yaml_content::json->>'content' as content
    FROM articles
    WHERE slug IN ('ai-safety', 'future-ai-ethics', 'future-ai-regulation', 'ai-governance-careers', 'trustworthy-ai')
  `;

  let fixedCount = 0;
  for (const article of articles) {
    // Extract card IDs from content using regex
    const cardMatches = article.content.match(/\{\{CARD\|([^|]+)\|/g);
    if (!cardMatches) continue;

    const cardIds = cardMatches.map((match: string) => match.replace('{{CARD|', '').replace('|', ''));

    for (const cardId of cardIds) {
      // Check if card exists and is associated with this article
      const [card] = await sql`
        SELECT card_id, used_in_articles
        FROM cards
        WHERE card_id = ${cardId}
      `;

      if (card && !card.used_in_articles.includes(article.slug)) {
        await sql`
          UPDATE cards
          SET used_in_articles = array_append(used_in_articles, ${article.slug})
          WHERE card_id = ${cardId}
        `;
        console.log(`  ✓ Added ${article.slug} to card ${cardId}`);
        fixedCount++;
      }
    }
  }

  console.log(`✓ Fixed ${fixedCount} card associations\n`);

  // 4. Verify
  console.log('4. Verification...\n');

  const verification = await sql`
    SELECT slug,
           yaml_content::json->>'tldr' as tldr,
           jsonb_array_length(yaml_content::jsonb->'additionalResources') as resource_count
    FROM articles
    WHERE slug IN ('ai-safety', 'future-ai-ethics', 'future-ai-regulation', 'ai-governance-careers', 'trustworthy-ai')
    ORDER BY article_id
  `;

  verification.forEach(article => {
    console.log(`${article.slug}:`);
    console.log(`  TLDR: ${article.tldr ? '✓' : '✗'}`);
    console.log(`  Resources: ${article.resource_count || 0}`);
  });

  console.log('\n✅ All remaining future articles fixed!');
}

fixRemainingFutureArticles().catch(console.error);
