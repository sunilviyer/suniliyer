/**
 * JSON Output Generator
 * 
 * Generates valid JSON output matching the ArticleJSON interface.
 * Includes all required fields and nested structures with validation.
 */

import { ProcessedArticle, ArticleJSON, Reference } from '../types';

export class JSONOutputGenerator {
  /**
   * Generate ArticleJSON from a processed article
   * @param article The processed article data
   * @returns Valid ArticleJSON object
   */
  generateArticleJSON(article: ProcessedArticle): ArticleJSON {
    const articleJSON: ArticleJSON = {
      file_status: this.generateFileStatus(article),
      content_validation: this.generateContentValidation(article),
      component_inventory: this.generateComponentInventory(article),
      extracted_data: this.generateExtractedData(article),
      cross_reference_data: this.generateCrossReferenceData(article),
      image_generation: this.generateImageGeneration(article)
    };

    return articleJSON;
  }

  /**
   * Generate file status section
   */
  private generateFileStatus(article: ProcessedArticle) {
    const slug = this.generateSlug(article.title);
    const wordCountStatus = this.determineWordCountStatus(
      article.wordCount,
      article.frontmatter.target_word_count
    );

    return {
      suggested_slug: slug,
      category: article.category,
      word_count_check: {
        target: article.frontmatter.target_word_count || null,
        actual: article.wordCount,
        status: wordCountStatus
      }
    };
  }

  /**
   * Generate content validation section
   */
  private generateContentValidation(article: ProcessedArticle) {
    return {
      structure: {
        has_h1: article.structure.has_h1,
        has_intro: article.structure.has_intro,
        has_conclusion: article.structure.has_conclusion,
        header_depth_valid: article.structure.header_depth_valid
      },
      generated_elements: {
        tldr_was_missing: !article.enhancedElements.tldr,
        objectives_were_missing: !article.enhancedElements.objectives,
        keywords_were_missing: !article.enhancedElements.keywords
      }
    };
  }

  /**
   * Generate component inventory section
   */
  private generateComponentInventory(article: ProcessedArticle) {
    return {
      has_components: article.components.length > 0,
      items: article.components.map(component => ({
        type: component.type,
        label: component.label,
        detected_at_section: component.detected_at_section,
        ...(component.template_link && { template_link: component.template_link })
      }))
    };
  }

  /**
   * Generate extracted data section
   */
  private generateExtractedData(article: ProcessedArticle) {
    const tldr = article.enhancedElements.tldr || 
                 this.extractTLDRFromFrontmatter(article.frontmatter) || '';
    
    const objectives = article.enhancedElements.objectives || 
                      this.extractObjectivesFromFrontmatter(article.frontmatter) || [];
    
    const keywords = article.enhancedElements.keywords || 
                    this.extractKeywordsFromFrontmatter(article.frontmatter) || [];

    const references = this.extractReferencesFromFrontmatter(article.frontmatter) || [];

    return {
      title: article.title,
      tldr: tldr,
      learning_objectives: objectives,
      seo_keywords: keywords,
      references: references
    };
  }

  /**
   * Generate cross reference data section
   */
  private generateCrossReferenceData(article: ProcessedArticle) {
    return {
      topic_fingerprint: article.topicFingerprint || [],
      named_examples: article.namedEntities || []
    };
  }

  /**
   * Generate image generation section
   */
  private generateImageGeneration(article: ProcessedArticle) {
    const slug = this.generateSlug(article.title);
    
    return {
      prompt: {
        formula: article.imageGeneration.formula,
        category_motif: article.imageGeneration.category_motif,
        master_size: article.imageGeneration.master_size,
        css_filters: article.imageGeneration.css_filters
      },
      placeholder: `![${article.title}]({{IMAGE_PLACEHOLDER_${slug}}})`
    };
  }

  /**
   * Generate URL-friendly slug from title
   */
  private generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single
      .replace(/^-|-$/g, '') // Remove leading/trailing hyphens
      .substring(0, 60); // Limit to 60 characters
  }

  /**
   * Determine word count status
   */
  private determineWordCountStatus(actual: number, target?: number): "within_range" | "under" | "over" {
    if (!target) return 'under'; // Default to 'under' when no target is set
    
    const tolerance = 0.1; // 10% tolerance
    const lowerBound = target * (1 - tolerance);
    const upperBound = target * (1 + tolerance);

    if (actual >= lowerBound && actual <= upperBound) {
      return 'within_range';
    } else if (actual < lowerBound) {
      return 'under';
    } else {
      return 'over';
    }
  }

  /**
   * Extract TL;DR from frontmatter if available
   */
  private extractTLDRFromFrontmatter(frontmatter: Record<string, any>): string | null {
    return frontmatter.tldr || frontmatter.summary || frontmatter.description || null;
  }

  /**
   * Extract learning objectives from frontmatter if available
   */
  private extractObjectivesFromFrontmatter(frontmatter: Record<string, any>): string[] | null {
    return frontmatter.learning_objectives || frontmatter.objectives || null;
  }

  /**
   * Extract SEO keywords from frontmatter if available
   */
  private extractKeywordsFromFrontmatter(frontmatter: Record<string, any>): string[] | null {
    return frontmatter.seo_keywords || frontmatter.keywords || frontmatter.tags || null;
  }

  /**
   * Extract references from frontmatter if available
   */
  private extractReferencesFromFrontmatter(frontmatter: Record<string, any>): Reference[] | null {
    const refs = frontmatter.references || frontmatter.links || null;
    if (!refs || !Array.isArray(refs)) return null;

    return refs.map(ref => {
      if (typeof ref === 'string') {
        return {
          title: ref,
          type: 'external' as const
        };
      } else if (typeof ref === 'object' && ref.title) {
        return {
          title: ref.title,
          url: ref.url,
          type: (ref.type as 'internal' | 'external') || 'external'
        };
      }
      return {
        title: String(ref),
        type: 'external' as const
      };
    });
  }

  /**
   * Validate JSON output structure
   * @param json The JSON object to validate
   * @returns True if valid, false otherwise
   */
  validateJSONOutput(json: any): boolean {
    try {
      // Check required top-level properties
      const requiredProps = [
        'file_status',
        'content_validation', 
        'component_inventory',
        'extracted_data',
        'cross_reference_data',
        'image_generation'
      ];

      for (const prop of requiredProps) {
        if (!(prop in json)) {
          return false;
        }
      }

      // Validate file_status structure
      const fileStatus = json.file_status;
      if (!fileStatus.suggested_slug || !fileStatus.category || !fileStatus.word_count_check) {
        return false;
      }

      // Validate word_count_check structure
      const wordCount = fileStatus.word_count_check;
      if (typeof wordCount.actual !== 'number' || 
          !['within_range', 'under', 'over'].includes(wordCount.status)) {
        return false;
      }

      // Validate content_validation structure
      const contentValidation = json.content_validation;
      if (!contentValidation.structure || !contentValidation.generated_elements) {
        return false;
      }

      // Validate component_inventory structure
      const componentInventory = json.component_inventory;
      if (typeof componentInventory.has_components !== 'boolean' || 
          !Array.isArray(componentInventory.items)) {
        return false;
      }

      // Validate extracted_data structure
      const extractedData = json.extracted_data;
      if (!extractedData.title || 
          !Array.isArray(extractedData.learning_objectives) ||
          !Array.isArray(extractedData.seo_keywords) ||
          !Array.isArray(extractedData.references)) {
        return false;
      }

      // Validate cross_reference_data structure
      const crossRefData = json.cross_reference_data;
      if (!Array.isArray(crossRefData.topic_fingerprint) ||
          !Array.isArray(crossRefData.named_examples)) {
        return false;
      }

      // Validate image_generation structure
      const imageGen = json.image_generation;
      if (!imageGen.prompt || !imageGen.placeholder) {
        return false;
      }

      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Convert ArticleJSON to JSON string with validation
   * @param articleJSON The ArticleJSON object
   * @returns JSON string or throws error if invalid
   */
  toJSONString(articleJSON: ArticleJSON): string {
    if (!this.validateJSONOutput(articleJSON)) {
      throw new Error('Invalid ArticleJSON structure');
    }

    return JSON.stringify(articleJSON, null, 2);
  }
}