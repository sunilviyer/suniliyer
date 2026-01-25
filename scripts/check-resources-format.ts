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

async function checkResourcesFormat() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║         CHECKING RESOURCES FORMAT IN ARTICLES                ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  const result = await sql`
    SELECT slug, yaml_content
    FROM articles
    WHERE slug IN ('ai-hallucinations', 'ai-privacy', 'when-ai-goes-wrong')
    LIMIT 3
  `;

  for (const row of result) {
    const content = JSON.parse(row.yaml_content as string);
    console.log(`\n📄 Article: ${row.slug}`);
    console.log('─'.repeat(60));

    if (content.additionalResources) {
      console.log('\n📚 Additional Resources:');
      console.log(JSON.stringify(content.additionalResources.slice(0, 2), null, 2));
    }

    if (content.sources) {
      console.log('\n📖 Sources:');
      console.log(JSON.stringify(content.sources.slice(0, 2), null, 2));
    }
  }
}

checkResourcesFormat().catch(console.error);
