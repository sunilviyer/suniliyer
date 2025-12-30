/**
 * File Discovery Utilities
 * Handles scanning directories for markdown files and filtering
 */

import * as fs from 'fs/promises';
import * as path from 'path';
import { DIRECTORIES, FILE_EXTENSIONS } from './constants';

/**
 * Discovers all markdown files in the drafts directory
 * @returns Array of absolute file paths to markdown files
 * @throws Error if directory cannot be accessed
 */
export async function discoverMarkdownFiles(
  directory: string = DIRECTORIES.DRAFTS
): Promise<string[]> {
  try {
    // Check if directory exists
    await fs.access(directory);
    
    // Read directory contents
    const entries = await fs.readdir(directory, { withFileTypes: true });
    
    // Filter for markdown files only
    const markdownFiles = entries
      .filter(entry => entry.isFile() && entry.name.endsWith(FILE_EXTENSIONS.MARKDOWN))
      .map(entry => path.join(directory, entry.name));
    
    return markdownFiles;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      throw new Error(`Directory not found: ${directory}`);
    }
    if ((error as NodeJS.ErrnoException).code === 'EACCES') {
      throw new Error(`Permission denied accessing directory: ${directory}`);
    }
    throw new Error(`Failed to discover markdown files in ${directory}: ${(error as Error).message}`);
  }
}

/**
 * Checks if a file is a markdown file based on extension
 * @param filePath Path to the file
 * @returns True if file has .md extension
 */
export function isMarkdownFile(filePath: string): boolean {
  return path.extname(filePath).toLowerCase() === FILE_EXTENSIONS.MARKDOWN;
}

/**
 * Gets the base filename without extension
 * @param filePath Path to the file
 * @returns Filename without extension
 */
export function getBaseFilename(filePath: string): string {
  return path.basename(filePath, FILE_EXTENSIONS.MARKDOWN);
}

/**
 * Validates that a directory exists and is accessible
 * @param directory Path to directory
 * @returns True if directory exists and is accessible
 */
export async function validateDirectory(directory: string): Promise<boolean> {
  try {
    const stats = await fs.stat(directory);
    return stats.isDirectory();
  } catch {
    return false;
  }
}

/**
 * Discovers markdown files with error handling and validation
 * Returns empty array instead of throwing on missing directory
 * @param directory Directory to scan
 * @returns Array of markdown file paths, empty if directory doesn't exist
 */
export async function discoverMarkdownFilesSafe(
  directory: string = DIRECTORIES.DRAFTS
): Promise<string[]> {
  try {
    return await discoverMarkdownFiles(directory);
  } catch (error) {
    console.warn(`Warning: ${(error as Error).message}`);
    return [];
  }
}
