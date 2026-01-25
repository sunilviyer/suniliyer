import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function getArticlePathMapping() {
  const articles = await sql`
    SELECT slug, path
    FROM articles
    WHERE path IN ('history', 'terminology', 'risk', 'responsibility', 'future')
    ORDER BY path, position;
  `;

  const byPath: Record<string, string[]> = {
    history: [],
    terminology: [],
    risk: [],
    responsibility: [],
    future: [],
  };

  for (const article of articles) {
    const slug = article.slug as string;
    const path = article.path as string;
    byPath[path].push(slug);
  }

  console.log('\n═══════════════════════════════════════════════════════════════');
  for (const [path, slugs] of Object.entries(byPath)) {
    console.log(`${path} (${slugs.length} articles):`);
    for (const slug of slugs) {
      console.log(`  ${slug}`);
    }
    console.log('');
  }
  console.log('═══════════════════════════════════════════════════════════════\n');
}

getArticlePathMapping().catch(console.error);
