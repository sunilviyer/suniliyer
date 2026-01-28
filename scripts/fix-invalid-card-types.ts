import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function fixInvalidCardTypes() {
  console.log('Fixing cards with invalid type "pattern"...\n');

  const invalidCards = [
    'pattern-defense-in-depth',
    'pattern-graduated-automation',
    'pattern-strictest-standard-baseline',
    'pattern-three-lines-model',
    'pattern-verification-culture'
  ];

  for (const cardId of invalidCards) {
    await sql`
      UPDATE cards
      SET card_type = 'operational-pattern'
      WHERE card_id = ${cardId}
    `;
    console.log(`✓ Fixed: ${cardId} -> operational-pattern`);
  }

  console.log(`\n✅ Fixed ${invalidCards.length} cards with invalid type "pattern"`);
  console.log('These cards will now render properly with the correct styling.\n');
}

fixInvalidCardTypes().catch(console.error);
