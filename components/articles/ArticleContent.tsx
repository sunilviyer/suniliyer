'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface ArticleContentProps {
  content: string;
}

export function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div className="article-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h2: ({ children }) => (
            <h2 className="article-h2">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="article-h3">{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 className="article-h4">{children}</h4>
          ),
          p: ({ children }) => (
            <p className="article-p">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="article-ul">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="article-ol">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="article-li">{children}</li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="article-blockquote">{children}</blockquote>
          ),
          table: ({ children }) => (
            <div className="article-table-wrapper">
              <table className="article-table">{children}</table>
            </div>
          ),
          code: ({ className, children }) => {
            const isInline = !className;
            return isInline ? (
              <code className="article-code-inline">{children}</code>
            ) : (
              <code className={`article-code-block ${className || ''}`}>{children}</code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>

      <style jsx global>{`
        .article-content {
          margin-bottom: 80px;
        }

        .article-h2 {
          font-size: 40px;
          font-weight: 600;
          margin: 60px 0 24px;
          color: var(--text-primary);
          scroll-margin-top: 100px;
          border-bottom: 2px solid var(--border-color);
          padding-bottom: 12px;
        }

        .article-h3 {
          font-size: 32px;
          font-weight: 600;
          margin: 48px 0 20px;
          color: var(--text-primary);
          scroll-margin-top: 100px;
        }

        .article-h4 {
          font-size: 24px;
          font-weight: 600;
          margin: 36px 0 16px;
          color: var(--text-primary);
        }

        .article-p {
          font-size: 18px;
          line-height: 1.8;
          color: var(--text-primary);
          margin-bottom: 20px;
        }

        .article-ul,
        .article-ol {
          margin: 20px 0;
          padding-left: 32px;
        }

        .article-li {
          font-size: 18px;
          line-height: 1.8;
          color: var(--text-primary);
          margin-bottom: 12px;
        }

        .article-blockquote {
          border-left: 4px solid #936639;
          padding: 24px 32px;
          margin: 32px 0;
          background: var(--bg-secondary);
          border-radius: 8px;
          font-style: italic;
          color: var(--text-secondary);
        }

        .article-table-wrapper {
          overflow-x: auto;
          margin: 32px 0;
        }

        .article-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 16px;
        }

        .article-table th {
          background: var(--bg-secondary);
          padding: 12px 16px;
          text-align: left;
          border: 1px solid var(--border-color);
          font-weight: 600;
          color: var(--text-primary);
        }

        .article-table td {
          padding: 12px 16px;
          border: 1px solid var(--border-color);
          color: var(--text-primary);
        }

        .article-table tr:nth-child(even) {
          background: var(--bg-secondary);
        }

        .article-code-inline {
          background: var(--bg-secondary);
          padding: 2px 8px;
          border-radius: 4px;
          font-family: 'Monaco', 'Courier New', monospace;
          font-size: 15px;
          color: #936639;
        }

        .article-code-block {
          display: block;
          background: var(--bg-secondary);
          padding: 20px;
          border-radius: 8px;
          overflow-x: auto;
          font-family: 'Monaco', 'Courier New', monospace;
          font-size: 14px;
          line-height: 1.6;
          margin: 24px 0;
        }

        @media (max-width: 767px) {
          .article-h2 {
            font-size: 32px;
          }

          .article-h3 {
            font-size: 24px;
          }

          .article-h4 {
            font-size: 20px;
          }

          .article-p,
          .article-li {
            font-size: 16px;
          }

          .article-blockquote {
            padding: 20px 24px;
          }

          .article-table {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
}
