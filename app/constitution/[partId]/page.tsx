import React from 'react';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { constitutionParts, getPartById } from '../data/reading-order';
import { loadPartContent } from '../utils/content-loader';
import PartNavigation from '../components/PartNavigation';
import VedicAnchorBlock from '../components/VedicAnchorBlock';
import ConstitutionalSource from '../components/ConstitutionalSource';
import TableRenderer from '../components/TableRenderer';
import { JsonLd } from '@/components/seo/JsonLd';
import { getArticleSchema, getBreadcrumbSchema } from '@/lib/schema';
import { getConstitutionSocialMeta } from '@/lib/social-meta';

interface PageProps {
  params: Promise<{
    partId: string;
  }>;
}

/**
 * Generate static params for all constitution parts
 */
export async function generateStaticParams() {
  return constitutionParts.map((part) => ({
    partId: part.id,
  }));
}

/**
 * Generate metadata for each part with social media tags
 */
export async function generateMetadata({ params }: PageProps) {
  const { partId } = await params;
  const part = getPartById(partId);

  if (!part) {
    return {
      title: 'Part Not Found | AGI Constitution',
    };
  }

  const title = part.number ? `Part ${part.number}: ${part.title}` : part.title;
  const description = part.subtitle || `${part.title} - AGI Constitution: Dharma Sanhita`;

  return getConstitutionSocialMeta({
    title,
    description,
    partId,
  });
}

/**
 * Dynamic route for each constitution part
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

  // Schema.org structured data
  const title = part.number ? `Part ${part.number}: ${part.title}` : part.title;
  const description = part.subtitle || `${part.title} - AGI Constitution: Dharma Sanhita`;

  const articleSchema = getArticleSchema({
    title,
    description,
    slug: partId,
    path: 'constitution',
    datePublished: '2026-03-01T00:00:00Z',
    dateModified: '2026-03-01T00:00:00Z',
    image: '/images/constitution/dharma-sanhita.webp',
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
      <article>
      {/* Part Header */}
      <header style={{ marginBottom: '2rem' }}>
        {part.number && (
          <div
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1rem',
              fontWeight: 600,
              color: 'var(--constitution-saffron)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '0.5rem',
            }}
          >
            {part.category === 'constitution' ? `Part ${part.number}` : `Section ${part.number}`}
          </div>
        )}
        <h1 className="constitution-part-title">{part.title}</h1>
        {part.subtitle && (
          <div className="constitution-part-subtitle">{part.subtitle}</div>
        )}
        {part.vedicStory && (
          <div
            style={{
              fontStyle: 'italic',
              color: 'var(--constitution-text-secondary)',
              marginTop: '0.5rem',
            }}
          >
            Story: {part.vedicStory}
          </div>
        )}
      </header>

      {/* Content */}
      <div className="constitution-body">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            // Custom renderers for special blocks
            blockquote({ children }) {
              const text = String(children);

              // Check if this is a Vedic Anchor (starts with italic text mentioning "Vedic")
              if (text.includes('Vedic Anchor') || text.includes('The ') && text.includes(' teaches')) {
                return <VedicAnchorBlock>{children}</VedicAnchorBlock>;
              }

              // Check if this is a Constitutional Source
              if (text.includes('Constitution') || text.includes('Article') || text.includes('Amendment')) {
                return <ConstitutionalSource>{children}</ConstitutionalSource>;
              }

              // Default blockquote
              return <blockquote style={{ borderLeft: '3px solid var(--constitution-border)', paddingLeft: '1rem', fontStyle: 'italic' }}>{children}</blockquote>;
            },

            // Headings
            h1({ children }) {
              return <h1 className="constitution-part-title" style={{ marginTop: '2.5rem' }}>{children}</h1>;
            },
            h2({ children }) {
              return <h2 className="constitution-section-title">{children}</h2>;
            },
            h3({ children }) {
              return <h3 className="constitution-section-title" style={{ fontSize: '1.5rem' }}>{children}</h3>;
            },

            // Paragraphs
            p({ children }) {
              return <p className="constitution-body">{children}</p>;
            },

            // Tables
            table({ children }) {
              return (
                <div className="constitution-table-wrapper">
                  <table className="constitution-table">{children}</table>
                </div>
              );
            },

            // Strong (bold) text
            strong({ children }) {
              return <strong style={{ fontWeight: 600, color: 'var(--constitution-text-primary)' }}>{children}</strong>;
            },

            // Em (italic) text
            em({ children }) {
              const text = String(children);
              // Check if this might be a Sanskrit term (simple heuristic)
              const sanskritTerms = [
                'Atman', 'Dharma', 'Karma', 'Ahimsa', 'Rta', 'Daya', 'Satya', 'Prana',
                'Yajna', 'Tapas', 'Samskara', 'Yuga', 'Sabha', 'Peeth', 'Mandala',
                'Guru', 'Viveka', 'Samsara', 'Kalpa', 'Svadharma'
              ];

              if (sanskritTerms.some(term => text.includes(term))) {
                return <em className="constitution-sanskrit">{children}</em>;
              }

              return <em style={{ fontStyle: 'italic' }}>{children}</em>;
            },

            // Links
            a({ href, children }) {
              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--constitution-deep-blue)',
                    textDecoration: 'underline',
                  }}
                >
                  {children}
                </a>
              );
            },

            // Lists
            ul({ children }) {
              return <ul style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>{children}</ul>;
            },
            ol({ children }) {
              return <ol style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>{children}</ol>;
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </div>

      {/* Navigation */}
      <PartNavigation currentPartId={partId} />
    </article>
    </>
  );
}
