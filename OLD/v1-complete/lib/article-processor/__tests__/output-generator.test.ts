/**
 * Tests for Output Generator
 */

import { OutputGenerator } from '../generators/output-generator';
import { ProcessedArticle, Category } from '../types';

describe('OutputGenerator', () => {
  let outputGenerator: OutputGenerator;
  let mockArticle: ProcessedArticle;

  beforeEach(() => {
    outputGenerator = new OutputGenerator();
    
    mockArticle = {
      filePath: '/test/article.md',
      originalContent: '# Test Article\n\nThis is test content.',
      frontmatter: {
        title: 'Test Article',
        target_word_count: 1000
      },
      title: 'Test Article',
      content: '# Test Article\n\nThis is test content.',
      wordCount: 500,
      structure: {
        has_h1: true,
        has_intro: true,
        has_conclusion: false,
        header_depth_valid: true
      },
      category: 'AI Fundamentals' as Category,
      components: [
        {
          type: 'checklist',
          label: 'Test Checklist',
          detected_at_section: 'Introduction'
        }
      ],
      topicFingerprint: ['Machine Learning', 'Neural Networks'],
      namedEntities: ['TensorFlow', 'Google'],
      enhancedElements: {
        tldr: 'This is a test article about AI fundamentals.',
        objectives: ['Learn about AI', 'Understand ML'],
        keywords: ['AI', 'machine learning', 'neural networks']
      },
      imageGeneration: {
        formula: 'Abstract geometric illustration, earth tones, minimalist, professional',
        category_motif: 'neural networks',
        master_size: '1200x750px',
        css_filters: true
      }
    };
  });

  describe('generateArticleYAML', () => {
    it('should generate valid YAML with all required sections', () => {
      const yaml = outputGenerator.generateArticleYAML(mockArticle);
      
      expect(yaml).toContain('# === FILE STATUS ===');
      expect(yaml).toContain('# === CONTENT VALIDATION ===');
      expect(yaml).toContain('# === COMPONENT INVENTORY ===');
      expect(yaml).toContain('# === EXTRACTED DATA ===');
      expect(yaml).toContain('# === CROSS REFERENCE DATA ===');
      expect(yaml).toContain('# === IMAGE GENERATION ===');
      
      expect(yaml).toContain('suggested_slug: "test-article"');
      expect(yaml).toContain('category: "AI Fundamentals"');
      expect(yaml).toContain('actual: 500');
      expect(yaml).toContain('status: "under"');
    });

    it('should validate generated YAML', () => {
      const yaml = outputGenerator.generateArticleYAML(mockArticle);
      const isValid = outputGenerator.validateOutput(yaml, 'yaml');
      
      expect(isValid).toBe(true);
    });
  });

  describe('generateArticleJSON', () => {
    it('should generate valid ArticleJSON structure', () => {
      const json = outputGenerator.generateArticleJSON(mockArticle);
      
      expect(json).toHaveProperty('file_status');
      expect(json).toHaveProperty('content_validation');
      expect(json).toHaveProperty('component_inventory');
      expect(json).toHaveProperty('extracted_data');
      expect(json).toHaveProperty('cross_reference_data');
      expect(json).toHaveProperty('image_generation');
      
      expect(json.file_status.suggested_slug).toBe('test-article');
      expect(json.file_status.category).toBe('AI Fundamentals');
      expect(json.file_status.word_count_check.actual).toBe(500);
      expect(json.file_status.word_count_check.status).toBe('under');
    });

    it('should validate generated JSON', () => {
      const json = outputGenerator.generateArticleJSON(mockArticle);
      const jsonString = JSON.stringify(json, null, 2);
      const isValid = outputGenerator.validateOutput(jsonString, 'json');
      
      expect(isValid).toBe(true);
    });
  });

  describe('generateCleanedMarkdown', () => {
    it('should generate cleaned markdown with image placeholder', () => {
      const markdown = outputGenerator.generateCleanedMarkdown(mockArticle);
      
      expect(markdown).toContain('# Test Article');
      expect(markdown).toContain('{{IMAGE_PLACEHOLDER_test-article}}');
      expect(markdown).toContain('This is test content.');
    });

    it('should validate generated markdown', () => {
      const markdown = outputGenerator.generateCleanedMarkdown(mockArticle);
      const isValid = outputGenerator.validateOutput(markdown, 'markdown');
      
      expect(isValid).toBe(true);
    });
  });

  describe('compileMasterJSON', () => {
    it('should compile master JSON from articles', () => {
      const articleJSON = outputGenerator.generateArticleJSON(mockArticle);
      const masterJSON = outputGenerator.compileMasterJSON([articleJSON]);
      
      expect(masterJSON.processing_summary.total_articles).toBe(1);
      expect(masterJSON.processing_summary.categories_distribution['AI Fundamentals']).toBe(1);
      expect(masterJSON.articles).toHaveLength(1);
      expect(masterJSON.articles[0]).toEqual(articleJSON);
    });
  });

  describe('generateAllFormats', () => {
    it('should generate all output formats', () => {
      const outputs = outputGenerator.generateAllFormats(mockArticle);
      
      expect(outputs).toHaveProperty('yaml');
      expect(outputs).toHaveProperty('json');
      expect(outputs).toHaveProperty('jsonString');
      expect(outputs).toHaveProperty('markdown');
      
      expect(typeof outputs.yaml).toBe('string');
      expect(typeof outputs.json).toBe('object');
      expect(typeof outputs.jsonString).toBe('string');
      expect(typeof outputs.markdown).toBe('string');
    });

    it('should validate all generated formats', () => {
      const outputs = outputGenerator.generateAllFormats(mockArticle);
      const validation = outputGenerator.validateAllFormats(outputs);
      
      expect(validation.yaml).toBe(true);
      expect(validation.json).toBe(true);
      expect(validation.markdown).toBe(true);
      expect(validation.allValid).toBe(true);
    });
  });

  describe('getProcessingStatistics', () => {
    it('should calculate processing statistics', () => {
      const articleJSON = outputGenerator.generateArticleJSON(mockArticle);
      const masterJSON = outputGenerator.compileMasterJSON([articleJSON]);
      const stats = outputGenerator.getProcessingStatistics(masterJSON);
      
      expect(stats.totalArticles).toBe(1);
      expect(stats.mostCommonCategory).toBe('AI Fundamentals');
      expect(stats.averageWordCount).toBe(500);
      expect(stats.articlesWithComponents).toBe(1);
    });
  });
});