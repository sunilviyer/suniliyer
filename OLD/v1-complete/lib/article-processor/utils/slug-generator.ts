/**
 * Slug Generator Utility
 * 
 * Generates URL-friendly slugs from article titles:
 * - Converts to lowercase kebab-case
 * - Removes special characters
 * - Ensures slugs are under 60 characters
 * - Handles edge cases and validation
 * 
 * Requirements: 2.3
 */

/**
 * Generate a URL-friendly slug from a title
 * @param title The article title to convert
 * @returns A kebab-case slug under 60 characters
 */
export function generateSlug(title: string): string {
  if (!title || typeof title !== 'string') {
    return 'untitled';
  }

  // Remove leading/trailing whitespace
  const cleanTitle = title.trim();
  
  if (cleanTitle.length === 0) {
    return 'untitled';
  }

  // Convert to lowercase and replace spaces and special characters with hyphens
  let slug = cleanTitle
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters except word chars, spaces, and hyphens
    .replace(/[\s_]+/g, '-')  // Replace spaces and underscores with hyphens
    .replace(/-+/g, '-')      // Replace multiple consecutive hyphens with single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading and trailing hyphens

  // Ensure slug is not empty after cleaning
  if (slug.length === 0) {
    slug = 'untitled';
  }

  // Truncate to 60 characters while preserving word boundaries
  if (slug.length > 60) {
    slug = truncateAtWordBoundary(slug, 60);
  }

  // Ensure slug doesn't end with a hyphen after truncation
  slug = slug.replace(/-+$/, '');

  // Final validation - ensure we have a valid slug
  if (slug.length === 0) {
    slug = 'article';
  }

  return slug;
}

/**
 * Truncate a slug at word boundary to stay under the character limit
 * @param slug The slug to truncate
 * @param maxLength Maximum length allowed
 * @returns Truncated slug
 */
function truncateAtWordBoundary(slug: string, maxLength: number): string {
  if (slug.length <= maxLength) {
    return slug;
  }

  // Find the last hyphen before the max length
  const truncated = slug.substring(0, maxLength);
  const lastHyphen = truncated.lastIndexOf('-');

  // If we found a hyphen and it's not too close to the beginning, truncate there
  if (lastHyphen > maxLength * 0.7) {
    return truncated.substring(0, lastHyphen);
  }

  // Otherwise, just truncate at the max length
  return truncated;
}

/**
 * Validate that a slug meets requirements
 * @param slug The slug to validate
 * @returns Validation result with details
 */
export function validateSlug(slug: string): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  // Check if slug exists
  if (!slug || typeof slug !== 'string') {
    errors.push('Slug must be a non-empty string');
    return { isValid: false, errors };
  }

  // Check length
  if (slug.length === 0) {
    errors.push('Slug cannot be empty');
  } else if (slug.length > 60) {
    errors.push('Slug must be 60 characters or less');
  }

  // Check format (lowercase kebab-case)
  if (!/^[a-z0-9-]+$/.test(slug)) {
    errors.push('Slug must contain only lowercase letters, numbers, and hyphens');
  }

  // Check for leading/trailing hyphens
  if (slug.startsWith('-') || slug.endsWith('-')) {
    errors.push('Slug cannot start or end with hyphens');
  }

  // Check for consecutive hyphens
  if (slug.includes('--')) {
    errors.push('Slug cannot contain consecutive hyphens');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Check if a slug is valid according to requirements
 * @param slug The slug to validate
 * @returns True if the slug is valid
 */
export function isValidSlug(slug: string): boolean {
  const validation = validateSlug(slug);
  return validation.isValid;
}

/**
 * Sanitize an invalid slug to make it valid
 * @param slug The slug to sanitize
 * @returns A valid slug
 */
export function sanitizeSlug(slug: string): string {
  if (!slug || typeof slug !== 'string') {
    return 'untitled';
  }

  // If already valid, return as-is
  if (isValidSlug(slug)) {
    return slug;
  }

  // Apply the same transformation as generateSlug
  try {
    return generateSlug(slug);
  } catch (error) {
    return 'untitled';
  }
}

/**
 * Generate a unique slug by appending a number if needed
 * @param title The article title
 * @param existingSlugs Array of existing slugs to avoid conflicts
 * @returns A unique slug
 */
export function generateUniqueSlug(title: string, existingSlugs: string[]): string {
  const baseSlug = generateSlug(title);
  
  if (!existingSlugs.includes(baseSlug)) {
    return baseSlug;
  }

  // Find a unique variant by appending numbers
  let counter = 2;
  let uniqueSlug = `${baseSlug}-${counter}`;

  while (existingSlugs.includes(uniqueSlug)) {
    counter++;
    uniqueSlug = `${baseSlug}-${counter}`;
    
    // Prevent infinite loops
    if (counter > 1000) {
      throw new Error('Unable to generate unique slug after 1000 attempts');
    }
  }

  return uniqueSlug;
}