"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "./theme";

// Scroll-scrubbed film. Robust seeking: coalesced seeks chained on the
// 'seeked' event (never stacking seeks), gesture priming (muted play/pause on
// first interaction unlocks seeking on strict browsers), full preload kick.
export function ScrollFilm({ onProgress }: { onProgress?: (p: number) => void }) {
  const { theme } = useTheme();
  const vidRef = useRef<HTMLVideoElement>(null);
  const [loading, setLoading] = useState(true);
  // Host fix: the package read window.innerWidth during render, which made
  // the SSR markup (always desktop) disagree with the client on phones. React
  // logged a hydration mismatch and the browser fetched BOTH the desktop and
  // the mobile clip. Resolve it after mount instead, and track the breakpoint
  // so orientation changes swap the variant.
  const [mobile, setMobile] = useState(false);
  // Theme (dark until localStorage/media query is read) and viewport both
  // settle in the first post-mount render. Withhold data-clip until then, or
  // the first paint starts fetching the desktop-dark clip and a light-mode
  // phone pays for two ~15 MB downloads instead of one.
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const sync = () => setMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  useEffect(() => {
    const v = vidRef.current;
    if (!v) return;
    setLoading(true);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setLoading(false); return; }
    const failSafe = window.setTimeout(() => setLoading(false), 10000);
    const onReady = () => { window.clearTimeout(failSafe); setLoading(false); };
    v.addEventListener("canplaythrough", onReady);
    let seeking = false;
    let pending: number | null = null;
    let target = 0;
    let current = 0;
    let raf = 0;
    let primed = false;
    const doSeek = (t: number) => {
      if (!Number.isFinite(t)) return;
      if (seeking) { pending = t; return; }
      seeking = true;
      try { v.currentTime = t; } catch { seeking = false; }
    };
    const onSeeked = () => {
      seeking = false;
      if (pending !== null) { const t = pending; pending = null; doSeek(t); }
    };
    const tick = () => {
      raf = 0;
      current += (target - current) * 0.18;
      if (Math.abs(target - current) > 0.0004) raf = requestAnimationFrame(tick);
      else current = target;
      const d = v.duration;
      if (Number.isFinite(d) && d > 0) doSeek(current * (d - 0.08));
    };
    const onScroll = () => {
      prime();
      const doc = document.documentElement;
      const max = (doc.scrollHeight - window.innerHeight) || 1;
      target = Math.min(1, Math.max(0, window.scrollY / max));
      if (onProgress) onProgress(target);
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const prime = () => {
      if (primed) return;
      primed = true;
      const p = v.play();
      if (p) p.then(() => v.pause()).catch(() => { primed = false; });
    };
    v.addEventListener("seeked", onSeeked);
    v.addEventListener("loadedmetadata", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("touchstart", prime, { passive: true, once: true });
    window.addEventListener("pointerdown", prime, { passive: true, once: true });
    // Blob-backed playback: static hosting here lacks byte-range support, so a
    // streamed <video src> is unseekable (seekable = [0,0]). Fetch the whole
    // clip and play from memory: fully seekable, smooth reverse scrub.
    let objUrl: string | null = null;
    const clip = v.getAttribute("data-clip");
    if (clip) {
      fetch(clip)
        .then((r) => (r.ok ? r.blob() : Promise.reject(new Error(String(r.status)))))
        .then((blob) => {
          objUrl = URL.createObjectURL(blob);
          v.src = objUrl;
          try { v.load(); } catch { /* ok */ }
        })
        .catch(() => { v.src = clip; setLoading(false); });
    }
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("touchstart", prime);
      window.removeEventListener("pointerdown", prime);
      v.removeEventListener("canplaythrough", onReady);
      window.clearTimeout(failSafe);
      v.removeEventListener("seeked", onSeeked);
      v.removeEventListener("loadedmetadata", onScroll);
      if (raf) cancelAnimationFrame(raf);
      if (objUrl) URL.revokeObjectURL(objUrl);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, mobile, mounted]);
  const suffix = mobile ? "-mobile" : "";
  const base = theme === "light" ? "evolution-light" : "evolution";
  return (
    <>
    <div className="evo-film" aria-hidden="true">
      <video
        key={base + suffix}
        ref={vidRef}
        muted
        playsInline
        preload="auto"
        data-clip={mounted ? `/assets/film/${base}-scrub${suffix}.mp4` : undefined}
        poster={mounted ? `/assets/film/${base}-poster${suffix}.jpg` : undefined}
      />
      <span className="film-scrim"></span>
    </div>
    <div className={loading ? "film-loader" : "film-loader off"} aria-hidden={!loading} role="status">
      <span className="fl-mark">si<i>.</i></span>
      <span className="fl-bar"><i></i></span>
      <span className="fl-text">Preparing the descent</span>
    </div>
    </>
  );
}
