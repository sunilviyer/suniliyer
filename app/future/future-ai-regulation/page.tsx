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
    { /* This page - future-ai-regulation */ }
  ];
}

// Add metadata for SEO and social media
export async function generateMetadata() {
  return getArticleSocialMeta({
    title: 'The Future of AI Regulation',
    description: 'What comes after the EU AI Act? Understanding the evolution of AI law and global governance',
    slug: 'future-ai-regulation',
    path: 'future',
    tags: ['Regulation', 'AI Law', 'Future', 'Governance'],
  });
};
}

export default async function FutureAiRegulationArticle() {
  // Fetch article and cards from database
  const [article, cards] = await Promise.all([
    getArticleBySlug('future-ai-regulation'),
    getCardsByArticle('future-ai-regulation'),
  ]);

  // If article not found, show 404
  if (!article || !article.content) {
    notFound();
  }

  const { content } = article;

  // Schema.org structured data
  const articleSchema = getArticleSchema({
    title: 'The Future of AI Regulation',
    description: 'Evolving policy approaches to governing rapidly advancing AI technology',
    slug: 'future-ai-regulation',
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
    { name: 'The Future of AI Regulation', url: '/future/future-ai-regulation' }
  ]);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <ArticlePageWrapper
      path="future"
      pathTitle="Future"
      articleTitle="Future of AI Regulation"
      tldr={content.tldr || ''}
      tags={content.tags || []}
      readTime={content.readTime || ''}
      updatedDate={content.updatedDate || ''}
      headerImage={content.headerImage || ''}
      currentIndex={6}
      totalArticles={8}
      prevArticle={{
        slug: '/future/future-ai-ethics',
        title: 'Future of AI Ethics'
      }}
      nextArticle={{
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
