'use client';

import Link from 'next/link';

interface ArticleBreadcrumbsProps {
  path: string;
  pathTitle: string;
  articleTitle: string;
  theme?: 'light' | 'dark';
}

export function ArticleBreadcrumbs({ path, pathTitle, articleTitle, theme = 'light' }: ArticleBreadcrumbsProps) {
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
          color: ${theme === 'light' ? '#6b6b6b' : '#a0a0a0'};
          margin-bottom: 40px;
        }

        .breadcrumbs :global(a) {
          color: ${theme === 'light' ? '#6b6b6b' : '#a0a0a0'};
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .breadcrumbs :global(a):hover {
          color: ${theme === 'light' ? '#333d29' : '#b5c99a'};
        }

        .separator {
          color: ${theme === 'light' ? 'rgba(26, 26, 26, 0.2)' : 'rgba(255, 255, 255, 0.2)'};
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
