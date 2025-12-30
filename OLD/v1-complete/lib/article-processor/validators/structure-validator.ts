/**
 * Structure Validator
 * Validates article structure including H1 presence, sections, and header hierarchy
 * Requirements: 1.2, 1.3
 */

import { StructureValidation, SectionValidation } from '../types';
import { VALIDATION_PATTERNS } from '../utils/constants';

/**
 * Validates the complete structure of an article
 * @param content Markdown content to validate
 * @returns Structure validation results
 */
export function validateStructure(content: string): StructureValidation {
  const has_h1 = hasH1Title(content);
  const sections = hasRequiredSections(content);
  const header_depth_valid = validateHeaderDepth(content);

  return {
    has_h1,
    has_intro: sections.has_intro,
    has_conclusion: sections.has_conclusion,
    header_depth_valid
  };
}

/**
 * Checks if the content has an H1 title
 * @param content Markdown content
 * @returns True if H1 title is present
 */
export function hasH1Title(content: string): boolean {
  return VALIDATION_PATTERNS.H1_HEADER.test(content);
}

/**
 * Checks for required sections (introduction and conclusion)
 * @param content Markdown content
 * @returns Section validation results
 */
export function hasRequiredSections(content: string): SectionValidation {
  // Split content into sections by headers
  const lines = content.split('\n');
  
  // Look for introduction indicators in the first few paragraphs after H1
  const has_intro = hasIntroductionSection(content);
  
  // Look for conclusion indicators in the last few sections
  const has_conclusion = hasConclusionSection(content);
  
  // Check if there's substantial main content between intro and conclusion
  const has_main_content = hasMainContent(content);

  return {
    has_intro,
    has_conclusion,
    has_main_content
  };
}

/**
 * Checks if the article has an introduction section
 * Introduction is identified by:
 * - Being in the first 30% of the document
 * - Having substantial content after H1 but before first H2
 * - Or having explicit "Introduction" header
 */
function hasIntroductionSection(content: string): boolean {
  // Check for explicit introduction header
  const introHeaderPattern = /^##?\s+(Introduction|Overview|About|Background)/im;
  if (introHeaderPattern.test(content)) {
    return true;
  }

  // Check for content between H1 and first H2
  const h1Match = content.match(VALIDATION_PATTERNS.H1_HEADER);
  if (!h1Match) {
    return false;
  }

  const h1Index = content.indexOf(h1Match[0]);
  
  // Find first H2 using a non-global regex
  const h2Pattern = /^##\s+(.+)$/m;
  const h2Match = content.substring(h1Index + h1Match[0].length).match(h2Pattern);
  
  if (h2Match) {
    const firstH2Index = h1Index + h1Match[0].length + content.substring(h1Index + h1Match[0].length).indexOf(h2Match[0]);
    const introParagraph = content.substring(h1Index + h1Match[0].length, firstH2Index).trim();
    
    // Consider it an intro if there's at least 40 words before the first H2
    const wordCount = introParagraph.split(/\s+/).filter(w => w.length > 0).length;
    return wordCount >= 40;
  }

  // If no H2, check if there's substantial content after H1
  const contentAfterH1 = content.substring(h1Index + h1Match[0].length).trim();
  const wordCount = contentAfterH1.split(/\s+/).filter(w => w.length > 0).length;
  return wordCount >= 100;
}

/**
 * Checks if the article has a conclusion section
 * Conclusion is identified by:
 * - Having explicit conclusion-related headers
 * - Or being in the last 20% of the document with substantial content
 */
function hasConclusionSection(content: string): boolean {
  // Check for explicit conclusion headers
  const conclusionHeaderPattern = /^##?\s+(Conclusion|Summary|Final Thoughts|Takeaways|Key Points|Wrap[- ]?Up|Looking Ahead|Next Steps)/im;
  return conclusionHeaderPattern.test(content);
}

/**
 * Checks if the article has substantial main content
 * Main content should be at least 200 words
 */
function hasMainContent(content: string): boolean {
  // Remove code blocks and count words
  let cleanContent = content.replace(/```[\s\S]*?```/g, '');
  const wordCount = cleanContent.split(/\s+/).filter(w => w.length > 0).length;
  return wordCount >= 200;
}

/**
 * Validates header depth hierarchy (H1 -> H2 -> H3, etc.)
 * Ensures headers don't skip levels (e.g., H1 -> H3 without H2)
 * @param content Markdown content
 * @returns True if header hierarchy is valid
 */
export function validateHeaderDepth(content: string): boolean {
  // Extract all headers with their levels
  const headerPattern = /^(#{1,6})\s+(.+)$/gm;
  const headers: number[] = [];
  
  let match;
  while ((match = headerPattern.exec(content)) !== null) {
    const level = match[1].length;
    headers.push(level);
  }

  // If no headers, it's technically valid (no hierarchy to violate)
  if (headers.length === 0) {
    return true;
  }

  // If only one header, it's valid
  if (headers.length === 1) {
    return true;
  }

  // Check that we start with H1
  if (headers[0] !== 1) {
    return false;
  }

  // Check that each subsequent header doesn't skip more than one level
  for (let i = 1; i < headers.length; i++) {
    const currentLevel = headers[i];
    const previousLevel = headers[i - 1];
    
    // Headers can go deeper by 1, stay same, or go back to any previous level
    // But they cannot skip levels when going deeper
    if (currentLevel > previousLevel + 1) {
      return false;
    }
  }

  return true;
}

/**
 * Gets detailed validation issues for debugging
 * @param content Markdown content
 * @returns Array of validation issue descriptions
 */
export function getValidationIssues(content: string): string[] {
  const issues: string[] = [];
  const validation = validateStructure(content);

  if (!validation.has_h1) {
    issues.push('Missing H1 title');
  }

  if (!validation.has_intro) {
    issues.push('Missing introduction section');
  }

  if (!validation.has_conclusion) {
    issues.push('Missing conclusion section');
  }

  if (!validation.header_depth_valid) {
    issues.push('Invalid header hierarchy - headers skip levels');
  }

  return issues;
}
