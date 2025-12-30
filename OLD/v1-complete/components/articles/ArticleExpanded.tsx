'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { useEffect, useRef, useState, useCallback } from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { CompiledArticle } from '@/types/article';
import { calculateFLIP, animateExpansion, animateCollapse } from '@/lib/animations';
import CategoryBadge from '@/components/articles/CategoryBadge';
import { MDXComponents } from '@/components/articles/MDXComponents';
import { VALID_CATEGORIES, getCategorySlug } from '@/lib/constants';
import RelatedArticles from '@/components/articles/RelatedArticles';
import { useKeyboardNavigation } from '@/lib/hooks/useKeyboardNavigation';

/**
 * Props interface for ArticleExpanded component
 */
interface ArticleExpandedProps {
  article: CompiledArticle;
  allArticles: CompiledArticle[]; // All compiled articles for related articles lookup and transitions
  isOpen: boolean;
  onClose: () => void;
  cardElement: HTMLElement | null; // Reference to card for FLIP calculation
}

/**
 * ArticleExpanded Component
 *
 * Renders an expanded article view using Radix UI Dialog with FLIP animations.
 * Provides accessible, full-width article reading experience with:
 * - FLIP-based expansion/collapse animations (GPU-accelerated)
 * - Blurred background overlay
 * - Category-colored gradient header
 * - Focus trapping and keyboard navigation
 * - Mobile full-screen mode
 *
 * @param article - Article data to display
 * @param isOpen - Whether dialog is currently open
 * @param onClose - Callback when dialog closes
 * @param cardElement - Reference to article card for FLIP animation
 */
export default function ArticleExpanded({ article: initialArticle, allArticles, isOpen, onClose, cardElement }: ArticleExpandedProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [article, setArticle] = useState<CompiledArticle>(initialArticle);
  const [relatedArticles, setRelatedArticles] = useState<CompiledArticle[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Update article when initialArticle prop changes
  useEffect(() => {
    setArticle(initialArticle);
  }, [initialArticle]);

  // Load related articles when article changes
  useEffect(() => {
    if (article.related_articles && article.related_articles.length > 0) {
      // Convert related article slugs to full CompiledArticle objects
      const related = article.related_articles
        .map((slug) => allArticles.find((a) => a.slug === slug))
        .filter((a): a is CompiledArticle => a !== undefined); // Filter out undefined and narrow type

      setRelatedArticles(related);
    } else {
      setRelatedArticles([]);
    }
  }, [article, allArticles]);

  // FLIP animation effect for expansion
  useEffect(() => {
    if (isOpen && cardElement && contentRef.current) {
      // First: Capture card position before expansion
      const firstRect = cardElement.getBoundingClientRect();

      // Last: Content is now in DOM, capture expanded position
      const lastRect = contentRef.current.getBoundingClientRect();

      // Invert + Play: Animate expansion
      const flipData = calculateFLIP(
        { x: firstRect.x, y: firstRect.y, width: firstRect.width, height: firstRect.height },
        { x: lastRect.x, y: lastRect.y, width: lastRect.width, height: lastRect.height }
      );

      animateExpansion(contentRef.current, flipData, {
        duration: 250, // UX-6: 250ms expansion timing
        easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)', // Design system standard easing
      });
    }
  }, [isOpen, cardElement]);

  /**
   * Handle clicking related article with smooth crossfade transition
   *
   * Implements 300ms crossfade:
   * 1. Fade out current content (150ms)
   * 2. Load new article data
   * 3. Fade in new content (150ms)
   *
   * @param slug - Slug of related article to load
   */
  const handleRelatedArticleClick = useCallback(async (slug: string) => {
    if (isTransitioning) return; // Prevent rapid clicking

    setIsTransitioning(true);

    const bodyElement = contentRef.current?.querySelector('.article-body') as HTMLElement;

    // Phase 1: Fade out current content (150ms)
    if (bodyElement) {
      bodyElement.style.transition = 'opacity 150ms ease-out';
      bodyElement.style.opacity = '0';
    }

    // Announce to screen readers
    const newArticle = allArticles.find((a) => a.slug === slug);
    const liveRegion = contentRef.current?.querySelector('[aria-live="polite"]');
    if (liveRegion && newArticle) {
      liveRegion.textContent = `Loading related article: ${newArticle.title}`;
    }

    // Wait for fade-out to complete
    await new Promise((resolve) => setTimeout(resolve, 150));

    // Phase 2: Load new article from allArticles (already compiled with MDX)
    if (!newArticle) {
      setIsTransitioning(false);
      return;
    }

    // Update article state with new compiled article
    setArticle(newArticle);

    // Scroll to top of article content
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }

    // Phase 3: Fade in new content (150ms) - slight delay for DOM update
    requestAnimationFrame(() => {
      setTimeout(() => {
        if (bodyElement) {
          bodyElement.style.opacity = '1';
        }
        setIsTransitioning(false);

        // Update ARIA live region
        if (liveRegion) {
          liveRegion.textContent = `Navigated to article: ${newArticle.title}`;
        }
      }, 50);
    });
  }, [isTransitioning, allArticles]);

  /**
   * Handle dialog close with collapse animation and focus restoration
   *
   * Story 6.5: Enhanced to restore focus to article card after close (AC #2)
   */
  const handleClose = useCallback(() => {
    // Announce to screen readers
    const liveRegion = contentRef.current?.querySelector('[aria-live="polite"]');
    if (liveRegion) {
      liveRegion.textContent = 'Article closed, returned to grid';
    }

    if (contentRef.current && cardElement) {
      // Calculate FLIP for collapse
      const lastRect = contentRef.current.getBoundingClientRect();
      const firstRect = cardElement.getBoundingClientRect();

      const flipData = calculateFLIP(
        { x: firstRect.x, y: firstRect.y, width: firstRect.width, height: firstRect.height },
        { x: lastRect.x, y: lastRect.y, width: lastRect.width, height: lastRect.height }
      );

      animateCollapse(contentRef.current, flipData, {
        duration: 150, // UX-7: 150ms collapse timing (faster exit)
        easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
        onComplete: () => {
          onClose();
          // Restore focus to card after collapse animation (NFR-ACCESS-3)
          setTimeout(() => {
            if (cardElement) {
              cardElement.focus();
            }
          }, 50);
        },
      });
    } else {
      // No animation if references missing
      onClose();
      // Still restore focus
      setTimeout(() => {
        if (cardElement) {
          cardElement.focus();
        }
      }, 50);
    }
  }, [onClose, cardElement]);

  /**
   * Handle Arrow Left navigation (previous related article)
   *
   * Story 6.5: Navigate to previous article in related articles list (AC #3)
   * Wraps to last article if at beginning for continuous navigation
   */
  const handlePreviousArticle = useCallback(() => {
    if (isTransitioning || !relatedArticles || relatedArticles.length === 0) {
      return; // Edge case: no related articles or animation in progress
    }

    // Find current article index in related articles
    const currentIndex = relatedArticles.findIndex((related) => related.slug === article.slug);

    if (currentIndex === -1) {
      return; // Current article not in related list (shouldn't happen)
    }

    // Navigate to previous article (wrap to last if at beginning)
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : relatedArticles.length - 1;
    const prevArticleSlug = relatedArticles[prevIndex].slug;

    // Trigger transition
    handleRelatedArticleClick(prevArticleSlug);
  }, [isTransitioning, relatedArticles, article.slug, handleRelatedArticleClick]);

  /**
   * Handle Arrow Right navigation (next related article)
   *
   * Story 6.5: Navigate to next article in related articles list (AC #4)
   * Wraps to first article if at end for continuous navigation
   */
  const handleNextArticle = useCallback(() => {
    if (isTransitioning || !relatedArticles || relatedArticles.length === 0) {
      return; // Edge case: no related articles or animation in progress
    }

    // Find current article index in related articles
    const currentIndex = relatedArticles.findIndex((related) => related.slug === article.slug);

    if (currentIndex === -1) {
      return; // Current article not in related list (shouldn't happen)
    }

    // Navigate to next article (wrap to first if at end)
    const nextIndex = currentIndex < relatedArticles.length - 1 ? currentIndex + 1 : 0;
    const nextArticleSlug = relatedArticles[nextIndex].slug;

    // Trigger transition
    handleRelatedArticleClick(nextArticleSlug);
  }, [isTransitioning, relatedArticles, article.slug, handleRelatedArticleClick]);

  // Use keyboard navigation hook (Story 6.5: AC #1-#4)
  useKeyboardNavigation({
    isOpen,
    onEscape: handleClose,
    onArrowLeft: handlePreviousArticle,
    onArrowRight: handleNextArticle,
    enabled: true,
  });

  // Category slug for CSS variable mapping (with validation)
  // Validate category against VALID_CATEGORIES, fallback to 'governance' if invalid
  const isValidCategory = (VALID_CATEGORIES as readonly string[]).includes(article.category);
  const categorySlug = isValidCategory
    ? getCategorySlug(article.category)
    : 'governance'; // Fallback to governance if invalid category

  // Log warning in development if category is invalid
  if (!isValidCategory && process.env.NODE_ENV === 'development') {
    console.warn(`Invalid category "${article.category}" in article "${article.title}". Using fallback.`);
  }

  // Format publication date
  const formattedDate = new Date(article.date + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <Dialog.Portal>
        {/* Blurred background overlay */}
        <Dialog.Overlay className="article-overlay" />

        {/* Expanded article content */}
        <Dialog.Content
          ref={contentRef}
          className="article-expanded"
          aria-describedby={undefined} // Suppress warning if no description element
        >
          {/* Article header with blurred category gradient */}
          <header className="article-header" data-category={categorySlug}>
            <CategoryBadge category={article.category} />
            <h1 className="article-title">{article.title}</h1>
            <div className="article-meta">
              <span>{article.reading_time} min read</span>
              <span>•</span>
              <span>{formattedDate}</span>
            </div>
          </header>

          {/* Article body with summary-first structure and MDX content */}
          <div className="article-body" data-category={categorySlug}>
            {/* Summary-first structure */}
            {article.excerpt && (
              <div className="article-summary">
                <p>{article.excerpt}</p>
              </div>
            )}

            {/* MDX content with custom components */}
            <MDXRemote source={article.content} components={MDXComponents} />
          </div>

          {/* Related articles section - positioned after article content, before footer */}
          <RelatedArticles
            relatedArticles={relatedArticles}
            onArticleClick={handleRelatedArticleClick}
          />

          {/* ARIA live region for screen reader announcements */}
          <div
            className="sr-only"
            aria-live="polite"
            aria-atomic="true"
          />

          {/* Close button - 44x44px for WCAG touch target compliance */}
          <button
            className="article-close"
            data-category={categorySlug}
            onClick={handleClose}
            aria-label="Close article"
            type="button"
          >
            ←
          </button>

          {/* Arrow navigation buttons (bottom-right) - Story 6.6 */}
          {relatedArticles.length > 0 && (
            <div className="article-nav-buttons" data-category={categorySlug}>
              <button
                className="article-nav-button article-nav-prev"
                data-category={categorySlug}
                onClick={handlePreviousArticle}
                disabled={isTransitioning}
                aria-label="Previous article"
                type="button"
              >
                ◄
              </button>
              <button
                className="article-nav-button article-nav-next"
                data-category={categorySlug}
                onClick={handleNextArticle}
                disabled={isTransitioning}
                aria-label="Next article"
                type="button"
              >
                ►
              </button>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
