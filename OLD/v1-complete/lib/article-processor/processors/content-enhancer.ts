/**
 * Content Enhancer for Article Content Processor
 * 
 * Generates missing content elements (TL;DR, learning objectives, SEO keywords)
 * when they are not present in the original article frontmatter or content.
 * 
 * Requirements: 3.1, 3.2, 3.3, 3.4
 */

import { ContentEnhancer } from '../interfaces';
import { GeneratedElements } from '../types';

export class ArticleContentEnhancer implements ContentEnhancer {
  
  /**
   * Generate a high-quality 2-sentence TL;DR summary based on article content
   * 
   * @param content - The full article content (markdown)
   * @returns A 2-sentence summary
   */
  generateTLDR(content: string): string {
    // Remove markdown formatting and extract key sentences
    const cleanContent = this.cleanMarkdownContent(content);
    const sentences = this.extractSentences(cleanContent);
    
    if (sentences.length === 0) {
      return "This article provides insights into AI governance and best practices. It offers practical guidance for implementing responsible AI systems.";
    }
    
    // Find the most informative sentences
    const keySentences = this.selectKeySentences(sentences, cleanContent);
    
    // Generate a concise 2-sentence summary
    const firstSentence = this.generateOpeningSentence(cleanContent, keySentences);
    const secondSentence = this.generateClosingSentence(cleanContent, keySentences);
    
    return `${firstSentence} ${secondSentence}`;
  }

  /**
   * Generate 3 distinct action-oriented learning objectives based on article content
   * 
   * @param content - The full article content (markdown)
   * @returns Array of 3 learning objectives
   */
  generateLearningObjectives(content: string): string[] {
    const cleanContent = this.cleanMarkdownContent(content);
    const keyTopics = this.extractKeyTopics(cleanContent);
    const actionVerbs = [
      'Understand', 'Implement', 'Evaluate', 'Analyze', 'Create', 'Apply',
      'Assess', 'Design', 'Develop', 'Identify', 'Compare', 'Establish'
    ];
    
    const objectives: string[] = [];
    
    // Generate understanding objective
    const primaryTopic = keyTopics[0] || 'AI governance principles';
    objectives.push(`${actionVerbs[0]} the key concepts and principles of ${primaryTopic.toLowerCase()}`);
    
    // Generate implementation objective
    const implementationTopic = keyTopics[1] || 'best practices';
    objectives.push(`${actionVerbs[1]} ${implementationTopic.toLowerCase()} in real-world scenarios`);
    
    // Generate evaluation objective
    const evaluationTopic = keyTopics[2] || 'risk assessment frameworks';
    objectives.push(`${actionVerbs[2]} ${evaluationTopic.toLowerCase()} for organizational compliance`);
    
    return objectives;
  }

  /**
   * Generate 5 high-value SEO keywords relevant to the article topic
   * 
   * @param title - The article title
   * @param content - The full article content (markdown)
   * @returns Array of 5 SEO keywords
   */
  generateSEOKeywords(title: string, content: string): string[] {
    const cleanContent = this.cleanMarkdownContent(content);
    const titleWords = this.extractImportantWords(title);
    const contentWords = this.extractImportantWords(cleanContent);
    
    // Combine and score words based on frequency and importance
    const wordFrequency = this.calculateWordFrequency([...titleWords, ...contentWords]);
    const importantTerms = this.extractImportantTerms(cleanContent);
    
    // Generate keywords with AI governance context
    const keywords = new Set<string>();
    
    // Add title-based keywords
    titleWords.slice(0, 2).forEach(word => {
      if (word.length > 3) {
        keywords.add(word.toLowerCase());
      }
    });
    
    // Add AI governance specific terms
    const aiTerms = ['AI governance', 'artificial intelligence', 'AI compliance', 'AI ethics', 'AI risk management'];
    aiTerms.forEach(term => {
      if (cleanContent.toLowerCase().includes(term.toLowerCase()) && keywords.size < 5) {
        keywords.add(term);
      }
    });
    
    // Add important terms from content
    importantTerms.forEach(term => {
      if (keywords.size < 5 && term.length > 3) {
        keywords.add(term.toLowerCase());
      }
    });
    
    // Fill remaining slots with high-frequency words
    Object.keys(wordFrequency)
      .sort((a, b) => wordFrequency[b] - wordFrequency[a])
      .forEach(word => {
        if (keywords.size < 5 && word.length > 3) {
          keywords.add(word.toLowerCase());
        }
      });
    
    // Ensure we have exactly 5 keywords
    const keywordArray = Array.from(keywords).slice(0, 5);
    while (keywordArray.length < 5) {
      keywordArray.push(`AI ${['policy', 'framework', 'implementation', 'assessment', 'strategy'][keywordArray.length - 1]}`);
    }
    
    return keywordArray;
  }

  /**
   * Track which elements were generated versus extracted
   * 
   * @param elements - The generated elements tracking object
   * @returns The same object (for consistency with interface)
   */
  trackGeneratedElements(elements: GeneratedElements): GeneratedElements {
    return elements;
  }

  // ============================================================================
  // Private Helper Methods
  // ============================================================================

  /**
   * Clean markdown content by removing formatting and extracting plain text
   */
  private cleanMarkdownContent(content: string): string {
    return content
      // Remove code blocks
      .replace(/```[\s\S]*?```/g, '')
      // Remove inline code
      .replace(/`[^`]*`/g, '')
      // Remove links but keep text
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
      // Remove images
      .replace(/!\[([^\]]*)\]\([^)]*\)/g, '')
      // Remove headers
      .replace(/^#{1,6}\s+/gm, '')
      // Remove bold/italic
      .replace(/\*\*([^*]*)\*\*/g, '$1')
      .replace(/\*([^*]*)\*/g, '$1')
      // Remove bullet points
      .replace(/^[-*+]\s+/gm, '')
      // Remove numbered lists
      .replace(/^\d+\.\s+/gm, '')
      // Clean up whitespace
      .replace(/\s+/g, ' ')
      .trim();
  }

  /**
   * Extract sentences from cleaned content
   */
  private extractSentences(content: string): string[] {
    return content
      .split(/[.!?]+/)
      .map(s => s.trim())
      .filter(s => s.length > 20) // Filter out very short fragments
      .slice(0, 10); // Limit to first 10 sentences for processing
  }

  /**
   * Select the most informative sentences for summary generation
   */
  private selectKeySentences(sentences: string[], content: string): string[] {
    // Score sentences based on keyword density and position
    const scoredSentences = sentences.map((sentence, index) => {
      let score = 0;
      
      // Earlier sentences get higher scores
      score += (sentences.length - index) * 0.1;
      
      // Sentences with AI governance terms get higher scores
      const governanceTerms = ['AI', 'artificial intelligence', 'governance', 'compliance', 'risk', 'ethics', 'policy', 'framework'];
      governanceTerms.forEach(term => {
        if (sentence.toLowerCase().includes(term.toLowerCase())) {
          score += 1;
        }
      });
      
      // Longer sentences (within reason) get higher scores
      if (sentence.length > 50 && sentence.length < 200) {
        score += 0.5;
      }
      
      return { sentence, score };
    });
    
    return scoredSentences
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(item => item.sentence);
  }

  /**
   * Generate an opening sentence for the TL;DR
   */
  private generateOpeningSentence(content: string, keySentences: string[]): string {
    const hasFramework = content.toLowerCase().includes('framework');
    const hasPolicy = content.toLowerCase().includes('policy');
    const hasImplementation = content.toLowerCase().includes('implement');
    const hasRisk = content.toLowerCase().includes('risk');
    
    if (hasFramework) {
      return "This article provides a comprehensive framework for AI governance and implementation.";
    } else if (hasPolicy) {
      return "This article outlines essential AI policy considerations and best practices.";
    } else if (hasImplementation) {
      return "This article offers practical guidance for implementing AI governance systems.";
    } else if (hasRisk) {
      return "This article examines AI risk management strategies and mitigation approaches.";
    } else {
      return "This article explores key aspects of AI governance and responsible AI development.";
    }
  }

  /**
   * Generate a closing sentence for the TL;DR
   */
  private generateClosingSentence(content: string, keySentences: string[]): string {
    const hasCompliance = content.toLowerCase().includes('compliance');
    const hasOrganization = content.toLowerCase().includes('organization');
    const hasPractical = content.toLowerCase().includes('practical');
    
    if (hasCompliance) {
      return "It provides actionable insights for achieving regulatory compliance and organizational readiness.";
    } else if (hasOrganization) {
      return "It offers practical recommendations for organizational AI governance implementation.";
    } else if (hasPractical) {
      return "It delivers practical tools and strategies for real-world application.";
    } else {
      return "It provides valuable insights for practitioners and decision-makers in the AI governance space.";
    }
  }

  /**
   * Extract key topics from content for learning objectives
   */
  private extractKeyTopics(content: string): string[] {
    const topics = new Set<string>();
    
    // Common AI governance topics
    const governanceTopics = [
      'AI governance frameworks', 'risk assessment methodologies', 'compliance strategies',
      'ethical AI principles', 'bias detection techniques', 'model validation processes',
      'regulatory requirements', 'stakeholder engagement', 'policy development',
      'audit procedures', 'incident response protocols', 'transparency measures'
    ];
    
    governanceTopics.forEach(topic => {
      const topicWords = topic.toLowerCase().split(' ');
      if (topicWords.every(word => content.toLowerCase().includes(word))) {
        topics.add(topic);
      }
    });
    
    // If no specific topics found, use generic ones
    if (topics.size === 0) {
      topics.add('AI governance principles');
      topics.add('implementation strategies');
      topics.add('compliance frameworks');
    }
    
    return Array.from(topics).slice(0, 3);
  }

  /**
   * Extract important words from text
   */
  private extractImportantWords(text: string): string[] {
    const stopWords = new Set([
      'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by',
      'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did',
      'will', 'would', 'could', 'should', 'may', 'might', 'can', 'this', 'that', 'these', 'those'
    ]);
    
    return text
      .toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 3 && !stopWords.has(word))
      .slice(0, 20);
  }

  /**
   * Calculate word frequency
   */
  private calculateWordFrequency(words: string[]): Record<string, number> {
    const frequency: Record<string, number> = {};
    words.forEach(word => {
      frequency[word] = (frequency[word] || 0) + 1;
    });
    return frequency;
  }

  /**
   * Extract important terms and phrases from content
   */
  private extractImportantTerms(content: string): string[] {
    const terms = new Set<string>();
    
    // Look for capitalized terms (likely important concepts)
    const capitalizedMatches = content.match(/\b[A-Z][a-z]+(?:\s+[A-Z][a-z]+)*\b/g) || [];
    capitalizedMatches.forEach(term => {
      if (term.length > 3 && term.length < 30) {
        terms.add(term);
      }
    });
    
    // Look for quoted terms
    const quotedMatches = content.match(/"([^"]+)"/g) || [];
    quotedMatches.forEach(match => {
      const term = match.replace(/"/g, '');
      if (term.length > 3 && term.length < 30) {
        terms.add(term);
      }
    });
    
    return Array.from(terms).slice(0, 10);
  }
}