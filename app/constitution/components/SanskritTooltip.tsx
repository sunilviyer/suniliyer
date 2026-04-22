'use client';

import React, { useState, useRef, useEffect } from 'react';
import { getTermByName, type SanskritTerm } from '../data/sanskrit-glossary';

interface SanskritTooltipProps {
  term: string;
  children: React.ReactNode;
  onOpenPanel?: (term: SanskritTerm) => void;
}

/**
 * Interactive Sanskrit term with hover card
 * Based on Claude Design prototype - warm & sacred aesthetic
 */
export default function SanskritTooltip({ term, children, onOpenPanel }: SanskritTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const spanRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const termData = getTermByName(term);

  useEffect(() => {
    if (isVisible && spanRef.current && tooltipRef.current) {
      const spanRect = spanRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;

      // Position below the term, centered
      let left = spanRect.left + scrollX + spanRect.width / 2 - tooltipRect.width / 2;
      let top = spanRect.bottom + scrollY + 8; // 8px gap below term

      // Keep tooltip on screen horizontally
      const rightEdge = left + tooltipRect.width;
      const viewportWidth = window.innerWidth;
      if (rightEdge > viewportWidth - 20) {
        left = viewportWidth - tooltipRect.width - 20 + scrollX;
      }
      if (left < 20 + scrollX) {
        left = 20 + scrollX;
      }

      // If tooltip would go below viewport, show above instead
      const bottomEdge = spanRect.bottom + tooltipRect.height + 8;
      if (bottomEdge > window.innerHeight + scrollY) {
        top = spanRect.top + scrollY - tooltipRect.height - 8;
      }

      setPosition({ top, left });
    }
  }, [isVisible]);

  const handleClick = () => {
    if (termData && onOpenPanel) {
      onOpenPanel(termData);
    }
  };

  if (!termData) {
    return <span className="constitution-sanskrit">{children}</span>;
  }

  return (
    <>
      <span
        ref={spanRef}
        className="sanskrit-inline"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={handleClick}
      >
        {children}
      </span>

      {isVisible && (
        <div
          ref={tooltipRef}
          className="sk-popover is-visible"
          style={{
            position: 'absolute',
            top: `${position.top}px`,
            left: `${position.left}px`,
          }}
        >
          <div className="sk-pop-head">
            <div className="sk-pop-term">{termData.term}</div>
            <div className="sk-pop-dev">{termData.devanagari}</div>
          </div>
          <div className="sk-pop-mean">{termData.meaning}</div>
          <div className="sk-pop-use">{termData.constitutionalApplication}</div>
        </div>
      )}
    </>
  );
}

