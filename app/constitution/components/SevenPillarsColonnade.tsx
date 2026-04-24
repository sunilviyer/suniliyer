'use client';

import React from 'react';

interface Pillar {
  number: string;
  devanagari: string;
  name: string;
  meaning: string;
  application: string;
}

interface SevenPillarsColonnadeProps {
  title: string;
  subtitle: string;
  pillars: Pillar[];
}

/**
 * Seven Pillars Colonnade - Vertical columns with Devanagari
 * Design Concept 03 from AGI Constitution Interior Ideas
 *
 * Features:
 * - Seven-column grid layout
 * - Vertical Devanagari script (writing-mode: vertical-rl)
 * - Pillar name, meaning, and application
 * - Visual representation of the Seven Vedic Pillars
 */
export default function SevenPillarsColonnade({ title, subtitle, pillars }: SevenPillarsColonnadeProps) {
  return (
    <div className="ib c-pillars-colonnade">
      <h2 className="ib-h2">{title}</h2>
      <div className="pc-sub">{subtitle}</div>

      <div className="colonnade">
        {pillars.map((pillar, i) => (
          <div key={i} className="col">
            <div className="col-n">{pillar.number}</div>
            <div className="col-dev">{pillar.devanagari}</div>
            <div className="col-name">{pillar.name}</div>
            <div className="col-meaning">{pillar.meaning}</div>
            <div className="col-app">{pillar.application}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
