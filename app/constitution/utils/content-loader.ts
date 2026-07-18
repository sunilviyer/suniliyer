import fs from 'fs';
import path from 'path';
import { getPartById } from '../data/reading-order';

/**
 * Load markdown content for a constitution article.
 * The canonical set lives in /AGIConstitution/content/ (project root),
 * one hyphen-numbered file per article.
 */
export async function loadPartContent(partId: string): Promise<string | null> {
  try {
    const part = getPartById(partId);
    if (!part) {
      return null;
    }

    const contentPath = path.join(
      process.cwd(),
      'AGIConstitution',
      'content',
      part.filename
    );

    return fs.readFileSync(contentPath, 'utf-8');
  } catch (error) {
    console.error(`Error loading content for part ${partId}:`, error);
    return null;
  }
}
