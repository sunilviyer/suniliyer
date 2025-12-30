/**
 * File Manager for Article Content Processor
 * Handles file operations across three directories: articleprocessing, review, and clean
 */

import { promises as fs } from 'fs';
import path from 'path';
import { FileManager } from '../interfaces';
import { DEFAULT_DIRECTORIES } from '../types';

export class ArticleFileManager implements FileManager {
  private readonly directories = DEFAULT_DIRECTORIES;

  /**
   * Write YAML and JSON processing outputs to articleprocessing directory
   */
  async writeProcessingOutput(slug: string, yaml: string, json: string): Promise<void> {
    try {
      await this.createDirectoryIfNotExists(this.directories.processing);
      
      const yamlPath = path.join(this.directories.processing, `${slug}.yaml`);
      const jsonPath = path.join(this.directories.processing, `${slug}.json`);
      
      // Write both files atomically
      await Promise.all([
        this.writeFileAtomically(yamlPath, yaml),
        this.writeFileAtomically(jsonPath, json)
      ]);
      
      // Verify files were written correctly
      await this.verifyFileIntegrity(yamlPath, yaml);
      await this.verifyFileIntegrity(jsonPath, json);
      
    } catch (error) {
      throw new Error(`Failed to write processing output for ${slug}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Move original draft to review directory for review
   */
  async moveToReview(filePath: string): Promise<void> {
    try {
      await this.createDirectoryIfNotExists(this.directories.review);
      
      const fileName = path.basename(filePath);
      const destPath = path.join(this.directories.review, fileName);
      
      // Check if source file exists
      await fs.access(filePath);
      
      // Handle file conflicts by checking if destination exists
      if (await this.fileExists(destPath)) {
        const backupPath = await this.createBackupPath(destPath);
        await fs.rename(destPath, backupPath);
      }
      
      // Verify file integrity before move
      const originalContent = await fs.readFile(filePath, 'utf-8');
      
      // Move file
      await fs.rename(filePath, destPath);
      
      // Verify file integrity after move
      await this.verifyFileIntegrity(destPath, originalContent);
      
    } catch (error) {
      throw new Error(`Failed to move file to review: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Write cleaned markdown to clean directory
   */
  async writeCleanedMarkdown(slug: string, markdown: string): Promise<void> {
    try {
      await this.createDirectoryIfNotExists(this.directories.clean);
      
      const filePath = path.join(this.directories.clean, `${slug}.md`);
      
      // Write file atomically
      await this.writeFileAtomically(filePath, markdown);
      
      // Verify file was written correctly
      await this.verifyFileIntegrity(filePath, markdown);
      
    } catch (error) {
      throw new Error(`Failed to write cleaned markdown for ${slug}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Preserve file integrity by comparing source and destination content
   */
  async preserveFileIntegrity(sourcePath: string, destPath: string): Promise<boolean> {
    try {
      const [sourceContent, destContent] = await Promise.all([
        fs.readFile(sourcePath, 'utf-8'),
        fs.readFile(destPath, 'utf-8')
      ]);
      
      return sourceContent === destContent;
    } catch (error) {
      return false;
    }
  }

  /**
   * Create directory if it doesn't exist
   */
  async createDirectoryIfNotExists(dirPath: string): Promise<void> {
    try {
      await fs.access(dirPath);
    } catch {
      // Directory doesn't exist, create it
      try {
        await fs.mkdir(dirPath, { recursive: true });
      } catch (error) {
        throw new Error(`Failed to create directory ${dirPath}: ${error instanceof Error ? error.message : String(error)}`);
      }
    }
  }

  /**
   * Write file atomically using temporary file
   */
  private async writeFileAtomically(filePath: string, content: string): Promise<void> {
    const tempPath = `${filePath}.tmp`;
    
    try {
      // Write to temporary file first
      await fs.writeFile(tempPath, content, 'utf-8');
      
      // Atomically move to final location
      await fs.rename(tempPath, filePath);
    } catch (error) {
      // Clean up temporary file if it exists
      try {
        await fs.unlink(tempPath);
      } catch {
        // Ignore cleanup errors
      }
      throw error;
    }
  }

  /**
   * Verify file integrity by comparing written content
   */
  private async verifyFileIntegrity(filePath: string, expectedContent: string): Promise<void> {
    try {
      const actualContent = await fs.readFile(filePath, 'utf-8');
      if (actualContent !== expectedContent) {
        throw new Error(`File integrity check failed: content mismatch in ${filePath}`);
      }
    } catch (error) {
      throw new Error(`File integrity verification failed for ${filePath}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Check if file exists
   */
  private async fileExists(filePath: string): Promise<boolean> {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Create backup path for existing files
   */
  private async createBackupPath(filePath: string): Promise<string> {
    const dir = path.dirname(filePath);
    const ext = path.extname(filePath);
    const name = path.basename(filePath, ext);
    
    let counter = 1;
    let backupPath: string;
    
    do {
      backupPath = path.join(dir, `${name}.backup${counter}${ext}`);
      counter++;
    } while (await this.fileExists(backupPath));
    
    return backupPath;
  }

  /**
   * Get directory paths for external access
   */
  getDirectories() {
    return { ...this.directories };
  }

  /**
   * Clean up temporary files and backups (utility method)
   */
  async cleanup(): Promise<void> {
    const directories = [
      this.directories.processing,
      this.directories.review,
      this.directories.clean
    ];

    for (const dir of directories) {
      try {
        const files = await fs.readdir(dir);
        const tempFiles = files.filter(file => 
          file.endsWith('.tmp') || file.includes('.backup')
        );
        
        await Promise.all(
          tempFiles.map(file => 
            fs.unlink(path.join(dir, file)).catch(() => {
              // Ignore cleanup errors
            })
          )
        );
      } catch {
        // Directory might not exist, ignore
      }
    }
  }
}

// Export singleton instance
export const fileManager = new ArticleFileManager();