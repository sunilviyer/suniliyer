import { useEffect, useCallback } from 'react';

/**
 * Props for useKeyboardNavigation hook
 */
interface UseKeyboardNavigationProps {
  /** Whether the dialog/modal is currently open */
  isOpen: boolean;
  /** Callback when Escape key is pressed */
  onEscape: () => void;
  /** Callback when Arrow Left key is pressed */
  onArrowLeft: () => void;
  /** Callback when Arrow Right key is pressed */
  onArrowRight: () => void;
  /** Whether keyboard navigation is enabled (default: true) */
  enabled?: boolean;
}

/**
 * Custom hook for keyboard navigation in expanded articles
 *
 * Provides keyboard shortcuts for article navigation:
 * - Escape: Close article
 * - Arrow Left: Navigate to previous related article
 * - Arrow Right: Navigate to next related article
 *
 * Implements <16ms response time using requestAnimationFrame per NFR-PERF-4
 *
 * @param props - Hook configuration
 */
export function useKeyboardNavigation({
  isOpen,
  onEscape,
  onArrowLeft,
  onArrowRight,
  enabled = true,
}: UseKeyboardNavigationProps) {

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // Only handle keyboard events when enabled and dialog is open
    if (!enabled || !isOpen) return;

    // Prevent handling if user is typing in input field
    const target = event.target as HTMLElement;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
      return;
    }

    // Use requestAnimationFrame for smooth, sub-16ms response (NFR-PERF-4)
    requestAnimationFrame(() => {
      switch (event.key) {
        case 'Escape':
          event.preventDefault();
          onEscape();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          onArrowLeft();
          break;
        case 'ArrowRight':
          event.preventDefault();
          onArrowRight();
          break;
      }
    });
  }, [isOpen, enabled, onEscape, onArrowLeft, onArrowRight]);

  useEffect(() => {
    if (!enabled) return;

    // Add event listener to window for global keyboard capture
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup on unmount or when dependencies change
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [enabled, handleKeyDown]);
}
