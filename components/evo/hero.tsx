"use client";

import React, { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { EvoLink } from "./link";
import { sendContact } from "../../lib/api/contact.functions";
import { ThemeToggle } from "./theme";
import { LINKEDIN } from "./data";

const IC = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export function Nav() {
  const [open, setOpen] = useState(false);
  const [contact, setContact] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  // Host fix: /api/contact rejects with a specific reason (bad address,
  // too-short message, rate limited). The package discarded it and always
  // showed "Could not send", which dead-ends a visitor who simply typo'd
  // their email. Show the server's reason when there is one.
  const [errMsg, setErrMsg] = useState<string | null>(null);
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    setErrMsg(null);
    setStatus("sending");
    try {
      const r = await sendContact({ data: {
        name: String(f.get("name") || ""),
        email: String(f.get("email") || ""),
        subject: String(f.get("subject") || ""),
        message: String(f.get("message") || ""),
      }});
      if (r.ok) { setStatus("sent"); form.reset(); }
      else { setErrMsg(r.error ?? null); setStatus("error"); }
    } catch { setErrMsg(null); setStatus("error"); }
  };
  return (
    <header className="evo-nav">
      <div className="nav-pill">
        <Link href="/" className="nav-brand" aria-label="si. home">si<em>.</em></Link>
        <div className="nav-icons">
          <EvoLink className="nav-ic" href="/journey" aria-label="My Journey" title="My Journey">
            <svg {...IC} aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </EvoLink>
          <button type="button" className={contact ? "nav-ic on" : "nav-ic"} aria-label="Contact" aria-expanded={contact} title="Contact" onClick={() => { setContact((c) => !c); setOpen(false); }}>
            <svg {...IC} aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </button>
          <ThemeToggle />
          <button type="button" className="nav-ic" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            <svg {...IC} aria-hidden="true"><line x1="4" x2="20" y1="7" y2="7"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="17" y2="17"/></svg>
          </button>
        </div>
      </div>
      {open ? (
        <nav className="nav-menu" aria-label="Primary">
          <EvoLink href="/journey">Journey</EvoLink>
          <EvoLink href="/articles">Articles</EvoLink>
          <EvoLink href="/constitution">Constitution</EvoLink>
          <button type="button" onClick={() => { setOpen(false); setContact(true); }}>Contact</button>
        </nav>
      ) : null}
      {contact ? (
        <div className="contact-pop" role="dialog" aria-label="Get in touch">
          <span className="pop-nub" aria-hidden="true"></span>
          <div className="pop-head">
            <div>
              <b>Get In Touch</b>
              <p>Drop a message. I&apos;d love to hear from you.</p>
            </div>
            <button type="button" className="nav-ic" aria-label="Close" onClick={() => setContact(false)}>
              <svg {...IC} aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
          <form className="contact-grid pop-grid" onSubmit={onSubmit}>
            <div className="field"><label htmlFor="cp-name">Name</label><input id="cp-name" name="name" required autoComplete="name" /></div>
            <div className="field"><label htmlFor="cp-email">Email</label><input id="cp-email" name="email" type="email" required autoComplete="email" /></div>
            <div className="field full"><label htmlFor="cp-subject">Subject</label><input id="cp-subject" name="subject" required /></div>
            <div className="field full"><label htmlFor="cp-message">Message</label><textarea id="cp-message" name="message" rows={4} required></textarea></div>
            <div className="full" style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <button className="send-btn" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending" : "Send Message"}
              </button>
              {status === "sent" ? <span className="form-note" role="status">Message sent. Thank you.</span> : null}
              {status === "error" ? (
                <span className="form-note form-err" role="status">
                  {errMsg ?? (
                    <>Could not send. Reach me on <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>.</>
                  )}
                </span>
              ) : null}
            </div>
          </form>
        </div>
      ) : null}
    </header>
  );
}

// Scroll-LINKED (reversible) pigment dissolve: opacity, slight blur, upward
// drift scrubbed by scroll progress over the first stratum. Reduced motion:
// simple opacity fade at a fixed threshold.


// Scramble headline: starts as the full real text (no blank, no layout
// shift), then a slow decode wave sweeps once through the line — each
// character churns briefly and resolves back — holds 5s, repeats.
// Every char keeps its slot; spaces never scramble, so lines never move.
function ScrambleText({ text, waveMs = 4200, churnMs = 900, tickMs = 55, pause = 5000 }: { text: string; waveMs?: number; churnMs?: number; tickMs?: number; pause?: number }) {
  const [display, setDisplay] = useState(text);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setDisplay(text); return; }
    const CHARS = "01";
    const rnd = () => CHARS[Math.floor(Math.random() * CHARS.length)];
    const n = text.length;
    let iv = 0, timer = 0, start = 0;
    const run = () => {
      start = performance.now();
      iv = window.setInterval(() => {
        const t = performance.now() - start;
        let done = true;
        const chars: string[] = [];
        for (let i = 0; i < n; i++) {
          const c = text[i];
          if (c === " ") { chars.push(" "); continue; }
          const begin = (i / n) * waveMs;
          if (t < begin || t >= begin + churnMs) { chars.push(c); if (t < begin) done = false; }
          else { chars.push(rnd()); done = false; }
        }
        setDisplay(chars.join(""));
        if (done) {
          window.clearInterval(iv);
          setDisplay(text);
          timer = window.setTimeout(run, pause);
        }
      }, tickMs);
    };
    timer = window.setTimeout(run, pause);
    return () => { window.clearInterval(iv); window.clearTimeout(timer); };
  }, [text, waveMs, churnMs, tickMs, pause]);
  return (
    <span>
      {display.split(" ").map((w, i, arr) => (
        <React.Fragment key={i}>
          <span style={{ whiteSpace: "nowrap" }}>{w}</span>
          {i < arr.length - 1 ? " " : null}
        </React.Fragment>
      ))}
    </span>
  );
}

export function Hero() {
  const scrubRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    const el = ctaRef.current;
    if (!el) return;
    const set = () => el.style.setProperty("--path", `path('M 0 0 H ${el.offsetWidth} V ${el.offsetHeight} H 0 V 0')`);
    set();
    const ro = new ResizeObserver(set);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  useEffect(() => {
    const el = scrubRef.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const apply = () => {
      const h = window.innerHeight || 1;
      const p = Math.min(1, Math.max(0, window.scrollY / (h * 0.95)));
      if (reduced) {
        el.style.opacity = p > 0.6 ? "0" : "1";
        el.style.transition = "opacity .5s";
        return;
      }
      // fully legible until halfway through the dissolve range
      const fade = p < 0.5 ? 1 : 1 - (p - 0.5) / 0.45;
      const op = Math.max(0, Math.min(1, fade));
      el.style.opacity = op.toFixed(3);
      el.style.filter = p > 0.5 ? `blur(${((p - 0.5) * 9).toFixed(2)}px)` : "none";
      el.style.transform = `translateY(${(-p * 54).toFixed(1)}px)`;
      el.style.pointerEvents = op < 0.3 ? "none" : "auto";
    };
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(apply); };
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);
  return (
    <section className="evo-hero evo-wrap" aria-label="Introduction">
      <div className="hero-scrub" ref={scrubRef}>
        <h1 className="hero-head pigment"><ScrambleText text="Serious about AI governance. Playful about everything else." /></h1>
        <p className="hero-sub" style={{ marginTop: 26 }}>
          Helping organizations navigate AI through education, implementation guidance, and governance frameworks.
        </p>
        <Link ref={ctaRef} className="liquid-cta" style={{ marginTop: 30 }} href="/constitution">
          <span className="lq-star" aria-hidden="true"></span>
          <span className="lq-shadow" aria-hidden="true"></span>
          <span className="lq-glass" aria-hidden="true"></span>
          <span className="lq-label">Read the AGI Constitution</span>
        </Link>
        <svg className="lq-defs" aria-hidden="true" focusable="false">
          <defs>
            <filter id="lq-glass-f" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
              <feTurbulence type="fractalNoise" baseFrequency="0.05 0.05" numOctaves="1" seed="1" result="turbulence"/>
              <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise"/>
              <feDisplacementMap in="SourceGraphic" in2="blurredNoise" scale="70" xChannelSelector="R" yChannelSelector="B" result="displaced"/>
              <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur"/>
              <feComposite in="finalBlur" in2="finalBlur" operator="over"/>
            </filter>
          </defs>
        </svg>
      </div>
      <p className="scroll-cue">Scroll beneath the surface<i aria-hidden="true"></i></p>
    </section>
  );
}
