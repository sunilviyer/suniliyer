import type { ConstitutionPart } from '../data/reading-order';

/** 1 → I, 4 → IV, 18 → XVIII */
export function toRoman(n: number): string {
  const table: Array<[number, string]> = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
    [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
  ];
  let out = '';
  for (const [v, s] of table) {
    while (n >= v) { out += s; n -= v; }
  }
  return out;
}

/**
 * Progressive display label for a part — Roman numerals I…XVIII for the
 * 18 constitution parts (never "IIA"), section numbers for the preface,
 * names for front/back matter.
 */
export function partLabel(part: Pick<ConstitutionPart, 'category' | 'number' | 'title'>): string {
  switch (part.category) {
    case 'constitution':
      return `Part ${toRoman(parseInt(part.number, 10))}`;
    case 'preface':
      return `Section ${part.number}`;
    case 'appendix':
      return part.number ? `Appendix ${part.number}` : 'Closing';
    default:
      return part.title;
  }
}
