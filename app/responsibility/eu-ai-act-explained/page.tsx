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
    { /* This page - eu-ai-act-explained */ }
  ];
}

// Add metadata for SEO and social media
export async function generateMetadata() {
  return getArticleSocialMeta({
    title: 'EU AI Act Explained',
    description: 'The world\'s first comprehensive AI law: Understanding risk-based regulation and compliance requirements',
    slug: 'eu-ai-act-explained',
    path: 'responsibility',
    tags: ['EU AI Act', 'Regulation', 'Compliance', 'AI Law'],
  });
};
}

export default async function EuAiActExplainedArticle() {
  // Fetch article and cards from database
  const [article, cards] = await Promise.all([
    getArticleBySlug('eu-ai-act-explained'),
    getCardsByArticle('eu-ai-act-explained'),
  ]);

  // If article not found, show 404
  if (!article || !article.content) {
    notFound();
  }

  const { content } = article;

  // Schema.org structured data
  const articleSchema = getArticleSchema({
    title: 'EU AI Act Explained',
    description: 'Europe\'s comprehensive AI regulation: Requirements and implications',
    slug: 'eu-ai-act-explained',
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
    { name: 'EU AI Act Explained', url: '/responsibility/eu-ai-act-explained' }
  ]);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <ArticlePageWrapper
      path="responsibility"
      pathTitle="Responsibility"
      articleTitle="The EU AI Act Explained"
      tldr={content.tldr || ''}
      tags={content.tags || []}
      readTime={content.readTime || ''}
      updatedDate={content.updatedDate || ''}
      headerImage={content.headerImage || ''}
      currentIndex={1}
      totalArticles={8}
      nextArticle={{
        slug: '/responsibility/nist-ai-rmf',
        title: 'NIST AI RMF Complete Guide'
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
