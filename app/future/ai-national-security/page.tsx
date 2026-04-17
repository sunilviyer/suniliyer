import { getCardsByArticle, getArticleBySlug } from '@/lib/db';
import { ArticlePageWrapper } from '@/components/articles/ArticlePageWrapper';
import { DatabaseArticleRenderer } from '@/components/articles/DatabaseArticleRenderer';
import { JsonLd } from '@/components/seo/JsonLd';
import { getArticleSchema, getBreadcrumbSchema } from '@/lib/schema';
import { notFound } from 'next/navigation';

// Generate static paths at build time for SEO
export async function generateStaticParams() {
  return [
    { /* This page - ai-national-security */ }
  ];
}

// Add metadata for SEO
export async function generateMetadata() {
  return {
    title: 'AI and National Security - Future - Sunil Iyer',
    description: 'AI in defense and intelligence: Geopolitical implications and strategic concerns',
  };
}

export default async function AiNationalSecurityArticle() {
  // Fetch article and cards from database
  const [article, cards] = await Promise.all([
    getArticleBySlug('ai-national-security'),
    getCardsByArticle('ai-national-security'),
  ]);

  // If article not found, show 404
  if (!article || !article.content) {
    notFound();
  }

  const { content } = article;

  // Schema.org structured data
  const articleSchema = getArticleSchema({
    title: 'AI and National Security',
    description: 'Geopolitical competition, cyber threats, and AI\'s role in defense',
    slug: 'ai-national-security',
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
    { name: 'AI and National Security', url: '/future/ai-national-security' }
  ]);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <ArticlePageWrapper
      path="future"
      pathTitle="Future"
      articleTitle="AI and National Security"
      tldr={content.tldr || ''}
      tags={content.tags || []}
      readTime={content.readTime || ''}
      updatedDate={content.updatedDate || ''}
      headerImage={content.headerImage || ''}
      currentIndex={3}
      totalArticles={8}
      prevArticle={{
        slug: '/future/ai-existential-risk',
        title: 'AI Existential Risk'
      }}
      nextArticle={{
        slug: '/future/ai-safety',
        title: 'AI Safety'
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
