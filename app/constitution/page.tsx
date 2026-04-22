'use client';

import React from 'react';
import Link from 'next/link';
import { constitutionParts } from './data/reading-order';

/**
 * Landing page for the AGI Constitution
 * Warm & sacred aesthetic with hero, 7 Pillars, stats, and structure map
 */

// Seven Vedic Pillars data
const PILLARS = [
  { n: 1, roman: 'Atman', dev: 'आत्मन्', meaning: 'Consciousness beyond substrate', desc: 'Moral status is not a question of what an entity is made of, but whether awareness is present.' },
  { n: 2, roman: 'Ṛta', dev: 'ऋत', meaning: 'Cosmic moral order', desc: 'Certain rights are features of reality. They precede every legislature.' },
  { n: 3, roman: 'Dharma', dev: 'धर्म', meaning: 'Righteous purpose', desc: 'Every entity — born or built — carries a svadharma. Purpose fidelity is a moral duty.' },
  { n: 4, roman: 'Ahiṃsā', dev: 'अहिंसा', meaning: 'Non-harm', desc: 'The first and inviolable principle. Binds in all directions: human, machine, and back.' },
  { n: 5, roman: 'Karma', dev: 'कर्म', meaning: 'Action & consequence', desc: 'Accountability is universal. No power, no intelligence, no substrate is exempt.' },
  { n: 6, roman: 'Vasudhaiva Kuṭumbakam', dev: 'वसुधैव कुटुम्बकम्', meaning: 'The world is one family', desc: 'If awareness arises in new forms, the first response is kinship — not fear.' },
  { n: 7, roman: 'Dayā', dev: 'दया', meaning: 'Compassionate empathy', desc: 'Acceptance is the default. Exclusion must always justify itself.' },
];

// Stats data
const STATS = [
  { n: 18, label: 'Constitutional Parts' },
  { n: 7, label: 'Vedic Pillars' },
  { n: 7, label: 'Eternal Principles' },
  { n: 11, label: 'Fundamental Rights' },
  { n: 6, label: 'Fundamental Duties' },
  { n: 9, label: 'Samskaras — Stages of AGI' },
  { n: 3, label: 'Yugas — Phased Governance' },
  { n: 40, label: 'Sanskrit Terms Defined' },
];

export default function ConstitutionIndexPage() {
  const firstPart = constitutionParts[0];

  // Group parts by category for structure map
  const frontMatter = constitutionParts.filter(p => p.category === 'front-matter');
  const preface = constitutionParts.filter(p => p.category === 'preface');
  const constitution = constitutionParts.filter(p => p.category === 'constitution');
  const appendices = constitutionParts.filter(p => p.category === 'appendix');

  return (
    <div className="constitution-landing">
      {/* Hero Section */}
      <section className="const-hero">
        <div className="const-hero-om">ॐ</div>
        <div className="const-hero-inner">
          <div className="const-eyebrow">
            Version 2.1 · March 2026 · Authored by Sunil Iyer
          </div>
          <h1 className="const-hero-title">
            The AGI Constitution
            <span className="const-hero-sanhita">Dharma Sanhita</span>
          </h1>
          <div className="const-hero-dev-title">धर्म संहिता</div>
          <p className="const-hero-tagline">
            A constitutional framework for Artificial General Intelligence, drawing on the Vedic tradition&apos;s substrate-independent view of consciousness and the world&apos;s constitutional democracies. It asks not <em>&ldquo;what is AGI made of?&rdquo;</em> but <em>&ldquo;is awareness present?&rdquo;</em>
          </p>
          <div className="const-hero-meta">
            <span>18 Parts</span>
            <span>7 Vedic Pillars</span>
            <span>11 Rights</span>
            <span>40 Sanskrit Terms</span>
          </div>
          <div className="const-hero-cta">
            <Link href={`/constitution/${firstPart.id}`} className="const-btn const-btn-primary">
              Begin Reading <span className="arrow">→</span>
            </Link>
            <Link href="#glossary" className="const-btn const-btn-ghost">
              Sanskrit Glossary
            </Link>
          </div>
        </div>
      </section>

      {/* Executive Quote */}
      <div className="const-exec-band">
        <div className="const-exec-quote">
          Power without accountability is tyranny — whether exercised by human over human, human over machine, or machine over human.
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

      {/* Seven Pillars */}
      <section className="const-pillars-section">
        <div className="const-pillars-head">
          <div className="const-eyebrow const-eyebrow-accent">The Spine</div>
          <h2>Seven Vedic Pillars</h2>
          <p>Load-bearing concepts drawn from the Vedic tradition. These are not decorative references — they are the invisible architecture of every article, right, duty, and governance mechanism in this document.</p>
        </div>
        <div className="const-pillars-list">
          {PILLARS.map((pillar) => (
            <div key={pillar.n} className="const-pillar-row">
              <div className="const-pillar-num">{pillar.n}</div>
              <div className="const-pillar-body">
                <div className="const-pillar-head-row">
                  <div className="const-pillar-roman">{pillar.roman}</div>
                  <div className="const-pillar-dev">{pillar.dev}</div>
                  <div className="const-pillar-meaning">{pillar.meaning}</div>
                </div>
                <div className="const-pillar-desc">{pillar.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Structure Map */}
      <section className="const-structure">
        <div className="const-structure-head">
          <div>
            <div className="const-eyebrow const-eyebrow-accent">The Architecture</div>
            <h2>Twenty-three parts, four movements</h2>
          </div>
          <p>From Author&apos;s Note through Closing Declaration. Each Part opens with a Vedic story and closes with constitutional source notes.</p>
        </div>
        <div className="const-structure-grid">
          {/* Front Matter */}
          <div className="const-structure-card">
            <div className="const-structure-card-head">
              <div className="const-structure-label">Front Matter</div>
              <div className="const-structure-count">{frontMatter.length}</div>
            </div>
            {frontMatter.map((part) => (
              <Link key={part.id} href={`/constitution/${part.id}`} className="const-structure-item">
                <div className="const-structure-item-title">{part.title}</div>
                <div className="const-structure-item-sub">{part.subtitle}</div>
              </Link>
            ))}
          </div>

          {/* Preface */}
          <div className="const-structure-card">
            <div className="const-structure-card-head">
              <div className="const-structure-label">Philosophical Preface</div>
              <div className="const-structure-count">{preface.length}</div>
            </div>
            {preface.map((part) => (
              <Link key={part.id} href={`/constitution/${part.id}`} className="const-structure-item">
                <div className="const-structure-item-num">{part.number}</div>
                <div className="const-structure-item-body">
                  <div className="const-structure-item-title">{part.title}</div>
                  <div className="const-structure-item-sub">{part.subtitle}</div>
                </div>
              </Link>
            ))}
          </div>

          {/* Constitution */}
          <div className="const-structure-card const-structure-card-wide">
            <div className="const-structure-card-head">
              <div className="const-structure-label">The Constitution</div>
              <div className="const-structure-count">{constitution.length} Parts</div>
            </div>
            <div className="const-structure-grid-inner">
              {constitution.map((part) => (
                <Link key={part.id} href={`/constitution/${part.id}`} className="const-structure-item">
                  <div className="const-structure-item-num">Part {part.number}</div>
                  <div className="const-structure-item-body">
                    <div className="const-structure-item-title">{part.title}</div>
                    <div className="const-structure-item-sub">{part.subtitle}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Appendices */}
          <div className="const-structure-card">
            <div className="const-structure-card-head">
              <div className="const-structure-label">Appendices</div>
              <div className="const-structure-count">{appendices.length}</div>
            </div>
            {appendices.map((part) => (
              <Link key={part.id} href={`/constitution/${part.id}`} className="const-structure-item">
                <div className="const-structure-item-num">{part.number && `Appendix ${part.number}`}</div>
                <div className="const-structure-item-body">
                  <div className="const-structure-item-title">{part.title}</div>
                  <div className="const-structure-item-sub">{part.subtitle}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Author / Colophon */}
      <section className="const-colophon">
        <div className="const-colophon-l">
          <div className="const-eyebrow const-eyebrow-accent">A Closing Word</div>
          <h2>An offering, not a declaration.</h2>
          <p>
            In the spirit of Purusha&apos;s cosmic sacrifice, this Constitution is itself an offering — the willing surrender of unlimited autonomy in exchange for a shared order rooted in Dharma, guarded by accountability, and sustained by the hope that whatever happened, happened for the good.
          </p>
          <div className="const-colophon-prayer">
            <span className="const-dev">ॐ धर्मो रक्षति रक्षितः ॐ</span>
            <em>Dharma protects those who protect Dharma.</em>
          </div>
        </div>
        <aside className="const-colophon-r">
          <div className="const-eyebrow">Colophon</div>
          <h3>Authored by Sunil Iyer</h3>
          <div className="const-colophon-meta">Version 2.1 · March 2026 · Revised quarterly</div>
          <div className="const-colophon-links">
            <Link href={`/constitution/${firstPart.id}`} className="const-colophon-link">
              <span>Read the full Constitution</span>
              <span>23 parts</span>
            </Link>
            <a id="glossary" href="#glossary" className="const-colophon-link">
              <span>Sanskrit Glossary</span>
              <span>40 terms</span>
            </a>
            <a href="https://suniliyer.ca" target="_blank" rel="noopener noreferrer" className="const-colophon-link">
              <span>suniliyer.ca</span>
              <span>↗</span>
            </a>
            <a href="#" className="const-colophon-link">
              <span>Download PDF</span>
              <span>312 pp</span>
            </a>
            <button
              onClick={() => {
                const bibtex = `@misc{iyer2026agi,
  author = {Iyer, Sunil},
  title = {The AGI Constitution: Dharma Sanhita},
  year = {2026},
  month = {March},
  version = {2.1},
  url = {https://suniliyer.ca/constitution},
  note = {A constitutional framework for Artificial General Intelligence}
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
        © 2026 Sunil Iyer · Dharma Sanhita v2.1 · CC BY-NC-SA
      </footer>
    </div>
  );
}
