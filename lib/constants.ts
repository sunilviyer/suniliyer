/**
 * AIDefence Application Constants
 * Story: 2.4 - Implement Smart Badge Contrast Logic
 */

/**
 * Valid Article Categories (11 total)
 *
 * These categories are used throughout the application for article classification.
 * Category values must be in Title Case and match exactly.
 *
 * CSS custom properties use kebab-case slugs:
 * "AI Fundamentals" → --color-cat-ai-fundamentals
 */
export const VALID_CATEGORIES = [
  'AI Fundamentals',
  'Risks & Principles',
  'Legal Frameworks',
  'AI Laws',
  'Risk Frameworks',
  'Development Lifecycle',
  'Governance',
  'Auditing & Assessment',
  'Industry Perspectives',
  'Explainability',
  'Videos',
] as const;

/**
 * Category type derived from VALID_CATEGORIES array
 * Ensures type safety when using category values
 */
export type Category = typeof VALID_CATEGORIES[number];

/**
 * Converts a category name to its CSS custom property slug
 *
 * @param category - Category name in Title Case
 * @returns kebab-case slug for CSS custom property
 *
 * @example
 * getCategorySlug('AI Fundamentals') // 'ai-fundamentals'
 * getCategorySlug('Risks & Principles') // 'risks-principles'
 */
export function getCategorySlug(category: string): string {
  return category
    .toLowerCase()
    .replace(/\s+&\s+/g, '-') // "Risks & Principles" → "risks-principles"
    .replace(/\s+/g, '-');     // "AI Fundamentals" → "ai-fundamentals"
}

/**
 * Determines the appropriate text color for a category badge
 * based on the background color luminance.
 *
 * Target: 7:1 contrast ratio (WCAG AAA)
 *
 * @param category - Category name in Title Case
 * @returns Text color hex code ('#F5F5DC' for light text, '#333d29' for dark text)
 *
 * Dark badges (low luminance) → Light text (#F5F5DC):
 * - Risks & Principles (Dark Walnut #654321)
 * - Legal Frameworks (Saddle Brown #8B4513)
 * - AI Fundamentals (Toffee Brown #A67C52)
 *
 * Light badges (high luminance) → Dark text (#333d29):
 * - AI Laws (Camel #C19A6B)
 * - Risk Frameworks (Dry Sage #9FA99F)
 * - Development Lifecycle (Khaki Beige #C3B091)
 * - Governance (Tan #D2B48C)
 *
 * Medium badges (evaluated individually) → Based on luminance:
 * - Auditing & Assessment (Sage Green #8A9A5B) → Light text
 * - Industry Perspectives (Moss Green #698B69) → Light text
 * - Explainability (Forest Green #6B8E23) → Light text
 * - Videos (Olive Green #6B7A3C) → Light text
 */
export function getBadgeTextColor(category: string): string {
  // Dark badges: Need light text for contrast
  const darkBadges = [
    'Risks & Principles',
    'Legal Frameworks',
    'AI Fundamentals',
    'Auditing & Assessment',
    'Industry Perspectives',
    'Explainability',
    'Videos',
  ];

  // Light badges: Need dark text for contrast
  const lightBadges = [
    'AI Laws',
    'Risk Frameworks',
    'Development Lifecycle',
    'Governance',
  ];

  if (darkBadges.includes(category)) {
    return '#F5F5DC'; // Beige Ivory (light text)
  }

  if (lightBadges.includes(category)) {
    return '#333d29'; // Charcoal Brown (dark text)
  }

  // Default to light text for safety
  return '#F5F5DC';
}
