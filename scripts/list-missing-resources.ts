import { neon } from '@neondatabase/serverless';
import { existsSync } from 'fs';
import { join } from 'path';

const sql = neon(process.env.DATABASE_URL!);

async function listMissingResources() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║              MISSING RESOURCE FILES REPORT                   ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  // Get all resource cards
  const cards = await sql`
    SELECT card_id, title, download_url, learn_more, used_in_articles
    FROM cards
    WHERE card_type = 'resource'
    ORDER BY card_id;
  `;

  const missingDownloads: any[] = [];
  const noDownloadUrl: any[] = [];

  for (const card of cards) {
    if (card.download_url) {
      const filePath = join('/Volumes/External/aidefence/public', card.download_url);
      if (!existsSync(filePath)) {
        missingDownloads.push({
          card_id: card.card_id,
          title: card.title,
          download_url: card.download_url,
          used_in: card.used_in_articles,
        });
      }
    } else {
      noDownloadUrl.push({
        card_id: card.card_id,
        title: card.title,
        used_in: card.used_in_articles,
      });
    }
  }

  console.log('═══════════════════════════════════════════════════════════════');
  console.log(`\n📥 MISSING DOWNLOAD FILES (${missingDownloads.length})\n`);
  console.log('Files that have download_url set but file doesn\'t exist:\n');

  let counter = 1;
  for (const item of missingDownloads) {
    console.log(`${counter}. ${item.download_url}`);
    console.log(`   Card: ${item.card_id}`);
    console.log(`   Title: ${item.title}`);
    console.log(`   Used in: ${item.used_in?.join(', ') || 'none'}\n`);
    counter++;
  }

  console.log('═══════════════════════════════════════════════════════════════');
  console.log(`\n⚠️  NO DOWNLOAD URL SET (${noDownloadUrl.length})\n`);
  console.log('Cards without download_url field:\n');

  counter = 1;
  for (const item of noDownloadUrl) {
    console.log(`${counter}. Card: ${item.card_id}`);
    console.log(`   Title: ${item.title}`);
    console.log(`   Used in: ${item.used_in?.join(', ') || 'none'}\n`);
    counter++;
  }

  console.log('═══════════════════════════════════════════════════════════════');
  console.log(`\n📊 SUMMARY:\n`);
  console.log(`   Missing files: ${missingDownloads.length}`);
  console.log(`   No URL set: ${noDownloadUrl.length}`);
  console.log(`   TOTAL: ${missingDownloads.length + noDownloadUrl.length}\n`);
}

listMissingResources().catch(console.error);
