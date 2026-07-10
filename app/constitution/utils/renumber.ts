/**
 * The source manuscript numbers its parts I, II, IIA, III … XVI, but the
 * site presents them progressively as Parts I–XVIII (reading-order.ts).
 * This transform rewrites in-text cross-references ("Part IIA",
 * "Parts VIII and VIIIA", "Section 3.5", "§ 2A.4") from the manuscript
 * numbering to the site numbering, without touching the source files.
 *
 * Labels that are NOT part references (Plate I, Rung IV, Yuga II,
 * Gita 2.47, Article 21…) are deliberately left alone.
 */

/** manuscript Part → site Part (both Roman) */
const ROMAN_MAP: Record<string, string> = {
  I: 'I', II: 'II', IIA: 'III', III: 'IV', IV: 'V', V: 'VI', VI: 'VII',
  VII: 'VIII', VIII: 'IX', VIIIA: 'X', IX: 'XI', X: 'XII', XI: 'XIII',
  XII: 'XIV', XIII: 'XV', XIV: 'XVI', XV: 'XVII', XVI: 'XVIII',
};

/** manuscript section prefix (Arabic, as used in "3.5" / "2A.4") → site part number */
const DECIMAL_MAP: Record<string, string> = {
  '1': '1', '2': '2', '2A': '3', '3': '4', '4': '5', '5': '6', '6': '7',
  '7': '8', '8': '9', '8A': '10', '9': '11', '10': '12', '11': '13',
  '12': '14', '13': '15', '14': '16', '15': '17', '16': '18',
};

export function renumberReferences(text: string): string {
  // "Part X" / "PART VIIIA" / "Parts VII, IX, X" / "Parts VIII and VIIIA"
  let out = text.replace(
    /\b(?:part|parts)\s+[IVX]+A?\b(?:(?:\s*,\s*|\s+and\s+|\s+&\s+|\s+through\s+|\s+to\s+|\s*[–—-]\s*)(?:(?:part|parts)\s+)?[IVX]+A?\b)*/gi,
    (m) => m.replace(/\b[IVX]+A?\b/g, (t) => ROMAN_MAP[t] ?? t)
  );

  // "Section 3.5" / "Part 3.5" / "§ 2A.4", including chains "Sections 3.1–3.4"
  out = out.replace(
    /\b(sections?|parts?|§)(\s*)(\d+A?)\.(\d+)((?:\s*(?:,|and|&|to|[–—-])\s*\d+A?\.\d+)*)/gi,
    (_m, word: string, sp: string, prefix: string, sec: string, rest: string) => {
      const head = `${word}${sp}${DECIMAL_MAP[prefix] ?? prefix}.${sec}`;
      const tail = rest.replace(/(\d+A?)\.(\d+)/g, (_mm, p: string, s: string) => `${DECIMAL_MAP[p] ?? p}.${s}`);
      return head + tail;
    }
  );

  return out;
}
