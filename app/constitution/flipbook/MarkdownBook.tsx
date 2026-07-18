'use client';

/**
 * Generated flipbook for a Dharma Sanhita article. The markdown is laid
 * out ONCE as a CSS multi-column flow at page size (528×662 columns,
 * 112px gutters, 640px stride) inside an offscreen measurer; the column
 * count gives the page count, and each book face shows a translated
 * window into the same flow.
 *
 * Article template handling (per the author's install instructions):
 *  - the opening ॐ, ordinal line, H1 title and descriptor line are
 *    stripped from the flow; the book cover presents them instead
 *  - the Madhubani plate <figure class="plate"> opens the article
 *  - lone ॐ lines and the closing "ॐ ... ॐ" mantra render centered, gold
 *  - "Vedic Anchor / Constitutional Sources / Related" lines render as
 *    the Anchors and Aids block (gold left border)
 *  - links to NN-slug.md files resolve to /constitution/<slug> routes
 */

import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Flipbook, { type PartNavLink } from './Flipbook';
import type { FaceComponent } from './pages-part1';
import type { ConstitutionPart } from '../data/reading-order';
import { partLabel, pillLabel } from './labels';

const PAGE_STRIDE = 640; // column width 528 + gap 112
const COLUMN_GAP = 112;

/** Cover gradients per group, all in the molten-lava family */
const COVER_GRADIENTS: Record<ConstitutionPart['group'], string> = {
  opening: 'linear-gradient(135deg, #5C280A 0%, #2A1408 100%)',
  principles: 'linear-gradient(135deg, #8E3E0A 0%, #5C280A 100%)',
  machinery: 'linear-gradient(135deg, #6B2810 0%, #3A1508 100%)',
  safeguards: 'linear-gradient(135deg, #1A3A5C 0%, #0D1F33 100%)',
  aids: 'linear-gradient(135deg, #3A1508 0%, #1A0604 100%)',
  closing: 'linear-gradient(135deg, #2A1408 0%, #120A04 100%)',
};

/**
 * Strip the front matter the book presents on dedicated pages: the
 * opening ॐ, the ordinal line (principles), the H1, the descriptor or
 * anchor line directly after the H1, and the plate figure (the plate
 * gets a full page of its own so the story starts on a fresh page).
 */
function stripFrontMatter(md: string): string {
  const lines = md.split('\n');
  let i = 0;
  const isBlank = (s: string) => !s.trim();
  const skipBlank = () => { while (i < lines.length && isBlank(lines[i])) i++; };

  skipBlank();
  if (i < lines.length && lines[i].trim() === 'ॐ') { i++; skipBlank(); }
  if (i < lines.length && /^\*[^*]+\*$/.test(lines[i].trim()) ) { i++; skipBlank(); }   // ordinal
  if (i < lines.length && /^#\s/.test(lines[i].trim())) { i++; skipBlank(); }            // H1
  if (i < lines.length && /^\*[^*]+\*$/.test(lines[i].trim())) { i++; skipBlank(); }     // descriptor / anchor
  return lines.slice(i).join('\n')
    .replace(/<figure class="plate">[\s\S]*?<\/figure>\s*/, '');
}

/** map a canonical content link (NN-slug.md, optionally #anchor) to its route */
function hrefToRoute(href: string | undefined): string | null {
  if (!href) return null;
  const m = href.match(/^(?:\.\/)?\d\d-([a-z0-9-]+)\.md(?:#.*)?$/i);
  return m ? `/constitution/${m[1]}` : null;
}

const ANCHOR_LABELS = /^(Vedic Anchors?:|Constitutional Sources?:|Related( principles)?:|Unamendable under:|See also:)/;

interface MarkdownBookProps {
  part: ConstitutionPart;
  prev: ConstitutionPart | null;
  next: ConstitutionPart | null;
  markdown: string;
}

export default function MarkdownBook({ part, prev, next, markdown }: MarkdownBookProps) {
  const [pages, setPages] = useState<number | null>(null);
  const measureRef = useRef<HTMLDivElement>(null);

  const md = useMemo(() => stripFrontMatter(markdown), [markdown]);

  const flow = useMemo(() => (
    <div className="bpg-flow">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          img(props) {
            // content refers to images/AGIMadhubani/… ; assets are served
            // from /images/AGIMadhubani/…
            const src = typeof props.src === 'string' && props.src.startsWith('images/')
              ? `/${props.src}` : props.src;
            // eslint-disable-next-line @next/next/no-img-element
            return <img {...props} src={src} alt={props.alt || ''} />;
          },
          a({ href, children }) {
            const route = hrefToRoute(href);
            if (route) return <Link href={route}>{children}</Link>;
            return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
          },
          p({ children }) {
            // lone ॐ and the closing "ॐ … ॐ" mantra
            const raw = React.Children.toArray(children).map(c => (typeof c === 'string' ? c : '')).join('').trim();
            if (raw === 'ॐ') return <p className="bpg-om">ॐ</p>;
            if (/^ॐ\s.+\sॐ$/.test(raw)) return <p className="bpg-mantra">{children}</p>;
            // Anchors and Aids label lines: *Vedic Anchor:* …
            const first = React.Children.toArray(children)[0] as React.ReactElement<{ children?: React.ReactNode }> | string | undefined;
            if (first && typeof first !== 'string' && first.props?.children) {
              const emText = React.Children.toArray(first.props.children).map(c => (typeof c === 'string' ? c : '')).join('');
              if (ANCHOR_LABELS.test(emText.trim())) {
                return <p className="bpg-anchor-line">{children}</p>;
              }
            }
            return <p>{children}</p>;
          },
        }}
      >
        {md}
      </ReactMarkdown>
    </div>
  ), [md]);

  const measure = useCallback(() => {
    const el = measureRef.current;
    if (!el) return;
    const p = Math.max(1, Math.round((el.scrollWidth + COLUMN_GAP) / PAGE_STRIDE));
    setPages(p);
  }, []);

  useEffect(() => {
    measure();
    let cancelled = false;
    if (typeof document !== 'undefined' && document.fonts?.ready) {
      document.fonts.ready.then(() => { if (!cancelled) measure(); });
    }
    // plates load async and can nudge the flow; remeasure when images land
    const el = measureRef.current;
    const imgs = el ? Array.from(el.querySelectorAll('img')) : [];
    const onImg = () => measure();
    imgs.forEach(img => { if (!img.complete) img.addEventListener('load', onImg); });
    const mq = window.matchMedia('(max-width: 768px)');
    const onBreakpoint = () => measure();
    mq.addEventListener('change', onBreakpoint);
    return () => {
      cancelled = true;
      imgs.forEach(img => img.removeEventListener('load', onImg));
      mq.removeEventListener('change', onBreakpoint);
    };
  }, [measure]);

  const label = partLabel(part);

  const faces = useMemo<Array<FaceComponent | null> | null>(() => {
    if (pages === null) return null;

    const CoverFace: FaceComponent = () => (
      <div className="bp-cover" style={{ background: COVER_GRADIENTS[part.group] }}>
        <div className="bp-cover-frame" />
        <div className="bp-cover-om">ॐ</div>
        <div className="bp-cover-top">
          <div className="bp-cover-series">The AGI Constitution<em>Dharma Sanhita</em></div>
        </div>
        <div className="bp-cover-center">
          <div className="bp-cover-part">
            {part.ordinal || label}
          </div>
          <h1 className="bp-cover-title" style={part.title.length > 20 ? { fontSize: 56 } : undefined}>
            {part.title}
            {part.subtitle ? <em>{part.subtitle}</em> : null}
          </h1>
          <div className="bp-cover-dev">धर्म संहिता</div>
        </div>
        <div className="bp-cover-bottom">
          <div>
            <strong>Sunil Iyer</strong>
            Dharma Sanhita
          </div>
          <div className="bp-cover-seal">ॐ</div>
        </div>
      </div>
    );

    const arr: Array<FaceComponent | null> = [CoverFace];

    // The plate takes a full page of its own, facing the first page of
    // the story (inside of the cover leaf = left page of spread 1).
    if (part.image) {
      const PlateFace: FaceComponent = () => (
        <div className="bpp-plate">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={part.image} alt={part.story || part.title} />
          <div className="bpp-plate-cap">{part.story || part.title}</div>
        </div>
      );
      arr.push(PlateFace);
    }

    for (let i = 0; i < pages; i++) {
      const side = arr.length % 2 === 1 ? 'left' : 'right';
      const PageFace: FaceComponent = () => (
        <div className="bpg-page">
          <div className="bp-runhead">
            <span>{part.title}</span>
            <span className="dev">॥</span>
          </div>
          <div className="bpg-window">
            <div style={{ transform: `translateX(${-i * PAGE_STRIDE}px)` }}>
              {flow}
            </div>
          </div>
          <div className={`bp-folio ${side}`}><span>p.</span><span className="num">{i + 1}</span></div>
        </div>
      );
      arr.push(PageFace);
    }

    const EndFace: FaceComponent = () => (
      <Link href={next ? `/constitution/${next.id}` : '/constitution'} className="bp-halftitle" style={{ display: 'flex' }}>
        <div className="ht-om">ॐ</div>
        <div className="ht-part">End of {label}</div>
        <div className="ht-title">{next ? `Continue: ${next.title}` : 'Return to the Overview'}</div>
        <div className="ht-dev">॥ ॐ ॥</div>
        <div className="ht-rule" />
        <div className="ht-sub">{next ? (next.subtitle || next.title) : 'The AGI Constitution · Dharma Sanhita'}</div>
      </Link>
    );

    if (arr.length % 2 === 0) arr.push(null);
    arr.push(EndFace);
    return arr;
  }, [pages, part, next, label, flow]);

  const prevLink: PartNavLink | null = prev ? { href: `/constitution/${prev.id}`, label: pillLabel(prev), title: prev.title } : null;
  const nextLink: PartNavLink | null = next ? { href: `/constitution/${next.id}`, label: pillLabel(next), title: next.title } : null;

  return (
    <>
      {faces ? (
        <Flipbook
          faces={faces}
          title={part.title}
          subLabel={`Dharma Sanhita · ${part.ordinal || label}`}
          prev={prevLink}
          next={nextLink}
          virtualize
        />
      ) : (
        <div className="fb-app" />
      )}
      <div className="bpg-measure" ref={measureRef} aria-hidden="true">
        {flow}
      </div>
    </>
  );
}
