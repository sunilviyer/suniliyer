import { neon } from '@neondatabase/serverless';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import * as yaml from 'js-yaml';

// Load .env.local manually
const envFile = readFileSync(resolve(process.cwd(), '.env.local'), 'utf-8');
const dbUrlMatch = envFile.match(/DATABASE_URL=["']?([^"'\n]+)["']?/);
if (!dbUrlMatch) {
  throw new Error('DATABASE_URL not found in .env.local');
}
const DATABASE_URL = dbUrlMatch[1];

const sql = neon(DATABASE_URL);

async function convertYamlToJson() {
  try {
    // Get all risk articles with yaml_content
    const articles = await sql`
      SELECT article_id, slug, yaml_content
      FROM articles
      WHERE path = 'risk' AND yaml_content IS NOT NULL
    `;

    console.log(`Found ${articles.length} risk articles to convert\n`);

    for (const article of articles) {
      try {
        const yamlContent = article.yaml_content as string;

        // Parse YAML to object
        const parsed = yaml.load(yamlContent) as any;

        // Convert to JSON string
        const jsonContent = JSON.stringify(parsed);

        // Update database
        await sql`
          UPDATE articles
          SET yaml_content = ${jsonContent}
          WHERE article_id = ${article.article_id}
        `;

        console.log(`✓ Converted ${article.slug}`);
      } catch (error) {
        console.error(`✗ Failed to convert ${article.slug}:`, error);
      }
    }

    console.log('\nConversion complete!');
  } catch (error) {
    console.error('Error:', error);
  }
}

convertYamlToJson();
