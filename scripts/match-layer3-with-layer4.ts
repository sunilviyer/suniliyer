import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function matchLayer3WithLayer4() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║     MATCH LAYER 3 (MISSING) WITH LAYER 4 (UNUSED)          ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  const dbCards = await sql`SELECT card_id, title, card_type FROM cards ORDER BY card_id`;
  const dbCardIds = new Set(dbCards.map(c => c.card_id as string));

  const articles = await sql`
    SELECT slug, path, yaml_content
    FROM articles
    ORDER BY path, position;
  `;

  const codeReferences = new Map();

  for (const article of articles) {
    try {
      const parsed = JSON.parse(article.yaml_content as string);
      const content = (parsed.content || '') as string;
      const pattern = /\{\{CARD\|([^|]+)\|/g;
      let found;

      while ((found = pattern.exec(content)) !== null) {
        const cardId = found[1];
        if (!codeReferences.has(cardId)) {
          codeReferences.set(cardId, []);
        }
        codeReferences.get(cardId).push(article.slug as string);
      }
    } catch (error) {
      console.error(`Error parsing ${article.slug}:`, error);
    }
  }

  const layer3Missing = Array.from(codeReferences.keys()).filter(id => !dbCardIds.has(id));
  const layer4Unused = Array.from(dbCardIds).filter(id => !codeReferences.has(id));

  console.log(`📊 Layer 3 (Missing): ${layer3Missing.length} cards`);
  console.log(`📦 Layer 4 (Unused): ${layer4Unused.length} cards\n`);

  function similarity(s1: string, s2: string): number {
    const longer = s1.length > s2.length ? s1 : s2;
    const shorter = s1.length > s2.length ? s2 : s1;
    if (longer.length === 0) return 1.0;
    const editDistance = levenshteinDistance(longer, shorter);
    return (longer.length - editDistance) / longer.length;
  }

  function levenshteinDistance(s1: string, s2: string): number {
    const costs = [];
    for (let i = 0; i <= s1.length; i++) {
      let lastValue = i;
      for (let j = 0; j <= s2.length; j++) {
        if (i === 0) {
          costs[j] = j;
        } else if (j > 0) {
          let newValue = costs[j - 1];
          if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          }
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
      if (i > 0) costs[s2.length] = lastValue;
    }
    return costs[s2.length];
  }

  const potentialMatches = [];
  const needsCreation = [];

  for (const missingId of layer3Missing) {
    let bestMatch = { dbId: '', similarity: 0, title: '', type: '' };

    for (const unusedCard of dbCards.filter(c => layer4Unused.includes(c.card_id as string))) {
      const sim = similarity(missingId.toLowerCase(), (unusedCard.card_id as string).toLowerCase());
      if (sim > bestMatch.similarity) {
        bestMatch = {
          dbId: unusedCard.card_id as string,
          similarity: sim,
          title: unusedCard.title as string,
          type: unusedCard.card_type as string
        };
      }
    }

    if (bestMatch.similarity > 0.6) {
      potentialMatches.push({
        missing: missingId,
        dbCard: bestMatch.dbId,
        similarity: bestMatch.similarity,
        title: bestMatch.title,
        type: bestMatch.type,
        usedIn: codeReferences.get(missingId) || []
      });
    } else {
      needsCreation.push({
        cardId: missingId,
        usedIn: codeReferences.get(missingId) || []
      });
    }
  }

  console.log('═══════════════════════════════════════════════════════════════');
  console.log('POTENTIAL MATCHES (Can Reuse Existing Cards)');
  console.log('═══════════════════════════════════════════════════════════════');
  console.log(`Found ${potentialMatches.length} potential matches\n`);

  potentialMatches.forEach(match => {
    console.log(`  Missing: "${match.missing}"`);
    console.log(`  Exists:  "${match.dbCard}" (${match.type})`);
    console.log(`  Title:   "${match.title}"`);
    console.log(`  Similarity: ${(match.similarity * 100).toFixed(1)}%`);
    console.log(`  Used in: ${match.usedIn.join(', ')}`);
    console.log('');
  });

  console.log('═══════════════════════════════════════════════════════════════');
  console.log('NEEDS CREATION (No Similar Cards Found)');
  console.log('═══════════════════════════════════════════════════════════════');
  console.log(`${needsCreation.length} cards need to be created\n`);

  const byType = new Map<string, typeof needsCreation>();
  needsCreation.forEach(card => {
    const prefix = card.cardId.split('-')[0];
    if (!byType.has(prefix)) {
      byType.set(prefix, []);
    }
    byType.get(prefix)!.push(card);
  });

  Array.from(byType.entries()).forEach(([type, cards]) => {
    console.log(`  ${type.toUpperCase()} (${cards.length}):`);
    cards.forEach(card => {
      console.log(`    - ${card.cardId}`);
      console.log(`      Used in: ${card.usedIn.join(', ')}`);
    });
    console.log('');
  });

  console.log('═══════════════════════════════════════════════════════════════');
  console.log('SUMMARY');
  console.log('═══════════════════════════════════════════════════════════════');
  console.log(`Potential Matches:  ${potentialMatches.length} (can reuse existing)`);
  console.log(`Need Creation:      ${needsCreation.length} (no matches found)`);
  console.log(`Total Layer 3:      ${layer3Missing.length}`);
  console.log('═══════════════════════════════════════════════════════════════\n');
}

matchLayer3WithLayer4().catch(console.error);
