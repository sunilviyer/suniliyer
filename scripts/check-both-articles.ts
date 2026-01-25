import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function checkArticles() {
  try {
    const result = await sql`
      SELECT
        article_id,
        slug,
        title,
        status,
        yaml_content IS NOT NULL as has_content,
        LENGTH(yaml_content::text) as content_length
      FROM articles
      WHERE slug IN ('ai-history', 'what-ai-actually-is')
      ORDER BY article_id
    `;

    console.log('Articles found:');
    console.table(result);
  } catch (error) {
    console.error('Error:', error);
  }
}

checkArticles();
