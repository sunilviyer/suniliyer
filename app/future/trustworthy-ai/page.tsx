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
    { /* This page - trustworthy-ai */ }
  ];
}

// Add metadata for SEO and social media
export async function generateMetadata() {
  return getArticleSocialMeta({
    title: 'Trustworthy AI',
    description: 'Building AI systems people can rely on: Understanding the pillars of trust, fairness, and reliability',
    slug: 'trustworthy-ai',
    path: 'future',
    tags: ['Trustworthy AI', 'Ethics', 'Trust', 'Governance'],
  });
}

export default async function TrustworthyAiArticle() {
  // Fetch article and cards from database
  const [article, cards] = await Promise.all([
    getArticleBySlug('trustworthy-ai'),
    getCardsByArticle('trustworthy-ai'),
  ]);

  // If article not found, show 404
  if (!article || !article.content) {
    notFound();
  }

  const { content } = article;

  // Schema.org structured data
  const articleSchema = getArticleSchema({
    title: 'Building Trustworthy AI',
    description: 'Principles and practices for developing AI systems worthy of public trust',
    slug: 'trustworthy-ai',
    path: 'future',
    datePublished: '2025-01-01T00:00:00Z',
    dateModified: content.updatedDate || '2025-01-01T00:00:00Z',
    image: content.headerImage,
    readTime: content.readTime,
    tags: content.tags || []
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Future', url: '/future' },
    { name: 'Building Trustworthy AI', url: '/future/trustworthy-ai' }
  ]);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <ArticlePageWrapper
      path="future"
      pathTitle="Future"
      articleTitle="Trustworthy AI: Seven Pillars"
      tldr={content.tldr || ''}
      tags={content.tags || []}
      readTime={content.readTime || ''}
      updatedDate={content.updatedDate || ''}
      headerImage={content.headerImage || ''}
      currentIndex={8}
      totalArticles={8}
      prevArticle={{
        slug: '/future/ai-governance-careers',
        title: 'AI Governance Careers'
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
