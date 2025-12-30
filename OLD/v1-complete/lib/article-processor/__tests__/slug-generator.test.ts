/**
 * Slug Generator Tests
 * Tests for URL-friendly slug generation
 */

import {
  generateSlug,
  isValidSlug,
  sanitizeSlug
} from '../utils/slug-generator';

describe('Slug Generator', () => {
  describe('generateSlug', () => {
    it('should convert title to lowercase kebab-case', () => {
      const title = 'Understanding Neural Networks';
      const slug = generateSlug(title);
      
      expect(slug).toBe('understanding-neural-networks');
    });

    it('should replace spaces with hyphens', () => {
      const title = 'AI Risk Management Framework';
      const slug = generateSlug(title);
      
      expect(slug).toBe('ai-risk-management-framework');
    });

    it('should remove special characters', () => {
      const title = 'AI & Machine Learning: A Guide!';
      const slug = generateSlug(title);
      
      expect(slug).toBe('ai-machine-learning-a-guide');
    });

    it('should handle multiple consecutive spaces', () => {
      const title = 'AI    Governance    Guide';
      const slug = generateSlug(title);
      
      expect(slug).toBe('ai-governance-guide');
    });

    it('should remove consecutive hyphens', () => {
      const title = 'AI -- Governance -- Guide';
      const slug = generateSlug(title);
      
      expect(slug).toBe('ai-governance-guide');
    });

    it('should trim leading and trailing hyphens', () => {
      const title = '- AI Governance -';
      const slug = generateSlug(title);
      
      expect(slug).toBe('ai-governance');
    });

    it('should handle underscores', () => {
      const title = 'AI_Governance_Guide';
      const slug = generateSlug(title);
      
      expect(slug).toBe('ai-governance-guide');
    });

    it('should truncate to 60 characters', () => {
      const title = 'This is a very long article title that exceeds sixty characters and needs to be truncated';
      const slug = generateSlug(title);
      
      expect(slug.length).toBeLessThanOrEqual(60);
    });

    it('should truncate at word boundary when possible', () => {
      const title = 'Understanding Artificial Intelligence Risk Management Frameworks and Standards';
      const slug = generateSlug(title);
      
      expect(slug.length).toBeLessThanOrEqual(60);
      expect(slug).not.toMatch(/-$/); // Should not end with hyphen
    });

    it('should handle empty string', () => {
      const slug = generateSlug('');
      
      expect(slug).toBe('untitled');
    });

    it('should handle whitespace-only string', () => {
      const slug = generateSlug('   ');
      
      expect(slug).toBe('untitled');
    });

    it('should handle string with only special characters', () => {
      const slug = generateSlug('!@#$%^&*()');
      
      expect(slug).toBe('untitled');
    });

    it('should preserve numbers', () => {
      const title = 'AI 101: Introduction to Machine Learning';
      const slug = generateSlug(title);
      
      expect(slug).toBe('ai-101-introduction-to-machine-learning');
    });

    it('should handle mixed case', () => {
      const title = 'The EU AI Act EXPLAINED';
      const slug = generateSlug(title);
      
      expect(slug).toBe('the-eu-ai-act-explained');
    });

    it('should handle parentheses', () => {
      const title = 'AI Governance (A Complete Guide)';
      const slug = generateSlug(title);
      
      expect(slug).toBe('ai-governance-a-complete-guide');
    });

    it('should handle quotes', () => {
      const title = '"AI Ethics" and "Responsible AI"';
      const slug = generateSlug(title);
      
      expect(slug).toBe('ai-ethics-and-responsible-ai');
    });

    it('should handle colons and semicolons', () => {
      const title = 'AI: Ethics, Governance; Best Practices';
      const slug = generateSlug(title);
      
      expect(slug).toBe('ai-ethics-governance-best-practices');
    });

    it('should handle apostrophes', () => {
      const title = "Understanding AI's Impact on Society";
      const slug = generateSlug(title);
      
      expect(slug).toBe('understanding-ais-impact-on-society');
    });

    it('should handle commas and periods', () => {
      const title = 'AI, ML, and Deep Learning.';
      const slug = generateSlug(title);
      
      expect(slug).toBe('ai-ml-and-deep-learning');
    });
  });

  describe('isValidSlug', () => {
    it('should validate correct kebab-case slug', () => {
      expect(isValidSlug('ai-governance-guide')).toBe(true);
    });

    it('should validate slug with numbers', () => {
      expect(isValidSlug('ai-101-guide')).toBe(true);
    });

    it('should reject slug with uppercase', () => {
      expect(isValidSlug('AI-Governance-Guide')).toBe(false);
    });

    it('should reject slug with spaces', () => {
      expect(isValidSlug('ai governance guide')).toBe(false);
    });

    it('should reject slug with special characters', () => {
      expect(isValidSlug('ai-governance-guide!')).toBe(false);
    });

    it('should reject slug with consecutive hyphens', () => {
      expect(isValidSlug('ai--governance--guide')).toBe(false);
    });

    it('should reject slug starting with hyphen', () => {
      expect(isValidSlug('-ai-governance-guide')).toBe(false);
    });

    it('should reject slug ending with hyphen', () => {
      expect(isValidSlug('ai-governance-guide-')).toBe(false);
    });

    it('should reject empty slug', () => {
      expect(isValidSlug('')).toBe(false);
    });

    it('should reject slug over 60 characters', () => {
      const longSlug = 'a'.repeat(61);
      expect(isValidSlug(longSlug)).toBe(false);
    });

    it('should accept slug exactly 60 characters', () => {
      const slug = 'a'.repeat(60);
      expect(isValidSlug(slug)).toBe(true);
    });

    it('should accept single word slug', () => {
      expect(isValidSlug('governance')).toBe(true);
    });

    it('should accept slug with multiple hyphens (not consecutive)', () => {
      expect(isValidSlug('ai-risk-management-framework-guide')).toBe(true);
    });
  });

  describe('sanitizeSlug', () => {
    it('should sanitize invalid slug', () => {
      const slug = sanitizeSlug('AI Governance Guide!');
      
      expect(slug).toBe('ai-governance-guide');
      expect(isValidSlug(slug)).toBe(true);
    });

    it('should return valid slug unchanged', () => {
      const validSlug = 'ai-governance-guide';
      const slug = sanitizeSlug(validSlug);
      
      expect(slug).toBe(validSlug);
    });

    it('should handle empty string', () => {
      const slug = sanitizeSlug('');
      
      expect(slug).toBe('untitled');
      expect(isValidSlug(slug)).toBe(true);
    });
  });

  describe('edge cases', () => {
    it('should handle unicode characters', () => {
      const title = 'AI Governance — A Guide';
      const slug = generateSlug(title);
      
      expect(slug).toBe('ai-governance-a-guide');
    });

    it('should handle very short titles', () => {
      const title = 'AI';
      const slug = generateSlug(title);
      
      expect(slug).toBe('ai');
      expect(isValidSlug(slug)).toBe(true);
    });

    it('should handle titles with only one word', () => {
      const title = 'Governance';
      const slug = generateSlug(title);
      
      expect(slug).toBe('governance');
      expect(isValidSlug(slug)).toBe(true);
    });

    it('should handle titles at exactly 60 character boundary', () => {
      // Create a title that will result in exactly 60 characters
      const title = 'Understanding Artificial Intelligence Risk Management';
      const slug = generateSlug(title);
      
      expect(slug.length).toBeLessThanOrEqual(60);
      expect(isValidSlug(slug)).toBe(true);
    });

    it('should handle titles with repeated words', () => {
      const title = 'AI AI AI Governance Governance Guide';
      const slug = generateSlug(title);
      
      expect(slug).toBe('ai-ai-ai-governance-governance-guide');
    });
  });
});
