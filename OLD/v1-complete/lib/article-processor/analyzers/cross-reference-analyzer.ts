/**
 * Cross-Reference Analyzer
 * Extracts topic fingerprints and named entities for cross-reference analysis
 * Focuses on technical concepts useful for collision detection between articles
 */

import { 
  CrossReferenceAnalyzer
} from '../interfaces';
import {
  MasterJSON, 
  RedundancyAnalysis, 
  CrossReferenceRecommendations,
  OverlapPair,
  DuplicateExample,
  RestructuringRecommendation
} from '../types';
import { OllamaClient } from '../clients/ollama-client';

/**
 * Technical concept patterns for topic fingerprinting
 * These are specific technical terms that are useful for collision detection
 */
const TECHNICAL_CONCEPT_PATTERNS = [
  // AI/ML Technical Terms
  /\b(?:transformer|attention mechanism|neural networks?|deep learning|machine learning|reinforcement learning|supervised learning|unsupervised learning|generative ai|large language models?|llm|foundation models?|multimodal|computer vision|natural language processing|nlp)\b/gi,
  
  // Specific AI Architectures/Models
  /\b(?:gpt|bert|claude|chatgpt|dall-e|stable diffusion|midjourney|whisper|codex|palm|lamda|bard|gemini|llama|mistral|falcon|vicuna)\b/gi,
  
  // Governance & Risk Terms
  /\b(?:algorithmic bias|fairness|explainability|interpretability|transparency|accountability|responsible ai|trustworthy ai|ai ethics|ai safety|ai alignment|red teaming|adversarial testing|model card|impact assessment|risk assessment|governance framework|oversight|audit)\b/gi,
  
  // Legal & Regulatory Terms
  /\b(?:gdpr article 22|automated decision[- ]?making|right to explanation|data protection impact assessments?|dpia|algorithmic impact assessments?|aia|conformity assessments?|high[- ]?risk ai|unacceptable risk|prohibited practices|ce marking)\b/gi,
  
  // Standards & Frameworks
  /\b(?:nist ai rmf|iso[\/\s-]?(?:iec[\/\s-]?)?(?:42001|31000|27001)|ieee[\/\s-]?7000|singapore model ai governance|three lines model|risk management framework|maturity model|control framework)\b/gi,
  
  // Technical Implementation
  /\b(?:mlops|model drift|data drift|concept drift|model monitoring|continuous integration|continuous deployment|ci\/cd|feature engineering|hyperparameter tuning|cross[- ]?validation|a\/b testing|canary deployment|model registry|experiment tracking)\b/gi,
  
  // Specific Techniques
  /\b(?:differential privacy|federated learning|homomorphic encryption|secure multi[- ]?party computation|privacy[- ]?preserving|synthetic data|data augmentation|transfer learning|fine[- ]?tuning|prompt engineering|in[- ]?context learning|few[- ]?shot learning|zero[- ]?shot learning)\b/gi
];

/**
 * Named entity patterns for specific companies, regulations, and case studies
 * These are concrete, specific references that demonstrate real-world applications
 */
const NAMED_ENTITY_PATTERNS = [
  // Companies & Organizations
  /\b(?:openai|anthropic|google|microsoft|amazon|meta|facebook|apple|nvidia|tesla|uber|netflix|spotify|airbnb|linkedin|twitter|x corp|tiktok|bytedance|baidu|alibaba|tencent|deepmind|hugging face|stability ai|midjourney|runway|adobe|salesforce|oracle|ibm|sap|palantir)\b/gi,
  
  // Specific AI Systems/Products
  /\b(?:amazon hiring algorithm|netflix recommendation|uber surge pricing|tesla autopilot|waymo|cruise|facebook news feed|youtube algorithm|tiktok algorithm|google search|bing chat|github copilot|amazon alexa|apple siri|google assistant|watson|alphago|alphafold)\b/gi,
  
  // Regulations & Laws
  /\b(?:eu ai act|artificial intelligence act|canada aida|aida|colorado ai act|california sb[\/\s-]?1001|nyc local law 144|aedt|gdpr|ccpa|cpra|dma|dsa|digital markets act|digital services act|china ai regulation|singapore pdpa|brazil lgpd)\b/gi,
  
  // Government Agencies & Bodies
  /\b(?:european commission|european parliament|council of the eu|fcc|ftc|federal trade commission|sec|securities and exchange commission|cftc|occ|fdic|nist|national institute of standards|department of commerce|white house|executive order|congress|senate|house of representatives)\b/gi,
  
  // Standards Organizations
  /\b(?:iso|iec|international organization for standardization|ieee|institute of electrical|nist|ansi|american national standards|bsi|british standards|din|deutsches institut|cen|european committee|etsi|european telecommunications)\b/gi,
  
  // Academic Institutions & Research
  /\b(?:mit|stanford|berkeley|carnegie mellon|oxford|cambridge|harvard|yale|princeton|toronto|montreal|deepmind|openai research|anthropic research|fair|facebook ai research|google research|microsoft research)\b/gi,
  
  // Specific Cases & Incidents
  /\b(?:cambridge analytica|equifax breach|target breach|yahoo breach|solarwinds|log4j|heartbleed|spectre|meltdown|wannacry|notpetya|stuxnet|deepfakes|gpt[- ]?4 launch|chatgpt launch|bard launch|claude launch)\b/gi,
  
  // Industry Sectors
  /\b(?:fintech|healthtech|edtech|legaltech|insurtech|regtech|proptech|martech|adtech|hrtech|retailtech|automotive|aerospace|defense|pharmaceuticals|biotechnology|telecommunications|energy|utilities|manufacturing)\b/gi
];

/**
 * Generic terms to exclude unless they have specific brand/model qualifiers
 */
const GENERIC_EXCLUSIONS = [
  /\b(?:spam filter|email filter|search engine|recommendation system|chatbot|virtual assistant|self[- ]?driving car|autonomous vehicle|facial recognition|voice recognition|image recognition|fraud detection|credit scoring|hiring algorithm|content moderation)\b/gi
];

/**
 * Implementation of the CrossReferenceAnalyzer interface
 */
export class CrossReferenceAnalyzerImpl implements CrossReferenceAnalyzer {
  private ollamaClient: OllamaClient;

  constructor(ollamaClient?: OllamaClient) {
    this.ollamaClient = ollamaClient || new OllamaClient();
  }
  
  /**
   * Extracts the top 5 core technical concepts from article content
   * Focuses on technical concepts useful for collision detection
   * @param content - Article content to analyze
   * @returns Array of up to 5 technical concepts
   */
  extractTopicFingerprint(content: string): string[] {
    const concepts = new Set<string>();
    
    // Extract technical concepts using patterns
    for (const pattern of TECHNICAL_CONCEPT_PATTERNS) {
      const matches = content.match(pattern);
      if (matches) {
        matches.forEach(match => {
          // Normalize the concept (lowercase, trim)
          const normalized = match.toLowerCase().trim();
          if (normalized.length > 2) { // Filter out very short matches
            concepts.add(this.normalizeConcept(normalized));
          }
        });
      }
    }
    
    // Convert to array and sort by frequency/importance
    const conceptArray = Array.from(concepts);
    
    // For now, return first 5. In a more sophisticated implementation,
    // we could rank by frequency or importance
    return conceptArray.slice(0, 5);
  }
  
  /**
   * Extracts specific named entities (companies, regulations, case studies)
   * Excludes generic terms unless specific brands/models are named
   * @param content - Article content to analyze
   * @returns Array of named entities
   */
  extractNamedEntities(content: string): string[] {
    const entities = new Set<string>();
    
    // Extract named entities using patterns
    for (const pattern of NAMED_ENTITY_PATTERNS) {
      const matches = content.match(pattern);
      if (matches) {
        matches.forEach(match => {
          const normalized = this.normalizeEntity(match);
          if (normalized && !this.isGenericTerm(normalized, content)) {
            entities.add(normalized);
          }
        });
      }
    }
    
    return Array.from(entities).sort();
  }
  
  /**
   * Analyzes redundancy across the master JSON collection using Ollama AI
   * @param masterJSON - Collection of all processed articles
   * @returns Redundancy analysis results
   */
  async analyzeRedundancy(masterJSON: MasterJSON): Promise<RedundancyAnalysis> {
    try {
      // First check if Ollama is available
      const isConnected = await this.ollamaClient.testConnection();
      
      if (isConnected) {
        // Use Ollama for AI-powered analysis
        const ollamaResult = await this.ollamaClient.performRedundancyAnalysis(masterJSON);
        
        // Check if Ollama actually provided meaningful results
        if (ollamaResult.overlapping_articles.length > 0 || 
            ollamaResult.duplicate_examples.length > 0 || 
            ollamaResult.restructuring_recommendations.length > 0 ||
            ollamaResult.ollama_analysis.confidence_score > 0) {
          return ollamaResult;
        } else {
          // Ollama returned empty results, fall back to local analysis
          console.warn('Ollama returned empty results, falling back to local analysis');
          return await this.performLocalRedundancyAnalysis(masterJSON);
        }
      } else {
        // Fallback to local analysis if Ollama is not available
        console.warn('Ollama not available, falling back to local analysis');
        return await this.performLocalRedundancyAnalysis(masterJSON);
      }
    } catch (error) {
      console.warn('Ollama analysis failed, falling back to local analysis:', error);
      return await this.performLocalRedundancyAnalysis(masterJSON);
    }
  }

  /**
   * Performs local redundancy analysis without AI
   * @param masterJSON - Collection of all processed articles
   * @returns Redundancy analysis results
   */
  private async performLocalRedundancyAnalysis(masterJSON: MasterJSON): Promise<RedundancyAnalysis> {
    const overlappingArticles: OverlapPair[] = [];
    const duplicateExamples: DuplicateExample[] = [];
    const restructuringRecommendations: RestructuringRecommendation[] = [];
    
    // Find overlapping articles based on topic fingerprints
    for (let i = 0; i < masterJSON.articles.length; i++) {
      for (let j = i + 1; j < masterJSON.articles.length; j++) {
        const article1 = masterJSON.articles[i];
        const article2 = masterJSON.articles[j];
        
        const sharedConcepts = this.findSharedConcepts(
          article1.cross_reference_data.topic_fingerprint,
          article2.cross_reference_data.topic_fingerprint
        );
        
        if (sharedConcepts.length >= 1) { // Threshold for overlap (lowered to 1 for testing)
          const overlapScore = Math.round((sharedConcepts.length / Math.max(
            article1.cross_reference_data.topic_fingerprint.length,
            article2.cross_reference_data.topic_fingerprint.length
          )) * 100);
          
          overlappingArticles.push({
            article1: article1.file_status.suggested_slug,
            article2: article2.file_status.suggested_slug,
            overlap_score: overlapScore,
            shared_concepts: sharedConcepts
          });
        }
      }
    }
    
    // Find duplicate examples across articles
    const exampleMap = new Map<string, string[]>();
    
    masterJSON.articles.forEach(article => {
      article.cross_reference_data.named_examples.forEach(example => {
        if (!exampleMap.has(example)) {
          exampleMap.set(example, []);
        }
        exampleMap.get(example)!.push(article.file_status.suggested_slug);
      });
    });
    
    exampleMap.forEach((articles, example) => {
      if (articles.length > 1) {
        duplicateExamples.push({
          example,
          appears_in: articles,
          recommendation: `Consider consolidating the discussion of "${example}" into a single article and cross-referencing from others.`
        });
      }
    });
    
    // Generate restructuring recommendations based on overlaps
    overlappingArticles.forEach(overlap => {
      if (overlap.overlap_score > 60) { // High overlap threshold
        restructuringRecommendations.push({
          articles: [overlap.article1, overlap.article2],
          issue: `High content overlap (${overlap.overlap_score}%) detected`,
          suggestion: `Consider merging these articles or clearly differentiating their focus areas. Shared concepts: ${overlap.shared_concepts.join(', ')}`
        });
      }
    });
    
    return {
      overlapping_articles: overlappingArticles,
      duplicate_examples: duplicateExamples,
      restructuring_recommendations: restructuringRecommendations,
      ollama_analysis: {
        model_used: "local-analysis",
        confidence_score: 75, // Fixed confidence for local analysis
        processing_time: 0
      }
    };
  }
  
  /**
   * Generates cross-reference suggestions between articles using Ollama AI
   * @param masterJSON - Collection of all processed articles
   * @returns Cross-reference recommendations
   */
  async generateCrossReferences(masterJSON: MasterJSON): Promise<CrossReferenceRecommendations> {
    try {
      // First check if Ollama is available
      const isConnected = await this.ollamaClient.testConnection();
      
      if (isConnected) {
        // Use Ollama for AI-powered cross-reference suggestions
        const ollamaResult = await this.ollamaClient.generateCrossReferences(masterJSON);
        
        // Check if Ollama provided meaningful results
        if (ollamaResult.suggestions.length > 0) {
          return ollamaResult;
        } else {
          // Ollama returned empty results, fall back to local analysis
          console.warn('Ollama returned empty cross-reference results, falling back to local analysis');
          return await this.performLocalCrossReferenceAnalysis(masterJSON);
        }
      } else {
        // Fallback to local analysis if Ollama is not available
        console.warn('Ollama not available, falling back to local cross-reference analysis');
        return await this.performLocalCrossReferenceAnalysis(masterJSON);
      }
    } catch (error) {
      console.warn('Ollama cross-reference analysis failed, falling back to local analysis:', error);
      return await this.performLocalCrossReferenceAnalysis(masterJSON);
    }
  }

  /**
   * Performs local cross-reference analysis without AI
   * @param masterJSON - Collection of all processed articles
   * @returns Cross-reference recommendations
   */
  private async performLocalCrossReferenceAnalysis(masterJSON: MasterJSON): Promise<CrossReferenceRecommendations> {
    const suggestions: CrossReferenceRecommendations['suggestions'] = [];
    
    // Generate suggestions based on shared concepts and entities
    for (let i = 0; i < masterJSON.articles.length; i++) {
      for (let j = i + 1; j < masterJSON.articles.length; j++) {
        const article1 = masterJSON.articles[i];
        const article2 = masterJSON.articles[j];
        
        // Check for complementary content
        const sharedConcepts = this.findSharedConcepts(
          article1.cross_reference_data.topic_fingerprint,
          article2.cross_reference_data.topic_fingerprint
        );
        
        const sharedEntities = this.findSharedConcepts(
          article1.cross_reference_data.named_examples,
          article2.cross_reference_data.named_examples
        );
        
        if (sharedConcepts.length > 0 || sharedEntities.length > 0) {
          const reason = this.generateReferenceReason(sharedConcepts, sharedEntities);
          const confidence = Math.round(this.calculateReferenceConfidence(sharedConcepts, sharedEntities) * 100);
          
          if (confidence > 30) { // Minimum confidence threshold
            suggestions.push({
              from_article: article1.file_status.suggested_slug,
              to_article: article2.file_status.suggested_slug,
              reason,
              confidence
            });
            
            // Add reverse reference if confidence is high enough
            if (confidence > 50) {
              suggestions.push({
                from_article: article2.file_status.suggested_slug,
                to_article: article1.file_status.suggested_slug,
                reason,
                confidence
              });
            }
          }
        }
      }
    }
    
    return { suggestions };
  }
  
  /**
   * Normalizes a technical concept for consistent matching
   * @param concept - Raw concept string
   * @returns Normalized concept
   */
  private normalizeConcept(concept: string): string {
    let normalized = concept
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters except hyphens
      .replace(/\s+/g, ' ') // Normalize whitespace
      .trim();
    
    // Normalize plural forms to singular for consistency
    normalized = normalized
      .replace(/\bneural networks\b/g, 'neural network')
      .replace(/\blarge language models\b/g, 'large language model')
      .replace(/\bfoundation models\b/g, 'foundation model')
      .replace(/\bdata protection impact assessments\b/g, 'data protection impact assessment')
      .replace(/\balgorithmic impact assessments\b/g, 'algorithmic impact assessment')
      .replace(/\bconformity assessments\b/g, 'conformity assessment');
    
    return normalized;
  }
  
  /**
   * Normalizes a named entity for consistent matching
   * @param entity - Raw entity string
   * @returns Normalized entity or null if should be excluded
   */
  private normalizeEntity(entity: string): string | null {
    const normalized = entity
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    
    // Filter out very short or empty results
    if (normalized.length < 2) {
      return null;
    }
    
    return normalized;
  }
  
  /**
   * Checks if a term is generic and should be excluded
   * @param term - Term to check
   * @param content - Full content for context
   * @returns True if term should be excluded
   */
  private isGenericTerm(term: string, content: string): boolean {
    for (const exclusionPattern of GENERIC_EXCLUSIONS) {
      if (exclusionPattern.test(term)) {
        // Check if there's a specific brand/model qualifier nearby
        const contextRegex = new RegExp(`\\b\\w+\\s+${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}|${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s+\\w+\\b`, 'gi');
        const contextMatches = content.match(contextRegex);
        
        // If we find qualified versions, allow them; otherwise exclude
        return !contextMatches || contextMatches.length === 0;
      }
    }
    return false;
  }
  
  /**
   * Finds concepts that appear in both arrays
   * @param array1 - First array of concepts
   * @param array2 - Second array of concepts
   * @returns Array of shared concepts
   */
  private findSharedConcepts(array1: string[], array2: string[]): string[] {
    return array1.filter(concept => 
      array2.some(other => 
        concept.toLowerCase() === other.toLowerCase()
      )
    );
  }
  
  /**
   * Generates a human-readable reason for cross-referencing
   * @param sharedConcepts - Concepts shared between articles
   * @param sharedEntities - Entities shared between articles
   * @returns Reason string
   */
  private generateReferenceReason(sharedConcepts: string[], sharedEntities: string[]): string {
    const reasons: string[] = [];
    
    if (sharedConcepts.length > 0) {
      reasons.push(`Discusses related technical concepts: ${sharedConcepts.slice(0, 3).join(', ')}`);
    }
    
    if (sharedEntities.length > 0) {
      reasons.push(`References similar examples: ${sharedEntities.slice(0, 3).join(', ')}`);
    }
    
    return reasons.join('. ');
  }
  
  /**
   * Calculates confidence score for cross-reference suggestion
   * @param sharedConcepts - Concepts shared between articles
   * @param sharedEntities - Entities shared between articles
   * @returns Confidence score (0-1)
   */
  private calculateReferenceConfidence(sharedConcepts: string[], sharedEntities: string[]): number {
    // Simple scoring based on number of shared elements
    const conceptScore = Math.min(sharedConcepts.length * 0.2, 0.6);
    const entityScore = Math.min(sharedEntities.length * 0.3, 0.4);
    
    return Math.min(conceptScore + entityScore, 1.0);
  }
}

/**
 * Factory function to create a cross-reference analyzer instance
 * @param ollamaClient - Optional Ollama client for AI-powered analysis
 * @returns CrossReferenceAnalyzer implementation
 */
export function createCrossReferenceAnalyzer(ollamaClient?: OllamaClient): CrossReferenceAnalyzer {
  return new CrossReferenceAnalyzerImpl(ollamaClient);
}

/**
 * Convenience functions for direct use
 */
export const extractTopicFingerprint = (content: string): string[] => {
  const analyzer = new CrossReferenceAnalyzerImpl();
  return analyzer.extractTopicFingerprint(content);
};

export const extractNamedEntities = (content: string): string[] => {
  const analyzer = new CrossReferenceAnalyzerImpl();
  return analyzer.extractNamedEntities(content);
};