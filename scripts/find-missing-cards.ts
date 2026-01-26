import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function findMissingCards() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║              FIND MISSING CARD REFERENCES                    ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  // Get all articles from responsibility and future paths
  const articles = await sql`
    SELECT slug, path, yaml_content
    FROM articles
    WHERE path IN ('responsibility', 'future', 'terminology', 'risk')
    ORDER BY path, position;
  `;

  const cardReferencesMap: Record<string, string[]> = {};
  const allCardIds = new Set<string>();

  for (const article of articles) {
    const content = (JSON.parse(article.yaml_content as string).content || '') as string;
    const cardPattern = /\{\{CARD\|([^|]+)\|/g;
    let match;
    const cardIds: string[] = [];

    while ((match = cardPattern.exec(content)) !== null) {
      const cardId = match[1];
      cardIds.push(cardId);
      allCardIds.add(cardId);
    }

    if (cardIds.length > 0) {
      cardReferencesMap[article.slug as string] = cardIds;
    }
  }

  console.log(`Found ${allCardIds.size} unique card IDs referenced across articles\n`);

  // Check which cards exist in the database
  const existingCards = await sql`
    SELECT card_id FROM cards WHERE card_id = ANY(${Array.from(allCardIds)})
  `;

  const existingCardIds = new Set(existingCards.map(c => c.card_id as string));
  const missingCardIds = Array.from(allCardIds).filter(id => !existingCardIds.has(id));

  console.log(`${existingCardIds.size} cards exist in database`);
  console.log(`${missingCardIds.length} cards are MISSING\n`);

  if (missingCardIds.length > 0) {
    console.log('MISSING CARDS:');
    console.log('═══════════════════════════════════════════════════════════════');
    missingCardIds.sort().forEach(cardId => {
      const usedIn = Object.entries(cardReferencesMap)
        .filter(([_, ids]) => ids.includes(cardId))
        .map(([slug]) => slug);
      console.log(`  ${cardId}`);
      console.log(`    Used in: ${usedIn.join(', ')}`);
    });
    console.log('═══════════════════════════════════════════════════════════════\n');
  } else {
    console.log('✅ All card references exist in the database!\n');
  }
}

findMissingCards().catch(console.error);
