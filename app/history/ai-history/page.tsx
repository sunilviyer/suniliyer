import { getCardsByArticle, getArticleBySlug } from '@/lib/db';
import { ArticlePageWrapper } from '@/components/articles/ArticlePageWrapper';
import { DatabaseArticleRenderer } from '@/components/articles/DatabaseArticleRenderer';
import { JsonLd } from '@/components/seo/JsonLd';
import { getArticleSchema, getBreadcrumbSchema } from '@/lib/schema';
import { getArticleSocialMeta } from '@/lib/social-meta';
import { notFound } from 'next/navigation';

// Generate static paths at build time for SEO
export async function generateStaticParams() {
  // List of all history article slugs
  return [
    { /* This page - ai-history */ }
  ];
}

// Add metadata for SEO and social media
export async function generateMetadata() {
  return getArticleSocialMeta({
    title: 'AI History: Dartmouth to DeepMind',
    description: 'From the 1956 Dartmouth Conference to modern breakthroughs: The complete journey of artificial intelligence',
    slug: 'ai-history',
    path: 'history',
    tags: ['AI History', 'Dartmouth', 'Deep Learning', 'Technology'],
  });
};
}

export default async function AIHistoryArticle() {
  // Fetch article and cards from database
  const [article, cards] = await Promise.all([
    getArticleBySlug('ai-history'),
    getCardsByArticle('ai-history'),
  ]);

  // If article not found, show 404
  if (!article || !article.content) {
    notFound();
  }

  const { content } = article;

  // Schema.org structured data
  const articleSchema = getArticleSchema({
    title: 'AI History: Dartmouth to DeepMind',
    description: 'From the 1956 Dartmouth Conference to modern breakthroughs: The complete journey of artificial intelligence',
    slug: 'ai-history',
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
    { name: 'AI History: Dartmouth to DeepMind', url: '/history/ai-history' }
  ]);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <ArticlePageWrapper
      path="history"
      pathTitle="History"
      articleTitle="AI History: Dartmouth to DeepMind"
      tldr={content.tldr || ''}
      tags={content.tags || []}
      readTime={content.readTime || ''}
      updatedDate={content.updatedDate || ''}
      headerImage={content.headerImage || ''}
      currentIndex={8}
      totalArticles={8}
      prevArticle={{
        slug: '/history/large-language-models',
        title: 'Large Language Models'
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
