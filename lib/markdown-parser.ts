/**
 * Markdown Parser with Frontmatter Extraction
 *
 * Parses markdown files with YAML frontmatter, validates metadata against
 * the Article interface, and separates content from frontmatter.
 *
 * Uses gray-matter for YAML frontmatter parsing (industry-standard library
 * used by Next.js, Gatsby, and other static site generators).
 *
 * @module lib/markdown-parser
 */

import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrism from 'rehype-prism';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import type { Article } from '@/types/article';
import { VALID_CATEGORIES, type Category } from '@/lib/constants';

/**
 * Parses a markdown file with YAML frontmatter.
 *
 * Extracts and validates frontmatter against the Article interface,
 * generates slug from filename, and separates content from metadata.
 *
 * @param filePath - Absolute path to the markdown file
 * @returns Promise resolving to { frontmatter, content }
 *
 * @throws {Error} When file cannot be read or does not exist
 * @throws {Error} When required frontmatter field is missing or empty
 * @throws {Error} When category is invalid (not in VALID_CATEGORIES)
 * @throws {Error} When date format is invalid (must be YYYY-MM-DD)
 * @throws {Error} When reading_time is not a positive integer
 * @throws {Error} When tags is not an array or contains non-string values
 *
 * @example
 * ```typescript
 * const { frontmatter, content } = await parseMarkdownFile('/content/articles/my-article.md');
 * console.log(frontmatter.title); // "My Article Title"
 * console.log(frontmatter.slug);  // "my-article"
 * console.log(content);           // "# Article content..."
 * ```
 */
export async function parseMarkdownFile(
  filePath: string
): Promise<{ frontmatter: Article; content: string }> {
  // Read file from filesystem (truly async)
  let fileContent: string;
  try {
    fileContent = await fs.readFile(filePath, 'utf-8');
  } catch (error) {
    const err = error as NodeJS.ErrnoException;
    if (err.code === 'ENOENT') {
      throw new Error(`File not found: ${filePath}`);
    } else if (err.code === 'EACCES') {
      throw new Error(`Permission denied reading file: ${filePath}`);
    } else if (err.code === 'EISDIR') {
      throw new Error(`Path is a directory, not a file: ${filePath}`);
    }
    throw new Error(`Failed to read file ${filePath}: ${err.message}`);
  }

  // Parse with gray-matter
  const { data, content } = matter(fileContent);

  // Generate slug from filename
  const filename = path.basename(filePath, '.md');
  const slug = filename.toLowerCase(); // Already in kebab-case by convention

  // Validate required fields exist and are not empty
  const requiredFields: (keyof Article)[] = [
    'title',
    'category',
    'tags',
    'date',
    'reading_time',
    'excerpt',
  ];

  for (const field of requiredFields) {
    if (!(field in data) || data[field] === undefined || data[field] === null) {
      throw new Error(
        `Missing required frontmatter field: ${field} in ${filePath}`
      );
    }

    // Check for empty strings in string fields
    if (typeof data[field] === 'string' && !data[field].trim()) {
      throw new Error(
        `Required frontmatter field "${field}" cannot be empty in ${filePath}`
      );
    }
  }

  // Validate category
  if (!VALID_CATEGORIES.includes(data.category as Category)) {
    throw new Error(
      `Invalid category "${data.category}" in ${filePath}. Must be one of: ${VALID_CATEGORIES.join(', ')}`
    );
  }

  // Validate date format (YYYY-MM-DD)
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(data.date)) {
    throw new Error(
      `Invalid date format "${data.date}" in ${filePath}. Must be YYYY-MM-DD`
    );
  }

  // Validate reading_time is a positive integer
  if (typeof data.reading_time !== 'number') {
    throw new Error(
      `Invalid reading_time "${data.reading_time}" in ${filePath}. Must be a number, got ${typeof data.reading_time}`
    );
  }
  if (data.reading_time <= 0 || Math.floor(data.reading_time) !== data.reading_time) {
    throw new Error(
      `Invalid reading_time "${data.reading_time}" in ${filePath}. Must be a positive integer (whole number greater than 0)`
    );
  }

  // Validate tags is an array of strings
  if (!Array.isArray(data.tags)) {
    throw new Error(
      `Invalid tags "${data.tags}" in ${filePath}. Must be an array`
    );
  }

  // Validate all tags are strings
  for (let i = 0; i < data.tags.length; i++) {
    if (typeof data.tags[i] !== 'string') {
      throw new Error(
        `Invalid tag at index ${i} in ${filePath}. All tags must be strings, got: ${typeof data.tags[i]}`
      );
    }
  }

  // Type the frontmatter data as Article
  const frontmatter: Article = {
    title: data.title,
    slug,
    category: data.category as Category,
    tags: data.tags,
    date: data.date,
    reading_time: data.reading_time,
    excerpt: data.excerpt,
    // Optional fields
    video_url: data.video_url,
    seo_title: data.seo_title,
    seo_description: data.seo_description,
    related_context: data.related_context,
  };

  return { frontmatter, content };
}

/**
 * Compiles markdown content to MDX with syntax highlighting.
 *
 * Uses next-mdx-remote to compile markdown to React components at build time.
 * Applies rehype-prism for syntax highlighting of code blocks.
 *
 * @param content - Raw markdown content (without frontmatter)
 * @returns Promise resolving to MDXRemoteSerializeResult (serialized MDX)
 *
 * @throws {Error} When markdown compilation fails
 * @throws {Error} When invalid MDX syntax is encountered
 *
 * @example
 * ```typescript
 * const content = "# Hello\n\n```typescript\nconst x = 5;\n```";
 * const compiledMDX = await compileMarkdownToMDX(content);
 * // compiledMDX can be passed to <MDXRemote> component for rendering
 * ```
 */
export async function compileMarkdownToMDX(
  content: string
): Promise<MDXRemoteSerializeResult> {
  try {
    const mdxSource = await serialize(content, {
      mdxOptions: {
        rehypePlugins: [rehypePrism],
      },
    });
    return mdxSource;
  } catch (error) {
    const err = error as Error;
    throw new Error(`Failed to compile markdown to MDX: ${err.message}`);
  }
}

/**
 * Parses a markdown file and compiles content to MDX.
 *
 * Combines parseMarkdownFile and compileMarkdownToMDX into a single
 * build-time operation. Extracts frontmatter, validates it against the
 * Article interface, and compiles the markdown content to MDX with
 * syntax highlighting.
 *
 * @param filePath - Absolute path to the markdown file
 * @returns Promise resolving to { frontmatter, compiledContent }
 *
 * @throws {Error} When file cannot be read or does not exist
 * @throws {Error} When frontmatter validation fails
 * @throws {Error} When MDX compilation fails
 *
 * @example
 * ```typescript
 * const { frontmatter, compiledContent } = await parseAndCompileMarkdown('/content/articles/my-article.md');
 * // Use frontmatter for metadata
 * // Pass compiledContent to <MDXRemote> for rendering
 * ```
 */
export async function parseAndCompileMarkdown(
  filePath: string
): Promise<{ frontmatter: Article; content: MDXRemoteSerializeResult }> {
  // Parse frontmatter and content
  const { frontmatter, content: markdownContent } = await parseMarkdownFile(filePath);

  // Compile markdown to MDX with syntax highlighting
  const compiledContent = await compileMarkdownToMDX(markdownContent);

  return { frontmatter, content: compiledContent };
}
