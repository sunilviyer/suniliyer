/**
 * Custom MDX Component Overrides
 *
 * Provides styled React components for all MDX/HTML elements.
 * These components are passed to MDXRemote to override default rendering.
 *
 * Styling approach:
 * - Components receive standard HTML props
 * - Apply className for CSS styling (defined in globals.css)
 * - Maintain accessibility (ARIA, semantic HTML)
 * - Support earth-tone color scheme from design system
 *
 * @module components/articles/MDXComponents
 */

import type { MDXComponents as MDXComponentsType } from 'mdx/types';
import Image from 'next/image';

/**
 * Custom MDX component overrides for article content rendering.
 *
 * Maps MDX elements to custom React components with styling classes.
 * Used by MDXRemote in ArticleExpanded component.
 *
 * Typography hierarchy:
 * - H1: 48px (reserved for article title, rarely used in content)
 * - H2: 32px (major sections)
 * - H3: 24px (subsections)
 * - Body: 16px with 1.8 line-height
 *
 * Vertical rhythm:
 * - Paragraphs: 24px bottom margin
 * - Sections (H2): 48px top margin
 * - Subsections (H3): 32px top margin
 *
 * @example
 * ```tsx
 * <MDXRemote source={compiledContent} components={MDXComponents} />
 * ```
 */
export const MDXComponents: MDXComponentsType = {
  // ==================== Headings ====================

  // H1 removed - article header provides the only H1 per page (semantic HTML)
  // Article content should start with H2 for proper heading hierarchy

  h2: ({ children }) => <h2 className="mdx-h2">{children}</h2>,

  h3: ({ children }) => <h3 className="mdx-h3">{children}</h3>,

  // ==================== Text Elements ====================

  p: ({ children }) => <p className="mdx-p">{children}</p>,

  /**
   * Links with category color accent.
   * External links open in new tab with security attributes.
   */
  a: ({ href, children }) => (
    <a
      href={href}
      className="mdx-link"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),

  // ==================== Code ====================

  /**
   * Inline code with background and category color.
   */
  code: ({ children }) => <code className="mdx-code-inline">{children}</code>,

  /**
   * Code blocks with syntax highlighting.
   * rehype-prism adds Prism classes at build time.
   * Custom CSS applies earth-tone theme.
   */
  pre: ({ children }) => <pre className="mdx-pre">{children}</pre>,

  // ==================== Blockquotes ====================

  /**
   * Blockquotes with 4px left border in category color.
   * Italic text for visual distinction.
   */
  blockquote: ({ children }) => <blockquote className="mdx-blockquote">{children}</blockquote>,

  // ==================== Lists ====================

  ul: ({ children }) => <ul className="mdx-ul">{children}</ul>,

  ol: ({ children }) => <ol className="mdx-ol">{children}</ol>,

  li: ({ children }) => <li className="mdx-li">{children}</li>,

  // ==================== Tables ====================

  /**
   * Tables wrapped in scrollable container for mobile responsiveness.
   * Category-colored top border for visual hierarchy.
   * Alternating row colors for scannability.
   */
  table: ({ children }) => (
    <div className="mdx-table-wrapper">
      <table className="mdx-table">{children}</table>
    </div>
  ),

  thead: ({ children }) => <thead className="mdx-thead">{children}</thead>,

  tbody: ({ children }) => <tbody className="mdx-tbody">{children}</tbody>,

  tr: ({ children }) => <tr className="mdx-tr">{children}</tr>,

  th: ({ children }) => <th className="mdx-th">{children}</th>,

  td: ({ children }) => <td className="mdx-td">{children}</td>,

  // ==================== Images ====================

  /**
   * Images with responsive sizing and lazy loading.
   * Constrained to max-width 680px (article body width).
   *
   * Uses Next.js Image component for automatic optimization:
   * - Lazy loading
   * - Responsive sizing
   * - Modern image formats (WebP/AVIF)
   * - Blur placeholder
   *
   * For external images, unoptimized mode is used for security.
   */
  img: ({ src, alt }: { src?: string; alt?: string }) => {
    if (!src) return null;

    // For external images (http/https), use unoptimized mode
    const isExternal = src.startsWith('http://') || src.startsWith('https://');

    return (
      <div className="mdx-img-wrapper">
        <Image
          src={src}
          alt={alt || ''}
          width={800}
          height={600}
          className="mdx-img"
          unoptimized={isExternal}
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: '680px',
          }}
        />
      </div>
    );
  },
};
