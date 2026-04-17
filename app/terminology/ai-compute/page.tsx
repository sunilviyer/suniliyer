import { getCardsByArticle, getArticleBySlug } from '@/lib/db';
import { ArticlePageWrapper } from '@/components/articles/ArticlePageWrapper';
import { DatabaseArticleRenderer } from '@/components/articles/DatabaseArticleRenderer';
import { notFound } from 'next/navigation';

// Generate static paths at build time for SEO
export async function generateStaticParams() {
  return [
    { /* This page - ai-compute */ }
  ];
}

// Add metadata for SEO
export async function generateMetadata() {
  return {
    title: 'AI Compute Requirements - Terminology - Sunil Iyer',
    description: 'The massive computational resources required to train and run modern AI systems',
  };
}

export default async function AiComputeArticle() {
  // Fetch article and cards from database
  const [article, cards] = await Promise.all([
    getArticleBySlug('ai-compute'),
    getCardsByArticle('ai-compute'),
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
      articleTitle="AI Compute Requirements"
      tldr={content.tldr || ''}
      tags={content.tags || []}
      readTime={content.readTime || ''}
      updatedDate={content.updatedDate || ''}
      headerImage={content.headerImage || ''}
      currentIndex={6}
      totalArticles={8}
      prevArticle={{
        slug: '/terminology/multimodal-ai',
        title: 'Multimodal AI'
      }}
      nextArticle={{
        slug: '/terminology/environmental-cost-ai',
        title: 'Environmental Cost of AI'
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
