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
    { /* This page - job-displacement */ }
  ];
}

// Add metadata for SEO and social media
export async function generateMetadata() {
  return getArticleSocialMeta({
    title: 'Job Displacement by AI',
    description: 'Automation anxiety: Understanding which jobs are at risk and how the workforce is changing',
    slug: 'job-displacement',
    path: 'risk',
    tags: ['Job Displacement', 'Automation', 'Future of Work', 'Economics'],
  });
}

export default async function JobDisplacementArticle() {
  // Fetch article and cards from database
  const [article, cards] = await Promise.all([
    getArticleBySlug('job-displacement'),
    getCardsByArticle('job-displacement'),
  ]);

  // If article not found, show 404
  if (!article || !article.content) {
    notFound();
  }

  const { content } = article;

  // Schema.org structured data
  const articleSchema = getArticleSchema({
    title: 'Job Displacement',
    description: 'Economic disruption and workforce transformation in the age of AI',
    slug: 'job-displacement',
    path: 'risk',
    datePublished: '2025-01-01T00:00:00Z',
    dateModified: content.updatedDate || '2025-01-01T00:00:00Z',
    image: content.headerImage,
    readTime: content.readTime,
    tags: content.tags || []
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Risk', url: '/risk' },
    { name: 'Job Displacement', url: '/risk/job-displacement' }
  ]);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <ArticlePageWrapper
      path="risk"
      pathTitle="Risk"
      articleTitle="Job Displacement"
      tldr={content.tldr || ''}
      tags={content.tags || []}
      readTime={content.readTime || ''}
      updatedDate={content.updatedDate || ''}
      headerImage={content.headerImage || ''}
      currentIndex={7}
      totalArticles={8}
      prevArticle={{
        slug: '/risk/ai-misinformation',
        title: 'AI Misinformation'
      }}
      nextArticle={{
        slug: '/risk/autonomous-weapons',
        title: 'Autonomous Weapons'
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
