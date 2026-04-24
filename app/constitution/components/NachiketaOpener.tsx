'use client';

import React from 'react';

interface NachiketaOpenerProps {
  partNumber?: string;
  title: string;
  subtitle?: string;
  vedicStory?: string;
  devanagari?: string;
  quote?: string;
  quoteCitation?: string;
  boons?: {
    number: string;
    label: string;
    text: string;
    isThird?: boolean;
  }[];
}

/**
 * Nachiketa Opener - Part opener with Vedic story structure
 * Design Concept 01 from AGI Constitution Interior Ideas
 *
 * Features:
 * - Giant OM watermark in Devanagari
 * - Two-column layout: main content + boons sidebar
 * - Vedic story integration (Nachiketa and Yama)
 * - Three boons structure with special highlighting for third boon
 * - Pull quote with citation
 */
export default function NachiketaOpener({
  partNumber,
  title,
  subtitle,
  vedicStory,
  devanagari = 'नचिकेतस् · यम',
  quote,
  quoteCitation,
  boons = []
}: NachiketaOpenerProps) {
  return (
    <div className="ib c-nachi">
      {/* Giant OM watermark */}
      <div className="nachi-om dev">ॐ</div>

      {/* Left column: Main content */}
      <div className="nachi-l">
        {/* Part designation */}
        <div className="nachi-part">
          {partNumber && (
            <>
              {partNumber} · <span className="dev">भाग {partNumber.replace('Part ', '')}</span> · The Story of {partNumber}
            </>
          )}
        </div>

        {/* Title with subtitle */}
        <h1 className="nachi-title">
          {title}
          {subtitle && <em>{subtitle}</em>}
        </h1>

        {/* Devanagari story reference */}
        {devanagari && (
          <div className="nachi-dev">{devanagari}</div>
        )}

        {/* Pull quote */}
        {quote && (
          <blockquote className="nachi-quote">
            {quote}
            {quoteCitation && <cite>{quoteCitation}</cite>}
          </blockquote>
        )}
      </div>

      {/* Right column: Three boons */}
      {boons.length > 0 && (
        <div className="nachi-r">
          {boons.map((boon, index) => (
            <div key={index} className={`boon ${boon.isThird ? 'is-third' : ''}`}>
              <div className="boon-n">{boon.number}</div>
              <div>
                <div className="boon-label">{boon.label}</div>
                <div className="boon-text">{boon.text}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
