import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function analyzeCardReferences() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║           COMPREHENSIVE CARD REFERENCE ANALYSIS              ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  const dbCards = await sql`SELECT card_id, title FROM cards ORDER BY card_id`;
  const dbCardIds = new Set(dbCards.map(c => c.card_id as string));
  console.log(`📊 Database Cards: ${dbCardIds.size} cards found\n`);

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

  const codeCardIds = Array.from(codeReferences.keys());
  console.log(`📄 Code References: ${codeCardIds.length} unique card IDs referenced\n`);

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

  const layer1 = codeCardIds.filter(id => dbCardIds.has(id));
  const layer3Initial = codeCardIds.filter(id => !dbCardIds.has(id));
  const layer2 = [];
  const layer3Final = [];

  for (const codeId of layer3Initial) {
    let bestMatch = { dbId: '', similarity: 0 };

    for (const dbId of Array.from(dbCardIds)) {
      const sim = similarity(codeId.toLowerCase(), dbId.toLowerCase());
      if (sim > bestMatch.similarity) {
        bestMatch = { dbId, similarity: sim };
      }
    }

    if (bestMatch.similarity > 0.7) {
      layer2.push({
        codeId,
        dbId: bestMatch.dbId,
        similarity: bestMatch.similarity,
        usedIn: codeReferences.get(codeId) || []
      });
    } else {
      layer3Final.push(codeId);
    }
  }

  const layer4 = Array.from(dbCardIds).filter(id => !codeReferences.has(id));

  console.log('═══════════════════════════════════════════════════════════════');
  console.log('LAYER 1: VALID MATCHES (Card in DB, Card in Code - Same Name)');
  console.log('═══════════════════════════════════════════════════════════════');
  console.log(`✅ ${layer1.length} cards perfectly matched\n`);

  console.log('═══════════════════════════════════════════════════════════════');
  console.log('LAYER 2: POTENTIAL MISMATCHES (Need Fix)');
  console.log('═══════════════════════════════════════════════════════════════');
  console.log(`⚠️  ${layer2.length} potential naming mismatches found\n`);

  layer2.forEach(item => {
    console.log(`  Code: "${item.codeId}"`);
    console.log(`  DB:   "${item.dbId}"`);
    console.log(`  Similarity: ${(item.similarity * 100).toFixed(1)}%`);
    console.log(`  Used in: ${item.usedIn.join(', ')}`);
    console.log('');
  });

  console.log('═══════════════════════════════════════════════════════════════');
  console.log('LAYER 3: MISSING CARDS (Need to Create)');
  console.log('═══════════════════════════════════════════════════════════════');
  console.log(`❌ ${layer3Final.length} cards referenced but not in database\n`);

  layer3Final.forEach(cardId => {
    const usedIn = codeReferences.get(cardId) || [];
    console.log(`  ${cardId}`);
    console.log(`    Used in: ${usedIn.join(', ')}`);
    console.log('');
  });

  console.log('═══════════════════════════════════════════════════════════════');
  console.log('LAYER 4: UNUSED CARDS (Need Review)');
  console.log('═══════════════════════════════════════════════════════════════');
  console.log(`📦 ${layer4.length} cards in database but not referenced in any article\n`);

  console.log('═══════════════════════════════════════════════════════════════');
  console.log('SUMMARY');
  console.log('═══════════════════════════════════════════════════════════════');
  console.log(`Layer 1 (Valid):      ${layer1.length} cards`);
  console.log(`Layer 2 (Need Fix):   ${layer2.length} cards`);
  console.log(`Layer 3 (Missing):    ${layer3Final.length} cards`);
  console.log(`Layer 4 (Unused):     ${layer4.length} cards`);
  console.log(`Total DB Cards:       ${dbCardIds.size}`);
  console.log(`Total Code Refs:      ${codeCardIds.length}`);
  console.log('═══════════════════════════════════════════════════════════════\n');
}

analyzeCardReferences().catch(console.error);
