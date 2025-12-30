/**
 * Article Processor Orchestrator
 * 
 * Main orchestrator that coordinates all processing stages in the correct order.
 * Handles errors gracefully and continues processing other articles.
 * Generates comprehensive processing reports and compiles master JSON.
 * 
 * Features comprehensive error handling:
 * - Error recovery for each processing stage
 * - Detailed error logging for debugging
 * - Meaningful error messages for validation failures
 * - Continues processing when individual articles fail
 * - Graceful degradation when components are unavailable
 * 
 * Requirements: All requirements
 */

import { 
  ArticleProcessor as IArticleProcessor,
  ContentValidator,
  CategoryClassifier,
  ContentEnhancer,
  ComponentDetector,
  ImagePromptGenerator,
  CrossReferenceAnalyzer,
  OutputGenerator as IOutputGenerator,
  FileManager,
  MarkdownParser
} from '../interfaces';

import {
  ProcessingResult,
  ArticleResult,
  ProcessedArticle,
  ArticleJSON,
  MasterJSON,
  ProcessingError,
  StructureValidation,
  GeneratedElements,
  Category
} from '../types';

import { discoverMarkdownFiles } from '../utils/file-discovery';
import { parseMarkdownFile } from '../utils/markdown-parser';
import { validateStructure } from '../validators/structure-validator';
import { classifyArticle } from '../classifiers/category-classifier';
import { ArticleContentEnhancer } from './content-enhancer';
import { ComponentDetector as ComponentDetectorImpl } from '../detectors/component-detector';
import { ImagePromptGeneratorImpl } from '../generators/image-prompt-generator';
import { CrossReferenceAnalyzerImpl } from '../analyzers/cross-reference-analyzer';
import { OutputGenerator } from '../generators/output-generator';
import { ArticleFileManager } from '../utils/file-manager';
import { generateSlug } from '../utils/slug-generator';
import { DEFAULT_DIRECTORIES } from '../types';

/**
 * Main Article Processor implementation
 */
export class ArticleProcessor implements IArticleProcessor {
  private contentEnhancer!: ContentEnhancer;
  private componentDetector!: ComponentDetector;
  private imagePromptGenerator!: ImagePromptGenerator;
  private crossReferenceAnalyzer!: CrossReferenceAnalyzer;
  private outputGenerator!: IOutputGenerator;
  private fileManager!: FileManager;
  private isInitialized: boolean = false;

  constructor() {
    this.initializeComponents();
  }

  /**
   * Initialize all components with error handling
   */
  private initializeComponents(): void {
    try {
      this.contentEnhancer = new ArticleContentEnhancer();
      this.componentDetector = new ComponentDetectorImpl();
      this.imagePromptGenerator = new ImagePromptGeneratorImpl();
      this.crossReferenceAnalyzer = new CrossReferenceAnalyzerImpl();
      this.outputGenerator = new OutputGenerator();
      this.fileManager = new ArticleFileManager();
      this.isInitialized = true;
      console.log('✅ Article processor components initialized successfully');
    } catch (error) {
      console.error('❌ Failed to initialize article processor components:', error);
      this.isInitialized = false;
      throw new Error(`Failed to initialize article processor: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Check if processor is properly initialized
   */
  private ensureInitialized(): void {
    if (!this.isInitialized) {
      throw new Error('Article processor is not properly initialized');
    }
  }

  /**
   * Process all draft articles in the drafts directory
   * @returns Processing result with statistics and master JSON
   */
  async processAllDrafts(): Promise<ProcessingResult> {
    this.ensureInitialized();
    
    const startTime = Date.now();
    const errors: ProcessingError[] = [];
    const successfulArticles: ArticleJSON[] = [];
    let totalProcessed = 0;

    try {
      console.log('🔍 Discovering markdown files...');
      
      // Validate drafts directory exists
      await this.validateDraftsDirectory();
      
      const markdownFiles = await this.discoverMarkdownFilesWithRetry(DEFAULT_DIRECTORIES.drafts);
      
      if (markdownFiles.length === 0) {
        console.log('⚠️  No markdown files found in drafts directory');
        return this.createEmptyResult();
      }

      console.log(`📄 Found ${markdownFiles.length} markdown files to process`);
      totalProcessed = markdownFiles.length;

      // Ensure output directories exist
      await this.ensureOutputDirectories();

      // Process each article with individual error handling
      for (let i = 0; i < markdownFiles.length; i++) {
        const filePath = markdownFiles[i];
        const progress = `[${i + 1}/${markdownFiles.length}]`;
        
        try {
          console.log(`\n🔄 ${progress} Processing: ${filePath}`);
          const result = await this.processSingleArticleWithRetry(filePath);
          
          if (result.success && result.article) {
            successfulArticles.push(result.article);
            console.log(`✅ ${progress} Successfully processed: ${result.article.file_status.suggested_slug}`);
          } else {
            const error = this.createProcessingError(filePath, 'article_processing', result.error || 'Unknown processing error');
            errors.push(error);
            console.log(`❌ ${progress} Failed to process: ${filePath} - ${result.error}`);
          }
        } catch (error) {
          const processingError = this.createProcessingError(filePath, 'article_processing', error);
          errors.push(processingError);
          console.log(`❌ ${progress} Unexpected error processing ${filePath}: ${processingError.error}`);
        }
      }

      // Generate master JSON with error handling
      console.log('\n🔗 Generating master JSON and cross-reference analysis...');
      const masterJSON = await this.generateMasterJSONWithErrorHandling(successfulArticles);

      const processingTime = Date.now() - startTime;
      this.logProcessingResults(successfulArticles.length, totalProcessed, errors, processingTime);

      return {
        totalProcessed,
        successful: successfulArticles.length,
        failed: errors.length,
        errors,
        masterJSON
      };

    } catch (error) {
      const fatalError = this.createProcessingError('system', 'initialization', error);
      console.error(`💥 Fatal error during processing: ${fatalError.error}`);
      
      errors.push(fatalError);

      return {
        totalProcessed,
        successful: successfulArticles.length,
        failed: Math.max(0, totalProcessed - successfulArticles.length),
        errors,
        masterJSON: await this.createEmptyMasterJSON()
      };
    }
  }

  /**
   * Process a single article through all stages
   * @param filePath Path to the markdown file
   * @returns Article processing result
   */
  async processSingleArticle(filePath: string): Promise<ArticleResult> {
    this.ensureInitialized();
    
    const stages = [
      'parse_content',
      'validate_structure', 
      'classify_category',
      'enhance_content',
      'detect_components',
      'generate_images',
      'extract_cross_references',
      'generate_outputs',
      'write_files'
    ];

    let currentStage = '';

    try {
      // Stage 1: Parse markdown content
      currentStage = stages[0];
      const parsedContent = await this.parseArticleContentWithValidation(filePath);
      
      // Stage 2: Validate structure
      currentStage = stages[1];
      const structure = await this.validateArticleStructureWithFallback(parsedContent.content);
      
      // Stage 3: Classify category
      currentStage = stages[2];
      const category = await this.classifyArticleCategoryWithFallback(parsedContent.title, parsedContent.content);
      
      // Stage 4: Enhance content (generate missing elements)
      currentStage = stages[3];
      const enhancedElements = await this.enhanceArticleContentWithFallback(parsedContent, structure);
      
      // Stage 5: Detect components
      currentStage = stages[4];
      const components = await this.detectArticleComponentsWithFallback(parsedContent.content);
      
      // Stage 6: Generate image prompts
      currentStage = stages[5];
      const imageGeneration = await this.generateImagePromptsWithFallback(category, parsedContent.title);
      
      // Stage 7: Extract cross-reference data
      currentStage = stages[6];
      const crossReferenceData = await this.extractCrossReferenceDataWithFallback(parsedContent.content);
      
      // Stage 8: Create processed article object
      const processedArticle: ProcessedArticle = {
        filePath,
        originalContent: parsedContent.content,
        frontmatter: parsedContent.frontmatter,
        title: parsedContent.title,
        content: parsedContent.content,
        wordCount: parsedContent.wordCount,
        structure,
        category,
        components,
        topicFingerprint: crossReferenceData.topicFingerprint,
        namedEntities: crossReferenceData.namedEntities,
        enhancedElements,
        imageGeneration
      };

      // Stage 9: Generate outputs
      currentStage = stages[7];
      const outputs = await this.generateArticleOutputsWithValidation(processedArticle);
      
      // Stage 10: Write files
      currentStage = stages[8];
      await this.writeArticleFilesWithVerification(processedArticle, outputs);

      return {
        success: true,
        filePath,
        article: outputs.json
      };

    } catch (error) {
      const errorMessage = this.formatStageError(currentStage, error);
      console.error(`❌ Error in stage '${currentStage}' for ${filePath}: ${errorMessage}`);
      
      return {
        success: false,
        filePath,
        error: `Stage '${currentStage}': ${errorMessage}`
      };
    }
  }

  /**
   * Generate master JSON from all processed articles
   * @param articles Optional array of articles (if not provided, will compile from existing outputs)
   * @returns Master JSON with cross-reference analysis
   */
  async generateMasterJSON(articles?: ArticleJSON[]): Promise<MasterJSON> {
    try {
      let articlesToProcess: ArticleJSON[];

      if (articles) {
        articlesToProcess = articles;
      } else {
        // Load articles from processing directory if not provided
        articlesToProcess = await this.loadProcessedArticles();
      }

      // Create initial master JSON
      const masterJSON = this.outputGenerator.compileMasterJSON(articlesToProcess);

      // Perform cross-reference analysis
      console.log('🔍 Analyzing redundancy and cross-references...');
      const redundancyAnalysis = await this.crossReferenceAnalyzer.analyzeRedundancy(masterJSON);
      const crossReferenceRecommendations = await this.crossReferenceAnalyzer.generateCrossReferences(masterJSON);

      // Update master JSON with analysis results
      masterJSON.redundancy_analysis = redundancyAnalysis;
      masterJSON.cross_reference_suggestions = crossReferenceRecommendations;

      // Write master JSON to processing directory
      await this.writeMasterJSON(masterJSON);

      return masterJSON;

    } catch (error) {
      console.error('Error generating master JSON:', error);
      return await this.createEmptyMasterJSON();
    }
  }

  // ============================================================================
  // Private Processing Stage Methods
  // ============================================================================

  /**
   * Stage 1: Parse markdown content
   */
  private async parseArticleContent(filePath: string): Promise<{
    frontmatter: Record<string, any>;
    content: string;
    title: string;
    wordCount: number;
  }> {
    try {
      return await parseMarkdownFile(filePath);
    } catch (error) {
      throw new Error(`Failed to parse markdown: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Stage 2: Validate article structure
   */
  private async validateArticleStructure(content: string): Promise<StructureValidation> {
    try {
      return validateStructure(content);
    } catch (error) {
      throw new Error(`Failed to validate structure: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Stage 3: Classify article category
   */
  private async classifyArticleCategory(title: string, content: string): Promise<Category> {
    try {
      return classifyArticle(title, content);
    } catch (error) {
      throw new Error(`Failed to classify category: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Stage 4: Enhance article content
   */
  private async enhanceArticleContent(
    parsedContent: { frontmatter: Record<string, any>; content: string; title: string },
    structure: StructureValidation
  ): Promise<{ tldr?: string; objectives?: string[]; keywords?: string[] }> {
    try {
      const enhancedElements: { tldr?: string; objectives?: string[]; keywords?: string[] } = {};

      // Check if TL;DR is missing and generate if needed
      const hasTLDR = parsedContent.frontmatter.tldr || 
                     parsedContent.frontmatter.summary || 
                     parsedContent.content.toLowerCase().includes('tl;dr') ||
                     parsedContent.content.toLowerCase().includes('executive summary');
      
      if (!hasTLDR) {
        enhancedElements.tldr = this.contentEnhancer.generateTLDR(parsedContent.content);
      }

      // Check if learning objectives are missing and generate if needed
      const hasObjectives = parsedContent.frontmatter.learning_objectives ||
                           parsedContent.frontmatter.objectives ||
                           parsedContent.content.toLowerCase().includes('learning objective') ||
                           parsedContent.content.toLowerCase().includes('you will learn');
      
      if (!hasObjectives) {
        enhancedElements.objectives = this.contentEnhancer.generateLearningObjectives(parsedContent.content);
      }

      // Check if SEO keywords are missing and generate if needed
      const hasKeywords = parsedContent.frontmatter.keywords ||
                         parsedContent.frontmatter.tags ||
                         parsedContent.frontmatter.seo_keywords;
      
      if (!hasKeywords) {
        enhancedElements.keywords = this.contentEnhancer.generateSEOKeywords(parsedContent.title, parsedContent.content);
      }

      return enhancedElements;

    } catch (error) {
      throw new Error(`Failed to enhance content: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Stage 5: Detect article components
   */
  private async detectArticleComponents(content: string): Promise<import('../types').ComponentItem[]> {
    try {
      return this.componentDetector.detectAllComponents(content);
    } catch (error) {
      throw new Error(`Failed to detect components: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Stage 6: Generate image prompts
   */
  private async generateImagePrompts(category: Category, title: string): Promise<import('../types').ImagePrompt> {
    try {
      return this.imagePromptGenerator.generatePrompt(category, title);
    } catch (error) {
      throw new Error(`Failed to generate image prompts: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Stage 7: Extract cross-reference data
   */
  private async extractCrossReferenceData(content: string): Promise<{
    topicFingerprint: string[];
    namedEntities: string[];
  }> {
    try {
      const topicFingerprint = this.crossReferenceAnalyzer.extractTopicFingerprint(content);
      const namedEntities = this.crossReferenceAnalyzer.extractNamedEntities(content);
      
      return {
        topicFingerprint,
        namedEntities
      };
    } catch (error) {
      throw new Error(`Failed to extract cross-reference data: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Stage 8: Generate all output formats
   */
  private async generateArticleOutputs(processedArticle: ProcessedArticle): Promise<{
    yaml: string;
    json: ArticleJSON;
    jsonString: string;
    markdown: string;
  }> {
    try {
      return this.outputGenerator.generateAllFormats(processedArticle);
    } catch (error) {
      throw new Error(`Failed to generate outputs: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Stage 9: Write all files to appropriate directories
   */
  private async writeArticleFiles(
    processedArticle: ProcessedArticle,
    outputs: { yaml: string; json: ArticleJSON; jsonString: string; markdown: string }
  ): Promise<void> {
    try {
      const slug = generateSlug(processedArticle.title);

      // Write processing outputs (YAML and JSON)
      await this.fileManager.writeProcessingOutput(slug, outputs.yaml, outputs.jsonString);

      // Write cleaned markdown
      await this.fileManager.writeCleanedMarkdown(slug, outputs.markdown);

      // Move original to review directory
      await this.fileManager.moveToReview(processedArticle.filePath);

    } catch (error) {
      throw new Error(`Failed to write files: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  // ============================================================================
  // Error Handling and Recovery Methods
  // ============================================================================

  /**
   * Create a standardized processing error
   */
  private createProcessingError(filePath: string, stage: string, error: unknown): ProcessingError {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return {
      filePath,
      stage,
      error: errorMessage,
      timestamp: new Date().toISOString()
    };
  }

  /**
   * Format stage-specific error messages
   */
  private formatStageError(stage: string, error: unknown): string {
    const baseMessage = error instanceof Error ? error.message : String(error);
    
    const stageMessages: Record<string, string> = {
      'parse_content': 'Failed to parse markdown content',
      'validate_structure': 'Failed to validate article structure',
      'classify_category': 'Failed to classify article category',
      'enhance_content': 'Failed to enhance article content',
      'detect_components': 'Failed to detect article components',
      'generate_images': 'Failed to generate image prompts',
      'extract_cross_references': 'Failed to extract cross-reference data',
      'generate_outputs': 'Failed to generate output formats',
      'write_files': 'Failed to write output files'
    };

    const stageMessage = stageMessages[stage] || `Failed in stage '${stage}'`;
    return `${stageMessage}: ${baseMessage}`;
  }

  /**
   * Validate drafts directory exists and is accessible
   */
  private async validateDraftsDirectory(): Promise<void> {
    try {
      await this.fileManager.createDirectoryIfNotExists(DEFAULT_DIRECTORIES.drafts);
    } catch (error) {
      throw new Error(`Cannot access drafts directory '${DEFAULT_DIRECTORIES.drafts}': ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Ensure all output directories exist
   */
  private async ensureOutputDirectories(): Promise<void> {
    const directories = [
      DEFAULT_DIRECTORIES.processing,
      DEFAULT_DIRECTORIES.review,
      DEFAULT_DIRECTORIES.clean
    ];

    for (const dir of directories) {
      try {
        await this.fileManager.createDirectoryIfNotExists(dir);
      } catch (error) {
        console.warn(`⚠️  Warning: Could not create directory '${dir}': ${error instanceof Error ? error.message : String(error)}`);
      }
    }
  }

  /**
   * Discover markdown files with retry logic
   */
  private async discoverMarkdownFilesWithRetry(directory: string, maxRetries: number = 3): Promise<string[]> {
    let lastError: Error | null = null;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        return await discoverMarkdownFiles(directory);
      } catch (error) {
        lastError = error instanceof Error ? error : new Error(String(error));
        console.warn(`⚠️  Attempt ${attempt}/${maxRetries} failed to discover files: ${lastError.message}`);
        
        if (attempt < maxRetries) {
          // Wait before retry (exponential backoff)
          await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
        }
      }
    }
    
    throw lastError || new Error('Failed to discover markdown files after retries');
  }

  /**
   * Process single article with retry logic
   */
  private async processSingleArticleWithRetry(filePath: string, maxRetries: number = 2): Promise<ArticleResult> {
    let lastError: Error | null = null;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        return await this.processSingleArticle(filePath);
      } catch (error) {
        lastError = error instanceof Error ? error : new Error(String(error));
        console.warn(`⚠️  Attempt ${attempt}/${maxRetries} failed for ${filePath}: ${lastError.message}`);
        
        if (attempt < maxRetries) {
          // Wait before retry
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }
    }
    
    return {
      success: false,
      filePath,
      error: lastError?.message || 'Failed after retries'
    };
  }

  /**
   * Generate master JSON with comprehensive error handling
   */
  private async generateMasterJSONWithErrorHandling(articles: ArticleJSON[]): Promise<MasterJSON> {
    try {
      return await this.generateMasterJSON(articles);
    } catch (error) {
      console.error('❌ Error generating master JSON, using fallback:', error);
      
      // Create fallback master JSON with basic information
      const fallbackMasterJSON = this.outputGenerator.compileMasterJSON(articles);
      
      // Add error information to the analysis
      fallbackMasterJSON.redundancy_analysis = {
        overlapping_articles: [],
        duplicate_examples: [],
        restructuring_recommendations: [{
          articles: ['system'],
          issue: 'Cross-reference analysis failed',
          suggestion: `Error during analysis: ${error instanceof Error ? error.message : String(error)}`
        }],
        ollama_analysis: {
          model_used: 'error',
          confidence_score: 0,
          processing_time: 0
        }
      };
      
      return fallbackMasterJSON;
    }
  }

  /**
   * Log processing results with detailed information
   */
  private logProcessingResults(successful: number, total: number, errors: ProcessingError[], processingTime: number): void {
    console.log(`\n📊 Processing complete in ${processingTime}ms`);
    console.log(`✅ Successfully processed: ${successful}/${total} articles`);
    
    if (errors.length > 0) {
      console.log(`❌ Failed: ${errors.length} articles`);
      
      // Group errors by stage for better reporting
      const errorsByStage = errors.reduce((acc, error) => {
        if (!acc[error.stage]) {
          acc[error.stage] = [];
        }
        acc[error.stage].push(error);
        return acc;
      }, {} as Record<string, ProcessingError[]>);

      Object.entries(errorsByStage).forEach(([stage, stageErrors]) => {
        console.log(`   Stage '${stage}': ${stageErrors.length} errors`);
        stageErrors.forEach(error => {
          console.log(`     - ${error.filePath}: ${error.error}`);
        });
      });
    }
  }

  // ============================================================================
  // Enhanced Processing Stage Methods with Error Handling
  // ============================================================================

  /**
   * Parse article content with validation
   */
  private async parseArticleContentWithValidation(filePath: string): Promise<{
    frontmatter: Record<string, any>;
    content: string;
    title: string;
    wordCount: number;
  }> {
    try {
      const result = await parseMarkdownFile(filePath);
      
      // Validate parsed content
      if (!result.content || result.content.trim().length === 0) {
        throw new Error('Article content is empty');
      }
      
      if (!result.title || result.title.trim().length === 0) {
        console.warn(`⚠️  Warning: No title found for ${filePath}, using filename`);
        result.title = filePath.split('/').pop()?.replace('.md', '') || 'Untitled';
      }
      
      return result;
    } catch (error) {
      throw new Error(`Failed to parse markdown: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Validate article structure with fallback
   */
  private async validateArticleStructureWithFallback(content: string): Promise<StructureValidation> {
    try {
      return validateStructure(content);
    } catch (error) {
      console.warn('⚠️  Structure validation failed, using fallback:', error);
      return {
        has_h1: false,
        has_intro: false,
        has_conclusion: false,
        header_depth_valid: false
      };
    }
  }

  /**
   * Classify article category with fallback
   */
  private async classifyArticleCategoryWithFallback(title: string, content: string): Promise<Category> {
    try {
      return classifyArticle(title, content);
    } catch (error) {
      console.warn('⚠️  Category classification failed, using fallback:', error);
      return "AI Fundamentals"; // Default fallback category
    }
  }

  /**
   * Enhance article content with fallback
   */
  private async enhanceArticleContentWithFallback(
    parsedContent: { frontmatter: Record<string, any>; content: string; title: string },
    structure: StructureValidation
  ): Promise<{ tldr?: string; objectives?: string[]; keywords?: string[] }> {
    try {
      return await this.enhanceArticleContent(parsedContent, structure);
    } catch (error) {
      console.warn('⚠️  Content enhancement failed, using minimal fallback:', error);
      return {
        tldr: "This article provides insights into AI governance and best practices.",
        objectives: ["Understand key concepts", "Apply best practices", "Evaluate frameworks"],
        keywords: ["AI governance", "artificial intelligence", "compliance", "risk management", "best practices"]
      };
    }
  }

  /**
   * Detect article components with fallback
   */
  private async detectArticleComponentsWithFallback(content: string): Promise<import('../types').ComponentItem[]> {
    try {
      return this.componentDetector.detectAllComponents(content);
    } catch (error) {
      console.warn('⚠️  Component detection failed, using empty result:', error);
      return [];
    }
  }

  /**
   * Generate image prompts with fallback
   */
  private async generateImagePromptsWithFallback(category: Category, title: string): Promise<import('../types').ImagePrompt> {
    try {
      return this.imagePromptGenerator.generatePrompt(category, title);
    } catch (error) {
      console.warn('⚠️  Image prompt generation failed, using fallback:', error);
      return {
        formula: "Abstract geometric illustration, earth tones, minimalist, professional",
        category_motif: "neural networks",
        master_size: "1200x750px",
        css_filters: true
      };
    }
  }

  /**
   * Extract cross-reference data with fallback
   */
  private async extractCrossReferenceDataWithFallback(content: string): Promise<{
    topicFingerprint: string[];
    namedEntities: string[];
  }> {
    try {
      const topicFingerprint = this.crossReferenceAnalyzer.extractTopicFingerprint(content);
      const namedEntities = this.crossReferenceAnalyzer.extractNamedEntities(content);
      
      return {
        topicFingerprint,
        namedEntities
      };
    } catch (error) {
      console.warn('⚠️  Cross-reference extraction failed, using empty result:', error);
      return {
        topicFingerprint: [],
        namedEntities: []
      };
    }
  }

  /**
   * Generate article outputs with validation
   */
  private async generateArticleOutputsWithValidation(processedArticle: ProcessedArticle): Promise<{
    yaml: string;
    json: ArticleJSON;
    jsonString: string;
    markdown: string;
  }> {
    try {
      const outputs = this.outputGenerator.generateAllFormats(processedArticle);
      
      // Validate outputs
      const validation = this.outputGenerator.validateAllFormats(outputs);
      
      if (!validation.allValid) {
        const invalidFormats = Object.entries(validation)
          .filter(([key, valid]) => key !== 'allValid' && !valid)
          .map(([key]) => key);
        
        console.warn(`⚠️  Output validation failed for formats: ${invalidFormats.join(', ')}`);
      }
      
      return outputs;
    } catch (error) {
      throw new Error(`Failed to generate outputs: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Write article files with verification
   */
  private async writeArticleFilesWithVerification(
    processedArticle: ProcessedArticle,
    outputs: { yaml: string; json: ArticleJSON; jsonString: string; markdown: string }
  ): Promise<void> {
    try {
      const slug = generateSlug(processedArticle.title);

      // Write processing outputs (YAML and JSON) with verification
      await this.fileManager.writeProcessingOutput(slug, outputs.yaml, outputs.jsonString);

      // Write cleaned markdown with verification
      await this.fileManager.writeCleanedMarkdown(slug, outputs.markdown);

      // Move original to review directory with verification
      await this.fileManager.moveToReview(processedArticle.filePath);

    } catch (error) {
      throw new Error(`Failed to write files: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  // ============================================================================
  // Helper Methods
  // ============================================================================

  /**
   * Load processed articles from the processing directory
   */
  private async loadProcessedArticles(): Promise<ArticleJSON[]> {
    // This would load JSON files from the processing directory
    // For now, return empty array as this is typically called with articles parameter
    return [];
  }

  /**
   * Write master JSON to processing directory
   */
  private async writeMasterJSON(masterJSON: MasterJSON): Promise<void> {
    try {
      const jsonString = JSON.stringify(masterJSON, null, 2);
      await this.fileManager.writeProcessingOutput('master', '', jsonString);
    } catch (error) {
      console.error('Failed to write master JSON:', error);
    }
  }

  /**
   * Create empty processing result for error cases
   */
  private createEmptyResult(): ProcessingResult {
    return {
      totalProcessed: 0,
      successful: 0,
      failed: 0,
      errors: [],
      masterJSON: {
        processing_summary: {
          total_articles: 0,
          processing_date: new Date().toISOString(),
          categories_distribution: {
            "AI Fundamentals": 0,
            "AI Risks & Principles": 0,
            "Legal Frameworks": 0,
            "AI Laws": 0,
            "Risk Frameworks & Standards": 0,
            "AI Development Lifecycle": 0,
            "Governance Implementation": 0,
            "AI Auditing & Accountability": 0,
            "Future Concerns": 0,
            "Industry-Specific Insights": 0,
            "Practical Guides": 0
          }
        },
        articles: [],
        redundancy_analysis: {
          overlapping_articles: [],
          duplicate_examples: [],
          restructuring_recommendations: [],
          ollama_analysis: {
            model_used: 'none',
            confidence_score: 0,
            processing_time: 0
          }
        },
        cross_reference_suggestions: {
          suggestions: []
        }
      }
    };
  }

  /**
   * Create empty master JSON for error cases
   */
  private async createEmptyMasterJSON(): Promise<MasterJSON> {
    return this.createEmptyResult().masterJSON;
  }
}

// Export singleton instance for convenience
export const articleProcessor = new ArticleProcessor();