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
    { /* This page - large-language-models */ }
  ];
}

// Add metadata for SEO and social media
export async function generateMetadata() {
  return getArticleSocialMeta({
    title: 'Large Language Models',
    description: 'How ChatGPT and GPT-4 work: Understanding transformer architecture and the technology reshaping AI',
    slug: 'large-language-models',
    path: 'history',
    tags: ['LLMs', 'ChatGPT', 'GPT', 'Transformers'],
  });
};
}

export default async function LargeLanguageModelsArticle() {
  // Fetch article and cards from database
  const [article, cards] = await Promise.all([
    getArticleBySlug('large-language-models'),
    getCardsByArticle('large-language-models'),
  ]);

  // If article not found, show 404
  if (!article || !article.content) {
    notFound();
  }

  const { content } = article;

  // Schema.org structured data
  const articleSchema = getArticleSchema({
    title: 'Large Language Models',
    description: 'GPT, BERT, and beyond: The technology powering conversational AI',
    slug: 'large-language-models',
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
    { name: 'Large Language Models', url: '/history/large-language-models' }
  ]);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <ArticlePageWrapper
      path="history"
      pathTitle="History"
      articleTitle="Large Language Models"
      tldr={content.tldr || ''}
      tags={content.tags || []}
      readTime={content.readTime || ''}
      updatedDate={content.updatedDate || ''}
      headerImage={content.headerImage || ''}
      currentIndex={7}
      totalArticles={8}
      prevArticle={{
        slug: '/history/generative-ai-explained',
        title: 'Generative AI Explained'
      }}
      nextArticle={{
        slug: '/history/ai-history',
        title: 'AI History: Dartmouth to DeepMind'
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
