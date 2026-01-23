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

async function fixResourceCardReferences() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║         FIXING RESOURCE CARD REFERENCES                      ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  // Step 1: Update article content to use correct card IDs
  console.log('🔄 Step 1: Updating article content...\n');

  const updates = [
    {
      article_id: 'term-03',
      old_card: 'res-bias-detection-toolkit',
      new_card: 'res-algorithmic-bias-detection'
    },
    {
      article_id: 'term-05',
      old_card: 'res-multimodal-ai-governance-framework',
      new_card: 'res-multimodal-ai-governance'
    }
  ];

  let updatedCount = 0;
  for (const { article_id, old_card, new_card } of updates) {
    const article = await sql`
      SELECT yaml_content FROM articles WHERE article_id = ${article_id}
    `;

    if (article.length > 0) {
      const content = JSON.parse(article[0].yaml_content as string);
      const oldContent = content.content;

      content.content = content.content.replace(
        new RegExp(`\\{\\{CARD\\|${old_card}\\|`, 'g'),
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
  console.log(`\n   Total articles updated: ${updatedCount}\n`);

  // Step 2: Link resource cards to articles
  console.log('🔗 Step 2: Linking resource cards to articles...\n');

  const cardLinks = [
    { card_id: 'res-ai-compute-governance-checklist', articles: ['ai-technology-stack', 'ai-compute', 'environmental-cost-ai'] },
    { card_id: 'res-algorithmic-bias-detection', articles: ['data-behind-ai'] },
    { card_id: 'res-data-quality-assessment', articles: ['data-behind-ai'] },
    { card_id: 'res-multimodal-ai-governance', articles: ['multimodal-ai'] }
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

  console.log(`\n   Total links created: ${linkedCount}\n`);

  console.log('╔══════════════════════════════════════════════════════════════╗');
  console.log('║                    ALL FIXES COMPLETE                        ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');
}

fixResourceCardReferences().catch(console.error);
