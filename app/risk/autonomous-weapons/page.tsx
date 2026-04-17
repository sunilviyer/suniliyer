import { getCardsByArticle, getArticleBySlug } from '@/lib/db';
import { ArticlePageWrapper } from '@/components/articles/ArticlePageWrapper';
import { DatabaseArticleRenderer } from '@/components/articles/DatabaseArticleRenderer';
import { JsonLd } from '@/components/seo/JsonLd';
import { getArticleSchema, getBreadcrumbSchema } from '@/lib/schema';
import { notFound } from 'next/navigation';

// Generate static paths at build time for SEO
export async function generateStaticParams() {
  return [
    { /* This page - autonomous-weapons */ }
  ];
}

// Add metadata for SEO
export async function generateMetadata() {
  return {
    title: 'Autonomous Weapons - Risk - Sunil Iyer',
    description: 'Military AI: the risks of delegating life-and-death decisions to machines',
  };
}

export default async function AutonomousWeaponsArticle() {
  // Fetch article and cards from database
  const [article, cards] = await Promise.all([
    getArticleBySlug('autonomous-weapons'),
    getCardsByArticle('autonomous-weapons'),
  ]);

  // If article not found, show 404
  if (!article || !article.content) {
    notFound();
  }

  const { content } = article;

  // Schema.org structured data
  const articleSchema = getArticleSchema({
    title: 'Autonomous Weapons',
    description: 'Lethal autonomous weapons systems and the future of warfare',
    slug: 'autonomous-weapons',
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
    { name: 'Autonomous Weapons', url: '/risk/autonomous-weapons' }
  ]);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <ArticlePageWrapper
      path="risk"
      pathTitle="Risk"
      articleTitle="Autonomous Weapons"
      tldr={content.tldr || ''}
      tags={content.tags || []}
      readTime={content.readTime || ''}
      updatedDate={content.updatedDate || ''}
      headerImage={content.headerImage || ''}
      currentIndex={8}
      totalArticles={8}
      prevArticle={{
        slug: '/risk/job-displacement',
        title: 'Job Displacement'
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
