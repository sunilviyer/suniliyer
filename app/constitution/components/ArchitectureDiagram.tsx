'use client';

import React from 'react';

interface Layer {
  id: 'rta' | 'dharma' | 'karma';
  devanagari: string;
  name: string;
  subtitle: string;
  description: string;
  tag: string;
  tagNumber: string;
}

interface ArchitectureDiagramProps {
  title: string;
  description: string[];
  legend?: string;
  layers: Layer[];
}

/**
 * Architecture Diagram - Three-layer stack (Rta/Dharma/Karma)
 * Design Concept 05 from AGI Constitution Interior Ideas
 *
 * Features:
 * - Left column: title, description, legend
 * - Right column: three stacked layers
 * - Each layer: Devanagari, name, subtitle, description, tag
 * - Color-coded borders (saffron, gold, deep-blue)
 */
export default function ArchitectureDiagram({ title, description, legend, layers }: ArchitectureDiagramProps) {
  return (
    <div className="ib c-arch">
      <div className="arch-l">
        <h2>{title}</h2>
        {description.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        {legend && <div className="legend">{legend}</div>}
      </div>

      <div className="arch-r">
        {layers.map((layer, i) => (
          <div key={i} className={`layer ${layer.id}`}>
            <div className="layer-dev">{layer.devanagari}</div>
            <div>
              <div className="layer-sub">{layer.subtitle}</div>
              <div className="layer-name">{layer.name}</div>
              <div className="layer-desc">{layer.description}</div>
            </div>
            <div className="layer-tag">
              <strong>{layer.tagNumber}</strong>
              {layer.tag}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
