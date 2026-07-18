'use client';

/**
 * Renders the flipbook for one Constitution article.
 * All 33 articles are generated books paginated from their markdown.
 * (The old bespoke Part I / Part III designed books were retired with the
 * old draft; their source remains in pages-part1.tsx / pages-part3.tsx.)
 */

import React from 'react';
import MarkdownBook from './MarkdownBook';
import type { ConstitutionPart } from '../data/reading-order';

interface PartFlipbookProps {
  part: ConstitutionPart;
  prev: ConstitutionPart | null;
  next: ConstitutionPart | null;
  markdown: string;
}

export default function PartFlipbook({ part, prev, next, markdown }: PartFlipbookProps) {
  return <MarkdownBook part={part} prev={prev} next={next} markdown={markdown} />;
}
