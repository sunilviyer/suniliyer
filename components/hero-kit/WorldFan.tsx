'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

// In-card adaptation of components/ui/card-fan-carousel.tsx: the same fan
// geometry and elastic hover physics, but opened/closed by the parent world
// card instead of paginated. Links render on the server for crawlability.

export interface FanItem {
  imgUrl: string;
  label: string;
  desc?: string;
  href?: string;
  external?: boolean;
  /** when set, the card acts as a button (e.g. opens the Builds modal) */
  onSelect?: () => void;
}

interface WorldFanProps {
  items: FanItem[];
  open: boolean;
}

const SPREAD = 0.31; // horizontal half-spread as a fraction of card width
const LIFT = 26;

function slotConfig(i: number, n: number, w: number) {
  const half = (n - 1) / 2;
  const d = half ? (i - half) / half : 0; // -1..1, symmetric
  return {
    x: d * w * SPREAD,
    y: Math.abs(d) ** 2 * 30,
    rot: d * 13,
    scale: 1 - 0.1 * Math.abs(d),
    z: 10 - Math.round(Math.abs(d) * 3),
  };
}

export default function WorldFan({ items, open }: WorldFanProps) {
  const layerRef = useRef<HTMLDivElement>(null);
  const openRef = useRef(open);
  openRef.current = open;

  // open/close choreography
  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;
    const cards = Array.from(layer.querySelectorAll<HTMLElement>('.wfan-card'));
    if (!cards.length) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const w = layer.clientWidth;
    const n = cards.length;

    if (open) {
      layer.style.visibility = 'visible';
      cards.forEach((card, i) => {
        const c = slotConfig(i, n, w);
        if (reduced) {
          gsap.set(card, { xPercent: -50, yPercent: -50, x: c.x, y: c.y, rotation: c.rot, scale: c.scale, opacity: 1, zIndex: c.z });
          return;
        }
        gsap.set(card, { xPercent: -50, yPercent: -50, x: 0, y: 190, rotation: 0, scale: 0.45, opacity: 0, zIndex: c.z });
        gsap.to(card, {
          x: c.x, y: c.y, rotation: c.rot, scale: c.scale, opacity: 1,
          duration: 0.9, ease: 'elastic.out(1.05, 0.78)', delay: 0.04 + i * 0.055, overwrite: 'auto',
        });
      });
    } else {
      cards.forEach((card) => {
        gsap.to(card, {
          y: 190, opacity: 0, scale: 0.45, rotation: 0,
          duration: reduced ? 0 : 0.32, ease: 'power2.in', overwrite: 'auto',
          onComplete: () => {
            if (!openRef.current) layer.style.visibility = 'hidden';
          },
        });
      });
    }
  }, [open, items.length]);

  // hover: lift the hovered card, push neighbors aside;
  // re-spread when the host card resizes (hover expansion)
  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;
    const cards = Array.from(layer.querySelectorAll<HTMLElement>('.wfan-card'));
    if (!cards.length) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const relayout = (hovered: number | null) => {
      const w = layer.clientWidth;
      const n = cards.length;
      cards.forEach((card, i) => {
        const c = slotConfig(i, n, w);
        let { x, y, rot, scale } = c;
        if (hovered !== null && i !== hovered) {
          const dist = Math.abs(i - hovered);
          const push = 18 / dist;
          if (i < hovered) { x -= push; rot -= 2.5 / dist; }
          else { x += push; rot += 2.5 / dist; }
        } else if (hovered !== null) {
          y -= LIFT;
          scale *= 1.07;
        }
        gsap.to(card, { x, y, rotation: rot, scale, duration: 0.45, ease: 'elastic.out(1, 0.75)', overwrite: 'auto' });
      });
    };

    const handlers = cards.map((card, i) => {
      const enter = () => { if (openRef.current) relayout(i); };
      card.addEventListener('pointerenter', enter);
      return { card, enter };
    });
    const leave = () => { if (openRef.current) relayout(null); };
    layer.addEventListener('pointerleave', leave);

    // the host world card widens on hover; debounce, then re-spread the fan
    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    const ro = new ResizeObserver(() => {
      if (!openRef.current) return;
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => relayout(null), 90);
    });
    ro.observe(layer);

    return () => {
      handlers.forEach(({ card, enter }) => card.removeEventListener('pointerenter', enter));
      layer.removeEventListener('pointerleave', leave);
      ro.disconnect();
      if (resizeTimer) clearTimeout(resizeTimer);
    };
  }, [items.length]);

  return (
    <div className="wfan" ref={layerRef} style={{ visibility: 'hidden' }} aria-hidden={!open}>
      {items.map((it) => {
        const inner = (
          <>
            <img src={it.imgUrl} alt={it.label} loading="lazy" />
            <span className="fc-label">
              {it.label}
              {it.desc ? <small>{it.desc}</small> : null}
            </span>
          </>
        );
        return it.onSelect ? (
          <button
            key={it.label}
            type="button"
            className="wfan-card"
            tabIndex={open ? 0 : -1}
            onClick={it.onSelect}
          >
            {inner}
          </button>
        ) : (
          <a
            key={it.href}
            className="wfan-card"
            href={it.href}
            tabIndex={open ? 0 : -1}
            target={it.external ? '_blank' : undefined}
            rel={it.external ? 'noopener noreferrer' : undefined}
          >
            {inner}
          </a>
        );
      })}
    </div>
  );
}
