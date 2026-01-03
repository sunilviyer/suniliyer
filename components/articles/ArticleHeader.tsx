'use client';

import Link from 'next/link';

interface ArticleHeaderProps {
  title: string;
  tags: string[];
  date: string;
  readTime: string;
}

export function ArticleHeader({ title, tags, date, readTime }: ArticleHeaderProps) {
  return (
    <div className="article-header">
      <div className="article-meta">
        <div className="meta-date">
          <span>📅</span>
          <span>{date}</span>
        </div>
        <div className="meta-read-time">
          <span>⏱</span>
          <span>{readTime}</span>
        </div>
      </div>

      <h1 className="article-title">{title}</h1>

      <div className="article-tags">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <style jsx>{`
        .article-header {
          margin-bottom: 60px;
        }

        .article-meta {
          display: flex;
          gap: 20px;
          align-items: center;
          font-size: 14px;
          color: var(--text-secondary);
          margin-bottom: 24px;
        }

        .meta-date,
        .meta-read-time {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .article-title {
          font-size: 56px;
          font-weight: 600;
          line-height: 1.1;
          margin-bottom: 32px;
          color: var(--text-primary);
          font-family: var(--font-funnel-display);
        }

        .article-tags {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .tag {
          display: inline-block;
          padding: 8px 20px;
          background: var(--bg-secondary);
          border-radius: 20px;
          font-size: 14px;
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .tag:hover {
          background: #333d29;
          color: white;
        }

        @media (max-width: 767px) {
          .article-title {
            font-size: 36px;
          }
        }
      `}</style>
    </div>
  );
}
