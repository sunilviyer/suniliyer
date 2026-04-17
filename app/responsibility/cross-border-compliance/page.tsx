import { getCardsByArticle, getArticleBySlug } from '@/lib/db';
import { ArticlePageWrapper } from '@/components/articles/ArticlePageWrapper';
import { DatabaseArticleRenderer } from '@/components/articles/DatabaseArticleRenderer';
import { notFound } from 'next/navigation';

// Generate static paths at build time for SEO
export async function generateStaticParams() {
  return [
    { /* This page - cross-border-compliance */ }
  ];
}

// Add metadata for SEO
export async function generateMetadata() {
  return {
    title: 'Cross-Border AI Compliance - Responsibility - Sunil Iyer',
    description: 'Navigating multiple jurisdictions: international AI compliance strategies',
  };
}

export default async function CrossBorderComplianceArticle() {
  // Fetch article and cards from database
  const [article, cards] = await Promise.all([
    getArticleBySlug('cross-border-compliance'),
    getCardsByArticle('cross-border-compliance'),
  ]);

  // If article not found, show 404
  if (!article || !article.content) {
    notFound();
  }

  const { content } = article;

  return (
    <ArticlePageWrapper
      path="responsibility"
      pathTitle="Responsibility"
      articleTitle="Cross-Border AI Compliance"
      tldr={content.tldr || ''}
      tags={content.tags || []}
      readTime={content.readTime || ''}
      updatedDate={content.updatedDate || ''}
      headerImage={content.headerImage || ''}
      currentIndex={8}
      totalArticles={8}
      prevArticle={{
        slug: '/responsibility/global-ai-law-tracker',
        title: 'Global AI Law Tracker'
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
  );
}
