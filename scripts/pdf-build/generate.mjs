#!/usr/bin/env node
/**
 * Builds the downloadable Dharma Sanhita PDF from the canonical markdown
 * content, in the same visual language as the site (Cormorant Garamond /
 * Source Serif 4 / Noto Serif Devanagari, saffron/gold/deep-blue tokens,
 * the Anchors & Aids block, story plates). Run: node generate.mjs
 *
 * Pipeline: reading-order.ts (safely evaluated, not regex-parsed) → per
 * chapter markdown → unified/remark/rehype (same plugins as the site's
 * ReactMarkdown) → HTML with local chapter anchors → one HTML document →
 * headless Chrome print-to-pdf.
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const CONTENT_DIR = path.join(ROOT, 'AGIConstitution/content');
const PUBLIC_DIR = path.join(ROOT, 'public');
const OUT_PDF = path.join(PUBLIC_DIR, 'downloads/AGIConstitutionDharmaSanhita.pdf');
const OUT_HTML = path.join(__dirname, 'book.html');

// ---------- 1. Safely extract the chapter list from reading-order.ts ----------
// (the file is TypeScript, but the array literal itself is valid JS once we
// slice it out — evaluating it is far more reliable than regexing strings
// that contain escaped quotes, e.g. "Author\'s Note")
const tsSource = fs.readFileSync(path.join(ROOT, 'app/constitution/data/reading-order.ts'), 'utf8');
const startMarker = 'constitutionParts: ConstitutionPart[] = ';
const start = tsSource.indexOf(startMarker) + startMarker.length;
const end = tsSource.indexOf('\n];', start) + 2;
const arrayLiteral = tsSource.slice(start, end);
const constitutionParts = new Function(`return ${arrayLiteral}`)();

console.log(`Loaded ${constitutionParts.length} chapters from reading-order.ts`);

const GROUP_TITLES = {
  opening: 'The Opening Frame',
  principles: 'The Ten Principles',
  machinery: 'The Machinery',
  safeguards: 'Defining and Safeguarding',
  aids: 'The Aids',
  closing: 'The Closing Frame',
};

const filenameToId = new Map(constitutionParts.map(p => [p.filename.replace(/^\d+-/, '').replace(/\.md$/, ''), p.id]));
// map by the literal NN-slug.md filename too, since links use that form
const filenameKeyToId = new Map(constitutionParts.map(p => [p.filename, p.id]));

// ---------- 2. Markdown → HTML (same plugins the site uses) ----------
const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeRaw)
  .use(rehypeStringify, { allowDangerousHtml: true });

/** Mirrors MarkdownBook.tsx's stripFrontMatter: drop the opening ॐ, the
 * ordinal line (principles), the H1, and the descriptor/anchor line —
 * the PDF renders all of these itself in the chapter's title block. Also
 * strips any leftover inline <figure class="plate"> (the PDF places its
 * own plate). */
function stripFrontMatter(md) {
  const lines = md.split('\n');
  let i = 0;
  const isBlank = (s) => !s.trim();
  const skipBlank = () => { while (i < lines.length && isBlank(lines[i])) i++; };
  skipBlank();
  if (i < lines.length && lines[i].trim() === 'ॐ') { i++; skipBlank(); }
  if (i < lines.length && /^\*[^*]+\*$/.test(lines[i].trim())) { i++; skipBlank(); }
  if (i < lines.length && /^#\s/.test(lines[i].trim())) { i++; skipBlank(); }
  if (i < lines.length && /^\*[^*]+\*$/.test(lines[i].trim())) { i++; skipBlank(); }
  return lines.slice(i).join('\n')
    .replace(/<figure class="plate">[\s\S]*?<\/figure>\s*/, '');
}

/** Mirrors MarkdownBook.tsx's breakSanskritQuotes: inside a Vedic Anchor
 * blockquote, the bold Sanskrit term gets its own line above the English
 * translation instead of sharing a line with it. */
function breakSanskritQuotes(md) {
  return md.split('\n').map(line => {
    if (!line.startsWith('>')) return line;
    return line
      .replace(/(\*\*[^*]*[ऀ-ॿ][^*]*\*\*),?\s*/g, '$1<br/>')
      .replace(/(\*\*[A-Z][^*]+\s[^*]+\s[^*]+\*\*),\s*/g, '$1<br/>');
  }).join('\n');
}

const ANCHOR_LABEL_RE = /^(Vedic Anchors?:|Constitutional Sources?:|Related( principles)?:|Unamendable under:|See also:)/;

/** Post-process the rendered HTML: classify the lone ॐ / closing mantra /
 * Anchors & Aids paragraphs (mirrors MarkdownBook.tsx's custom `p`
 * renderer), and repoint chapter cross-reference links at local #anchors
 * so they work inside one PDF instead of pointing at NN-slug.md files. */
function postProcessHtml(html, selfId) {
  return html.replace(/<p>([\s\S]*?)<\/p>/g, (whole, inner) => {
    const text = inner.replace(/<[^>]+>/g, '').trim();
    if (text === 'ॐ') return `<p class="pdf-om">ॐ</p>`;
    if (/^ॐ\s.+\sॐ$/.test(text)) return `<p class="pdf-mantra">${inner}</p>`;
    if (ANCHOR_LABEL_RE.test(text)) return `<p class="pdf-anchor-line">${inner}</p>`;
    return whole;
  }).replace(/<a href="(?:\.\/)?([a-z0-9-]+\.md)(#[^"]*)?">/g, (m, file) => {
    const id = filenameKeyToId.get(file);
    return id ? `<a href="#${id}">` : m;
  });
}

function partLabel(part) {
  if (part.group === 'principles' && part.roman) return `Principle ${part.roman}`;
  return part.title;
}

// ---------- 3. Build each chapter's HTML block ----------
function renderChapter(part) {
  const mdPath = path.join(CONTENT_DIR, part.filename);
  const raw = fs.readFileSync(mdPath, 'utf8');
  const stripped = breakSanskritQuotes(stripFrontMatter(raw));
  const bodyHtml = String(processor.processSync(stripped));
  const finalHtml = postProcessHtml(bodyHtml, part.id);

  const plate = part.image ? (() => {
    // Print-optimized copy (1000px/JPEG q75 via sips) — the site's source
    // PNGs are multi-megabyte originals meant for retina screens, which
    // would balloon this PDF past 90MB once Chrome embeds 28 of them.
    const slug = path.basename(part.image, '.png');
    const printImg = path.join(__dirname, 'plates', `${slug}.jpg`);
    return `
    <figure class="chapter-plate">
      <img src="${printImg}" alt="${escapeAttr(part.story || part.title)}">
      ${part.story ? `<figcaption>${escapeHtml(part.story)}</figcaption>` : ''}
    </figure>`;
  })() : '';

  return `
  <section class="chapter" id="${part.id}">
    <div class="chapter-head">
      <div class="chapter-eyebrow">${escapeHtml(part.ordinal || GROUP_TITLES[part.group])}</div>
      <h1 class="chapter-title">${escapeHtml(part.title)}</h1>
      ${part.subtitle ? `<div class="chapter-subtitle">${escapeHtml(part.subtitle)}</div>` : ''}
    </div>
    ${plate}
    <div class="chapter-body">
      ${finalHtml}
    </div>
  </section>`;
}

function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function escapeAttr(s) {
  return escapeHtml(s).replace(/"/g, '&quot;');
}

// ---------- 4. Cover + Table of Contents ----------
const coverHtml = `
  <section class="cover">
    <div class="cover-frame"></div>
    <div class="cover-om">ॐ</div>
    <div class="cover-series">The AGI Constitution<em>Dharma Sanhita</em></div>
    <div class="cover-center">
      <h1 class="cover-title">The AGI<br>Constitution</h1>
      <div class="cover-dev">धर्म संहिता</div>
      <p class="cover-lede">A framework for the governing of Artificial General Intelligence, grounded in the Vedic and dharmic traditions and the constitutional inheritance of the modern world.</p>
    </div>
    <div class="cover-bottom">
      <div><strong>Sunil Iyer</strong>Dharma Sanhita &middot; 2026</div>
      <div class="cover-seal">ॐ</div>
    </div>
  </section>`;

const GROUP_ORDER = ['opening', 'principles', 'machinery', 'safeguards', 'aids', 'closing'];
const tocGroups = GROUP_ORDER.map(group => {
  const items = constitutionParts.filter(p => p.group === group);
  const rows = items.map(p => `
      <li><a href="#${p.id}">${p.roman ? `<span class="toc-roman">${p.roman}.</span> ` : ''}${escapeHtml(p.title)}</a></li>`).join('');
  return `
    <div class="toc-group">
      <div class="toc-group-title">${GROUP_TITLES[group]}</div>
      <ol class="toc-list">${rows}</ol>
    </div>`;
}).join('');

const tocHtml = `
  <section class="toc-page">
    <h2 class="toc-heading">Contents</h2>
    ${tocGroups}
  </section>`;

// ---------- 5. Assemble the document ----------
const chaptersHtml = constitutionParts.map(renderChapter).join('\n');
const css = fs.readFileSync(path.join(__dirname, 'book.css'), 'utf8');
const localFontsCss = fs.readFileSync(path.join(__dirname, 'local-fonts.css'), 'utf8');

const doc = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>The AGI Constitution: Dharma Sanhita</title>
<style>
${localFontsCss}
${css}
</style>
</head>
<body>
${coverHtml}
${tocHtml}
${chaptersHtml}
</body>
</html>`;

fs.writeFileSync(OUT_HTML, doc);
console.log(`Wrote ${OUT_HTML} (${(doc.length / 1024).toFixed(0)} KB)`);

// ---------- 6. Print to PDF via headless Chrome ----------
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
fs.mkdirSync(path.dirname(OUT_PDF), { recursive: true });

execFileSync(CHROME, [
  '--headless',
  '--disable-gpu',
  '--no-pdf-header-footer',
  `--print-to-pdf=${OUT_PDF}`,
  '--print-to-pdf-no-header',
  '--no-sandbox',
  '--virtual-time-budget=30000',
  `file://${OUT_HTML}`,
], { stdio: 'inherit', timeout: 120000 });

const stat = fs.statSync(OUT_PDF);
console.log(`Wrote ${OUT_PDF} (${(stat.size / 1024 / 1024).toFixed(1)} MB)`);
