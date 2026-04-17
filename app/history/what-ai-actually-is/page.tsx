import { getCardsByArticle, getArticleBySlug } from '@/lib/db';
import { ArticlePageWrapper } from '@/components/articles/ArticlePageWrapper';
import { DatabaseArticleRenderer } from '@/components/articles/DatabaseArticleRenderer';
import { JsonLd } from '@/components/seo/JsonLd';
import { getArticleSchema, getBreadcrumbSchema } from '@/lib/schema';
import { getArticleSocialMeta } from '@/lib/social-meta';
import { notFound } from 'next/navigation';

// Generate static paths at build time for SEO
export async function generateStaticParams() {
  return [
    { /* This page - what-ai-actually-is */ }
  ];
}

// Add metadata for SEO and social media
export async function generateMetadata() {
  return getArticleSocialMeta({
    title: 'What AI Actually Is',
    description: 'Demystifying artificial intelligence: Understanding the technology reshaping our world',
    slug: 'what-ai-actually-is',
    path: 'history',
    tags: ['AI', 'Artificial Intelligence', 'Machine Learning', 'History'],
  });
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

  // Schema.org structured data
  const articleSchema = getArticleSchema({
    title: 'What AI Actually Is',
    description: 'Demystifying artificial intelligence: Understanding the technology reshaping our world',
    slug: 'what-ai-actually-is',
    path: 'history',
    datePublished: '2025-01-01T00:00:00Z',
    dateModified: content.updatedDate || '2025-01-01T00:00:00Z',
    image: content.headerImage,
    readTime: content.readTime,
    tags: content.tags || []
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'History', url: '/history' },
    { name: 'What AI Actually Is', url: '/history/what-ai-actually-is' }
  ]);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
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
    </>
  );
}
