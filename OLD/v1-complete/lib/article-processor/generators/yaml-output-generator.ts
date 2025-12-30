/**
 * YAML Output Generator
 * 
 * Generates structured YAML output with clear section delimiters for parser compatibility.
 * Includes all required sections: file_status, content_validation, component_inventory,
 * extracted_data, cross_reference_data, image_generation.
 */

import { ProcessedArticle } from '../types';

export class YAMLOutputGenerator {
  /**
   * Generate structured YAML output for a processed article
   * @param article The processed article data
   * @returns Formatted YAML string with section delimiters
   */
  generateArticleYAML(article: ProcessedArticle): string {
    const yaml = this.buildYAMLStructure(article);
    return yaml;
  }

  /**
   * Build the complete YAML structure with all required sections
   */
  private buildYAMLStructure(article: ProcessedArticle): string {
    const sections = [
      this.generateFileStatusSection(article),
      this.generateContentValidationSection(article),
      this.generateComponentInventorySection(article),
      this.generateExtractedDataSection(article),
      this.generateCrossReferenceDataSection(article),
      this.generateImageGenerationSection(article)
    ];

    return sections.join('\n\n');
  }

  /**
   * Generate the file status section
   */
  private generateFileStatusSection(article: ProcessedArticle): string {
    const slug = this.generateSlug(article.title);
    const wordCountStatus = this.determineWordCountStatus(
      article.wordCount,
      article.frontmatter.target_word_count
    );

    return `# === FILE STATUS ===
suggested_slug: "${slug}"
category: "${article.category}"
word_count:
  target: ${article.frontmatter.target_word_count || 'null'}
  actual: ${article.wordCount}
  status: "${wordCountStatus}"`;
  }

  /**
   * Generate the content validation section
   */
  private generateContentValidationSection(article: ProcessedArticle): string {
    const structure = article.structure;
    const generated = {
      tldr_was_missing: !article.enhancedElements.tldr,
      objectives_were_missing: !article.enhancedElements.objectives,
      keywords_were_missing: !article.enhancedElements.keywords
    };

    return `# === CONTENT VALIDATION ===
structure:
  has_h1: ${structure.has_h1}
  has_intro: ${structure.has_intro}
  has_conclusion: ${structure.has_conclusion}
  header_depth_valid: ${structure.header_depth_valid}
generated_elements:
  tldr_was_missing: ${generated.tldr_was_missing}
  objectives_were_missing: ${generated.objectives_were_missing}
  keywords_were_missing: ${generated.keywords_were_missing}`;
  }

  /**
   * Generate the component inventory section
   */
  private generateComponentInventorySection(article: ProcessedArticle): string {
    const hasComponents = article.components.length > 0;
    
    let componentsYAML = `# === COMPONENT INVENTORY ===
has_components: ${hasComponents}`;

    if (hasComponents) {
      componentsYAML += '\ncomponents:';
      for (const component of article.components) {
        componentsYAML += `\n  - type: "${component.type}"`;
        componentsYAML += `\n    label: "${this.escapeYAMLString(component.label)}"`;
        componentsYAML += `\n    detected_at_section: "${this.escapeYAMLString(component.detected_at_section)}"`;
        if (component.template_link) {
          componentsYAML += `\n    template_link: "${component.template_link}"`;
        }
      }
    } else {
      componentsYAML += '\ncomponents: []';
    }

    return componentsYAML;
  }

  /**
   * Generate the extracted data section
   */
  private generateExtractedDataSection(article: ProcessedArticle): string {
    const tldr = article.enhancedElements.tldr || this.extractTLDRFromFrontmatter(article.frontmatter);
    const objectives = article.enhancedElements.objectives || this.extractObjectivesFromFrontmatter(article.frontmatter);
    const keywords = article.enhancedElements.keywords || this.extractKeywordsFromFrontmatter(article.frontmatter);

    let section = `# === EXTRACTED DATA ===
title: "${this.escapeYAMLString(article.title)}"
tldr: "${this.escapeYAMLString(tldr || '')}"`;

    // Learning objectives
    section += '\nlearning_objectives:';
    if (objectives && objectives.length > 0) {
      for (const objective of objectives) {
        section += `\n  - "${this.escapeYAMLString(objective)}"`;
      }
    } else {
      section += ' []';
    }

    // SEO keywords
    section += '\nseo_keywords:';
    if (keywords && keywords.length > 0) {
      for (const keyword of keywords) {
        section += `\n  - "${this.escapeYAMLString(keyword)}"`;
      }
    } else {
      section += ' []';
    }

    return section;
  }

  /**
   * Generate the cross reference data section
   */
  private generateCrossReferenceDataSection(article: ProcessedArticle): string {
    let section = `# === CROSS REFERENCE DATA ===
topic_fingerprint:`;

    if (article.topicFingerprint.length > 0) {
      for (const topic of article.topicFingerprint) {
        section += `\n  - "${this.escapeYAMLString(topic)}"`;
      }
    } else {
      section += ' []';
    }

    section += '\nnamed_examples:';
    if (article.namedEntities.length > 0) {
      for (const entity of article.namedEntities) {
        section += `\n  - "${this.escapeYAMLString(entity)}"`;
      }
    } else {
      section += ' []';
    }

    return section;
  }

  /**
   * Generate the image generation section
   */
  private generateImageGenerationSection(article: ProcessedArticle): string {
    const imagePrompt = article.imageGeneration;
    const slug = this.generateSlug(article.title);

    return `# === IMAGE GENERATION ===
image_prompt:
  formula: "${this.escapeYAMLString(imagePrompt.formula)}"
  category_motif: "${imagePrompt.category_motif}"
  master_size: "${imagePrompt.master_size}"
  css_filters: ${imagePrompt.css_filters}
image_placeholder: "![${this.escapeYAMLString(article.title)}]({{IMAGE_PLACEHOLDER_${slug}}})"`;
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
  private determineWordCountStatus(actual: number, target?: number): string {
    if (!target) return 'no_target';
    
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
   * Escape special characters in YAML strings
   */
  private escapeYAMLString(str: string): string {
    return str
      .replace(/\\/g, '\\\\') // Escape backslashes
      .replace(/"/g, '\\"')   // Escape quotes
      .replace(/\n/g, '\\n')  // Escape newlines
      .replace(/\r/g, '\\r')  // Escape carriage returns
      .replace(/\t/g, '\\t'); // Escape tabs
  }

  /**
   * Validate YAML output format
   */
  validateYAMLOutput(yamlString: string): boolean {
    try {
      // Check for required section delimiters
      const requiredSections = [
        '# === FILE STATUS ===',
        '# === CONTENT VALIDATION ===',
        '# === COMPONENT INVENTORY ===',
        '# === EXTRACTED DATA ===',
        '# === CROSS REFERENCE DATA ===',
        '# === IMAGE GENERATION ==='
      ];

      for (const section of requiredSections) {
        if (!yamlString.includes(section)) {
          return false;
        }
      }

      // Basic YAML structure validation
      const lines = yamlString.split('\n');
      let inSection = false;
      
      for (const line of lines) {
        const trimmed = line.trim();
        
        // Skip empty lines and comments
        if (!trimmed || trimmed.startsWith('#')) {
          continue;
        }

        // Check for proper key-value format
        if (!line.startsWith('  ') && !line.includes(':')) {
          return false;
        }
      }

      return true;
    } catch (error) {
      return false;
    }
  }
}