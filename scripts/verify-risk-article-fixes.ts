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

async function verify() {
  try {
    // Check one article's content
    const result = await sql`
      SELECT slug, yaml_content
      FROM articles
      WHERE slug = 'when-ai-goes-wrong'
      LIMIT 1
    `;

    if (result.length > 0) {
      const content = JSON.parse(result[0].yaml_content as string);

      console.log('✓ When AI Goes Wrong - Verification:');
      console.log('\n1. Header Image:');
      console.log('  ', content.headerImage);

      console.log('\n2. Card markers found:');
      const cardMatches = content.content.match(/\{\{CARD\|[^}]+\}\}/g);
      if (cardMatches) {
        console.log(`   ${cardMatches.length} cards found:`);
        cardMatches.forEach((match: string) => console.log('   -', match));
      } else {
        console.log('   No card markers found');
      }

      console.log('\n3. Bold tags remaining:');
      const strongMatches = content.content.match(/<strong>[^<]*<\/strong>/g);
      if (strongMatches && strongMatches.length > 0) {
        console.log(`   ⚠ Found ${strongMatches.length} bold tags still present`);
        strongMatches.slice(0, 3).forEach((match: string) => console.log('   -', match));
      } else {
        console.log('   ✓ No bold tags found (correct)');
      }

      console.log('\n4. Additional Resources:');
      console.log('   Length:', content.additionalResources?.length || 0);
      if (content.additionalResources?.length > 0) {
        console.log('   Items:', content.additionalResources);
      }

      console.log('\n5. Sources:');
      console.log('   Length:', content.sources?.length || 0);
      if (content.sources?.length > 0) {
        console.log('   Items:', content.sources);
      }
    }

    // Check cards in database
    console.log('\n6. Cards in database for this article:');
    const cards = await sql`
      SELECT card_id, title, status
      FROM cards
      WHERE 'when-ai-goes-wrong' = ANY(used_in_articles)
      ORDER BY card_id
    `;

    if (cards.length > 0) {
      console.table(cards);
    } else {
      console.log('   No cards found');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

verify();
