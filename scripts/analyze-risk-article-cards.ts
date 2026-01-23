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

async function analyzeRiskCards() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║         RISK ARTICLES MISSING CARDS ANALYSIS                 ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  // Check if res-algorithmic-bias-detection exists (created for terminology)
  console.log('🔍 Checking if res-algorithmic-bias-detection can replace res-bias-detection-toolkit...\n');

  const biasCard = await sql`SELECT card_id, card_type, status FROM cards WHERE card_id = 'res-algorithmic-bias-detection'`;
  if (biasCard.length > 0) {
    console.log(`✅ res-algorithmic-bias-detection EXISTS (${biasCard[0].status})`);
    console.log(`   → Can replace res-bias-detection-toolkit in risk-02\n`);
  } else {
    console.log(`❌ res-algorithmic-bias-detection NOT FOUND\n`);
  }

  // List all missing cards
  console.log('─'.repeat(60));
  console.log('📋 MISSING CARDS BY TYPE:\n');

  const missingCards = {
    'Resource Cards (res-*)': [
      'res-taxonomy-ai-harms',
      'res-bias-detection-toolkit',
      'res-hallucination-mitigation-checklist',
      'res-privacy-by-design-framework',
      'res-misinformation-resilience-toolkit'
    ],
    'Scenario Cards (sc-*)': [
      'sc-redlining-zip-codes',
      'sc-social-media-radicalization',
      'sc-fake-professor-bio',
      'sc-phantom-ceo-quote',
      'sc-misinformation-exhaustion'
    ],
    'Concept Cards (concept-*)': [
      'concept-differential-privacy',
      'concept-federated-learning'
    ],
    'Trend Cards (trend-*)': [
      'trend-content-writing',
      'trend-legal-services',
      'trend-customer-service-collab',
      'trend-radiology'
    ],
    'Pattern Cards (pattern-*)': [
      'pattern-ai-workforce-transition',
      'pattern-collaborative-hiring-partnership'
    ],
    'Quote Cards (quote-*)': [
      'quote-vladimir-putin-leadership'
    ]
  };

  for (const [category, cards] of Object.entries(missingCards)) {
    console.log(`\n${category}:`);
    for (const card of cards) {
      console.log(`  ❌ ${card}`);
    }
  }

  console.log('\n\n─'.repeat(60));
  console.log('⚠️  DRAFT CARDS TO PUBLISH:\n');

  const draftCards = [
    'ex-healthcare-racial-bias',
    'ex-2016-election-misinformation',
    'ex-microsoft-tay-chatbot',
    'ex-kargu-2-drone',
    'ex-google-project-maven'
  ];

  for (const cardId of draftCards) {
    const cards = await sql`SELECT card_id, card_type, status, title FROM cards WHERE card_id = ${cardId}`;
    if (cards.length > 0) {
      console.log(`  ${cards[0].status === 'draft' ? '📝' : '✅'} ${cardId} (${cards[0].status})`);
      console.log(`     "${cards[0].title}"`);
    } else {
      console.log(`  ❌ ${cardId} - NOT FOUND`);
    }
  }

  console.log('\n\n─'.repeat(60));
  console.log('🔗 CARDS TO LINK:\n');

  const cardsToLink = [
    { card: 'ex-2010-flash-crash', articles: ['when-ai-goes-wrong', 'autonomous-weapons'] },
    { card: 'concept-proxy-discrimination', articles: ['algorithmic-bias'] },
    { card: 'concept-sycophancy', articles: ['ai-hallucinations'] },
    { card: 'ex-biden-robocall-deepfake', articles: ['deepfakes-synthetic-media'] },
    { card: 'fw-c2pa-standard', articles: ['deepfakes-synthetic-media'] },
    { card: 'res-deepfake-verification-protocols', articles: ['deepfakes-synthetic-media'] },
    { card: 'ex-uber-arizona-fatality', articles: ['autonomous-weapons'] }
  ];

  for (const { card, articles } of cardsToLink) {
    const cards = await sql`SELECT card_id, status, used_in_articles FROM cards WHERE card_id = ${card}`;
    if (cards.length > 0) {
      const usedIn = cards[0].used_in_articles || [];
      console.log(`  ✅ ${card} (${cards[0].status})`);
      console.log(`     Current: [${usedIn.join(', ')}]`);
      console.log(`     Link to: [${articles.join(', ')}]`);
    } else {
      console.log(`  ❌ ${card} - NOT FOUND`);
    }
  }

  console.log('\n\n─'.repeat(60));
  console.log('📊 SUMMARY:\n');

  let totalMissing = 0;
  for (const cards of Object.values(missingCards)) {
    totalMissing += cards.length;
  }

  console.log(`  Missing Cards: ${totalMissing}`);
  console.log(`    - Resource Cards: ${missingCards['Resource Cards (res-*)'].length}`);
  console.log(`    - Scenario Cards: ${missingCards['Scenario Cards (sc-*)'].length}`);
  console.log(`    - Concept Cards: ${missingCards['Concept Cards (concept-*)'].length}`);
  console.log(`    - Trend Cards: ${missingCards['Trend Cards (trend-*)'].length}`);
  console.log(`    - Pattern Cards: ${missingCards['Pattern Cards (pattern-*)'].length}`);
  console.log(`    - Quote Cards: ${missingCards['Quote Cards (quote-*)'].length}`);
  console.log(`\n  Draft Cards to Publish: ${draftCards.length}`);
  console.log(`  Cards to Link: ${cardsToLink.length}`);

  console.log('\n═'.repeat(60));
  console.log();
}

analyzeRiskCards().catch(console.error);
