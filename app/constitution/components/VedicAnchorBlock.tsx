'use client';

import React from 'react';
import CollapsibleAnchor from './CollapsibleAnchor';

interface VedicAnchorBlockProps {
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

/**
 * Collapsible gold-bordered callout for Vedic philosophical principles
 * Used throughout the Constitution to ground each section in Vedic teaching
 */
export default function VedicAnchorBlock({ children, defaultExpanded = false }: VedicAnchorBlockProps) {
  return (
    <CollapsibleAnchor flavor="vedic" defaultExpanded={defaultExpanded}>
      {children}
    </CollapsibleAnchor>
  );
}
