'use client';

import React from 'react';

interface VedicAnchorBlockProps {
  children: React.ReactNode;
}

/**
 * Gold-bordered callout for Vedic philosophical principles
 * Used throughout the Constitution to ground each section in Vedic teaching
 */
export default function VedicAnchorBlock({ children }: VedicAnchorBlockProps) {
  return (
    <div className="vedic-anchor-block">
      {children}
    </div>
  );
}
