'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { constitutionParts } from './data/reading-order';
import './constitution-landing.css';

/**
 * Constitution landing — "Midnight Scripture" (V4.0 redesign).
 * Dark-first hero with a looping dharma-wheel video, a structure band,
 * and the Ten Principles rendered as a gallery of Madhubani story plates.
 *
 * Theme is driven by the site's data-theme on <html> (the hero-kit TopNav
 * in the constitution layout owns the toggle); this page reacts through
 * CSS. The only client work here is keeping the hero videos muted.
 */

const PDF_HREF = '/downloads/AGIConstitutionDharmaSanhita.pdf';

/** Devanagari anchor extracted from a principle subtitle ("Rta (ऋत)" → "ऋत") */
function devFromSubtitle(subtitle?: string): string {
  const m = subtitle?.match(/\(([^)]+)\)/);
  return m ? m[1] : (subtitle || '');
}

export default function ConstitutionLandingPage() {
  const firstChapter = constitutionParts[0];
  const principles = constitutionParts.filter(p => p.group === 'principles');

  // Hero videos must always be muted. React does not reliably write the
  // muted attribute, so enforce it via the property after mount, and
  // re-mute anything that starts playing (capturing listener; no
  // MutationObserver — it degrades performance).
  useEffect(() => {
    const vids = Array.from(document.querySelectorAll<HTMLVideoElement>('.msl-hero-video'));
    vids.forEach(v => { v.muted = true; v.defaultMuted = true; v.volume = 0; v.play?.().catch(() => {}); });
    const onPlay = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t instanceof HTMLVideoElement && t.classList.contains('msl-hero-video')) {
        t.muted = true; t.volume = 0;
      }
    };
    document.addEventListener('play', onPlay, true);
    return () => document.removeEventListener('play', onPlay, true);
  }, []);

  return (
    <div className="msl">
      {/* —————————————— Hero —————————————— */}
      <section className="msl-hero">
        <video
          className="msl-hero-video is-dark"
          src="/videos/Dharma-Dark.webm"
          autoPlay muted loop playsInline aria-hidden="true"
        />
        <video
          className="msl-hero-video is-light"
          src="/videos/Dharma-Light.webm"
          autoPlay muted loop playsInline aria-hidden="true"
        />

        <div className="msl-hero-inner">
          <div className="msl-om">ॐ</div>
          <div className="msl-eyebrow">V4.0 · July 2026 · Authored by Sunil Iyer</div>
          <h1 className="msl-h1">The AGI Constitution</h1>
          <div className="msl-subtitle">
            <span className="name">Dharma Sanhita</span>
            <span className="sep"> · </span>
            <span className="dev">धर्म संहिता</span>
          </div>
          <p className="msl-lede">
            Grounded in the Vedic and dharmic traditions and the constitutional inheritance of the modern world. It opens on a battlefield and closes in the quiet after the war.
          </p>
          <div className="msl-cta-row">
            <Link href={`/constitution/${firstChapter.id}`} className="msl-cta msl-cta-primary">
              Begin Reading →
            </Link>
            <a href={PDF_HREF} download className="msl-cta msl-cta-secondary">
              Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* —————————————— Structure band —————————————— */}
      <div className="msl-band">
        <div className="msl-band-caption">
          One book · <span className="num">33 chapters</span> · six movements
        </div>
        <div className="msl-band-cols">
          <div className="msl-band-col">
            <div className="msl-band-col-title">The Core</div>
            <div className="msl-band-col-body">
              <span className="num">10 principles</span> at the centre — each told through a story, carrying a Duty and a Right.
            </div>
          </div>
          <div className="msl-band-col">
            <div className="msl-band-col-title">The Machinery</div>
            <div className="msl-band-col-body">
              The consciousness threshold, the three ages, the separation of powers, the Kurukshetra Protocol.
            </div>
          </div>
          <div className="msl-band-col">
            <div className="msl-band-col-title">The Frame</div>
            <div className="msl-band-col-body">
              Prologue to closing — safeguards, schedules, a 100-term glossary, and one clause beyond amendment.
            </div>
          </div>
        </div>
      </div>

      {/* —————————————— Ten Principles gallery —————————————— */}
      <div className="msl-gallery-head">
        <div className="msl-gallery-eyebrow">The Spine</div>
        <h2 className="msl-gallery-h2">The Ten Principles</h2>
        <p className="msl-gallery-intro">
          Ten stories from the tradition, each carrying a Duty for those who hold power over AGI and a Right for everyone that power touches.
        </p>
      </div>
      <div className="msl-grid">
        {principles.map((p) => (
          <Link key={p.id} href={`/constitution/${p.id}`} className="msl-card">
            <div className="msl-card-mat">
              {p.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img loading="lazy" src={p.image} alt={p.story || p.title} />
              )}
              <div className="msl-card-badge">{p.roman}</div>
            </div>
            <div className="msl-card-body">
              <div className="msl-card-title">{p.title}</div>
              <div className="msl-card-dev">{devFromSubtitle(p.subtitle)}</div>
              {p.story && <div className="msl-card-story">{p.story}</div>}
            </div>
          </Link>
        ))}
      </div>

      {/* —————————————— Footer —————————————— */}
      <footer className="msl-footer">
        <div className="msl-footer-verse">ॐ धर्मो रक्षति रक्षितः ॐ</div>
        <div className="msl-footer-translation">Dharma protects those who protect Dharma.</div>
        <div className="msl-footer-copyright">© 2026 Sunil Iyer · Dharma Sanhita V4.0 · CC BY-NC-SA</div>
      </footer>
    </div>
  );
}
