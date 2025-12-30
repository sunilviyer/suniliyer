/**
 * Display utilities for Article Processor CLI
 * 
 * Provides formatted display functions for:
 * - Directory structure visualization
 * - Processing results and statistics
 * - Error reporting and summaries
 * - Configuration display
 * 
 * Requirements: All requirements
 */

import { ProcessingResult, ProcessingError } from '../types';
import { CLILogger } from './logger';
import * as fs from 'fs/promises';
import * as path from 'path';

/**
 * Display directory structure with file counts and status
 */
export async function displayDirectoryStructure(
  directories: Record<string, string>,
  logger: CLILogger
): Promise<void> {
  logger.blank();
  logger.info('📁 Output Directory Structure:');
  logger.blank();

  const directoryInfo = await Promise.all(
    Object.entries(directories).map(async ([name, dirPath]) => {
      try {
        const stats = await getDirectoryStats(dirPath);
        return {
          name: name.charAt(0).toUpperCase() + name.slice(1),
          path: dirPath,
          exists: stats.exists,
          fileCount: stats.fileCount,
          totalSize: stats.totalSize
        };
      } catch (error) {
        return {
          name: name.charAt(0).toUpperCase() + name.slice(1),
          path: dirPath,
          exists: false,
          fileCount: 0,
          totalSize: 0
        };
      }
    })
  );

  // Display directory information
  const maxNameLength = Math.max(...directoryInfo.map(d => d.name.length));
  const maxPathLength = Math.max(...directoryInfo.map(d => d.path.length));

  directoryInfo.forEach(dir => {
    const nameCol = dir.name.padEnd(maxNameLength);
    const pathCol = dir.path.padEnd(maxPathLength);
    const status = dir.exists ? '✅' : '❌';
    const fileInfo = dir.exists ? `(${dir.fileCount} files, ${formatBytes(dir.totalSize)})` : '(not found)';
    
    console.log(`   ${nameCol} → ${pathCol} ${status} ${fileInfo}`);
  });

  logger.blank();
  
  // Display directory purpose documentation
  logger.info('📖 Directory Purposes:');
  logger.blank();
  console.log('   Drafts       → Input directory containing original markdown articles to process');
  console.log('   Processing   → Output directory for structured YAML and JSON processing results');
  console.log('   Review       → Directory where original articles are moved after successful processing');
  console.log('   Clean        → Output directory for cleaned markdown files with image placeholders');
  logger.blank();
}

/**
 * Display comprehensive processing results
 */
export async function displayProcessingResults(
  result: ProcessingResult,
  processingTime: number,
  logger: CLILogger
): Promise<void> {
  logger.blank();
  logger.separator();
  logger.info('🎯 Processing Results');
  logger.separator();

  // Overall statistics
  logger.stats({
    total: result.totalProcessed,
    successful: result.successful,
    failed: result.failed,
    processingTime
  });

  // Category distribution
  if (result.masterJSON.processing_summary.categories_distribution) {
    displayCategoryDistribution(result.masterJSON.processing_summary.categories_distribution, logger);
  }

  // Error summary
  if (result.errors.length > 0) {
    displayErrorSummary(result.errors, logger);
  }

  // Cross-reference analysis summary
  if (result.masterJSON.redundancy_analysis) {
    displayRedundancyAnalysis(result.masterJSON.redundancy_analysis, logger);
  }

  // Success summary
  if (result.successful > 0) {
    logger.blank();
    logger.success(`✅ Successfully processed ${result.successful} articles`);
    logger.info('   Generated outputs:');
    logger.info(`     - YAML files: content/articles/articleprocessing/*.yaml`);
    logger.info(`     - JSON files: content/articles/articleprocessing/*.json`);
    logger.info(`     - Clean markdown: content/articles/clean/*.md`);
    logger.info(`     - Original articles moved to: content/articles/review/`);
    logger.info(`     - Master JSON: content/articles/articleprocessing/master.json`);
  }

  logger.separator();
}

/**
 * Display category distribution
 */
function displayCategoryDistribution(
  distribution: Record<string, number>,
  logger: CLILogger
): void {
  logger.blank();
  logger.info('📊 Category Distribution:');
  logger.blank();

  const categories = Object.entries(distribution)
    .filter(([_, count]) => count > 0)
    .sort(([_, a], [__, b]) => b - a);

  if (categories.length === 0) {
    logger.info('   No articles categorized');
    return;
  }

  const maxCategoryLength = Math.max(...categories.map(([cat]) => cat.length));
  const total = categories.reduce((sum, [_, count]) => sum + count, 0);

  categories.forEach(([category, count]) => {
    const paddedCategory = category.padEnd(maxCategoryLength);
    const percentage = ((count / total) * 100).toFixed(1);
    const bar = '█'.repeat(Math.round((count / total) * 20));
    console.log(`   ${paddedCategory} │ ${count.toString().padStart(3)} (${percentage.padStart(5)}%) ${bar}`);
  });

  logger.blank();
}

/**
 * Display error summary
 */
function displayErrorSummary(errors: ProcessingError[], logger: CLILogger): void {
  logger.blank();
  logger.error(`❌ Processing Errors (${errors.length})`);
  logger.blank();

  // Group errors by stage
  const errorsByStage = errors.reduce((acc, error) => {
    if (!acc[error.stage]) {
      acc[error.stage] = [];
    }
    acc[error.stage].push(error);
    return acc;
  }, {} as Record<string, ProcessingError[]>);

  Object.entries(errorsByStage).forEach(([stage, stageErrors]) => {
    logger.info(`   Stage: ${stage} (${stageErrors.length} errors)`);
    
    stageErrors.forEach(error => {
      const fileName = path.basename(error.filePath);
      console.log(`     • ${fileName}: ${error.error}`);
    });
    
    logger.blank();
  });

  // Show most common errors
  const errorMessages = errors.map(e => e.error);
  const errorCounts = errorMessages.reduce((acc, msg) => {
    acc[msg] = (acc[msg] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const commonErrors = Object.entries(errorCounts)
    .sort(([_, a], [__, b]) => b - a)
    .slice(0, 5);

  if (commonErrors.length > 1) {
    logger.info('   Most Common Errors:');
    commonErrors.forEach(([error, count]) => {
      console.log(`     ${count}x: ${error}`);
    });
    logger.blank();
  }
}

/**
 * Display redundancy analysis summary
 */
function displayRedundancyAnalysis(
  analysis: any,
  logger: CLILogger
): void {
  logger.blank();
  logger.info('🔍 Redundancy Analysis:');
  logger.blank();

  if (analysis.overlapping_articles && analysis.overlapping_articles.length > 0) {
    logger.info(`   Found ${analysis.overlapping_articles.length} potential content overlaps`);
  }

  if (analysis.duplicate_examples && analysis.duplicate_examples.length > 0) {
    logger.info(`   Found ${analysis.duplicate_examples.length} duplicate examples`);
  }

  if (analysis.restructuring_recommendations && analysis.restructuring_recommendations.length > 0) {
    logger.info(`   Generated ${analysis.restructuring_recommendations.length} restructuring recommendations`);
  }

  if (analysis.ollama_analysis) {
    const ollama = analysis.ollama_analysis;
    logger.verbose(`   Ollama model: ${ollama.model_used}`);
    logger.verbose(`   Confidence: ${(ollama.confidence_score * 100).toFixed(1)}%`);
    logger.verbose(`   Analysis time: ${ollama.processing_time}ms`);
  }

  logger.blank();
}

/**
 * Get directory statistics
 */
async function getDirectoryStats(dirPath: string): Promise<{
  exists: boolean;
  fileCount: number;
  totalSize: number;
}> {
  try {
    const stats = await fs.stat(dirPath);
    if (!stats.isDirectory()) {
      return { exists: false, fileCount: 0, totalSize: 0 };
    }

    const files = await fs.readdir(dirPath);
    let totalSize = 0;
    let fileCount = 0;

    for (const file of files) {
      try {
        const filePath = path.join(dirPath, file);
        const fileStats = await fs.stat(filePath);
        if (fileStats.isFile()) {
          fileCount++;
          totalSize += fileStats.size;
        }
      } catch (error) {
        // Skip files we can't read
        continue;
      }
    }

    return { exists: true, fileCount, totalSize };
  } catch (error) {
    return { exists: false, fileCount: 0, totalSize: 0 };
  }
}

/**
 * Format bytes to human readable string
 */
function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B';
  
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
}

/**
 * Display configuration in a formatted way
 */
export function displayConfiguration(config: any, logger: CLILogger): void {
  logger.blank();
  logger.info('⚙️  Current Configuration:');
  logger.blank();

  // Ollama settings
  logger.info('   Ollama Settings:');
  console.log(`     Model:    ${config.ollama.model}`);
  console.log(`     Endpoint: ${config.ollama.endpoint}`);
  console.log(`     Timeout:  ${config.ollama.timeout}ms`);
  logger.blank();

  // Directory settings
  logger.info('   Directory Settings:');
  const maxDirLength = Math.max(...Object.keys(config.directories).map((k: string) => k.length));
  Object.entries(config.directories).forEach(([key, value]) => {
    const paddedKey = key.padEnd(maxDirLength);
    console.log(`     ${paddedKey}: ${value}`);
  });
  logger.blank();

  // Logging settings
  logger.info('   Logging Settings:');
  console.log(`     Verbose:      ${config.logging.verbose}`);
  console.log(`     Show Progress: ${config.logging.showProgress}`);
  logger.blank();
}