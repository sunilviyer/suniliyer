import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function checkRepeatedContent() {
  console.log('Checking for repeated content...\n');

  // Check Future of AI Ethics
  console.log('=== Future of AI Ethics ===');
  const [ethics] = await sql`
    SELECT yaml_content FROM articles WHERE slug = 'future-ai-ethics'
  `;

  if (ethics) {
    const data = JSON.parse(ethics.yaml_content);
    const cardMatches = data.content.match(/\{\{CARD\|([^|]+)\|[^}]+\}\}/g);
    if (cardMatches) {
      const cardIds = cardMatches.map((m: string) => m.match(/\{\{CARD\|([^|]+)\|/)?.[1]);
      const uniqueCards = new Set(cardIds);
      const duplicates = cardIds.filter((id: string, index: number) => cardIds.indexOf(id) !== index);

      console.log(`Total card references: ${cardIds.length}`);
      console.log(`Unique cards: ${uniqueCards.size}`);
      if (duplicates.length > 0) {
        console.log(`Duplicate cards found: ${[...new Set(duplicates)].join(', ')}`);
      } else {
        console.log('No duplicate cards found');
      }
    }
  }

  // Check Governance Careers
  console.log('\n=== Governance Careers ===');
  const [careers] = await sql`
    SELECT yaml_content FROM articles WHERE slug = 'ai-governance-careers'
  `;

  if (careers) {
    const data = JSON.parse(careers.yaml_content);
    const cardMatches = data.content.match(/\{\{CARD\|([^|]+)\|[^}]+\}\}/g);
    if (cardMatches) {
      const cardIds = cardMatches.map((m: string) => m.match(/\{\{CARD\|([^|]+)\|/)?.[1]);
      const uniqueCards = new Set(cardIds);
      const duplicates = cardIds.filter((id: string, index: number) => cardIds.indexOf(id) !== index);

      console.log(`Total card references: ${cardIds.length}`);
      console.log(`Unique cards: ${uniqueCards.size}`);
      if (duplicates.length > 0) {
        console.log(`Duplicate cards found: ${[...new Set(duplicates)].join(', ')}`);
      } else {
        console.log('No duplicate cards found');
      }

      console.log('\nAll cards used:');
      [...uniqueCards].forEach((id, idx) => {
        console.log(`  ${idx + 1}. ${id}`);
      });
    }
  }
}

checkRepeatedContent().catch(console.error);
