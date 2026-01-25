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

async function fixCards() {
  try {
    console.log('Fixing risk article cards:\n');

    // 1. Publish draft cards and add to when-ai-goes-wrong
    const cardsToPublish = [
      'ex-uber-arizona-fatality',
      'ex-amazon-hiring'
    ];

    for (const cardId of cardsToPublish) {
      // Get current used_in_articles
      const result = await sql`
        SELECT used_in_articles FROM cards WHERE card_id = ${cardId}
      `;

      let usedIn: string[] = [];
      if (result[0]?.used_in_articles) {
        const current = result[0].used_in_articles as any;
        usedIn = Array.isArray(current) ? current :
                 typeof current === 'string' ? current.split(',').map(s => s.trim()) :
                 [];
      }

      // Add when-ai-goes-wrong if not present
      if (!usedIn.includes('when-ai-goes-wrong')) {
        usedIn.push('when-ai-goes-wrong');
      }

      await sql`
        UPDATE cards
        SET status = 'published',
            used_in_articles = ${usedIn}
        WHERE card_id = ${cardId}
        RETURNING card_id, status, used_in_articles
      `;

      console.log(`✓ Published ${cardId} and added to when-ai-goes-wrong`);
    }

    // 2. Update ex-air-canada-chatbot to add when-ai-goes-wrong
    const airCanadaResult = await sql`
      SELECT used_in_articles FROM cards WHERE card_id = 'ex-air-canada-chatbot'
    `;

    let usedIn: string[] = [];
    if (airCanadaResult[0]?.used_in_articles) {
      const current = airCanadaResult[0].used_in_articles as any;
      usedIn = Array.isArray(current) ? current :
               typeof current === 'string' ? current.split(',').map(s => s.trim()) :
               [];
    }

    if (!usedIn.includes('when-ai-goes-wrong')) {
      usedIn.push('when-ai-goes-wrong');

      await sql`
        UPDATE cards
        SET used_in_articles = ${usedIn}
        WHERE card_id = 'ex-air-canada-chatbot'
      `;

      console.log('✓ Added ex-air-canada-chatbot to when-ai-goes-wrong');
    }

    // 3. Check if res-taxonomy-ai-harms needs to be created
    console.log('\n⚠ Card res-taxonomy-ai-harms does not exist in database');
    console.log('  This card needs to be created or the reference should be removed from the article');

    console.log('\n✓ Card fixes complete!');
  } catch (error) {
    console.error('Error:', error);
  }
}

fixCards();
