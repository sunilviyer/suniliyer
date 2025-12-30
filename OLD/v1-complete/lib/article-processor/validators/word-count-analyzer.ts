/**
 * Word Count Analyzer
 * Analyzes word count and compares against target word counts
 * Requirements: 2.5
 */

import { WORD_COUNT } from '../utils/constants';

export interface WordCountAnalysis {
  target: number | null;
  actual: number;
  status: 'within_range' | 'under' | 'over';
}

/**
 * Analyzes word count and compares against target
 * @param actualWordCount Actual word count from the article
 * @param targetWordCount Target word count (optional)
 * @returns Word count analysis with status
 */
export function analyzeWordCount(
  actualWordCount: number,
  targetWordCount?: number | null
): WordCountAnalysis {
  const target = targetWordCount ?? null;
  const actual = actualWordCount;
  
  // If no target is specified, status is based on minimum article length
  if (target === null) {
    const status = actual >= WORD_COUNT.MIN_WORDS_FOR_ARTICLE ? 'within_range' : 'under';
    return { target, actual, status };
  }

  // Calculate tolerance range
  const tolerance = target * (WORD_COUNT.TOLERANCE_PERCENTAGE / 100);
  const lowerBound = target - tolerance;
  const upperBound = target + tolerance;

  // Determine status based on tolerance
  let status: 'within_range' | 'under' | 'over';
  
  if (actual < lowerBound) {
    status = 'under';
  } else if (actual > upperBound) {
    status = 'over';
  } else {
    status = 'within_range';
  }

  return { target, actual, status };
}

/**
 * Extracts target word count from frontmatter
 * @param frontmatter Article frontmatter object
 * @returns Target word count or null if not specified
 */
export function extractTargetWordCount(frontmatter: Record<string, any>): number | null {
  // Check various possible field names
  const possibleFields = [
    'target_word_count',
    'targetWordCount',
    'word_count',
    'wordCount',
    'target_words',
    'targetWords'
  ];

  for (const field of possibleFields) {
    const value = frontmatter[field];
    
    if (typeof value === 'number' && value > 0) {
      return value;
    }
    
    if (typeof value === 'string') {
      const parsed = parseInt(value, 10);
      if (!isNaN(parsed) && parsed > 0) {
        return parsed;
      }
    }
  }

  return null;
}

/**
 * Gets a human-readable description of the word count status
 * @param analysis Word count analysis result
 * @returns Description string
 */
export function getWordCountDescription(analysis: WordCountAnalysis): string {
  const { target, actual, status } = analysis;

  if (target === null) {
    if (status === 'under') {
      return `Article has ${actual} words, which is below the minimum recommended length of ${WORD_COUNT.MIN_WORDS_FOR_ARTICLE} words.`;
    }
    return `Article has ${actual} words (no target specified).`;
  }

  const difference = Math.abs(actual - target);
  const percentage = Math.round((difference / target) * 100);

  switch (status) {
    case 'within_range':
      return `Article has ${actual} words, which is within ${WORD_COUNT.TOLERANCE_PERCENTAGE}% of the target (${target} words).`;
    case 'under':
      return `Article has ${actual} words, which is ${difference} words (${percentage}%) under the target of ${target} words.`;
    case 'over':
      return `Article has ${actual} words, which is ${difference} words (${percentage}%) over the target of ${target} words.`;
  }
}

/**
 * Calculates the percentage difference from target
 * @param actual Actual word count
 * @param target Target word count
 * @returns Percentage difference (positive if over, negative if under)
 */
export function calculatePercentageDifference(actual: number, target: number): number {
  if (target === 0) {
    return 0;
  }
  return Math.round(((actual - target) / target) * 100);
}
