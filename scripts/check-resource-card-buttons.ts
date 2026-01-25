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

async function checkResourceCards() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║         CHECKING RESOURCE CARDS FOR BUTTON DATA             ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  // Get all resource cards
  const resourceCards = await sql`
    SELECT
      card_id,
      title,
      learn_more,
      download_url,
      used_in_articles
    FROM cards
    WHERE card_type = 'resource'
    AND status = 'published'
    ORDER BY card_id
  `;

  console.log(`Found ${resourceCards.length} published resource cards\n`);

  let withLearnMore = 0;
  let withDownload = 0;
  let withBoth = 0;
  let withNeither = 0;

  for (const card of resourceCards) {
    const hasLearnMore = !!card.learn_more;
    const hasDownload = !!card.download_url;

    if (hasLearnMore && hasDownload) {
      withBoth++;
      console.log(`✅ ${card.card_id}`);
      console.log(`   Title: ${card.title}`);
      console.log(`   Learn More: ${card.learn_more}`);
      console.log(`   Download: ${card.download_url}`);
      console.log(`   Used in: ${card.used_in_articles?.join(', ') || 'none'}\n`);
    } else if (hasLearnMore) {
      withLearnMore++;
      console.log(`📘 ${card.card_id}`);
      console.log(`   Title: ${card.title}`);
      console.log(`   Learn More: ${card.learn_more}`);
      console.log(`   Download: ❌ Missing`);
      console.log(`   Used in: ${card.used_in_articles?.join(', ') || 'none'}\n`);
    } else if (hasDownload) {
      withDownload++;
      console.log(`📥 ${card.card_id}`);
      console.log(`   Title: ${card.title}`);
      console.log(`   Learn More: ❌ Missing`);
      console.log(`   Download: ${card.download_url}`);
      console.log(`   Used in: ${card.used_in_articles?.join(', ') || 'none'}\n`);
    } else {
      withNeither++;
      console.log(`❌ ${card.card_id}`);
      console.log(`   Title: ${card.title}`);
      console.log(`   Learn More: ❌ Missing`);
      console.log(`   Download: ❌ Missing`);
      console.log(`   Used in: ${card.used_in_articles?.join(', ') || 'none'}\n`);
    }
  }

  console.log('╔══════════════════════════════════════════════════════════════╗');
  console.log('║                         SUMMARY                              ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');
  console.log(`  📊 Total resource cards: ${resourceCards.length}`);
  console.log(`  ✅ With both buttons: ${withBoth}`);
  console.log(`  📘 With learn_more only: ${withLearnMore}`);
  console.log(`  📥 With download_url only: ${withDownload}`);
  console.log(`  ❌ With neither: ${withNeither}\n`);
}

checkResourceCards().catch(console.error);
