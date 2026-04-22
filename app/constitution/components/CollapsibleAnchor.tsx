'use client';

import React, { useState } from 'react';

interface CollapsibleAnchorProps {
  flavor: 'vedic' | 'source';
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

/**
 * Collapsible container for Vedic anchors and constitutional sources
 * Used in article pages to display philosophical grounding and legal precedents
 */
export default function CollapsibleAnchor({
  flavor,
  children,
  defaultExpanded = false
}: CollapsibleAnchorProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const label = flavor === 'vedic'
    ? 'Vedic Anchor'
    : 'Constitutional Source';

  const icon = flavor === 'vedic'
    ? '🕉️'
    : '⚖️';

  return (
    <div className={`anchor-container anchor-${flavor}`}>
      <button
        className="anchor-toggle"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${label}`}
      >
        <span className="anchor-icon">{icon}</span>
        <span className="anchor-label">{label}</span>
        <span className={`anchor-chevron ${isExpanded ? 'is-expanded' : ''}`}>
          ›
        </span>
      </button>

      {isExpanded && (
        <div className="anchor-content">
          {children}
        </div>
      )}
    </div>
  );
}
