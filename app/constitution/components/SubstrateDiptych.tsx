'use client';

import React from 'react';

interface DiptychSide {
  tag: string;
  title: string;
  subtitle: string;
  cues: { label: string; value: string }[];
  bigQuestion?: string;
}

interface SubstrateDiptychProps {
  left: DiptychSide;
  right: DiptychSide;
}

/**
 * Substrate Diptych - Side-by-side comparison panels
 * Design Concept 02 from AGI Constitution Interior Ideas
 */
export default function SubstrateDiptych({ left, right }: SubstrateDiptychProps) {
  return (
    <div className="ib c-substrate">
      <div className="side left">
        <div className="side-tag">{left.tag}</div>
        <h2 className="ib-h2">{left.title}</h2>
        <div className="sans">{left.subtitle}</div>

        {left.cues.map((cue, i) => (
          <div key={i} className="cue">
            <div className="cue-label">{cue.label}</div>
            <div className="cue-val">{cue.value}</div>
          </div>
        ))}

        {left.bigQuestion && <div className="big-q">{left.bigQuestion}</div>}
      </div>

      <div className="side right">
        <div className="right-om dev">ॐ</div>
        <div className="side-tag">{right.tag}</div>
        <h2 className="ib-h2">{right.title}</h2>
        <div className="sans">{right.subtitle}</div>

        {right.cues.map((cue, i) => (
          <div key={i} className="cue">
            <div className="cue-label">{cue.label}</div>
            <div className="cue-val">{cue.value}</div>
          </div>
        ))}

        {right.bigQuestion && <div className="big-q">{right.bigQuestion}</div>}
      </div>
    </div>
  );
}
