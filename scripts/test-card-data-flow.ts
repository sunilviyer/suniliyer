import { getCardsByArticle } from '@/lib/db';

async function testCardDataFlow() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║         TESTING CARD DATA FLOW IN AI-HALLUCINATIONS         ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  const cards = await getCardsByArticle('ai-hallucinations');

  console.log(`Found ${cards.length} cards for ai-hallucinations\n`);

  for (const card of cards) {
    if (card.card_type === 'resource') {
      console.log(`\n📦 RESOURCE CARD: ${card.card_id}`);
      console.log('─'.repeat(60));
      console.log(`  Title: ${card.title}`);
      console.log(`  Type: ${card.card_type}`);
      console.log(`  Learn More: ${card.learn_more || '❌ MISSING'}`);
      console.log(`  Download URL: ${card.download_url || '❌ MISSING'}`);
      console.log(`  Summary: ${card.summary?.substring(0, 80)}...`);
      console.log(`  Status: ${card.status}`);
    }
  }
}

testCardDataFlow().catch(console.error);
