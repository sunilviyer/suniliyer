/**
 * Configuration Management for Article Processor CLI
 * 
 * Handles loading, validation, and management of configuration settings:
 * - Ollama settings (model, endpoint, timeout)
 * - Directory paths (drafts, processing, review, clean)
 * - Logging preferences
 * - Configuration validation
 * 
 * Requirements: All requirements
 */

import * as fs from 'fs/promises';
import * as path from 'path';

/**
 * CLI Configuration interface
 */
export interface CLIConfig {
  ollama: {
    model: string;
    endpoint: string;
    timeout: number;
  };
  directories: {
    drafts: string;
    processing: string;
    review: string;
    clean: string;
  };
  logging: {
    verbose: boolean;
    showProgress: boolean;
  };
}

/**
 * Configuration validation result
 */
export interface ConfigValidation {
  isValid: boolean;
  errors: string[];
}

/**
 * Default configuration values
 */
const DEFAULT_CONFIG: CLIConfig = {
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

/**
 * Configuration file paths to check (in order of precedence)
 */
const CONFIG_PATHS = [
  'article-processor.config.json',
  '.article-processor.json',
  'config/article-processor.json'
];

/**
 * Load configuration from file or use defaults
 */
export function loadConfig(): CLIConfig {
  // Try to load from configuration files
  for (const configPath of CONFIG_PATHS) {
    try {
      const fullPath = path.resolve(configPath);
      const configData = require(fullPath);
      
      // Merge with defaults to ensure all properties exist
      const config = mergeWithDefaults(configData);
      console.log(`📄 Loaded configuration from: ${configPath}`);
      return config;
    } catch (error) {
      // File doesn't exist or is invalid, continue to next
      continue;
    }
  }

  // No configuration file found, use defaults
  console.log('📄 Using default configuration (no config file found)');
  return { ...DEFAULT_CONFIG };
}

/**
 * Load configuration asynchronously
 */
export async function loadConfigAsync(): Promise<CLIConfig> {
  // Try to load from configuration files
  for (const configPath of CONFIG_PATHS) {
    try {
      const fullPath = path.resolve(configPath);
      const configContent = await fs.readFile(fullPath, 'utf-8');
      const configData = JSON.parse(configContent);
      
      // Merge with defaults to ensure all properties exist
      const config = mergeWithDefaults(configData);
      console.log(`📄 Loaded configuration from: ${configPath}`);
      return config;
    } catch (error) {
      // File doesn't exist or is invalid, continue to next
      continue;
    }
  }

  // No configuration file found, use defaults
  console.log('📄 Using default configuration (no config file found)');
  return { ...DEFAULT_CONFIG };
}

/**
 * Validate configuration parameters
 */
export function validateConfig(config: CLIConfig): ConfigValidation {
  const errors: string[] = [];

  // Validate Ollama configuration
  if (!config.ollama) {
    errors.push('Missing ollama configuration');
  } else {
    if (!config.ollama.model || typeof config.ollama.model !== 'string') {
      errors.push('ollama.model must be a non-empty string');
    }
    
    if (!config.ollama.endpoint || typeof config.ollama.endpoint !== 'string') {
      errors.push('ollama.endpoint must be a non-empty string');
    } else {
      // Validate endpoint URL format
      try {
        new URL(config.ollama.endpoint);
      } catch (error) {
        errors.push('ollama.endpoint must be a valid URL');
      }
    }
    
    if (typeof config.ollama.timeout !== 'number' || config.ollama.timeout <= 0) {
      errors.push('ollama.timeout must be a positive number');
    }
  }

  // Validate directories configuration
  if (!config.directories) {
    errors.push('Missing directories configuration');
  } else {
    const requiredDirs = ['drafts', 'processing', 'review', 'clean'];
    
    for (const dir of requiredDirs) {
      const dirPath = config.directories[dir as keyof typeof config.directories];
      if (!dirPath || typeof dirPath !== 'string') {
        errors.push(`directories.${dir} must be a non-empty string`);
      }
    }

    // Check for duplicate directory paths
    const dirPaths = Object.values(config.directories);
    const uniquePaths = new Set(dirPaths);
    if (dirPaths.length !== uniquePaths.size) {
      errors.push('Directory paths must be unique');
    }
  }

  // Validate logging configuration
  if (!config.logging) {
    errors.push('Missing logging configuration');
  } else {
    if (typeof config.logging.verbose !== 'boolean') {
      errors.push('logging.verbose must be a boolean');
    }
    
    if (typeof config.logging.showProgress !== 'boolean') {
      errors.push('logging.showProgress must be a boolean');
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Merge user configuration with defaults
 */
function mergeWithDefaults(userConfig: Partial<CLIConfig>): CLIConfig {
  return {
    ollama: {
      ...DEFAULT_CONFIG.ollama,
      ...userConfig.ollama
    },
    directories: {
      ...DEFAULT_CONFIG.directories,
      ...userConfig.directories
    },
    logging: {
      ...DEFAULT_CONFIG.logging,
      ...userConfig.logging
    }
  };
}

/**
 * Save configuration to file
 */
export async function saveConfig(config: CLIConfig, configPath?: string): Promise<void> {
  const targetPath = configPath || CONFIG_PATHS[0];
  const fullPath = path.resolve(targetPath);
  
  // Validate configuration before saving
  const validation = validateConfig(config);
  if (!validation.isValid) {
    throw new Error(`Invalid configuration: ${validation.errors.join(', ')}`);
  }

  // Ensure directory exists
  const dir = path.dirname(fullPath);
  await fs.mkdir(dir, { recursive: true });

  // Write configuration file
  await fs.writeFile(fullPath, JSON.stringify(config, null, 2));
}

/**
 * Get configuration file documentation
 */
export function getConfigDocumentation(): string {
  return `
# Article Processor Configuration

The Article Processor can be configured using a JSON configuration file.
The processor looks for configuration files in the following order:

1. article-processor.config.json (in current directory)
2. .article-processor.json (in current directory)
3. config/article-processor.json (in config subdirectory)

## Configuration Structure

\`\`\`json
{
  "ollama": {
    "model": "llama2",           // Ollama model to use for analysis
    "endpoint": "http://localhost:11434",  // Ollama API endpoint
    "timeout": 30000             // Request timeout in milliseconds
  },
  "directories": {
    "drafts": "content/articles/drafts",           // Input directory for draft articles
    "processing": "content/articles/articleprocessing", // Output for YAML/JSON processing results
    "review": "content/articles/review",           // Directory for original articles after processing
    "clean": "content/articles/clean"              // Output for cleaned markdown files
  },
  "logging": {
    "verbose": false,            // Enable verbose logging
    "showProgress": true         // Show progress indicators
  }
}
\`\`\`

## Directory Structure

The processor organizes files across four directories:

- **drafts/**: Input directory containing original markdown articles to process
- **articleprocessing/**: Output directory for structured YAML and JSON processing results
- **review/**: Directory where original draft articles are moved after successful processing
- **clean/**: Output directory for cleaned markdown files with image placeholders

## Ollama Configuration

The processor uses Ollama for AI-powered redundancy analysis:

- **model**: The Ollama model to use (e.g., "llama2", "mistral", "codellama")
- **endpoint**: The Ollama API endpoint (default: http://localhost:11434)
- **timeout**: Request timeout in milliseconds (default: 30000)

Make sure Ollama is running locally before processing articles.

## Command Line Overrides

All configuration options can be overridden via command line arguments:

\`\`\`bash
article-processor process --model mistral --drafts ./my-drafts --verbose
\`\`\`
`;
}

/**
 * Export default configuration for reference
 */
export { DEFAULT_CONFIG };