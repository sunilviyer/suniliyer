/**
 * Schema.org structured data utilities for SEO
 * Following best practices for JSON-LD implementation
 * @see https://schema.org/
 * @see https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
 */

import { Organization, Person, Article, BreadcrumbList, WebSite, Course, CreativeWork } from 'schema-dts';

// Base URLs
const SITE_URL = 'https://www.suniliyer.ca';
const SITE_NAME = 'Sunil Iyer';

/**
 * Organization schema for Sunil Iyer (personal brand)
 */
export function getOrganizationSchema(): Organization {
  return {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/sunil.webp`,
      width: '512',
      height: '512'
    },
    sameAs: [
      'https://www.linkedin.com/in/sunilviyer/',
      'https://github.com/sunilviyer',
      'https://medium.com/@sunilviswanathaniyer'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Professional',
      url: `${SITE_URL}/#contact`
    }
  };
}

/**
 * Person schema for Sunil Iyer
 */
export function getPersonSchema(): Person {
  return {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: 'Sunil Iyer',
    givenName: 'Sunil',
    familyName: 'Iyer',
    url: SITE_URL,
    image: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/sunil.webp`,
      width: '512',
      height: '512'
    },
    jobTitle: 'AI Governance & Risk Strategy Consultant',
    description: 'Results-driven leader specializing in AI adoption, customer success, and enterprise digital transformation.',
    sameAs: [
      'https://www.linkedin.com/in/sunilviyer/',
      'https://github.com/sunilviyer',
      'https://medium.com/@sunilviswanathaniyer'
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'AI Governance',
      'AI Risk Management',
      'Customer Success',
      'Digital Transformation',
      'Enterprise Software'
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'University of Toronto'
    }
  };
}

/**
 * WebSite schema with search capabilities
 */
export function getWebSiteSchema(): WebSite {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: 'AI Governance & Risk Strategy Consulting - Building the infrastructure for responsible AI',
    publisher: {
      '@id': `${SITE_URL}/#person`
    },
    inLanguage: 'en-US'
  };
}

/**
 * Article schema for educational content
 */
export interface ArticleSchemaProps {
  title: string;
  description: string;
  slug: string;
  path: string; // e.g., 'history', 'risk', 'responsibility'
  datePublished?: string;
  dateModified?: string;
  image?: string;
  readTime?: string;
  tags?: string[];
}

export function getArticleSchema(props: ArticleSchemaProps): Article {
  const {
    title,
    description,
    slug,
    path,
    datePublished,
    dateModified,
    image,
    readTime,
    tags = []
  } = props;

  const articleUrl = `${SITE_URL}/${path}/${slug}`;
  const publishDate = datePublished || new Date('2025-01-01').toISOString();
  const modifyDate = dateModified || publishDate;

  return {
    '@type': 'Article',
    '@id': `${articleUrl}#article`,
    headline: title,
    description: description,
    url: articleUrl,
    datePublished: publishDate,
    dateModified: modifyDate,
    author: {
      '@id': `${SITE_URL}/#person`
    },
    publisher: {
      '@id': `${SITE_URL}/#organization`
    },
    image: image ? {
      '@type': 'ImageObject',
      url: `${SITE_URL}${image}`,
      width: '1200',
      height: '630'
    } : undefined,
    keywords: tags.join(', '),
    articleSection: path.charAt(0).toUpperCase() + path.slice(1),
    timeRequired: readTime,
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    educationalUse: 'Professional Development',
    learningResourceType: 'Article'
  };
}

/**
 * BreadcrumbList schema for navigation
 */
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]): BreadcrumbList {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`
    }))
  };
}

/**
 * Course/Learning Resource schema for learning paths
 */
export interface CourseSchemaProps {
  name: string;
  description: string;
  path: string;
  articleCount: number;
}

export function getCourseSchema(props: CourseSchemaProps): Course {
  const { name, description, path, articleCount } = props;

  return {
    '@type': 'Course',
    '@id': `${SITE_URL}/${path}#course`,
    name: name,
    description: description,
    url: `${SITE_URL}/${path}`,
    provider: {
      '@id': `${SITE_URL}/#organization`
    },
    author: {
      '@id': `${SITE_URL}/#person`
    },
    educationalLevel: 'Professional',
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    numberOfCredits: articleCount,
    coursePrerequisites: 'None',
    teaches: `Comprehensive understanding of ${name.toLowerCase()}`
  };
}

/**
 * CreativeWork schema for portfolio items
 */
export interface CreativeWorkSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  dateCreated?: string;
  keywords?: string[];
}

export function getCreativeWorkSchema(props: CreativeWorkSchemaProps): CreativeWork {
  const { name, description, url, image, dateCreated, keywords = [] } = props;

  return {
    '@type': 'CreativeWork',
    '@id': `${url}#creative-work`,
    name: name,
    description: description,
    url: url,
    author: {
      '@id': `${SITE_URL}/#person`
    },
    creator: {
      '@id': `${SITE_URL}/#person`
    },
    dateCreated: dateCreated || new Date('2025-01-01').toISOString(),
    image: image ? {
      '@type': 'ImageObject',
      url: `${SITE_URL}${image}`,
      width: '1200',
      height: '630'
    } : undefined,
    keywords: keywords.join(', '),
    inLanguage: 'en-US',
    isAccessibleForFree: true
  };
}

/**
 * Helper function to generate JSON-LD script tag content
 */
export function generateJsonLd(schema: object | object[]): string {
  const context = {
    '@context': 'https://schema.org'
  };

  const data = Array.isArray(schema)
    ? { ...context, '@graph': schema }
    : { ...context, ...schema };

  return JSON.stringify(data, null, 0); // No whitespace for production
}
