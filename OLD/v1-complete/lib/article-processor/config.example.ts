/**
 * Example configuration for Article Content Processor
 * Copy this file to config.ts and customize as needed
 */

import { OllamaConfig, DirectoryStructure } from './types';

/**
 * Ollama AI Configuration
 * Configure your local Ollama instance for redundancy analysis
 */
export const ollamaConfig: OllamaConfig = {
  // Model to use for analysis (e.g., 'llama2', 'mistral', 'codellama')
  model: 'llama2',
  
  // Ollama API endpoint
  endpoint: 'http://localhost:11434',
  
  // Request timeout in milliseconds
  timeout: 30000
};

/**
 * Directory Configuration
 * Customize where articles are read from and written to
 */
export const directories: DirectoryStructure = {
  // Source directory for draft articles
  drafts: 'content/articles/drafts',
  
  // Output directory for YAML and JSON processing files
  processing: 'content/articles/articleprocessing',
  
  // Directory where original drafts are moved for review
  review: 'content/articles/review',
  
  // Directory for cleaned markdown with image placeholders
  clean: 'content/articles/clean'
};

/**
 * Processing Configuration
 */
export const processingConfig = {
  // Continue processing other articles if one fails
  continueOnError: true,
  
  // Generate verbose logging
  verbose: false,
  
  // Maximum concurrent article processing
  maxConcurrency: 5,
  
  // Skip Ollama redundancy analysis (useful for testing)
  skipOllamaAnalysis: false
};

/**
 * Content Enhancement Configuration
 */
export const contentConfig = {
  // Number of sentences for TL;DR generation
  tldrSentences: 2,
  
  // Number of learning objectives to generate
  learningObjectivesCount: 3,
  
  // Number of SEO keywords to generate
  seoKeywordsCount: 5,
  
  // Word count tolerance percentage for "within_range" status
  wordCountTolerance: 10
};

/**
 * Validation Configuration
 */
export const validationConfig = {
  // Require H1 header
  requireH1: true,
  
  // Require introduction section
  requireIntro: true,
  
  // Require conclusion section
  requireConclusion: true,
  
  // Validate header depth hierarchy
  validateHeaderDepth: true,
  
  // Minimum word count for articles
  minWordCount: 500
};
