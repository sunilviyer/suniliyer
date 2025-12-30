/**
 * Content Consolidation Processor using Ollama
 * Handles automated content consolidation and cross-reference generation
 */

import { OllamaClient } from '../clients/ollama-client';
import { MasterJSON, ConsolidationPlan, ConsolidatedContent } from '../types';
import * as fs from 'fs/promises';
import * as path from 'path';

export interface ConsolidationConfig {
  targetExample: string; // e.g., "amazon"
  outputPath: string;
  crossReferenceTemplate: string;
  learningPathIntegration: boolean;
}

export class ContentConsolidator {
  private ollama: OllamaClient;

  constructor(ollamaConfig?: any) {
    this.ollama = new OllamaClient(ollamaConfig);
  }

  /**
   * Generate consolidated content for a specific example (e.g., Amazon)
   */
  async consolidateExample(
    masterJSON: MasterJSON,
    config: ConsolidationConfig
  ): Promise<ConsolidatedContent> {
    
    // Extract articles containing the target example
    const relevantArticles = this.extractRelevantArticles(masterJSON, config.targetExample);
    
    // Generate consolidated content using Ollama
    const consolidatedContent = await this.generateConsolidatedContent(
      relevantArticles,
      config.targetExample
    );
    
    // Generate cross-reference updates
    const crossReferences = await this.generateCrossReferences(
      relevantArticles,
      consolidatedContent.slug
    );
    
    // Generate learning path integration
    const learningPathData = config.learningPathIntegration 
      ? await this.generateLearningPathIntegration(consolidatedContent)
      : null;

    return {
      ...consolidatedContent,
      cross_references: crossReferences,
      learning_path_data: learningPathData,
      articles_to_update: relevantArticles.map(a => a.file_status.suggested_slug)
    };
  }

  /**
   * Extract articles that reference a specific example
   */
  private extractRelevantArticles(masterJSON: MasterJSON, targetExample: string) {
    return masterJSON.articles.filter(article => 
      article.cross_reference_data.named_examples.includes(targetExample.toLowerCase())
    );
  }

  /**
   * Generate consolidated content using Ollama
   */
  private async generateConsolidatedContent(articles: any[], targetExample: string) {
    const prompt = `You are an expert AI governance content writer. Create a comprehensive case study article about ${targetExample} and AI governance.

CONTEXT: The following articles all reference ${targetExample} in different contexts. Create a single, comprehensive case study that consolidates all these references.

ARTICLES DATA:
${JSON.stringify(articles.map(a => ({
  title: a.extracted_data.title,
  slug: a.file_status.suggested_slug,
  category: a.file_status.category,
  topic_fingerprint: a.cross_reference_data.topic_fingerprint,
  named_examples: a.cross_reference_data.named_examples
})), null, 2)}

REQUIREMENTS:
1. Create a comprehensive case study title
2. Write a compelling introduction
3. Identify 4-6 major case studies/scenarios involving ${targetExample}
4. Extract governance lessons from each scenario
5. Provide implementation recommendations
6. Include learning objectives
7. Generate SEO keywords
8. Suggest related articles for cross-referencing

RESPONSE FORMAT (JSON):
{
  "title": "Comprehensive case study title",
  "slug": "kebab-case-slug",
  "category": "Most appropriate category",
  "tldr": "Brief summary",
  "learning_objectives": ["objective 1", "objective 2", "objective 3"],
  "seo_keywords": ["keyword1", "keyword2", "keyword3"],
  "case_studies": [
    {
      "title": "Case Study 1 Title",
      "description": "Brief description",
      "governance_lessons": ["lesson 1", "lesson 2"],
      "referenced_in_articles": ["article-slug-1", "article-slug-2"]
    }
  ],
  "implementation_framework": {
    "best_practices": ["practice 1", "practice 2"],
    "risk_mitigation": ["mitigation 1", "mitigation 2"],
    "monitoring_recommendations": ["recommendation 1", "recommendation 2"]
  },
  "content_outline": [
    "Section 1: Introduction",
    "Section 2: Case Study 1",
    "Section 3: Case Study 2",
    "Section 4: Governance Framework",
    "Section 5: Implementation Guide",
    "Section 6: Conclusion"
  ]
}

Respond with valid JSON only.`;

    const response = await this.ollama.generate(prompt);
    return this.parseConsolidatedContentResponse(response);
  }

  /**
   * Generate cross-reference updates for existing articles
   */
  private async generateCrossReferences(articles: any[], consolidatedSlug: string) {
    const prompt = `Generate cross-reference updates for articles that should now reference the consolidated case study.

CONSOLIDATED ARTICLE: ${consolidatedSlug}

ARTICLES TO UPDATE:
${JSON.stringify(articles.map(a => ({
  slug: a.file_status.suggested_slug,
  title: a.extracted_data.title,
  category: a.file_status.category
})), null, 2)}

TASK: For each article, generate a brief cross-reference text that replaces the detailed example with a reference to the consolidated case study.

RESPONSE FORMAT (JSON):
{
  "updates": [
    {
      "article_slug": "article-to-update",
      "cross_reference_text": "For a detailed analysis of [example], see our comprehensive [Consolidated Article Title](link).",
      "section_context": "Where this reference should appear",
      "replacement_strategy": "replace_detailed_example" | "add_see_also" | "brief_mention_plus_link"
    }
  ]
}

Respond with valid JSON only.`;

    const response = await this.ollama.generate(prompt);
    return this.parseCrossReferenceResponse(response);
  }

  /**
   * Generate learning path integration data
   */
  private async generateLearningPathIntegration(consolidatedContent: any) {
    const prompt = `Analyze this consolidated case study and determine its optimal placement in learning paths.

CONSOLIDATED CONTENT:
${JSON.stringify(consolidatedContent, null, 2)}

LEARNING PATHS:
1. Foundation Path (Understanding AI)
2. Risk & Ethics Path (Responsible AI Development)  
3. Legal & Compliance Path (Navigating AI Regulation)
4. Implementation Path (Building AI Governance)
5. Application Path (Industry & Practical Implementation)

TASK: Determine which learning path(s) this article belongs to and its position within those paths.

RESPONSE FORMAT (JSON):
{
  "primary_path": {
    "path_name": "Risk & Ethics Path",
    "path_number": 2,
    "position_in_path": 15,
    "prerequisite_articles": ["article-slug-1", "article-slug-2"],
    "follow_up_articles": ["article-slug-3", "article-slug-4"]
  },
  "secondary_paths": [
    {
      "path_name": "Implementation Path",
      "path_number": 4,
      "position_in_path": 8,
      "context": "Referenced as case study example"
    }
  ],
  "related_articles": [
    {
      "slug": "related-article-1",
      "relationship": "prerequisite" | "follow_up" | "parallel" | "case_study",
      "reason": "Explains foundational concepts needed to understand this case study"
    }
  ]
}

Respond with valid JSON only.`;

    const response = await this.ollama.generate(prompt);
    return this.parseLearningPathResponse(response);
  }

  /**
   * Update existing markdown files with cross-references
   */
  async updateArticlesWithCrossReferences(
    crossReferences: any[],
    articlesPath: string
  ): Promise<void> {
    for (const update of crossReferences) {
      const filePath = path.join(articlesPath, `${update.article_slug}.md`);
      
      try {
        const content = await fs.readFile(filePath, 'utf-8');
        const updatedContent = this.applyCrossReferenceUpdate(content, update);
        await fs.writeFile(filePath, updatedContent, 'utf-8');
        
        console.log(`✅ Updated cross-references in ${update.article_slug}.md`);
      } catch (error) {
        console.warn(`⚠️  Failed to update ${update.article_slug}.md:`, error);
      }
    }
  }

  /**
   * Apply cross-reference update to article content
   */
  private applyCrossReferenceUpdate(content: string, update: any): string {
    // Implementation depends on update.replacement_strategy
    switch (update.replacement_strategy) {
      case 'replace_detailed_example':
        // Replace detailed example with brief mention + link
        return this.replaceDetailedExample(content, update);
      
      case 'add_see_also':
        // Add "See Also" section
        return this.addSeeAlsoSection(content, update);
      
      case 'brief_mention_plus_link':
        // Replace with brief mention and link
        return this.addBriefMentionWithLink(content, update);
      
      default:
        return content;
    }
  }

  private replaceDetailedExample(content: string, update: any): string {
    // Find and replace detailed examples with cross-reference
    // This would need specific implementation based on content patterns
    return content + `\n\n> ${update.cross_reference_text}\n`;
  }

  private addSeeAlsoSection(content: string, update: any): string {
    // Add "See Also" section before conclusion
    const seeAlsoSection = `\n## See Also\n\n${update.cross_reference_text}\n`;
    
    // Insert before conclusion or at end
    if (content.includes('## Conclusion')) {
      return content.replace('## Conclusion', seeAlsoSection + '\n## Conclusion');
    } else {
      return content + seeAlsoSection;
    }
  }

  private addBriefMentionWithLink(content: string, update: any): string {
    // Add brief mention with link in relevant section
    return content + `\n\n${update.cross_reference_text}\n`;
  }

  /**
   * Parse consolidated content response from Ollama
   */
  private parseConsolidatedContentResponse(response: string): any {
    try {
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
      return JSON.parse(response);
    } catch (error) {
      console.warn('Failed to parse consolidated content response:', error);
      return {
        title: "Consolidated Case Study",
        slug: "consolidated-case-study",
        category: "Case Studies",
        case_studies: [],
        implementation_framework: {},
        content_outline: []
      };
    }
  }

  private parseCrossReferenceResponse(response: string): any {
    try {
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
      return JSON.parse(response);
    } catch (error) {
      console.warn('Failed to parse cross-reference response:', error);
      return { updates: [] };
    }
  }

  private parseLearningPathResponse(response: string): any {
    try {
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
      return JSON.parse(response);
    } catch (error) {
      console.warn('Failed to parse learning path response:', error);
      return {
        primary_path: null,
        secondary_paths: [],
        related_articles: []
      };
    }
  }
}

// ConsolidatedContent type is now imported from ../types