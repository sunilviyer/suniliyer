import { getArticleBySlug } from '@/lib/db';

async function debugContent() {
  console.log('\n╔══════════════════════════════════════════════════════════════╗');
  console.log('║         DEBUGGING TYPES-OF-AI CONTENT                       ║');
  console.log('╚══════════════════════════════════════════════════════════════╝\n');

  const article = await getArticleBySlug('types-of-ai-intelligence');

  if (!article || !article.content) {
    console.log('❌ Article or content not found');
    return;
  }

  console.log('✅ Article content structure:');
  console.log(`  typeof content: ${typeof article.content}`);
  console.log(`  typeof content.content: ${typeof article.content.content}`);
  console.log(`  content.content length: ${article.content.content?.length || 0} characters\n`);

  console.log('📝 First 800 characters of content.content:');
  console.log('─'.repeat(60));
  console.log(article.content.content?.substring(0, 800));
  console.log('─'.repeat(60));

  console.log('\n📚 Key Learnings:');
  article.content.keyLearnings?.forEach((item, i) => {
    console.log(`  ${i + 1}. ${item.substring(0, 100)}${item.length > 100 ? '...' : ''}`);
  });
}

debugContent().catch(console.error);
