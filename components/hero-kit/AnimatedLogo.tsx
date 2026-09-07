'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';

type Phase = 'idle' | 'blink' | 'open';

// Timings from the Claude Design source (Animated Logo.dc.html).
const LEAD_MS = 600;      // rest before the first blink
const BLINK_MS = 1350;    // 3 blinks at 0.45s
const EXPAND_MS = 700;    // max-width transition
const HOLD_MS = 2200;     // full name held open
const GAP_MS = 3000;      // rest between loops

/**
 * The "SI." wordmark that blinks, expands to "Sunil Iyer.", holds, then
 * collapses. Ported from the Claude Design canvas.
 *
 * Two deliberate changes from that source:
 *  - It replays on hover, not on click. In the canvas the logo was a preview
 *    with a click-to-replay handler; here it is the nav's link home, so a
 *    click has to navigate.
 *  - The letters inherit colour instead of the design's hardcoded #e8e4dc,
 *    so the mark works in the site's light theme. Only the accent dot keeps
 *    its fixed gold.
 */
export default function AnimatedLogo({ loop = true }: { loop?: boolean }) {
  const [phase, setPhase] = useState<Phase>('idle');
  const timers = useRef<number[]>([]);
  const reduced = useRef(false);

  const clear = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  const start = useCallback(() => {
    if (reduced.current) return;
    clear();
    const at = (fn: () => void, ms: number) =>
      timers.current.push(window.setTimeout(fn, ms));
    setPhase('idle');
    at(() => setPhase('blink'), LEAD_MS);
    at(() => setPhase('open'), LEAD_MS + BLINK_MS);
    at(() => setPhase('idle'), LEAD_MS + BLINK_MS + EXPAND_MS + HOLD_MS);
    if (loop) {
      at(start, LEAD_MS + BLINK_MS + EXPAND_MS + HOLD_MS + EXPAND_MS + GAP_MS);
    }
  }, [clear, loop]);

  useEffect(() => {
    reduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduced.current) start();
    return clear;
  }, [start, clear]);

  // Hover restarts the cycle, but only from rest so it cannot stutter midway.
  const onEnter = () => { if (phase === 'idle') start(); };

  return (
    <Link
      className="brand brand-animated"
      href="/"
      data-tip="Home"
      aria-label="Sunil Iyer — home"
      data-phase={phase}
      onMouseEnter={onEnter}
    >
      <span aria-hidden="true" className="bl-fixed">S</span>
      <span aria-hidden="true" className="bl-grow">unil&nbsp;</span>
      <span aria-hidden="true" className="bl-fixed">I</span>
      <span aria-hidden="true" className="bl-grow">yer</span>
      <span aria-hidden="true" className="bl-dot">.</span>
    </Link>
  );
}
