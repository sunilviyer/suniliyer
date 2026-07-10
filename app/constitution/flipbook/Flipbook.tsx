'use client';

import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import Link from 'next/link';
import type { FaceComponent } from './pages-part1';
import './flipbook.css';

/**
 * Dharma Sanhita — reusable leaf-based 3D flipbook engine.
 * Ported from the Claude Design handoff (Flipbook.html); one instance
 * renders one Part of the Constitution as a physical book.
 *
 * Desktop: two-page spread with a 3D leaf flip.
 * Mobile (≤768px): single-page pager at readable size — tap the page
 * (left third = back), swipe, or use the bottom bar.
 *
 * BOOK MODEL — leaf-based 3D flip
 * ─────────────────────────────────
 * A "leaf" is a physical sheet of paper. It has two faces:
 *   front = visible as the RIGHT page when the leaf hasn't been turned
 *   back  = visible as the LEFT  page after the leaf is turned
 *
 * Spread index s (0..N) means: leaves [0..s) are turned, leaves [s..N) are unturned.
 *   The visible spread shows:
 *      left  = leaves[s-1].back  (or empty if s==0)
 *      right = leaves[s].front   (or empty if s==N)
 *
 * Faces array order: [leaf0.front, leaf0.back, leaf1.front, leaf1.back, ...]
 *   → leaf k = (faces[2k], faces[2k+1])
 */

export interface PartNavLink {
  href: string;
  label: string;   // e.g. "Part II" / "Author's Note"
  title: string;   // e.g. "Preamble"
}

interface FlipbookProps {
  faces: Array<FaceComponent | null>;
  /** Chrome: book title (part title) and small label under it */
  title: string;
  subLabel: string;
  prev?: PartNavLink | null;
  next?: PartNavLink | null;
  /** localStorage key for remembering the reader's spread in this book */
  storageKey: string;
  /** Only mount face content for leaves near the current spread (big books) */
  virtualize?: boolean;
}

type Flipping = { leaf: number; dir: 'next' | 'prev' } | null;

const FLIP_MS = 920;

export default function Flipbook({ faces, title, subLabel, prev, next, storageKey, virtualize = false }: FlipbookProps) {
  const [spread, setSpread] = useState(0);
  const [face, setFace] = useState(0); // mobile pager position (index into faces)
  const [flipping, setFlipping] = useState<Flipping>(null);
  const [scale, setScale] = useState(1);
  const [mScale, setMScale] = useState(1);
  const [hydrated, setHydrated] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);

  const leaves = useMemo(() => {
    const out: Array<{ front: FaceComponent | null; back: FaceComponent | null }> = [];
    for (let k = 0; k * 2 < faces.length; k++) {
      out.push({ front: faces[2 * k], back: faces[2 * k + 1] ?? null });
    }
    return out;
  }, [faces]);

  const totalSpreads = leaves.length + 1;
  const totalFaces = faces.length;

  // Mobile breakpoint (matches the CSS chrome breakpoint)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // Restore position from localStorage after mount (SSR-safe).
  useEffect(() => {
    const sp = parseInt(localStorage.getItem(storageKey) || '0', 10) || 0;
    const clamped = Math.min(sp, totalSpreads - 1);
    setSpread(clamped);
    setFace(Math.min(clamped * 2, totalFaces - 1));
    setHydrated(true);
    // Only on mount / book identity change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey]);

  // Recompute scale to fit the stage: full spread (1280×780) on desktop,
  // one page (640×780) on mobile.
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const recalc = () => {
      const rect = el.getBoundingClientRect();
      const availW = Math.max(320, rect.width - 160);
      const availH = Math.max(240, rect.height - 60);
      setScale(Math.min(availW / 1280, availH / 780, 1));
      setMScale(Math.min((rect.width - 20) / 640, (rect.height - 16) / 780, 1));
    };
    recalc();
    const ro = new ResizeObserver(recalc);
    ro.observe(el);
    window.addEventListener('resize', recalc);
    return () => { ro.disconnect(); window.removeEventListener('resize', recalc); };
  }, [isMobile]);

  const canGoPrev = spread > 0;
  const canGoNext = spread < totalSpreads - 1;

  const flippingRef = useRef(false);
  const flipTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Cancel any in-progress flip (jump paths must not let the pending
  // completion timeout fire later and skew the spread by one).
  const cancelFlip = useCallback(() => {
    if (flipTimer.current) { clearTimeout(flipTimer.current); flipTimer.current = null; }
    flippingRef.current = false;
    setFlipping(null);
  }, []);

  const jumpTo = useCallback((leafIndex: number) => {
    // Show that leaf's front on the right side of the spread.
    cancelFlip();
    setSpread(leafIndex);
    setFace(Math.min(leafIndex * 2, totalFaces - 1));
  }, [cancelFlip, totalFaces]);

  // Guard via ref, and keep the setTimeout OUTSIDE any state updater —
  // React StrictMode double-invokes updaters, which would schedule the
  // completion twice and skip a spread.
  const flip = useCallback((dir: 'next' | 'prev') => {
    if (flippingRef.current) return;
    if (dir === 'next' && spread >= totalSpreads - 1) return;
    if (dir === 'prev' && spread <= 0) return;
    const leafIdx = dir === 'next' ? spread : spread - 1;
    flippingRef.current = true;
    setFlipping({ leaf: leafIdx, dir });
    flipTimer.current = setTimeout(() => {
      flipTimer.current = null;
      setSpread(s => dir === 'next' ? s + 1 : s - 1);
      setFlipping(null);
      flippingRef.current = false;
    }, FLIP_MS);
  }, [spread, totalSpreads]);

  // Mobile pager navigation — one face at a time, skipping blank pad faces.
  const navFace = useCallback((dir: 1 | -1) => {
    setFace(f => {
      let n = f + dir;
      while (n > 0 && n < totalFaces - 1 && faces[n] === null) n += dir;
      n = Math.max(0, Math.min(totalFaces - 1, n));
      return faces[n] === null ? f : n;
    });
  }, [faces, totalFaces]);

  // Keep the two positions in sync so switching between phone/desktop
  // (or rotating a tablet) stays on the same page. face f is shown by
  // spread ceil(f/2).
  useEffect(() => {
    if (!hydrated) return;
    if (isMobile) setSpread(Math.ceil(face / 2));
  }, [face, isMobile, hydrated]);

  // persist (only after the initial restore, so defaults don't clobber
  // a saved position on mount)
  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(storageKey, String(spread));
  }, [spread, storageKey, hydrated]);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) return;
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        if (isMobile) navFace(1); else flip('next');
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (isMobile) navFace(-1); else flip('prev');
      } else if (e.key === 'Home') {
        cancelFlip(); setSpread(0); setFace(0);
      } else if (e.key === 'End') {
        cancelFlip(); setSpread(totalSpreads - 1); setFace(totalFaces - 1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [flip, navFace, cancelFlip, totalSpreads, totalFaces, isMobile]);

  // For each leaf: isFlipped + stacking. Inside a preserve-3d context paint
  // order follows 3D depth, not z-index, so translateZ depth mirrors the z
  // stacking exactly: within the right (unflipped) stack the next-to-flip
  // leaf is nearest the viewer; within the left (flipped) stack the
  // most-recently-turned leaf is nearest; the actively flipping leaf rides
  // above both stacks.
  const renderLeaf = (leaf: { front: FaceComponent | null; back: FaceComponent | null }, k: number) => {
    const N = leaves.length;
    const restingFlipped = k < spread;
    let isFlipped = restingFlipped;
    let z: number;
    if (flipping && flipping.leaf === k) {
      isFlipped = flipping.dir === 'next';
      z = N + 10; // always on top during flip
    } else {
      z = restingFlipped ? k + 1 : N - k;
    }

    // Virtualization: for big generated books only leaves near the visible
    // spread mount their (expensive) face content; far leaves stay blank
    // paper. The leaf divs themselves always render so stacking stays intact.
    const mountContent = !virtualize
      || Math.abs(k - spread) <= 2
      || (flipping !== null && flipping.leaf === k);

    const FrontComp = leaf.front;
    const BackComp = leaf.back;

    // Explicit rotate3d at both endpoints keeps the transition interpolating
    // between genuine 3D matrices (a 2D-collapsed endpoint kills the flip).
    // Resting tilt 0.1deg / flipped -180.1deg avoids the exact-0/180 collapse
    // and lets backface-visibility cull cleanly.
    const rotation = isFlipped ? '-180.1deg' : '0.1deg';
    const transform = `translateZ(${z * 0.5}px) rotate3d(0, 1, 0, ${rotation})`;

    // Click anywhere on the visible page to turn it (like a real book).
    // Only the two leaves showing the current spread take clicks; links,
    // buttons and the ToC keep their own behavior.
    const isVisibleRight = !flipping && k === spread;
    const isVisibleLeft = !flipping && k === spread - 1;
    const onPageClick = (isVisibleRight || isVisibleLeft) ? (e: React.MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest('a, button, .bp-toc li')) return;
      flip(isVisibleRight ? 'next' : 'prev');
    } : undefined;

    return (
      <div key={k}
           className={`fb-page side-r ${isFlipped ? 'is-flipped' : ''} ${flipping && flipping.leaf === k ? 'is-flipping' : ''} ${onPageClick ? 'is-clickable' : ''}`}
           style={{ zIndex: z, transform }}
           onClick={onPageClick}>
        <div className="fb-face fb-front edge-spine-r">
          {mountContent && FrontComp ? <FrontComp onJump={jumpTo} /> : null}
        </div>
        <div className="fb-face fb-back edge-spine-l">
          {mountContent && BackComp ? <BackComp onJump={jumpTo} /> : null}
        </div>
      </div>
    );
  };

  // Page-number indicator label
  const pageLabel = () => {
    if (spread === 0) return 'Cover';
    if (spread === totalSpreads - 1) return 'End';
    return 'pp. ' + (spread * 2 - 1).toString().padStart(2, '0') + '–' + (spread * 2).toString().padStart(2, '0');
  };

  const chrome = (
    <div className="fb-chrome">
      <div className="fb-brand">
        <Link href="/constitution" className="fb-om" title="Back to overview">ॐ</Link>
        <div>
          <div className="fb-title-a">{title}</div>
          <div className="fb-title-b">{subLabel}</div>
        </div>
      </div>
      <div className="fb-volumes">
        {prev ? (
          <Link href={prev.href} className="fb-vol-btn" title={prev.title}>← {prev.label}</Link>
        ) : (
          <Link href="/constitution" className="fb-vol-btn">← Overview</Link>
        )}
        {next ? (
          <Link href={next.href} className="fb-vol-btn is-next" title={next.title}>{next.label} →</Link>
        ) : (
          <Link href="/constitution" className="fb-vol-btn is-next">Overview →</Link>
        )}
      </div>
      <div className="fb-meta">
        <div className="fb-page-ind">
          <strong>{spread + 1}</strong>/ {totalSpreads}
        </div>
        <div>{pageLabel()}</div>
        <div>← → to turn</div>
      </div>
    </div>
  );

  // ——— Mobile: single readable page, no 3D ———
  if (isMobile) {
    const CurrentFace = faces[Math.min(face, totalFaces - 1)];
    const canPagePrev = face > 0;
    const canPageNext = face < totalFaces - 1;
    return (
      <div className="fb-app fb-is-mobile">
        {chrome}
        <div
          className="fbm-stage"
          ref={stageRef}
          onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            const start = touchX.current;
            touchX.current = null;
            if (start === null) return;
            const dx = e.changedTouches[0].clientX - start;
            if (Math.abs(dx) > 48) navFace(dx < 0 ? 1 : -1);
          }}
        >
          <div className="fbm-page-fit" style={{ width: 640 * mScale, height: 780 * mScale }}>
            <div
              key={face}
              className="fbm-page"
              style={{ transform: `scale(${mScale})` }}
              onClick={(e) => {
                const t = e.target as HTMLElement;
                if (t.closest('a, button, .bp-toc li')) return;
                const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                navFace(e.clientX - rect.left < rect.width * 0.33 ? -1 : 1);
              }}
            >
              {CurrentFace ? <CurrentFace onJump={(leaf) => setFace(Math.min(leaf * 2, totalFaces - 1))} /> : <div className="fbm-blank" />}
            </div>
          </div>
        </div>
        <div className="fbm-bar">
          <button onClick={() => navFace(-1)} disabled={!canPagePrev} aria-label="Previous page">‹</button>
          <div className="fbm-count">{face + 1} / {totalFaces}</div>
          <button onClick={() => navFace(1)} disabled={!canPageNext} aria-label="Next page">›</button>
        </div>
      </div>
    );
  }

  // ——— Desktop: 3D spread ———
  return (
    <div className="fb-app">
      {chrome}
      <div className="fb-stage" ref={stageRef}>
        <button className="fb-nav prev" onClick={() => flip('prev')} disabled={!canGoPrev || flipping !== null} aria-label="Previous spread">‹</button>
        <div className="fb-book-fit" style={{ '--fb-scale': scale } as React.CSSProperties}>
          <div className="fb-book">
            <div className="fb-pages">
              {leaves.map((leaf, k) => renderLeaf(leaf, k))}
            </div>
            <div className="fb-spine" />
            <button className="fb-corner prev"
                    onClick={() => flip('prev')}
                    aria-label="Previous spread"
                    style={{ visibility: (canGoPrev && !flipping) ? 'visible' : 'hidden' }} />
            <button className="fb-corner next"
                    onClick={() => flip('next')}
                    aria-label="Next spread"
                    style={{ visibility: (canGoNext && !flipping) ? 'visible' : 'hidden' }} />
          </div>
        </div>
        <button className="fb-nav next" onClick={() => flip('next')} disabled={!canGoNext || flipping !== null} aria-label="Next spread">›</button>

        <div className="fb-progress">
          {Array.from({ length: totalSpreads }).map((_, i) => (
            <div key={i}
                 className={`fb-dot ${i === spread ? 'is-current' : ''} ${i < spread ? 'is-visited' : ''}`}
                 onClick={() => { cancelFlip(); setSpread(i); }}
                 title={`Spread ${i + 1} of ${totalSpreads}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
