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
    { /* This page - ai-family-tree */ }
  ];
}

// Add metadata for SEO and social media
export async function generateMetadata() {
  return getArticleSocialMeta({
    title: 'The AI Family Tree',
    description: 'From symbolic AI to neural networks: Map the evolution of artificial intelligence through its major branches and breakthroughs',
    slug: 'ai-family-tree',
    path: 'history',
    tags: ['AI', 'History', 'Machine Learning', 'Deep Learning'],
  });
};
}

export default async function AIFamilyTreePage() {
  // Fetch article and cards from database
  const [article, cards] = await Promise.all([
    getArticleBySlug('ai-family-tree'),
    getCardsByArticle('ai-family-tree'),
  ]);

  // If article not found, show 404
  if (!article || !article.content) {
    notFound();
  }

  const { content } = article;

  // Schema.org structured data
  const articleSchema = getArticleSchema({
    title: 'The AI Family Tree',
    description: 'From expert systems to neural networks: A visual journey through the evolution of AI approaches',
    slug: 'ai-family-tree',
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
    { name: 'The AI Family Tree', url: '/history/ai-family-tree' }
  ]);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <ArticlePageWrapper
      path="history"
      pathTitle="History"
      articleTitle="The AI Family Tree"
      tldr={content.tldr || ''}
      tags={content.tags || []}
      readTime={content.readTime || ''}
      updatedDate={content.updatedDate || ''}
      headerImage={content.headerImage || ''}
      currentIndex={2}
      totalArticles={8}
      prevArticle={{
        slug: '/history/what-ai-actually-is',
        title: 'What AI Actually Is'
      }}
      nextArticle={{
        slug: '/history/types-of-ai-intelligence',
        title: 'Types of AI Intelligence'
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
