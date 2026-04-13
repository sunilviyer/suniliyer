'use client';

import React, { useState } from 'react';
import { getTermByName, type SanskritTerm } from '../data/sanskrit-glossary';

interface SanskritTooltipProps {
  term: string;
  children: React.ReactNode;
  onOpenPanel?: (term: SanskritTerm) => void;
}

/**
 * Interactive Sanskrit term with tooltip on hover and panel on click
 * Renders Sanskrit terms in saffron color with dotted underline
 */
export default function SanskritTooltip({ term, children, onOpenPanel }: SanskritTooltipProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const termData = getTermByName(term);

  const handleClick = () => {
    if (termData && onOpenPanel) {
      onOpenPanel(termData);
    }
  };

  if (!termData) {
    return <span className="constitution-sanskrit">{children}</span>;
  }

  return (
    <span
      className="constitution-sanskrit"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onClick={handleClick}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      {children}
      {showTooltip && (
        <span
          style={{
            position: 'absolute',
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'var(--constitution-charcoal)',
            color: '#fff',
            padding: '0.5rem 0.75rem',
            borderRadius: '4px',
            fontSize: '0.875rem',
            whiteSpace: 'nowrap',
            zIndex: 100,
            marginBottom: '0.25rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          }}
        >
          <div style={{ fontFamily: 'Noto Sans Devanagari, sans-serif', marginBottom: '0.25rem' }}>
            {termData.devanagari}
          </div>
          <div style={{ fontStyle: 'italic', fontSize: '0.8rem' }}>
            {termData.meaning}
          </div>
        </span>
      )}
    </span>
  );
}
