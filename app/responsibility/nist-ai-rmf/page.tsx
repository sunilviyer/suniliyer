import { getCardsByArticle, getArticleBySlug } from '@/lib/db';
import { ArticlePageWrapper } from '@/components/articles/ArticlePageWrapper';
import { DatabaseArticleRenderer } from '@/components/articles/DatabaseArticleRenderer';
import { notFound } from 'next/navigation';

// Generate static paths at build time for SEO
export async function generateStaticParams() {
  return [
    { /* This page - nist-ai-rmf */ }
  ];
}

// Add metadata for SEO
export async function generateMetadata() {
  return {
    title: 'NIST AI RMF Complete Guide - Responsibility - Sunil Iyer',
    description: 'The US standard for AI risk management: Building responsible AI programs',
  };
}

export default async function NistAiRmfArticle() {
  // Fetch article and cards from database
  const [article, cards] = await Promise.all([
    getArticleBySlug('nist-ai-rmf'),
    getCardsByArticle('nist-ai-rmf'),
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
      articleTitle="NIST AI RMF Complete Guide"
      tldr={content.tldr || ''}
      tags={content.tags || []}
      readTime={content.readTime || ''}
      updatedDate={content.updatedDate || ''}
      headerImage={content.headerImage || ''}
      currentIndex={2}
      totalArticles={8}
      prevArticle={{
        slug: '/responsibility/eu-ai-act-explained',
        title: 'The EU AI Act Explained'
      }}
      nextArticle={{
        slug: '/responsibility/iso-42001',
        title: 'ISO/IEC 42001 AI Management'
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
