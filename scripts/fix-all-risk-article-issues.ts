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

// Map old image names to actual files
const imageMap: Record<string, string> = {
  '/images/risk/when-ai-goes-wrong.png': '/images/risk/ai-safety-failures.webp',
  '/images/risk/algorithmic-bias.png': '/images/risk/algorithmic-bias.webp',
  '/images/risk/ai-hallucinations.png': '/images/risk/ai-hallucinations.webp',
  '/images/risk/ai-privacy.png': '/images/risk/ai-privacy-dilemma.webp',
  '/images/risk/deepfakes-synthetic-media.png': '/images/risk/deepfakes-trust-crisis.webp',
};

async function fixAllIssues() {
  try {
    const articles = await sql`
      SELECT article_id, slug, yaml_content
      FROM articles
      WHERE path = 'risk' AND yaml_content IS NOT NULL
    `;

    console.log(`Fixing ${articles.length} risk articles\n`);

    for (const article of articles) {
      try {
        const content = JSON.parse(article.yaml_content as string);

        // Fix image path
        if (content.headerImage && imageMap[content.headerImage]) {
          content.headerImage = imageMap[content.headerImage];
        }

        // Fix content
        let htmlContent = content.content;

        // Remove <strong> tags but keep the text
        htmlContent = htmlContent.replace(/<strong>([^<]*)<\/strong>/g, '$1');

        // Convert card tags: <card type="X" id="Y">trigger</card> → {{CARD|Y|trigger}}
        htmlContent = htmlContent.replace(/<card[^>]+id="([^"]+)"[^>]*>([^<]+)<\/card>/g, '{{CARD|$1|$2}}');
        htmlContent = htmlContent.replace(/<card[^>]+id='([^']+)'[^>]*>([^<]+)<\/card>/g, '{{CARD|$1|$2}}');

        content.content = htmlContent;

        // Update database
        await sql`
          UPDATE articles
          SET yaml_content = ${JSON.stringify(content)}
          WHERE article_id = ${article.article_id}
        `;

        console.log(`✓ Fixed ${article.slug}`);
        console.log(`  - Image: ${content.headerImage}`);
        console.log(`  - Cards found: ${(htmlContent.match(/\{\{CARD\|/g) || []).length}`);
      } catch (error) {
        console.error(`✗ Failed to fix ${article.slug}:`, error);
      }
    }

    console.log('\nAll fixes complete!');
  } catch (error) {
    console.error('Error:', error);
  }
}

fixAllIssues();
