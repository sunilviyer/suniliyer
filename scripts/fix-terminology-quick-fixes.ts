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

async function applyQuickFixes() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║         APPLYING TERMINOLOGY QUICK FIXES                     ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  // STEP 1: Link existing cards to articles
  console.log('📎 Step 1: Linking existing cards to articles...\n');

  const cardLinks = [
    { card_id: 'sc-calculator-vs-mathematician', article: 'ai-vs-automation' },
    { card_id: 'ms-chatgpt-release', article: 'foundation-models' },
    { card_id: 'ms-chatgpt-release', article: 'multimodal-ai' },
    { card_id: 'concept-hallucination', article: 'foundation-models' },
    { card_id: 'ex-pope-francis-puffer-jacket', article: 'multimodal-ai' },
    { card_id: 'insight-h100-gpu-cost', article: 'ai-compute' },
  ];

  let linkedCount = 0;
  for (const { card_id, article } of cardLinks) {
    const card = await sql`
      SELECT used_in_articles FROM cards WHERE card_id = ${card_id}
    `;

    if (card.length > 0) {
      const usedIn = card[0].used_in_articles || [];
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
  }
  console.log(`\n   Total linked: ${linkedCount}\n`);

  // STEP 2: Publish draft cards
  console.log('📝 Step 2: Publishing draft cards...\n');

  const draftCards = [
    'ex-2010-flash-crash',
    'ex-gender-shades-project',
    'ex-biden-robocall-deepfake'
  ];

  let publishedCount = 0;
  for (const card_id of draftCards) {
    const result = await sql`
      UPDATE cards
      SET status = 'published'
      WHERE card_id = ${card_id} AND status = 'draft'
      RETURNING card_id, status
    `;

    if (result.length > 0) {
      console.log(`✅ Published: ${card_id}`);
      publishedCount++;
    } else {
      console.log(`ℹ️  ${card_id}: Already published or not found`);
    }
  }
  console.log(`\n   Total published: ${publishedCount}\n`);

  // STEP 3: Update article content to use fw-eu-ai-act instead of ms-eu-ai-act
  console.log('🔄 Step 3: Updating article references...\n');

  // Get term-07 article
  const article = await sql`
    SELECT article_id, yaml_content
    FROM articles
    WHERE article_id = 'term-07'
  `;

  if (article.length > 0) {
    const content = JSON.parse(article[0].yaml_content as string);
    const oldContent = content.content;

    // Replace ms-eu-ai-act with fw-eu-ai-act
    content.content = content.content.replace(
      /\{\{CARD\|ms-eu-ai-act\|/g,
      '{{CARD|fw-eu-ai-act|'
    );

    if (oldContent !== content.content) {
      await sql`
        UPDATE articles
        SET yaml_content = ${JSON.stringify(content)}
        WHERE article_id = 'term-07'
      `;
      console.log(`✅ Updated: term-07 (environmental-cost-ai)`);
      console.log(`   Changed: ms-eu-ai-act → fw-eu-ai-act\n`);
    } else {
      console.log(`ℹ️  No changes needed in term-07\n`);
    }
  }

  console.log('╔══════════════════════════════════════════════════════════════╗');
  console.log('║                    QUICK FIXES COMPLETE                      ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  console.log(`Summary:`);
  console.log(`  ✅ Cards linked: ${linkedCount}`);
  console.log(`  ✅ Cards published: ${publishedCount}`);
  console.log(`  ✅ Articles updated: 1`);
  console.log();
}

applyQuickFixes().catch(console.error);
