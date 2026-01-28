import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function getDetailedContext() {
  const cardToArticle = {
    'res-ai-ethics-principles-implementation': 'future-ai-ethics',
    'res-ai-governance-career-pathways': 'ai-governance-careers',
    'res-ai-national-security-assessment': 'ai-national-security',
    'res-open-source-compliance-checklist': 'ai-technology-stack',
    'res-regulatory-horizon-scanner': 'future-ai-regulation',
    'res-seven-pillars-implementation': 'trustworthy-ai'
  };

  for (const [cardId, articleSlug] of Object.entries(cardToArticle)) {
    console.log('\n═══════════════════════════════════════════════════════════════');
    console.log(`${cardId.toUpperCase()}`);
    console.log('═══════════════════════════════════════════════════════════════\n');

    // Get card details
    const [card] = await sql`
      SELECT title, trigger_text, summary, full_content
      FROM cards
      WHERE card_id = ${cardId}
    `;

    // Get article details
    const [article] = await sql`
      SELECT title, yaml_content
      FROM articles
      WHERE slug = ${articleSlug}
    `;

    if (!card || !article) {
      console.log('⚠️  Card or article not found\n');
      continue;
    }

    console.log(`📋 Resource: ${card.title}`);
    console.log(`📄 Used in: ${article.title}\n`);

    // Find context around the resource mention
    const content = typeof article.yaml_content === 'object' ? article.yaml_content.content : '';
    const trigger = card.trigger_text || card.title;

    // Split content into paragraphs and find relevant ones
    const paragraphs = content.split('\n\n');
    const relevantParagraphs = paragraphs.filter((p: string) =>
      p.toLowerCase().includes(trigger.toLowerCase()) ||
      p.toLowerCase().includes(card.title.toLowerCase()) ||
      p.includes(cardId)
    );

    if (relevantParagraphs.length > 0) {
      console.log('🔍 Article Context (where resource is mentioned):\n');
      relevantParagraphs.forEach((p: string, i: number) => {
        // Clean up the paragraph
        let cleanP = p.trim();
        // Truncate if too long
        if (cleanP.length > 500) {
          cleanP = cleanP.substring(0, 500) + '...';
        }
        console.log(`   ${cleanP}\n`);
      });
    }

    // Show additional resources from the article for reference
    console.log('📚 Other resources in this article:');
    const resourceMatches = content.match(/\[(.*?)\]\(#(res-[^)]+)\)/g) || [];
    const uniqueResources = [...new Set(resourceMatches)].slice(0, 5);
    uniqueResources.forEach((match: string) => {
      console.log(`   ${match}`);
    });

    console.log('\n');
  }
}

getDetailedContext().catch(console.error);
