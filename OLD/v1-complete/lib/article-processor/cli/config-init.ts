/**
 * Configuration Initialization Utility
 * 
 * Provides interactive configuration setup and initialization:
 * - Interactive configuration wizard
 * - Environment detection and recommendations
 * - Configuration file generation
 * - Directory structure setup
 * 
 * Requirements: All requirements
 */

import { CLIConfig, DEFAULT_CONFIG, saveConfig } from './config';
import { validateConfigurationComprehensive, createMissingDirectories } from './config-validator';
import { CLILogger } from './logger';
import * as fs from 'fs/promises';
import * as path from 'path';
import * as readline from 'readline';

/**
 * Configuration initialization options
 */
export interface ConfigInitOptions {
  interactive: boolean;
  force: boolean;
  createDirectories: boolean;
  validateOllama: boolean;
}

/**
 * Initialize configuration with interactive setup
 */
export async function initializeConfiguration(
  options: ConfigInitOptions = {
    interactive: false,
    force: false,
    createDirectories: true,
    validateOllama: true
  },
  logger: CLILogger = new CLILogger()
): Promise<CLIConfig> {
  
  logger.info('🚀 Initializing Article Processor Configuration');
  logger.blank();

  // Check if configuration already exists
  const configPath = path.resolve('article-processor.config.json');
  const configExists = await checkConfigExists(configPath);

  if (configExists && !options.force) {
    logger.warn(`Configuration file already exists: ${configPath}`);
    logger.info('Use --force to overwrite existing configuration');
    
    if (options.interactive) {
      const overwrite = await promptYesNo('Overwrite existing configuration?', false);
      if (!overwrite) {
        logger.info('Configuration initialization cancelled');
        process.exit(0);
      }
    } else {
      process.exit(1);
    }
  }

  // Start with default configuration
  let config: CLIConfig = { ...DEFAULT_CONFIG };

  // Interactive configuration if requested
  if (options.interactive) {
    config = await interactiveConfigSetup(config, logger);
  }

  // Validate configuration
  logger.info('🔍 Validating configuration...');
  const validation = await validateConfigurationComprehensive(config);

  // Display validation results
  if (validation.errors.length > 0) {
    logger.error('❌ Configuration validation failed:');
    validation.errors.forEach(error => logger.error(`  - ${error}`));
    
    if (options.interactive) {
      const fix = await promptYesNo('Would you like to fix these issues?', true);
      if (fix) {
        config = await fixConfigurationIssues(config, validation, logger);
      }
    } else {
      throw new Error('Configuration validation failed');
    }
  }

  // Display warnings
  if (validation.warnings.length > 0) {
    logger.warn('⚠️  Configuration warnings:');
    validation.warnings.forEach(warning => logger.warn(`  - ${warning}`));
  }

  // Create missing directories if requested
  if (options.createDirectories) {
    logger.info('📁 Creating output directories...');
    const dirResult = await createMissingDirectories(config.directories);
    
    if (dirResult.created.length > 0) {
      logger.success(`✅ Created directories: ${dirResult.created.join(', ')}`);
    }
    
    if (dirResult.failed.length > 0) {
      logger.error('❌ Failed to create directories:');
      dirResult.failed.forEach(({ path, error }) => {
        logger.error(`  - ${path}: ${error}`);
      });
    }
  }

  // Save configuration
  logger.info('💾 Saving configuration...');
  await saveConfig(config, configPath);
  logger.success(`✅ Configuration saved to: ${configPath}`);

  // Display final configuration
  logger.blank();
  logger.info('📋 Final Configuration:');
  logger.configuration(config);

  // Display next steps
  displayNextSteps(config, logger);

  return config;
}

/**
 * Interactive configuration setup
 */
async function interactiveConfigSetup(config: CLIConfig, logger: CLILogger): Promise<CLIConfig> {
  logger.info('🎯 Interactive Configuration Setup');
  logger.blank();

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  try {
    // Ollama configuration
    logger.info('Ollama Configuration:');
    config.ollama.model = await promptWithDefault(rl, 'Ollama model', config.ollama.model);
    config.ollama.endpoint = await promptWithDefault(rl, 'Ollama endpoint', config.ollama.endpoint);
    config.ollama.timeout = parseInt(await promptWithDefault(rl, 'Timeout (ms)', config.ollama.timeout.toString()));

    logger.blank();

    // Directory configuration
    logger.info('Directory Configuration:');
    config.directories.drafts = await promptWithDefault(rl, 'Drafts directory', config.directories.drafts);
    config.directories.processing = await promptWithDefault(rl, 'Processing output directory', config.directories.processing);
    config.directories.review = await promptWithDefault(rl, 'Review directory', config.directories.review);
    config.directories.clean = await promptWithDefault(rl, 'Clean output directory', config.directories.clean);

    logger.blank();

    // Logging configuration
    logger.info('Logging Configuration:');
    config.logging.verbose = await promptYesNo('Enable verbose logging?', config.logging.verbose);
    config.logging.showProgress = await promptYesNo('Show progress indicators?', config.logging.showProgress);

    return config;
  } finally {
    rl.close();
  }
}

/**
 * Fix configuration issues interactively
 */
async function fixConfigurationIssues(
  config: CLIConfig,
  validation: any,
  logger: CLILogger
): Promise<CLIConfig> {
  // This would implement interactive fixing of configuration issues
  // For now, return the config as-is
  logger.info('Configuration issue fixing not yet implemented');
  return config;
}

/**
 * Check if configuration file exists
 */
async function checkConfigExists(configPath: string): Promise<boolean> {
  try {
    await fs.access(configPath);
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Prompt for input with default value
 */
async function promptWithDefault(rl: readline.Interface, prompt: string, defaultValue: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(`${prompt} (${defaultValue}): `, (answer) => {
      resolve(answer.trim() || defaultValue);
    });
  });
}

/**
 * Prompt for yes/no input
 */
async function promptYesNo(prompt: string, defaultValue: boolean): Promise<boolean> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    const defaultText = defaultValue ? 'Y/n' : 'y/N';
    rl.question(`${prompt} (${defaultText}): `, (answer) => {
      rl.close();
      
      const normalized = answer.trim().toLowerCase();
      if (normalized === '') {
        resolve(defaultValue);
      } else if (normalized === 'y' || normalized === 'yes') {
        resolve(true);
      } else if (normalized === 'n' || normalized === 'no') {
        resolve(false);
      } else {
        resolve(defaultValue);
      }
    });
  });
}

/**
 * Display next steps after configuration
 */
function displayNextSteps(config: CLIConfig, logger: CLILogger): void {
  logger.blank();
  logger.info('🎯 Next Steps:');
  logger.blank();

  console.log('1. Add markdown articles to the drafts directory:');
  console.log(`   ${config.directories.drafts}/`);
  logger.blank();

  console.log('2. Ensure Ollama is running with your selected model:');
  console.log(`   ollama serve`);
  console.log(`   ollama pull ${config.ollama.model}`);
  logger.blank();

  console.log('3. Process articles:');
  console.log('   npm run article-processor process');
  console.log('   # or');
  console.log('   npx article-processor process');
  logger.blank();

  console.log('4. For single article processing:');
  console.log('   npm run article-processor single path/to/article.md');
  logger.blank();

  console.log('5. View directory structure:');
  console.log('   npm run article-processor structure');
  logger.blank();

  logger.success('🚀 Configuration complete! Ready to process articles.');
}