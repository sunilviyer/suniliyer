/**
 * Component Detector for Article Content Processor
 * 
 * Detects interactive UI components within article content including:
 * - Checklists ([ ] patterns and "Checklist" headers)
 * - Markdown tables
 * - Flowcharts (MermaidJS blocks and step-by-step processes)
 * - Templates (code blocks or sections meant for copying)
 * - Structured lists (Pros & Cons, Key Risk Factors, etc.)
 */

import { ComponentDetector as IComponentDetector } from '../interfaces';
import { ComponentItem, ComponentType } from '../types';

export class ComponentDetector implements IComponentDetector {
  
  /**
   * Detects all components in the content
   */
  detectAllComponents(content: string): ComponentItem[] {
    const components: ComponentItem[] = [];
    
    components.push(...this.detectChecklists(content));
    components.push(...this.detectTables(content));
    components.push(...this.detectFlowcharts(content));
    components.push(...this.detectTemplates(content));
    components.push(...this.detectStructuredLists(content));
    
    return components;
  }

  /**
   * Detects checklists with [ ] patterns and "Checklist" headers
   * Excludes internal publishing checklists
   */
  detectChecklists(content: string): ComponentItem[] {
    const components: ComponentItem[] = [];
    const lines = content.split('\n');
    let currentSection = 'Introduction';
    const detectedSections = new Set<string>();
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Track current section
      if (line.match(/^#{1,6}\s+(.+)/)) {
        const headerMatch = line.match(/^#{1,6}\s+(.+)/);
        if (headerMatch) {
          currentSection = headerMatch[1].trim();
        }
      }
      
      // Skip internal publishing checklists
      if (this.isInternalPublishingChecklist(currentSection, line)) {
        continue;
      }
      
      // Detect explicit checklist headers
      if (line.toLowerCase().includes('checklist') && line.match(/^#{1,6}\s+(.+)/)) {
        const headerMatch = line.match(/^#{1,6}\s+(.+)/);
        if (headerMatch) {
          const newSection = headerMatch[1].trim();
          const sectionKey = `${newSection}:checklist`;
          if (!detectedSections.has(sectionKey)) {
            components.push({
              type: 'checklist',
              label: newSection,
              detected_at_section: newSection
            });
            detectedSections.add(sectionKey);
          }
        }
        continue;
      }
      
      // Detect checkbox patterns
      if (line.match(/^\s*[-*]\s*\[\s*[x\s]?\s*\]/i)) {
        const sectionKey = `${currentSection}:checklist`;  // Use same key as header detection
        if (!detectedSections.has(sectionKey)) {
          // Look for a meaningful label - check previous lines for context
          let label = this.findChecklistLabel(lines, i, currentSection);
          
          components.push({
            type: 'checklist',
            label: label,
            detected_at_section: currentSection
          });
          detectedSections.add(sectionKey);
        }
      }
    }
    
    return components;
  }

  /**
   * Detects markdown tables and captures their section location
   */
  detectTables(content: string): ComponentItem[] {
    const components: ComponentItem[] = [];
    const lines = content.split('\n');
    let currentSection = 'Introduction';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Track current section
      if (line.match(/^#{1,6}\s+(.+)/)) {
        const headerMatch = line.match(/^#{1,6}\s+(.+)/);
        if (headerMatch) {
          currentSection = headerMatch[1].trim();
        }
      }
      
      // Detect table separator line (e.g., |---|---|)
      if (line.match(/^\|[\s\-\|:]+\|$/)) {
        // Look for table header in previous line
        if (i > 0) {
          const headerLine = lines[i - 1].trim();
          if (headerLine.includes('|')) {
            const label = this.generateTableLabel(headerLine, currentSection);
            components.push({
              type: 'table',
              label: label,
              detected_at_section: currentSection
            });
          }
        }
      }
    }
    
    return components;
  }

  /**
   * Detects flowcharts (MermaidJS blocks and step-by-step processes)
   */
  detectFlowcharts(content: string): ComponentItem[] {
    const components: ComponentItem[] = [];
    const lines = content.split('\n');
    let currentSection = 'Introduction';
    let inCodeBlock = false;
    let codeBlockType = '';
    const detectedSections = new Set<string>();
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Track current section
      if (line.match(/^#{1,6}\s+(.+)/)) {
        const headerMatch = line.match(/^#{1,6}\s+(.+)/);
        if (headerMatch) {
          currentSection = headerMatch[1].trim();
        }
      }
      
      // Detect code block start/end
      if (line.startsWith('```')) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          codeBlockType = line.substring(3).trim();
          
          // Detect MermaidJS blocks
          if (codeBlockType === 'mermaid') {
            const sectionKey = `${currentSection}:mermaid`;
            if (!detectedSections.has(sectionKey)) {
              components.push({
                type: 'flowchart',
                label: `${currentSection} Flowchart`,
                detected_at_section: currentSection
              });
              detectedSections.add(sectionKey);
            }
          }
        } else {
          inCodeBlock = false;
          codeBlockType = '';
        }
        continue;
      }
      
      // Detect step-by-step processes
      if (!inCodeBlock && this.isStepByStepProcess(line)) {
        const sectionKey = `${currentSection}:process`;
        if (!detectedSections.has(sectionKey)) {
          const label = this.generateFlowchartLabel(lines, i, currentSection);
          
          components.push({
            type: 'flowchart',
            label: label,
            detected_at_section: currentSection
          });
          detectedSections.add(sectionKey);
        }
      }
    }
    
    return components;
  }

  /**
   * Detects templates (code blocks or sections meant for copying)
   * Generates downloadable template links
   */
  detectTemplates(content: string): ComponentItem[] {
    const components: ComponentItem[] = [];
    const lines = content.split('\n');
    let currentSection = 'Introduction';
    const detectedSections = new Set<string>();
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Track current section
      if (line.match(/^#{1,6}\s+(.+)/)) {
        const headerMatch = line.match(/^#{1,6}\s+(.+)/);
        if (headerMatch) {
          currentSection = headerMatch[1].trim();
        }
      }
      
      // Detect template indicators - prioritize headers over content
      if (this.isTemplateIndicator(line)) {
        const label = this.extractTemplateLabel(line);
        const sectionKey = `${currentSection}:${label}`;
        
        if (!detectedSections.has(sectionKey)) {
          const templateLink = this.generateTemplateLink(label);
          
          components.push({
            type: 'template',
            label: label,
            detected_at_section: currentSection,
            template_link: templateLink
          });
          detectedSections.add(sectionKey);
        }
      }
    }
    
    return components;
  }

  /**
   * Detects structured lists (Pros & Cons, Key Risk Factors, etc.)
   * Excludes standard body paragraphs
   */
  detectStructuredLists(content: string): ComponentItem[] {
    const components: ComponentItem[] = [];
    const lines = content.split('\n');
    let currentSection = 'Introduction';
    const detectedSections = new Set<string>();
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Track current section
      if (line.match(/^#{1,6}\s+(.+)/)) {
        const headerMatch = line.match(/^#{1,6}\s+(.+)/);
        if (headerMatch) {
          currentSection = headerMatch[1].trim();
        }
      }
      
      // Detect structured list headers - prioritize actual headers
      if (this.isStructuredListHeader(line)) {
        const label = this.extractStructuredListLabel(line);
        const sectionKey = `${currentSection}:${label}`;
        
        if (!detectedSections.has(sectionKey)) {
          components.push({
            type: 'list',
            label: label,
            detected_at_section: currentSection
          });
          detectedSections.add(sectionKey);
        }
      }
    }
    
    return components;
  }

  // Helper methods

  private isInternalPublishingChecklist(section: string, line: string): boolean {
    const internalIndicators = [
      'review checklist',
      'publishing checklist',
      'editorial checklist',
      'final review',
      'completeness'
    ];
    
    const sectionLower = section.toLowerCase();
    const lineLower = line.toLowerCase();
    
    return internalIndicators.some(indicator => 
      sectionLower.includes(indicator) || lineLower.includes(indicator)
    );
  }

  private findChecklistLabel(lines: string[], currentIndex: number, currentSection: string): string {
    // Look backwards for a meaningful header or context
    for (let i = currentIndex - 1; i >= Math.max(0, currentIndex - 5); i--) {
      const line = lines[i].trim();
      
      // Check for header (but not the current section header)
      const headerMatch = line.match(/^#{1,6}\s+(.+)/);
      if (headerMatch) {
        const headerText = headerMatch[1].trim();
        if (headerText !== currentSection) {
          return headerText;
        }
      }
      
      // Check for bold text that might be a label
      const boldMatch = line.match(/\*\*(.+?)\*\*/);
      if (boldMatch) {
        return boldMatch[1].trim();
      }
    }
    
    // Default to section-based label
    return currentSection;
  }

  private generateTableLabel(headerLine: string, section: string): string {
    // Extract meaningful content from table header
    const headers = headerLine.split('|').map(h => h.trim()).filter(h => h.length > 0);
    
    if (headers.length >= 2) {
      return `${headers[0]} vs ${headers[1]} Table`;
    }
    
    return `${section} Table`;
  }

  private isStepByStepProcess(line: string): boolean {
    const stepPatterns = [
      /^step\s+\d+/i,
      /^\d+\.\s+/,
      /^phase\s+\d+/i,
      /^stage\s+\d+/i,
      /→|->|=>/, // Arrow indicators
      /^[\d]+\)\s+/
    ];
    
    return stepPatterns.some(pattern => pattern.test(line));
  }

  private generateFlowchartLabel(lines: string[], currentIndex: number, section: string): string {
    // Look for context around the step
    for (let i = currentIndex - 1; i >= Math.max(0, currentIndex - 3); i--) {
      const line = lines[i].trim();
      const headerMatch = line.match(/^#{1,6}\s+(.+)/);
      if (headerMatch) {
        const headerText = headerMatch[1].trim();
        if (headerText !== section) {
          return `${headerText} Process`;
        }
      }
    }
    
    return `${section} Process`;
  }

  private isTemplateIndicator(line: string): boolean {
    const lineLower = line.toLowerCase();
    
    // Prioritize headers with template indicators
    if (line.match(/^#{1,6}\s+(.+)/)) {
      const templateIndicators = [
        'template',
        'boilerplate',
        'questionnaire',
        'form'
      ];
      return templateIndicators.some(indicator => lineLower.includes(indicator));
    }
    
    // For non-headers, look for specific template patterns
    const contentTemplateIndicators = [
      'template:',
      'boilerplate:',
      'example:',
      'sample:',
      'copy this',
      'use this format'
    ];
    
    return contentTemplateIndicators.some(indicator => lineLower.includes(indicator));
  }

  private extractTemplateLabel(line: string): string {
    // Try to extract meaningful label from template indicator
    const headerMatch = line.match(/^#{1,6}\s+(.+)/);
    if (headerMatch) {
      return headerMatch[1].trim();
    }
    
    const boldMatch = line.match(/\*\*(.+?)\*\*/);
    if (boldMatch) {
      return boldMatch[1].trim();
    }
    
    // Extract from common patterns
    const colonMatch = line.match(/(.+?):/);
    if (colonMatch) {
      return colonMatch[1].trim();
    }
    
    return line.trim();
  }

  private generateTemplateLink(label: string): string {
    // Generate a downloadable template link based on the label
    const slug = label.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
    
    return `/templates/${slug}.md`;
  }

  private isStructuredListHeader(line: string): boolean {
    // Prioritize headers
    if (line.match(/^#{1,6}\s+(.+)/)) {
      const structuredListPatterns = [
        /pros?\s+(&|and)\s+cons?/i,
        /advantages?\s+(&|and)\s+disadvantages?/i,
        /benefits?\s+(&|and)\s+(risks?|drawbacks?)/i,
        /key\s+(risk\s+)?factors?/i,
        /requirements?/i,
        /criteria/i,
        /principles?/i,
        /guidelines?/i,
        /best\s+practices?/i,
        /common\s+(mistakes?|errors?)/i,
        /do's?\s+(&|and)\s+don'ts?/i
      ];
      
      return structuredListPatterns.some(pattern => pattern.test(line));
    }
    
    // For non-headers, only match very specific patterns
    const contentPatterns = [
      /^\*\*pros?\s+(&|and)\s+cons?\*\*/i,
      /^pros?\s*:/i,
      /^cons?\s*:/i,
      /^advantages?\s*:/i,
      /^disadvantages?\s*:/i
    ];
    
    return contentPatterns.some(pattern => pattern.test(line));
  }

  private extractStructuredListLabel(line: string): string {
    const headerMatch = line.match(/^#{1,6}\s+(.+)/);
    if (headerMatch) {
      return headerMatch[1].trim();
    }
    
    const boldMatch = line.match(/\*\*(.+?)\*\*/);
    if (boldMatch) {
      return boldMatch[1].trim();
    }
    
    return line.trim();
  }
}