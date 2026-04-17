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
    { /* This page - ai-vs-automation */ }
  ];
}

// Add metadata for SEO and social media
export async function generateMetadata() {
  return getArticleSocialMeta({
    title: 'AI vs Automation',
    description: 'Intelligence vs. instructions: Understanding the critical difference between AI and traditional automation',
    slug: 'ai-vs-automation',
    path: 'terminology',
    tags: ['AI', 'Automation', 'RPA', 'Technology'],
  });
};
}

export default async function AIvsAutomationArticle() {
  // Fetch article and cards from database
  const [article, cards] = await Promise.all([
    getArticleBySlug('ai-vs-automation'),
    getCardsByArticle('ai-vs-automation'),
  ]);

  // If article not found, show 404
  if (!article || !article.content) {
    notFound();
  }

  const { content } = article;

  // Schema.org structured data
  const articleSchema = getArticleSchema({
    title: 'AI vs Automation',
    description: 'Distinguishing intelligent systems from rule-based automation',
    slug: 'ai-vs-automation',
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
    { name: 'AI vs Automation', url: '/terminology/ai-vs-automation' }
  ]);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <ArticlePageWrapper
      path="terminology"
      pathTitle="Terminology"
      articleTitle="AI vs Automation"
      tldr={content.tldr || ''}
      tags={content.tags || []}
      readTime={content.readTime || ''}
      updatedDate={content.updatedDate || ''}
      headerImage={content.headerImage || ''}
      currentIndex={2}
      totalArticles={8}
      prevArticle={{
        slug: '/terminology/ai-technology-stack',
        title: 'The AI Technology Stack'
      }}
      nextArticle={{
        slug: '/terminology/data-behind-ai',
        title: 'The Data Behind AI'
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
