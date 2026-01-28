import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function checkHeaderImages() {
  console.log('Checking header images for articles...\n');

  const articles = await sql`
    SELECT slug, yaml_content::json->>'headerImage' as header_image
    FROM articles
    WHERE slug IN ('foundation-models', 'ai-privacy', 'ai-existential-risk', 'future-ai-ethics')
    ORDER BY slug
  `;

  console.log('Current header images:');
  articles.forEach((a: any) => {
    console.log(`${a.slug}: ${a.header_image || 'NULL'}`);
  });
}

checkHeaderImages().catch(console.error);
