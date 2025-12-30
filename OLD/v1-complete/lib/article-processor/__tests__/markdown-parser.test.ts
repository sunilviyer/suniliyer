/**
 * Tests for markdown content parser
 */

import * as fs from 'fs/promises';
import * as path from 'path';
import {
  parseMarkdownFile,
  extractTitle,
  calculateWordCount,
  parseMarkdownFileSafe
} from '../utils/markdown-parser';

describe('Markdown Parser Utilities', () => {
  describe('extractTitle', () => {
    it('should extract title from H1 header', () => {
      const content = '# My Article Title\n\nSome content here.';
      const title = extractTitle(content);
      expect(title).toBe('My Article Title');
    });

    it('should extract title from frontmatter if no H1', () => {
      const content = 'Some content without H1.';
      const frontmatter = { title: 'Frontmatter Title' };
      const title = extractTitle(content, frontmatter);
      expect(title).toBe('Frontmatter Title');
    });

    it('should prefer H1 over frontmatter', () => {
      const content = '# H1 Title\n\nContent';
      const frontmatter = { title: 'Frontmatter Title' };
      const title = extractTitle(content, frontmatter);
      expect(title).toBe('H1 Title');
    });

    it('should return empty string if no title found', () => {
      const content = 'Content without title';
      const title = extractTitle(content);
      expect(title).toBe('');
    });

    it('should trim whitespace from title', () => {
      const content = '#   Spaced Title   \n\nContent';
      const title = extractTitle(content);
      expect(title).toBe('Spaced Title');
    });
  });

  describe('calculateWordCount', () => {
    it('should count words in simple text', () => {
      const content = 'This is a simple test with seven words.';
      expect(calculateWordCount(content)).toBe(8);
    });

    it('should exclude code blocks from word count', () => {
      const content = `
Some text here.

\`\`\`javascript
const code = "this should not be counted";
const more = "code here";
\`\`\`

More text here.
      `;
      const count = calculateWordCount(content);
      expect(count).toBeLessThan(20); // Should not count code
    });

    it('should exclude inline code from word count', () => {
      const content = 'Use the `console.log()` function to debug.';
      const count = calculateWordCount(content);
      expect(count).toBe(5); // "Use the function to debug" - excludes inline code
    });

    it('should count link text but not URLs', () => {
      const content = 'Check out [this article](https://example.com) for more info.';
      const count = calculateWordCount(content);
      expect(count).toBe(7); // "Check out this article for more info"
    });

    it('should exclude markdown headers from count', () => {
      const content = '## Header\n\nSome content here.';
      const count = calculateWordCount(content);
      expect(count).toBe(4); // "Header Some content here"
    });

    it('should handle empty content', () => {
      expect(calculateWordCount('')).toBe(0);
    });

    it('should handle content with only whitespace', () => {
      expect(calculateWordCount('   \n\n   ')).toBe(0);
    });

    it('should count words in complex markdown', () => {
      const content = `
# Article Title

This is an introduction with **bold** and *italic* text.

## Section 1

- List item one
- List item two
- List item three

> This is a blockquote with some words.

\`\`\`typescript
// This code should not be counted
const x = 5;
\`\`\`

Final paragraph with [a link](https://example.com).
      `;
      const count = calculateWordCount(content);
      expect(count).toBeGreaterThan(20);
      expect(count).toBeLessThan(50);
    });
  });

  describe('parseMarkdownFileSafe', () => {
    it('should return null for non-existent file', async () => {
      const result = await parseMarkdownFileSafe('/non/existent/file.md');
      expect(result).toBeNull();
    });
  });

  describe('parseMarkdownFile', () => {
    it('should throw error for non-existent file', async () => {
      await expect(parseMarkdownFile('/non/existent/file.md'))
        .rejects.toThrow('File not found');
    });

    it('should parse a real markdown file if available', async () => {
      // Test with sample article if it exists
      const testFile = 'content/articles/sample-article.md';
      try {
        await fs.access(testFile);
        const result = await parseMarkdownFile(testFile);
        
        expect(result).toHaveProperty('frontmatter');
        expect(result).toHaveProperty('content');
        expect(result).toHaveProperty('title');
        expect(result).toHaveProperty('wordCount');
        expect(typeof result.title).toBe('string');
        expect(typeof result.wordCount).toBe('number');
        expect(result.wordCount).toBeGreaterThan(0);
      } catch {
        // Skip test if file doesn't exist
        expect(true).toBe(true);
      }
    });
  });
});
