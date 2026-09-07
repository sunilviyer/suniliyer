"use client";

import { useEffect, useRef } from "react";
import { BIO, FOOTER, WORLDS, type Stage } from "./data";
import { EvoLink } from "./link";

// One stage per film chapter. The frosted-glass card sweeps in coverflow
// style, scroll-linked and reversible: tilted on edge and receded while
// off-centre, flat and full at centre, dissolving as the next stage arrives.
// The world word (Vidya / Leela) rides the opposite side of the stage.
export function StageSection({ stage, side }: { stage: Stage; side: "left" | "right" }) {
  const secRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const asideRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const sec = secRef.current, card = cardRef.current, aside = asideRef.current;
    if (!sec || !card) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dir = side === "left" ? 1 : -1;
    let raf = 0;
    const apply = () => {
      raf = 0;
      const r = sec.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const t = Math.max(-1.2, Math.min(1.2, (r.top + r.height / 2 - vh / 2) / vh));
      const a = Math.abs(t);
      if (reduced) {
        const op = Math.max(0, 1 - a * 1.4).toFixed(3);
        card.style.opacity = op; card.style.transform = "none";
        if (aside) { aside.style.opacity = op; aside.style.transform = "none"; }
        return;
      }
      const ramp = Math.pow(a, 0.6);
      const tilt = Math.min(58 * ramp, 80) * Math.sign(t) * dir;
      card.style.transform =
        `translateX(${(-dir * t * 34).toFixed(2)}vw) translateZ(${(-240 * ramp).toFixed(1)}px) rotateY(${tilt.toFixed(2)}deg)`;
      card.style.opacity = Math.max(0, 1 - a * 1.3).toFixed(3);
      if (aside) {
        aside.style.opacity = Math.max(0, 1 - a * 1.6).toFixed(3);
        aside.style.transform = `translateX(${(dir * t * 12).toFixed(2)}vw)`;
      }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(apply); };
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [side]);
  const world = WORLDS[stage.world];
  return (
    <section
      ref={secRef as { current: HTMLElement | null } as never}
      className={`stage stage-${side} evo-wrap`}
      id={stage.title.toLowerCase().replace(/[^a-z]+/g, "-")}
      aria-label={stage.title}
      data-screen-label={`${stage.num} ${stage.name}`}
    >
      <div className="stage-aside" ref={asideRef}>
        <span className="aside-word">{world.word}</span>
        <span className="aside-tag">{world.tag}</span>
      </div>
      <div className="stage-figure" ref={cardRef}>
        {/* The art illustrates the card, so it carries alt text rather than
            aria-hidden. The link takes an explicit label so its accessible
            name stays "Agents - agents and dashboards" instead of swallowing
            the image description and every line of card metadata. */}
        <EvoLink className="stage-card" href={stage.href} aria-label={`${stage.title} - ${stage.desc}`}>
          <span className="stage-art"><img src={stage.art} alt={stage.alt} loading="lazy" draggable={false} /></span>
          <span className="stage-meta">{stage.name} &middot; {stage.era}</span>
          <span className="stage-world">{world.word} &middot; {world.tag}</span>
          <b className="stage-title">{stage.title}</b>
          <span className="stage-desc">{stage.desc}</span>
          <span className="stage-go" aria-hidden="true">Explore &rarr;</span>
        </EvoLink>
      </div>
    </section>
  );
}

export function FilmCaption({ active, label }: { active: number; label: string }) {
  return (
    <p className="film-caption" aria-live="polite">
      <span key={active} className="fc-inner">{label}</span>
    </p>
  );
}

export function DepthGauge({ active }: { active: number }) {
  return (
    <div className="gauge" aria-hidden="true" data-active={active}>
      {Array.from({ length: 10 }, (_, i) => (
        <span key={i} className={i < active ? "notch on" : "notch"}></span>
      ))}
    </div>
  );
}

export function Footer() {
  const P = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <footer className="evo-footer" data-screen-label="10 LANGUAGE MODELS">
      <div className="foot-inner">
        <div className="foot-grid">
          <div className="foot-brand">
            <span className="foot-mark">si<i>.</i><b>SUNIL IYER</b></span>
            <p>{BIO}</p>
          </div>
          <div className="foot-cols">
            {FOOTER.map((col) => (
              <div key={col.head}>
                <h3>{col.head}</h3>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.label}><EvoLink href={l.href}>{l.label}</EvoLink></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="foot-base-row">
          <p className="foot-base">&copy; 2026 Sunil Iyer &middot; AI Governance &amp; Responsible AI</p>
          <p className="foot-join">
            <span>Join the Journey:</span>
            <a href="https://linkedin.com/in/sunilviyer" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <svg {...P} aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://github.com/sunilviyer" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
              <svg {...P} aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href="https://medium.com/@sunilviswanathaniyer" target="_blank" rel="noreferrer" aria-label="Medium" title="Medium">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="6.8" cy="12" r="4.8"/><ellipse cx="15.6" cy="12" rx="2.6" ry="4.6"/><ellipse cx="21" cy="12" rx="1" ry="4.2"/></svg>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
