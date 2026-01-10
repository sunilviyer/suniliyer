'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Accordion } from './Accordion';

interface EnhancedArticleContentProps {
  content: string;
  sources?: Array<{
    title: string;
    author?: string;
    publication?: string;
    year?: string;
    url?: string;
    type: 'academic' | 'news' | 'government' | 'tech' | 'other';
  }>;
}

export function EnhancedArticleContent({ content, sources = [] }: EnhancedArticleContentProps) {
  // Process content to replace citation markers with components
  const processedContent = content.replace(/\[cite:(\d+)\]/g, (match, num) => {
    return `<sup class="citation-marker" data-number="${num}">[${num}]</sup>`;
  });

  return (
    <>
      <div className="enhanced-article-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            h2: ({ children }) => (
              <h2 className="content-h2">
                <span className="heading-decoration" />
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="content-h3">{children}</h3>
            ),
            h4: ({ children }) => (
              <h4 className="content-h4">{children}</h4>
            ),
            p: ({ children }) => (
              <p className="content-p">{children}</p>
            ),
            ul: ({ children }) => (
              <ul className="content-ul">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="content-ol">{children}</ol>
            ),
            li: ({ children }) => (
              <li className="content-li">{children}</li>
            ),
            blockquote: ({ children }) => (
              <div className="content-blockquote">
                <div className="blockquote-mark">&ldquo;</div>
                {children}
              </div>
            ),
            code: ({ className, children }) => {
              const isInline = !className;
              return isInline ? (
                <code className="inline-code">{children}</code>
              ) : (
                <pre className="code-block">
                  <code className={className}>{children}</code>
                </pre>
              );
            },
            a: ({ href, children }) => (
              <a href={href} className="content-link" target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            ),
            strong: ({ children }) => (
              <strong className="content-strong">{children}</strong>
            ),
            em: ({ children }) => (
              <em className="content-em">{children}</em>
            ),
          }}
        >
          {processedContent}
        </ReactMarkdown>

        {/* Sources Section - Now an Accordion */}
        {sources.length > 0 && (
          <div className="sources-section">
            <Accordion title="Sources & References" defaultOpen={false}>
              <ol className="sources-list">
                {sources.map((source, index) => (
                  <li key={index} className="source-item">
                    <span className="source-number">[{index + 1}]</span>
                    <div className="source-details">
                      <strong className="source-title">{source.title}</strong>
                      {source.author && <span className="source-meta">, by {source.author}</span>}
                      {source.publication && (
                        <span className="source-meta">, {source.publication}</span>
                      )}
                      {source.year && <span className="source-meta"> ({source.year})</span>}
                      {source.url && (
                        <>
                          <br />
                          <a
                            href={source.url}
                            className="source-url"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {source.url}
                          </a>
                        </>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </Accordion>
          </div>
        )}
      </div>

      <style jsx global>{`
        .enhanced-article-content {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 20px;
          line-height: 1.8;
          color: #1a1a1a;
        }

        .content-h2 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 44px;
          font-weight: 700;
          line-height: 1.2;
          color: #1a1a1a;
          margin: 72px 0 28px 0;
          letter-spacing: -0.02em;
          position: relative;
          padding-top: 24px;
        }

        .heading-decoration {
          position: absolute;
          top: 0;
          left: 0;
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #936639 0%, transparent 100%);
        }

        .content-h3 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 32px;
          font-weight: 600;
          line-height: 1.3;
          color: #1a1a1a;
          margin: 56px 0 20px 0;
          letter-spacing: -0.01em;
        }

        .content-h4 {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 20px;
          font-weight: 700;
          line-height: 1.4;
          color: #1a1a1a;
          margin: 40px 0 16px 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .content-p {
          margin: 0 0 28px 0;
        }

        .content-p:first-of-type::first-letter {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 72px;
          line-height: 1;
          float: left;
          margin: 8px 12px 0 0;
          color: #936639;
          font-weight: 700;
        }

        .content-ul,
        .content-ol {
          margin: 32px 0;
          padding-left: 32px;
        }

        .content-li {
          margin-bottom: 16px;
          padding-left: 12px;
        }

        .content-li::marker {
          color: #936639;
          font-weight: 600;
        }

        .content-blockquote {
          position: relative;
          margin: 48px 40px;
          padding: 32px 40px 32px 80px;
          background: linear-gradient(135deg, #f8f6f1 0%, #ffffff 100%);
          border-left: 4px solid #936639;
          border-radius: 0 8px 8px 0;
        }

        .blockquote-mark {
          position: absolute;
          left: 24px;
          top: 20px;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 80px;
          line-height: 1;
          color: rgba(147, 102, 57, 0.2);
        }

        .content-blockquote p {
          font-size: 22px;
          font-style: italic;
          color: #1a1a1a;
          margin: 0;
        }

        .inline-code {
          font-family: 'Monaco', 'Courier New', monospace;
          font-size: 17px;
          background: rgba(147, 102, 57, 0.08);
          color: #7a5430;
          padding: 3px 8px;
          border-radius: 4px;
          font-weight: 500;
        }

        .code-block {
          margin: 40px 0;
          padding: 32px;
          background: #1a1a1a;
          border-radius: 8px;
          overflow-x: auto;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        }

        .code-block code {
          font-family: 'Monaco', 'Courier New', monospace;
          font-size: 15px;
          line-height: 1.7;
          color: #e8e8e8;
        }

        .content-link {
          color: #936639;
          text-decoration: none;
          border-bottom: 1px solid rgba(147, 102, 57, 0.3);
          transition: all 0.2s ease;
        }

        .content-link:hover {
          border-bottom-color: #936639;
          color: #7a5430;
        }

        .content-strong {
          font-weight: 600;
          color: #1a1a1a;
        }

        .content-em {
          font-style: italic;
          color: #2a2a2a;
        }

        .citation-marker {
          color: #936639;
          font-weight: 600;
          cursor: help;
          margin-left: 2px;
        }

        /* Sources Section */
        .sources-section {
          margin-top: 80px;
          padding-top: 48px;
          border-top: 2px solid rgba(26, 26, 26, 0.1);
        }

        .sources-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 32px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 32px 0;
        }

        .sources-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .source-item {
          display: flex;
          gap: 16px;
          margin-bottom: 24px;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(26, 26, 26, 0.06);
        }

        .source-item:last-child {
          border-bottom: none;
        }

        .source-number {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #936639;
          flex-shrink: 0;
        }

        .source-details {
          flex: 1;
        }

        .source-title {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 17px;
          color: #1a1a1a;
        }

        .source-meta {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 16px;
          color: #6b6b6b;
        }

        .source-url {
          font-family: 'Monaco', 'Courier New', monospace;
          font-size: 13px;
          color: #936639;
          text-decoration: none;
          word-break: break-all;
          display: inline-block;
          margin-top: 6px;
        }

        .source-url:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .enhanced-article-content {
            font-size: 18px;
          }

          .content-h2 {
            font-size: 32px;
            margin: 48px 0 20px 0;
          }

          .content-h3 {
            font-size: 26px;
            margin: 40px 0 16px 0;
          }

          .content-h4 {
            font-size: 18px;
          }

          .content-p:first-of-type::first-letter {
            font-size: 56px;
            margin: 6px 10px 0 0;
          }

          .content-blockquote {
            margin: 32px 0;
            padding: 24px 24px 24px 60px;
          }

          .blockquote-mark {
            font-size: 60px;
            left: 16px;
          }
        }
      `}</style>
    </>
  );
}
