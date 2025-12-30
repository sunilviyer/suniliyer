/**
 * Cleaned Markdown Output Generator
 * 
 * Generates cleaned markdown with image placeholders for content/articles/clean.
 * Preserves original content structure while adding enhancements and removing processing artifacts.
 */

import { ProcessedArticle } from '../types';

export class MarkdownOutputGenerator {
  /**
   * Generate cleaned markdown with image placeholders
   * @param article The processed article data
   * @returns Cleaned markdown string
   */
  generateCleanedMarkdown(article: ProcessedArticle): string {
    let cleanedContent = this.processContent(article);
    
    // Add enhanced frontmatter if elements were generated
    cleanedContent = this.addEnhancedFrontmatter(article, cleanedContent);
    
    // Insert image placeholders at appropriate locations
    cleanedContent = this.insertImagePlaceholders(article, cleanedContent);
    
    // Clean up formatting and remove artifacts
    cleanedContent = this.cleanupFormatting(cleanedContent);
    
    return cleanedContent;
  }

  /**
   * Process the main content, preserving structure
   */
  private processContent(article: ProcessedArticle): string {
    let content = article.content;
    
    // Ensure proper title formatting
    if (!content.startsWith('# ')) {
      content = `# ${article.title}\n\n${content}`;
    }
    
    return content;
  }

  /**
   * Add enhanced frontmatter with generated elements
   */
  private addEnhancedFrontmatter(article: ProcessedArticle, content: string): string {
    const frontmatter = { ...article.frontmatter };
    let hasChanges = false;

    // Add generated TL;DR if it was missing
    if (article.enhancedElements.tldr && !frontmatter.tldr) {
      frontmatter.tldr = article.enhancedElements.tldr;
      hasChanges = true;
    }

    // Add generated learning objectives if they were missing
    if (article.enhancedElements.objectives && !frontmatter.learning_objectives) {
      frontmatter.learning_objectives = article.enhancedElements.objectives;
      hasChanges = true;
    }

    // Add generated SEO keywords if they were missing
    if (article.enhancedElements.keywords && !frontmatter.seo_keywords) {
      frontmatter.seo_keywords = article.enhancedElements.keywords;
      hasChanges = true;
    }

    // Add processing metadata
    frontmatter.processed_date = new Date().toISOString();
    frontmatter.category = article.category;
    frontmatter.word_count = article.wordCount;
    hasChanges = true;

    if (hasChanges) {
      const frontmatterYAML = this.generateFrontmatterYAML(frontmatter);
      
      // Remove existing frontmatter if present
      const contentWithoutFrontmatter = this.removeFrontmatter(content);
      
      return `---\n${frontmatterYAML}---\n\n${contentWithoutFrontmatter}`;
    }

    return content;
  }

  /**
   * Insert image placeholders at appropriate locations
   */
  private insertImagePlaceholders(article: ProcessedArticle, content: string): string {
    const slug = this.generateSlug(article.title);
    const imagePlaceholder = `![${article.title}]({{IMAGE_PLACEHOLDER_${slug}}})`;
    
    // Find the best location to insert the image placeholder
    const lines = content.split('\n');
    const insertionIndex = this.findImageInsertionPoint(lines);
    
    if (insertionIndex !== -1) {
      lines.splice(insertionIndex, 0, '', imagePlaceholder, '');
      return lines.join('\n');
    }
    
    // Fallback: insert after the title
    const titleIndex = lines.findIndex(line => line.startsWith('# '));
    if (titleIndex !== -1) {
      lines.splice(titleIndex + 1, 0, '', imagePlaceholder, '');
      return lines.join('\n');
    }
    
    // Last resort: insert at the beginning
    return `${imagePlaceholder}\n\n${content}`;
  }

  /**
   * Find the best location to insert image placeholder
   */
  private findImageInsertionPoint(lines: string[]): number {
    let inFrontmatter = false;
    let frontmatterEnd = -1;
    let titleIndex = -1;
    let firstParagraphIndex = -1;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Track frontmatter boundaries
      if (line === '---') {
        if (!inFrontmatter) {
          inFrontmatter = true;
        } else {
          inFrontmatter = false;
          frontmatterEnd = i;
        }
        continue;
      }
      
      // Skip frontmatter content
      if (inFrontmatter) {
        continue;
      }
      
      // Find title
      if (line.startsWith('# ') && titleIndex === -1) {
        titleIndex = i;
        continue;
      }
      
      // Find first substantial paragraph after title
      if (titleIndex !== -1 && line.length > 50 && !line.startsWith('#') && firstParagraphIndex === -1) {
        firstParagraphIndex = i;
        break;
      }
    }
    
    // Insert before first substantial paragraph, or after title
    return firstParagraphIndex !== -1 ? firstParagraphIndex : titleIndex + 1;
  }

  /**
   * Clean up formatting and remove processing artifacts
   */
  private cleanupFormatting(content: string): string {
    let cleaned = content;
    
    // Remove excessive blank lines (more than 2 consecutive)
    cleaned = cleaned.replace(/\n{4,}/g, '\n\n\n');
    
    // Ensure proper spacing around headers
    cleaned = cleaned.replace(/\n(#{1,6}\s)/g, '\n\n$1');
    cleaned = cleaned.replace(/(#{1,6}\s[^\n]+)\n([^\n#])/g, '$1\n\n$2');
    
    // Clean up list formatting
    cleaned = this.cleanupListFormatting(cleaned);
    
    // Remove any processing comments or artifacts
    cleaned = cleaned.replace(/<!--\s*PROCESSING[^>]*-->/gi, '');
    cleaned = cleaned.replace(/\[\/\/\]:\s*#\s*\([^)]*processing[^)]*\)/gi, '');
    
    // Ensure file ends with single newline
    cleaned = cleaned.replace(/\n*$/, '\n');
    
    return cleaned;
  }

  /**
   * Clean up list formatting
   */
  private cleanupListFormatting(content: string): string {
    const lines = content.split('\n');
    const cleanedLines: string[] = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();
      
      // Ensure consistent list item spacing
      if (trimmed.match(/^[-*+]\s/) || trimmed.match(/^\d+\.\s/)) {
        // Add blank line before first list item if not already present
        if (i > 0 && cleanedLines[cleanedLines.length - 1].trim() !== '' && 
            !cleanedLines[cleanedLines.length - 1].trim().match(/^[-*+]\s/) &&
            !cleanedLines[cleanedLines.length - 1].trim().match(/^\d+\.\s/)) {
          cleanedLines.push('');
        }
      }
      
      cleanedLines.push(line);
    }
    
    return cleanedLines.join('\n');
  }

  /**
   * Generate frontmatter YAML
   */
  private generateFrontmatterYAML(frontmatter: Record<string, any>): string {
    const yamlLines: string[] = [];
    
    // Order important fields first
    const orderedFields = [
      'title', 'tldr', 'category', 'learning_objectives', 
      'seo_keywords', 'word_count', 'processed_date'
    ];
    
    for (const field of orderedFields) {
      if (field in frontmatter) {
        yamlLines.push(this.formatYAMLField(field, frontmatter[field]));
        delete frontmatter[field];
      }
    }
    
    // Add remaining fields
    for (const [key, value] of Object.entries(frontmatter)) {
      yamlLines.push(this.formatYAMLField(key, value));
    }
    
    return yamlLines.join('\n') + '\n';
  }

  /**
   * Format a YAML field
   */
  private formatYAMLField(key: string, value: any): string {
    if (Array.isArray(value)) {
      if (value.length === 0) {
        return `${key}: []`;
      }
      const items = value.map(item => `  - "${this.escapeYAMLString(String(item))}"`).join('\n');
      return `${key}:\n${items}`;
    } else if (typeof value === 'string') {
      return `${key}: "${this.escapeYAMLString(value)}"`;
    } else if (typeof value === 'number' || typeof value === 'boolean') {
      return `${key}: ${value}`;
    } else if (value === null || value === undefined) {
      return `${key}: null`;
    } else {
      return `${key}: "${this.escapeYAMLString(String(value))}"`;
    }
  }

  /**
   * Remove existing frontmatter from content
   */
  private removeFrontmatter(content: string): string {
    const lines = content.split('\n');
    let inFrontmatter = false;
    let frontmatterEnd = -1;
    
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim() === '---') {
        if (!inFrontmatter) {
          inFrontmatter = true;
        } else {
          frontmatterEnd = i;
          break;
        }
      }
    }
    
    if (frontmatterEnd !== -1) {
      return lines.slice(frontmatterEnd + 1).join('\n').trim();
    }
    
    return content;
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
   * Validate markdown output
   */
  validateMarkdownOutput(markdown: string): boolean {
    try {
      // Check for basic markdown structure
      const lines = markdown.split('\n');
      
      // Should have a title
      const hasTitle = lines.some(line => line.trim().startsWith('# '));
      if (!hasTitle) {
        return false;
      }
      
      // Should have image placeholder
      const hasImagePlaceholder = markdown.includes('{{IMAGE_PLACEHOLDER_');
      if (!hasImagePlaceholder) {
        return false;
      }
      
      // Should not have processing artifacts
      const hasArtifacts = markdown.includes('PROCESSING') || 
                          markdown.includes('processing') && markdown.includes('<!--');
      if (hasArtifacts) {
        return false;
      }
      
      // Should end with single newline
      if (!markdown.endsWith('\n') || markdown.endsWith('\n\n')) {
        return false;
      }
      
      return true;
    } catch (error) {
      return false;
    }
  }
}