/**
 * Learning Path Enhancement Processor
 * Adds learning path metadata to articles for navigation and related content
 */

import { OllamaClient } from '../clients/ollama-client';
import { MasterJSON } from '../types';
import * as fs from 'fs/promises';
import * as path from 'path';

export interface LearningPath {
  id: number;
  name: string;
  description: string;
  target_audience: string;
  estimated_time: string;
  articles: string[]; // Array of article slugs in order
}

export interface ArticleLearningPathData {
  primary_path: {
    path_id: number;
    path_name: string;
    position: number;
    total_articles: number;
    previous_article?: string;
    next_article?: string;
    progress_percentage: number;
  };
  secondary_paths?: Array<{
    path_id: number;
    path_name: string;
    position: number;
    context: string; // "prerequisite", "reference", "advanced"
  }>;
  related_in_path: string[]; // Related articles within the same path
  cross_path_related: string[]; // Related articles from other paths
}

export class LearningPathEnhancer {
  private ollama: OllamaClient;
  
  // Define the 5 learning paths
  private learningPaths: LearningPath[] = [
    {
      id: 1,
      name: "Foundation Path",
      description: "Understanding AI - Basic concepts to technical understanding",
      target_audience: "Beginners, executives, non-technical stakeholders",
      estimated_time: "8-10 hours",
      articles: []
    },
    {
      id: 2,
      name: "Risk & Ethics Path", 
      description: "Responsible AI Development - Risk identification to mitigation",
      target_audience: "Risk managers, ethics officers, compliance teams",
      estimated_time: "12-15 hours",
      articles: []
    },
    {
      id: 3,
      name: "Legal & Compliance Path",
      description: "Navigating AI Regulation - Current laws to compliance strategies", 
      target_audience: "Legal teams, compliance officers, policy makers",
      estimated_time: "10-12 hours",
      articles: []
    },
    {
      id: 4,
      name: "Implementation Path",
      description: "Building AI Governance - Strategy to monitoring & improvement",
      target_audience: "AI governance professionals, project managers, technical leads",
      estimated_time: "20-25 hours", 
      articles: []
    },
    {
      id: 5,
      name: "Application Path",
      description: "Industry & Practical Implementation - Context to templates",
      target_audience: "Industry practitioners, consultants, implementation teams",
      estimated_time: "8-10 hours",
      articles: []
    }
  ];

  constructor(ollamaConfig?: any) {
    this.ollama = new OllamaClient(ollamaConfig);
  }

  /**
   * Enhance all articles with learning path data
   */
  async enhanceAllArticles(masterJSON: MasterJSON): Promise<void> {
    // First, organize articles into learning paths using Ollama
    await this.organizeLearningPaths(masterJSON);
    
    // Then enhance each article with learning path metadata
    for (const article of masterJSON.articles) {
      const learningPathData = this.generateLearningPathData(article.file_status.suggested_slug);
      await this.updateArticleWithLearningPath(article.file_status.suggested_slug, learningPathData);
    }
  }

  /**
   * Use Ollama to organize articles into learning paths
   */
  private async organizeLearningPaths(masterJSON: MasterJSON): Promise<void> {
    const prompt = `You are an AI education expert. Organize these AI governance articles into 5 learning paths.

LEARNING PATHS:
1. Foundation Path (Understanding AI) - Basic concepts → Technical understanding → Business implications
2. Risk & Ethics Path (Responsible AI Development) - Risk identification → Impact analysis → Mitigation strategies  
3. Legal & Compliance Path (Navigating AI Regulation) - Current laws → Emerging regulations → Compliance strategies
4. Implementation Path (Building AI Governance) - Strategy → Framework selection → Implementation → Monitoring
5. Application Path (Industry & Practical Implementation) - Industry context → Specific requirements → Practical tools

ARTICLES TO ORGANIZE:
${JSON.stringify(masterJSON.articles.map(a => ({
  slug: a.file_status.suggested_slug,
  title: a.extracted_data.title,
  category: a.file_status.category,
  topic_fingerprint: a.cross_reference_data.topic_fingerprint.slice(0, 3)
})), null, 2)}

REQUIREMENTS:
1. Assign each article to its PRIMARY learning path
2. Order articles within each path for optimal learning progression
3. Identify articles that serve as SECONDARY references in other paths
4. Ensure logical prerequisite relationships

RESPONSE FORMAT (JSON):
{
  "path_assignments": {
    "1": {
      "name": "Foundation Path",
      "articles": ["article-slug-1", "article-slug-2", "article-slug-3"],
      "progression_logic": "Basic concepts first, then technical details"
    },
    "2": {
      "name": "Risk & Ethics Path", 
      "articles": ["article-slug-4", "article-slug-5"],
      "progression_logic": "Risk identification before mitigation"
    },
    "3": {
      "name": "Legal & Compliance Path",
      "articles": ["article-slug-6", "article-slug-7"],
      "progression_logic": "Current law before emerging regulation"
    },
    "4": {
      "name": "Implementation Path",
      "articles": ["article-slug-8", "article-slug-9"],
      "progression_logic": "Strategy before implementation"
    },
    "5": {
      "name": "Application Path",
      "articles": ["article-slug-10", "article-slug-11"],
      "progression_logic": "Industry context before practical tools"
    }
  },
  "secondary_references": [
    {
      "article": "article-slug-1",
      "referenced_in_paths": [2, 3],
      "context": "Foundational knowledge for advanced topics"
    }
  ]
}

Respond with valid JSON only.`;

    try {
      const response = await this.ollama.generate(prompt);
      const pathData = this.parsePathOrganizationResponse(response);
      
      // Update learning paths with organized articles
      for (const [pathId, pathInfo] of Object.entries(pathData.path_assignments)) {
        const pathIndex = parseInt(pathId) - 1;
        if (pathIndex >= 0 && pathIndex < this.learningPaths.length) {
          this.learningPaths[pathIndex].articles = (pathInfo as any).articles;
        }
      }
      
      console.log('✅ Organized articles into learning paths using Ollama');
    } catch (error) {
      console.warn('⚠️  Failed to organize learning paths with Ollama, using fallback');
      this.organizeLearningPathsFallback(masterJSON);
    }
  }

  /**
   * Fallback organization based on categories
   */
  private organizeLearningPathsFallback(masterJSON: MasterJSON): void {
    const categoryToPath: { [key: string]: number } = {
      'AI Fundamentals': 1,
      'AI Risks & Principles': 2,
      'Legal Frameworks': 3,
      'AI Laws': 3,
      'Risk Frameworks & Standards': 4,
      'AI Development Lifecycle': 4,
      'Governance Implementation': 4,
      'AI Auditing & Accountability': 4,
      'Future Concerns': 2,
      'Industry-Specific Insights': 5,
      'Practical Guides': 5
    };

    // Group articles by path
    const pathArticles: { [key: number]: string[] } = { 1: [], 2: [], 3: [], 4: [], 5: [] };
    
    for (const article of masterJSON.articles) {
      const pathId = categoryToPath[article.file_status.category] || 5;
      pathArticles[pathId].push(article.file_status.suggested_slug);
    }

    // Update learning paths
    for (let i = 0; i < this.learningPaths.length; i++) {
      this.learningPaths[i].articles = pathArticles[i + 1] || [];
    }
  }

  /**
   * Generate learning path data for a specific article
   */
  private generateLearningPathData(articleSlug: string): ArticleLearningPathData {
    // Find primary path for this article
    let primaryPath: any = null;
    let position = -1;

    for (const path of this.learningPaths) {
      const articleIndex = path.articles.indexOf(articleSlug);
      if (articleIndex !== -1) {
        position = articleIndex + 1; // 1-based position
        primaryPath = {
          path_id: path.id,
          path_name: path.name,
          position: position,
          total_articles: path.articles.length,
          previous_article: articleIndex > 0 ? path.articles[articleIndex - 1] : undefined,
          next_article: articleIndex < path.articles.length - 1 ? path.articles[articleIndex + 1] : undefined,
          progress_percentage: Math.round((position / path.articles.length) * 100)
        };
        break;
      }
    }

    // Find secondary paths (articles that reference this one)
    const secondaryPaths: any[] = [];
    
    // Find related articles within the same path
    const relatedInPath: string[] = [];
    if (primaryPath) {
      const currentPath = this.learningPaths.find(p => p.id === primaryPath.path_id);
      if (currentPath) {
        // Get 2 articles before and after current position
        const currentIndex = currentPath.articles.indexOf(articleSlug);
        for (let i = Math.max(0, currentIndex - 2); i <= Math.min(currentPath.articles.length - 1, currentIndex + 2); i++) {
          if (i !== currentIndex) {
            relatedInPath.push(currentPath.articles[i]);
          }
        }
      }
    }

    // Find cross-path related articles (simplified - could be enhanced with Ollama)
    const crossPathRelated: string[] = [];

    return {
      primary_path: primaryPath || {
        path_id: 5, // Default to Application Path
        path_name: "Application Path",
        position: 1,
        total_articles: 1,
        progress_percentage: 100
      },
      secondary_paths: secondaryPaths,
      related_in_path: relatedInPath,
      cross_path_related: crossPathRelated
    };
  }

  /**
   * Update article markdown with learning path data
   */
  private async updateArticleWithLearningPath(
    articleSlug: string, 
    learningPathData: ArticleLearningPathData
  ): Promise<void> {
    const cleanPath = path.join(process.cwd(), 'content', 'articles', 'clean', `${articleSlug}.md`);
    
    try {
      const content = await fs.readFile(cleanPath, 'utf-8');
      const updatedContent = this.addLearningPathToFrontmatter(content, learningPathData);
      await fs.writeFile(cleanPath, updatedContent, 'utf-8');
      
      console.log(`✅ Added learning path data to ${articleSlug}.md`);
    } catch (error) {
      console.warn(`⚠️  Failed to update learning path for ${articleSlug}:`, error);
    }
  }

  /**
   * Add learning path data to article frontmatter
   */
  private addLearningPathToFrontmatter(content: string, learningPathData: ArticleLearningPathData): string {
    // Find the frontmatter section
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    
    if (!frontmatterMatch) {
      // No frontmatter, add it
      const frontmatter = this.createFrontmatterWithLearningPath(learningPathData);
      return `---\n${frontmatter}\n---\n\n${content}`;
    }

    // Add learning path data to existing frontmatter
    const existingFrontmatter = frontmatterMatch[1];
    const learningPathYaml = this.generateLearningPathYaml(learningPathData);
    
    const updatedFrontmatter = `${existingFrontmatter}\n${learningPathYaml}`;
    
    return content.replace(frontmatterMatch[0], `---\n${updatedFrontmatter}\n---`);
  }

  /**
   * Generate YAML for learning path data
   */
  private generateLearningPathYaml(learningPathData: ArticleLearningPathData): string {
    let yaml = `learning_path:\n`;
    yaml += `  primary:\n`;
    yaml += `    path_id: ${learningPathData.primary_path.path_id}\n`;
    yaml += `    path_name: "${learningPathData.primary_path.path_name}"\n`;
    yaml += `    position: ${learningPathData.primary_path.position}\n`;
    yaml += `    total_articles: ${learningPathData.primary_path.total_articles}\n`;
    yaml += `    progress_percentage: ${learningPathData.primary_path.progress_percentage}\n`;
    
    if (learningPathData.primary_path.previous_article) {
      yaml += `    previous_article: "${learningPathData.primary_path.previous_article}"\n`;
    }
    
    if (learningPathData.primary_path.next_article) {
      yaml += `    next_article: "${learningPathData.primary_path.next_article}"\n`;
    }

    if (learningPathData.related_in_path.length > 0) {
      yaml += `  related_in_path:\n`;
      for (const related of learningPathData.related_in_path) {
        yaml += `    - "${related}"\n`;
      }
    }

    if (learningPathData.cross_path_related.length > 0) {
      yaml += `  cross_path_related:\n`;
      for (const related of learningPathData.cross_path_related) {
        yaml += `    - "${related}"\n`;
      }
    }

    return yaml;
  }

  private createFrontmatterWithLearningPath(learningPathData: ArticleLearningPathData): string {
    return this.generateLearningPathYaml(learningPathData);
  }

  private parsePathOrganizationResponse(response: string): any {
    try {
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
      return JSON.parse(response);
    } catch (error) {
      console.warn('Failed to parse path organization response:', error);
      return { path_assignments: {}, secondary_references: [] };
    }
  }

  /**
   * Get learning paths configuration
   */
  getLearningPaths(): LearningPath[] {
    return this.learningPaths;
  }

  /**
   * Get article's learning path data
   */
  getArticleLearningPath(articleSlug: string): ArticleLearningPathData | null {
    return this.generateLearningPathData(articleSlug);
  }
}