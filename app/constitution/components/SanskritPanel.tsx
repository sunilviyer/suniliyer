'use client';

import React, { useEffect, useRef } from 'react';
import { sanskritGlossary, type SanskritTerm } from '../data/sanskrit-glossary';

interface SanskritPanelProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTerm?: SanskritTerm | null;
}

/**
 * Collapsible reference panel showing the full Sanskrit glossary
 * Opens when a Sanskrit term is clicked
 * Scrolls to the selected term when provided
 */
export default function SanskritPanel({ isOpen, onClose, selectedTerm }: SanskritPanelProps) {
  const selectedTermRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && selectedTerm && selectedTermRef.current) {
      setTimeout(() => {
        selectedTermRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  }, [isOpen, selectedTerm]);

  return (
    <div className={`sanskrit-panel ${isOpen ? 'open' : ''}`}>
      <div className="sanskrit-panel-header">
        <h3 className="sanskrit-panel-title">Sanskrit Glossary</h3>
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--constitution-text-primary)',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '0.25rem 0.5rem',
          }}
          aria-label="Close glossary"
        >
          ×
        </button>
      </div>
      <div className="sanskrit-panel-content">
        {sanskritGlossary.map((term) => (
          <div
            key={term.term}
            className="sanskrit-term-entry"
            ref={selectedTerm?.term === term.term ? selectedTermRef : null}
            style={{
              backgroundColor:
                selectedTerm?.term === term.term
                  ? 'var(--constitution-active-bg)'
                  : 'transparent',
              padding: selectedTerm?.term === term.term ? '1rem' : '0',
              borderRadius: selectedTerm?.term === term.term ? '4px' : '0',
              transition: 'all 0.3s ease',
            }}
          >
            <div className="sanskrit-term-header">
              <span className="sanskrit-term-roman">{term.term}</span>
              <span className="sanskrit-term-devanagari">{term.devanagari}</span>
            </div>
            <div className="sanskrit-term-meaning">{term.meaning}</div>
            <div className="sanskrit-term-application">{term.constitutionalApplication}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
