import { getCardsByArticle, getArticleBySlug } from '@/lib/db';
import { ArticlePageWrapper } from '@/components/articles/ArticlePageWrapper';
import { DatabaseArticleRenderer } from '@/components/articles/DatabaseArticleRenderer';
import { JsonLd } from '@/components/seo/JsonLd';
import { getArticleSchema, getBreadcrumbSchema } from '@/lib/schema';
import { notFound } from 'next/navigation';

// Generate static paths at build time for SEO
export async function generateStaticParams() {
  return [
    { /* This page - ai-governance-careers */ }
  ];
}

// Add metadata for SEO
export async function generateMetadata() {
  return {
    title: 'AI Governance Careers - Future - Sunil Iyer',
    description: 'Building a career in AI policy, ethics, and governance: Skills and pathways',
  };
}

export default async function AiGovernanceCareersArticle() {
  // Fetch article and cards from database
  const [article, cards] = await Promise.all([
    getArticleBySlug('ai-governance-careers'),
    getCardsByArticle('ai-governance-careers'),
  ]);

  // If article not found, show 404
  if (!article || !article.content) {
    notFound();
  }

  const { content } = article;

  // Schema.org structured data
  const articleSchema = getArticleSchema({
    title: 'AI Governance Careers',
    description: 'Professional pathways in AI ethics, policy, and risk management',
    slug: 'ai-governance-careers',
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
    { name: 'AI Governance Careers', url: '/future/ai-governance-careers' }
  ]);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <ArticlePageWrapper
      path="future"
      pathTitle="Future"
      articleTitle="AI Governance Careers"
      tldr={content.tldr || ''}
      tags={content.tags || []}
      readTime={content.readTime || ''}
      updatedDate={content.updatedDate || ''}
      headerImage={content.headerImage || ''}
      currentIndex={7}
      totalArticles={8}
      prevArticle={{
        slug: '/future/future-ai-regulation',
        title: 'Future of AI Regulation'
      }}
      nextArticle={{
        slug: '/future/trustworthy-ai',
        title: 'Trustworthy AI: Seven Pillars'
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
