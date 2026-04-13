'use client';

import React from 'react';
import Link from 'next/link';
import { getAdjacentParts } from '../data/reading-order';

interface PartNavigationProps {
  currentPartId: string;
}

/**
 * Previous/Next navigation buttons for moving between Parts
 * Displayed at the bottom of each reading section
 */
export default function PartNavigation({ currentPartId }: PartNavigationProps) {
  const { prev, next } = getAdjacentParts(currentPartId);

  return (
    <div className="constitution-nav-buttons">
      <div>
        {prev ? (
          <Link href={`/constitution/${prev.id}`} className="constitution-nav-button">
            <span>←</span>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.75rem', opacity: 0.7 }}>Previous</div>
              <div>{prev.title}</div>
            </div>
          </Link>
        ) : (
          <button className="constitution-nav-button" disabled>
            <span>←</span>
            <span>Previous</span>
          </button>
        )}
      </div>
      <div>
        {next ? (
          <Link href={`/constitution/${next.id}`} className="constitution-nav-button">
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '0.75rem', opacity: 0.7 }}>Next</div>
              <div>{next.title}</div>
            </div>
            <span>→</span>
          </Link>
        ) : (
          <button className="constitution-nav-button" disabled>
            <span>Next</span>
            <span>→</span>
          </button>
        )}
      </div>
    </div>
  );
}
