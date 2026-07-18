import type { ConstitutionPart } from '../data/reading-order';

/**
 * Display label for an article. The ten principles keep their Roman
 * numerals (I to X); every other article is referred to by its name.
 * No Arabic chapter numbers ever appear in visible prose.
 */
export function partLabel(part: Pick<ConstitutionPart, 'group' | 'roman' | 'title'>): string {
  if (part.group === 'principles' && part.roman) {
    return `Principle ${part.roman}`;
  }
  return part.title;
}

/** Short label for nav pills (long titles get trimmed sensibly) */
export function pillLabel(part: Pick<ConstitutionPart, 'group' | 'roman' | 'title'>): string {
  if (part.group === 'principles' && part.roman) {
    return `Principle ${part.roman}`;
  }
  return part.title.replace(/^The /, '');
}
