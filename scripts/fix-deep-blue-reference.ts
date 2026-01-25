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

async function fixDeepBlueReference() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║         FIXING DEEP BLUE CARD REFERENCE                      ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  // Step 1: Get current article content
  console.log('📖 Step 1: Reading history-08 article...\n');
  const article = await sql`
    SELECT yaml_content FROM articles WHERE article_id = 'history-08'
  `;

  if (article.length === 0) {
    throw new Error('Article history-08 not found');
  }

  const content = JSON.parse(article[0].yaml_content as string);
  console.log('✅ Article loaded\n');

  // Step 2: Update card reference
  console.log('🔄 Step 2: Updating card reference...\n');
  const oldRef = '{{CARD|ms-deep-blue|';
  const newRef = '{{CARD|ms-deep-blue-1997|';

  content.content = content.content.replace(
    new RegExp(oldRef.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
    newRef
  );

  await sql`
    UPDATE articles
    SET yaml_content = ${JSON.stringify(content)}
    WHERE article_id = 'history-08'
  `;

  console.log('✅ Updated: ms-deep-blue → ms-deep-blue-1997\n');

  // Step 3: Publish ms-deep-blue-1997
  console.log('📝 Step 3: Publishing ms-deep-blue-1997...\n');
  await sql`
    UPDATE cards
    SET status = 'published',
        used_in_articles = ARRAY['ai-history']
    WHERE card_id = 'ms-deep-blue-1997'
  `;
  console.log('✅ Published and linked ms-deep-blue-1997 to ai-history\n');

  // Step 4: Delete duplicate ms-deep-blue
  console.log('🗑️  Step 4: Deleting duplicate ms-deep-blue card...\n');
  await sql`
    DELETE FROM cards
    WHERE card_id = 'ms-deep-blue'
  `;
  console.log('✅ Deleted: ms-deep-blue\n');

  console.log('╔══════════════════════════════════════════════════════════════╗');
  console.log('║                    ✅ FIX COMPLETE                           ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  // Verify
  console.log('🔍 Verification:\n');
  const verification = await sql`
    SELECT card_id, status, used_in_articles
    FROM cards
    WHERE card_id = 'ms-deep-blue-1997'
  `;

  if (verification.length > 0) {
    console.log('Card: ms-deep-blue-1997');
    console.log(`  Status: ${verification[0].status}`);
    console.log(`  Used in: ${verification[0].used_in_articles}`);
  }

  const deleted = await sql`
    SELECT card_id FROM cards WHERE card_id = 'ms-deep-blue'
  `;
  console.log(`\nDuplicate deleted: ${deleted.length === 0 ? '✅ Yes' : '❌ No'}`);
}

fixDeepBlueReference().catch(console.error);
