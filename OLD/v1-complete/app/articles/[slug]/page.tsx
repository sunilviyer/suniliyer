import { getAllArticles, getArticleBySlug } from '@/lib/article-utils';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { MDXComponents } from '@/components/articles/MDXComponents';
import CategoryBadge from '@/components/articles/CategoryBadge';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FloatingMenu } from '@/components/navigation/FloatingMenu';

/**
 * Individual Article Page
 *
 * Renders article content as static HTML for:
 * - Direct URL access (SEO)
 * - No-JS fallback (progressive enhancement)
 * - Social media preview
 *
 * Features:
 * - Server-side rendering (no client JavaScript required)
 * - Static generation at build time via generateStaticParams()
 * - SEO metadata from article frontmatter
 * - Accessible content without expandable cards
 */

/**
 * Generate static params for all articles at build time
 *
 * This ensures all article pages are pre-rendered as static HTML,
 * enabling no-JS access and optimal performance.
 */
export async function generateStaticParams() {
  const articles = await getAllArticles();

  return articles.map((article) => ({
    slug: article.slug,
  }));
}

/**
 * Generate SEO metadata from article frontmatter
 *
 * Uses custom seo_title and seo_description if provided,
 * otherwise falls back to article title and excerpt.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const article = await getArticleBySlug(slug);

    return {
      title: article.seo_title || `${article.title} | AIDefence`,
      description: article.seo_description || article.excerpt,
      openGraph: {
        title: article.seo_title || article.title,
        description: article.seo_description || article.excerpt,
        type: 'article',
        publishedTime: article.date,
        tags: article.tags,
      },
    };
  } catch {
    return {
      title: 'Article Not Found | AIDefence',
      description: 'The requested article could not be found.',
    };
  }
}

/**
 * Article Page Component
 *
 * Renders individual article as static HTML page.
 * Works without JavaScript for progressive enhancement.
 */
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // Load article data (throws error if not found)
  let article;
  try {
    article = await getArticleBySlug(slug);
  } catch {
    notFound(); // Return 404 page for invalid slugs
  }

  // Format publication date (same pattern as ArticleExpanded)
  const formattedDate = new Date(article.date + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <FloatingMenu />
      <main id="main" className="article-page-static">
        <div className="article-static-container">
        {/* Back to articles navigation */}
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href="/articles" className="breadcrumb-link">
            ← Back to All Articles
          </Link>
        </nav>

        {/* Article content */}
        <article className="article-static">
          {/* Article header */}
          <header className="article-header-static">
            <CategoryBadge category={article.category} />
            <h1 className="article-title-static">{article.title}</h1>
            <div className="article-meta-static">
              <span>{article.reading_time} min read</span>
              <span aria-hidden="true">•</span>
              <time dateTime={article.date}>{formattedDate}</time>
            </div>
          </header>

          {/* Article excerpt/summary */}
          {article.excerpt && (
            <div className="article-excerpt-static">
              <p>{article.excerpt}</p>
            </div>
          )}

          {/* Article body with MDX content */}
          <div className="article-body-static">
            <MDXRemote source={article.content} components={MDXComponents} />
          </div>

          {/* Optional video embed */}
          {article.video_url && (
            <div className="article-video-static">
              <h2>Watch Video Companion</h2>
              <a href={article.video_url} target="_blank" rel="noopener noreferrer">
                View on YouTube
              </a>
            </div>
          )}

          {/* Article tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="article-tags-static">
              <h2 className="sr-only">Tags</h2>
              <ul className="tags-list">
                {article.tags.map((tag) => (
                  <li key={tag} className="tag-item">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Back to articles footer navigation */}
          <nav className="article-footer-nav">
            <Link href="/articles" className="back-link">
              ← Back to All Articles
            </Link>
          </nav>
        </article>
      </div>
      </main>
    </>
  );
}
