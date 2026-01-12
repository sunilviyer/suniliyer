/**
 * Script to populate the cards database from existing article page.tsx files
 *
 * This script:
 * 1. Scans all article page.tsx files
 * 2. Extracts cardData objects
 * 3. Inserts or updates cards in the database
 * 4. Updates used_in_articles array
 *
 * Usage: npx tsx scripts/populate-cards-database.ts
 */

import { neon } from '@neondatabase/serverless';
import * as fs from 'fs';
import * as path from 'path';

const sql = neon(process.env.DATABASE_URL!);

interface CardData {
  id: string;
  title: string;
  type: string;
  summary: string;
  tags: string[];
  articleSlug?: string;
}

interface ArticleCards {
  articleSlug: string;
  cards: Record<string, CardData>;
}

/**
 * Extract card data from a page.tsx file
 */
function extractCardsFromFile(filePath: string, articleSlug: string): ArticleCards | null {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');

    // Check if file contains cardData
    if (!content.includes('const cardData =')) {
      return null;
    }

    // Extract the cardData object using regex
    const cardDataMatch = content.match(/const cardData = \{([\s\S]*?)\};/);
    if (!cardDataMatch) {
      return null;
    }

    // Parse the card data (this is a simplified parser)
    const cardDataString = cardDataMatch[0];
    const cards: Record<string, CardData> = {};

    // Extract individual card objects
    const cardMatches = cardDataString.matchAll(/(\w+):\s*\{([^}]+(?:\{[^}]*\}[^}]*)*)\}/g);

    for (const match of cardMatches) {
      const cardKey = match[1];
      const cardContent = match[2];

      // Extract card properties
      const idMatch = cardContent.match(/id:\s*['"]([^'"]+)['"]/);
      const titleMatch = cardContent.match(/title:\s*['"]([^'"]+)['"]/);
      const typeMatch = cardContent.match(/type:\s*['"]([^'"]+)['"]/);
      const summaryMatch = cardContent.match(/summary:\s*['"]([^'"]+)['"]/);
      const tagsMatch = cardContent.match(/tags:\s*\[([^\]]+)\]/);
      const articleSlugMatch = cardContent.match(/articleSlug:\s*['"]([^'"]+)['"]/);

      if (idMatch && titleMatch && typeMatch) {
        cards[cardKey] = {
          id: idMatch[1],
          title: titleMatch[1],
          type: typeMatch[1],
          summary: summaryMatch ? summaryMatch[1] : '',
          tags: tagsMatch ? tagsMatch[1].split(',').map(t => t.trim().replace(/['"]/g, '')) : [],
          articleSlug: articleSlugMatch ? articleSlugMatch[1] : undefined
        };
      }
    }

    if (Object.keys(cards).length === 0) {
      return null;
    }

    return {
      articleSlug,
      cards
    };
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
    return null;
    }
}

/**
 * Insert or update a card in the database
 */
async function upsertCard(card: CardData, articleSlug: string): Promise<void> {
  try {
    // Check if card exists
    const existing = await sql`
      SELECT card_id, used_in_articles
      FROM cards
      WHERE card_id = ${card.id}
    `;

    if (existing.length > 0) {
      // Update existing card - add article to used_in_articles if not already there
      const usedIn = existing[0].used_in_articles || [];
      if (!usedIn.includes(articleSlug)) {
        await sql`
          UPDATE cards
          SET
            used_in_articles = array_append(used_in_articles, ${articleSlug}),
            usage_count = usage_count + 1,
            updated_at = NOW()
          WHERE card_id = ${card.id}
        `;
        console.log(`  ✓ Updated card ${card.id} - added article ${articleSlug}`);
      } else {
        console.log(`  - Card ${card.id} already includes article ${articleSlug}`);
      }
    } else {
      // Insert new card
      const fullContent = {
        tags: card.tags,
        articleSlug: card.articleSlug
      };

      await sql`
        INSERT INTO cards (
          card_id,
          card_type,
          title,
          summary,
          full_content,
          used_in_articles,
          status,
          created_at,
          updated_at
        ) VALUES (
          ${card.id},
          ${card.type},
          ${card.title},
          ${card.summary},
          ${JSON.stringify(fullContent)}::jsonb,
          ARRAY[${articleSlug}]::text[],
          'published',
          NOW(),
          NOW()
        )
      `;
      console.log(`  ✓ Inserted new card ${card.id}`);
    }
  } catch (error) {
    console.error(`  ✗ Error upserting card ${card.id}:`, error);
  }
}

/**
 * Main function
 */
async function main() {
  console.log('🔍 Scanning article files...\n');

  const articlesDir = path.join(process.cwd(), 'app', 'articles');
  const articleDirs = fs.readdirSync(articlesDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  let totalCards = 0;
  let totalArticles = 0;

  for (const articleDir of articleDirs) {
    const pagePath = path.join(articlesDir, articleDir, 'page.tsx');

    if (!fs.existsSync(pagePath)) {
      continue;
    }

    const articleSlug = articleDir;
    console.log(`📄 Processing article: ${articleSlug}`);

    const articleCards = extractCardsFromFile(pagePath, articleSlug);

    if (!articleCards) {
      console.log(`  ⚠️  No cards found in ${articleSlug}\n`);
      continue;
    }

    const cards = Object.values(articleCards.cards);
    console.log(`  Found ${cards.length} cards`);

    for (const card of cards) {
      await upsertCard(card, articleSlug);
      totalCards++;
    }

    totalArticles++;
    console.log('');
  }

  console.log('✅ Database population complete!');
  console.log(`   Processed ${totalArticles} articles`);
  console.log(`   Processed ${totalCards} card references\n`);
}

// Run the script
main().catch(console.error);
