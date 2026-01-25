import { neon } from '@neondatabase/serverless';
import { readFileSync } from 'fs';
import { resolve } from 'path';

// Load .env.local manually
const envFile = readFileSync(resolve(process.cwd(), '.env.local'), 'utf-8');
const dbUrlMatch = envFile.match(/DATABASE_URL=["']?([^"'\n]+)["']?/);
if (!dbUrlMatch) {
  throw new Error('DATABASE_URL not found in .env.local');
}
const DATABASE_URL = dbUrlMatch[1];

const sql = neon(DATABASE_URL);

async function investigate() {
  try {
    const result = await sql`
      SELECT yaml_content
      FROM articles
      WHERE slug = 'when-ai-goes-wrong'
      LIMIT 1
    `;

    const content = JSON.parse(result[0].yaml_content as string);

    console.log('1. Header Image:');
    console.log(content.headerImage);

    console.log('\n2. Additional Resources:');
    console.log(content.additionalResources);

    console.log('\n3. Sources:');
    console.log(content.sources);

    console.log('\n4. Card markers in content:');
    const cardMatches = content.content.match(/\{\{CARD\|[^}]+\}\}/g);
    console.log(cardMatches || 'No card markers found');

    console.log('\n5. <strong> tags in content:');
    const strongMatches = content.content.match(/<strong>[^<]*<\/strong>/g);
    if (strongMatches) {
      console.log(`Found ${strongMatches.length} bold sections:`);
      strongMatches.slice(0, 5).forEach(match => console.log(`  - ${match}`));
    }

    // Check if cards exist for this article
    const cards = await sql`
      SELECT card_id, title, status
      FROM cards
      WHERE 'when-ai-goes-wrong' = ANY(used_in_articles)
    `;

    console.log('\n6. Cards in database for this article:');
    if (cards.length > 0) {
      console.table(cards);
    } else {
      console.log('No cards found');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

investigate();
