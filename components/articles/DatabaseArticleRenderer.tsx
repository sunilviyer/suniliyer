'use client';

import React, { useMemo, useState, useEffect } from 'react';
import { InlineContextCard } from './InlineContextCard';
import { KeyLearnings } from './KeyLearnings';
import { Accordion } from './Accordion';

// Enhanced resource type supporting both strings and rich objects
type ResourceItem = string | {
  title: string;
  url?: string;
  type?: 'article' | 'video' | 'pdf' | 'excel' | 'document' | 'website' | 'tool';
  description?: string;
  author?: string;
  year?: number;
};

interface DatabaseArticleRendererProps {
  content: string;
  keyLearnings?: string[];
  additionalResources?: ResourceItem[];
  sources?: ResourceItem[];
}

/**
 * Get icon for resource type
 */
function getResourceTypeIcon(type?: string): string {
  switch (type) {
    case 'pdf':
      return '📄';
    case 'excel':
      return '📊';
    case 'video':
      return '🎥';
    case 'article':
      return '📰';
    case 'website':
      return '🌐';
    case 'tool':
      return '🔧';
    case 'document':
      return '📝';
    default:
      return '🔗';
  }
}

/**
 * Render a resource item (string or object)
 */
function renderResourceItem(item: ResourceItem, index: number, isSource: boolean = false): React.ReactNode {
  // Handle simple string format (backward compatible)
  if (typeof item === 'string') {
    return (
      <li
        key={index}
        style={{
          fontFamily: 'Crimson Pro, Georgia, serif',
          fontSize: '17px',
          lineHeight: '1.7',
          padding: '12px 0',
          borderBottom: '1px solid rgba(26, 26, 26, 0.06)',
        }}
      >
        {item}
      </li>
    );
  }

  // Handle rich object format
  const { title, url, type, description, author, year } = item;

  // Format citation for sources
  let displayTitle = title;
  if (isSource && author && year) {
    displayTitle = `${author} (${year}). ${title}`;
  } else if (isSource && author) {
    displayTitle = `${author}. ${title}`;
  }

  return (
    <li
      key={index}
      style={{
        fontFamily: 'Crimson Pro, Georgia, serif',
        fontSize: '17px',
        lineHeight: '1.7',
        padding: '12px 0',
        borderBottom: '1px solid rgba(26, 26, 26, 0.06)',
      }}
    >
      {/* Type icon */}
      {type && (
        <span style={{ marginRight: '8px', fontSize: '16px' }}>
          {getResourceTypeIcon(type)}
        </span>
      )}

      {/* Title/Link */}
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#936639',
            textDecoration: 'none',
            borderBottom: '1px solid rgba(147, 102, 57, 0.3)',
            transition: 'border-color 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderBottomColor = '#936639';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderBottomColor = 'rgba(147, 102, 57, 0.3)';
          }}
        >
          {displayTitle}
        </a>
      ) : (
        <span>{displayTitle}</span>
      )}

      {/* Description */}
      {description && (
        <div
          style={{
            fontSize: '15px',
            color: 'rgba(26, 26, 26, 0.65)',
            marginTop: '6px',
            fontStyle: 'italic',
          }}
        >
          {description}
        </div>
      )}
    </li>
  );
}

/**
 * Recursively process DOM nodes and replace card markers with React components
 */
function processNode(node: ChildNode, keyPrefix: string = ''): React.ReactNode[] {
  const results: React.ReactNode[] = [];
  let keyCounter = 0;

  if (node.nodeType === Node.TEXT_NODE) {
    // Text node - check for card markers
    const text = node.textContent || '';
    const cardPattern = /\{\{CARD\|([^|]+)\|([^}]+)\}\}/g;
    let lastIndex = 0;
    let match;

    while ((match = cardPattern.exec(text)) !== null) {
      const [fullMatch, cardId, trigger] = match;
      const matchIndex = match.index;

      // Add text before card
      if (matchIndex > lastIndex) {
        const textBefore = text.substring(lastIndex, matchIndex);
        results.push(
          <React.Fragment key={`${keyPrefix}-text-${keyCounter++}`}>
            {textBefore}
          </React.Fragment>
        );
      }

      // Add card component
      results.push(
        <InlineContextCard
          key={`${keyPrefix}-card-${cardId}-${keyCounter++}`}
          cardId={cardId}
          trigger={trigger}
        />
      );

      lastIndex = matchIndex + fullMatch.length;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      const textAfter = text.substring(lastIndex);
      results.push(
        <React.Fragment key={`${keyPrefix}-text-${keyCounter++}`}>
          {textAfter}
        </React.Fragment>
      );
    }

    // If no matches found, just return the text
    if (results.length === 0) {
      return [text];
    }

    return results;
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    // Element node - recursively process children
    const element = node as Element;
    const tagName = element.tagName.toLowerCase();
    const children: React.ReactNode[] = [];

    // Process all child nodes
    Array.from(element.childNodes).forEach((child, index) => {
      const processed = processNode(child, `${keyPrefix}-${index}`);
      children.push(...processed);
    });

    // Get attributes
    const props: Record<string, string | React.CSSProperties> = {
      key: `${keyPrefix}-${tagName}-${keyCounter++}`,
    };

    Array.from(element.attributes).forEach((attr) => {
      // Convert HTML attributes to React props
      let propName = attr.name;
      if (propName === 'class') propName = 'className';
      if (propName === 'for') propName = 'htmlFor';

      // Handle style attribute
      if (propName === 'style' && typeof attr.value === 'string') {
        const styleObj: Record<string, string> = {};
        attr.value.split(';').forEach((style) => {
          const [key, value] = style.split(':').map((s) => s.trim());
          if (key && value) {
            // Convert kebab-case to camelCase
            const camelKey = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
            styleObj[camelKey] = value;
          }
        });
        props.style = styleObj;
      } else {
        props[propName] = attr.value;
      }
    });

    // Return the element with processed children
    return [React.createElement(tagName, props, ...children)];
  }

  return results;
}

/**
 * Parse HTML content and replace {{CARD|cardId|trigger}} markers with React components
 */
function parseContentWithCards(htmlContent: string): React.ReactNode[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(`<div>${htmlContent}</div>`, 'text/html');
  const container = doc.body.firstChild;

  if (!container) {
    return [];
  }

  const results: React.ReactNode[] = [];
  Array.from(container.childNodes).forEach((child, index) => {
    const processed = processNode(child, `root-${index}`);
    results.push(...processed);
  });

  return results;
}

export function DatabaseArticleRenderer({
  content,
  keyLearnings,
  additionalResources,
  sources,
}: DatabaseArticleRendererProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isContentReady, setIsContentReady] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Small delay to ensure smooth transition
    setTimeout(() => setIsContentReady(true), 50);
  }, []);

  // Parse content only on client after mount
  const parsedContent = useMemo(() => {
    if (!isMounted) return null;
    return parseContentWithCards(content);
  }, [content, isMounted]);

  return (
    <>
      {/* Main Content */}
      <div className="database-article-content" suppressHydrationWarning>
        {!isContentReady ? (
          <div className="article-loading-skeleton">
            <div className="skeleton-line skeleton-title"></div>
            <div className="skeleton-line"></div>
            <div className="skeleton-line"></div>
            <div className="skeleton-line skeleton-short"></div>
            <div className="skeleton-line"></div>
            <div className="skeleton-line"></div>
            <div className="skeleton-line skeleton-short"></div>
          </div>
        ) : (
          parsedContent
        )}
      </div>

      {/* Key Learnings */}
      {keyLearnings && keyLearnings.length > 0 && (
        <KeyLearnings learnings={keyLearnings} />
      )}

      {/* Accordions */}
      {(additionalResources || sources) && (
        <div style={{ marginTop: '60px' }}>
          {additionalResources && additionalResources.length > 0 && (
            <div style={{ marginTop: '20px' }}>
              <Accordion title="Additional Resources">
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {additionalResources.map((resource, index) => renderResourceItem(resource, index, false))}
                </ul>
              </Accordion>
            </div>
          )}

          {sources && sources.length > 0 && (
            <div style={{ marginTop: '20px' }}>
              <Accordion title="Sources & References">
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {sources.map((source, index) => renderResourceItem(source, index, true))}
                </ul>
              </Accordion>
            </div>
          )}
        </div>
      )}

      <style jsx global>{`
        .inline-card-placeholder {
          display: inline !important;
        }

        .article-loading-skeleton {
          padding: 40px 0;
          animation: fadeIn 0.3s ease-in;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .skeleton-line {
          height: 20px;
          background: linear-gradient(
            90deg,
            rgba(147, 102, 57, 0.06) 0%,
            rgba(147, 102, 57, 0.12) 50%,
            rgba(147, 102, 57, 0.06) 100%
          );
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
          margin-bottom: 16px;
        }

        .skeleton-line.skeleton-title {
          height: 32px;
          width: 60%;
          margin-bottom: 32px;
        }

        .skeleton-line.skeleton-short {
          width: 80%;
        }

        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        [data-theme='dark'] .skeleton-line {
          background: linear-gradient(
            90deg,
            rgba(147, 102, 57, 0.1) 0%,
            rgba(147, 102, 57, 0.15) 50%,
            rgba(147, 102, 57, 0.1) 100%
          );
          background-size: 200% 100%;
        }
      `}</style>
    </>
  );
}
