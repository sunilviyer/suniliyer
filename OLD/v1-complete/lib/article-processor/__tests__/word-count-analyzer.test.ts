/**
 * Word Count Analyzer Tests
 * Tests for word count analysis functionality
 */

import {
  analyzeWordCount,
  extractTargetWordCount,
  getWordCountDescription,
  calculatePercentageDifference
} from '../validators/word-count-analyzer';

describe('Word Count Analyzer', () => {
  describe('analyzeWordCount', () => {
    it('should return within_range when word count is within tolerance', () => {
      const result = analyzeWordCount(1000, 1000);
      expect(result.status).toBe('within_range');
      expect(result.actual).toBe(1000);
      expect(result.target).toBe(1000);
    });

    it('should return within_range when slightly under target (within 10%)', () => {
      const result = analyzeWordCount(950, 1000);
      expect(result.status).toBe('within_range');
    });

    it('should return within_range when slightly over target (within 10%)', () => {
      const result = analyzeWordCount(1050, 1000);
      expect(result.status).toBe('within_range');
    });

    it('should return under when significantly below target', () => {
      const result = analyzeWordCount(800, 1000);
      expect(result.status).toBe('under');
    });

    it('should return over when significantly above target', () => {
      const result = analyzeWordCount(1200, 1000);
      expect(result.status).toBe('over');
    });

    it('should handle null target by checking minimum word count', () => {
      const result = analyzeWordCount(600, null);
      expect(result.target).toBe(null);
      expect(result.status).toBe('within_range'); // 600 > 500 minimum
    });

    it('should return under for null target when below minimum', () => {
      const result = analyzeWordCount(400, null);
      expect(result.status).toBe('under');
    });

    it('should handle undefined target', () => {
      const result = analyzeWordCount(600);
      expect(result.target).toBe(null);
      expect(result.status).toBe('within_range');
    });

    it('should calculate tolerance correctly for different targets', () => {
      // Target 2000, tolerance 10% = 200, range is 1800-2200
      const result1 = analyzeWordCount(1750, 2000);
      expect(result1.status).toBe('under'); // 1750 < 1800 (lower bound)

      const result2 = analyzeWordCount(1900, 2000);
      expect(result2.status).toBe('within_range'); // 1800-2200 range

      const result3 = analyzeWordCount(2250, 2000);
      expect(result3.status).toBe('over'); // 2250 > 2200 (upper bound)
    });
  });

  describe('extractTargetWordCount', () => {
    it('should extract target_word_count field', () => {
      const frontmatter = { target_word_count: 1500 };
      expect(extractTargetWordCount(frontmatter)).toBe(1500);
    });

    it('should extract targetWordCount field (camelCase)', () => {
      const frontmatter = { targetWordCount: 1500 };
      expect(extractTargetWordCount(frontmatter)).toBe(1500);
    });

    it('should extract word_count field', () => {
      const frontmatter = { word_count: 1500 };
      expect(extractTargetWordCount(frontmatter)).toBe(1500);
    });

    it('should extract wordCount field', () => {
      const frontmatter = { wordCount: 1500 };
      expect(extractTargetWordCount(frontmatter)).toBe(1500);
    });

    it('should parse string values', () => {
      const frontmatter = { target_word_count: '1500' };
      expect(extractTargetWordCount(frontmatter)).toBe(1500);
    });

    it('should return null for missing field', () => {
      const frontmatter = { title: 'Article' };
      expect(extractTargetWordCount(frontmatter)).toBe(null);
    });

    it('should return null for invalid values', () => {
      expect(extractTargetWordCount({ target_word_count: 'invalid' })).toBe(null);
      expect(extractTargetWordCount({ target_word_count: -100 })).toBe(null);
      expect(extractTargetWordCount({ target_word_count: 0 })).toBe(null);
    });

    it('should prioritize target_word_count over other fields', () => {
      const frontmatter = {
        target_word_count: 1500,
        word_count: 2000
      };
      expect(extractTargetWordCount(frontmatter)).toBe(1500);
    });
  });

  describe('getWordCountDescription', () => {
    it('should describe within_range status with target', () => {
      const analysis = { target: 1000, actual: 1000, status: 'within_range' as const };
      const description = getWordCountDescription(analysis);
      expect(description).toContain('1000 words');
      expect(description).toContain('within 10%');
      expect(description).toContain('target');
    });

    it('should describe under status', () => {
      const analysis = { target: 1000, actual: 800, status: 'under' as const };
      const description = getWordCountDescription(analysis);
      expect(description).toContain('800 words');
      expect(description).toContain('200 words');
      expect(description).toContain('under');
    });

    it('should describe over status', () => {
      const analysis = { target: 1000, actual: 1300, status: 'over' as const };
      const description = getWordCountDescription(analysis);
      expect(description).toContain('1300 words');
      expect(description).toContain('300 words');
      expect(description).toContain('over');
    });

    it('should describe null target with sufficient words', () => {
      const analysis = { target: null, actual: 600, status: 'within_range' as const };
      const description = getWordCountDescription(analysis);
      expect(description).toContain('600 words');
      expect(description).toContain('no target specified');
    });

    it('should describe null target with insufficient words', () => {
      const analysis = { target: null, actual: 400, status: 'under' as const };
      const description = getWordCountDescription(analysis);
      expect(description).toContain('400 words');
      expect(description).toContain('below the minimum');
    });
  });

  describe('calculatePercentageDifference', () => {
    it('should calculate positive percentage when over', () => {
      expect(calculatePercentageDifference(1100, 1000)).toBe(10);
    });

    it('should calculate negative percentage when under', () => {
      expect(calculatePercentageDifference(900, 1000)).toBe(-10);
    });

    it('should return 0 when equal', () => {
      expect(calculatePercentageDifference(1000, 1000)).toBe(0);
    });

    it('should handle zero target', () => {
      expect(calculatePercentageDifference(100, 0)).toBe(0);
    });

    it('should round to nearest integer', () => {
      expect(calculatePercentageDifference(1055, 1000)).toBe(6); // 5.5% rounds to 6
      expect(calculatePercentageDifference(1054, 1000)).toBe(5); // 5.4% rounds to 5
    });
  });
});
