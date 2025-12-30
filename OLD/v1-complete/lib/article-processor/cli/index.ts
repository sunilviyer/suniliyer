#!/usr/bin/env node

/**
 * Article Content Processor CLI
 * 
 * Command-line interface for processing articles with options for:
 * - Single article vs batch processing
 * - Ollama model selection
 * - Verbose logging and progress reporting
 * - Output directory structure display
 * 
 * Requirements: All requirements
 */

import { program } from 'commander';
import { articleProcessor } from '../processors/article-processor';
import { CLIConfig, loadConfig, validateConfig, getConfigDocumentation } from './config';
import { validateConfigurationComprehensive, createMissingDirectories } from './config-validator';
import { initializeConfiguration } from './config-init';
import { CLILogger } from './logger';
import { displayDirectoryStructure, displayProcessingResults, displayConfiguration } from './display';
import { ProcessingResult } from '../types';
import * as path from 'path';
import * as fs from 'fs/promises';

/**
 * Main CLI application
 */
class ArticleProcessorCLI {
  private config: CLIConfig;
  private logger: CLILogger;

  constructor() {
    this.config = loadConfig();
    this.logger = new CLILogger();
  }

  /**
   * Initialize and run the CLI
   */
  async run(): Promise<void> {
    program
      .name('article-processor')
      .description('AI Governance Article Content Processor')
      .version('1.0.0');

    // Batch processing command (default)
    program
      .command('process', { isDefault: true })
      .description('Process all articles in the drafts directory')
      .option('-v, --verbose', 'Enable verbose logging')
      .option('-m, --model <model>', 'Ollama model to use for analysis', this.config.ollama.model)
      .option('--drafts <path>', 'Path to drafts directory', this.config.directories.drafts)
      .option('--processing <path>', 'Path to processing output directory', this.config.directories.processing)
      .option('--review <path>', 'Path to review directory', this.config.directories.review)
      .option('--clean <path>', 'Path to clean output directory', this.config.directories.clean)
      .option('--show-structure', 'Display output directory structure before processing')
      .action(async (options) => {
        await this.handleBatchProcessing(options);
      });

    // Single article processing command
    program
      .command('single <file>')
      .description('Process a single article file')
      .option('-v, --verbose', 'Enable verbose logging')
      .option('-m, --model <model>', 'Ollama model to use for analysis', this.config.ollama.model)
      .option('--drafts <path>', 'Path to drafts directory', this.config.directories.drafts)
      .option('--processing <path>', 'Path to processing output directory', this.config.directories.processing)
      .option('--review <path>', 'Path to review directory', this.config.directories.review)
      .option('--clean <path>', 'Path to clean output directory', this.config.directories.clean)
      .action(async (file, options) => {
        await this.handleSingleProcessing(file, options);
      });

    // Configuration commands
    program
      .command('config')
      .description('Configuration management')
      .option('--show', 'Show current configuration')
      .option('--validate', 'Validate configuration')
      .option('--init', 'Initialize default configuration file')
      .option('--interactive', 'Interactive configuration setup')
      .option('--force', 'Force overwrite existing configuration')
      .option('--create-dirs', 'Create missing directories', true)
      .option('--docs', 'Show configuration documentation')
      .action(async (options) => {
        await this.handleConfigManagement(options);
      });

    // Directory structure command
    program
      .command('structure')
      .description('Display output directory structure')
      .option('--drafts <path>', 'Path to drafts directory', this.config.directories.drafts)
      .option('--processing <path>', 'Path to processing output directory', this.config.directories.processing)
      .option('--review <path>', 'Path to review directory', this.config.directories.review)
      .option('--clean <path>', 'Path to clean output directory', this.config.directories.clean)
      .action(async (options) => {
        await this.handleStructureDisplay(options);
      });

    await program.parseAsync();
  }

  /**
   * Handle batch processing of all articles
   */
  private async handleBatchProcessing(options: any): Promise<void> {
    try {
      // Update configuration with command line options
      this.updateConfigFromOptions(options);
      
      // Validate configuration
      const validation = validateConfig(this.config);
      if (!validation.isValid) {
        this.logger.error('Configuration validation failed:');
        validation.errors.forEach(error => this.logger.error(`  - ${error}`));
        process.exit(1);
      }

      // Set verbose logging
      if (options.verbose) {
        this.logger.setVerbose(true);
      }

      // Display directory structure if requested
      if (options.showStructure) {
        await this.displayDirectoryStructure();
      }

      this.logger.info('🚀 Starting batch processing of all articles...');
      this.logger.verbose(`Using Ollama model: ${this.config.ollama.model}`);
      this.logger.verbose(`Drafts directory: ${this.config.directories.drafts}`);
      this.logger.verbose(`Processing output: ${this.config.directories.processing}`);
      this.logger.verbose(`Review directory: ${this.config.directories.review}`);
      this.logger.verbose(`Clean output: ${this.config.directories.clean}`);

      const startTime = Date.now();
      const result = await articleProcessor.processAllDrafts();
      const processingTime = Date.now() - startTime;

      // Display results
      await this.displayProcessingResults(result, processingTime);

      // Exit with appropriate code
      process.exit(result.failed > 0 ? 1 : 0);

    } catch (error) {
      this.logger.error(`Fatal error during batch processing: ${error instanceof Error ? error.message : String(error)}`);
      process.exit(1);
    }
  }

  /**
   * Handle single article processing
   */
  private async handleSingleProcessing(file: string, options: any): Promise<void> {
    try {
      // Update configuration with command line options
      this.updateConfigFromOptions(options);
      
      // Validate configuration
      const validation = validateConfig(this.config);
      if (!validation.isValid) {
        this.logger.error('Configuration validation failed:');
        validation.errors.forEach(error => this.logger.error(`  - ${error}`));
        process.exit(1);
      }

      // Set verbose logging
      if (options.verbose) {
        this.logger.setVerbose(true);
      }

      // Resolve file path
      const filePath = path.resolve(file);
      
      // Check if file exists
      try {
        await fs.access(filePath);
      } catch (error) {
        this.logger.error(`File not found: ${filePath}`);
        process.exit(1);
      }

      this.logger.info(`🔄 Processing single article: ${filePath}`);
      this.logger.verbose(`Using Ollama model: ${this.config.ollama.model}`);

      const startTime = Date.now();
      const result = await articleProcessor.processSingleArticle(filePath);
      const processingTime = Date.now() - startTime;

      if (result.success) {
        this.logger.success(`✅ Successfully processed article in ${processingTime}ms`);
        this.logger.info(`   Slug: ${result.article?.file_status.suggested_slug}`);
        this.logger.info(`   Category: ${result.article?.file_status.category}`);
        this.logger.info(`   Word count: ${result.article?.file_status.word_count_check.actual}`);
        
        if (options.verbose && result.article) {
          this.logger.verbose('Generated outputs:');
          this.logger.verbose(`   YAML: ${this.config.directories.processing}/${result.article.file_status.suggested_slug}.yaml`);
          this.logger.verbose(`   JSON: ${this.config.directories.processing}/${result.article.file_status.suggested_slug}.json`);
          this.logger.verbose(`   Clean MD: ${this.config.directories.clean}/${result.article.file_status.suggested_slug}.md`);
          this.logger.verbose(`   Moved to review: ${this.config.directories.review}/`);
        }
      } else {
        this.logger.error(`❌ Failed to process article: ${result.error}`);
        process.exit(1);
      }

    } catch (error) {
      this.logger.error(`Fatal error during single article processing: ${error instanceof Error ? error.message : String(error)}`);
      process.exit(1);
    }
  }

  /**
   * Handle configuration management
   */
  private async handleConfigManagement(options: any): Promise<void> {
    try {
      if (options.docs) {
        console.log(getConfigDocumentation());
        return;
      }

      if (options.show) {
        displayConfiguration(this.config, this.logger);
        return;
      }

      if (options.validate) {
        this.logger.info('🔍 Validating configuration...');
        const validation = await validateConfigurationComprehensive(this.config);
        
        if (validation.isValid) {
          this.logger.success('✅ Configuration is valid');
          
          if (validation.warnings.length > 0) {
            this.logger.warn('⚠️  Warnings:');
            validation.warnings.forEach(warning => this.logger.warn(`  - ${warning}`));
          }
          
          // Display directory status
          this.logger.blank();
          this.logger.info('📁 Directory Status:');
          Object.entries(validation.directoryStatus).forEach(([name, status]) => {
            const icon = status.exists ? '✅' : '❌';
            const fileInfo = status.fileCount !== undefined ? ` (${status.fileCount} files)` : '';
            this.logger.info(`  ${icon} ${name}: ${status.exists ? 'exists' : 'missing'}${fileInfo}`);
          });
          
          // Display Ollama status
          this.logger.blank();
          this.logger.info('🤖 Ollama Status:');
          const ollamaIcon = validation.ollamaStatus.reachable ? '✅' : '❌';
          this.logger.info(`  ${ollamaIcon} Service: ${validation.ollamaStatus.reachable ? 'reachable' : 'not reachable'}`);
          if (validation.ollamaStatus.version) {
            this.logger.info(`  📋 Version: ${validation.ollamaStatus.version}`);
          }
          if (validation.ollamaStatus.modelAvailable !== undefined) {
            const modelIcon = validation.ollamaStatus.modelAvailable ? '✅' : '❌';
            this.logger.info(`  ${modelIcon} Model '${this.config.ollama.model}': ${validation.ollamaStatus.modelAvailable ? 'available' : 'not available'}`);
          }
          
        } else {
          this.logger.error('❌ Configuration validation failed:');
          validation.errors.forEach(error => this.logger.error(`  - ${error}`));
          
          if (validation.warnings.length > 0) {
            this.logger.warn('⚠️  Additional warnings:');
            validation.warnings.forEach(warning => this.logger.warn(`  - ${warning}`));
          }
          
          process.exit(1);
        }
        return;
      }

      if (options.init) {
        await initializeConfiguration({
          interactive: options.interactive || false,
          force: options.force || false,
          createDirectories: options.createDirs !== false,
          validateOllama: true
        }, this.logger);
        return;
      }

      // Default: show help for config command
      this.logger.info('Configuration management options:');
      this.logger.info('  --show         Show current configuration');
      this.logger.info('  --validate     Validate configuration with environment checks');
      this.logger.info('  --init         Initialize default configuration file');
      this.logger.info('  --interactive  Interactive configuration setup');
      this.logger.info('  --force        Force overwrite existing configuration');
      this.logger.info('  --create-dirs  Create missing directories (default: true)');
      this.logger.info('  --docs         Show configuration documentation');

    } catch (error) {
      this.logger.error(`Error in configuration management: ${error instanceof Error ? error.message : String(error)}`);
      process.exit(1);
    }
  }

  /**
   * Handle directory structure display
   */
  private async handleStructureDisplay(options: any): Promise<void> {
    try {
      // Update configuration with command line options
      this.updateConfigFromOptions(options);
      
      await this.displayDirectoryStructure();

    } catch (error) {
      this.logger.error(`Error displaying directory structure: ${error instanceof Error ? error.message : String(error)}`);
      process.exit(1);
    }
  }

  /**
   * Update configuration from command line options
   */
  private updateConfigFromOptions(options: any): void {
    if (options.model) {
      this.config.ollama.model = options.model;
    }
    if (options.drafts) {
      this.config.directories.drafts = options.drafts;
    }
    if (options.processing) {
      this.config.directories.processing = options.processing;
    }
    if (options.review) {
      this.config.directories.review = options.review;
    }
    if (options.clean) {
      this.config.directories.clean = options.clean;
    }
  }

  /**
   * Display directory structure
   */
  private async displayDirectoryStructure(): Promise<void> {
    this.logger.info('📁 Output Directory Structure:');
    await displayDirectoryStructure(this.config.directories, this.logger);
  }

  /**
   * Display processing results
   */
  private async displayProcessingResults(result: ProcessingResult, processingTime: number): Promise<void> {
    await displayProcessingResults(result, processingTime, this.logger);
  }

  /**
   * Initialize default configuration file
   */
  private async initializeConfig(): Promise<void> {
    const configPath = path.join(process.cwd(), 'article-processor.config.json');
    
    try {
      // Check if config file already exists
      await fs.access(configPath);
      this.logger.warn(`Configuration file already exists: ${configPath}`);
      return;
    } catch (error) {
      // File doesn't exist, create it
    }

    const defaultConfig: CLIConfig = {
      ollama: {
        model: 'llama2',
        endpoint: 'http://localhost:11434',
        timeout: 30000
      },
      directories: {
        drafts: 'content/articles/drafts',
        processing: 'content/articles/articleprocessing',
        review: 'content/articles/review',
        clean: 'content/articles/clean'
      },
      logging: {
        verbose: false,
        showProgress: true
      }
    };

    await fs.writeFile(configPath, JSON.stringify(defaultConfig, null, 2));
    this.logger.success(`✅ Created default configuration file: ${configPath}`);
    this.logger.info('You can now customize the configuration and run the processor.');
  }
}

/**
 * Main entry point
 */
async function main(): Promise<void> {
  const cli = new ArticleProcessorCLI();
  await cli.run();
}

// Run CLI if this file is executed directly
if (require.main === module) {
  main().catch((error) => {
    console.error('Fatal CLI error:', error);
    process.exit(1);
  });
}

export { ArticleProcessorCLI };