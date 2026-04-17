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
    { /* This page - ai-transparency */ }
  ];
}

// Add metadata for SEO and social media
export async function generateMetadata() {
  return getArticleSocialMeta({
    title: 'AI Transparency',
    description: 'Opening the black box: Why and how organizations should explain their AI systems',
    slug: 'ai-transparency',
    path: 'responsibility',
    tags: ['Transparency', 'Explainability', 'AI Ethics', 'Trust'],
  });
};
}

export default async function AiTransparencyArticle() {
  // Fetch article and cards from database
  const [article, cards] = await Promise.all([
    getArticleBySlug('ai-transparency'),
    getCardsByArticle('ai-transparency'),
  ]);

  // If article not found, show 404
  if (!article || !article.content) {
    notFound();
  }

  const { content } = article;

  // Schema.org structured data
  const articleSchema = getArticleSchema({
    title: 'AI Transparency',
    description: 'Disclosure requirements and the right to know when AI is being used',
    slug: 'ai-transparency',
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
    { name: 'AI Transparency', url: '/responsibility/ai-transparency' }
  ]);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <ArticlePageWrapper
      path="responsibility"
      pathTitle="Responsibility"
      articleTitle="AI Transparency"
      tldr={content.tldr || ''}
      tags={content.tags || []}
      readTime={content.readTime || ''}
      updatedDate={content.updatedDate || ''}
      headerImage={content.headerImage || ''}
      currentIndex={4}
      totalArticles={8}
      prevArticle={{
        slug: '/responsibility/iso-42001',
        title: 'ISO/IEC 42001 AI Management'
      }}
      nextArticle={{
        slug: '/responsibility/ai-accountability',
        title: 'AI Accountability'
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
