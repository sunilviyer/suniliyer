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

async function audit() {
  try {
    const articles = await sql`
      SELECT article_id, slug, yaml_content
      FROM articles
      WHERE path = 'risk' AND yaml_content IS NOT NULL
      ORDER BY article_id
    `;

    console.log(`Auditing ${articles.length} risk articles\n`);

    for (const article of articles) {
      const content = JSON.parse(article.yaml_content as string);
      const cardMatches = content.content.match(/\{\{CARD\|([^|]+)\|[^}]+\}\}/g);

      if (!cardMatches) {
        console.log(`${article.slug}: No cards`);
        continue;
      }

      console.log(`\n${article.slug} (${cardMatches.length} cards):`);

      for (const match of cardMatches) {
        const cardIdMatch = match.match(/\{\{CARD\|([^|]+)\|/);
        if (!cardIdMatch) continue;

        const cardId = cardIdMatch[1];

        // Check if card exists
        const cardResult = await sql`
          SELECT card_id, title, status, used_in_articles
          FROM cards
          WHERE card_id = ${cardId}
        `;

        if (cardResult.length === 0) {
          console.log(`  ✗ ${cardId} - DOES NOT EXIST`);
        } else {
          const card = cardResult[0];
          const usedIn = Array.isArray(card.used_in_articles)
            ? card.used_in_articles
            : typeof card.used_in_articles === 'string'
            ? card.used_in_articles.split(',').map((s: string) => s.trim())
            : [];

          const isLinked = usedIn.includes(article.slug);
          const statusIcon = card.status === 'published' ? '✓' : '⚠';

          console.log(`  ${statusIcon} ${cardId} - ${card.status}${isLinked ? '' : ' (NOT LINKED)'}`);
        }
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

audit();
