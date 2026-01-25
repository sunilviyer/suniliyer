import { neon } from '@neondatabase/serverless';
import { readdirSync } from 'fs';
import { join } from 'path';

const sql = neon(process.env.DATABASE_URL!);

async function compareResourceFiles() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║          COMPARING DB URLs vs ACTUAL FILES                   ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  // Get actual files in downloads/resources
  const resourcesPath = '/Volumes/External/aidefence/public/downloads/resources';
  const actualFiles = readdirSync(resourcesPath).filter(f => f.endsWith('.pdf'));

  console.log(`📁 Found ${actualFiles.length} PDF files in downloads/resources:\n`);
  actualFiles.forEach((file, i) => {
    console.log(`   ${i + 1}. ${file}`);
  });

  // Get download URLs from database
  const cards = await sql`
    SELECT card_id, title, download_url
    FROM cards
    WHERE card_type = 'resource' AND download_url IS NOT NULL
    ORDER BY card_id;
  `;

  console.log(`\n\n💾 Found ${cards.length} cards with download_url in database\n`);
  console.log('═══════════════════════════════════════════════════════════════\n');

  const mismatches: any[] = [];

  for (const card of cards) {
    const dbUrl = card.download_url as string;
    const dbFilename = dbUrl.split('/').pop();

    // Try to find matching file (exact or similar)
    const exactMatch = actualFiles.find(f => f === dbFilename);
    const similarMatch = actualFiles.find(f => {
      // Remove common suffixes and check similarity
      const dbBase = dbFilename?.replace(/-(toolkit|tool|guide|framework)\.pdf$/, '.pdf');
      const fileBase = f.replace(/-(toolkit|tool|guide|framework)\.pdf$/, '.pdf');
      return dbBase === fileBase;
    });

    if (!exactMatch) {
      mismatches.push({
        card_id: card.card_id,
        title: card.title,
        db_filename: dbFilename,
        db_full_url: dbUrl,
        actual_match: similarMatch || 'NOT FOUND',
      });
    }
  }

  console.log(`\n❌ FILENAME MISMATCHES (${mismatches.length}):\n`);

  for (let i = 0; i < mismatches.length; i++) {
    const m = mismatches[i];
    console.log(`${i + 1}. Card: ${m.card_id}`);
    console.log(`   Title: ${m.title}`);
    console.log(`   DB expects: ${m.db_filename}`);
    console.log(`   Actual file: ${m.actual_match}`);
    console.log(`   DB URL: ${m.db_full_url}\n`);
  }

  console.log('═══════════════════════════════════════════════════════════════\n');
}

compareResourceFiles().catch(console.error);
