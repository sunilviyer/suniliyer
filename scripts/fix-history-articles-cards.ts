import { neon } from '@neondatabase/serverless';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const envFile = readFileSync(resolve(process.cwd(), '.env.local'), 'utf-8');
const dbUrlMatch = envFile.match(/DATABASE_URL=["']?([^"'\n]+)["']?/);
if (!dbUrlMatch) {
  throw new Error('DATABASE_URL not found in .env.local');
}
const DATABASE_URL = dbUrlMatch[1];

const sql = neon(DATABASE_URL);

async function fixHistoryArticles() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║         FIXING HISTORY ARTICLES CARDS                        ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  // Step 1: Publish draft card
  console.log('📝 Step 1: Publishing draft card...\n');

  await sql`
    UPDATE cards
    SET status = 'published'
    WHERE card_id = 'ex-ibm-deep-blue'
    RETURNING card_id, status
  `;
  console.log('✅ Published: ex-ibm-deep-blue\n');

  // Step 2: Link all cards to their articles
  console.log('🔗 Step 2: Linking cards to articles...\n');

  const cardLinks = [
    // history-02: ai-family-tree
    { card_id: 'concept-symbolic-ai', article: 'ai-family-tree' },
    { card_id: 'ms-dartmouth-workshop', article: 'ai-family-tree' },
    { card_id: 'concept-narrow-ai', article: 'ai-family-tree' },
    { card_id: 'concept-agi', article: 'ai-family-tree' },
    { card_id: 'ms-lighthill-report', article: 'ai-family-tree' },
    { card_id: 'insight-japan-fifth-gen-funding', article: 'ai-family-tree' },

    // history-03: types-of-ai-intelligence
    { card_id: 'concept-narrow-ai', article: 'types-of-ai-intelligence' },
    { card_id: 'ex-uber-arizona-fatality', article: 'types-of-ai-intelligence' },
    { card_id: 'quote-geoffrey-hinton-intelligence', article: 'types-of-ai-intelligence' },
    { card_id: 'sc-robot-hand-deception', article: 'types-of-ai-intelligence' },

    // history-04: how-machines-learn
    { card_id: 'ex-amazon-hiring', article: 'how-machines-learn' },
    { card_id: 'concept-reinforcement-learning', article: 'how-machines-learn' },
    { card_id: 'concept-model-drift', article: 'how-machines-learn' },

    // history-05: deep-learning-decoded
    { card_id: 'concept-feature-engineering', article: 'deep-learning-decoded' },
    { card_id: 'ms-alexnet-imagenet', article: 'deep-learning-decoded' },
    { card_id: 'insight-h100-gpu-cost', article: 'deep-learning-decoded' },
    { card_id: 'ex-deepmind-alphago', article: 'deep-learning-decoded' },
    { card_id: 'res-deep-learning-governance-audit', article: 'deep-learning-decoded' },

    // history-06: generative-ai-explained
    { card_id: 'ms-chatgpt-release', article: 'generative-ai-explained' },
    { card_id: 'concept-hallucination', article: 'generative-ai-explained' },
    { card_id: 'ex-pope-francis-puffer-jacket', article: 'generative-ai-explained' },
    { card_id: 'res-genai-governance-implementation', article: 'generative-ai-explained' },

    // history-07: large-language-models
    { card_id: 'ms-chatgpt-release', article: 'large-language-models' },
    { card_id: 'concept-sycophancy', article: 'large-language-models' },
    { card_id: 'res-llm-risk-classification-framework', article: 'large-language-models' },
  ];

  let linkedCount = 0;
  let skippedCount = 0;

  for (const { card_id, article } of cardLinks) {
    const result = await sql`
      SELECT used_in_articles FROM cards WHERE card_id = ${card_id}
    `;

    if (result.length === 0) {
      console.log(`⚠️  Card not found: ${card_id}`);
      skippedCount++;
      continue;
    }

    const usedIn = result[0].used_in_articles || [];

    if (!usedIn.includes(article)) {
      await sql`
        UPDATE cards
        SET used_in_articles = array_append(used_in_articles, ${article})
        WHERE card_id = ${card_id}
      `;
      console.log(`✅ Linked: ${card_id} → ${article}`);
      linkedCount++;
    } else {
      console.log(`ℹ️  Already linked: ${card_id} → ${article}`);
    }
  }

  console.log(`\n📊 Linking Summary:`);
  console.log(`   Linked: ${linkedCount}`);
  console.log(`   Already linked: ${cardLinks.length - linkedCount - skippedCount}`);
  console.log(`   Skipped (not found): ${skippedCount}`);

  // Step 3: Create missing cards
  console.log('\n📦 Step 3: Creating missing cards...\n');

  // Create article-link-ai-hallucinations
  console.log('Creating: article-link-ai-hallucinations');
  await sql`
    INSERT INTO cards (
      card_id,
      card_type,
      title,
      trigger_text,
      summary,
      status,
      used_in_articles,
      full_content
    ) VALUES (
      'article-link-ai-hallucinations',
      'article-link',
      'AI Hallucinations',
      'AI hallucinations',
      'When AI systems generate plausible but incorrect or nonsensical information with confidence.',
      'published',
      ARRAY['large-language-models'],
      '{"type": "article-link", "articleSlug": "ai-hallucinations", "tags": ["LLM", "Reliability", "Risk"]}'::jsonb
    )
  `;
  console.log('✅ Created: article-link-ai-hallucinations\n');

  // Create ms-deep-blue
  console.log('Creating: ms-deep-blue');
  await sql`
    INSERT INTO cards (
      card_id,
      card_type,
      title,
      trigger_text,
      summary,
      status,
      used_in_articles,
      full_content
    ) VALUES (
      'ms-deep-blue',
      'milestone',
      'Deep Blue Defeats Kasparov (1997)',
      'Deep Blue',
      'IBM''s Deep Blue supercomputer defeated world chess champion Garry Kasparov in 1997, marking a historic milestone where a machine outperformed the best human in a complex game.',
      'published',
      ARRAY['ai-history'],
      '{"year": 1997, "significance": "First computer to defeat a reigning world chess champion in a match under standard tournament conditions", "key_figures": ["IBM Research Team", "Garry Kasparov"], "impact": "Demonstrated that machines could excel at strategic thinking, though using brute-force calculation rather than human-like reasoning", "location": "New York City", "tags": ["Chess", "Symbolic AI", "Milestone", "IBM"]}'::jsonb
    )
  `;
  console.log('✅ Created: ms-deep-blue\n');

  console.log('╔══════════════════════════════════════════════════════════════╗');
  console.log('║                    ✅ ALL FIXES COMPLETE                     ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');
}

fixHistoryArticles().catch(console.error);
