import { notFound } from 'next/navigation';
import { getArticleBySlug, getCardsByArticle } from '@/lib/db';
import { ArticlePageWrapper } from '@/components/articles/ArticlePageWrapper';
import { DatabaseArticleRenderer } from '@/components/articles/DatabaseArticleRenderer';
import { JsonLd } from '@/components/seo/JsonLd';
import { getArticleSchema, getBreadcrumbSchema } from '@/lib/schema';
import { getArticleSocialMeta } from '@/lib/social-meta';

// Generate static paths at build time for SEO
export async function generateStaticParams() {
  return [
    { /* This page - foundation-models */ }
  ];
}

// Add metadata for SEO and social media
export async function generateMetadata() {
  return getArticleSocialMeta({
    title: 'Foundation Models',
    description: 'The base of modern AI: Understanding large pre-trained models that power ChatGPT, Claude, and beyond',
    slug: 'foundation-models',
    path: 'terminology',
    tags: ['Foundation Models', 'AI', 'LLMs', 'Transfer Learning'],
  });
};
}

export default async function FoundationModelsArticle() {
  // Fetch article and cards from database
  const [article, cards] = await Promise.all([
    getArticleBySlug('foundation-models'),
    getCardsByArticle('foundation-models'),
  ]);

  // Handle article not found
  if (!article || !article.content) {
    notFound();
  }

  const { content } = article;

  // Schema.org structured data
  const articleSchema = getArticleSchema({
    title: 'Foundation Models',
    description: 'Large-scale pre-trained models: The building blocks of modern AI applications',
    slug: 'foundation-models',
    path: 'terminology',
    datePublished: '2025-01-01T00:00:00Z',
    dateModified: content.updatedDate || '2025-01-01T00:00:00Z',
    image: content.headerImage,
    readTime: content.readTime,
    tags: content.tags || []
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Terminology', url: '/terminology' },
    { name: 'Foundation Models', url: '/terminology/foundation-models' }
  ]);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <ArticlePageWrapper
      path="terminology"
      pathTitle="Terminology"
      articleTitle="Foundation Models"
      tldr={content.tldr || ''}
      tags={content.tags || ['Foundation Models', 'GPAI', 'AI Infrastructure']}
      readTime="8 min read"
      updatedDate="January 2025"
      headerImage={content.headerImage || '/images/terminology/foundation-models.webp'}
      currentIndex={4}
      totalArticles={8}
      prevArticle={{
        slug: '/terminology/data-behind-ai',
        title: 'The Data Behind AI'
      }}
      nextArticle={{
        slug: '/terminology/multimodal-ai',
        title: 'Multimodal AI'
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
