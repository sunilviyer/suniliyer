'use client';

import { useEffect, useRef } from 'react';
import { bindPointer, easePointer } from '@/lib/hero-kit/pointer';

/**
 * Torchlight page background (option 2a from the design doc):
 *  - cursor-tracked spotlight on the page layer (drives --lx/--ly on .kit-root)
 *  - rising embers on a fixed canvas that floats above the cards
 * Pure canvas + CSS; no WebGL. Reduced motion freezes the spotlight and
 * skips the ember loop entirely.
 */
export default function Torchlight({ intensity = 10 }) {
  const spotRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const spot = spotRef.current;
    const canvas = canvasRef.current;
    if (!spot || !canvas) return;
    const root = spot.closest('.kit-root') || document.documentElement;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (reducedMotion) {
      root.style.setProperty('--lx', '50%');
      root.style.setProperty('--ly', '26%');
      canvas.style.display = 'none';
      return;
    }

    const pt = bindPointer();
    const ctx = canvas.getContext('2d');
    const gain = intensity / 10;
    const R = Math.random;
    const embers = Array.from({ length: 170 }, () => ({
      x: R(),
      y: R(),
      s: 1.2 + R() * 3.0,
      v: 0.0002 + R() * 0.0008,
      sway: R() * 6.28,
      a: 0.25 + R() * 0.55,
    }));

    const resize = () => {
      const d = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (canvas.width !== w * d || canvas.height !== h * d) {
        canvas.width = w * d;
        canvas.height = h * d;
      }
      ctx.setTransform(d, 0, 0, d, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    let raf = null;
    let t = 0;
    const loop = (ts) => {
      raf = requestAnimationFrame(loop);
      t = ts;
      const p = easePointer();
      // pointer is -1..1; spotlight vars are viewport percentages
      const lx = (p.x + 1) * 50;
      const ly = (p.y + 1) * 50;
      root.style.setProperty('--lx', lx.toFixed(2) + '%');
      root.style.setProperty('--ly', ly.toFixed(2) + '%');

      const light = document.documentElement.dataset.theme === 'light';
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = light ? 'multiply' : 'lighter';
      for (const e of embers) {
        e.y -= e.v * (0.5 + gain);
        e.sway += 0.01;
        if (e.y < -0.02) {
          e.y = 1.02;
          e.x = Math.random();
        }
        const x = e.x * w + Math.sin(e.sway) * 14 + p.x * -20 * e.s;
        const y = e.y * h;
        const tw = 0.55 + 0.45 * Math.sin(t * 0.004 + e.sway * 3);
        ctx.beginPath();
        ctx.arc(x, y, e.s, 0, 6.28);
        ctx.fillStyle = light
          ? `rgba(190,70,10,${(e.a * tw * 0.5 * gain).toFixed(3)})`
          : `rgba(255,${140 + Math.floor(60 * tw)},60,${(e.a * tw * gain).toFixed(3)})`;
        ctx.fill();
      }
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', resize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [intensity]);

  return (
    <>
      <div className="torch-spot" ref={spotRef} aria-hidden="true" />
      <canvas className="torch-embers" ref={canvasRef} aria-hidden="true" />
    </>
  );
}
