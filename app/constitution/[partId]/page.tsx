import React from 'react';
import { notFound } from 'next/navigation';
import { constitutionParts, getPartById, getAdjacentParts } from '../data/reading-order';
import { loadPartContent } from '../utils/content-loader';
import PartFlipbook from '../flipbook/PartFlipbook';
import { JsonLd } from '@/components/seo/JsonLd';
import { getArticleSchema, getBreadcrumbSchema } from '@/lib/schema';
import { getConstitutionSocialMeta } from '@/lib/social-meta';
import { partLabel } from '../flipbook/labels';

interface PageProps {
  params: Promise<{
    partId: string;
  }>;
}

/**
 * Generate static params for all constitution articles
 */
export async function generateStaticParams() {
  return constitutionParts.map((part) => ({
    partId: part.id,
  }));
}

/**
 * Generate metadata for each article with social media tags
 */
export async function generateMetadata({ params }: PageProps) {
  const { partId } = await params;
  const part = getPartById(partId);

  if (!part) {
    return {
      title: 'Article Not Found | AGI Constitution',
    };
  }

  const label = partLabel(part);
  const title = label === part.title ? part.title : `${label}: ${part.title}`;
  const description = part.subtitle || `${part.title}, from The AGI Constitution: Dharma Sanhita`;

  return getConstitutionSocialMeta({
    title,
    description,
    partId,
  });
}

/**
 * Dynamic route for each constitution article, rendered as an
 * interactive flipbook paginated from the article's markdown.
 */
export default async function ConstitutionPartPage({ params }: PageProps) {
  const { partId } = await params;
  const part = getPartById(partId);

  if (!part) {
    notFound();
  }

  const content = await loadPartContent(partId);

  if (!content) {
    notFound();
  }

  const { prev, next } = getAdjacentParts(partId);

  const label = partLabel(part);
  const title = label === part.title ? part.title : `${label}: ${part.title}`;
  const description = part.subtitle || `${part.title}, from The AGI Constitution: Dharma Sanhita`;

  const articleSchema = getArticleSchema({
    title,
    description,
    slug: partId,
    path: 'constitution',
    datePublished: '2026-07-01T00:00:00Z',
    dateModified: '2026-07-01T00:00:00Z',
    image: part.image || '/images/constitution/dharma-sanhita.webp',
    readTime: '15 min',
    tags: ['AGI Governance', 'AI Ethics', 'Constitutional Framework', 'Vedic Philosophy']
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'AGI Constitution', url: '/constitution' },
    { name: title, url: `/constitution/${partId}` }
  ]);

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <PartFlipbook part={part} prev={prev} next={next} markdown={content} />
    </>
  );
}
