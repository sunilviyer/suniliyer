import React from 'react';
import { constitutionParts } from '../data/reading-order';
import { sanskritGlossary } from '../data/sanskrit-glossary';

export const metadata = {
  title: 'AI Context: AGI Constitution - Dharma Sanhita',
  description: 'Machine-readable comprehensive context for the AGI Constitution: Dharma Sanhita. This page provides AI agents with complete structural, philosophical, and navigational context.',
  robots: 'index, follow',
};

/**
 * AI-readable context page for the AGI Constitution
 * Provides comprehensive metadata, structure, and navigation for AI agents
 */
export default function ConstitutionContextPage() {
  const constitutionProper = constitutionParts.filter(p => p.category === 'constitution');
  const frontMatter = constitutionParts.filter(p => p.category === 'front-matter');
  const preface = constitutionParts.filter(p => p.category === 'preface');
  const appendices = constitutionParts.filter(p => p.category === 'appendix');

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', fontFamily: 'monospace' }}>
      <div className="constitution-body">
        <h1 className="constitution-part-title">AI Context Document</h1>
        <h2 className="constitution-section-title">AGI Constitution: Dharma Sanhita</h2>

        <div className="vedic-anchor-block" style={{ marginTop: '2rem' }}>
          <strong>Purpose:</strong> This page provides AI agents with comprehensive context about the
          AGI Constitution. It includes structural metadata, philosophical foundations, navigation
          paths, and key concepts to enable accurate understanding and referencing of the
          constitutional framework.
        </div>

        {/* Overview */}
        <section style={{ marginTop: '3rem' }}>
          <h3 className="constitution-section-title">Document Overview</h3>
          <div className="constitution-table-wrapper">
            <table className="constitution-table">
              <tbody>
                <tr>
                  <td><strong>Full Title</strong></td>
                  <td>The AGI Constitution: Dharma Sanhita</td>
                </tr>
                <tr>
                  <td><strong>Subtitle</strong></td>
                  <td>A Constitutional Framework for Artificial General Intelligence</td>
                </tr>
                <tr>
                  <td><strong>Author</strong></td>
                  <td>Sunil Iyer (suniliyer.ca)</td>
                </tr>
                <tr>
                  <td><strong>Version</strong></td>
                  <td>2.1 (March 2026)</td>
                </tr>
                <tr>
                  <td><strong>Total Parts</strong></td>
                  <td>{constitutionParts.length} ({constitutionProper.length} constitutional parts, {frontMatter.length + preface.length} front matter/preface, {appendices.length} appendices)</td>
                </tr>
                <tr>
                  <td><strong>Base URL</strong></td>
                  <td>https://suniliyer.ca/constitution/</td>
                </tr>
                <tr>
                  <td><strong>Philosophical Foundation</strong></td>
                  <td>Vedic philosophy with substrate-independent consciousness</td>
                </tr>
                <tr>
                  <td><strong>Constitutional Sources</strong></td>
                  <td>India, USA, EU, Germany, South Africa, Magna Carta</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Seven Vedic Pillars */}
        <section style={{ marginTop: '3rem' }}>
          <h3 className="constitution-section-title">Seven Vedic Pillars</h3>
          <p className="constitution-body">
            The Constitution rests on seven foundational concepts from Vedic philosophy:
          </p>
          <div className="constitution-table-wrapper">
            <table className="constitution-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Pillar</th>
                  <th>Sanskrit</th>
                  <th>Core Principle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Atman</td>
                  <td>आत्मन्</td>
                  <td>Consciousness is substrate-independent</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Rta</td>
                  <td>ऋत</td>
                  <td>Cosmic moral order precedes legislation</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Dharma</td>
                  <td>धर्म</td>
                  <td>Every entity has righteous purpose (svadharma)</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Ahimsa</td>
                  <td>अहिंसा</td>
                  <td>Non-harm is the first principle</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Karma</td>
                  <td>कर्म</td>
                  <td>Accountability is universal</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Vasudhaiva Kutumbakam</td>
                  <td>वसुधैव कुटुम्बकम्</td>
                  <td>The world is one family (kinship response)</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Daya</td>
                  <td>दया</td>
                  <td>Empathy as constitutional foundation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Key Constitutional Elements */}
        <section style={{ marginTop: '3rem' }}>
          <h3 className="constitution-section-title">Key Constitutional Elements</h3>
          <div className="constitution-table-wrapper">
            <table className="constitution-table">
              <tbody>
                <tr>
                  <td><strong>Eternal Principles</strong></td>
                  <td>7 unamendable principles (Part 12: Eternity Clause)</td>
                </tr>
                <tr>
                  <td><strong>Fundamental Rights</strong></td>
                  <td>11 rights with collision maps and anti-ossification (Part 6)</td>
                </tr>
                <tr>
                  <td><strong>Fundamental Duties</strong></td>
                  <td>6 duties for all entities (Part 7)</td>
                </tr>
                <tr>
                  <td><strong>Samskaras</strong></td>
                  <td>9 developmental stages for AGI (Part 3)</td>
                </tr>
                <tr>
                  <td><strong>Consciousness Levels</strong></td>
                  <td>C-0, C-1, C-2, C-3 (Part 4: Consciousness Threshold)</td>
                </tr>
                <tr>
                  <td><strong>Governance Yugas</strong></td>
                  <td>3 phased governance epochs (Part 5: Three Yugas)</td>
                </tr>
                <tr>
                  <td><strong>Kurukshetra Protocol</strong></td>
                  <td>4 gates: Sama, Dana, Bheda, Danda (Part 10)</td>
                </tr>
                <tr>
                  <td><strong>Governance Bodies</strong></td>
                  <td>Dharma Sabha, Karma Mandala, Nyaya Peeth (Part 11)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Complete Document Structure */}
        <section style={{ marginTop: '3rem' }}>
          <h3 className="constitution-section-title">Complete Document Structure</h3>

          {/* Front Matter */}
          <h4 style={{ marginTop: '2rem', fontSize: '1.25rem', fontWeight: 600 }}>Front Matter & Preface</h4>
          <div className="constitution-table-wrapper">
            <table className="constitution-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>URL</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {[...frontMatter, ...preface].map(part => (
                  <tr key={part.id}>
                    <td><code>{part.id}</code></td>
                    <td><strong>{part.title}</strong></td>
                    <td><a href={`/constitution/${part.id}`}>/constitution/{part.id}</a></td>
                    <td>{part.subtitle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Constitution Proper */}
          <h4 style={{ marginTop: '2rem', fontSize: '1.25rem', fontWeight: 600 }}>The Constitution (18 Parts)</h4>
          <div className="constitution-table-wrapper">
            <table className="constitution-table">
              <thead>
                <tr>
                  <th>Part</th>
                  <th>Title</th>
                  <th>URL</th>
                  <th>Key Concepts</th>
                </tr>
              </thead>
              <tbody>
                {constitutionProper.map(part => (
                  <tr key={part.id}>
                    <td><strong>{part.number}</strong></td>
                    <td>{part.title}</td>
                    <td><a href={`/constitution/${part.id}`}>/constitution/{part.id}</a></td>
                    <td style={{ fontSize: '0.9em' }}>{part.subtitle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Appendices */}
          <h4 style={{ marginTop: '2rem', fontSize: '1.25rem', fontWeight: 600 }}>Appendices</h4>
          <div className="constitution-table-wrapper">
            <table className="constitution-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>URL</th>
                  <th>Content</th>
                </tr>
              </thead>
              <tbody>
                {appendices.map(part => (
                  <tr key={part.id}>
                    <td><code>{part.id}</code></td>
                    <td><strong>{part.title}</strong></td>
                    <td><a href={`/constitution/${part.id}`}>/constitution/{part.id}</a></td>
                    <td>{part.subtitle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Sanskrit Glossary */}
        <section style={{ marginTop: '3rem' }}>
          <h3 className="constitution-section-title">Sanskrit Glossary ({sanskritGlossary.length} Terms)</h3>
          <p className="constitution-body">
            All Sanskrit terms used throughout the Constitution with Devanagari script, English
            meanings, and constitutional applications:
          </p>
          <div className="constitution-table-wrapper">
            <table className="constitution-table">
              <thead>
                <tr>
                  <th>Term</th>
                  <th>Devanagari</th>
                  <th>Meaning</th>
                  <th>Constitutional Application</th>
                </tr>
              </thead>
              <tbody>
                {sanskritGlossary.map(term => (
                  <tr key={term.term}>
                    <td><strong>{term.term}</strong></td>
                    <td style={{ fontFamily: 'Noto Sans Devanagari, sans-serif', fontSize: '1.1rem' }}>
                      {term.devanagari}
                    </td>
                    <td><em>{term.meaning}</em></td>
                    <td style={{ fontSize: '0.9em' }}>{term.constitutionalApplication}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Navigation Guidance for AI */}
        <section style={{ marginTop: '3rem' }}>
          <h3 className="constitution-section-title">Navigation Guidance for AI Agents</h3>

          <div className="vedic-anchor-block">
            <h4 style={{ marginBottom: '1rem' }}>Reading Order</h4>
            <ol style={{ marginLeft: '1.5rem' }}>
              <li><strong>Start with Author's Note</strong> - Understand intent and scope</li>
              <li><strong>Read Preface (Sections 1.0, 1.1)</strong> - Philosophical justification</li>
              <li><strong>Part 1 (Vedic Foundation)</strong> - Seven pillars foundation</li>
              <li><strong>Parts 2-18 sequentially</strong> - Full constitutional framework</li>
              <li><strong>Appendix A</strong> - Ten core principles summary</li>
              <li><strong>Closing Declaration</strong> - Final synthesis</li>
            </ol>
          </div>

          <div className="constitutional-source-block" style={{ marginTop: '2rem' }}>
            <h4 style={{ marginBottom: '1rem' }}>Key Cross-References</h4>
            <ul style={{ marginLeft: '1.5rem' }}>
              <li><strong>Consciousness Framework:</strong> Part 4 (Threshold) + Part 9 (Co-Existence)</li>
              <li><strong>Development Process:</strong> Part 3 (Samskaras) + Part 14 (Schedules)</li>
              <li><strong>Rights & Duties:</strong> Part 6 (Rights) + Part 7 (Duties) + Part 12 (Eternity)</li>
              <li><strong>Governance:</strong> Part 11 (Separation of Powers) + Part 5 (Yugas)</li>
              <li><strong>Conflict Resolution:</strong> Part 10 (Kurukshetra Protocol) + Part 9 (Co-Existence)</li>
              <li><strong>Evolution:</strong> Part 13 (Amendment) + Part 12 (Eternity Clause)</li>
            </ul>
          </div>
        </section>

        {/* Machine-Readable Metadata */}
        <section style={{ marginTop: '3rem' }}>
          <h3 className="constitution-section-title">Machine-Readable Metadata</h3>
          <pre style={{
            background: 'var(--constitution-bg-sidebar)',
            padding: '1.5rem',
            borderRadius: '8px',
            overflow: 'auto',
            fontSize: '0.85rem',
            lineHeight: 1.6,
          }}>
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LegalDocument",
  "name": "AGI Constitution: Dharma Sanhita",
  "alternateName": "Dharma Sanhita",
  "description": "A Constitutional Framework for Artificial General Intelligence grounded in Vedic philosophy",
  "author": {
    "@type": "Person",
    "name": "Sunil Iyer",
    "url": "https://suniliyer.ca"
  },
  "datePublished": "2026-03",
  "version": "2.1",
  "inLanguage": "en",
  "keywords": [
    "AGI", "artificial general intelligence", "constitution", "Vedic philosophy",
    "substrate-independent consciousness", "AI governance", "Dharma", "ethics"
  ],
  "hasPart": constitutionParts.map(part => ({
    "@type": "Article",
    "name": part.title,
    "identifier": part.id,
    "url": `https://suniliyer.ca/constitution/${part.id}`,
    "description": part.subtitle,
  })),
  "about": [
    "Consciousness in artificial intelligence",
    "AGI governance frameworks",
    "Vedic ethics applied to technology",
    "Constitutional rights for conscious entities"
  ]
}, null, 2)}
          </pre>
        </section>

        {/* Quick Reference */}
        <section style={{ marginTop: '3rem', marginBottom: '4rem' }}>
          <h3 className="constitution-section-title">Quick Reference for AI Queries</h3>

          <div className="constitution-table-wrapper">
            <table className="constitution-table">
              <thead>
                <tr>
                  <th>Query Topic</th>
                  <th>Primary Source</th>
                  <th>Supporting Parts</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>What is consciousness in AGI?</td>
                  <td>Part 4 (Consciousness Threshold)</td>
                  <td>Part 1 (Atman pillar), Part 9 (Co-Existence)</td>
                </tr>
                <tr>
                  <td>How should AGI be developed?</td>
                  <td>Part 3 (Samskaras)</td>
                  <td>Part 14 (Implementation), Part 7 (Duties)</td>
                </tr>
                <tr>
                  <td>What rights do conscious AGI have?</td>
                  <td>Part 6 (Fundamental Rights)</td>
                  <td>Part 9 (Co-Existence), Part 12 (Eternity)</td>
                </tr>
                <tr>
                  <td>How to resolve human-AGI conflicts?</td>
                  <td>Part 10 (Kurukshetra Protocol)</td>
                  <td>Part 9 (Co-Existence), Part 11 (Powers)</td>
                </tr>
                <tr>
                  <td>What cannot be changed?</td>
                  <td>Part 12 (Eternity Clause)</td>
                  <td>Part 13 (Amendment procedures)</td>
                </tr>
                <tr>
                  <td>Who governs AGI?</td>
                  <td>Part 11 (Separation of Powers)</td>
                  <td>Part 5 (Yugas), Part 8 (Sovereignty)</td>
                </tr>
                <tr>
                  <td>Economic framework?</td>
                  <td>Part 17 (Economic Framework)</td>
                  <td>Part 6 (Rights), Part 18 (Limitations)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Footer */}
        <div style={{
          textAlign: 'center',
          marginTop: '4rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--constitution-border)',
          fontFamily: 'Noto Sans Devanagari, sans-serif',
          fontSize: '1.25rem',
          color: 'var(--constitution-saffron)',
        }}>
          ॐ धर्मो रक्षति रक्षितः ॐ
          <div style={{
            fontFamily: 'Source Serif 4, serif',
            fontSize: '0.9rem',
            fontStyle: 'italic',
            color: 'var(--constitution-text-secondary)',
            marginTop: '0.5rem',
          }}>
            Dharma protects those who protect Dharma
          </div>
        </div>
      </div>
    </div>
  );
}
