/**
 * Image Prompt Generator Tests
 * Tests for category-specific image prompt generation
 */

import { ImagePromptGeneratorImpl } from '../generators/image-prompt-generator';
import { Category, CategoryMotif } from '../types';

describe('ImagePromptGenerator', () => {
  let generator: ImagePromptGeneratorImpl;

  beforeEach(() => {
    generator = new ImagePromptGeneratorImpl();
  });

  describe('generatePrompt', () => {
    it('should generate prompt with correct structure', () => {
      const category: Category = 'AI Fundamentals';
      const title = 'Understanding Neural Networks';
      
      const prompt = generator.generatePrompt(category, title);
      
      expect(prompt).toEqual({
        formula: 'Abstract geometric illustration, earth tones, minimalist, professional',
        category_motif: 'neural networks',
        master_size: '1200x750px',
        css_filters: true
      });
    });

    it('should generate prompts for all categories', () => {
      const categories: Category[] = [
        'AI Fundamentals',
        'AI Risks & Principles',
        'Legal Frameworks',
        'AI Laws',
        'Risk Frameworks & Standards',
        'AI Development Lifecycle',
        'Governance Implementation',
        'AI Auditing & Accountability',
        'Future Concerns',
        'Industry-Specific Insights',
        'Practical Guides'
      ];

      categories.forEach(category => {
        const prompt = generator.generatePrompt(category, 'Test Title');
        
        expect(prompt.formula).toBe('Abstract geometric illustration, earth tones, minimalist, professional');
        expect(prompt.master_size).toBe('1200x750px');
        expect(prompt.css_filters).toBe(true);
        expect(prompt.category_motif).toBeDefined();
      });
    });

    it('should throw error for invalid category', () => {
      const invalidCategory = 'Invalid Category' as Category;
      
      expect(() => {
        generator.generatePrompt(invalidCategory, 'Test Title');
      }).toThrow('No motif mapping found for category: Invalid Category');
    });
  });

  describe('getCategoryMotif', () => {
    it('should return correct motifs for each category', () => {
      const expectedMappings: Record<Category, CategoryMotif> = {
        'AI Fundamentals': 'neural networks',
        'AI Risks & Principles': 'warning triangles',
        'Legal Frameworks': 'scales',
        'AI Laws': 'legal documents',
        'Risk Frameworks & Standards': 'shields',
        'AI Development Lifecycle': 'flowcharts',
        'Governance Implementation': 'org charts',
        'AI Auditing & Accountability': 'magnifying glass',
        'Future Concerns': 'crystal ball',
        'Industry-Specific Insights': 'industry icons',
        'Practical Guides': 'toolbox'
      };

      Object.entries(expectedMappings).forEach(([category, expectedMotif]) => {
        const motif = generator.getCategoryMotif(category as Category);
        expect(motif).toBe(expectedMotif);
      });
    });

    it('should throw error for invalid category', () => {
      const invalidCategory = 'Invalid Category' as Category;
      
      expect(() => {
        generator.getCategoryMotif(invalidCategory);
      }).toThrow('No motif mapping found for category: Invalid Category');
    });
  });

  describe('createImagePlaceholder', () => {
    it('should create placeholder with correct format', () => {
      const slug = 'ai-policy-guide';
      const placeholder = generator.createImagePlaceholder(slug);
      
      expect(placeholder).toBe('![Ai Policy Guide]({{IMAGE_PLACEHOLDER_ai-policy-guide}})');
    });

    it('should format slug for alt text correctly', () => {
      const testCases = [
        { slug: 'neural-networks-guide', expected: '![Neural Networks Guide]({{IMAGE_PLACEHOLDER_neural-networks-guide}})' },
        { slug: 'ai-fundamentals', expected: '![Ai Fundamentals]({{IMAGE_PLACEHOLDER_ai-fundamentals}})' },
        { slug: 'single-word', expected: '![Single Word]({{IMAGE_PLACEHOLDER_single-word}})' },
        { slug: 'multi-word-long-title', expected: '![Multi Word Long Title]({{IMAGE_PLACEHOLDER_multi-word-long-title}})' }
      ];

      testCases.forEach(({ slug, expected }) => {
        const placeholder = generator.createImagePlaceholder(slug);
        expect(placeholder).toBe(expected);
      });
    });

    it('should handle empty slug', () => {
      const placeholder = generator.createImagePlaceholder('');
      expect(placeholder).toBe('![]({{IMAGE_PLACEHOLDER_}})');
    });
  });

  describe('getAvailableCategories', () => {
    it('should return all 11 categories', () => {
      const categories = generator.getAvailableCategories();
      
      expect(categories).toHaveLength(11);
      expect(categories).toContain('AI Fundamentals');
      expect(categories).toContain('AI Risks & Principles');
      expect(categories).toContain('Legal Frameworks');
      expect(categories).toContain('AI Laws');
      expect(categories).toContain('Risk Frameworks & Standards');
      expect(categories).toContain('AI Development Lifecycle');
      expect(categories).toContain('Governance Implementation');
      expect(categories).toContain('AI Auditing & Accountability');
      expect(categories).toContain('Future Concerns');
      expect(categories).toContain('Industry-Specific Insights');
      expect(categories).toContain('Practical Guides');
    });
  });

  describe('getAvailableMotifs', () => {
    it('should return all 11 motifs', () => {
      const motifs = generator.getAvailableMotifs();
      
      expect(motifs).toHaveLength(11);
      expect(motifs).toContain('neural networks');
      expect(motifs).toContain('warning triangles');
      expect(motifs).toContain('scales');
      expect(motifs).toContain('legal documents');
      expect(motifs).toContain('shields');
      expect(motifs).toContain('flowcharts');
      expect(motifs).toContain('org charts');
      expect(motifs).toContain('magnifying glass');
      expect(motifs).toContain('crystal ball');
      expect(motifs).toContain('industry icons');
      expect(motifs).toContain('toolbox');
    });
  });

  describe('validateCategoryMapping', () => {
    it('should return true for valid categories', () => {
      const validCategories: Category[] = [
        'AI Fundamentals',
        'AI Risks & Principles',
        'Legal Frameworks',
        'AI Laws',
        'Risk Frameworks & Standards',
        'AI Development Lifecycle',
        'Governance Implementation',
        'AI Auditing & Accountability',
        'Future Concerns',
        'Industry-Specific Insights',
        'Practical Guides'
      ];

      validCategories.forEach(category => {
        expect(generator.validateCategoryMapping(category)).toBe(true);
      });
    });

    it('should return false for invalid category', () => {
      const invalidCategory = 'Invalid Category' as Category;
      expect(generator.validateCategoryMapping(invalidCategory)).toBe(false);
    });
  });

  describe('getCompletePromptString', () => {
    it('should combine formula and motif correctly', () => {
      const category: Category = 'AI Fundamentals';
      const title = 'Neural Networks Guide';
      
      const promptString = generator.getCompletePromptString(category, title);
      
      expect(promptString).toBe(
        'Abstract geometric illustration, earth tones, minimalist, professional, featuring neural networks'
      );
    });

    it('should work for all categories', () => {
      const categories: Category[] = [
        'AI Fundamentals',
        'AI Risks & Principles',
        'Legal Frameworks',
        'AI Laws',
        'Risk Frameworks & Standards',
        'AI Development Lifecycle',
        'Governance Implementation',
        'AI Auditing & Accountability',
        'Future Concerns',
        'Industry-Specific Insights',
        'Practical Guides'
      ];

      categories.forEach(category => {
        const promptString = generator.getCompletePromptString(category, 'Test Title');
        
        expect(promptString).toContain('Abstract geometric illustration, earth tones, minimalist, professional, featuring');
        expect(promptString.length).toBeGreaterThan(70); // Base formula + motif
      });
    });
  });

  describe('integration tests', () => {
    it('should generate consistent output for same inputs', () => {
      const category: Category = 'Practical Guides';
      const title = 'AI Policy Template';
      
      const prompt1 = generator.generatePrompt(category, title);
      const prompt2 = generator.generatePrompt(category, title);
      
      expect(prompt1).toEqual(prompt2);
    });

    it('should maintain master size and CSS filters for all categories', () => {
      const categories = generator.getAvailableCategories();
      
      categories.forEach(category => {
        const prompt = generator.generatePrompt(category, 'Test Title');
        
        expect(prompt.master_size).toBe('1200x750px');
        expect(prompt.css_filters).toBe(true);
      });
    });
  });
});