'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Instrument_Serif, Instrument_Sans, Tiro_Devanagari_Hindi } from 'next/font/google';
import { HomeAnalytics } from '@/components/homepage/HomeAnalytics';
import {
  trackCardClick,
  trackModalOpen,
  trackExternalLink,
  trackContactInteraction,
} from '@/lib/analytics';

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

const instrumentSans = Instrument_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

const tiroDevanagari = Tiro_Devanagari_Hindi({
  weight: '400',
  subsets: ['devanagari'],
  display: 'swap',
});

const EXPAND_AMOUNT = 1.45;
const VIDEO_OPACITY = 0.5;

interface WorldCard {
  id: string;
  title: string;
  desc: string;
  href?: string;
  image: string;
  imagePosition?: string;
  external?: boolean;
  opensBuilds?: boolean;
}

const VIDYA_CARDS: WorldCard[] = [
  { id: 'builds', title: 'Builds', desc: 'Agents, dashboards, intelligence', image: '/images/breaks/builds.webp', opensBuilds: true },
  { id: 'articles', title: 'Articles', desc: 'AI governance publications', href: '/articles', image: '/images/headercards/articles-header.webp' },
  { id: 'constitution', title: 'Constitution', desc: 'AI principles and ethics', href: '/constitution', image: '/images/headercards/AGIConstitution.webp' },
  { id: 'curriculum', title: 'Curriculum', desc: 'Professional learning path', href: '/history', image: '/images/headercards/history-header.webp' },
];

const LEELA_CARDS: WorldCard[] = [
  { id: 'gita', title: 'Gita', desc: 'Interactive Bhagavad Gita', href: '/gita', image: '/images/heroes/gita-card.webp', imagePosition: 'center 40%' },
  { id: 'calvin', title: 'Calvin and Hobbes', desc: 'A cAlvIn and Hobbes parody', href: '/calvinhobbes', image: '/images/portfolio/calvin-and-hobbes.webp' },
  { id: 'creative-works', title: 'Creative Works', desc: 'AI art, animations, videos', href: '/creative-works', image: '/images/portfolio/creative-works.webp' },
  { id: 'behind-scenes', title: 'Behind the Scenes', desc: 'Process, tools, workflow', href: '/behind-the-scenes', image: '/images/breaks/Behind-Scene-Break.webp' },
];

const BUILDS_LINKS = [
  { title: 'AI Agents', desc: 'Intelligent autonomous systems', href: 'https://ai-agents-rosy-mu.vercel.app/', image: '/images/headercards/articles-header.webp' },
  { title: 'Seshan Dashboard', desc: 'Analytics and monitoring platform', href: 'https://seshan-navy.vercel.app/', image: '/images/portfolio/seshan-financial-dashboard.webp' },
  { title: 'Seshan Intelligence', desc: 'Advanced analytics platform', href: 'https://www.suniliyer.ca/seshan/demo', image: '/images/portfolio/seshan-intelligence.webp' },
];

export default function HomePage() {
  const [light, setLight] = useState(true);
  const [mobile, setMobile] = useState(false);
  const [hovered, setHovered] = useState<'vidya' | 'leela' | null>(null);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [buildsOpen, setBuildsOpen] = useState(false);
  const [videoReady, setVideoReady] = useState({ vidya: false, leela: false });
  const [stats, setStats] = useState({ retention: 0, engagements: 0, years: 0 });

  // Sync with the site-wide theme set by TopNav
  useEffect(() => {
    const read = () => setLight(!document.documentElement.classList.contains('dark'));
    read();
    window.addEventListener('themeChange', read);
    return () => window.removeEventListener('themeChange', read);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 760px)');
    const onMq = () => setMobile(mq.matches);
    onMq();
    mq.addEventListener('change', onMq);
    return () => mq.removeEventListener('change', onMq);
  }, []);

  // Videos may finish loading before hydration attaches onLoadedData; catch up here
  useEffect(() => {
    document.querySelectorAll<HTMLVideoElement>('video[data-loop]').forEach((v) => {
      if (v.readyState >= 2) {
        const key = v.dataset.loop as 'vidya' | 'leela';
        setVideoReady((prev) => (prev[key] ? prev : { ...prev, [key]: true }));
      }
    });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setAboutOpen(false);
        setBuildsOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Stat count-up when the About overlay opens
  useEffect(() => {
    if (!aboutOpen) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1200;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const e = 1 - Math.pow(1 - t, 3);
      setStats({
        retention: Math.round(100 * e),
        engagements: Math.round(30 * e),
        years: Math.round(18 * e),
      });
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [aboutOpen]);

  const openAbout = () => {
    trackModalOpen('About');
    setStats({ retention: 0, engagements: 0, years: 0 });
    setAboutOpen(true);
  };

  const openContact = () => {
    trackContactInteraction('Open');
    setAboutOpen(false);
    window.dispatchEvent(new CustomEvent('open-contact-widget'));
  };

  const heroBg = light ? '#faf8f4' : '#0f0d0b';
  const heroFg = light ? '#181512' : '#efece6';
  const heroMuted = light ? '#6f675e' : 'rgba(239,236,230,0.62)';
  const vidyaBg = light ? '#f5f1e9' : '#101418';
  const vidyaFg = light ? '#181512' : '#e9edf2';
  const vidyaMuted = light ? '#6f675e' : 'rgba(233,237,242,0.62)';
  const leelaBg = light ? '#f2e7d6' : '#16110d';
  const leelaFg = light ? '#241a10' : '#f3ece2';
  const leelaMuted = light ? '#7d6c57' : 'rgba(243,236,226,0.62)';
  const videoBlend = light ? 'multiply' : 'screen';
  const videoFilter = light ? 'none' : 'invert(1) hue-rotate(180deg)';

  const panelFlex = (id: 'vidya' | 'leela') =>
    mobile ? '0 0 auto' : hovered === id ? `${EXPAND_AMOUNT} 1 0` : '1 1 0';

  const renderCard = (card: WorldCard, mode: 'vidya' | 'leela') => {
    const scrim = mode === 'vidya' ? '12,14,18' : '30,16,6';
    const inner = (
      <>
        <img
          src={card.image}
          alt={card.title}
          loading="lazy"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: card.imagePosition || 'center',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(to top, rgba(${scrim},0.82) 0%, rgba(${scrim},0.2) 46%, rgba(${scrim},0) 70%)`,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            padding: '30px 16px 12px',
            color: mode === 'vidya' ? '#f5f3ee' : '#f7f0e6',
            pointerEvents: 'none',
            background: `linear-gradient(to top, rgba(${scrim},0.94) 0%, rgba(${scrim},0.82) 55%, rgba(${scrim},0) 100%)`,
          }}
        >
          <div className={instrumentSerif.className} style={{ fontSize: 'clamp(18px, 1.5vw, 23px)', lineHeight: 1.1 }}>
            {card.title}
          </div>
          <div style={{ fontSize: 12, opacity: 0.82, marginTop: 3 }}>{card.desc}</div>
        </div>
      </>
    );

    const cardStyle: React.CSSProperties = {
      position: 'relative',
      display: 'block',
      width: '100%',
      height: 'clamp(96px, 17.5vh, 178px)',
      borderRadius: 16,
      overflow: 'hidden',
      background: 'rgba(127,127,127,0.16)',
      boxShadow: '0 10px 26px rgba(10,8,7,0.16)',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'inherit',
    };

    if (card.opensBuilds) {
      return (
        <button
          key={card.id}
          type="button"
          className="world-card"
          style={cardStyle}
          onClick={() => {
            trackCardClick(mode, card.id, card.title);
            trackModalOpen('Builds');
            setBuildsOpen(true);
          }}
        >
          {inner}
        </button>
      );
    }

    return (
      <Link
        key={card.id}
        href={card.href || '/'}
        className="world-card"
        style={cardStyle}
        onClick={() => trackCardClick(mode, card.id, card.title)}
      >
        {inner}
      </Link>
    );
  };

  return (
    <div className={instrumentSans.className}>
      <HomeAnalytics />

      {/* ══════════ Split world ══════════ */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          overflowX: 'hidden',
          overflowY: mobile ? 'auto' : 'hidden',
          background: heroBg,
          color: heroFg,
          transition: 'background 0.8s ease, color 0.8s ease',
        }}
      >
        {/* Hero header (cleared below the site TopNav) */}
        <header
          style={{
            position: 'relative',
            zIndex: 10,
            flexShrink: 0,
            display: 'flex',
            flexWrap: mobile ? 'wrap' : 'nowrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px 24px',
            padding: 'clamp(100px, 14vh, 128px) clamp(18px, 3vw, 32px) clamp(10px, 1.8vh, 20px)',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ animation: 'riseIn 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) 0.05s both' }}>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: heroMuted }}>
              Sunil Iyer · AI Governance &amp; Responsible AI
            </div>
            <h1
              className={instrumentSerif.className}
              style={{
                margin: 'clamp(6px, 1.4vh, 12px) 0 0',
                fontWeight: 400,
                fontSize: 'clamp(24px, 5vh, 42px)',
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
              }}
            >
              Serious about <em style={{ fontStyle: 'italic', color: 'oklch(0.45 0.08 230)' }}>AI governance</em>.{' '}
              <em style={{ fontStyle: 'italic', color: 'oklch(0.58 0.13 55)' }}>Playful</em> about everything else.
            </h1>
            <p
              style={{
                margin: 'clamp(5px, 1.2vh, 10px) 0 0',
                maxWidth: 660,
                fontSize: 'clamp(12px, 1.9vh, 14px)',
                lineHeight: 1.5,
                color: heroMuted,
                textWrap: 'pretty',
              }}
            >
              Helping organizations navigate AI through education, implementation guidance, and
              governance frameworks. One world of knowledge, one world of play.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, animation: 'riseIn 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) 0.2s both' }}>
            <button
              type="button"
              onClick={openAbout}
              className="chrome-btn"
              style={{
                height: 40,
                padding: '0 20px',
                borderRadius: 999,
                border: '1px solid rgba(127,119,108,0.5)',
                background: 'none',
                color: 'inherit',
                fontFamily: 'inherit',
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '0.05em',
                cursor: 'pointer',
                transition: 'background 0.3s ease',
              }}
            >
              About
            </button>
          </div>
        </header>

        {/* Panels */}
        <div
          style={{
            flex: mobile ? '0 0 auto' : '1 1 0',
            minHeight: 0,
            display: 'flex',
            flexDirection: mobile ? 'column' : 'row',
            gap: 'clamp(14px, 2vw, 24px)',
            padding: 'clamp(4px, 1vh, 10px) clamp(14px, 2.5vw, 28px) clamp(48px, 7vh, 64px)',
          }}
        >
          {/* Vidya panel */}
          <section
            onMouseEnter={() => setHovered('vidya')}
            onMouseLeave={() => setHovered(null)}
            style={{
              flex: panelFlex('vidya'),
              minWidth: 0,
              minHeight: mobile ? '78vh' : 'auto',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 'clamp(18px, 2vw, 28px)',
              boxShadow: '0 16px 44px rgba(10,8,7,0.16)',
              background: vidyaBg,
              color: vidyaFg,
              padding: 'clamp(20px, 4vh, 52px) clamp(28px, 4vw, 56px) clamp(32px, 6vh, 72px)',
              boxSizing: 'border-box',
              transition: 'flex 0.9s cubic-bezier(0.3, 0.85, 0.25, 1), background 0.8s ease, color 0.8s ease',
            }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              data-loop="vidya"
              onLoadedData={() => setVideoReady((v) => ({ ...v, vidya: true }))}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: videoReady.vidya ? VIDEO_OPACITY : 0,
                mixBlendMode: videoBlend as React.CSSProperties['mixBlendMode'],
                filter: videoFilter,
                pointerEvents: 'none',
                transition: 'opacity 1.2s ease',
              }}
            >
              <source src="/videos/vidya-loop.webm" type="video/webm" />
            </video>
            <div style={{ position: 'relative', maxWidth: 640, maxHeight: mobile ? 'none' : '100%', overflowY: 'auto', scrollbarWidth: 'none', boxSizing: 'border-box' }}>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: vidyaMuted, animation: 'riseIn 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) 0.15s both' }}>
                The world of knowledge
              </div>
              <h2
                className={instrumentSerif.className}
                style={{ margin: '12px 0 0', fontWeight: 400, fontSize: 'clamp(32px, min(5.4vw, 7.5vh), 88px)', lineHeight: 1, letterSpacing: '-0.01em', animation: 'riseIn 1s cubic-bezier(0.2, 0.7, 0.2, 1) 0.3s both' }}
              >
                Vidya <span className={tiroDevanagari.className} style={{ fontSize: '0.5em', color: 'oklch(0.45 0.08 230)' }}>विद्या</span>
              </h2>
              <p style={{ margin: 'clamp(5px, 1vh, 16px) 0 0', fontSize: 'clamp(13px, 2.2vh, 15px)', lineHeight: 1.55, color: vidyaMuted, maxWidth: 420, animation: 'riseIn 1s cubic-bezier(0.2, 0.7, 0.2, 1) 0.45s both', textWrap: 'pretty' }}>
                Frameworks, agents, and principles. The working side of responsible AI.
              </p>
              <div style={{ marginTop: 'clamp(10px, 2vh, 34px)', animation: 'riseIn 1s cubic-bezier(0.2, 0.7, 0.2, 1) 0.6s both', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(10px, 1.6vh, 14px)' }}>
                {VIDYA_CARDS.map((card) => renderCard(card, 'vidya'))}
              </div>
            </div>
          </section>

          {/* Leela panel */}
          <section
            onMouseEnter={() => setHovered('leela')}
            onMouseLeave={() => setHovered(null)}
            style={{
              flex: panelFlex('leela'),
              minWidth: 0,
              minHeight: mobile ? '78vh' : 'auto',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 'clamp(18px, 2vw, 28px)',
              boxShadow: '0 16px 44px rgba(10,8,7,0.16)',
              background: leelaBg,
              color: leelaFg,
              padding: 'clamp(20px, 4vh, 52px) clamp(28px, 4vw, 56px) clamp(32px, 6vh, 72px)',
              boxSizing: 'border-box',
              transition: 'flex 0.9s cubic-bezier(0.3, 0.85, 0.25, 1), background 0.8s ease, color 0.8s ease',
            }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              data-loop="leela"
              onLoadedData={() => setVideoReady((v) => ({ ...v, leela: true }))}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: videoReady.leela ? VIDEO_OPACITY : 0,
                mixBlendMode: videoBlend as React.CSSProperties['mixBlendMode'],
                filter: videoFilter,
                pointerEvents: 'none',
                transition: 'opacity 1.2s ease',
              }}
            >
              <source src="/videos/leela-loop.webm" type="video/webm" />
            </video>
            <div style={{ position: 'relative', maxWidth: 640, maxHeight: mobile ? 'none' : '100%', overflowY: 'auto', scrollbarWidth: 'none', boxSizing: 'border-box' }}>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: leelaMuted, animation: 'riseIn 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) 0.25s both' }}>
                The world of play
              </div>
              <h2
                className={instrumentSerif.className}
                style={{ margin: '12px 0 0', fontWeight: 400, fontSize: 'clamp(32px, min(5.4vw, 7.5vh), 88px)', lineHeight: 1, letterSpacing: '-0.01em', animation: 'riseIn 1s cubic-bezier(0.2, 0.7, 0.2, 1) 0.4s both' }}
              >
                Leela <span className={tiroDevanagari.className} style={{ fontSize: '0.5em', color: 'oklch(0.68 0.13 55)' }}>लीला</span>
              </h2>
              <p style={{ margin: 'clamp(5px, 1vh, 16px) 0 0', fontSize: 'clamp(13px, 2.2vh, 15px)', lineHeight: 1.55, color: leelaMuted, maxWidth: 420, animation: 'riseIn 1s cubic-bezier(0.2, 0.7, 0.2, 1) 0.55s both', textWrap: 'pretty' }}>
                Art, stories, and experiments. Where curiosity gets to run loose.
              </p>
              <div style={{ marginTop: 'clamp(10px, 2vh, 34px)', animation: 'riseIn 1s cubic-bezier(0.2, 0.7, 0.2, 1) 0.7s both', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(10px, 1.6vh, 14px)' }}>
                {LEELA_CARDS.map((card) => renderCard(card, 'leela'))}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ══════════ Blend chrome (bottom) ══════════ */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 30,
          display: mobile ? 'none' : 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 'clamp(12px, 2vh, 20px) 32px',
          mixBlendMode: 'difference',
          color: '#ffffff',
          pointerEvents: 'none',
          fontSize: 12,
          letterSpacing: '0.06em',
        }}
      >
        <div style={{ opacity: 0.75, animation: 'fadeIn 1.2s ease 0.5s both' }}>© 2026 Sunil Iyer. All rights reserved.</div>
        <div style={{ display: 'flex', gap: 20, pointerEvents: 'auto', animation: 'fadeIn 1.2s ease 0.65s both' }}>
          <a
            href="https://www.linkedin.com/in/sunilviyer/"
            target="_blank"
            rel="noopener noreferrer"
            className="chrome-link"
            onClick={() => trackExternalLink('LinkedIn', 'https://www.linkedin.com/in/sunilviyer/')}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/sunilviyer"
            target="_blank"
            rel="noopener noreferrer"
            className="chrome-link"
            onClick={() => trackExternalLink('GitHub', 'https://github.com/sunilviyer')}
          >
            GitHub
          </a>
          <a
            href="https://medium.com/@suniliyer"
            target="_blank"
            rel="noopener noreferrer"
            className="chrome-link"
            onClick={() => trackExternalLink('Other', 'https://medium.com/@suniliyer')}
          >
            Medium
          </a>
        </div>
      </div>

      {/* ══════════ About overlay ══════════ */}
      {aboutOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 90, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40, boxSizing: 'border-box' }}>
          <div onClick={() => setAboutOpen(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(10,8,7,0.5)', animation: 'fadeIn 0.4s ease both' }} />
          <div
            style={{
              position: 'relative',
              width: 'min(880px, 100%)',
              maxHeight: '100%',
              overflowY: 'auto',
              borderRadius: 24,
              background: 'rgba(22,18,16,0.72)',
              backdropFilter: 'blur(30px) saturate(1.3)',
              WebkitBackdropFilter: 'blur(30px) saturate(1.3)',
              border: '1px solid rgba(243,236,226,0.16)',
              color: '#f3ece2',
              padding: 'clamp(24px, 5vw, 48px)',
              boxSizing: 'border-box',
              animation: 'popIn 0.55s cubic-bezier(0.3, 1, 0.3, 1) both',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 20 }}>
              <h2 className={instrumentSerif.className} style={{ margin: 0, fontWeight: 400, fontSize: 'clamp(36px, 4vw, 54px)', lineHeight: 1.05 }}>
                A little about me
              </h2>
              <button
                type="button"
                onClick={() => setAboutOpen(false)}
                aria-label="Close"
                className="glass-btn"
                style={{ width: 40, height: 40, borderRadius: 999, border: '1px solid rgba(243,236,226,0.25)', background: 'none', color: '#f3ece2', fontSize: 18, cursor: 'pointer', flexShrink: 0 }}
              >
                ×
              </button>
            </div>
            <div style={{ marginTop: 26, display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'minmax(280px, 1.2fr) minmax(200px, 0.8fr)', gap: 36, alignItems: 'start' }}>
              <div>
                <p style={{ margin: 0, fontSize: 17, lineHeight: 1.65, color: 'rgba(243,236,226,0.8)', textWrap: 'pretty' }}>
                  I&apos;m a results-driven leader specializing in AI adoption, customer success, and
                  enterprise digital transformation. If you&apos;re interested in building something
                  together, learning about AI, or discussing the AGI Constitution, say hello.
                </p>
                <div style={{ marginTop: 30, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
                  <div style={{ border: '1px solid rgba(243,236,226,0.16)', borderRadius: 14, padding: '18px 16px' }}>
                    <div className={instrumentSerif.className} style={{ fontSize: 34, lineHeight: 1 }}>{stats.retention}%</div>
                    <div style={{ marginTop: 7, fontSize: 12, letterSpacing: '0.05em', color: 'rgba(243,236,226,0.6)' }}>Client retention</div>
                  </div>
                  <div style={{ border: '1px solid rgba(243,236,226,0.16)', borderRadius: 14, padding: '18px 16px' }}>
                    <div className={instrumentSerif.className} style={{ fontSize: 34, lineHeight: 1 }}>${stats.engagements}M+</div>
                    <div style={{ marginTop: 7, fontSize: 12, letterSpacing: '0.05em', color: 'rgba(243,236,226,0.6)' }}>Engagements</div>
                  </div>
                  <div style={{ border: '1px solid rgba(243,236,226,0.16)', borderRadius: 14, padding: '18px 16px' }}>
                    <div className={instrumentSerif.className} style={{ fontSize: 34, lineHeight: 1 }}>{stats.years}+</div>
                    <div style={{ marginTop: 7, fontSize: 12, letterSpacing: '0.05em', color: 'rgba(243,236,226,0.6)' }}>Years serving customers</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={openContact}
                  className="cta-btn"
                  style={{
                    marginTop: 30,
                    padding: '14px 30px',
                    borderRadius: 999,
                    border: 'none',
                    background: 'oklch(0.62 0.13 55)',
                    color: '#1d0f04',
                    fontFamily: 'inherit',
                    fontSize: 15,
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'transform 0.25s ease',
                  }}
                >
                  Let&apos;s connect →
                </button>
              </div>
              <div style={{ height: 320, borderRadius: 18, overflow: 'hidden' }}>
                <img src="/images/Sunil.webp" alt="Sunil Iyer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ══════════ Builds chooser ══════════ */}
      {buildsOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 95, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40, boxSizing: 'border-box' }}>
          <div onClick={() => setBuildsOpen(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(10,8,7,0.5)', animation: 'fadeIn 0.4s ease both' }} />
          <div
            style={{
              position: 'relative',
              width: 'min(760px, 100%)',
              maxHeight: '100%',
              overflowY: 'auto',
              borderRadius: 24,
              background: 'rgba(22,18,16,0.72)',
              backdropFilter: 'blur(30px) saturate(1.3)',
              WebkitBackdropFilter: 'blur(30px) saturate(1.3)',
              border: '1px solid rgba(243,236,226,0.16)',
              color: '#f3ece2',
              padding: 'clamp(24px, 5vw, 40px)',
              boxSizing: 'border-box',
              animation: 'popIn 0.55s cubic-bezier(0.3, 1, 0.3, 1) both',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 20 }}>
              <div>
                <h2 className={instrumentSerif.className} style={{ margin: 0, fontWeight: 400, fontSize: 'clamp(30px, 3.4vw, 44px)', lineHeight: 1.05 }}>Builds</h2>
                <p style={{ margin: '8px 0 0', fontSize: 14, color: 'rgba(243,236,226,0.7)' }}>Choose a project to explore</p>
              </div>
              <button
                type="button"
                onClick={() => setBuildsOpen(false)}
                aria-label="Close"
                className="glass-btn"
                style={{ width: 40, height: 40, borderRadius: 999, border: '1px solid rgba(243,236,226,0.25)', background: 'none', color: '#f3ece2', fontSize: 18, cursor: 'pointer', flexShrink: 0 }}
              >
                ×
              </button>
            </div>
            <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: 14 }}>
              {BUILDS_LINKS.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="world-card"
                  style={{ position: 'relative', display: 'block', height: 170, borderRadius: 16, overflow: 'hidden', boxShadow: '0 10px 26px rgba(10,8,7,0.3)' }}
                  onClick={() => {
                    trackExternalLink('Project', item.href);
                    setBuildsOpen(false);
                  }}
                >
                  <img src={item.image} alt={item.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,14,18,0.9) 0%, rgba(12,14,18,0.2) 55%, rgba(12,14,18,0) 75%)', pointerEvents: 'none' }} />
                  <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '24px 14px 12px', color: '#f5f3ee', pointerEvents: 'none' }}>
                    <div className={instrumentSerif.className} style={{ fontSize: 20, lineHeight: 1.1 }}>{item.title}</div>
                    <div style={{ fontSize: 12, opacity: 0.82, marginTop: 3 }}>{item.desc}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes riseIn {
          from { opacity: 0; transform: translateY(34px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
        }
        @keyframes popIn {
          from { opacity: 0; transform: translateY(26px) scale(0.97); }
        }
        .world-card {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .world-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 34px rgba(10, 8, 7, 0.26);
        }
        .chrome-btn:hover {
          background: rgba(127, 119, 108, 0.18) !important;
        }
        .chrome-link {
          opacity: 0.75;
          border-bottom: 1px solid rgba(255, 255, 255, 0.4);
          padding-bottom: 1px;
        }
        .chrome-link:hover {
          opacity: 1;
        }
        .glass-btn:hover {
          background: rgba(243, 236, 226, 0.1) !important;
        }
        .cta-btn:hover {
          transform: translateY(-2px);
        }
        @media (prefers-reduced-motion: reduce) {
          .world-card,
          .cta-btn {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}
