'use client';

import React from 'react';
import CollapsibleAnchor from './CollapsibleAnchor';

interface ConstitutionalSourceProps {
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

/**
 * Collapsible slate-bordered callout for constitutional precedents
 * References specific articles/amendments from existing constitutions
 */
export default function ConstitutionalSource({ children, defaultExpanded = false }: ConstitutionalSourceProps) {
  return (
    <CollapsibleAnchor flavor="source" defaultExpanded={defaultExpanded}>
      {children}
    </CollapsibleAnchor>
  );
}
