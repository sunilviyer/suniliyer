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
    { /* This page - ai-compute */ }
  ];
}

// Add metadata for SEO and social media
export async function generateMetadata() {
  return getArticleSocialMeta({
    title: 'AI Compute',
    description: 'The computational power behind modern AI: Understanding GPUs, TPUs, and the infrastructure scaling challenge',
    slug: 'ai-compute',
    path: 'terminology',
    tags: ['AI Compute', 'GPUs', 'Infrastructure', 'Cloud'],
  });
}

export default async function AiComputeArticle() {
  // Fetch article and cards from database
  const [article, cards] = await Promise.all([
    getArticleBySlug('ai-compute'),
    getCardsByArticle('ai-compute'),
  ]);

  // If article not found, show 404
  if (!article || !article.content) {
    notFound();
  }

  const { content } = article;

  // Schema.org structured data
  const articleSchema = getArticleSchema({
    title: 'AI Compute',
    description: 'GPUs, TPUs, and the infrastructure powering AI at scale',
    slug: 'ai-compute',
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
    { name: 'AI Compute', url: '/terminology/ai-compute' }
  ]);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <ArticlePageWrapper
      path="terminology"
      pathTitle="Terminology"
      articleTitle="AI Compute Requirements"
      tldr={content.tldr || ''}
      tags={content.tags || []}
      readTime={content.readTime || ''}
      updatedDate={content.updatedDate || ''}
      headerImage={content.headerImage || ''}
      currentIndex={6}
      totalArticles={8}
      prevArticle={{
        slug: '/terminology/multimodal-ai',
        title: 'Multimodal AI'
      }}
      nextArticle={{
        slug: '/terminology/environmental-cost-ai',
        title: 'Environmental Cost of AI'
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
