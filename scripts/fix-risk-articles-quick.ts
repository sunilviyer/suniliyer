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
  console.log('║         RISK ARTICLES QUICK FIXES                            ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  // STEP 1: Replace card references in article content
  console.log('🔄 Step 1: Replacing card references...\\n');

  const cardReplacements = [
    {
      article_id: 'risk-02',
      old_card: 'res-bias-detection-toolkit',
      new_card: 'res-algorithmic-bias-detection'
    }
  ];

  let updatedCount = 0;
  for (const { article_id, old_card, new_card } of cardReplacements) {
    const article = await sql`
      SELECT yaml_content FROM articles WHERE article_id = ${article_id}
    `;

    if (article.length > 0) {
      const content = JSON.parse(article[0].yaml_content as string);
      const oldContent = content.content;

      content.content = content.content.replace(
        new RegExp(`\\\\{\\\\{CARD\\\\|${old_card}\\\\|`, 'g'),
        `{{CARD|${new_card}|`
      );

      if (oldContent !== content.content) {
        await sql`
          UPDATE articles
          SET yaml_content = ${JSON.stringify(content)}
          WHERE article_id = ${article_id}
        `;
        console.log(`✅ Updated ${article_id}: ${old_card} → ${new_card}`);
        updatedCount++;
      }
    }
  }
  console.log(`\\n   Total articles updated: ${updatedCount}\\n`);

  // STEP 2: Publish draft cards
  console.log('📝 Step 2: Publishing draft cards...\\n');

  const draftCards = [
    'ex-healthcare-racial-bias',
    'ex-2016-election-misinformation',
    'ex-microsoft-tay-chatbot',
    'ex-kargu-2-drone',
    'ex-google-project-maven'
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
  console.log(`\\n   Total published: ${publishedCount}\\n`);

  // STEP 3: Link existing cards to risk articles
  console.log('🔗 Step 3: Linking existing cards to articles...\\n');

  const cardLinks = [
    { card_id: 'ex-2010-flash-crash', articles: ['when-ai-goes-wrong', 'autonomous-weapons'] },
    { card_id: 'concept-proxy-discrimination', articles: ['algorithmic-bias'] },
    { card_id: 'concept-sycophancy', articles: ['ai-hallucinations'] },
    { card_id: 'ex-biden-robocall-deepfake', articles: ['deepfakes-synthetic-media'] },
    { card_id: 'fw-c2pa-standard', articles: ['deepfakes-synthetic-media'] },
    { card_id: 'res-deepfake-verification-protocols', articles: ['deepfakes-synthetic-media'] },
    { card_id: 'ex-uber-arizona-fatality', articles: ['autonomous-weapons'] },
    { card_id: 'res-algorithmic-bias-detection', articles: ['algorithmic-bias'] }
  ];

  let linkedCount = 0;
  for (const { card_id, articles } of cardLinks) {
    const card = await sql`
      SELECT used_in_articles FROM cards WHERE card_id = ${card_id}
    `;

    if (card.length > 0) {
      const currentArticles = card[0].used_in_articles || [];

      for (const article of articles) {
        if (!currentArticles.includes(article)) {
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
  }

  console.log(`\\n   Total links created: ${linkedCount}\\n`);

  console.log('╔══════════════════════════════════════════════════════════════╗');
  console.log('║                    QUICK FIXES COMPLETE                      ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\\n');

  console.log(`Summary:`);
  console.log(`  ✅ Article references updated: ${updatedCount}`);
  console.log(`  ✅ Cards published: ${publishedCount}`);
  console.log(`  ✅ Card links created: ${linkedCount}`);
  console.log();
}

applyQuickFixes().catch(console.error);
