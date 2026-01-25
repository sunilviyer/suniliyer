import { getArticleBySlug } from '@/lib/db';

async function checkArticle() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║         CHECKING TYPES-OF-AI-INTELLIGENCE ARTICLE           ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  const article = await getArticleBySlug('types-of-ai-intelligence');

  if (!article) {
    console.log('❌ Article not found');
    return;
  }

  console.log('✅ Article found:');
  console.log(`  article_id: ${article.article_id}`);
  console.log(`  slug: ${article.slug}`);
  console.log(`  title: ${article.title}`);
  console.log(`  status: ${article.status}`);
  console.log(`\n  content object:`, article.content ? 'EXISTS' : 'MISSING');

  if (article.content) {
    console.log(`    - tldr: ${article.content.tldr ? 'YES' : 'NO'}`);
    console.log(`    - content: ${article.content.content ? article.content.content.substring(0, 100) + '...' : 'MISSING'}`);
    console.log(`    - keyLearnings: ${article.content.keyLearnings ? article.content.keyLearnings.length + ' items' : 'MISSING'}`);
    console.log(`    - additionalResources: ${article.content.additionalResources ? article.content.additionalResources.length + ' items' : 'MISSING'}`);
    console.log(`    - sources: ${article.content.sources ? article.content.sources.length + ' items' : 'MISSING'}`);
  }
}

checkArticle().catch(console.error);
