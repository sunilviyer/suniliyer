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

async function debug() {
  try {
    const result = await sql`
      SELECT yaml_content
      FROM articles
      WHERE slug = 'when-ai-goes-wrong'
      LIMIT 1
    `;

    const content = JSON.parse(result[0].yaml_content as string);

    console.log('keyLearnings value:');
    console.log(content.keyLearnings);
    console.log('\nType:', typeof content.keyLearnings);
    console.log('Is array:', Array.isArray(content.keyLearnings));
    console.log('Length:', content.keyLearnings?.length);
  } catch (error) {
    console.error('Error:', error);
  }
}

debug();
