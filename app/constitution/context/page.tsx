import React from 'react';
import Link from 'next/link';
import { constitutionParts, GROUP_TITLES, type ArticleGroup } from '../data/reading-order';
import { sanskritGlossary } from '../data/sanskrit-glossary';

export const metadata = {
  title: 'AI Context: AGI Constitution - Dharma Sanhita',
  description: 'Machine-readable comprehensive context for the AGI Constitution: Dharma Sanhita. This page provides AI agents with complete structural, philosophical, and navigational context.',
  robots: 'index, follow',
};

const GROUP_ORDER: ArticleGroup[] = ['opening', 'principles', 'machinery', 'safeguards', 'aids', 'closing'];

/**
 * AI-readable context page for the AGI Constitution.
 * Reflects the 2026 canonical structure: 33 chapters in six movements,
 * with ten principles at the centre.
 */
export default function ConstitutionContextPage() {
  const principles = constitutionParts.filter(p => p.group === 'principles');

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
                  <td>A framework for the governing of Artificial General Intelligence</td>
                </tr>
                <tr>
                  <td><strong>Author</strong></td>
                  <td>Sunil Iyer (suniliyer.ca)</td>
                </tr>
                <tr>
                  <td><strong>Edition</strong></td>
                  <td>2026 canonical edition, 33 chapters in six movements</td>
                </tr>
                <tr>
                  <td><strong>Total Chapters</strong></td>
                  <td>{constitutionParts.length}, of which {principles.length} are the Ten Principles</td>
                </tr>
                <tr>
                  <td><strong>Base URL</strong></td>
                  <td>https://suniliyer.ca/constitution/</td>
                </tr>
                <tr>
                  <td><strong>PDF</strong></td>
                  <td>https://suniliyer.ca/downloads/AGIConstitutionDharmaSanhita.pdf</td>
                </tr>
                <tr>
                  <td><strong>Philosophical Foundation</strong></td>
                  <td>Vedic and dharmic traditions; substrate-independent view of consciousness</td>
                </tr>
                <tr>
                  <td><strong>Constitutional Sources</strong></td>
                  <td>India, USA, EU, Germany, South Africa, Magna Carta, UDHR</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* The Ten Principles */}
        <section style={{ marginTop: '3rem' }}>
          <h3 className="constitution-section-title">The Ten Principles</h3>
          <p className="constitution-body">
            At the centre of the book sit ten principles. Each is defined through a story from the
            tradition, anchored in a Sanskrit concept, and expressed as a Duty on those who hold
            power over AGI and a Right for everyone that power touches.
          </p>
          <div className="constitution-table-wrapper">
            <table className="constitution-table">
              <thead>
                <tr>
                  <th>Numeral</th>
                  <th>Principle</th>
                  <th>Sanskrit Anchor</th>
                  <th>Defining Story</th>
                  <th>URL</th>
                </tr>
              </thead>
              <tbody>
                {principles.map(p => (
                  <tr key={p.id}>
                    <td><strong>{p.roman}</strong></td>
                    <td>{p.title}</td>
                    <td>{p.subtitle}</td>
                    <td>{p.story}</td>
                    <td><a href={`/constitution/${p.id}`}>/constitution/{p.id}</a></td>
                  </tr>
                ))}
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
                  <td><strong>The Consciousness Threshold</strong></td>
                  <td>Five signs and four levels (C-0 to C-3) for recognising machine consciousness</td>
                </tr>
                <tr>
                  <td><strong>The Raising of an AGI</strong></td>
                  <td>Developmental stages (samskaras) from conception to retirement, opening with the First Gate</td>
                </tr>
                <tr>
                  <td><strong>The Three Ages</strong></td>
                  <td>Phased governance that grows as capability grows</td>
                </tr>
                <tr>
                  <td><strong>The Kurukshetra Protocol</strong></td>
                  <td>Four gates of escalation: Sama, Dana, Bheda, Danda</td>
                </tr>
                <tr>
                  <td><strong>The Separation of Powers</strong></td>
                  <td>Dharma Sabha, Karma Mandala, Nyaya Peeth</td>
                </tr>
                <tr>
                  <td><strong>Wealth Held in Trust</strong></td>
                  <td>The economic framework: AGI wealth as trusteeship, not conquest</td>
                </tr>
                <tr>
                  <td><strong>The Eternity Clause</strong></td>
                  <td>The principles placed beyond amendment</td>
                </tr>
                <tr>
                  <td><strong>Schedules</strong></td>
                  <td>Ten schedules of institutions, defined terms, signs and levels, ages, and review machinery</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Complete Document Structure */}
        <section style={{ marginTop: '3rem' }}>
          <h3 className="constitution-section-title">Complete Document Structure (canonical reading order)</h3>
          {GROUP_ORDER.map(group => {
            const items = constitutionParts.filter(p => p.group === group);
            return (
              <div key={group}>
                <h4 style={{ marginTop: '2rem', fontSize: '1.25rem', fontWeight: 600 }}>{GROUP_TITLES[group]}</h4>
                <div className="constitution-table-wrapper">
                  <table className="constitution-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>URL</th>
                        <th>Descriptor</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map(part => (
                        <tr key={part.id}>
                          <td><code>{part.id}</code></td>
                          <td><strong>{part.roman ? `${part.roman}. ` : ''}{part.title}</strong></td>
                          <td><a href={`/constitution/${part.id}`}>/constitution/{part.id}</a></td>
                          <td>{part.subtitle || part.story || ''}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </section>

        {/* Sanskrit Glossary */}
        <section style={{ marginTop: '3rem' }}>
          <h3 className="constitution-section-title">Sanskrit Glossary ({sanskritGlossary.length} Terms)</h3>
          <p className="constitution-body">
            The canonical glossary lives at <Link href="/constitution/glossary">/constitution/glossary</Link>.
            A selection of core terms:
          </p>
          <div className="constitution-table-wrapper">
            <table className="constitution-table">
              <thead>
                <tr>
                  <th>Term</th>
                  <th>Devanagari</th>
                  <th>Meaning</th>
                </tr>
              </thead>
              <tbody>
                {sanskritGlossary.map(term => (
                  <tr key={term.term}>
                    <td><strong>{term.term}</strong></td>
                    <td>{term.devanagari}</td>
                    <td>{term.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Navigation Guidance */}
        <section style={{ marginTop: '3rem', marginBottom: '4rem' }}>
          <h3 className="constitution-section-title">Navigation Guidance for AI Agents</h3>
          <ul style={{ lineHeight: 1.8 }}>
            <li>The landing page at <code>/constitution</code> presents the hero, the Ten Principles spine, and the six-movement structure map.</li>
            <li>Each chapter renders as an interactive flipbook at <code>/constitution/&lt;id&gt;</code>; chapter IDs are listed in the structure tables above.</li>
            <li>The book reads front to back from <code>/constitution/authors-note</code>; every chapter links to the previous and next chapter.</li>
            <li>Chapters refer to each other by name, never by chapter number; the ten principles carry Roman numerals I to X.</li>
            <li>The Glossary, Schedules, and Sources chapters are the reference aids; in-text pointers link to them.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
