import { getCardsByArticle, getArticleBySlug } from '@/lib/db';
import { ArticlePageWrapper } from '@/components/articles/ArticlePageWrapper';
import { DatabaseArticleRenderer } from '@/components/articles/DatabaseArticleRenderer';
import { notFound } from 'next/navigation';

// Generate static paths at build time for SEO
export async function generateStaticParams() {
  return [
    { /* This page - what-ai-actually-is */ }
  ];
}

// Add metadata for SEO
export async function generateMetadata() {
  return {
    title: 'What AI Actually Is - History - Sunil Iyer',
    description: 'Demystifying artificial intelligence: Understanding the technology reshaping our world',
  };
}

export default async function WhatAIActuallyIsPage() {
  // Fetch article and cards from database
  const [article, cards] = await Promise.all([
    getArticleBySlug('what-ai-actually-is'),
    getCardsByArticle('what-ai-actually-is'),
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
      articleTitle="What AI Actually Is"
      tldr={content.tldr || ''}
      tags={content.tags || []}
      readTime={content.readTime || ''}
      updatedDate={content.updatedDate || ''}
      headerImage={content.headerImage || ''}
      currentIndex={1}
      totalArticles={8}
      nextArticle={{
        slug: '/history/ai-family-tree',
        title: 'The AI Family Tree'
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
