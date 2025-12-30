/**
 * Markdown Content Parser
 * Extracts frontmatter, content, title, and calculates word count
 */

import * as fs from 'fs/promises';
import matter from 'gray-matter';
import { VALIDATION_PATTERNS } from './constants';

export interface ParsedMarkdown {
  frontmatter: Record<string, any>;
  content: string;
  title: string;
  wordCount: number;
}

/**
 * Parses a markdown file and extracts frontmatter, content, title, and word count
 * @param filePath Path to the markdown file
 * @returns Parsed markdown data
 * @throws Error if file cannot be read or parsed
 */
export async function parseMarkdownFile(filePath: string): Promise<ParsedMarkdown> {
  try {
    // Read file content
    const fileContent = await fs.readFile(filePath, 'utf-8');
    
    // Parse frontmatter and content using gray-matter
    const { data: frontmatter, content } = matter(fileContent);
    
    // Extract title from H1 header or frontmatter
    const title = extractTitle(content, frontmatter);
    
    // Calculate word count
    const wordCount = calculateWordCount(content);
    
    return {
      frontmatter,
      content,
      title,
      wordCount
    };
  } catch (error) {
    const err = error as NodeJS.ErrnoException;
    
    if (err.code === 'ENOENT') {
      throw new Error(`File not found: ${filePath}`);
    }
    if (err.code === 'EACCES') {
      throw new Error(`Permission denied reading file: ${filePath}`);
    }
    if (err.code === 'EISDIR') {
      throw new Error(`Path is a directory, not a file: ${filePath}`);
    }
    
    // Handle gray-matter parsing errors
    if (err.message && err.message.includes('can not read')) {
      throw new Error(`Malformed frontmatter in ${filePath}: ${err.message}`);
    }
    
    throw new Error(`Failed to parse markdown file ${filePath}: ${err.message}`);
  }
}

/**
 * Extracts title from H1 header in content or falls back to frontmatter
 * @param content Markdown content
 * @param frontmatter Parsed frontmatter object
 * @returns Extracted title or empty string if not found
 */
export function extractTitle(content: string, frontmatter: Record<string, any> = {}): string {
  // Try to extract from H1 header first
  const h1Match = content.match(VALIDATION_PATTERNS.H1_HEADER);
  if (h1Match && h1Match[1]) {
    return h1Match[1].trim();
  }
  
  // Fall back to frontmatter title
  if (frontmatter.title && typeof frontmatter.title === 'string') {
    return frontmatter.title.trim();
  }
  
  // Return empty string if no title found
  return '';
}

/**
 * Calculates accurate word count from markdown content
 * Excludes frontmatter, code blocks, and markdown syntax
 * @param content Markdown content
 * @returns Word count
 */
export function calculateWordCount(content: string): number {
  // Remove code blocks (both fenced and indented)
  let cleanContent = content.replace(/```[\s\S]*?```/g, '');
  cleanContent = cleanContent.replace(/^    .+$/gm, '');
  
  // Remove inline code
  cleanContent = cleanContent.replace(/`[^`]+`/g, '');
  
  // Remove markdown links but keep the text
  cleanContent = cleanContent.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  
  // Remove images
  cleanContent = cleanContent.replace(/!\[([^\]]*)\]\([^)]+\)/g, '');
  
  // Remove HTML tags
  cleanContent = cleanContent.replace(/<[^>]+>/g, '');
  
  // Remove markdown headers symbols
  cleanContent = cleanContent.replace(/^#{1,6}\s+/gm, '');
  
  // Remove markdown emphasis markers
  cleanContent = cleanContent.replace(/[*_]{1,2}([^*_]+)[*_]{1,2}/g, '$1');
  
  // Remove list markers
  cleanContent = cleanContent.replace(/^\s*[-*+]\s+/gm, '');
  cleanContent = cleanContent.replace(/^\s*\d+\.\s+/gm, '');
  
  // Remove blockquote markers
  cleanContent = cleanContent.replace(/^\s*>\s+/gm, '');
  
  // Remove horizontal rules
  cleanContent = cleanContent.replace(/^[-*_]{3,}$/gm, '');
  
  // Split by whitespace and filter out empty strings
  const words = cleanContent
    .split(/\s+/)
    .filter(word => word.length > 0 && /\w/.test(word));
  
  return words.length;
}

/**
 * Safely parses a markdown file, returning null on error instead of throwing
 * @param filePath Path to the markdown file
 * @returns Parsed markdown data or null if parsing fails
 */
export async function parseMarkdownFileSafe(filePath: string): Promise<ParsedMarkdown | null> {
  try {
    return await parseMarkdownFile(filePath);
  } catch (error) {
    console.warn(`Warning: Failed to parse ${filePath}: ${(error as Error).message}`);
    return null;
  }
}
