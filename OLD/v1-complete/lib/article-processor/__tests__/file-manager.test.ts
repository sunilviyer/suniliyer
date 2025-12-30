/**
 * Tests for File Manager
 */

import * as fs from 'fs/promises';
import * as path from 'path';
import { ArticleFileManager } from '../utils/file-manager';
import { DEFAULT_DIRECTORIES } from '../types';

describe('ArticleFileManager', () => {
  let fileManager: ArticleFileManager;
  let testDir: string;
  let testDraftsDir: string;
  let testProcessingDir: string;
  let testReviewDir: string;
  let testCleanDir: string;

  beforeEach(async () => {
    fileManager = new ArticleFileManager();
    
    // Create temporary test directories
    testDir = path.join(process.cwd(), 'test-temp');
    testDraftsDir = path.join(testDir, 'drafts');
    testProcessingDir = path.join(testDir, 'articleprocessing');
    testReviewDir = path.join(testDir, 'review');
    testCleanDir = path.join(testDir, 'clean');
    
    await fs.mkdir(testDir, { recursive: true });
    await fs.mkdir(testDraftsDir, { recursive: true });
  });

  afterEach(async () => {
    // Clean up test directories
    try {
      await fs.rm(testDir, { recursive: true, force: true });
    } catch {
      // Ignore cleanup errors
    }
  });

  describe('createDirectoryIfNotExists', () => {
    it('should create directory if it does not exist', async () => {
      const newDir = path.join(testDir, 'new-directory');
      
      await fileManager.createDirectoryIfNotExists(newDir);
      
      const stats = await fs.stat(newDir);
      expect(stats.isDirectory()).toBe(true);
    });

    it('should not throw error if directory already exists', async () => {
      await expect(fileManager.createDirectoryIfNotExists(testDir))
        .resolves.not.toThrow();
    });

    it('should throw error for invalid path', async () => {
      const invalidPath = '/root/invalid/path/that/cannot/be/created';
      
      await expect(fileManager.createDirectoryIfNotExists(invalidPath))
        .rejects.toThrow('Failed to create directory');
    });
  });

  describe('writeProcessingOutput', () => {
    it('should write YAML and JSON files to processing directory', async () => {
      const slug = 'test-article';
      const yamlContent = '# Test YAML content';
      const jsonContent = '{"test": "json content"}';
      
      await fileManager.writeProcessingOutput(slug, yamlContent, jsonContent);
      
      const yamlPath = path.join(DEFAULT_DIRECTORIES.processing, `${slug}.yaml`);
      const jsonPath = path.join(DEFAULT_DIRECTORIES.processing, `${slug}.json`);
      
      const [yamlResult, jsonResult] = await Promise.all([
        fs.readFile(yamlPath, 'utf-8'),
        fs.readFile(jsonPath, 'utf-8')
      ]);
      
      expect(yamlResult).toBe(yamlContent);
      expect(jsonResult).toBe(jsonContent);
      
      // Cleanup
      await Promise.all([
        fs.unlink(yamlPath).catch(() => {}),
        fs.unlink(jsonPath).catch(() => {})
      ]);
    });

    it('should create processing directory if it does not exist', async () => {
      const slug = 'test-article-2';
      const yamlContent = '# Test YAML';
      const jsonContent = '{"test": true}';
      
      // Ensure directory doesn't exist
      try {
        await fs.rm(DEFAULT_DIRECTORIES.processing, { recursive: true });
      } catch {
        // Directory might not exist
      }
      
      await fileManager.writeProcessingOutput(slug, yamlContent, jsonContent);
      
      const stats = await fs.stat(DEFAULT_DIRECTORIES.processing);
      expect(stats.isDirectory()).toBe(true);
      
      // Cleanup
      const yamlPath = path.join(DEFAULT_DIRECTORIES.processing, `${slug}.yaml`);
      const jsonPath = path.join(DEFAULT_DIRECTORIES.processing, `${slug}.json`);
      await Promise.all([
        fs.unlink(yamlPath).catch(() => {}),
        fs.unlink(jsonPath).catch(() => {})
      ]);
    });

    it('should throw error for invalid content', async () => {
      const slug = 'test-article';
      const yamlContent = 'valid yaml';
      const jsonContent = null as any; // Invalid content
      
      await expect(fileManager.writeProcessingOutput(slug, yamlContent, jsonContent))
        .rejects.toThrow('Failed to write processing output');
    });
  });

  describe('writeCleanedMarkdown', () => {
    it('should write cleaned markdown to clean directory', async () => {
      const slug = 'test-article';
      const markdownContent = '# Test Article\n\nThis is test content.';
      
      await fileManager.writeCleanedMarkdown(slug, markdownContent);
      
      const filePath = path.join(DEFAULT_DIRECTORIES.clean, `${slug}.md`);
      const result = await fs.readFile(filePath, 'utf-8');
      
      expect(result).toBe(markdownContent);
      
      // Cleanup
      await fs.unlink(filePath).catch(() => {});
    });

    it('should create clean directory if it does not exist', async () => {
      const slug = 'test-article-clean';
      const markdownContent = '# Test';
      
      // Ensure directory doesn't exist
      try {
        await fs.rm(DEFAULT_DIRECTORIES.clean, { recursive: true });
      } catch {
        // Directory might not exist
      }
      
      await fileManager.writeCleanedMarkdown(slug, markdownContent);
      
      const stats = await fs.stat(DEFAULT_DIRECTORIES.clean);
      expect(stats.isDirectory()).toBe(true);
      
      // Cleanup
      const filePath = path.join(DEFAULT_DIRECTORIES.clean, `${slug}.md`);
      await fs.unlink(filePath).catch(() => {});
    });
  });

  describe('moveToReview', () => {
    it('should move file from drafts to review directory', async () => {
      const fileName = 'test-draft.md';
      const content = '# Test Draft\n\nThis is a test draft.';
      const sourcePath = path.join(testDraftsDir, fileName);
      
      // Create source file
      await fs.writeFile(sourcePath, content, 'utf-8');
      
      await fileManager.moveToReview(sourcePath);
      
      const destPath = path.join(DEFAULT_DIRECTORIES.review, fileName);
      const result = await fs.readFile(destPath, 'utf-8');
      
      expect(result).toBe(content);
      
      // Verify source file was moved (should not exist)
      await expect(fs.access(sourcePath)).rejects.toThrow();
      
      // Cleanup
      await fs.unlink(destPath).catch(() => {});
    });

    it('should create review directory if it does not exist', async () => {
      const fileName = 'test-draft-2.md';
      const content = '# Test Draft 2';
      const sourcePath = path.join(testDraftsDir, fileName);
      
      // Create source file
      await fs.writeFile(sourcePath, content, 'utf-8');
      
      // Ensure review directory doesn't exist
      try {
        await fs.rm(DEFAULT_DIRECTORIES.review, { recursive: true });
      } catch {
        // Directory might not exist
      }
      
      await fileManager.moveToReview(sourcePath);
      
      const stats = await fs.stat(DEFAULT_DIRECTORIES.review);
      expect(stats.isDirectory()).toBe(true);
      
      // Cleanup
      const destPath = path.join(DEFAULT_DIRECTORIES.review, fileName);
      await fs.unlink(destPath).catch(() => {});
    });

    it('should handle file conflicts by creating backup', async () => {
      const fileName = 'conflict-test.md';
      const originalContent = '# Original Content';
      const newContent = '# New Content';
      const sourcePath = path.join(testDraftsDir, fileName);
      
      // Create source file
      await fs.writeFile(sourcePath, newContent, 'utf-8');
      
      // Create existing file in review directory
      await fileManager.createDirectoryIfNotExists(DEFAULT_DIRECTORIES.review);
      const destPath = path.join(DEFAULT_DIRECTORIES.review, fileName);
      await fs.writeFile(destPath, originalContent, 'utf-8');
      
      await fileManager.moveToReview(sourcePath);
      
      // Check that new content is in the main file
      const result = await fs.readFile(destPath, 'utf-8');
      expect(result).toBe(newContent);
      
      // Check that backup was created
      const files = await fs.readdir(DEFAULT_DIRECTORIES.review);
      const backupFiles = files.filter(file => file.includes('backup'));
      expect(backupFiles.length).toBeGreaterThan(0);
      
      // Cleanup
      await Promise.all([
        fs.unlink(destPath).catch(() => {}),
        ...backupFiles.map(file => 
          fs.unlink(path.join(DEFAULT_DIRECTORIES.review, file)).catch(() => {})
        )
      ]);
    });

    it('should throw error for non-existent source file', async () => {
      const nonExistentPath = path.join(testDraftsDir, 'non-existent.md');
      
      await expect(fileManager.moveToReview(nonExistentPath))
        .rejects.toThrow('Failed to move file to review');
    });
  });

  describe('preserveFileIntegrity', () => {
    it('should return true for identical files', async () => {
      const content = '# Test Content\n\nThis is identical content.';
      const file1 = path.join(testDir, 'file1.md');
      const file2 = path.join(testDir, 'file2.md');
      
      await Promise.all([
        fs.writeFile(file1, content, 'utf-8'),
        fs.writeFile(file2, content, 'utf-8')
      ]);
      
      const result = await fileManager.preserveFileIntegrity(file1, file2);
      expect(result).toBe(true);
    });

    it('should return false for different files', async () => {
      const content1 = '# Content 1';
      const content2 = '# Content 2';
      const file1 = path.join(testDir, 'file1.md');
      const file2 = path.join(testDir, 'file2.md');
      
      await Promise.all([
        fs.writeFile(file1, content1, 'utf-8'),
        fs.writeFile(file2, content2, 'utf-8')
      ]);
      
      const result = await fileManager.preserveFileIntegrity(file1, file2);
      expect(result).toBe(false);
    });

    it('should return false for non-existent files', async () => {
      const result = await fileManager.preserveFileIntegrity(
        '/non/existent/file1.md',
        '/non/existent/file2.md'
      );
      expect(result).toBe(false);
    });
  });

  describe('getDirectories', () => {
    it('should return directory configuration', () => {
      const directories = fileManager.getDirectories();
      
      expect(directories).toEqual(DEFAULT_DIRECTORIES);
      expect(directories.drafts).toBe('content/articles/drafts');
      expect(directories.processing).toBe('content/articles/articleprocessing');
      expect(directories.review).toBe('content/articles/review');
      expect(directories.clean).toBe('content/articles/clean');
    });
  });

  describe('cleanup', () => {
    it('should remove temporary and backup files', async () => {
      // Create test directories with temp and backup files
      await Promise.all([
        fileManager.createDirectoryIfNotExists(DEFAULT_DIRECTORIES.processing),
        fileManager.createDirectoryIfNotExists(DEFAULT_DIRECTORIES.review),
        fileManager.createDirectoryIfNotExists(DEFAULT_DIRECTORIES.clean)
      ]);
      
      const tempFiles = [
        path.join(DEFAULT_DIRECTORIES.processing, 'test.tmp'),
        path.join(DEFAULT_DIRECTORIES.review, 'test.backup1'),
        path.join(DEFAULT_DIRECTORIES.clean, 'another.tmp')
      ];
      
      // Create temp and backup files
      await Promise.all(
        tempFiles.map(file => fs.writeFile(file, 'temp content', 'utf-8'))
      );
      
      await fileManager.cleanup();
      
      // Verify files were removed
      for (const file of tempFiles) {
        await expect(fs.access(file)).rejects.toThrow();
      }
    });

    it('should not throw error for non-existent directories', async () => {
      await expect(fileManager.cleanup()).resolves.not.toThrow();
    });
  });
});