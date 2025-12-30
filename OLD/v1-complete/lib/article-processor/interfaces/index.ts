/**
 * Core interfaces for the Article Content Processor components
 * These define the contracts for each processing stage
 */

import {
  ArticleJSON,
  ArticleResult,
  Category,
  CategoryMotif,
  ComponentItem,
  CrossReferenceRecommendations,
  GeneratedElements,
  ImagePrompt,
  MasterJSON,
  OllamaConfig,
  ProcessedArticle,
  ProcessingResult,
  RedundancyAnalysis,
  SectionValidation,
  StructureValidation
} from '../types';

// ============================================================================
// Main Orchestrator
// ============================================================================

export interface ArticleProcessor {
  processAllDrafts(): Promise<ProcessingResult>;
  processSingleArticle(filePath: string): Promise<ArticleResult>;
  generateMasterJSON(): Promise<MasterJSON>;
}

// ============================================================================
// Content Validation
// ============================================================================

export interface ContentValidator {
  validateStructure(content: string): StructureValidation;
  validateHeaderDepth(content: string): boolean;
  hasRequiredSections(content: string): SectionValidation;
}

// ============================================================================
// Category Classification
// ============================================================================

export interface CategoryClassifier {
  classifyArticle(title: string, content: string): Category;
  getConfidenceScore(title: string, content: string, category: Category): number;
}

// ============================================================================
// Content Enhancement
// ============================================================================

export interface ContentEnhancer {
  generateTLDR(content: string): string;
  generateLearningObjectives(content: string): string[];
  generateSEOKeywords(title: string, content: string): string[];
  trackGeneratedElements(elements: GeneratedElements): GeneratedElements;
}

// ============================================================================
// Component Detection
// ============================================================================

export interface ComponentDetector {
  detectChecklists(content: string): ComponentItem[];
  detectTables(content: string): ComponentItem[];
  detectFlowcharts(content: string): ComponentItem[];
  detectTemplates(content: string): ComponentItem[];
  detectStructuredLists(content: string): ComponentItem[];
  detectAllComponents(content: string): ComponentItem[];
}

// ============================================================================
// Image Prompt Generation
// ============================================================================

export interface ImagePromptGenerator {
  generatePrompt(category: Category, title: string): ImagePrompt;
  getCategoryMotif(category: Category): CategoryMotif;
  createImagePlaceholder(slug: string): string;
}

// ============================================================================
// Cross-Reference Analysis
// ============================================================================

export interface CrossReferenceAnalyzer {
  extractTopicFingerprint(content: string): string[];
  extractNamedEntities(content: string): string[];
  analyzeRedundancy(masterJSON: MasterJSON): Promise<RedundancyAnalysis>;
  generateCrossReferences(masterJSON: MasterJSON): Promise<CrossReferenceRecommendations>;
}

// ============================================================================
// Ollama AI Integration
// ============================================================================

export interface OllamaClient {
  testConnection(): Promise<boolean>;
  generate(prompt: string): Promise<string>;
  analyzeRedundancy(masterJSON: string): Promise<{
    response: string;
    model: string;
    processingTime: number;
  }>;
  performRedundancyAnalysis(masterJSON: MasterJSON): Promise<RedundancyAnalysis>;
  generateCrossReferences(masterJSON: MasterJSON): Promise<CrossReferenceRecommendations>;
  getConfig(): OllamaConfig;
  updateConfig(config: Partial<OllamaConfig>): void;
}

// ============================================================================
// Output Generation
// ============================================================================

export interface OutputFormat {
  yaml: string;
  json: ArticleJSON;
  markdown: string;
}

export interface OutputGenerator {
  generateArticleYAML(article: ProcessedArticle): string;
  generateArticleJSON(article: ProcessedArticle): ArticleJSON;
  generateCleanedMarkdown(article: ProcessedArticle): string;
  compileMasterJSON(articles: ArticleJSON[]): MasterJSON;
  validateOutput(output: string, format: 'yaml' | 'json' | 'markdown'): boolean;
  generateAllFormats(article: ProcessedArticle): {
    yaml: string;
    json: ArticleJSON;
    jsonString: string;
    markdown: string;
  };
  validateAllFormats(outputs: {
    yaml: string;
    json: ArticleJSON;
    jsonString: string;
    markdown: string;
  }): {
    yaml: boolean;
    json: boolean;
    markdown: boolean;
    allValid: boolean;
  };
}

// ============================================================================
// File Management
// ============================================================================

export interface FileManager {
  writeProcessingOutput(slug: string, yaml: string, json: string): Promise<void>;
  moveToReview(filePath: string): Promise<void>;
  writeCleanedMarkdown(slug: string, markdown: string): Promise<void>;
  preserveFileIntegrity(sourcePath: string, destPath: string): Promise<boolean>;
  createDirectoryIfNotExists(path: string): Promise<void>;
}

// ============================================================================
// Markdown Parsing
// ============================================================================

export interface MarkdownParser {
  parse(filePath: string): Promise<{
    frontmatter: Record<string, any>;
    content: string;
    title: string;
  }>;
  extractTitle(content: string): string | null;
  calculateWordCount(content: string): number;
}
