import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function exportResourceCardContext() {
  const cardIds = [
    'res-ai-ethics-principles-implementation',
    'res-ai-governance-career-pathways',
    'res-ai-national-security-assessment',
    'res-open-source-compliance-checklist',
    'res-regulatory-horizon-scanner',
    'res-seven-pillars-implementation'
  ];

  console.log('═══════════════════════════════════════════════════════════════');
  console.log('     RESOURCE CARD CONTEXT FOR PDF CREATION (6 CARDS)          ');
  console.log('═══════════════════════════════════════════════════════════════\n');

  for (const cardId of cardIds) {
    const [card] = await sql`
      SELECT
        card_id,
        title,
        trigger_text,
        summary,
        full_content,
        used_in_articles,
        status
      FROM cards
      WHERE card_id = ${cardId}
    `;

    if (!card) {
      console.log(`⚠️  Card not found: ${cardId}\n`);
      continue;
    }

    console.log('═══════════════════════════════════════════════════════════════');
    console.log(`CARD ${cardIds.indexOf(cardId) + 1}/6: ${cardId.toUpperCase()}`);
    console.log('═══════════════════════════════════════════════════════════════\n');

    console.log(`📋 Title: ${card.title}`);
    console.log(`🏷️  Trigger Text: ${card.trigger_text || 'NULL'}`);
    console.log(`📊 Status: ${card.status}`);
    console.log(`\n📝 Summary:\n${card.summary}\n`);

    if (card.full_content?.tags && card.full_content.tags.length > 0) {
      console.log(`🏷️  Tags: ${card.full_content.tags.join(', ')}`);
    }

    // Get the articles this is used in
    if (card.used_in_articles && card.used_in_articles.length > 0) {
      console.log(`\n📄 Used in Articles (${card.used_in_articles.length}):`);
      for (const slug of card.used_in_articles) {
        const [article] = await sql`
          SELECT title, yaml_content
          FROM articles
          WHERE slug = ${slug}
        `;

        if (article) {
          console.log(`   - ${slug}`);
          console.log(`     Article Title: ${article.title}`);

          // Try to find where this card is referenced in the article
          const content = article.yaml_content;
          if (typeof content === 'object' && content.content) {
            const articleContent = content.content;
            const triggerRegex = new RegExp(card.trigger_text || card.title, 'gi');
            const matches = articleContent.match(triggerRegex);
            if (matches) {
              console.log(`     Mentioned ${matches.length} time(s) in article`);
            }
          }
        }
      }
    }

    console.log('\n' + '─'.repeat(63) + '\n');
  }

  console.log('\n💡 NEXT STEPS:');
  console.log('Create PDF resources based on the context above.');
  console.log('Suggested filenames:');
  console.log('  1. ai-ethics-principles-implementation.pdf');
  console.log('  2. ai-governance-career-pathways.pdf');
  console.log('  3. ai-national-security-assessment.pdf');
  console.log('  4. open-source-compliance-checklist.pdf');
  console.log('  5. regulatory-horizon-scanner.pdf');
  console.log('  6. seven-pillars-implementation.pdf');
  console.log('\nPlace PDFs in: /public/downloads/resources/\n');
}

exportResourceCardContext().catch(console.error);
