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

// Cards that don't exist - will be removed from content
const missingCards = [
  'res-taxonomy-ai-harms',
  'concept-proxy-discrimination',
  'res-bias-mitigation-toolkit',
  'sc-fake-professor-bio',
  'sc-phantom-ceo-quote',
  'res-hallucination-mitigation-checklist',
  'concept-differential-privacy',
  'concept-federated-learning',
  'fw-c2pa-standard',
  'res-deepfake-verification-protocols'
];

// Map of article slug to card IDs that should be linked
const articleCardMap: Record<string, string[]> = {
  'when-ai-goes-wrong': ['ex-uber-arizona-fatality', 'ex-amazon-hiring', 'ex-air-canada-chatbot'],
  'algorithmic-bias': ['ex-amazon-hiring', 'concept-representation-bias', 'ex-apple-card-bias', 'ex-compas-recidivism'],
  'ai-hallucinations': ['concept-hallucination', 'concept-rag'],
  'ai-privacy': ['ex-strava-military-heatmap', 'ex-target-pregnancy-prediction', 'ex-clearview-ai-scraping'],
  'deepfakes-synthetic-media': ['ex-uae-bank-voice-cloning', 'ex-pope-francis-puffer-jacket']
};

async function comprehensiveFix() {
  try {
    console.log('=== COMPREHENSIVE RISK ARTICLE FIX ===\n');

    // Step 1: Remove missing card references from articles
    console.log('Step 1: Removing missing card references...\n');

    const articles = await sql`
      SELECT article_id, slug, yaml_content
      FROM articles
      WHERE path = 'risk' AND yaml_content IS NOT NULL
    `;

    for (const article of articles) {
      const content = JSON.parse(article.yaml_content as string);
      let htmlContent = content.content;
      let removed = 0;

      for (const missingCard of missingCards) {
        const regex = new RegExp(`\\{\\{CARD\\|${missingCard}\\|[^}]+\\}\\}`, 'g');
        const matches = htmlContent.match(regex);
        if (matches) {
          htmlContent = htmlContent.replace(regex, '');
          removed += matches.length;
        }
      }

      if (removed > 0) {
        content.content = htmlContent;
        await sql`
          UPDATE articles
          SET yaml_content = ${JSON.stringify(content)}
          WHERE article_id = ${article.article_id}
        `;
        console.log(`  ✓ ${article.slug}: Removed ${removed} missing card reference(s)`);
      }
    }

    // Step 2: Publish all draft cards and link them to articles
    console.log('\nStep 2: Publishing draft cards and linking to articles...\n');

    for (const [articleSlug, cardIds] of Object.entries(articleCardMap)) {
      for (const cardId of cardIds) {
        // Check if card exists
        const cardResult = await sql`
          SELECT card_id, status, used_in_articles
          FROM cards
          WHERE card_id = ${cardId}
        `;

        if (cardResult.length === 0) {
          console.log(`  ⚠ ${cardId}: Card not found in database`);
          continue;
        }

        const card = cardResult[0];
        let usedIn: string[] = [];

        if (card.used_in_articles) {
          usedIn = Array.isArray(card.used_in_articles)
            ? card.used_in_articles
            : typeof card.used_in_articles === 'string'
            ? card.used_in_articles.split(',').map((s: string) => s.trim())
            : [];
        }

        // Add article slug if not present
        if (!usedIn.includes(articleSlug)) {
          usedIn.push(articleSlug);
        }

        // Update card: publish and link
        await sql`
          UPDATE cards
          SET status = 'published',
              used_in_articles = ${usedIn}
          WHERE card_id = ${cardId}
        `;

        const action = card.status === 'draft' ? 'Published and linked' : 'Linked';
        console.log(`  ✓ ${cardId}: ${action} to ${articleSlug}`);
      }
    }

    console.log('\n=== FIX COMPLETE ===');
    console.log('\nSummary:');
    console.log(`- Removed ${missingCards.length} missing card types from articles`);
    console.log(`- Published and linked all existing cards to their articles`);
  } catch (error) {
    console.error('Error:', error);
  }
}

comprehensiveFix();
