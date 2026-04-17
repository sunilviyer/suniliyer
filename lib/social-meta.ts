import { Metadata } from 'next';

const SITE_URL = 'https://www.suniliyer.ca';
const SITE_NAME = 'Sunil Iyer';
const AUTHOR_NAME = 'Sunil Iyer';
const TWITTER_HANDLE = '@suniliyer'; // Update if you have a Twitter handle

interface SocialMetaProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
}

/**
 * Generate complete Open Graph and Twitter Card metadata
 * for social media sharing across LinkedIn, Twitter, Facebook, etc.
 */
export function getSocialMeta({
  title,
  description,
  path,
  image = '/images/og-default.webp', // Default OG image
  type = 'article',
  publishedTime,
  modifiedTime,
  tags = [],
}: SocialMetaProps): Metadata {
  const url = `${SITE_URL}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  return {
    title,
    description,
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(type === 'article' && publishedTime && {
        publishedTime,
        modifiedTime,
        authors: [AUTHOR_NAME],
        tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      title,
      description,
      images: [imageUrl],
    },
  };
}

/**
 * Get social meta for learning path articles
 */
export function getArticleSocialMeta({
  title,
  description,
  slug,
  path,
  image,
  publishedTime = '2025-01-01T00:00:00Z',
  modifiedTime,
  tags = [],
}: {
  title: string;
  description: string;
  slug: string;
  path: string;
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
}): Metadata {
  return getSocialMeta({
    title: `${title} - ${path.charAt(0).toUpperCase() + path.slice(1)} - ${SITE_NAME}`,
    description,
    path: `/${path}/${slug}`,
    image: image || '/images/og-default.webp',
    type: 'article',
    publishedTime,
    modifiedTime,
    tags,
  });
}

/**
 * Get social meta for portfolio/creative work pages
 */
export function getPortfolioSocialMeta({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  return getSocialMeta({
    title: `${title} - ${SITE_NAME}`,
    description,
    path,
    image: image || '/images/og-default.webp',
    type: 'website',
  });
}

/**
 * Get social meta for constitution pages
 */
export function getConstitutionSocialMeta({
  title,
  description,
  partId,
  image = '/images/og-constitution.webp',
}: {
  title: string;
  description: string;
  partId: string;
  image?: string;
}): Metadata {
  return getSocialMeta({
    title: `${title} - AGI Constitution - ${SITE_NAME}`,
    description,
    path: `/constitution/${partId}`,
    image,
    type: 'article',
    publishedTime: '2026-03-01T00:00:00Z',
    tags: ['AGI Governance', 'AI Ethics', 'Constitutional Framework', 'Vedic Philosophy'],
  });
}

/**
 * Get social meta for homepage
 */
export function getHomepageSocialMeta(): Metadata {
  return getSocialMeta({
    title: 'Sunil Iyer | AI Governance & Responsible AI',
    description: 'Helping organizations navigate AI through education, implementation guidance, and governance frameworks.',
    path: '/',
    image: '/images/og-homepage.webp',
    type: 'website',
  });
}

/**
 * Get social meta for learning path landing pages
 */
export function getLearningPathSocialMeta({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  return getSocialMeta({
    title: `${title} - AI Learning Path - ${SITE_NAME}`,
    description,
    path: `/${path}`,
    image: image || '/images/og-default.webp',
    type: 'website',
  });
}
