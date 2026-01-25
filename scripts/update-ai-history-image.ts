import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function updateImage() {
  try {
    const result = await sql`
      UPDATE articles
      SET yaml_content = jsonb_set(
        yaml_content::jsonb,
        '{headerImage}',
        '"/images/history/ai-history.webp"'
      )::text
      WHERE slug = 'ai-history'
      RETURNING article_id, slug, yaml_content::json->>'headerImage' as header_image
    `;

    console.log('Updated ai-history article header image:');
    console.table(result);
  } catch (error) {
    console.error('Error:', error);
  }
}

updateImage();
