import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function fixFutureArticles() {
  console.log('Starting comprehensive fix for future articles...\n');

  // 1. Update card associations to include agi-governance and ai-existential-risk
  console.log('1. Updating card associations...');

  // Add agi-governance to concept-agi
  await sql`
    UPDATE cards
    SET used_in_articles = array_append(used_in_articles, 'agi-governance')
    WHERE card_id = 'concept-agi'
    AND NOT ('agi-governance' = ANY(used_in_articles))
  `;

  // Add ai-existential-risk to concept-agi
  await sql`
    UPDATE cards
    SET used_in_articles = array_append(used_in_articles, 'ai-existential-risk')
    WHERE card_id = 'concept-agi'
    AND NOT ('ai-existential-risk' = ANY(used_in_articles))
  `;

  // Add agi-governance to quote-geoffrey-hinton-intelligence
  await sql`
    UPDATE cards
    SET used_in_articles = array_append(used_in_articles, 'agi-governance')
    WHERE card_id = 'quote-geoffrey-hinton-intelligence'
    AND NOT ('agi-governance' = ANY(used_in_articles))
  `;

  // Add ai-existential-risk to quote-geoffrey-hinton-intelligence
  await sql`
    UPDATE cards
    SET used_in_articles = array_append(used_in_articles, 'ai-existential-risk')
    WHERE card_id = 'quote-geoffrey-hinton-intelligence'
    AND NOT ('ai-existential-risk' = ANY(used_in_articles))
  `;

  // Add ai-existential-risk to sc-paperclip-maximizer (but NOT agi-governance - we'll remove it from content)
  await sql`
    UPDATE cards
    SET used_in_articles = array_append(used_in_articles, 'ai-existential-risk')
    WHERE card_id = 'sc-paperclip-maximizer'
    AND NOT ('ai-existential-risk' = ANY(used_in_articles))
  `;

  console.log('✓ Card associations updated\n');

  // 2. Remove paperclip maximizer from agi-governance content
  console.log('2. Removing paperclip maximizer from agi-governance...');

  const [agiArticle] = await sql`SELECT yaml_content FROM articles WHERE slug = 'agi-governance'`;
  const agiData = JSON.parse(agiArticle.yaml_content);

  // Remove the paperclip reference from content - just remove the card tag
  agiData.content = agiData.content.replace(
    '{{CARD|sc-paperclip-maximizer|paperclip maximizer}}',
    'paperclip maximizer'
  );

  await sql`
    UPDATE articles
    SET yaml_content = ${JSON.stringify(agiData)}
    WHERE slug = 'agi-governance'
  `;

  console.log('✓ Paperclip maximizer removed from agi-governance\n');

  // 3. Add TLDRs to all three articles
  console.log('3. Adding TLDRs...');

  await sql`
    UPDATE articles
    SET yaml_content = jsonb_set(
      yaml_content::jsonb,
      '{tldr}',
      '"AGI (Artificial General Intelligence) refers to AI systems that can perform any intellectual task a human can. While still theoretical, AGI raises critical governance questions about safety, alignment, and societal impact that leaders must address today."'
    )::text
    WHERE slug = 'agi-governance'
  `;

  await sql`
    UPDATE articles
    SET yaml_content = jsonb_set(
      yaml_content::jsonb,
      '{tldr}',
      '"AI existential risk refers to the potential for advanced AI systems to pose catastrophic threats to humanity. Understanding these risks—from misalignment to rapid capability growth—is essential for responsible AI governance and strategic planning."'
    )::text
    WHERE slug = 'ai-existential-risk'
  `;

  await sql`
    UPDATE articles
    SET yaml_content = jsonb_set(
      yaml_content::jsonb,
      '{tldr}',
      '"AI is reshaping national security through autonomous weapons, cyber warfare, intelligence analysis, and geopolitical competition. Organizations must understand these dynamics to navigate the evolving security landscape and regulatory requirements."'
    )::text
    WHERE slug = 'ai-national-security'
  `;

  console.log('✓ TLDRs added\n');

  // 4. Add additionalResources to all three articles
  console.log('4. Adding additional resources...');

  // AGI Governance resources
  await sql`
    UPDATE articles
    SET yaml_content = jsonb_set(
      yaml_content::jsonb,
      '{additionalResources}',
      '["Stanford HAI - The AGI Governance Challenge", "OpenAI - Planning for AGI and Beyond", "Future of Humanity Institute - The Governance of Artificial General Intelligence", "Center for AI Safety - AGI Safety Research", "Partnership on AI - AGI Governance Framework"]'::jsonb
    )::text
    WHERE slug = 'agi-governance'
  `;

  // AI Existential Risk resources
  await sql`
    UPDATE articles
    SET yaml_content = jsonb_set(
      yaml_content::jsonb,
      '{additionalResources}',
      '["Center for AI Safety - Statement on AI Risk", "Future of Life Institute - AI Safety Research", "Machine Intelligence Research Institute - Research on AGI Safety", "DeepMind - Technical AGI Safety Research", "Anthropic - Constitutional AI and Safety Research"]'::jsonb
    )::text
    WHERE slug = 'ai-existential-risk'
  `;

  // AI National Security resources
  await sql`
    UPDATE articles
    SET yaml_content = jsonb_set(
      yaml_content::jsonb,
      '{additionalResources}',
      '["NSCAI - National Security Commission on AI Final Report", "CSIS - AI and National Security Series", "RAND Corporation - AI in Defense and National Security", "Georgetown CSET - AI and Security Research", "Carnegie Endowment - AI, Strategic Stability, and Nuclear Risk"]'::jsonb
    )::text
    WHERE slug = 'ai-national-security'
  `;

  console.log('✓ Additional resources added\n');

  // 5. Verify the fixes
  console.log('5. Verifying fixes...');

  const articles = await sql`
    SELECT slug,
           yaml_content::json->>'tldr' as tldr,
           yaml_content::json->'additionalResources' as resources,
           yaml_content::json->'sources' as sources
    FROM articles
    WHERE slug IN ('agi-governance', 'ai-existential-risk', 'ai-national-security')
    ORDER BY article_id
  `;

  console.log('\nArticle verification:');
  articles.forEach(article => {
    console.log(`\n${article.slug}:`);
    console.log(`  TLDR: ${article.tldr ? '✓ Present' : '✗ Missing'}`);
    console.log(`  Additional Resources: ${article.resources ? '✓ Present' : '✗ Missing'}`);
    console.log(`  Sources: ${article.sources ? '✓ Present' : '✗ Missing'}`);
  });

  const cards = await sql`
    SELECT card_id, used_in_articles
    FROM cards
    WHERE card_id IN (
      'concept-agi',
      'quote-geoffrey-hinton-intelligence',
      'sc-paperclip-maximizer'
    )
  `;

  console.log('\n\nCard associations verification:');
  cards.forEach(card => {
    console.log(`\n${card.card_id}:`);
    console.log(`  Used in: ${card.used_in_articles.join(', ')}`);
  });

  console.log('\n✅ All fixes completed successfully!');
}

fixFutureArticles().catch(console.error);
