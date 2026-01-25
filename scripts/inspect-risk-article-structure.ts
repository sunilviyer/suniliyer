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

async function inspectStructure() {
  try {
    const result = await sql`
      SELECT yaml_content
      FROM articles
      WHERE slug = 'when-ai-goes-wrong'
      LIMIT 1
    `;

    if (result.length > 0) {
      const content = JSON.parse(result[0].yaml_content as string);

      console.log('Article structure:');
      console.log('Keys:', Object.keys(content));
      console.log('\nTLDR:', content.tldr || 'MISSING');
      console.log('\nHeader Image:', content.header_image || content.headerImage || 'MISSING');
      console.log('\nKey Learnings:', content.key_learnings ? 'EXISTS' : 'MISSING');
      console.log('\nAdditional Resources:', content.additional_resources ? 'EXISTS' : 'MISSING');
      console.log('\nSources:', content.sources ? 'EXISTS' : 'MISSING');
      console.log('\nContent preview (first 500 chars):');
      console.log(content.content?.substring(0, 500) || 'MISSING');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

inspectStructure();
