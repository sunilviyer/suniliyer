'use client';

import { useState } from 'react';

interface SourceCitationProps {
  number: number;
  source: {
    title: string;
    author?: string;
    publication?: string;
    year?: string;
    url?: string;
    type: 'academic' | 'news' | 'government' | 'tech' | 'other';
  };
}

export function SourceCitation({ number, source }: SourceCitationProps) {
  const [showPreview, setShowPreview] = useState(false);

  const getTypeIcon = () => {
    switch (source.type) {
      case 'academic':
        return '📚';
      case 'news':
        return '📰';
      case 'government':
        return '🏛️';
      case 'tech':
        return '💻';
      default:
        return '📄';
    }
  };

  return (
    <>
      <sup
        className="citation-ref"
        onMouseEnter={() => setShowPreview(true)}
        onMouseLeave={() => setShowPreview(false)}
      >
        [{number}]
        {showPreview && (
          <span className="citation-preview">
            <span className="preview-header">
              <span className="type-icon">{getTypeIcon()}</span>
              <span className="source-type">{source.type}</span>
            </span>
            <strong className="source-title">{source.title}</strong>
            {source.author && <span className="source-meta">By {source.author}</span>}
            {source.publication && (
              <span className="source-meta">{source.publication}</span>
            )}
            {source.year && <span className="source-meta">{source.year}</span>}
            {source.url && (
              <a
                href={source.url}
                className="source-link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                View source →
              </a>
            )}
          </span>
        )}
      </sup>

      <style jsx>{`
        .citation-ref {
          position: relative;
          color: #936639;
          font-weight: 600;
          cursor: help;
          transition: color 0.2s ease;
          margin-left: 2px;
        }

        .citation-ref:hover {
          color: #7a5430;
        }

        .citation-preview {
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          border: 1px solid rgba(26, 26, 26, 0.1);
          border-radius: 8px;
          padding: 16px;
          min-width: 300px;
          max-width: 400px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
          z-index: 100;
          margin-bottom: 8px;
          animation: fadeInUp 0.2s ease-out;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        .citation-preview::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 6px solid transparent;
          border-top-color: white;
        }

        .preview-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
        }

        .type-icon {
          font-size: 16px;
        }

        .source-type {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #6b6b6b;
          font-weight: 600;
        }

        .source-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 16px;
          color: #1a1a1a;
          line-height: 1.4;
          display: block;
        }

        .source-meta {
          font-family: 'Crimson Pro', Georgia, serif;
          font-size: 14px;
          color: #6b6b6b;
          display: block;
        }

        .source-link {
          font-family: 'DM Sans', -apple-system, sans-serif;
          font-size: 13px;
          color: #936639;
          text-decoration: none;
          font-weight: 600;
          display: inline-block;
          margin-top: 4px;
        }

        .source-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
