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
    { /* This page - deep-learning-decoded */ }
  ];
}

// Add metadata for SEO and social media
export async function generateMetadata() {
  return getArticleSocialMeta({
    title: 'Deep Learning Decoded',
    description: 'Neural networks explained: How deep learning revolutionized AI through layered pattern recognition',
    slug: 'deep-learning-decoded',
    path: 'history',
    tags: ['Deep Learning', 'Neural Networks', 'AI', 'Technology'],
  });
}

export default async function DeepLearningDecodedArticle() {
  // Fetch article and cards from database
  const [article, cards] = await Promise.all([
    getArticleBySlug('deep-learning-decoded'),
    getCardsByArticle('deep-learning-decoded'),
  ]);

  // If article not found, show 404
  if (!article || !article.content) {
    notFound();
  }

  const { content } = article;

  // Schema.org structured data
  const articleSchema = getArticleSchema({
    title: 'Deep Learning Decoded',
    description: 'Neural networks demystified: How deep learning powers modern AI breakthroughs',
    slug: 'deep-learning-decoded',
    path: 'history',
    datePublished: '2025-01-01T00:00:00Z',
    dateModified: content.updatedDate || '2025-01-01T00:00:00Z',
    image: content.headerImage,
    readTime: content.readTime,
    tags: content.tags || []
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'History', url: '/history' },
    { name: 'Deep Learning Decoded', url: '/history/deep-learning-decoded' }
  ]);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <ArticlePageWrapper
      path="history"
      pathTitle="History"
      articleTitle="Deep Learning Decoded"
      tldr={content.tldr || ''}
      tags={content.tags || []}
      readTime={content.readTime || ''}
      updatedDate={content.updatedDate || ''}
      headerImage={content.headerImage || ''}
      currentIndex={5}
      totalArticles={8}
      prevArticle={{
        slug: '/history/how-machines-learn',
        title: 'How Machines Learn'
      }}
      nextArticle={{
        slug: '/history/generative-ai-explained',
        title: 'Generative AI Explained'
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
