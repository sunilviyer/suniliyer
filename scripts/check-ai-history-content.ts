import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function checkArticle() {
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
      WHERE slug = 'ai-history'
    `;

    console.log('Article found:');
    console.table(result);

    if (result.length > 0 && result[0].yaml_content) {
      const content = JSON.parse(result[0].yaml_content as string);
      console.log('\nContent structure:');
      console.log('- tldr:', content.tldr ? 'YES' : 'NO');
      console.log('- content:', content.content ? `YES (${content.content.length} chars)` : 'NO');
      console.log('- keyLearnings:', content.keyLearnings ? `YES (${content.keyLearnings.length} items)` : 'NO');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

checkArticle();
