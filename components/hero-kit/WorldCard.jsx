'use client';

import { useEffect, useRef } from 'react';
import { Words } from './Kinetic';
import WorldFan from './WorldFan';
import { useReveal } from '@/lib/hero-kit/useReveal';
import { bindPointer, easePointer } from '@/lib/hero-kit/pointer';

const TINTS = {
  ember: ['rgba(242,163,60,', 'rgba(255,77,0,'],
  magma: ['rgba(255,61,90,', 'rgba(255,77,0,'],
};

/**
 * props:
 *  - accent: 'vidya' | 'leela'        (CSS class carrying --accent)
 *  - tint:   'ember' | 'magma'        (dust color family)
 *  - videoSrc: '/videos/vidya-3d.webm'
 *  - videoY:  vertical anchor of the footage in % (default -41; more
 *             negative raises the video so more of the top is cropped)
 *  - videoScale: zoom on the footage (default 1.2); raise together with a
 *             deeper videoY to crop faces at every frame while still
 *             covering the card
 *  - tag, title, devanagari, lede: strings
 *  - fanItems: [{ imgUrl, label, desc, href }] — revealed on hover
 *  - open / onOpen / onClose: fan state, owned by the page so hovering
 *    one world auto-closes the other
 *  - dimmed: true while the sibling card is expanded; frosts this card
 */
export default function WorldCard({
  accent,
  tint = 'ember',
  videoSrc,
  videoY = -41,
  videoScale = 1.2,
  tag,
  title,
  devanagari,
  lede,
  fanItems = [],
  open = false,
  onOpen,
  onClose,
  dimmed = false,
}) {
  const [sectionRef, revealClasses] = useReveal();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // hover opens on mouse; touch has no hover, so a tap toggles instead
  // (on phones pointerenter/leave both fire within a single tap)
  const handlePointerEnter = (e) => {
    if (e.pointerType === 'touch') return;
    onOpen?.();
  };
  const handlePointerLeave = (e) => {
    if (e.pointerType === 'touch') return;
    onClose?.();
  };
  const handleClick = (e) => {
    if (e.target.closest?.('.wfan-card')) return; // fan links navigate
    const touchLike =
      e.nativeEvent?.pointerType === 'touch' ||
      window.matchMedia('(hover: none)').matches;
    if (!touchLike) return;
    if (open) onClose?.();
    else onOpen?.();
  };
  // keep the fan open while focus moves between elements inside the card
  const handleBlur = (e) => {
    if (e.currentTarget.contains(e.relatedTarget)) return;
    onClose?.();
  };

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!section || !video || !canvas) return;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const pt = bindPointer();
    const ctx = canvas.getContext('2d');
    const colors = TINTS[tint] || TINTS.ember;

    // dust particles in 3 depth bands; deeper bands shift less = parallax
    const N = 90;
    const parts = [];
    for (let i = 0; i < N; i++) {
      const band = i % 3;
      parts.push({
        x: Math.random(),
        y: Math.random(),
        r: [2.2, 1.4, 0.8][band] * (0.7 + Math.random() * 0.6),
        vy: [0.00045, 0.0003, 0.00018][band] * (0.6 + Math.random() * 0.8),
        drift: Math.random() * Math.PI * 2,
        band,
        a: [0.5, 0.38, 0.25][band] * (0.6 + Math.random() * 0.7),
        c: colors[Math.random() > 0.75 ? 1 : 0],
      });
    }

    const resize = () => {
      canvas.width = section.clientWidth;
      canvas.height = section.clientHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let visible = false;
    let raf = null;
    let t = 0;

    const loop = () => {
      if (!visible) {
        raf = null;
        return;
      }
      raf = requestAnimationFrame(loop);
      if (reducedMotion) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        raf = null;
        return;
      }
      t += 0.016;
      easePointer();

      // video layer: scale 1.2 + the videoY anchor clips unwanted footage
      // (faces) away; 20% bleed absorbs the parallax shift
      video.style.transform = `translate(calc(-50% + ${pt.x * -16}px), calc(${videoY}% + ${
        pt.y * -8
      }px)) scale(${videoScale})`;

      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      const shift = [30, 17, 8];
      parts.forEach((p) => {
        p.y -= p.vy;
        if (p.y < -0.05) p.y = 1.05;
        const wob = Math.sin(t * 0.7 + p.drift) * 0.012;
        const px = (p.x + wob) * w + pt.x * shift[p.band];
        const py = p.y * h + pt.y * shift[p.band] * 0.6;
        const tw = 0.75 + Math.sin(t * 2 + p.drift * 3) * 0.25;
        ctx.beginPath();
        ctx.arc(px, py, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c + p.a * tw + ')';
        ctx.fill();
      });
    };

    const vio = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          visible = e.isIntersecting;
          if (visible) {
            video.play().catch(() => {});
            if (!raf) loop();
          } else {
            video.pause();
          }
        }),
      { threshold: 0 }
    );
    vio.observe(section);

    return () => {
      vio.disconnect();
      window.removeEventListener('resize', resize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [tint, videoY, videoScale]);

  return (
    <section
      className={`card world ${accent} ${revealClasses} ${open ? 'fan-open' : ''} ${dimmed ? 'dimmed' : ''}`}
      ref={sectionRef}
      tabIndex={0}
      aria-label={`${title} — hover, tap, or focus to reveal destinations`}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onClick={handleClick}
      onFocusCapture={onOpen}
      onBlurCapture={handleBlur}
    >
      <div className="vlayer">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          src={videoSrc}
          style={{ '--vy': `${videoY}%`, '--vscale': videoScale }}
        />
      </div>
      <canvas className="dust" ref={canvasRef} />
      <div className="rim" aria-hidden="true" />
      <span className="tap-hint" aria-hidden="true">
        <span className="tap-dot" />
        Tap to explore
      </span>
      <WorldFan items={fanItems} open={open} />
      <div className="world-inner">
        <p className="tag">
          <Words text={tag} />
        </p>
        <h2>
          <Words text={title} />
          <span className="devanagari">{devanagari}</span>
        </h2>
        <p className="lede">
          <Words text={lede} startIndex={4} />
        </p>
      </div>
      <div className="glass" aria-hidden="true" />
    </section>
  );
}
