/**
 * Main Output Generator
 * 
 * Orchestrates all output generation formats (YAML, JSON, Markdown) and provides
 * the main OutputGenerator interface implementation.
 */

import { ProcessedArticle, ArticleJSON, MasterJSON, Category } from '../types';
import { OutputGenerator as IOutputGenerator } from '../interfaces';
import { YAMLOutputGenerator } from './yaml-output-generator';
import { JSONOutputGenerator } from './json-output-generator';
import { MarkdownOutputGenerator } from './markdown-output-generator';

export class OutputGenerator implements IOutputGenerator {
  private yamlGenerator: YAMLOutputGenerator;
  private jsonGenerator: JSONOutputGenerator;
  private markdownGenerator: MarkdownOutputGenerator;

  constructor() {
    this.yamlGenerator = new YAMLOutputGenerator();
    this.jsonGenerator = new JSONOutputGenerator();
    this.markdownGenerator = new MarkdownOutputGenerator();
  }

  /**
   * Generate structured YAML output for a processed article
   * @param article The processed article data
   * @returns Formatted YAML string with section delimiters
   */
  generateArticleYAML(article: ProcessedArticle): string {
    return this.yamlGenerator.generateArticleYAML(article);
  }

  /**
   * Generate valid JSON matching ArticleJSON interface
   * @param article The processed article data
   * @returns Valid ArticleJSON object
   */
  generateArticleJSON(article: ProcessedArticle): ArticleJSON {
    return this.jsonGenerator.generateArticleJSON(article);
  }

  /**
   * Generate cleaned markdown with image placeholders
   * @param article The processed article data
   * @returns Cleaned markdown string
   */
  generateCleanedMarkdown(article: ProcessedArticle): string {
    return this.markdownGenerator.generateCleanedMarkdown(article);
  }

  /**
   * Compile master JSON from all processed articles
   * @param articles Array of ArticleJSON objects
   * @returns Master JSON containing all articles and analysis
   */
  compileMasterJSON(articles: ArticleJSON[]): MasterJSON {
    const processingDate = new Date().toISOString();
    const categoriesDistribution = this.calculateCategoriesDistribution(articles);

    const masterJSON: MasterJSON = {
      processing_summary: {
        total_articles: articles.length,
        processing_date: processingDate,
        categories_distribution: categoriesDistribution
      },
      articles: articles,
      redundancy_analysis: {
        overlapping_articles: [],
        duplicate_examples: [],
        restructuring_recommendations: [],
        ollama_analysis: {
          model_used: 'pending',
          confidence_score: 0,
          processing_time: 0
        }
      },
      cross_reference_suggestions: {
        suggestions: []
      }
    };

    return masterJSON;
  }

  /**
   * Validate output format
   * @param output The output string to validate
   * @param format The format type (yaml, json, markdown)
   * @returns True if valid, false otherwise
   */
  validateOutput(output: string, format: 'yaml' | 'json' | 'markdown'): boolean {
    try {
      switch (format) {
        case 'yaml':
          return this.yamlGenerator.validateYAMLOutput(output);
        
        case 'json':
          const parsed = JSON.parse(output);
          return this.jsonGenerator.validateJSONOutput(parsed);
        
        case 'markdown':
          return this.markdownGenerator.validateMarkdownOutput(output);
        
        default:
          return false;
      }
    } catch (error) {
      return false;
    }
  }

  /**
   * Generate all output formats for an article
   * @param article The processed article data
   * @returns Object containing all output formats
   */
  generateAllFormats(article: ProcessedArticle): {
    yaml: string;
    json: ArticleJSON;
    jsonString: string;
    markdown: string;
  } {
    const yaml = this.generateArticleYAML(article);
    const json = this.generateArticleJSON(article);
    const jsonString = this.jsonGenerator.toJSONString(json);
    const markdown = this.generateCleanedMarkdown(article);

    return {
      yaml,
      json,
      jsonString,
      markdown
    };
  }

  /**
   * Validate all output formats for an article
   * @param outputs The generated outputs
   * @returns Validation results for each format
   */
  validateAllFormats(outputs: {
    yaml: string;
    json: ArticleJSON;
    jsonString: string;
    markdown: string;
  }): {
    yaml: boolean;
    json: boolean;
    markdown: boolean;
    allValid: boolean;
  } {
    const yamlValid = this.validateOutput(outputs.yaml, 'yaml');
    const jsonValid = this.validateOutput(outputs.jsonString, 'json');
    const markdownValid = this.validateOutput(outputs.markdown, 'markdown');

    return {
      yaml: yamlValid,
      json: jsonValid,
      markdown: markdownValid,
      allValid: yamlValid && jsonValid && markdownValid
    };
  }

  /**
   * Calculate category distribution from articles
   */
  private calculateCategoriesDistribution(articles: ArticleJSON[]): Record<Category, number> {
    const distribution: Record<Category, number> = {
      "AI Fundamentals": 0,
      "AI Risks & Principles": 0,
      "Legal Frameworks": 0,
      "AI Laws": 0,
      "Risk Frameworks & Standards": 0,
      "AI Development Lifecycle": 0,
      "Governance Implementation": 0,
      "AI Auditing & Accountability": 0,
      "Future Concerns": 0,
      "Industry-Specific Insights": 0,
      "Practical Guides": 0
    };

    for (const article of articles) {
      const category = article.file_status.category;
      if (category in distribution) {
        distribution[category]++;
      }
    }

    return distribution;
  }

  /**
   * Get processing statistics from master JSON
   * @param masterJSON The master JSON object
   * @returns Processing statistics
   */
  getProcessingStatistics(masterJSON: MasterJSON): {
    totalArticles: number;
    categoriesCount: number;
    mostCommonCategory: Category | null;
    averageWordCount: number;
    articlesWithComponents: number;
  } {
    const articles = masterJSON.articles;
    const totalArticles = articles.length;
    const categoriesCount = Object.keys(masterJSON.processing_summary.categories_distribution).length;
    
    // Find most common category
    let mostCommonCategory: Category | null = null;
    let maxCount = 0;
    for (const [category, count] of Object.entries(masterJSON.processing_summary.categories_distribution)) {
      if (count > maxCount) {
        maxCount = count;
        mostCommonCategory = category as Category;
      }
    }

    // Calculate average word count
    const totalWords = articles.reduce((sum, article) => sum + article.file_status.word_count_check.actual, 0);
    const averageWordCount = totalArticles > 0 ? Math.round(totalWords / totalArticles) : 0;

    // Count articles with components
    const articlesWithComponents = articles.filter(article => article.component_inventory.has_components).length;

    return {
      totalArticles,
      categoriesCount,
      mostCommonCategory,
      averageWordCount,
      articlesWithComponents
    };
  }
}

// Export individual generators for direct use if needed
export { YAMLOutputGenerator } from './yaml-output-generator';
export { JSONOutputGenerator } from './json-output-generator';
export { MarkdownOutputGenerator } from './markdown-output-generator';