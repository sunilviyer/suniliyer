import fs from 'fs';
import path from 'path';
import { getPartById } from '../data/reading-order';

/**
 * Load markdown content for a specific constitution part
 * Content files are stored in /AGIConstitution/content/
 *
 * Special handling for Parts 9, 10, 11 which are all in the same file
 */
export async function loadPartContent(partId: string): Promise<string | null> {
  try {
    const part = getPartById(partId);
    if (!part) {
      return null;
    }

    // Content is in /Volumes/External/AIDefence/AGIConstitution/content/
    const contentPath = path.join(
      '/Volumes/External/AIDefence/AGIConstitution/content',
      part.filename
    );

    const fullContent = fs.readFileSync(contentPath, 'utf-8');

    // Special handling for the combined Parts VIII, VIIIA, IX file
    if (part.filename === '12_Parts_VIII_VIIIA_IX_CoExistence_Kurukshetra_Powers.md') {
      return extractPartFromCombinedFile(fullContent, partId);
    }

    return fullContent;
  } catch (error) {
    console.error(`Error loading content for part ${partId}:`, error);
    return null;
  }
}

/**
 * Extract a specific part from the combined Parts VIII/VIIIA/IX file
 */
function extractPartFromCombinedFile(content: string, partId: string): string {
  const lines = content.split('\n');

  // Define the section markers for each part
  const sectionMarkers = {
    'part-9': { start: '# **PART VIII: The Co-Existence Framework**', end: '# **PART VIIIA: The Kurukshetra Protocol**' },
    'part-10': { start: '# **PART VIIIA: The Kurukshetra Protocol**', end: '# **PART IX: Separation of Powers in AGI Governance**' },
    'part-11': { start: '# **PART IX: Separation of Powers in AGI Governance**', end: null }, // Goes to end of file
  };

  const markers = sectionMarkers[partId as keyof typeof sectionMarkers];
  if (!markers) {
    return content; // Fallback to full content
  }

  let startIndex = -1;
  let endIndex = lines.length;

  // Find start line
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(markers.start)) {
      startIndex = i;
      break;
    }
  }

  // Find end line (if specified)
  if (markers.end) {
    for (let i = startIndex + 1; i < lines.length; i++) {
      if (lines[i].includes(markers.end)) {
        endIndex = i;
        break;
      }
    }
  }

  if (startIndex === -1) {
    return content; // Fallback
  }

  return lines.slice(startIndex, endIndex).join('\n');
}

/**
 * Parse markdown content into sections
 * This is a simple parser that splits on ## headings
 */
export function parseMarkdownSections(markdown: string): {
  title: string;
  content: string;
}[] {
  const lines = markdown.split('\n');
  const sections: { title: string; content: string }[] = [];
  let currentSection: { title: string; content: string } | null = null;

  for (const line of lines) {
    // Check if this is a section heading (## or #)
    if (line.startsWith('## ') || line.startsWith('# ')) {
      // Save the previous section if it exists
      if (currentSection) {
        sections.push(currentSection);
      }
      // Start a new section
      currentSection = {
        title: line.replace(/^#+\s*/, '').trim(),
        content: '',
      };
    } else if (currentSection) {
      // Add content to the current section
      currentSection.content += line + '\n';
    }
  }

  // Don't forget the last section
  if (currentSection) {
    sections.push(currentSection);
  }

  return sections;
}
