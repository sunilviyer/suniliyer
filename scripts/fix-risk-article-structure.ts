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

async function fixStructure() {
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

        // Transform to correct format
        const fixed = {
          tldr: content.seo?.description || '',  // Use SEO description as TLDR if available
          tags: content.tags || [],
          readTime: content.read_time || '',
          updatedDate: content.updated_date || '',
          headerImage: content.header_image || '',
          content: content.content || '',
          keyLearnings: content.key_learnings || [],
          additionalResources: content.additional_resources || [],
          sources: content.sources || []
        };

        // Convert content HTML format
        let htmlContent = fixed.content;

        // Replace <card> tags with {{CARD|id|trigger}} format
        htmlContent = htmlContent.replace(/<card\s+id="([^"]+)"\s+trigger="([^"]+)"\s*\/>/g, '{{CARD|$1|$2}}');
        htmlContent = htmlContent.replace(/<card\s+id='([^']+)'\s+trigger='([^']+)'\s*\/>/g, '{{CARD|$1|$2}}');

        // Replace HTML tags with custom classes
        htmlContent = htmlContent.replace(/<h2>/g, '<h2 class="content-h2"><span class="heading-decoration"></span>');
        htmlContent = htmlContent.replace(/<p>/g, '<div class="content-p">');
        htmlContent = htmlContent.replace(/<\/p>/g, '</div>');

        fixed.content = htmlContent;

        // Update database
        await sql`
          UPDATE articles
          SET yaml_content = ${JSON.stringify(fixed)}
          WHERE article_id = ${article.article_id}
        `;

        console.log(`✓ Fixed ${article.slug}`);
      } catch (error) {
        console.error(`✗ Failed to fix ${article.slug}:`, error);
      }
    }

    console.log('\nStructure fix complete!');
  } catch (error) {
    console.error('Error:', error);
  }
}

fixStructure();
