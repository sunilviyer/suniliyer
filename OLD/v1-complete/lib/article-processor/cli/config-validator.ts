/**
 * Configuration Validator for Article Processor
 * 
 * Provides comprehensive validation for configuration parameters:
 * - Directory path validation and accessibility checks
 * - Ollama endpoint connectivity validation
 * - Configuration schema validation
 * - Environment-specific validation
 * 
 * Requirements: All requirements
 */

import { CLIConfig, ConfigValidation } from './config';
import * as fs from 'fs/promises';
import * as path from 'path';

/**
 * Extended configuration validation with environment checks
 */
export interface ExtendedConfigValidation extends ConfigValidation {
  warnings: string[];
  directoryStatus: Record<string, DirectoryStatus>;
  ollamaStatus: OllamaStatus;
}

/**
 * Directory status information
 */
export interface DirectoryStatus {
  exists: boolean;
  accessible: boolean;
  writable: boolean;
  fileCount?: number;
  error?: string;
}

/**
 * Ollama service status
 */
export interface OllamaStatus {
  reachable: boolean;
  modelAvailable?: boolean;
  version?: string;
  error?: string;
}

/**
 * Perform comprehensive configuration validation
 */
export async function validateConfigurationComprehensive(config: CLIConfig): Promise<ExtendedConfigValidation> {
  const basicValidation = validateConfigurationBasic(config);
  const warnings: string[] = [];
  
  // Validate directories
  const directoryStatus = await validateDirectories(config.directories);
  
  // Add directory warnings
  Object.entries(directoryStatus).forEach(([name, status]) => {
    if (!status.exists && name === 'drafts') {
      warnings.push(`Drafts directory '${config.directories.drafts}' does not exist - no articles to process`);
    } else if (!status.writable && name !== 'drafts') {
      warnings.push(`Output directory '${config.directories[name as keyof typeof config.directories]}' is not writable`);
    }
  });

  // Validate Ollama connectivity
  const ollamaStatus = await validateOllamaConnectivity(config.ollama);
  
  if (!ollamaStatus.reachable) {
    warnings.push(`Ollama service not reachable at ${config.ollama.endpoint} - redundancy analysis will be skipped`);
  } else if (!ollamaStatus.modelAvailable) {
    warnings.push(`Ollama model '${config.ollama.model}' not available - redundancy analysis may fail`);
  }

  return {
    ...basicValidation,
    warnings,
    directoryStatus,
    ollamaStatus
  };
}

/**
 * Basic configuration validation (synchronous)
 */
export function validateConfigurationBasic(config: CLIConfig): ConfigValidation {
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

    // Validate directory paths are not nested
    const paths = Object.entries(config.directories);
    for (let i = 0; i < paths.length; i++) {
      for (let j = i + 1; j < paths.length; j++) {
        const [name1, path1] = paths[i];
        const [name2, path2] = paths[j];
        
        if (path1.startsWith(path2 + '/') || path2.startsWith(path1 + '/')) {
          errors.push(`Directory paths cannot be nested: ${name1} (${path1}) and ${name2} (${path2})`);
        }
      }
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
 * Validate directory accessibility and permissions
 */
async function validateDirectories(directories: CLIConfig['directories']): Promise<Record<string, DirectoryStatus>> {
  const results: Record<string, DirectoryStatus> = {};

  for (const [name, dirPath] of Object.entries(directories)) {
    try {
      const status: DirectoryStatus = {
        exists: false,
        accessible: false,
        writable: false
      };

      // Check if directory exists
      try {
        const stats = await fs.stat(dirPath);
        status.exists = stats.isDirectory();
        status.accessible = true;

        if (status.exists) {
          // Count files in directory
          try {
            const files = await fs.readdir(dirPath);
            status.fileCount = files.length;
          } catch (error) {
            // Can't read directory contents
            status.accessible = false;
          }

          // Test write permissions (for output directories)
          if (name !== 'drafts') {
            try {
              const testFile = path.join(dirPath, '.write-test');
              await fs.writeFile(testFile, 'test');
              await fs.unlink(testFile);
              status.writable = true;
            } catch (error) {
              status.writable = false;
            }
          } else {
            // For drafts directory, we only need read access
            status.writable = true;
          }
        }
      } catch (error) {
        status.error = error instanceof Error ? error.message : String(error);
      }

      results[name] = status;
    } catch (error) {
      results[name] = {
        exists: false,
        accessible: false,
        writable: false,
        error: error instanceof Error ? error.message : String(error)
      };
    }
  }

  return results;
}

/**
 * Validate Ollama service connectivity and model availability
 */
async function validateOllamaConnectivity(ollamaConfig: CLIConfig['ollama']): Promise<OllamaStatus> {
  const status: OllamaStatus = {
    reachable: false
  };

  try {
    // Test basic connectivity
    const response = await fetch(`${ollamaConfig.endpoint}/api/version`, {
      method: 'GET',
      signal: AbortSignal.timeout(ollamaConfig.timeout)
    });

    if (response.ok) {
      status.reachable = true;
      
      try {
        const versionData = await response.json();
        status.version = versionData.version;
      } catch (error) {
        // Version parsing failed, but service is reachable
      }

      // Test model availability
      try {
        const modelsResponse = await fetch(`${ollamaConfig.endpoint}/api/tags`, {
          method: 'GET',
          signal: AbortSignal.timeout(ollamaConfig.timeout)
        });

        if (modelsResponse.ok) {
          const modelsData = await modelsResponse.json();
          const availableModels = modelsData.models?.map((m: any) => m.name) || [];
          status.modelAvailable = availableModels.includes(ollamaConfig.model);
        }
      } catch (error) {
        // Model check failed, but service is reachable
        status.modelAvailable = false;
      }
    } else {
      status.error = `HTTP ${response.status}: ${response.statusText}`;
    }
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        status.error = `Connection timeout after ${ollamaConfig.timeout}ms`;
      } else {
        status.error = error.message;
      }
    } else {
      status.error = String(error);
    }
  }

  return status;
}

/**
 * Create directories if they don't exist
 */
export async function createMissingDirectories(directories: CLIConfig['directories']): Promise<{
  created: string[];
  failed: Array<{ path: string; error: string }>;
}> {
  const created: string[] = [];
  const failed: Array<{ path: string; error: string }> = [];

  for (const [name, dirPath] of Object.entries(directories)) {
    // Skip drafts directory - it should exist with content
    if (name === 'drafts') {
      continue;
    }

    try {
      await fs.mkdir(dirPath, { recursive: true });
      created.push(dirPath);
    } catch (error) {
      failed.push({
        path: dirPath,
        error: error instanceof Error ? error.message : String(error)
      });
    }
  }

  return { created, failed };
}

/**
 * Generate configuration recommendations based on validation results
 */
export function generateConfigurationRecommendations(validation: ExtendedConfigValidation): string[] {
  const recommendations: string[] = [];

  // Directory recommendations
  Object.entries(validation.directoryStatus).forEach(([name, status]) => {
    if (!status.exists && name !== 'drafts') {
      recommendations.push(`Create ${name} directory: mkdir -p ${name}`);
    } else if (!status.writable && name !== 'drafts') {
      recommendations.push(`Fix write permissions for ${name} directory`);
    } else if (name === 'drafts' && status.fileCount === 0) {
      recommendations.push('Add markdown files to the drafts directory to process');
    }
  });

  // Ollama recommendations
  if (!validation.ollamaStatus.reachable) {
    recommendations.push('Start Ollama service: ollama serve');
    recommendations.push('Install Ollama if not available: https://ollama.ai/download');
  } else if (!validation.ollamaStatus.modelAvailable) {
    recommendations.push(`Pull the required model: ollama pull ${validation.ollamaStatus.modelAvailable}`);
  }

  // Performance recommendations
  if (validation.warnings.length === 0 && validation.isValid) {
    recommendations.push('Configuration looks good! Ready to process articles.');
  }

  return recommendations;
}