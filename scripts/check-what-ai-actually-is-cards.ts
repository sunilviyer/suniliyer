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

async function checkCards() {
  try {
    // Get the article content
    const article = await sql`
      SELECT
        article_id,
        slug,
        yaml_content::json->>'content' as content
      FROM articles
      WHERE slug = 'what-ai-actually-is'
    `;

    if (article.length > 0) {
      const content = article[0].content as string;

      // Extract all card references using regex
      const cardMatches = content.matchAll(/\{\{CARD\|([^|]+)\|([^}]+)\}\}/g);
      const cardIds = Array.from(cardMatches).map(match => match[1]);

      console.log('Card references found in content:');
      console.log(cardIds);

      if (cardIds.length > 0) {
        // Check which cards exist in DB
        const cards = await sql`
          SELECT card_id, title, card_type, status
          FROM cards
          WHERE card_id = ANY(${cardIds})
        `;

        console.log('\nCards found in database:');
        console.table(cards);

        // Find missing cards
        const existingIds = cards.map((c: any) => c.card_id);
        const missingIds = cardIds.filter(id => !existingIds.includes(id));

        if (missingIds.length > 0) {
          console.log('\nMissing cards:');
          console.log(missingIds);
        }
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

checkCards();
