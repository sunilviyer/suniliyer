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
    { /* This page - deepfakes-synthetic-media */ }
  ];
}

// Add metadata for SEO and social media
export async function generateMetadata() {
  return getArticleSocialMeta({
    title: 'Deepfakes & Synthetic Media',
    description: 'When seeing isn\'t believing: Understanding AI-generated images, videos, and the erosion of trust',
    slug: 'deepfakes-synthetic-media',
    path: 'risk',
    tags: ['Deepfakes', 'Synthetic Media', 'AI Risk', 'Ethics'],
  });
};
}

export default async function DeepfakesSyntheticMediaArticle() {
  // Fetch article and cards from database
  const [article, cards] = await Promise.all([
    getArticleBySlug('deepfakes-synthetic-media'),
    getCardsByArticle('deepfakes-synthetic-media'),
  ]);

  // If article not found, show 404
  if (!article || !article.content) {
    notFound();
  }

  const { content } = article;

  // Schema.org structured data
  const articleSchema = getArticleSchema({
    title: 'Deepfakes and Synthetic Media',
    description: 'AI-generated content that blurs the line between real and fake',
    slug: 'deepfakes-synthetic-media',
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
    { name: 'Deepfakes and Synthetic Media', url: '/risk/deepfakes-synthetic-media' }
  ]);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <ArticlePageWrapper
      path="risk"
      pathTitle="Risk"
      articleTitle="Deepfakes & Synthetic Media"
      tldr={content.tldr || ''}
      tags={content.tags || []}
      readTime={content.readTime || ''}
      updatedDate={content.updatedDate || ''}
      headerImage={content.headerImage || ''}
      currentIndex={5}
      totalArticles={8}
      prevArticle={{
        slug: '/risk/ai-privacy',
        title: 'AI and Privacy'
      }}
      nextArticle={{
        slug: '/risk/ai-misinformation',
        title: 'AI Misinformation'
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
