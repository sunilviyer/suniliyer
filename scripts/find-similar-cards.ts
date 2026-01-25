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

async function findSimilarCards() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║         SEARCHING FOR SIMILAR CARDS                          ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  const missingCards = [
    { missing: 'insight-nvidia-market-share', keywords: ['nvidia', 'market', 'gpu', 'h100'] },
    { missing: 'insight-meta-inference-energy', keywords: ['meta', 'inference', 'energy', 'facebook', 'llama'] },
    { missing: 'concept-proxy-discrimination', keywords: ['proxy', 'discrimination', 'bias', 'indirect'] },
    { missing: 'insight-gpt4-training-cost', keywords: ['gpt', 'training', 'cost', 'openai', 'expense'] },
    { missing: 'fw-c2pa-standard', keywords: ['c2pa', 'content', 'provenance', 'authenticity', 'watermark'] },
    { missing: 'fw-us-export-controls', keywords: ['export', 'control', 'chip', 'semiconductor', 'regulation'] },
    { missing: 'ms-eu-ai-act', keywords: ['eu', 'ai act', 'regulation', 'european', 'legislation'] },
    { missing: 'sc-transparent-vs-opaque-loans', keywords: ['loan', 'lending', 'credit', 'transparent', 'opaque'] },
    { missing: 'sc-icu-palliative-transparency', keywords: ['icu', 'palliative', 'medical', 'healthcare', 'transparency'] },
    { missing: 'fw-gdpr-article-22', keywords: ['gdpr', 'article 22', 'right to explanation', 'automated decision'] },
    { missing: 'pattern-tiered-explanation-system', keywords: ['explanation', 'tiered', 'explainability', 'xai', 'interpret'] },
  ];

  const results: any[] = [];

  for (const { missing, keywords } of missingCards) {
    console.log(`\n${'─'.repeat(60)}`);
    console.log(`🔍 Looking for: ${missing}`);
    console.log(`   Keywords: ${keywords.join(', ')}`);
    console.log();

    let found = false;

    for (const keyword of keywords) {
      const cards = await sql`
        SELECT card_id, card_type, title, status
        FROM cards
        WHERE (
          LOWER(card_id) LIKE ${`%${keyword.toLowerCase()}%`}
          OR LOWER(title) LIKE ${`%${keyword.toLowerCase()}%`}
          OR LOWER(summary) LIKE ${`%${keyword.toLowerCase()}%`}
        )
        AND status = 'published'
        ORDER BY card_id
        LIMIT 5
      `;

      if (cards.length > 0) {
        found = true;
        console.log(`   Found ${cards.length} card(s) matching "${keyword}":`);
        cards.forEach(card => {
          console.log(`     - ${card.card_id} (${card.card_type}): ${card.title}`);
          results.push({
            missing_card: missing,
            found_card_id: card.card_id,
            found_card_type: card.card_type,
            found_title: card.title,
            matched_keyword: keyword
          });
        });
      }
    }

    if (!found) {
      console.log('   ❌ No similar cards found');
      results.push({
        missing_card: missing,
        found_card_id: null,
        found_card_type: null,
        found_title: null,
        matched_keyword: null
      });
    }
  }

  // Summary
  console.log('\n\n');
  console.log('╔══════════════════════════════════════════════════════════════╗');
  console.log('║                    SEARCH RESULTS SUMMARY                    ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  const foundMatches = results.filter(r => r.found_card_id !== null);
  const notFound = results.filter(r => r.found_card_id === null);

  console.log(`✅ Potential matches found: ${foundMatches.length}`);
  console.log(`❌ No matches found: ${notFound.length}\n`);

  if (foundMatches.length > 0) {
    console.log('Potential Replacements:\n');

    // Group by missing card
    const grouped = foundMatches.reduce((acc, item) => {
      if (!acc[item.missing_card]) {
        acc[item.missing_card] = [];
      }
      acc[item.missing_card].push(item);
      return acc;
    }, {} as Record<string, any[]>);

    for (const [missingCard, matches] of Object.entries(grouped)) {
      console.log(`${missingCard}:`);
      const uniqueMatches = [...new Map(matches.map(m => [m.found_card_id, m])).values()];
      uniqueMatches.forEach(match => {
        console.log(`  → ${match.found_card_id} (${match.found_card_type})`);
        console.log(`     "${match.found_title}"`);
      });
      console.log();
    }
  }

  if (notFound.length > 0) {
    console.log('Cards with no matches (need to be created):\n');
    notFound.forEach(item => {
      console.log(`  ❌ ${item.missing_card}`);
    });
    console.log();
  }

  console.log('═'.repeat(60));
}

findSimilarCards().catch(console.error);
