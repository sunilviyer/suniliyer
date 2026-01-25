import { neon } from '@neondatabase/serverless';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const envFile = readFileSync(resolve(process.cwd(), '.env.local'), 'utf-8');
const dbUrlMatch = envFile.match(/DATABASE_URL=["']?([^"'\n]+)["']?/);
if (!dbUrlMatch) {
  throw new Error('DATABASE_URL not found in .env.local');
}
const DATABASE_URL = dbUrlMatch[1];

const sql = neon(DATABASE_URL);

async function findSourcesWithURLs() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║         FINDING SOURCES/RESOURCES WITH URLs                 ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  const result = await sql`
    SELECT slug, yaml_content
    FROM articles
    WHERE status = 'published'
    ORDER BY slug
  `;

  const urlPattern = /https?:\/\/[^\s"']+/;

  for (const row of result) {
    const content = JSON.parse(row.yaml_content as string);
    let foundUrls = false;

    // Check sources for embedded URLs
    if (content.sources && Array.isArray(content.sources)) {
      for (const source of content.sources) {
        if (typeof source === 'string' && urlPattern.test(source)) {
          if (!foundUrls) {
            console.log(`\n📄 ${row.slug}`);
            console.log('─'.repeat(60));
            foundUrls = true;
          }
          console.log(`  📖 Source with URL: ${source.substring(0, 100)}...`);
        }
      }
    }

    // Check additionalResources that might be strings
    if (content.additionalResources && Array.isArray(content.additionalResources)) {
      for (const resource of content.additionalResources) {
        if (typeof resource === 'string' && urlPattern.test(resource)) {
          if (!foundUrls) {
            console.log(`\n📄 ${row.slug}`);
            console.log('─'.repeat(60));
            foundUrls = true;
          }
          console.log(`  📚 Resource with URL: ${resource.substring(0, 100)}...`);
        }
      }
    }
  }

  console.log('\n✅ Search complete\n');
}

findSourcesWithURLs().catch(console.error);
