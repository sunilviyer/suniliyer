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
    { /* This page - algorithmic-bias */ }
  ];
}

// Add metadata for SEO and social media
export async function generateMetadata() {
  return getArticleSocialMeta({
    title: 'Algorithmic Bias',
    description: 'When AI amplifies inequality: Understanding how biased data creates discriminatory AI systems',
    slug: 'algorithmic-bias',
    path: 'risk',
    tags: ['AI Bias', 'Fairness', 'Ethics', 'Discrimination'],
  });
}

export default async function AlgorithmicBiasArticle() {
  // Fetch article and cards from database
  const [article, cards] = await Promise.all([
    getArticleBySlug('algorithmic-bias'),
    getCardsByArticle('algorithmic-bias'),
  ]);

  // If article not found, show 404
  if (!article || !article.content) {
    notFound();
  }

  const { content } = article;

  // Schema.org structured data
  const articleSchema = getArticleSchema({
    title: 'Algorithmic Bias',
    description: 'How AI systems inherit and amplify human prejudices',
    slug: 'algorithmic-bias',
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
    { name: 'Algorithmic Bias', url: '/risk/algorithmic-bias' }
  ]);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <ArticlePageWrapper
      path="risk"
      pathTitle="Risk"
      articleTitle="Algorithmic Bias"
      tldr={content.tldr || ''}
      tags={content.tags || []}
      readTime={content.readTime || ''}
      updatedDate={content.updatedDate || ''}
      headerImage={content.headerImage || ''}
      currentIndex={2}
      totalArticles={8}
      prevArticle={{
        slug: '/risk/when-ai-goes-wrong',
        title: 'When AI Goes Wrong'
      }}
      nextArticle={{
        slug: '/risk/ai-hallucinations',
        title: 'AI Hallucinations'
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
