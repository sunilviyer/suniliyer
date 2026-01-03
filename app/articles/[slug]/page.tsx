import { notFound } from 'next/navigation';
import { WireframeHeader } from '@/components/homepage/WireframeHeader';
import { ArticleContainer } from '@/components/articles/ArticleContainer';
import { ArticleBreadcrumbs } from '@/components/articles/ArticleBreadcrumbs';
import { ArticleHeader } from '@/components/articles/ArticleHeader';
import { ArticleThumbnail } from '@/components/articles/ArticleThumbnail';
import { ArticleExcerpt } from '@/components/articles/ArticleExcerpt';
import { TableOfContents } from '@/components/articles/TableOfContents';
import { ArticleContent } from '@/components/articles/ArticleContent';
import { RelatedConcepts } from '@/components/articles/RelatedConcepts';
import { CrossPathRefs } from '@/components/articles/CrossPathRefs';
import { ArticleAuthor } from '@/components/articles/ArticleAuthor';
import { ArticleNavigation } from '@/components/articles/ArticleNavigation';
import { getArticleBySlug, getAllArticleSlugs } from '@/lib/data/articles';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found - AIDefence',
    };
  }

  return {
    title: `${article.title} - AIDefence`,
    description: article.tldr,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Fetch related articles and navigation on server
  const { getRelatedArticles, getNextPrevArticles } = await import('@/lib/data/articles');
  const relatedArticles = await getRelatedArticles(article.relatedConcepts || [], article.path);
  const { prev, next } = await getNextPrevArticles(article.path, article.slug);

  return (
    <>
      <WireframeHeader />
      <ArticleContainer>
        <ArticleBreadcrumbs
          path={article.path}
          pathTitle={article.pathTitle}
          articleTitle={article.title}
        />

        <ArticleHeader
          title=""
          tags={[]}
          date="Updated December 2024"
          readTime="5 min read"
        />

        <ArticleThumbnail
          image={article.image}
          alt={article.title}
          title={article.title}
          tags={article.tags}
        />

        <TableOfContents sections={article.contentSections} />

        <ArticleContent slug={article.slug} />

        {relatedArticles.length > 0 && (
          <RelatedConcepts relatedArticles={relatedArticles} />
        )}

        {article.crossPathRefs && (
          <CrossPathRefs refs={article.crossPathRefs} />
        )}

        <ArticleAuthor />

        <ArticleNavigation
          path={article.path}
          pathTitle={article.pathTitle}
          prev={prev}
          next={next}
        />
      </ArticleContainer>
    </>
  );
}
