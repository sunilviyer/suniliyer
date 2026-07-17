'use client';

import { useEffect, useRef, useState } from 'react';

// Diya loop behind the hero copy. Desktop-only (phones never download it),
// theme-aware (dark/light variant follows the kit toggle), and quiet:
// pauses offscreen, skipped entirely under prefers-reduced-motion.
const SRC = {
  dark: '/videos/hero-diya-dark.webm',
  light: '/videos/hero-diya-light.webm',
};

export default function HeroVideo() {
  const [active, setActive] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [ready, setReady] = useState(false);
  const wrapRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 861px)');
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setActive(desktop.matches && !motion.matches);
    update();
    desktop.addEventListener('change', update);
    motion.addEventListener('change', update);

    const root = document.documentElement;
    const readTheme = () =>
      setTheme(root.dataset.theme === 'light' ? 'light' : 'dark');
    readTheme();
    const mo = new MutationObserver(readTheme);
    mo.observe(root, { attributes: true, attributeFilter: ['data-theme'] });

    return () => {
      desktop.removeEventListener('change', update);
      motion.removeEventListener('change', update);
      mo.disconnect();
    };
  }, []);

  // the video remounts per theme (key below); fade back in once it can play
  useEffect(() => {
    setReady(false);
  }, [theme]);

  useEffect(() => {
    if (!active) return;
    const wrap = wrapRef.current;
    const video = videoRef.current;
    if (!wrap || !video) return;

    let visible = true;
    const tryPlay = () => {
      if (visible && video.paused) video.play().catch(() => {});
    };
    const onCanPlay = () => {
      setReady(true);
      tryPlay();
    };
    video.addEventListener('canplay', onCanPlay);
    document.addEventListener('visibilitychange', tryPlay);
    if (video.readyState >= 3) onCanPlay();

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          visible = e.isIntersecting;
          if (visible) tryPlay();
          else video.pause();
        }),
      { threshold: 0 }
    );
    io.observe(wrap);

    return () => {
      video.removeEventListener('canplay', onCanPlay);
      document.removeEventListener('visibilitychange', tryPlay);
      io.disconnect();
    };
  }, [active, theme]);

  if (!active) return null;

  return (
    <div className="hero-vid" ref={wrapRef} aria-hidden="true">
      <video
        ref={videoRef}
        key={theme}
        className={ready ? 'on' : ''}
        src={SRC[theme]}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
    </div>
  );
}
