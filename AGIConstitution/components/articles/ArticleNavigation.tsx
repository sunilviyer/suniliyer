'use client';

import Link from 'next/link';

interface Article {
  title: string;
  slug: string;
}

interface ArticleNavigationProps {
  path: string;
  pathTitle: string;
  prev: Article | null;
  next: Article | null;
}

export function ArticleNavigation({ path, pathTitle, prev, next }: ArticleNavigationProps) {

  return (
    <div className="article-navigation">
      {prev ? (
        <Link href={`/articles/${prev.slug}`} className="nav-card prev">
          <div className="nav-label">
            <span>←</span>
            <span>Previous Article</span>
          </div>
          <div className="nav-title">{prev.title}</div>
        </Link>
      ) : (
        <Link href={`/${path}`} className="nav-card prev">
          <div className="nav-label">
            <span>←</span>
            <span>Back to Path</span>
          </div>
          <div className="nav-title">{pathTitle}</div>
        </Link>
      )}

      {next ? (
        <Link href={`/articles/${next.slug}`} className="nav-card next">
          <div className="nav-label">
            <span>Next Article</span>
            <span>→</span>
          </div>
          <div className="nav-title">{next.title}</div>
        </Link>
      ) : (
        <Link href={`/${path}`} className="nav-card next">
          <div className="nav-label">
            <span>Back to Path</span>
            <span>→</span>
          </div>
          <div className="nav-title">{pathTitle}</div>
        </Link>
      )}

      <style jsx>{`
        .article-navigation {
          margin: 60px 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .article-navigation :global(.nav-card) {
          padding: 24px;
          background: var(--bg-secondary);
          border-radius: 12px;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .article-navigation :global(.nav-card):hover {
          border-color: #333d29;
        }

        .article-navigation :global(.nav-card.prev):hover {
          transform: translateX(-4px);
        }

        .article-navigation :global(.nav-card.next):hover {
          transform: translateX(4px);
        }

        .article-navigation :global(.nav-label) {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-secondary);
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .article-navigation :global(.nav-card.next .nav-label) {
          justify-content: flex-end;
        }

        .article-navigation :global(.nav-title) {
          font-size: 18px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .article-navigation :global(.nav-card.next .nav-title) {
          text-align: right;
        }

        @media (max-width: 767px) {
          .article-navigation {
            grid-template-columns: 1fr;
          }

          .article-navigation :global(.nav-card.next .nav-label) {
            justify-content: flex-start;
          }

          .article-navigation :global(.nav-card.next .nav-title) {
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
}
