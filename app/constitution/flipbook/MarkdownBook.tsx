'use client';

/**
 * Generated flipbook for the Parts that don't have bespoke designed spreads.
 * The part's markdown is laid out ONCE as a CSS multi-column flow at page
 * size (528×662 columns, 112px gutters → 640px stride) inside an offscreen
 * measurer; the column count gives the page count, and each book face shows
 * a translated window into the same flow.
 */

import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Flipbook, { type PartNavLink } from './Flipbook';
import type { FaceComponent } from './pages-part1';
import type { ConstitutionPart } from '../data/reading-order';
import { partLabel } from './labels';

const PAGE_STRIDE = 640; // column width 528 + gap 112
const COLUMN_GAP = 112;

/** Cover gradients per category, all in the molten-lava family */
const COVER_GRADIENTS: Record<ConstitutionPart['category'], string> = {
  'front-matter': 'linear-gradient(135deg, #5C280A 0%, #2A1408 100%)',
  'preface': 'linear-gradient(135deg, #1A3A5C 0%, #0D1F33 100%)',
  'constitution': 'linear-gradient(135deg, #8E3E0A 0%, #5C280A 100%)',
  'appendix': 'linear-gradient(135deg, #3A1508 0%, #1A0604 100%)',
};

/** Drop the first markdown H1 — the cover already announces the title. */
function stripLeadingHeading(md: string): string {
  return md.replace(/^(\s*ॐ\s*\n)?(\s*\*\*[^\n]*\*\*\s*\n)?\s*#\s+[^\n]+\n/, '');
}

interface MarkdownBookProps {
  part: ConstitutionPart;
  prev: ConstitutionPart | null;
  next: ConstitutionPart | null;
  markdown: string;
}

export default function MarkdownBook({ part, prev, next, markdown }: MarkdownBookProps) {
  const [pages, setPages] = useState<number | null>(null);
  const measureRef = useRef<HTMLDivElement>(null);

  const md = useMemo(() => stripLeadingHeading(markdown), [markdown]);

  const flow = useMemo(() => (
    <div className="bpg-flow">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {md}
      </ReactMarkdown>
    </div>
  ), [md]);

  const measure = useCallback(() => {
    const el = measureRef.current;
    if (!el) return;
    // Measurer is an overflow:hidden box of one page; the columns overflow
    // horizontally, so scrollWidth = ncols*528 + (ncols-1)*112.
    const p = Math.max(1, Math.round((el.scrollWidth + COLUMN_GAP) / PAGE_STRIDE));
    setPages(p);
  }, []);

  useEffect(() => {
    measure();
    // Web fonts change metrics — remeasure once they're in.
    let cancelled = false;
    if (typeof document !== 'undefined' && document.fonts?.ready) {
      document.fonts.ready.then(() => { if (!cancelled) measure(); });
    }
    // The mobile breakpoint changes .bpg-flow's type scale, which changes
    // the page count — remeasure when crossing it.
    const mq = window.matchMedia('(max-width: 768px)');
    const onBreakpoint = () => measure();
    mq.addEventListener('change', onBreakpoint);
    return () => { cancelled = true; mq.removeEventListener('change', onBreakpoint); };
  }, [measure]);

  const label = partLabel(part);

  const faces = useMemo<Array<FaceComponent | null> | null>(() => {
    if (pages === null) return null;

    const CoverFace: FaceComponent = () => (
      <div className="bp-cover" style={{ background: COVER_GRADIENTS[part.category] }}>
        <div className="bp-cover-frame" />
        <div className="bp-cover-om">ॐ</div>
        <div className="bp-cover-top">
          <div className="bp-cover-series">The AGI Constitution<em>Dharma Sanhita · {label}</em></div>
        </div>
        <div className="bp-cover-center">
          <div className="bp-cover-part">
            {part.category === 'constitution' ? `${label} · of XVIII` : label}
          </div>
          <h1 className="bp-cover-title" style={part.title.length > 20 ? { fontSize: 56 } : undefined}>
            {part.title}
            {part.subtitle ? <em>{part.subtitle}.</em> : null}
          </h1>
          <div className="bp-cover-dev">धर्म संहिता</div>
        </div>
        <div className="bp-cover-bottom">
          <div>
            <strong>Sunil Iyer</strong>
            Version 3.0 · March 2026
          </div>
          <div className="bp-cover-seal">ॐ</div>
        </div>
      </div>
    );

    const arr: Array<FaceComponent | null> = [CoverFace];

    for (let i = 0; i < pages; i++) {
      // faces[j]: odd j = leaf back = LEFT page, even j = leaf front = RIGHT.
      const side = arr.length % 2 === 1 ? 'left' : 'right';
      const PageFace: FaceComponent = () => (
        <div className="bpg-page">
          <div className="bp-runhead">
            <span>{label === part.title ? label : `${label} · ${part.title}`}</span>
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
        <div className="ht-title">{next ? `Continue in ${partLabel(next)}` : 'Return to the Overview'}</div>
        {next ? <div className="ht-dev">॥ ॐ ॥</div> : null}
        <div className="ht-rule" />
        <div className="ht-sub">{next ? `${next.title}${next.subtitle ? ` — ${next.subtitle}` : ''}` : 'The AGI Constitution · Dharma Sanhita'}</div>
      </Link>
    );

    // End page must land on an odd index (a LEFT page); pad with a blank
    // right page first if needed, then keep total face count even.
    if (arr.length % 2 === 0) arr.push(null);
    arr.push(EndFace);
    return arr;
  }, [pages, part, next, label, flow]);

  const prevLink: PartNavLink | null = prev ? { href: `/constitution/${prev.id}`, label: partLabel(prev), title: prev.title } : null;
  const nextLink: PartNavLink | null = next ? { href: `/constitution/${next.id}`, label: partLabel(next), title: next.title } : null;

  return (
    <>
      {faces ? (
        <Flipbook
          faces={faces}
          title={part.title}
          subLabel={`Dharma Sanhita · ${label}`}
          prev={prevLink}
          next={nextLink}
          storageKey={`fb-sp-${part.id}`}
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
