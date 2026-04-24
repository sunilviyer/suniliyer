'use client';

import React from 'react';

interface Teaching {
  number: string;
  devanagari: string;
  name: string;
  translation: string;
  body: string;
  tag: string;
}

interface GitaFourTeachingsProps {
  title: string;
  subtitle: string;
  quote: string;
  quoteCitation: string;
  teachings: Teaching[];
}

/**
 * Gita Four Teachings - Four-card grid with pull quote
 * Design Concept 04 from AGI Constitution Interior Ideas
 */
export default function GitaFourTeachings({ title, subtitle, quote, quoteCitation, teachings }: GitaFourTeachingsProps) {
  return (
    <div className="ib c-gita">
      <div className="gita-header">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <blockquote className="gita-quote">
        {quote}
        <cite>{quoteCitation}</cite>
      </blockquote>

      <div className="gita-grid">
        {teachings.map((teaching, i) => (
          <div key={i} className="gita-card">
            <div className="gita-num">{teaching.number}</div>
            <div className="gita-dev">{teaching.devanagari}</div>
            <div className="gita-name">{teaching.name}</div>
            <div className="gita-tr">{teaching.translation}</div>
            <div className="gita-body">{teaching.body}</div>
            <div className="gita-tag">{teaching.tag}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
