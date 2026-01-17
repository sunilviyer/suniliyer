'use client';

import React, { useMemo, useState, useEffect } from 'react';
import { InlineContextCard } from './InlineContextCard';
import { KeyLearnings } from './KeyLearnings';
import { Accordion } from './Accordion';

interface DatabaseArticleRendererProps {
  content: string;
  keyLearnings?: string[];
  additionalResources?: string[];
  sources?: string[];
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
    const props: Record<string, any> = {
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

  useEffect(() => {
    setIsMounted(true);
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
        {!isMounted ? (
          <div dangerouslySetInnerHTML={{ __html: content }} />
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
                  {additionalResources.map((resource, index) => (
                    <li
                      key={index}
                      style={{
                        fontFamily: 'Crimson Pro, Georgia, serif',
                        fontSize: '17px',
                        lineHeight: '1.7',
                        padding: '12px 0',
                        borderBottom: index === additionalResources.length - 1 ? 'none' : '1px solid rgba(26, 26, 26, 0.06)',
                      }}
                    >
                      {resource}
                    </li>
                  ))}
                </ul>
              </Accordion>
            </div>
          )}

          {sources && sources.length > 0 && (
            <div style={{ marginTop: '20px' }}>
              <Accordion title="Sources & References">
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {sources.map((source, index) => (
                    <li
                      key={index}
                      style={{
                        fontFamily: 'Crimson Pro, Georgia, serif',
                        fontSize: '17px',
                        lineHeight: '1.7',
                        padding: '12px 0',
                        borderBottom: index === sources.length - 1 ? 'none' : '1px solid rgba(26, 26, 26, 0.06)',
                      }}
                    >
                      {source}
                    </li>
                  ))}
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
