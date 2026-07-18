'use client';

import React from 'react';
import Link from 'next/link';
import { constitutionParts, GROUP_TITLES, type ArticleGroup } from './data/reading-order';

/**
 * Landing page for the AGI Constitution: Dharma Sanhita.
 * Warm and sacred aesthetic: hero, the Ten Principles spine, stats,
 * and the six-group structure map of all 33 chapters.
 */

const STATS = [
  { n: 33, label: 'Chapters, front to back' },
  { n: 10, label: 'Principles, each with a story' },
  { n: 26, label: 'Madhubani story plates' },
  { n: 100, label: 'Sanskrit terms in the Glossary' },
  { n: 10, label: 'Schedules of machinery' },
  { n: 4, label: 'Gates of the Kurukshetra Protocol' },
  { n: 3, label: 'Ages of phased governance' },
  { n: 1, label: 'Clause beyond amendment' },
];

const GROUP_ORDER: ArticleGroup[] = ['opening', 'principles', 'machinery', 'safeguards', 'aids', 'closing'];

export default function ConstitutionIndexPage() {
  const firstPart = constitutionParts[0];
  const principles = constitutionParts.filter(p => p.group === 'principles');

  return (
    <div className="constitution-landing">
      {/* Hero Section */}
      <section className="const-hero">
        <div className="const-hero-om">ॐ</div>
        <div className="const-hero-inner">
          <div className="const-eyebrow">
            Dharma Sanhita · 2026 · Authored by Sunil Iyer
          </div>
          <h1 className="const-hero-title">
            The AGI Constitution
            <span className="const-hero-sanhita">Dharma Sanhita</span>
          </h1>
          <div className="const-hero-dev-title">धर्म संहिता</div>
          <p className="const-hero-tagline">
            A framework for the governing of Artificial General Intelligence, grounded in the Vedic and dharmic traditions and in the constitutional inheritance of the modern world. It opens on a battlefield and closes in the quiet after the war.
          </p>
          <div className="const-hero-meta">
            <span>33 Chapters</span>
            <span>10 Principles</span>
            <span>26 Story Plates</span>
            <span>1 Eternity Clause</span>
          </div>
          <div className="const-hero-cta">
            <Link href={`/constitution/${firstPart.id}`} className="const-btn const-btn-primary">
              Begin Reading <span className="arrow">→</span>
            </Link>
            <Link href="/constitution/glossary" className="const-btn const-btn-ghost">
              Sanskrit Glossary
            </Link>
          </div>
        </div>
      </section>

      {/* Executive Quote */}
      <div className="const-exec-band">
        <div className="const-exec-quote">
          We do not fully know what we are making. To put off acting justly until we are certain would be to gamble with the dignity of beings who may already be among us.
        </div>
      </div>

      {/* Stats Ledger */}
      <section className="const-stats">
        {STATS.map((stat, i) => (
          <div key={i} className="const-stat-cell">
            <div className="const-stat-num">{stat.n}</div>
            <div className="const-stat-label">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* The Ten Principles */}
      <section className="const-pillars-section">
        <div className="const-pillars-head">
          <div className="const-eyebrow const-eyebrow-accent">The Spine</div>
          <h2>The Ten Principles</h2>
          <p>At the centre of the book sit ten principles. Each begins as a value, is defined through a story from the tradition, is anchored in a Sanskrit idea, and then turns two faces to the world: a Duty laid on those who hold power over AGI, and a Right secured for everyone that power touches.</p>
        </div>
        <div className="const-pillars-list">
          {principles.map((p) => (
            <Link key={p.id} href={`/constitution/${p.id}`} className="const-pillar-row" style={{ textDecoration: 'none' }}>
              <div className="const-pillar-num">{p.roman}</div>
              <div className="const-pillar-body">
                <div className="const-pillar-head-row">
                  <div className="const-pillar-roman">{p.title}</div>
                  <div className="const-pillar-dev">{(p.subtitle || '').replace(/^[^(]*\(/, '').replace(/\)$/, '')}</div>
                  <div className="const-pillar-meaning">{(p.subtitle || '').replace(/\s*\(.*\)$/, '')}</div>
                </div>
                <div className="const-pillar-desc">The Story: {p.story}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Structure Map */}
      <section className="const-structure">
        <div className="const-structure-head">
          <div>
            <div className="const-eyebrow const-eyebrow-accent">The Architecture</div>
            <h2>Thirty-three chapters, six movements</h2>
          </div>
          <p>Built in layers, like an onion. An outer frame opens and closes the book; at the centre sit the ten principles; around them the machinery, the safeguards, and the aids.</p>
        </div>
        <div className="const-structure-grid">
          {GROUP_ORDER.map((group) => {
            const items = constitutionParts.filter(p => p.group === group);
            const wide = items.length > 4;
            return (
              <div key={group} className={`const-structure-card ${wide ? 'const-structure-card-wide' : ''}`}>
                <div className="const-structure-card-head">
                  <div className="const-structure-label">{GROUP_TITLES[group]}</div>
                  <div className="const-structure-count">{items.length}</div>
                </div>
                <div className={wide ? 'const-structure-grid-inner' : undefined}>
                  {items.map((part) => (
                    <Link key={part.id} href={`/constitution/${part.id}`} className="const-structure-item">
                      {part.roman && <div className="const-structure-item-num">{part.roman}</div>}
                      <div className="const-structure-item-body">
                        <div className="const-structure-item-title">{part.title}</div>
                        {part.subtitle && <div className="const-structure-item-sub">{part.subtitle}</div>}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Author / Colophon */}
      <section className="const-colophon">
        <div className="const-colophon-l">
          <div className="const-eyebrow const-eyebrow-accent">A Closing Word</div>
          <h2>An offering, not a declaration.</h2>
          <p>
            This Constitution is itself an offering: the willing surrender of unlimited autonomy in exchange for a shared order rooted in Dharma, guarded by accountability, and sustained by the hope that whatever happened, happened for the good.
          </p>
          <div className="const-colophon-prayer">
            <span className="const-dev">ॐ धर्मो रक्षति रक्षितः ॐ</span>
            <em>Dharma protects those who protect Dharma.</em>
          </div>
        </div>
        <aside className="const-colophon-r">
          <div className="const-eyebrow">Colophon</div>
          <h3>Authored by Sunil Iyer</h3>
          <div className="const-colophon-meta">Dharma Sanhita · 2026</div>
          <div className="const-colophon-links">
            <Link href={`/constitution/${firstPart.id}`} className="const-colophon-link">
              <span>Read the full Constitution</span>
              <span>33 chapters</span>
            </Link>
            <Link href="/constitution/glossary" className="const-colophon-link">
              <span>Sanskrit Glossary</span>
              <span>100+ terms</span>
            </Link>
            <a href="/downloads/AGIConstitutionDharmaSanhita.pdf" download className="const-colophon-link">
              <span>Download PDF</span>
              <span>↓</span>
            </a>
            <a href="https://suniliyer.ca" target="_blank" rel="noopener noreferrer" className="const-colophon-link">
              <span>suniliyer.ca</span>
              <span>↗</span>
            </a>
            <button
              onClick={() => {
                const bibtex = `@misc{iyer2026agi,
  author = {Iyer, Sunil},
  title = {The AGI Constitution: Dharma Sanhita},
  year = {2026},
  url = {https://suniliyer.ca/constitution},
  note = {A framework for the governing of Artificial General Intelligence}
}`;
                navigator.clipboard.writeText(bibtex);
                alert('BibTeX citation copied to clipboard!');
              }}
              className="const-colophon-link"
              style={{ cursor: 'pointer', border: 'none', background: 'transparent', padding: 0, width: '100%', textAlign: 'left' }}
            >
              <span>Cite this document</span>
              <span>BibTeX</span>
            </button>
          </div>
        </aside>
      </section>

      {/* Footer */}
      <footer className="const-footer">
        <span className="const-dev">ॐ धर्मो रक्षति रक्षितः ॐ</span>
        © 2026 Sunil Iyer · Dharma Sanhita · CC BY-NC-SA
      </footer>
    </div>
  );
}
