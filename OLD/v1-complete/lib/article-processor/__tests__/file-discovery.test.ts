/**
 * Tests for file discovery utilities
 */

import * as fs from 'fs/promises';
import * as path from 'path';
import {
  discoverMarkdownFiles,
  isMarkdownFile,
  getBaseFilename,
  validateDirectory,
  discoverMarkdownFilesSafe
} from '../utils/file-discovery';

describe('File Discovery Utilities', () => {
  describe('isMarkdownFile', () => {
    it('should return true for .md files', () => {
      expect(isMarkdownFile('article.md')).toBe(true);
      expect(isMarkdownFile('/path/to/article.md')).toBe(true);
      expect(isMarkdownFile('article.MD')).toBe(true);
    });

    it('should return false for non-markdown files', () => {
      expect(isMarkdownFile('article.txt')).toBe(false);
      expect(isMarkdownFile('article.html')).toBe(false);
      expect(isMarkdownFile('article')).toBe(false);
    });
  });

  describe('getBaseFilename', () => {
    it('should extract filename without extension', () => {
      expect(getBaseFilename('article.md')).toBe('article');
      expect(getBaseFilename('/path/to/my-article.md')).toBe('my-article');
      expect(getBaseFilename('complex-name-123.md')).toBe('complex-name-123');
    });
  });

  describe('validateDirectory', () => {
    it('should return true for existing directory', async () => {
      const result = await validateDirectory('.');
      expect(result).toBe(true);
    });

    it('should return false for non-existent directory', async () => {
      const result = await validateDirectory('/non/existent/path');
      expect(result).toBe(false);
    });

    it('should return false for file path', async () => {
      const result = await validateDirectory('package.json');
      expect(result).toBe(false);
    });
  });

  describe('discoverMarkdownFilesSafe', () => {
    it('should return empty array for non-existent directory', async () => {
      const result = await discoverMarkdownFilesSafe('/non/existent/path');
      expect(result).toEqual([]);
    });
  });

  describe('discoverMarkdownFiles', () => {
    it('should throw error for non-existent directory', async () => {
      await expect(discoverMarkdownFiles('/non/existent/path'))
        .rejects.toThrow('Directory not found');
    });

    it('should discover markdown files in content/articles directory', async () => {
      // Test with actual content directory if it exists
      const testDir = 'content/articles';
      const exists = await validateDirectory(testDir);
      
      if (exists) {
        const files = await discoverMarkdownFiles(testDir);
        expect(Array.isArray(files)).toBe(true);
        files.forEach(file => {
          expect(isMarkdownFile(file)).toBe(true);
        });
      }
    });
  });
});
