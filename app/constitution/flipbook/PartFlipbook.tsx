'use client';

/**
 * Renders the flipbook for one Constitution part.
 * Parts I and III have bespoke designed spreads from the design handoff;
 * every other part gets a generated book paginated from its markdown.
 */

import React, { useMemo } from 'react';
import Flipbook, { type PartNavLink } from './Flipbook';
import MarkdownBook from './MarkdownBook';
import { PartIPages, type FaceComponent } from './pages-part1';
import { PartIIIPages } from './pages-part3';
import type { ConstitutionPart } from '../data/reading-order';
import { partLabel } from './labels';

interface PartFlipbookProps {
  part: ConstitutionPart;
  prev: ConstitutionPart | null;
  next: ConstitutionPart | null;
  markdown: string;
}

const BESPOKE_FACES: Record<string, Array<FaceComponent | null>> = {
  'part-1': [
    PartIPages.Cover,            PartIPages.Frontispiece,
    PartIPages.NachiketaText,    PartIPages.NachiketaPlate,
    PartIPages.SubstrateText,    PartIPages.SubstratePlate,
    PartIPages.SevenPillarsText, PartIPages.SevenPillarsPlate,
    PartIPages.GitaText,         PartIPages.GitaPlate,
    PartIPages.ArchText,         PartIPages.ArchPlate,
    PartIPages.ChainText,        PartIPages.ChainPlate,
    PartIPages.WheelText,        PartIPages.WheelPlate,
    PartIPages.PartIBack,        PartIPages.PartIColophon,
  ],
  'part-3': [
    PartIIIPages.Cover,         PartIIIPages.Frontispiece,
    PartIIIPages.EkalavyaText,  PartIIIPages.EkalavyaPlate,
    PartIIIPages.NineText,      PartIIIPages.NinePlate,
    PartIIIPages.DRAText,       PartIIIPages.DRAPlate,
    PartIIIPages.PuruText,      PartIIIPages.PuruPlate,
    PartIIIPages.GunaText,      PartIIIPages.GunaPlate,
    PartIIIPages.TapasText,     PartIIIPages.TapasPlate,
    PartIIIPages.YajnaText,     PartIIIPages.YajnaPlate,
    PartIIIPages.BackHalfTitle, PartIIIPages.BackColophon,
  ],
};

export default function PartFlipbook({ part, prev, next, markdown }: PartFlipbookProps) {
  const bespoke = BESPOKE_FACES[part.id];

  const prevLink: PartNavLink | null = useMemo(
    () => prev ? { href: `/constitution/${prev.id}`, label: partLabel(prev), title: prev.title } : null,
    [prev]
  );
  const nextLink: PartNavLink | null = useMemo(
    () => next ? { href: `/constitution/${next.id}`, label: partLabel(next), title: next.title } : null,
    [next]
  );

  if (bespoke) {
    return (
      <Flipbook
        faces={bespoke}
        title={part.title}
        subLabel={`Dharma Sanhita · ${partLabel(part)}`}
        prev={prevLink}
        next={nextLink}
        storageKey={`fb-sp-${part.id}`}
      />
    );
  }

  return <MarkdownBook part={part} prev={prev} next={next} markdown={markdown} />;
}
