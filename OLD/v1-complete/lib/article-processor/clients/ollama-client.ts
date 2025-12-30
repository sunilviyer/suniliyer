/**
 * Ollama Client for local AI integration
 * Handles communication with local Ollama instance for redundancy analysis
 */

import { OllamaConfig, MasterJSON, RedundancyAnalysis, CrossReferenceRecommendations } from '../types';
import { OLLAMA_DEFAULTS } from '../utils/constants';

export class OllamaClient {
  private config: OllamaConfig;

  constructor(config?: Partial<OllamaConfig>) {
    this.config = {
      model: config?.model || OLLAMA_DEFAULTS.MODEL,
      endpoint: config?.endpoint || OLLAMA_DEFAULTS.ENDPOINT,
      timeout: config?.timeout || OLLAMA_DEFAULTS.TIMEOUT
    };
  }

  /**
   * Test connection to Ollama instance
   */
  async testConnection(): Promise<boolean> {
    try {
      const response = await fetch(`${this.config.endpoint}/api/tags`, {
        method: 'GET',
        signal: AbortSignal.timeout(5000)
      });
      return response.ok;
    } catch (error) {
      return false;
    }
  }

  /**
   * Generate completion from Ollama
   */
  async generate(prompt: string): Promise<string> {
    try {
      const response = await fetch(`${this.config.endpoint}/api/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: this.config.model,
          prompt: prompt,
          stream: false
        }),
        signal: AbortSignal.timeout(this.config.timeout)
      });

      if (!response.ok) {
        throw new Error(`Ollama request failed: ${response.statusText}`);
      }

      const data = await response.json();
      return data.response || '';
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Ollama generation failed: ${error.message}`);
      }
      throw new Error('Ollama generation failed: Unknown error');
    }
  }

  /**
   * Analyze content for redundancy using Ollama
   */
  async analyzeRedundancy(masterJSON: string): Promise<{
    response: string;
    model: string;
    processingTime: number;
  }> {
    const startTime = Date.now();

    const prompt = `You are an AI content analyst. Analyze the following collection of articles and identify:
1. Articles with overlapping topic fingerprints (potential redundancy)
2. Duplicate examples used across multiple articles
3. Recommendations for article restructuring to eliminate redundancy
4. Suggestions for which articles should reference each other

Master JSON:
${masterJSON}

Provide your analysis in a structured format with specific article references and confidence scores.`;

    const response = await this.generate(prompt);
    const processingTime = Date.now() - startTime;

    return {
      response,
      model: this.config.model,
      processingTime
    };
  }

  /**
   * Perform comprehensive redundancy analysis on master JSON
   */
  async performRedundancyAnalysis(masterJSON: MasterJSON): Promise<RedundancyAnalysis> {
    const startTime = Date.now();
    
    const prompt = `You are an expert AI content analyst. Analyze this collection of AI governance articles for redundancy and overlap.

TASK: Identify content redundancy and provide structured recommendations.

MASTER JSON DATA:
${JSON.stringify(masterJSON, null, 2)}

ANALYSIS REQUIREMENTS:
1. Find articles with overlapping topic fingerprints (>60% similarity)
2. Identify duplicate examples used across multiple articles
3. Suggest article restructuring to eliminate redundancy
4. Provide confidence scores (0-100) for each recommendation

RESPONSE FORMAT (JSON only):
{
  "overlapping_articles": [
    {
      "article1": "article-slug-1",
      "article2": "article-slug-2", 
      "overlap_score": 75,
      "shared_concepts": ["concept1", "concept2"]
    }
  ],
  "duplicate_examples": [
    {
      "example": "Netflix recommendation algorithm",
      "appears_in": ["article-1", "article-2"],
      "recommendation": "Consolidate in article-1, reference from article-2"
    }
  ],
  "restructuring_recommendations": [
    {
      "articles": ["article-1", "article-2"],
      "issue": "Both cover GDPR Article 22 extensively",
      "suggestion": "Merge sections or create dedicated GDPR article"
    }
  ]
}

Respond with valid JSON only, no additional text.`;

    try {
      const response = await this.generate(prompt);
      const processingTime = Date.now() - startTime;
      
      // Parse AI response and create structured analysis
      const aiAnalysis = this.parseRedundancyResponse(response);
      
      return {
        overlapping_articles: aiAnalysis.overlapping_articles || [],
        duplicate_examples: aiAnalysis.duplicate_examples || [],
        restructuring_recommendations: aiAnalysis.restructuring_recommendations || [],
        ollama_analysis: {
          model_used: this.config.model,
          confidence_score: this.calculateOverallConfidence(aiAnalysis),
          processing_time: processingTime
        }
      };
    } catch (error) {
      // Return empty analysis if AI fails
      return {
        overlapping_articles: [],
        duplicate_examples: [],
        restructuring_recommendations: [],
        ollama_analysis: {
          model_used: this.config.model,
          confidence_score: 0,
          processing_time: Date.now() - startTime
        }
      };
    }
  }

  /**
   * Generate cross-reference suggestions using Ollama
   */
  async generateCrossReferences(masterJSON: MasterJSON): Promise<CrossReferenceRecommendations> {
    const prompt = `You are an AI content strategist. Analyze these AI governance articles and suggest cross-references.

MASTER JSON DATA:
${JSON.stringify(masterJSON, null, 2)}

TASK: Generate cross-reference suggestions between articles based on:
1. Complementary topics that should reference each other
2. Sequential reading paths (beginner to advanced)
3. Related concepts that enhance understanding
4. Practical applications of theoretical concepts

RESPONSE FORMAT (JSON only):
{
  "suggestions": [
    {
      "from_article": "source-article-slug",
      "to_article": "target-article-slug",
      "reason": "Explains practical implementation of concepts introduced here",
      "confidence": 85
    }
  ]
}

Respond with valid JSON only, no additional text.`;

    try {
      const response = await this.generate(prompt);
      const parsed = this.parseCrossReferenceResponse(response);
      
      return {
        suggestions: parsed.suggestions || []
      };
    } catch (error) {
      return {
        suggestions: []
      };
    }
  }

  /**
   * Parse redundancy analysis response from AI
   */
  private parseRedundancyResponse(response: string): any {
    try {
      // Extract JSON from response (handle cases where AI adds extra text)
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
      return JSON.parse(response);
    } catch (error) {
      console.warn('Failed to parse redundancy analysis response:', error);
      return {
        overlapping_articles: [],
        duplicate_examples: [],
        restructuring_recommendations: []
      };
    }
  }

  /**
   * Parse cross-reference response from AI
   */
  private parseCrossReferenceResponse(response: string): any {
    try {
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
      return JSON.parse(response);
    } catch (error) {
      console.warn('Failed to parse cross-reference response:', error);
      return {
        suggestions: []
      };
    }
  }

  /**
   * Calculate overall confidence score from analysis
   */
  private calculateOverallConfidence(analysis: any): number {
    const items = [
      ...(analysis.overlapping_articles || []),
      ...(analysis.duplicate_examples || []),
      ...(analysis.restructuring_recommendations || [])
    ];
    
    if (items.length === 0) return 0;
    
    // Use overlap scores as confidence indicators
    const scores = analysis.overlapping_articles?.map((item: any) => item.overlap_score) || [50];
    const avgScore = scores.reduce((sum: number, score: number) => sum + score, 0) / scores.length;
    
    return Math.round(avgScore);
  }

  /**
   * Get current configuration
   */
  getConfig(): OllamaConfig {
    return { ...this.config };
  }

  /**
   * Update configuration
   */
  updateConfig(config: Partial<OllamaConfig>): void {
    this.config = {
      ...this.config,
      ...config
    };
  }
}

// Export singleton instance with default config
export const ollamaClient = new OllamaClient();
