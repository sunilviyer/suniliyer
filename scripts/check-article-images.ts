import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function checkImages() {
  try {
    const result = await sql`
      SELECT
        article_id,
        slug,
        title,
        yaml_content::json->>'headerImage' as current_image
      FROM articles
      WHERE slug IN ('what-ai-actually-is', 'ai-history')
      ORDER BY article_id
    `;

    console.log('Current article images:');
    console.table(result);
  } catch (error) {
    console.error('Error:', error);
  }
}

checkImages();
