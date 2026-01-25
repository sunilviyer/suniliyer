import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function listAllArticles() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║                    ALL ARTICLES IN DATABASE                  ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  const result = await sql`
    SELECT article_id, slug, title, path, status,
           yaml_content::json->>'headerImage' as header_image,
           LENGTH(yaml_content::json->>'content') as content_length
    FROM articles
    ORDER BY position;
  `;

  console.log(`Total articles: ${result.length}\n`);

  result.forEach((article, index) => {
    console.log(`${index + 1}. ${article.slug}`);
    console.log(`   Title: ${article.title}`);
    console.log(`   Path: ${article.path}`);
    console.log(`   Article ID: ${article.article_id}`);
    console.log(`   Status: ${article.status}`);
    console.log(`   Header Image: ${article.header_image || '❌ MISSING'}`);
    console.log(`   Content Length: ${article.content_length || 0} chars`);
    console.log('');
  });
}

listAllArticles().catch(console.error);
