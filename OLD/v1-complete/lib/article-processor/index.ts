/**
 * Article Content Processor
 * Main entry point for the article processing system
 */

// Export all types
export * from './types';

// Export all interfaces
export * from './interfaces';

// Export clients (renamed to avoid conflict with interface)
export { OllamaClient as OllamaClientImpl, ollamaClient } from './clients/ollama-client';

// Export utilities
export * from './utils/constants';
export * from './utils/file-discovery';
export * from './utils/file-manager';
export * from './utils/markdown-parser';

// Export validators
export * from './validators';

// Export processors
export * from './processors/content-enhancer';
export { ArticleProcessor, articleProcessor } from './processors/article-processor';

// Export detectors
export * from './detectors';

// Export generators
export * from './generators/image-prompt-generator';
export { 
  OutputGenerator as OutputGeneratorImpl,
  YAMLOutputGenerator,
  JSONOutputGenerator,
  MarkdownOutputGenerator
} from './generators/output-generator';
export * from './generators/yaml-output-generator';
export * from './generators/json-output-generator';
export * from './generators/markdown-output-generator';

// Export analyzers
export * from './analyzers/cross-reference-analyzer';
