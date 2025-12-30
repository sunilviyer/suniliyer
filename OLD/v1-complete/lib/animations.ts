/**
 * FLIP Animation Utilities
 *
 * FLIP (First, Last, Invert, Play) is a performance technique for smooth animations.
 * It creates 60fps animations by using GPU-accelerated transform and opacity properties
 * instead of layout-triggering properties like width, height, top, or left.
 *
 * How FLIP works:
 * 1. First: Measure element in initial state (getBoundingClientRect)
 * 2. Last: Move element to final state, measure again
 * 3. Invert: Calculate transform to make it appear at First position
 * 4. Play: Animate from inverted state to final state (transform: none)
 *
 * Why GPU-accelerated properties?
 * - transform and opacity are handled by GPU compositor
 * - No layout recalculation needed = 60fps on all devices
 * - width/height/top/left trigger expensive layout calculations
 *
 * @see https://aerotwist.com/blog/flip-your-animations/
 */

/**
 * Position and size of an element (from getBoundingClientRect)
 */
export interface Position {
  x: number;
  y: number;
  width: number;
  height: number;
}

/**
 * FLIP transformation data between two element states
 */
export interface FLIPData {
  deltaX: number; // Horizontal position difference
  deltaY: number; // Vertical position difference
  deltaWidth: number; // Width difference
  deltaHeight: number; // Height difference
  scaleX: number; // Width scale ratio
  scaleY: number; // Height scale ratio
}

/**
 * Animation configuration options
 */
export interface AnimationOptions {
  duration: number; // Animation duration in milliseconds
  easing: string; // CSS easing function (e.g., 'cubic-bezier(0.4, 0.0, 0.2, 1)')
  onComplete?: () => void; // Callback when animation finishes
}

/**
 * Calculate FLIP transformation data between two element states.
 *
 * FLIP (First, Last, Invert, Play) technique for performant animations:
 * 1. First: Measure element in initial state
 * 2. Last: Measure element in final state
 * 3. Invert: Calculate transform to make Last appear as First
 * 4. Play: Animate from inverted to final state
 *
 * This function handles step 3 (Invert) by calculating the differences
 * between First and Last positions/sizes.
 *
 * @param first - Initial position/size (from getBoundingClientRect)
 * @param last - Final position/size (from getBoundingClientRect)
 * @returns FLIP transformation data for animation
 *
 * @example
 * ```typescript
 * const first = element.getBoundingClientRect();
 * // ... move element to final position ...
 * const last = element.getBoundingClientRect();
 * const flipData = calculateFLIP(first, last);
 * ```
 */
export function calculateFLIP(first: Position, last: Position): FLIPData {
  return {
    deltaX: first.x - last.x,
    deltaY: first.y - last.y,
    deltaWidth: first.width - last.width,
    deltaHeight: first.height - last.height,
    scaleX: last.width === 0 ? 1 : first.width / last.width,
    scaleY: last.height === 0 ? 1 : first.height / last.height,
  };
}

/**
 * Animate element expansion using FLIP technique.
 *
 * Uses GPU-accelerated transform and opacity for 60fps performance.
 * Respects prefers-reduced-motion user preference for accessibility.
 *
 * Performance characteristics:
 * - Targets 60fps (16ms frame budget)
 * - GPU-accelerated (transform, opacity)
 * - No layout thrashing (batched DOM reads/writes)
 *
 * Accessibility:
 * - Checks prefers-reduced-motion media query
 * - Skips animation if user prefers reduced motion
 * - Snaps directly to final state instead
 *
 * @param element - DOM element to animate
 * @param flipData - FLIP transformation data from calculateFLIP()
 * @param options - Animation configuration (duration, easing, callback)
 *
 * @example
 * ```typescript
 * const first = card.getBoundingClientRect();
 * card.classList.add('expanded');
 * const last = card.getBoundingClientRect();
 * const flipData = calculateFLIP(first, last);
 *
 * animateExpansion(card, flipData, {
 *   duration: 250,
 *   easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
 *   onComplete: () => console.log('Expansion complete!'),
 * });
 * ```
 */
export function animateExpansion(
  element: HTMLElement,
  flipData: FLIPData,
  options: AnimationOptions = {
    duration: 250,
    easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  }
): void {
  // Check for prefers-reduced-motion (accessibility)
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion) {
    // Skip animation, snap to final state immediately
    element.style.transform = '';
    element.style.opacity = '1';
    options.onComplete?.();
    return;
  }

  // INVERT: Apply transform to make element appear at First position
  // This happens instantly, so user doesn't see the jump to Last position
  element.style.transform = `
    translate(${flipData.deltaX}px, ${flipData.deltaY}px)
    scale(${flipData.scaleX}, ${flipData.scaleY})
  `;
  element.style.opacity = '0';

  // PLAY: Animate to final state using requestAnimationFrame
  // This ensures animation runs at optimal timing (next frame)
  requestAnimationFrame(() => {
    // Enable CSS transitions
    element.style.transition = `
      transform ${options.duration}ms ${options.easing},
      opacity ${options.duration}ms ${options.easing}
    `;

    // Remove transforms to animate to final state
    element.style.transform = '';
    element.style.opacity = '1';

    // Clean up after animation completes
    setTimeout(() => {
      element.style.transition = '';
      options.onComplete?.();
    }, options.duration);
  });
}

/**
 * Animate element collapse using FLIP technique (reverse).
 *
 * Faster exit (150ms default) creates responsive feel per UX guidelines.
 * Uses same GPU-accelerated approach as expansion.
 *
 * @param element - DOM element to animate
 * @param flipData - FLIP transformation data from calculateFLIP()
 * @param options - Animation configuration (duration, easing, callback)
 *
 * @example
 * ```typescript
 * const first = expanded.getBoundingClientRect();
 * expanded.classList.remove('expanded');
 * const last = expanded.getBoundingClientRect();
 * const flipData = calculateFLIP(first, last);
 *
 * animateCollapse(expanded, flipData, {
 *   duration: 150,
 *   easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
 *   onComplete: () => console.log('Collapse complete!'),
 * });
 * ```
 */
export function animateCollapse(
  element: HTMLElement,
  flipData: FLIPData,
  options: AnimationOptions = {
    duration: 150,
    easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  }
): void {
  // Check for prefers-reduced-motion (accessibility)
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion) {
    // Skip animation, snap to final state immediately
    element.style.transform = `
      translate(${flipData.deltaX}px, ${flipData.deltaY}px)
      scale(${flipData.scaleX}, ${flipData.scaleY})
    `;
    element.style.opacity = '0';
    options.onComplete?.();
    return;
  }

  // Animate from current state to collapsed state
  // Element is already at "Last" position, we animate TO "First" position
  element.style.transition = `
    transform ${options.duration}ms ${options.easing},
    opacity ${options.duration}ms ${options.easing}
  `;

  // Apply inverted transform and fade out
  element.style.transform = `
    translate(${flipData.deltaX}px, ${flipData.deltaY}px)
    scale(${flipData.scaleX}, ${flipData.scaleY})
  `;
  element.style.opacity = '0';

  // Clean up after animation completes
  setTimeout(() => {
    element.style.transition = '';
    element.style.transform = '';
    options.onComplete?.();
  }, options.duration);
}
