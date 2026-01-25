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

async function inspectTable() {
  try {
    // Get table schema
    console.log('=== ARTICLES TABLE SCHEMA ===\n');
    const schema = await sql`
      SELECT column_name, data_type, is_nullable, column_default
      FROM information_schema.columns
      WHERE table_name = 'articles'
      ORDER BY ordinal_position;
    `;
    console.table(schema);

    // Get sample article from each path
    console.log('\n=== SAMPLE ARTICLES BY PATH ===\n');

    const paths = ['history', 'risk'];

    for (const path of paths) {
      console.log(`\n--- ${path.toUpperCase()} ARTICLE ---`);
      const article = await sql`
        SELECT article_id, slug, title, path, position, status, yaml_content
        FROM articles
        WHERE path = ${path}
        ORDER BY position
        LIMIT 1
      `;

      if (article.length > 0) {
        const { article_id, slug, title, path, position, status, yaml_content } = article[0];

        console.log('Metadata:');
        console.log(`  article_id: ${article_id}`);
        console.log(`  slug: ${slug}`);
        console.log(`  title: ${title}`);
        console.log(`  path: ${path}`);
        console.log(`  position: ${position}`);
        console.log(`  status: ${status}`);

        if (yaml_content) {
          const content = JSON.parse(yaml_content as string);
          console.log('\nContent structure (keys):');
          console.log('  ', Object.keys(content));

          console.log('\nContent sample:');
          console.log(JSON.stringify(content, null, 2).substring(0, 1000) + '...');
        }
      }
    }

    // Get all unique paths
    console.log('\n\n=== ALL ARTICLE PATHS ===\n');
    const allPaths = await sql`
      SELECT DISTINCT path, COUNT(*) as count
      FROM articles
      GROUP BY path
      ORDER BY path;
    `;
    console.table(allPaths);

  } catch (error) {
    console.error('Error:', error);
  }
}

inspectTable();
