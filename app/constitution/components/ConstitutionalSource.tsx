'use client';

import React from 'react';

interface ConstitutionalSourceProps {
  children: React.ReactNode;
}

/**
 * Slate-bordered callout for constitutional precedents
 * References specific articles/amendments from existing constitutions
 */
export default function ConstitutionalSource({ children }: ConstitutionalSourceProps) {
  return (
    <div className="constitutional-source-block">
      {children}
    </div>
  );
}
