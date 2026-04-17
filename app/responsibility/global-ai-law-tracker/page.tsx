import { getCardsByArticle, getArticleBySlug } from '@/lib/db';
import { ArticlePageWrapper } from '@/components/articles/ArticlePageWrapper';
import { DatabaseArticleRenderer } from '@/components/articles/DatabaseArticleRenderer';
import { JsonLd } from '@/components/seo/JsonLd';
import { getArticleSchema, getBreadcrumbSchema } from '@/lib/schema';
import { notFound } from 'next/navigation';

// Generate static paths at build time for SEO
export async function generateStaticParams() {
  return [
    { /* This page - global-ai-law-tracker */ }
  ];
}

// Add metadata for SEO
export async function generateMetadata() {
  return {
    title: 'Global AI Law Tracker - Responsibility - Sunil Iyer',
    description: 'Who\'s regulating what: navigating international AI regulations',
  };
}

export default async function GlobalAiLawTrackerArticle() {
  // Fetch article and cards from database
  const [article, cards] = await Promise.all([
    getArticleBySlug('global-ai-law-tracker'),
    getCardsByArticle('global-ai-law-tracker'),
  ]);

  // If article not found, show 404
  if (!article || !article.content) {
    notFound();
  }

  const { content } = article;

  // Schema.org structured data
  const articleSchema = getArticleSchema({
    title: 'Global AI Law Tracker',
    description: 'Who\'s regulating what: navigating international AI regulations',
    slug: 'global-ai-law-tracker',
    path: 'responsibility',
    datePublished: '2025-01-01T00:00:00Z',
    dateModified: content.updatedDate || '2025-01-01T00:00:00Z',
    image: content.headerImage,
    readTime: content.readTime,
    tags: content.tags || []
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Responsibility', url: '/responsibility' },
    { name: 'Global AI Law Tracker', url: '/responsibility/global-ai-law-tracker' }
  ]);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <ArticlePageWrapper
      path="responsibility"
      pathTitle="Responsibility"
      articleTitle="Global AI Law Tracker"
      tldr={content.tldr || ''}
      tags={content.tags || []}
      readTime={content.readTime || ''}
      updatedDate={content.updatedDate || ''}
      headerImage={content.headerImage || ''}
      currentIndex={7}
      totalArticles={8}
      prevArticle={{
        slug: '/responsibility/human-centered-ai',
        title: 'Human-Centered AI'
      }}
      nextArticle={{
        slug: '/responsibility/cross-border-compliance',
        title: 'Cross-Border AI Compliance'
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
