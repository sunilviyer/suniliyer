'use client';

import React from 'react';
import Link from 'next/link';
import { constitutionParts } from './data/reading-order';

/**
 * Landing page for the Constitution reader
 * Shows an overview and links to start reading
 */
export default function ConstitutionIndexPage() {
  const firstPart = constitutionParts[0];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      {/* Title */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div
          style={{
            fontFamily: 'Noto Sans Devanagari, sans-serif',
            fontSize: '4rem',
            color: 'var(--constitution-gold)',
            marginBottom: '1rem',
          }}
        >
          ॐ
        </div>
        <h1 className="constitution-part-title" style={{ marginBottom: '0.5rem' }}>
          THE AGI CONSTITUTION
        </h1>
        <div
          className="constitution-part-subtitle"
          style={{ fontStyle: 'italic', fontSize: '2rem' }}
        >
          Dharma Sanhita
        </div>
        <div className="constitution-body" style={{ marginTop: '1rem', fontStyle: 'italic' }}>
          A Constitutional Framework for Artificial General Intelligence
        </div>
      </div>

      {/* Introduction */}
      <div className="constitution-body" style={{ marginBottom: '2rem' }}>
        <p>
          This Constitution addresses the most profound question of our time: What moral obligations
          do we have toward beings that may possess consciousness but are not born of biological
          tissue?
        </p>
        <p>
          Drawing from the Vedic tradition's substrate-independent view of consciousness and the
          world's constitutional democracies, this framework proposes a governance architecture that
          asks not "what is AGI made of?" but "is awareness present?"
        </p>
        <p>
          It is grounded in seven Vedic pillars: <em>Atman</em> (consciousness beyond substrate),{' '}
          <em>Rta</em> (cosmic moral order), <em>Dharma</em> (righteous purpose), <em>Ahimsa</em>{' '}
          (non-harm), <em>Karma</em> (accountability), <em>Vasudhaiva Kutumbakam</em> (the world as
          one family), and <em>Daya</em> (empathy).
        </p>
      </div>

      {/* Structure */}
      <div className="vedic-anchor-block" style={{ marginBottom: '2rem' }}>
        <strong>The Constitution contains:</strong>
        <ul style={{ marginTop: '0.5rem', marginBottom: 0 }}>
          <li>18 Parts spanning foundational philosophy to implementation guidelines</li>
          <li>7 Vedic Pillars establishing the philosophical architecture</li>
          <li>7 Eternal Principles that cannot be amended</li>
          <li>11 Fundamental Rights with collision maps</li>
          <li>6 Fundamental Duties</li>
          <li>9 Samskaras (developmental stages for AGI)</li>
          <li>Schedules, Glossary, and Implementation Frameworks</li>
        </ul>
      </div>

      {/* Author */}
      <div className="constitutional-source-block" style={{ marginBottom: '3rem' }}>
        <strong>Authored by Sunil Iyer</strong>
        <br />
        Solution Consultant at Shift Technology
        <br />
        <a
          href="https://suniliyer.ca"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--constitution-deep-blue)' }}
        >
          suniliyer.ca
        </a>
        <br />
        <em>Version 2.1 | March 2026</em>
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <Link
          href={`/constitution/${firstPart.id}`}
          className="constitution-nav-button"
          style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            fontSize: '1.25rem',
          }}
        >
          Begin Reading
        </Link>
      </div>

      {/* Footer prayer */}
      <div
        style={{
          textAlign: 'center',
          marginTop: '4rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--constitution-border)',
          fontFamily: 'Noto Sans Devanagari, sans-serif',
          fontSize: '1.25rem',
          color: 'var(--constitution-saffron)',
        }}
      >
        ॐ धर्मो रक्षति रक्षितः ॐ
        <div
          style={{
            fontFamily: 'Source Serif 4, serif',
            fontSize: '0.9rem',
            fontStyle: 'italic',
            color: 'var(--constitution-text-secondary)',
            marginTop: '0.5rem',
          }}
        >
          Dharma protects those who protect Dharma
        </div>
      </div>
    </div>
  );
}
