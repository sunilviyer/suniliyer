import { getCardsByArticle, getArticleBySlug } from '@/lib/db';
import { ArticlePageWrapper } from '@/components/articles/ArticlePageWrapper';
import { DatabaseArticleRenderer } from '@/components/articles/DatabaseArticleRenderer';
import { notFound } from 'next/navigation';

// Generate static paths at build time for SEO
export async function generateStaticParams() {
  return [
    { /* This page - data-behind-ai */ }
  ];
}

// Add metadata for SEO
export async function generateMetadata() {
  return {
    title: 'The Data Behind AI - Terminology - Sunil Iyer',
    description: 'How data quality, quantity, and provenance determine AI system behavior',
  };
}

export default async function DataBehindAIArticle() {
  // Fetch article and cards from database
  const [article, cards] = await Promise.all([
    getArticleBySlug('data-behind-ai'),
    getCardsByArticle('data-behind-ai'),
  ]);

  // If article not found, show 404
  if (!article || !article.content) {
    notFound();
  }

  const { content } = article;

  return (
    <ArticlePageWrapper
      path="terminology"
      pathTitle="Terminology"
      articleTitle="The Data Behind AI"
      tldr={content.tldr || ''}
      tags={content.tags || []}
      readTime={content.readTime || ''}
      updatedDate={content.updatedDate || ''}
      headerImage={content.headerImage || ''}
      currentIndex={3}
      totalArticles={8}
      prevArticle={{
        slug: '/terminology/ai-vs-automation',
        title: 'AI vs Automation'
      }}
      nextArticle={{
        slug: '/terminology/foundation-models',
        title: 'Foundation Models'
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
