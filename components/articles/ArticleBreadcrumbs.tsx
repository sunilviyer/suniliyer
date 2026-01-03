'use client';

import Link from 'next/link';

interface ArticleBreadcrumbsProps {
  path: string;
  pathTitle: string;
  articleTitle: string;
}

export function ArticleBreadcrumbs({ path, pathTitle, articleTitle }: ArticleBreadcrumbsProps) {
  return (
    <div className="breadcrumbs">
      <Link href="/">Home</Link>
      <span className="separator">→</span>
      <Link href={`/${path}`}>{pathTitle}</Link>
      <span className="separator">→</span>
      <span>{articleTitle}</span>

      <style jsx>{`
        .breadcrumbs {
          display: flex;
          gap: 12px;
          align-items: center;
          font-size: 14px;
          color: var(--text-secondary);
          margin-bottom: 40px;
        }

        .breadcrumbs :global(a) {
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .breadcrumbs :global(a):hover {
          color: #333d29;
        }

        .separator {
          color: var(--border-color);
        }

        @media (max-width: 767px) {
          .breadcrumbs {
            font-size: 13px;
            margin-bottom: 30px;
          }
        }
      `}</style>
    </div>
  );
}
