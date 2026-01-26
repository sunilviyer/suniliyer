import { getCardsByArticle, getArticleBySlug } from '@/lib/db';
import { ArticlePageWrapper } from '@/components/articles/ArticlePageWrapper';
import { DatabaseArticleRenderer } from '@/components/articles/DatabaseArticleRenderer';
import { notFound } from 'next/navigation';

export default async function TrustworthyAiArticle() {
  // Fetch article and cards from database
  const [article, cards] = await Promise.all([
    getArticleBySlug('trustworthy-ai'),
    getCardsByArticle('trustworthy-ai'),
  ]);

  // If article not found, show 404
  if (!article || !article.content) {
    notFound();
  }

  const { content } = article;

  return (
    <ArticlePageWrapper
      path="future"
      pathTitle="Future"
      articleTitle="Trustworthy AI: Seven Pillars"
      tldr={content.tldr || ''}
      tags={content.tags || []}
      readTime={content.readTime || ''}
      updatedDate={content.updatedDate || ''}
      headerImage={content.headerImage || ''}
      currentIndex={8}
      totalArticles={8}
      prevArticle={{
        slug: '/future/ai-governance-careers',
        title: 'AI Governance Careers'
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
