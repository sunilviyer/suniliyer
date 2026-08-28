'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { HomeAnalytics } from '@/components/homepage/HomeAnalytics';

/* Background loop — the 28s dharma-evolution renders from the mockup. */
const BG_DARK = '/videos/dharma-evolution-dark-28s.mp4';
const BG_LIGHT = '/videos/dharma-evolution-light-28s.mp4';
const CROSSFADE = 1.0; // seconds of overlap between the two <video> elements

const HERO_WORDS = [
  { text: 'Serious' }, { text: 'about' },
  { text: 'AI', key: true }, { text: 'governance.', key: true },
  { text: 'Playful' }, { text: 'about' },
  { text: 'everything', key: true }, { text: 'else.', key: true },
];

const ABOUT_WORDS = [
  { text: 'Two' }, { text: 'worlds:' },
  { text: 'one' }, { text: 'world' }, { text: 'of' }, { text: 'knowledge,', key: true },
  { text: 'one' }, { text: 'world' }, { text: 'of' }, { text: 'play.', key: true },
];

const VIDYA_TILES = [
  { href: 'https://ai-agents-rosy-mu.vercel.app', external: true, img: '/images/breaks/builds.webp', title: 'Builds', sub: 'agents · dashboards' },
  { href: '/articles', img: '/images/headercards/articles-header.webp', title: 'Articles', sub: '26+ publications' },
  { href: '/constitution', img: '/images/headercards/AGIConstitution.webp', title: 'Constitution', sub: 'AI principles' },
  { href: '/history', img: '/images/headercards/history-header.webp', title: 'Curriculum', sub: 'learning path' },
];

const LEELA_TILES = [
  { href: '/gita', img: '/images/heroes/gita-card.webp', title: 'Gita', sub: 'interactive Bhagavad Gita' },
  { href: '/calvinhobbes', img: '/images/portfolio/calvin-and-hobbes.webp', title: 'Calvin & Hobbes', sub: 'a cAlvIn parody' },
  { href: '/creative-works', img: '/images/portfolio/creative-works.webp', title: 'Creative Works', sub: 'art · animation' },
  { href: '/behind-the-scenes', img: '/images/breaks/Behind-Scene-Break.webp', title: 'Behind the Scenes', sub: 'process · tools' },
];

const EXPLORE_GROUPS = [
  {
    label: 'Learning Paths',
    links: [
      { href: '/history', title: 'History of AI', sub: '1950s to foundation models' },
      { href: '/terminology', title: 'Terminology', sub: 'ML, neural nets, LLMs' },
      { href: '/risk', title: 'Risk', sub: 'bias, deepfakes, harms' },
      { href: '/responsibility', title: 'Responsibility', sub: 'GDPR, EU AI Act, governance' },
      { href: '/future', title: 'Future of AI', sub: 'AGI, careers, regulation' },
    ],
  },
  {
    label: 'AGI Constitution',
    links: [
      { href: '/constitution', title: 'The Constitution', sub: 'overview and structure' },
      { href: '/constitution/authors-note', title: "Author's Note", sub: 'how to read this book' },
      { href: '/constitution/prologue', title: 'Prologue', sub: 'before the war' },
      { href: '/constitution/principles-overview', title: 'Ten Principles', sub: 'the spine of the book' },
      { href: '/constitution/closing', title: 'Closing Declaration', sub: 'after the war' },
    ],
  },
  {
    label: 'Portfolio',
    links: [
      { href: '/seshan/demo/', external: true, title: 'Seshan Intelligence', sub: 'AI business intelligence' },
      { href: 'https://seshan-navy.vercel.app/', external: true, title: 'Seshan Dashboard', sub: 'interactive analytics' },
      { href: 'https://ai-agents-rosy-mu.vercel.app', external: true, title: 'AI Agents', sub: 'SIU, Banker, Editor…' },
    ],
  },
  {
    label: 'Inner Monologue',
    links: [
      { href: '/articles', title: 'Articles', sub: 'thoughts & insights' },
      { href: '/gita', title: 'Bhagavad Gita', sub: 'AI-guided scripture' },
      { href: '/calvinhobbes', title: 'Calvin & Hobbes', sub: 'AI-illustrated comics' },
      { href: '/creative-works', title: 'Creative Works', sub: 'poetry & writing' },
      { href: '/behind-the-scenes', title: 'Behind the Scenes', sub: 'process · tools' },
    ],
  },
  {
    label: 'Connect',
    links: [
      { href: '/journey', title: 'My Journey', sub: 'professional story' },
      { href: '/downloads/Sunil_Iyer_Resume.pdf', external: true, title: 'Resume', sub: 'download resume' },
      { href: 'https://linkedin.com/in/sunilviyer', external: true, title: 'LinkedIn', sub: 'professional network' },
      { href: 'https://github.com/sunilviyer', external: true, title: 'GitHub', sub: 'code repositories' },
    ],
  },
];

const FOOTER_COLS = [
  {
    title: 'Vidya',
    links: [
      { href: '/history', label: 'History of AI' },
      { href: '/terminology', label: 'Terminology' },
      { href: '/risk', label: 'Risk' },
      { href: '/responsibility', label: 'Responsibility' },
      { href: '/future', label: 'Future of AI' },
    ],
  },
  {
    title: 'Leela',
    links: [
      { href: '/gita', label: 'Bhagavad Gita' },
      { href: '/calvinhobbes', label: 'Calvin & Hobbes' },
      { href: '/creative-works', label: 'Creative Works' },
      { href: '/behind-the-scenes', label: 'Behind the Scenes' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { href: '/journey', label: 'My Journey' },
      { href: '/articles', label: 'Articles' },
      { href: '/constitution', label: 'AGI Constitution' },
      { href: '/downloads/Sunil_Iyer_Resume.pdf', external: true, label: 'Resume' },
    ],
  },
];

const SOCIALS = [
  { href: 'https://linkedin.com/in/sunilviyer', label: 'LinkedIn', path: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z' },
  { href: 'https://github.com/sunilviyer', label: 'GitHub', path: 'M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z' },
  { href: 'https://medium.com/@sunilviswanathaniyer', label: 'Medium', path: 'M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z' },
];

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

/* Internal hrefs get next/link; anything absolute (or a static file) stays an <a>. */
const Smart = ({ href, external, children, ...rest }) =>
  external || /^https?:/.test(href)
    ? <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>{children}</a>
    : <Link href={href} {...rest}>{children}</Link>;

/* Reveal-on-scroll. Kept in React state rather than classList: the cards
   re-render when a world opens, which would wipe an externally-added class. */
function useReveal() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (typeof IntersectionObserver === 'undefined') { setShown(true); return undefined; }
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setShown(true);
      obs.disconnect();
    }, { rootMargin: '-100px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, `reveal ${shown ? 'in' : ''}`];
}

export default function Home({ fontClasses = '' }) {
  const videoA = useRef(null);
  const videoB = useRef(null);
  const socialsRef = useRef(null);
  const contactCardRef = useRef(null);
  const exploreCardRef = useRef(null);
  const lastTrigger = useRef(null);
  const loopState = useRef(null);
  // the contact API rejects submissions that arrive suspiciously fast
  const mountedAt = useRef(Date.now());

  const [light, setLight] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [vidyaOpen, setVidyaOpen] = useState(false);
  const [leelaOpen, setLeelaOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  const [vidyaRef, vidyaReveal] = useReveal();
  const [leelaRef, leelaReveal] = useReveal();
  const [footerRef, footerReveal] = useReveal();

  const closePanels = useCallback(() => {
    setContactOpen(false);
    setExploreOpen(false);
  }, []);

  /* ── background: two <video>s crossfading into each other ── */
  useEffect(() => {
    const a = videoA.current;
    const b = videoB.current;
    if (!a || !b) return;

    const st = { active: a, standby: b, switching: false };
    loopState.current = st;

    const swap = () => {
      if (st.switching) return;
      st.switching = true;
      st.standby.currentTime = 0;
      st.standby.muted = true;
      st.standby.play().then(() => {
        st.standby.style.opacity = '1';
        st.active.style.opacity = '0';
        setTimeout(() => {
          const t = st.active;
          st.active = st.standby;
          st.standby = t;
          st.standby.pause();
          st.switching = false;
        }, CROSSFADE * 1000);
      }).catch(() => { st.switching = false; });
    };

    // watchdog rather than 'ended': autoplay can be interrupted mid-loop
    const watchdog = setInterval(() => {
      const v = st.active;
      if (st.switching) return;
      if (v.ended) { swap(); return; }
      if (v.paused) {
        v.muted = true;
        v.play().then(() => { v.style.opacity = '1'; }).catch(() => {});
        return;
      }
      if (v.style.opacity !== '1') v.style.opacity = '1';
      const remaining = v.duration - v.currentTime;
      if (Number.isFinite(remaining) && remaining <= CROSSFADE) swap();
    }, 250);

    let retry;
    const tryPlay = () => {
      if (!st.active.paused) return;
      st.active.muted = true;
      st.active.play()
        .then(() => { st.active.style.opacity = '1'; })
        .catch(() => { retry = setTimeout(tryPlay, 500); });
    };
    a.addEventListener('canplay', tryPlay);
    tryPlay();

    return () => {
      clearInterval(watchdog);
      clearTimeout(retry);
      a.removeEventListener('canplay', tryPlay);
    };
  }, []);

  /* ── theme toggle also swaps the loop to its light render ── */
  const toggleMode = () => {
    const next = !light;
    setLight(next);
    const src = next ? BG_LIGHT : BG_DARK;
    const a = videoA.current;
    const b = videoB.current;
    const st = loopState.current;
    if (!a || !b || !st) return;
    st.switching = true;
    [a, b].forEach((v) => {
      v.style.opacity = '0';
      v.src = src;
      v.muted = true;
      v.load();
    });
    st.active = a;
    st.standby = b;
    a.play()
      .then(() => { a.style.opacity = '1'; st.switching = false; })
      .catch(() => { st.switching = false; });
  };

  /* ── socials fade out as the hero scrolls away ── */
  useEffect(() => {
    const onScroll = () => {
      const el = socialsRef.current;
      if (!el) return;
      const p = Math.max(0, 1 - window.scrollY / (window.innerHeight * 0.35));
      el.style.opacity = String(p);
      el.style.visibility = p === 0 ? 'hidden' : 'visible';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!contactOpen && !exploreOpen) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') closePanels(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [contactOpen, exploreOpen, closePanels]);

  /* Move focus into whichever card just opened, and hand it back to the
     nav button on close — the cards are inert until then, so this has to
     run after React has flipped the attribute. */
  useEffect(() => {
    const card = contactOpen ? contactCardRef.current
      : exploreOpen ? exploreCardRef.current
      : null;
    if (!card) {
      lastTrigger.current?.focus?.();
      return;
    }
    // the form should land on its first field; Explore has none, so it
    // falls back to the close button
    const field = card.querySelector('.lp-field input, .lp-field textarea');
    (field || card.querySelector('button, a'))?.focus();
  }, [contactOpen, exploreOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setSending(true);
    setStatus(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fd.get('name'),
          email: fd.get('email'),
          subject: fd.get('subject'),
          message: fd.get('message'),
          _honeypot: fd.get('_honeypot'),
          _timestamp: String(mountedAt.current),
        }),
      });
      if (!res.ok) throw new Error('contact failed');
      setStatus({ ok: true, text: 'Thanks — your message is on its way.' });
      e.target.reset();
    } catch {
      setStatus({ ok: false, text: 'Something went wrong. Try again, or email me directly.' });
    } finally {
      setSending(false);
    }
  };

  const renderTiles = (tiles) => tiles.map((t, i) => (
    <Smart
      key={t.title}
      href={t.href}
      external={t.external}
      className="lp-tile"
      style={{ transitionDelay: `${(i * 0.07).toFixed(2)}s` }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="lp-tile-img" style={{ backgroundImage: `url(${t.img})` }} />
      <div className="lp-tile-body">
        <div className="lp-tile-title">{t.title}</div>
        <div className="lp-tile-sub">{t.sub}</div>
      </div>
    </Smart>
  ));

  const panelsOpen = contactOpen || exploreOpen;

  return (
    <div className={`landing ${light ? 'is-light' : ''} ${fontClasses}`}>
      <HomeAnalytics />

      <video ref={videoA} className="lp-bg" src={BG_DARK} autoPlay muted playsInline preload="auto" aria-hidden="true" />
      <video ref={videoB} className="lp-bg" src={BG_DARK} muted playsInline preload="auto" aria-hidden="true" />

      {/* ── hero ─────────────────────────────────────────── */}
      <section className="lp-section lp-hero">
        <nav className="lp-nav">
          <div className="lp-nav-inner lg">
            <span className="lp-mark">si.</span>
            <div className="lp-nav-actions">
              <Link href="/journey" className="lp-icon-btn lg" aria-label="About Sunil" title="About Sunil">
                <svg width="16" height="16" viewBox="0 0 24 24" {...stroke}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
              </Link>
              <button type="button" onClick={(e) => { lastTrigger.current = e.currentTarget; setContactOpen(true); setExploreOpen(false); }} className="lp-icon-btn lg" aria-label="Get in touch" title="Get in touch">
                <svg width="16" height="16" viewBox="0 0 24 24" {...stroke}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" /></svg>
              </button>
              <button type="button" onClick={toggleMode} className="lp-icon-btn lg" aria-label={light ? 'Switch to dark mode' : 'Switch to light mode'}>
                {light ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" {...stroke}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" {...stroke}><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="M4.93 4.93l1.41 1.41" /><path d="M17.66 17.66l1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="M6.34 17.66l-1.41 1.41" /><path d="M19.07 4.93l-1.41 1.41" /></svg>
                )}
              </button>
              <button type="button" onClick={(e) => { lastTrigger.current = e.currentTarget; setExploreOpen(true); setContactOpen(false); }} className="lp-icon-btn lg" aria-label="Explore" title="Explore">
                <svg width="16" height="16" viewBox="0 0 24 24" {...stroke}><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></svg>
              </button>
            </div>
          </div>
        </nav>

        <div className="lp-hero-body">
          <h1 className="lp-hero-title">
            {HERO_WORDS.map((w, i) => (
              <span
                key={`${w.text}-${i}`}
                className={`lp-word ${w.key ? 'lp-word--key' : ''}`}
                style={{ animation: `lp-wordIn 0.7s ease-out ${(0.3 + i * 0.1).toFixed(1)}s both` }}
              >
                <span style={{ display: 'inline-block', animation: `lp-ripple 7s ease-in-out ${(1.8 + i * 0.14).toFixed(2)}s infinite` }}>
                  {w.text}
                </span>
              </span>
            ))}
          </h1>
          <p className="lp-hero-sub">
            Helping organizations navigate AI through education, implementation guidance, and governance frameworks.
          </p>
          <Link href="/constitution" className="lp-cta lg">Read the AGI Constitution</Link>
        </div>

        <div className="lp-socials" ref={socialsRef}>
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="lp-social lg" aria-label={s.label}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d={s.path} /></svg>
            </a>
          ))}
        </div>
      </section>

      {/* ── modals ───────────────────────────────────────── */}
      <div className={`lp-scrim ${panelsOpen ? 'show' : ''}`} onClick={closePanels} aria-hidden="true" />

      <div className="lp-modal-wrap">
        <div
          ref={contactCardRef}
          className={`lp-modal ${contactOpen ? 'open' : ''}`}
          role="dialog"
          aria-modal="true"
          aria-label="Get in touch"
          inert={!contactOpen}
        >
          <div className="lp-modal-scroll">
        <div className="lp-modal-head">
          <h3>Get In Touch</h3>
          <button type="button" className="lp-modal-close" onClick={closePanels} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          </button>
        </div>
        <p className="lp-modal-lede">Drop a message. I&apos;d love to hear from you.</p>
        <form className="lp-form" onSubmit={handleSubmit}>
          <div className="lp-field">
            <label htmlFor="lp-name">Name *</label>
            <input id="lp-name" name="name" type="text" required />
          </div>
          <div className="lp-field">
            <label htmlFor="lp-email">Email *</label>
            <input id="lp-email" name="email" type="email" required />
          </div>
          <div className="lp-field">
            <label htmlFor="lp-subject">Subject *</label>
            <input id="lp-subject" name="subject" type="text" required />
          </div>
          <div className="lp-field">
            <label htmlFor="lp-message">Message *</label>
            <textarea id="lp-message" name="message" rows={5} required />
          </div>
          <input className="lp-hp" name="_honeypot" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <button type="submit" className="lp-submit" disabled={sending}>
            {sending ? 'Sending…' : 'Send Message'}
            <svg width="15" height="15" viewBox="0 0 24 24" {...stroke}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </button>
          {status && <p className={`lp-status ${status.ok ? 'ok' : 'err'}`} role="status">{status.text}</p>}
          <p className="lp-note">
            <svg width="12" height="12" viewBox="0 0 24 24" {...stroke}><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
            Secure &amp; private
          </p>
        </form>
          </div>
        </div>
      </div>

      <div className="lp-modal-wrap">
        <div
          ref={exploreCardRef}
          className={`lp-modal lp-modal--explore ${exploreOpen ? 'open' : ''}`}
          role="dialog"
          aria-modal="true"
          aria-label="Explore"
          inert={!exploreOpen}
        >
          <div className="lp-modal-scroll">
        <div className="lp-modal-head">
          <h3>Explore</h3>
          <button type="button" className="lp-modal-close" onClick={closePanels} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          </button>
        </div>
        <div className="lp-explore-groups">
          {EXPLORE_GROUPS.map((g) => (
            <div key={g.label}>
              <p className="lp-explore-label">{g.label}</p>
              <div className="lp-explore-list">
                {g.links.map((l) => (
                  <Smart key={l.title} href={l.href} external={l.external} onClick={closePanels}>
                    {l.title} <span>{l.sub}</span>
                  </Smart>
                ))}
              </div>
            </div>
          ))}
        </div>
          </div>
        </div>
      </div>

      {/* ── about ────────────────────────────────────────── */}
      <section className="lp-section lp-about">
        <div className="lp-about-inner">
          <h2 className="lp-about-title">
            {ABOUT_WORDS.map((w, i) => {
              const d = `${(i * 0.12).toFixed(2)}s`;
              return (
                <span
                  key={`${w.text}-${i}`}
                  className={`lp-word ${w.key ? 'lp-word--key' : ''}`}
                  style={{
                    animation: w.key
                      ? `lp-shimmer 4.5s ease-in-out ${d} infinite, lp-colorCycle 9s ease-in-out ${d} infinite`
                      : `lp-shimmer 4.5s ease-in-out ${d} infinite`,
                  }}
                >
                  {w.text}
                </span>
              );
            })}
          </h2>
        </div>

        <div className="lp-worlds">
          <div ref={vidyaRef} className={`lp-world lg ${vidyaReveal} ${vidyaOpen ? 'open' : ''}`} onClick={() => setVidyaOpen((v) => !v)}>
            <p className="lp-world-label">Vidya</p>
            <p className="lp-world-lede">The world of knowledge: responsible AI curriculum, governance frameworks, and an AGI constitution.</p>
            <button type="button" className="lp-world-more" aria-expanded={vidyaOpen}>
              Tap to explore
              <svg width="14" height="14" viewBox="0 0 24 24" {...stroke}><path d="m6 9 6 6 6-6" /></svg>
            </button>
            <div className="lp-world-drawer">
              <div><div className="lp-world-grid">{renderTiles(VIDYA_TILES)}</div></div>
            </div>
          </div>

          <div ref={leelaRef} className={`lp-world lg ${leelaReveal} ${leelaOpen ? 'open' : ''}`} onClick={() => setLeelaOpen((v) => !v)}>
            <p className="lp-world-label">Leela</p>
            <p className="lp-world-lede">The world of play: Krishna&apos;s dance, generative art, and experiments that keep curiosity alive.</p>
            <button type="button" className="lp-world-more" aria-expanded={leelaOpen}>
              Tap to explore
              <svg width="14" height="14" viewBox="0 0 24 24" {...stroke}><path d="m6 9 6 6 6-6" /></svg>
            </button>
            <div className="lp-world-drawer">
              <div><div className="lp-world-grid">{renderTiles(LEELA_TILES)}</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── footer ───────────────────────────────────────── */}
      <section className="lp-section lp-footer-section">
        <div className="lp-footer-wrap">
          <footer ref={footerRef} className={`lp-footer lg ${footerReveal}`}>
            <div className="lp-footer-grid">
              <div>
                <div className="lp-footer-brand">
                  <span className="lp-mark">si.</span>
                  <span className="lp-footer-name">SUNIL IYER</span>
                </div>
                <p className="lp-footer-blurb">
                  AI governance consultant with 18+ years serving enterprise customers. Free responsible AI curriculum,
                  26+ published articles, an AGI constitution, and working AI agents.
                </p>
              </div>
              <div className="lp-footer-cols">
                {FOOTER_COLS.map((col) => (
                  <div key={col.title}>
                    <div className="lp-footer-col-title">{col.title}</div>
                    <div className="lp-footer-links">
                      {col.links.map((l) => (
                        <Smart key={l.label} href={l.href} external={l.external}>{l.label}</Smart>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lp-footer-bar">
              <p className="lp-fine">© {new Date().getFullYear()} Sunil Iyer · AI Governance &amp; Responsible AI</p>
              <div className="lp-footer-social">
                <span className="lp-fine">Join the Journey:</span>
                <div className="lp-footer-social-icons">
                  {SOCIALS.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d={s.path} /></svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}
