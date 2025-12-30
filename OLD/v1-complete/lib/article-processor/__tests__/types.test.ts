/**
 * Type validation tests for Article Content Processor
 * Ensures all type definitions are correctly structured
 */

import {
  Category,
  CategoryMotif,
  ArticleJSON,
  ProcessedArticle,
  MasterJSON,
  DEFAULT_DIRECTORIES
} from '../types';
import { CATEGORY_MOTIF_MAP } from '../utils/constants';

describe('Article Processor Types', () => {
  describe('Category Types', () => {
    it('should have all 11 categories defined', () => {
      const categories: Category[] = [
        "AI Fundamentals",
        "AI Risks & Principles",
        "Legal Frameworks",
        "AI Laws",
        "Risk Frameworks & Standards",
        "AI Development Lifecycle",
        "Governance Implementation",
        "AI Auditing & Accountability",
        "Future Concerns",
        "Industry-Specific Insights",
        "Practical Guides"
      ];
      
      expect(categories).toHaveLength(11);
    });

    it('should map each category to a motif', () => {
      const categories: Category[] = [
        "AI Fundamentals",
        "AI Risks & Principles",
        "Legal Frameworks",
        "AI Laws",
        "Risk Frameworks & Standards",
        "AI Development Lifecycle",
        "Governance Implementation",
        "AI Auditing & Accountability",
        "Future Concerns",
        "Industry-Specific Insights",
        "Practical Guides"
      ];

      categories.forEach(category => {
        expect(CATEGORY_MOTIF_MAP[category]).toBeDefined();
        expect(typeof CATEGORY_MOTIF_MAP[category]).toBe('string');
      });
    });
  });

  describe('Directory Structure', () => {
    it('should define all required directories', () => {
      expect(DEFAULT_DIRECTORIES.drafts).toBe('content/articles/drafts');
      expect(DEFAULT_DIRECTORIES.processing).toBe('content/articles/articleprocessing');
      expect(DEFAULT_DIRECTORIES.review).toBe('content/articles/review');
      expect(DEFAULT_DIRECTORIES.clean).toBe('content/articles/clean');
    });
  });

  describe('ArticleJSON Structure', () => {
    it('should have all required top-level sections', () => {
      const mockArticle: ArticleJSON = {
        file_status: {
          suggested_slug: 'test-article',
          category: 'AI Fundamentals',
          word_count_check: {
            target: 1000,
            actual: 950,
            status: 'within_range'
          }
        },
        content_validation: {
          structure: {
            has_h1: true,
            has_intro: true,
            has_conclusion: true,
            header_depth_valid: true
          },
          generated_elements: {
            tldr_was_missing: false,
            objectives_were_missing: false,
            keywords_were_missing: false
          }
        },
        component_inventory: {
          has_components: false,
          items: []
        },
        extracted_data: {
          title: 'Test Article',
          tldr: 'This is a test article.',
          learning_objectives: [],
          seo_keywords: [],
          references: []
        },
        cross_reference_data: {
          topic_fingerprint: [],
          named_examples: []
        },
        image_generation: {
          prompt: {
            formula: 'Abstract geometric illustration',
            category_motif: 'neural networks',
            master_size: '1200x750px',
            css_filters: true
          },
          placeholder: '![Test]({{IMAGE_PLACEHOLDER_test-article}})'
        }
      };

      expect(mockArticle.file_status).toBeDefined();
      expect(mockArticle.content_validation).toBeDefined();
      expect(mockArticle.component_inventory).toBeDefined();
      expect(mockArticle.extracted_data).toBeDefined();
      expect(mockArticle.cross_reference_data).toBeDefined();
      expect(mockArticle.image_generation).toBeDefined();
    });
  });
});
