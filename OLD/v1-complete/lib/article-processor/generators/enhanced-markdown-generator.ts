/**
 * Enhanced Markdown Generator with Component Metadata
 * 
 * Generates markdown files with embedded component metadata in frontmatter
 * so the frontend can differentiate between tables, checklists, flowcharts, etc.
 */

import { ProcessedArticle, ComponentItem } from '../types';

export class EnhancedMarkdownGenerator {
  /**
   * Generate markdown with component metadata embedded in frontmatter
   */
  generateEnhancedMarkdown(article: ProcessedArticle): string {
    let content = this.processContent(article);
    
    // Add enhanced frontmatter with component metadata
    content = this.addEnhancedFrontmatterWithComponents(article, content);
    
    // Insert image placeholders
    content = this.insertImagePlaceholders(article, content);
    
    // Add component markers in content
    content = this.addComponentMarkers(article, content);
    
    // Clean up formatting
    content = this.cleanupFormatting(content);
    
    return content;
  }

  /**
   * Add enhanced frontmatter including component metadata
   */
  private addEnhancedFrontmatterWithComponents(article: ProcessedArticle, content: string): string {
    const frontmatter = { ...article.frontmatter };
    
    // Add standard metadata
    frontmatter.category = article.category;
    frontmatter.word_count = article.wordCount;
    frontmatter.processed_date = new Date().toISOString();
    
    // Add generated elements
    if (article.enhancedElements.tldr && !frontmatter.tldr) {
      frontmatter.tldr = article.enhancedElements.tldr;
    }
    if (article.enhancedElements.objectives && !frontmatter.learning_objectives) {
      frontmatter.learning_objectives = article.enhancedElements.objectives;
    }
    if (article.enhancedElements.keywords && !frontmatter.seo_keywords) {
      frontmatter.seo_keywords = article.enhancedElements.keywords;
    }

    // Add component metadata for frontend
    if (article.components && article.components.length > 0) {
      frontmatter.components = this.formatComponentsForFrontmatter(article.components);
    }

    // Add cross-reference data
    if (article.crossReferenceData) {
      frontmatter.topic_fingerprint = article.crossReferenceData.topic_fingerprint;
      frontmatter.named_examples = article.crossReferenceData.named_examples;
    }

    const frontmatterYAML = this.generateFrontmatterYAML(frontmatter);
    const contentWithoutFrontmatter = this.removeFrontmatter(content);
    
    return `---\n${frontmatterYAML}---\n\n${contentWithoutFrontmatter}`;
  }

  /**
   * Format components for frontmatter in a frontend-friendly way
   */
  private formatComponentsForFrontmatter(components: ComponentItem[]): any[] {
    return components.map(component => ({
      type: component.type,
      label: component.label,
      section: component.detected_at_section,
      template_link: component.template_link || null,
      // Add unique identifier for frontend targeting
      id: this.generateComponentId(component)
    }));
  }

  /**
   * Generate unique component ID for frontend targeting
   */
  private generateComponentId(component: ComponentItem): string {
    const baseId = `${component.type}-${component.detected_at_section}`
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
    
    return baseId;
  }

  /**
   * Add component markers in content for frontend identification
   */
  private addComponentMarkers(article: ProcessedArticle, content: string): string {
    if (!article.components || article.components.length === 0) {
      return content;
    }

    const lines = content.split('\n');
    const markedLines: string[] = [];
    let currentSection = '';

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      // Track current section
      const headerMatch = trimmed.match(/^(#{1,6})\s+(.+)/);
      if (headerMatch) {
        currentSection = headerMatch[2].trim();
      }

      // Add component markers based on detected components
      const componentMarker = this.getComponentMarkerForLine(
        line, 
        currentSection, 
        article.components, 
        i, 
        lines
      );

      if (componentMarker) {
        markedLines.push(componentMarker);
      }
      
      markedLines.push(line);
    }

    return markedLines.join('\n');
  }

  /**
   * Get component marker for a specific line if applicable
   */
  private getComponentMarkerForLine(
    line: string, 
    currentSection: string, 
    components: ComponentItem[], 
    lineIndex: number, 
    allLines: string[]
  ): string | null {
    const trimmed = line.trim();

    // Find components in current section
    const sectionComponents = components.filter(c => c.detected_at_section === currentSection);
    
    for (const component of sectionComponents) {
      const componentId = this.generateComponentId(component);
      
      switch (component.type) {
        case 'table':
          // Mark table separator lines
          if (trimmed.match(/^\|[\s\-\|:]+\|$/)) {
            return `<!-- component:table:${componentId} -->`;
          }
          break;
          
        case 'checklist':
          // Mark first checkbox in a checklist
          if (trimmed.match(/^\s*[-*]\s*\[\s*[x\s]?\s*\]/i)) {
            // Check if this is the first checkbox in the section
            const isFirstCheckbox = this.isFirstCheckboxInSection(lineIndex, allLines, currentSection);
            if (isFirstCheckbox) {
              return `<!-- component:checklist:${componentId} -->`;
            }
          }
          break;
          
        case 'flowchart':
          // Mark mermaid blocks or step processes
          if (trimmed === '```mermaid') {
            return `<!-- component:flowchart:${componentId} -->`;
          }
          // Mark first step in a process
          if (this.isStepByStepProcess(trimmed)) {
            const isFirstStep = this.isFirstStepInSection(lineIndex, allLines, currentSection);
            if (isFirstStep) {
              return `<!-- component:flowchart:${componentId} -->`;
            }
          }
          break;
          
        case 'template':
          // Mark template sections
          if (this.isTemplateIndicator(trimmed)) {
            return `<!-- component:template:${componentId} -->`;
          }
          break;
          
        case 'list':
          // Mark structured lists
          if (this.isStructuredListStart(trimmed, component.label)) {
            return `<!-- component:list:${componentId} -->`;
          }
          break;
      }
    }

    return null;
  }

  /**
   * Check if this is the first checkbox in the current section
   */
  private isFirstCheckboxInSection(lineIndex: number, lines: string[], currentSection: string): boolean {
    // Look backwards to see if there are other checkboxes in this section
    for (let i = lineIndex - 1; i >= 0; i--) {
      const line = lines[i].trim();
      
      // If we hit a new section, this is the first checkbox
      if (line.match(/^#{1,6}\s+(.+)/)) {
        const headerMatch = line.match(/^#{1,6}\s+(.+)/);
        if (headerMatch && headerMatch[1].trim() !== currentSection) {
          return true;
        }
      }
      
      // If we find another checkbox, this is not the first
      if (line.match(/^\s*[-*]\s*\[\s*[x\s]?\s*\]/i)) {
        return false;
      }
    }
    
    return true;
  }

  /**
   * Check if this is the first step in a process
   */
  private isFirstStepInSection(lineIndex: number, lines: string[], currentSection: string): boolean {
    // Look backwards for other steps
    for (let i = lineIndex - 1; i >= 0; i--) {
      const line = lines[i].trim();
      
      // If we hit a new section, this is the first step
      if (line.match(/^#{1,6}\s+(.+)/)) {
        const headerMatch = line.match(/^#{1,6}\s+(.+)/);
        if (headerMatch && headerMatch[1].trim() !== currentSection) {
          return true;
        }
      }
      
      // If we find another step, this is not the first
      if (this.isStepByStepProcess(line)) {
        return false;
      }
    }
    
    return true;
  }

  /**
   * Check if line indicates a step-by-step process
   */
  private isStepByStepProcess(line: string): boolean {
    const stepPatterns = [
      /^step\s+\d+/i,
      /^\d+\.\s+/,
      /^phase\s+\d+/i,
      /^stage\s+\d+/i,
      /→|->|=>/,
      /^[\d]+\)\s+/
    ];
    
    return stepPatterns.some(pattern => pattern.test(line));
  }

  /**
   * Check if line is a template indicator
   */
  private isTemplateIndicator(line: string): boolean {
    const lineLower = line.toLowerCase();
    
    if (line.match(/^#{1,6}\s+(.+)/)) {
      const templateIndicators = ['template', 'boilerplate', 'questionnaire', 'form'];
      return templateIndicators.some(indicator => lineLower.includes(indicator));
    }
    
    const contentTemplateIndicators = [
      'template:', 'boilerplate:', 'example:', 'sample:', 'copy this', 'use this format'
    ];
    
    return contentTemplateIndicators.some(indicator => lineLower.includes(indicator));
  }

  /**
   * Check if line starts a structured list
   */
  private isStructuredListStart(line: string, componentLabel: string): boolean {
    const lineLower = line.toLowerCase();
    const labelLower = componentLabel.toLowerCase();
    
    // Check if this line matches the component label
    if (line.match(/^#{1,6}\s+(.+)/)) {
      const headerMatch = line.match(/^#{1,6}\s+(.+)/);
      if (headerMatch && headerMatch[1].trim().toLowerCase() === labelLower) {
        return true;
      }
    }
    
    return false;
  }

  /**
   * Process main content
   */
  private processContent(article: ProcessedArticle): string {
    let content = article.content;
    
    if (!content.startsWith('# ')) {
      content = `# ${article.title}\n\n${content}`;
    }
    
    return content;
  }

  /**
   * Insert image placeholders
   */
  private insertImagePlaceholders(article: ProcessedArticle, content: string): string {
    const slug = this.generateSlug(article.title);
    const imagePlaceholder = `![${article.title}]({{IMAGE_PLACEHOLDER_${slug}}})`;
    
    const lines = content.split('\n');
    const insertionIndex = this.findImageInsertionPoint(lines);
    
    if (insertionIndex !== -1) {
      lines.splice(insertionIndex, 0, '', imagePlaceholder, '');
      return lines.join('\n');
    }
    
    return `${imagePlaceholder}\n\n${content}`;
  }

  /**
   * Find image insertion point
   */
  private findImageInsertionPoint(lines: string[]): number {
    let inFrontmatter = false;
    let titleIndex = -1;
    let firstParagraphIndex = -1;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      if (line === '---') {
        inFrontmatter = !inFrontmatter;
        continue;
      }
      
      if (inFrontmatter) continue;
      
      if (line.startsWith('# ') && titleIndex === -1) {
        titleIndex = i;
        continue;
      }
      
      if (titleIndex !== -1 && line.length > 50 && !line.startsWith('#') && firstParagraphIndex === -1) {
        firstParagraphIndex = i;
        break;
      }
    }
    
    return firstParagraphIndex !== -1 ? firstParagraphIndex : titleIndex + 1;
  }

  /**
   * Clean up formatting
   */
  private cleanupFormatting(content: string): string {
    let cleaned = content;
    
    cleaned = cleaned.replace(/\n{4,}/g, '\n\n\n');
    cleaned = cleaned.replace(/\n(#{1,6}\s)/g, '\n\n$1');
    cleaned = cleaned.replace(/(#{1,6}\s[^\n]+)\n([^\n#])/g, '$1\n\n$2');
    cleaned = cleaned.replace(/<!--\s*PROCESSING[^>]*-->/gi, '');
    cleaned = cleaned.replace(/\n*$/, '\n');
    
    return cleaned;
  }

  /**
   * Generate frontmatter YAML
   */
  private generateFrontmatterYAML(frontmatter: Record<string, any>): string {
    const yamlLines: string[] = [];
    
    const orderedFields = [
      'title', 'tldr', 'category', 'learning_objectives', 
      'seo_keywords', 'components', 'topic_fingerprint', 
      'named_examples', 'word_count', 'processed_date'
    ];
    
    for (const field of orderedFields) {
      if (field in frontmatter) {
        yamlLines.push(this.formatYAMLField(field, frontmatter[field]));
        delete frontmatter[field];
      }
    }
    
    for (const [key, value] of Object.entries(frontmatter)) {
      yamlLines.push(this.formatYAMLField(key, value));
    }
    
    return yamlLines.join('\n') + '\n';
  }

  /**
   * Format YAML field
   */
  private formatYAMLField(key: string, value: any): string {
    if (Array.isArray(value)) {
      if (value.length === 0) {
        return `${key}: []`;
      }
      
      // Special handling for components array
      if (key === 'components') {
        const items = value.map(item => {
          const lines = [
            `  - type: "${item.type}"`,
            `    label: "${this.escapeYAMLString(item.label)}"`,
            `    section: "${this.escapeYAMLString(item.section)}"`,
            `    id: "${item.id}"`
          ];
          if (item.template_link) {
            lines.push(`    template_link: "${item.template_link}"`);
          }
          return lines.join('\n');
        }).join('\n');
        return `${key}:\n${items}`;
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
   * Remove existing frontmatter
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
   * Generate slug
   */
  private generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
      .substring(0, 60);
  }

  /**
   * Escape YAML strings
   */
  private escapeYAMLString(str: string): string {
    return str
      .replace(/\\/g, '\\\\')
      .replace(/"/g, '\\"')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/\t/g, '\\t');
  }
}