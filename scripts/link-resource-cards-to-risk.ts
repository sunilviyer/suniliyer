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

async function linkResourceCards() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║         LINKING RESOURCE CARDS TO RISK ARTICLES              ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  const cardLinks = [
    { card_id: 'res-taxonomy-ai-harms', articles: ['when-ai-goes-wrong'] },
    { card_id: 'res-hallucination-mitigation-checklist', articles: ['ai-hallucinations'] },
    { card_id: 'res-privacy-by-design-framework', articles: ['ai-privacy'] },
    { card_id: 'res-misinformation-resilience-toolkit', articles: ['ai-misinformation'] }
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
    } else {
      console.log(`❌ Card not found: ${card_id}`);
    }
  }

  console.log(`\n╔══════════════════════════════════════════════════════════════╗`);
  console.log(`║                    LINKING COMPLETE                          ║`);
  console.log(`╚══════════════════════════════════════════════════════════════╝\n`);

  console.log(`  ✅ Resource card links created: ${linkedCount}\n`);
}

linkResourceCards().catch(console.error);
