'use client';

import React, { useMemo } from 'react';
import { parse as parseHTML, type HTMLElement as ParsedElement, type Node as ParsedNode, type TextNode } from 'node-html-parser';
import { InlineContextCard } from './InlineContextCard';
import { KeyLearnings } from './KeyLearnings';
import { Accordion } from './Accordion';
import { decodeHTMLEntities } from '@/lib/htmlDecode';

// Enhanced resource type supporting both strings and rich objects
type ResourceItem = string | {
  title?: string;
  citation?: string; // For sources
  url?: string;
  type?: 'article' | 'video' | 'pdf' | 'excel' | 'document' | 'website' | 'tool' | 'research' | 'paper' | 'framework' | 'report' | 'guide' | 'course' | 'certification' | 'standard';
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
        {decodeHTMLEntities(item)}
      </li>
    );
  }

  // Handle rich object format
  const { title, citation, url, type, description, author, year } = item;

  // Use citation for sources, title for resources
  const baseText = title || citation || '';

  // Format citation for sources (decode HTML entities)
  let displayTitle = decodeHTMLEntities(baseText);
  if (isSource && author && year && !citation) {
    displayTitle = `${decodeHTMLEntities(author)} (${year}). ${displayTitle}`;
  } else if (isSource && author && !citation) {
    displayTitle = `${decodeHTMLEntities(author)}. ${displayTitle}`;
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
          {decodeHTMLEntities(description)}
        </div>
      )}
    </li>
  );
}

/**
 * Recursively process DOM nodes and replace card markers with React components
 */
// node-html-parser mirrors the DOM's numeric nodeType values, but the `Node`
// global does not exist on the server, so the constants are inlined.
const TEXT_NODE = 3;
const ELEMENT_NODE = 1;

function processNode(node: ParsedNode, keyPrefix: string = ''): React.ReactNode[] {
  const results: React.ReactNode[] = [];
  let keyCounter = 0;

  if (node.nodeType === TEXT_NODE) {
    // Text node - check for card markers. `.text` decodes entities, which is
    // what DOMParser used to do for us.
    const text = (node as TextNode).text || '';
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
  } else if (node.nodeType === ELEMENT_NODE) {
    // Element node - recursively process children
    const element = node as ParsedElement;
    const tagName = element.rawTagName.toLowerCase();
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

    Object.entries(element.attributes).forEach(([attrName, attrValue]) => {
      // Convert HTML attributes to React props
      let propName = attrName;
      if (propName === 'class') propName = 'className';
      if (propName === 'for') propName = 'htmlFor';

      // Handle style attribute
      if (propName === 'style' && typeof attrValue === 'string') {
        const styleObj: Record<string, string> = {};
        attrValue.split(';').forEach((style) => {
          const [key, value] = style.split(':').map((s) => s.trim());
          if (key && value) {
            // Convert kebab-case to camelCase
            const camelKey = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
            styleObj[camelKey] = value;
          }
        });
        props.style = styleObj;
      } else {
        props[propName] = attrValue;
      }
    });

    // Return the element with processed children
    return [React.createElement(tagName, props, ...children)];
  }

  return results;
}

/**
 * Parse HTML content and replace {{CARD|cardId|trigger}} markers with React components
 * Note: the parser decodes HTML entities like &apos; to ' for us.
 */
function parseContentWithCards(htmlContent: string): React.ReactNode[] {
  // node-html-parser rather than DOMParser: DOMParser is browser-only, which
  // is why this used to be deferred to a client-side effect and left the prose
  // out of the server HTML entirely.
  const container = parseHTML(`<div>${htmlContent}</div>`).firstChild as ParsedElement | null;

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
  // Parsed during render on both server and client. parseContentWithCards and
  // decodeHTMLEntities are pure string work -- no document/window -- so this
  // server-renders. It used to be gated behind an isMounted effect, which meant
  // the server emitted only a loading skeleton and the prose existed nowhere in
  // the HTML: fine for Googlebot, which renders JS, invisible to AI crawlers,
  // which mostly do not.
  const parsedContent = useMemo(() => parseContentWithCards(content), [content]);

  return (
    <>
      {/* Main Content */}
      <div className="database-article-content">{parsedContent}</div>

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

      `}</style>
    </>
  );
}
