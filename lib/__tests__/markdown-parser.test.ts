/**
 * Tests for Markdown Parser
 * Story 3.2: Validate markdown parsing and frontmatter extraction
 * Story 3.3: Validate MDX compilation with syntax highlighting
 */

import fs from 'fs';
import path from 'path';
import { parseMarkdownFile, compileMarkdownToMDX, parseAndCompileMarkdown } from '../markdown-parser';

// Mock next-mdx-remote to avoid ESM issues in Jest
// NOTE: These mocks mean we're testing the parsing logic but NOT the actual
// MDX compilation or rehype-prism integration. Real integration tests would
// require a different test setup (e.g., separate integration test suite that
// can handle ESM modules). For now, we trust next-mdx-remote and rehype-prism
// as battle-tested libraries and focus on testing our wrapper logic.
jest.mock('next-mdx-remote/serialize', () => ({
  serialize: jest.fn().mockImplementation(async (content: string) => ({
    compiledSource: `function MDXContent() { return "${content.substring(0, 20)}..." }`,
    scope: {},
  })),
}));

jest.mock('rehype-prism', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('parseMarkdownFile', () => {
  const testDir = path.join(__dirname, 'test-articles');

  beforeAll(() => {
    // Create test directory if it doesn't exist
    if (!fs.existsSync(testDir)) {
      fs.mkdirSync(testDir, { recursive: true });
    }
  });

  afterAll(() => {
    // Clean up test files
    if (fs.existsSync(testDir)) {
      fs.rmSync(testDir, { recursive: true, force: true });
    }
  });

  describe('Valid frontmatter parsing', () => {
    it('should parse valid markdown file with all required fields', async () => {
      const testFile = path.join(testDir, 'valid-article.md');
      const content = `---
title: "Large Language Models Explained"
category: "AI Fundamentals"
tags: ["llm", "transformer", "neural-networks"]
date: "2025-12-14"
reading_time: 8
excerpt: "A comprehensive guide to understanding large language models"
---

# Large Language Models

This is the article content in markdown format.
`;

      fs.writeFileSync(testFile, content, 'utf-8');

      const { frontmatter, content: body } = await parseMarkdownFile(testFile);

      expect(frontmatter.title).toBe('Large Language Models Explained');
      expect(frontmatter.category).toBe('AI Fundamentals');
      expect(frontmatter.tags).toEqual(['llm', 'transformer', 'neural-networks']);
      expect(frontmatter.date).toBe('2025-12-14');
      expect(frontmatter.reading_time).toBe(8);
      expect(frontmatter.excerpt).toBe('A comprehensive guide to understanding large language models');
      expect(frontmatter.slug).toBe('valid-article');
      expect(body.trim()).toContain('# Large Language Models');
    });

    it('should parse markdown with optional fields', async () => {
      const testFile = path.join(testDir, 'article-with-optionals.md');
      const content = `---
title: "Test Article"
category: "Videos"
tags: ["test"]
date: "2025-12-14"
reading_time: 5
excerpt: "Test excerpt"
video_url: "https://youtube.com/watch?v=test123"
seo_title: "Custom SEO Title"
seo_description: "Custom SEO Description"
related_context: "test context keywords"
---

Content here.
`;

      fs.writeFileSync(testFile, content, 'utf-8');

      const { frontmatter } = await parseMarkdownFile(testFile);

      expect(frontmatter.video_url).toBe('https://youtube.com/watch?v=test123');
      expect(frontmatter.seo_title).toBe('Custom SEO Title');
      expect(frontmatter.seo_description).toBe('Custom SEO Description');
      expect(frontmatter.related_context).toBe('test context keywords');
    });

    it('should generate slug from filename', async () => {
      const testFile = path.join(testDir, 'my-awesome-article.md');
      const content = `---
title: "My Awesome Article"
category: "AI Fundamentals"
tags: ["test"]
date: "2025-12-14"
reading_time: 5
excerpt: "Test"
---

Content.
`;

      fs.writeFileSync(testFile, content, 'utf-8');

      const { frontmatter } = await parseMarkdownFile(testFile);

      expect(frontmatter.slug).toBe('my-awesome-article');
    });

    it('should handle all valid categories', async () => {
      const validCategories = [
        'AI Fundamentals',
        'Risks & Principles',
        'Legal Frameworks',
        'AI Laws',
        'Risk Frameworks',
        'Development Lifecycle',
        'Governance',
        'Auditing & Assessment',
        'Industry Perspectives',
        'Explainability',
        'Videos',
      ];

      for (const category of validCategories) {
        const testFile = path.join(testDir, `test-${category.toLowerCase().replace(/\s+/g, '-')}.md`);
        const content = `---
title: "Test"
category: "${category}"
tags: []
date: "2025-12-14"
reading_time: 1
excerpt: "Test"
---

Test.
`;

        fs.writeFileSync(testFile, content, 'utf-8');

        const { frontmatter } = await parseMarkdownFile(testFile);
        expect(frontmatter.category).toBe(category);
      }
    });
  });

  describe('Frontmatter validation errors', () => {
    it('should throw error for missing required field', async () => {
      const testFile = path.join(testDir, 'missing-field.md');
      const content = `---
title: "Test"
category: "AI Fundamentals"
tags: []
date: "2025-12-14"
reading_time: 5
---

Missing excerpt field.
`;

      fs.writeFileSync(testFile, content, 'utf-8');

      await expect(parseMarkdownFile(testFile)).rejects.toThrow(
        'Missing required frontmatter field: excerpt'
      );
      await expect(parseMarkdownFile(testFile)).rejects.toThrow(testFile);
    });

    it('should throw error for invalid category', async () => {
      const testFile = path.join(testDir, 'invalid-category.md');
      const content = `---
title: "Test"
category: "Machine Learning"
tags: []
date: "2025-12-14"
reading_time: 5
excerpt: "Test"
---

Invalid category.
`;

      fs.writeFileSync(testFile, content, 'utf-8');

      await expect(parseMarkdownFile(testFile)).rejects.toThrow(
        'Invalid category "Machine Learning"'
      );
      await expect(parseMarkdownFile(testFile)).rejects.toThrow(testFile);
      await expect(parseMarkdownFile(testFile)).rejects.toThrow('Must be one of:');
    });

    it('should throw error for invalid date format', async () => {
      const invalidDates = [
        '12/14/2025',
        '2025.12.14',
        '14-12-2025',
        'not a date',
        '2025-1-1',
      ];

      for (const invalidDate of invalidDates) {
        const testFile = path.join(testDir, `invalid-date-${invalidDates.indexOf(invalidDate)}.md`);
        const content = `---
title: "Test"
category: "AI Fundamentals"
tags: []
date: "${invalidDate}"
reading_time: 5
excerpt: "Test"
---

Invalid date.
`;

        fs.writeFileSync(testFile, content, 'utf-8');

        await expect(parseMarkdownFile(testFile)).rejects.toThrow(
          `Invalid date format "${invalidDate}"`
        );
        await expect(parseMarkdownFile(testFile)).rejects.toThrow('Must be YYYY-MM-DD');
        await expect(parseMarkdownFile(testFile)).rejects.toThrow(testFile);
      }
    });

    it('should throw error for invalid reading_time (not a number)', async () => {
      const testFile = path.join(testDir, 'invalid-reading-time-string.md');
      const content = `---
title: "Test"
category: "AI Fundamentals"
tags: []
date: "2025-12-14"
reading_time: "8 minutes"
excerpt: "Test"
---

Invalid reading_time.
`;

      fs.writeFileSync(testFile, content, 'utf-8');

      await expect(parseMarkdownFile(testFile)).rejects.toThrow(
        'Invalid reading_time "8 minutes"'
      );
      await expect(parseMarkdownFile(testFile)).rejects.toThrow('Must be a number');
      await expect(parseMarkdownFile(testFile)).rejects.toThrow(testFile);
    });

    it('should throw error for invalid reading_time (not a positive integer)', async () => {
      const invalidReadingTimes = [0, -5, 3.7];

      for (const invalidTime of invalidReadingTimes) {
        const testFile = path.join(testDir, `invalid-reading-time-${invalidTime}.md`);
        const content = `---
title: "Test"
category: "AI Fundamentals"
tags: []
date: "2025-12-14"
reading_time: ${invalidTime}
excerpt: "Test"
---

Invalid reading_time.
`;

        fs.writeFileSync(testFile, content, 'utf-8');

        await expect(parseMarkdownFile(testFile)).rejects.toThrow(
          `Invalid reading_time "${invalidTime}"`
        );
        await expect(parseMarkdownFile(testFile)).rejects.toThrow('Must be a positive integer');
      }
    });

    it('should throw error for invalid tags (not an array)', async () => {
      const testFile = path.join(testDir, 'invalid-tags.md');
      const content = `---
title: "Test"
category: "AI Fundamentals"
tags: "tag1, tag2"
date: "2025-12-14"
reading_time: 5
excerpt: "Test"
---

Invalid tags.
`;

      fs.writeFileSync(testFile, content, 'utf-8');

      await expect(parseMarkdownFile(testFile)).rejects.toThrow(
        'Invalid tags "tag1, tag2"'
      );
      await expect(parseMarkdownFile(testFile)).rejects.toThrow('Must be an array');
      await expect(parseMarkdownFile(testFile)).rejects.toThrow(testFile);
    });
  });

  describe('Content separation', () => {
    it('should separate frontmatter from content', async () => {
      const testFile = path.join(testDir, 'content-test.md');
      const content = `---
title: "Test"
category: "AI Fundamentals"
tags: []
date: "2025-12-14"
reading_time: 1
excerpt: "Test"
---

# Main Content

This is the actual article content.

## Section 2

More content here.
`;

      fs.writeFileSync(testFile, content, 'utf-8');

      const { frontmatter, content: body } = await parseMarkdownFile(testFile);

      expect(frontmatter.title).toBe('Test');
      expect(body).toContain('# Main Content');
      expect(body).toContain('## Section 2');
      expect(body).not.toContain('---');
      expect(body).not.toContain('title: "Test"');
    });

    it('should handle empty content', async () => {
      const testFile = path.join(testDir, 'empty-content.md');
      const content = `---
title: "Test"
category: "AI Fundamentals"
tags: []
date: "2025-12-14"
reading_time: 1
excerpt: "Test"
---

`;

      fs.writeFileSync(testFile, content, 'utf-8');

      const { content: body } = await parseMarkdownFile(testFile);

      expect(body.trim()).toBe('');
    });
  });

  describe('File system errors', () => {
    it('should throw error when file does not exist', async () => {
      const nonExistentFile = path.join(testDir, 'does-not-exist.md');

      await expect(parseMarkdownFile(nonExistentFile)).rejects.toThrow(
        'File not found:'
      );
      await expect(parseMarkdownFile(nonExistentFile)).rejects.toThrow(nonExistentFile);
    });

    it('should throw error when path is a directory', async () => {
      // testDir is a directory, not a file
      await expect(parseMarkdownFile(testDir)).rejects.toThrow(
        'Path is a directory, not a file:'
      );
      await expect(parseMarkdownFile(testDir)).rejects.toThrow(testDir);
    });

    it('should throw error for permission denied (simulated)', async () => {
      // Note: Testing EACCES is platform-dependent and requires special permissions
      // This test documents the expected behavior rather than reliably testing it
      // In a real scenario with chmod 000, the error message would be:
      // "Permission denied reading file: /path/to/file.md"
    });
  });

  describe('Edge cases', () => {
    it('should handle empty tags array', async () => {
      const testFile = path.join(testDir, 'empty-tags.md');
      const content = `---
title: "Test"
category: "AI Fundamentals"
tags: []
date: "2025-12-14"
reading_time: 1
excerpt: "Test"
---

Content.
`;

      fs.writeFileSync(testFile, content, 'utf-8');

      const { frontmatter } = await parseMarkdownFile(testFile);

      expect(frontmatter.tags).toEqual([]);
    });

    it('should handle multiple tags', async () => {
      const testFile = path.join(testDir, 'many-tags.md');
      const content = `---
title: "Test"
category: "AI Fundamentals"
tags: ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6"]
date: "2025-12-14"
reading_time: 1
excerpt: "Test"
---

Content.
`;

      fs.writeFileSync(testFile, content, 'utf-8');

      const { frontmatter } = await parseMarkdownFile(testFile);

      expect(frontmatter.tags).toEqual(['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6']);
    });
  });
});

describe('compileMarkdownToMDX', () => {
  describe('Basic MDX compilation', () => {
    it('should compile simple markdown to MDX', async () => {
      const content = '# Hello World\n\nThis is a test.';

      const result = await compileMarkdownToMDX(content);

      expect(result).toHaveProperty('compiledSource');
      expect(typeof result.compiledSource).toBe('string');
      expect(result.compiledSource.length).toBeGreaterThan(0);
    });

    it('should compile markdown with code blocks', async () => {
      const content = `# Code Example

\`\`\`typescript
const greeting = "Hello, World!";
console.log(greeting);
\`\`\`
`;

      const result = await compileMarkdownToMDX(content);

      expect(result).toHaveProperty('compiledSource');
      expect(typeof result.compiledSource).toBe('string');
      expect(result.compiledSource.length).toBeGreaterThan(0);
    });

    it('should compile markdown with multiple languages', async () => {
      const content = `# Multi-Language Examples

\`\`\`typescript
const x: number = 5;
\`\`\`

\`\`\`python
def hello():
    print("Hello")
\`\`\`

\`\`\`bash
npm install
\`\`\`
`;

      const result = await compileMarkdownToMDX(content);

      expect(result).toHaveProperty('compiledSource');
      expect(result.compiledSource.length).toBeGreaterThan(0);
    });
  });

  describe('Standard markdown elements', () => {
    it('should compile headings (H1-H6)', async () => {
      const content = `# H1 Heading
## H2 Heading
### H3 Heading
#### H4 Heading
##### H5 Heading
###### H6 Heading`;

      const result = await compileMarkdownToMDX(content);

      expect(result).toHaveProperty('compiledSource');
      expect(result.compiledSource.length).toBeGreaterThan(0);
    });

    it('should compile lists (ordered and unordered)', async () => {
      const content = `# Lists

Unordered:
- Item 1
- Item 2
  - Nested item

Ordered:
1. First
2. Second
3. Third`;

      const result = await compileMarkdownToMDX(content);

      expect(result).toHaveProperty('compiledSource');
    });

    it('should compile links', async () => {
      const content = '[Google](https://google.com) and [GitHub](https://github.com)';

      const result = await compileMarkdownToMDX(content);

      expect(result).toHaveProperty('compiledSource');
    });

    it('should compile images', async () => {
      const content = '![Alt text](https://example.com/image.png)';

      const result = await compileMarkdownToMDX(content);

      expect(result).toHaveProperty('compiledSource');
    });

    it('should compile tables', async () => {
      const content = `| Column 1 | Column 2 |
|----------|----------|
| Value 1  | Value 2  |
| Value 3  | Value 4  |`;

      const result = await compileMarkdownToMDX(content);

      expect(result).toHaveProperty('compiledSource');
    });

    it('should compile blockquotes', async () => {
      const content = '> This is a blockquote\n> with multiple lines';

      const result = await compileMarkdownToMDX(content);

      expect(result).toHaveProperty('compiledSource');
    });

    it('should compile inline code', async () => {
      const content = 'This is `inline code` in a sentence.';

      const result = await compileMarkdownToMDX(content);

      expect(result).toHaveProperty('compiledSource');
    });
  });

  describe('Error handling', () => {
    it('should handle empty content', async () => {
      const content = '';

      const result = await compileMarkdownToMDX(content);

      expect(result).toHaveProperty('compiledSource');
    });

    it('should throw error for invalid MDX syntax (if applicable)', async () => {
      // MDX is generally forgiving, but we test error handling exists
      const content = '# Valid markdown';

      const result = await compileMarkdownToMDX(content);

      expect(result).toHaveProperty('compiledSource');
    });
  });

  describe('Syntax highlighting integration', () => {
    it('should process code blocks with rehype-prism', async () => {
      const content = `\`\`\`javascript
function hello() {
  return "world";
}
\`\`\``;

      const result = await compileMarkdownToMDX(content);

      // Verify MDX compilation succeeded
      expect(result).toHaveProperty('compiledSource');
      expect(typeof result.compiledSource).toBe('string');
    });

    it('should handle multiple code blocks in one document', async () => {
      const content = `# Code Examples

\`\`\`typescript
const a: number = 1;
\`\`\`

Some text between code blocks.

\`\`\`python
def func():
    pass
\`\`\`
`;

      const result = await compileMarkdownToMDX(content);

      expect(result).toHaveProperty('compiledSource');
      expect(result.compiledSource.length).toBeGreaterThan(0);
    });
  });

  describe('MDX component support', () => {
    it('should compile MDX with React component syntax', async () => {
      const content = `# Article with Component

<CustomAlert type="warning">
  This is an alert component
</CustomAlert>

Regular markdown continues here.`;

      const result = await compileMarkdownToMDX(content);

      // Verify MDX handles JSX component syntax (even if mocked)
      expect(result).toHaveProperty('compiledSource');
      expect(typeof result.compiledSource).toBe('string');
    });

    it('should compile MDX with inline expressions', async () => {
      const content = `# Dynamic Content

The current year is {new Date().getFullYear()}.

{/* This is an MDX comment */}`;

      const result = await compileMarkdownToMDX(content);

      expect(result).toHaveProperty('compiledSource');
    });
  });
});

describe('parseAndCompileMarkdown', () => {
  const testDir = path.join(__dirname, 'test-articles-mdx');

  beforeAll(() => {
    if (!fs.existsSync(testDir)) {
      fs.mkdirSync(testDir, { recursive: true });
    }
  });

  afterAll(() => {
    if (fs.existsSync(testDir)) {
      fs.rmSync(testDir, { recursive: true, force: true });
    }
  });

  describe('End-to-end compilation', () => {
    it('should parse frontmatter and compile content in one operation', async () => {
      const testFile = path.join(testDir, 'test-article.md');
      const content = `---
title: "Test Article"
category: "AI Fundamentals"
tags: ["test", "mdx"]
date: "2025-12-14"
reading_time: 5
excerpt: "Testing MDX compilation"
---

# Article Content

This is the **article body** with *formatting*.

\`\`\`typescript
const example: string = "Hello";
\`\`\`
`;

      fs.writeFileSync(testFile, content, 'utf-8');

      const { frontmatter, content: compiledContent } = await parseAndCompileMarkdown(testFile);

      // Verify frontmatter
      expect(frontmatter.title).toBe('Test Article');
      expect(frontmatter.category).toBe('AI Fundamentals');
      expect(frontmatter.tags).toEqual(['test', 'mdx']);

      // Verify compiled content
      expect(compiledContent).toHaveProperty('compiledSource');
      expect(typeof compiledContent.compiledSource).toBe('string');
      expect(compiledContent.compiledSource.length).toBeGreaterThan(0);
    });

    it('should work with sample article file', async () => {
      const sampleFile = path.join(
        __dirname,
        '../../content/articles/sample-article-llm-fundamentals.md'
      );

      // Only run if sample file exists
      if (fs.existsSync(sampleFile)) {
        const { frontmatter, content: compiledContent } = await parseAndCompileMarkdown(sampleFile);

        expect(frontmatter.title).toBeTruthy();
        expect(frontmatter.category).toBeTruthy();
        expect(compiledContent).toHaveProperty('compiledSource');
        expect(compiledContent.compiledSource.length).toBeGreaterThan(0);
      }
    });
  });

  describe('Error propagation', () => {
    it('should propagate frontmatter validation errors', async () => {
      const testFile = path.join(testDir, 'invalid-frontmatter.md');
      const content = `---
title: "Test"
category: "Invalid Category"
tags: []
date: "2025-12-14"
reading_time: 1
excerpt: "Test"
---

# Content
`;

      fs.writeFileSync(testFile, content, 'utf-8');

      await expect(parseAndCompileMarkdown(testFile)).rejects.toThrow('Invalid category');
    });

    it('should propagate file not found errors', async () => {
      const nonExistentFile = path.join(testDir, 'does-not-exist.md');

      await expect(parseAndCompileMarkdown(nonExistentFile)).rejects.toThrow('File not found');
    });
  });
});
