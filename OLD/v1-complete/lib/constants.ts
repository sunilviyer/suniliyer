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
 * Category background colors (from app/globals.css)
 * Used for luminance calculation to determine text color
 */
const CATEGORY_COLORS: Record<string, string> = {
  'AI Fundamentals': '#A67C52',
  'Risks & Principles': '#654321',
  'Legal Frameworks': '#8B4513',
  'AI Laws': '#C19A6B',
  'Risk Frameworks': '#9FA99F',
  'Development Lifecycle': '#C3B091',
  'Governance': '#D2B48C',
  'Auditing & Assessment': '#8A9A5B',
  'Industry Perspectives': '#414833',
  'Explainability': '#6B8E23',
  'Videos': '#6B7A3C',
};

/**
 * Calculates relative luminance of a color using WCAG formula
 *
 * @param hex - Hex color code (e.g., '#A67C52')
 * @returns Relative luminance (0-1 range)
 *
 * Formula from WCAG 2.1:
 * https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
 */
function getLuminance(hex: string): number {
  // Remove # if present
  const color = hex.replace('#', '');

  // Parse RGB values
  const r = parseInt(color.substring(0, 2), 16) / 255;
  const g = parseInt(color.substring(2, 4), 16) / 255;
  const b = parseInt(color.substring(4, 6), 16) / 255;

  // Apply gamma correction
  const rLinear = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
  const gLinear = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
  const bLinear = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);

  // Calculate luminance
  return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
}

/**
 * Calculates contrast ratio between two colors
 *
 * @param color1 - First color hex code
 * @param color2 - Second color hex code
 * @returns Contrast ratio (1-21 range)
 */
function getContrastRatio(color1: string, color2: string): number {
  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Determines the appropriate text color for a category badge
 * based on the background color luminance.
 *
 * Uses WCAG 2.1 luminance calculation to ensure minimum 4.5:1 contrast ratio
 * for WCAG AA compliance. Tests both white and black text colors and returns
 * whichever provides the highest contrast ratio.
 *
 * @param category - Category name in Title Case
 * @returns Text color hex code ('#FFFFFF' for white text, '#000000' for black text)
 *
 * Algorithm:
 * 1. Calculate contrast ratio with white text
 * 2. Calculate contrast ratio with black text
 * 3. Return the color with higher contrast ratio
 *
 * This ensures:
 * - WCAG AA compliance (4.5:1 minimum for normal text)
 * - Maximum possible contrast for each background color
 * - Excellent readability on all category backgrounds
 */
export function getBadgeTextColor(category: string): string {
  const backgroundColor = CATEGORY_COLORS[category];

  if (!backgroundColor) {
    // Default to white text for unknown categories
    console.warn(`Unknown category: ${category}. Using white text.`);
    return '#FFFFFF';
  }

  // Calculate contrast ratio with white text
  const whiteContrast = getContrastRatio(backgroundColor, '#FFFFFF');

  // Calculate contrast ratio with black text
  const blackContrast = getContrastRatio(backgroundColor, '#000000');

  // Return the color with higher contrast ratio
  return whiteContrast > blackContrast ? '#FFFFFF' : '#000000';
}
