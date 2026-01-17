import { getCardsByArticle, getArticleBySlug } from '@/lib/db';
import { ArticlePageWrapper } from '@/components/articles/ArticlePageWrapper';
import { DatabaseArticleRenderer } from '@/components/articles/DatabaseArticleRenderer';
import { notFound } from 'next/navigation';

export default async function HowMachinesLearnArticle() {
  // Fetch article and cards from database
  const [article, cards] = await Promise.all([
    getArticleBySlug('how-machines-learn'),
    getCardsByArticle('how-machines-learn'),
  ]);

  // If article not found, show 404
  if (!article || !article.content) {
    notFound();
  }

  const { content } = article;

  return (
    <ArticlePageWrapper
      path="history"
      pathTitle="History"
      articleTitle="How Machines Learn"
      tldr={content.tldr}
      tags={content.tags}
      readTime={content.readTime}
      updatedDate={content.updatedDate}
      headerImage={content.headerImage}
      currentIndex={4}
      totalArticles={8}
      prevArticle={{
        slug: '/articles/types-of-ai-intelligence',
        title: 'Types of AI Intelligence'
      }}
      nextArticle={{
        slug: '/articles/deep-learning-decoded',
        title: 'Deep Learning Decoded'
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
