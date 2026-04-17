import { getCardsByArticle, getArticleBySlug } from '@/lib/db';
import { ArticlePageWrapper } from '@/components/articles/ArticlePageWrapper';
import { DatabaseArticleRenderer } from '@/components/articles/DatabaseArticleRenderer';
import { notFound } from 'next/navigation';

// Generate static paths at build time for SEO
export async function generateStaticParams() {
  return [
    { /* This page - large-language-models */ }
  ];
}

// Add metadata for SEO
export async function generateMetadata() {
  return {
    title: 'Large Language Models - History - Sunil Iyer',
    description: 'ChatGPT, GPT-4, and beyond: The transformer architecture that powers modern AI conversations',
  };
}

export default async function LargeLanguageModelsArticle() {
  // Fetch article and cards from database
  const [article, cards] = await Promise.all([
    getArticleBySlug('large-language-models'),
    getCardsByArticle('large-language-models'),
  ]);

  // If article not found, show 404
  if (!article || !article.content) {
    notFound();
  }

  const { content } = article;

  return (
    <ArticlePageWrapper
      path="history"
      pathTitle="History"
      articleTitle="Large Language Models"
      tldr={content.tldr || ''}
      tags={content.tags || []}
      readTime={content.readTime || ''}
      updatedDate={content.updatedDate || ''}
      headerImage={content.headerImage || ''}
      currentIndex={7}
      totalArticles={8}
      prevArticle={{
        slug: '/history/generative-ai-explained',
        title: 'Generative AI Explained'
      }}
      nextArticle={{
        slug: '/history/ai-history',
        title: 'AI History: Dartmouth to DeepMind'
      }}
      cards={cards}
    >
      <DatabaseArticleRenderer
        content={content.content}
        keyLearnings={content.keyLearnings}
        additionalResources={content.additionalResources}
        sources={content.sources}
      />
    </ArticlePageWrapper>
  );
}
