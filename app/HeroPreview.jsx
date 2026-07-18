'use client';

import { useEffect, useRef, useState } from 'react';
import TopNav from '@/components/hero-kit/TopNav';
import { MENU_GROUPS } from '@/components/hero-kit/menu-groups';
import Torchlight from '@/components/hero-kit/Torchlight';
import HeroCard from '@/components/hero-kit/HeroCard';
import WorldCard from '@/components/hero-kit/WorldCard';
import { HomeAnalytics } from '@/components/homepage/HomeAnalytics';

// mirrors the live homepage's nav sections so the menu carries every link

const LEELA_FAN = [
  { imgUrl: '/images/heroes/gita-card.webp', label: 'Gita', desc: 'interactive Bhagavad Gita', href: '/gita' },
  { imgUrl: '/images/portfolio/calvin-and-hobbes.webp', label: 'Calvin & Hobbes', desc: 'a cAlvIn parody', href: '/calvinhobbes' },
  { imgUrl: '/images/portfolio/creative-works.webp', label: 'Creative Works', desc: 'art · animation', href: '/creative-works' },
  { imgUrl: '/images/breaks/Behind-Scene-Break.webp', label: 'Behind the Scenes', desc: 'process · tools', href: '/behind-the-scenes' },
];

// ported from the live homepage's Builds modal
const BUILDS_LINKS = [
  { title: 'AI Agents', desc: 'Intelligent autonomous systems', href: 'https://ai-agents-rosy-mu.vercel.app/', image: '/images/headercards/articles-header.webp' },
  { title: 'Seshan Dashboard', desc: 'Analytics and monitoring platform', href: 'https://seshan-navy.vercel.app/', image: '/images/portfolio/seshan-financial-dashboard.webp' },
  { title: 'Seshan Intelligence', desc: 'Advanced analytics platform', href: 'https://www.suniliyer.ca/seshan/demo', image: '/images/portfolio/seshan-intelligence.webp' },
];

const GRID_COLS = {
  vidya: '1.45fr 0.55fr',
  leela: '0.55fr 1.45fr',
  none: '1fr 1fr',
};

const X = () => (
  <svg viewBox="0 0 24 24" className="xicon">
    <path d="M5 5l14 14M19 5L5 19" />
  </svg>
);

const CREDITS = [
  { what: 'Design & build', who: 'Prototyped in Claude Design; built with Next.js, deployed on Vercel.' },
  { what: 'Type', who: 'Fraunces & Archivo, served via Google Fonts.' },
  { what: 'Icons', who: 'Lucide — open-source icon set.' },
  { what: 'Motion', who: 'GSAP card choreography; kinetic type original to this site.' },
  { what: 'Worlds footage', who: '“Vidya” & “Leela” loops — AI-generated footage created for this site.' },
  { what: 'Words & everything else', who: 'Sunil Iyer.' },
];

export default function HeroPreview({ fontClasses = '' }) {
  // the contact API rejects submissions that arrive suspiciously fast
  const mountedAt = useRef(Date.now());
  // at most one world fan open; hovering the other card closes this one
  const [activeWorld, setActiveWorld] = useState(null);
  const [buildsOpen, setBuildsOpen] = useState(false);
  const [creditsOpen, setCreditsOpen] = useState(false);

  useEffect(() => {
    if (!buildsOpen && !creditsOpen) return;
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      setBuildsOpen(false);
      setCreditsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [buildsOpen, creditsOpen]);

  const handleConnectSubmit = async (fd) => {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: fd.get('name'),
        email: fd.get('email'),
        subject: fd.get('subject'),
        message: fd.get('message'),
        _timestamp: String(mountedAt.current),
      }),
    });
    if (!res.ok) throw new Error('contact failed');
  };

  const openBuilds = () => setBuildsOpen(true);

  const vidyaFan = [
    { imgUrl: '/images/breaks/builds.webp', label: 'Builds', desc: 'agents · dashboards', onSelect: openBuilds },
    { imgUrl: '/images/headercards/articles-header.webp', label: 'Articles', desc: '26+ publications', href: '/articles' },
    { imgUrl: '/images/headercards/AGIConstitution.webp', label: 'Constitution', desc: 'AI principles', href: '/constitution' },
    { imgUrl: '/images/headercards/history-header.webp', label: 'Curriculum', desc: 'learning path', href: '/history' },
  ];

  const worldProps = (key) => ({
    open: activeWorld === key,
    dimmed: activeWorld !== null && activeWorld !== key,
    onOpen: () => setActiveWorld(key),
    onClose: () => setActiveWorld((w) => (w === key ? null : w)),
  });

  return (
    <div className={`kit-root ${fontClasses}`}>
      <HomeAnalytics />
      <Torchlight />
      <TopNav menuGroups={MENU_GROUPS} onConnectSubmit={handleConnectSubmit} />
      <main className="kit-main">
        <HeroCard />
        <div
          className="worlds"
          style={{ gridTemplateColumns: GRID_COLS[activeWorld || 'none'] }}
        >
          <WorldCard
            accent="vidya"
            tint="ember"
            videoSrc="/videos/vidya-3d.webm"
            videoSrcLight="/videos/vidya-3d-light.webm"
            tag="The world of knowledge"
            title="Vidya"
            devanagari="विद्या"
            lede="Frameworks, agents, and principles. The working side of responsible AI."
            fanItems={vidyaFan}
            {...worldProps('vidya')}
          />
          <WorldCard
            accent="leela"
            tint="magma"
            videoSrc="/videos/leela-3d.webm"
            videoSrcLight="/videos/leela-3d-light.webm"
            videoY={-70}
            videoScale={1.5}
            tag="The world of play"
            title="Leela"
            devanagari="लीला"
            lede="Art, stories, and experiments. Where curiosity gets to run loose."
            fanItems={LEELA_FAN}
            {...worldProps('leela')}
          />
        </div>
        <footer className="kit-footer">
          <p>© {new Date().getFullYear()} Sunil Iyer. All rights reserved.</p>
          <nav aria-label="Social links">
            <a href="https://www.linkedin.com/in/sunilviyer/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/sunilviyer" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://medium.com/@sunilviswanathaniyer" target="_blank" rel="noopener noreferrer">Medium</a>
            <button type="button" className="credits-link" onClick={() => setCreditsOpen(true)}>Credits</button>
          </nav>
        </footer>
      </main>

      {/* builds modal (ported from the live homepage) */}
      <div className={`scrim ${buildsOpen ? 'show' : ''}`} onClick={() => setBuildsOpen(false)} />
      <div className={`glass-card builds-card ${buildsOpen ? 'open' : ''}`} role="dialog" aria-label="Builds">
        <button className="close corner" onClick={() => setBuildsOpen(false)} aria-label="Close">
          <X />
        </button>
        <h3>Builds</h3>
        <p className="sub">Working systems — agents, dashboards, intelligence.</p>
        <div className="builds-list">
          {BUILDS_LINKS.map((b) => (
            <a key={b.href} href={b.href} target="_blank" rel="noopener noreferrer">
              <img src={b.image} alt="" loading="lazy" />
              <span className="bl-text">
                {b.title}
                <small>{b.desc}</small>
              </span>
              <span className="bl-ext" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>

      {/* credits modal */}
      <div className={`scrim ${creditsOpen ? 'show' : ''}`} onClick={() => setCreditsOpen(false)} />
      <div className={`glass-card credits-card ${creditsOpen ? 'open' : ''}`} role="dialog" aria-label="Credits">
        <button className="close corner" onClick={() => setCreditsOpen(false)} aria-label="Close">
          <X />
        </button>
        <h3>Credits</h3>
        <p className="sub">The hands and tools behind this site.</p>
        <div className="credits-list">
          {CREDITS.map((c) => (
            <div className="row" key={c.what}>
              <b>{c.what}</b>
              <small>{c.who}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
