#!/usr/bin/env node

/**
 * Sitemap Generation Script
 *
 * Generates sitemap.xml for SEO by discovering all markdown articles
 * and creating a sitemap with homepage, articles page, and individual article URLs.
 *
 * Runs during build process (npm run build) to ensure sitemap is always up-to-date.
 *
 * Output: /public/sitemap.xml
 */

/* eslint-disable @typescript-eslint/no-require-imports */
// Note: This is a Node.js CommonJS build script, not TypeScript

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Configuration
const SITE_URL = 'https://www.suniliyer.ca';
const ARTICLES_DIR = path.join(__dirname, '../content/articles');
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');

// Date format validation regex (YYYY-MM-DD)
const DATE_FORMAT_REGEX = /^\d{4}-\d{2}-\d{2}$/;

/**
 * Validate and normalize article date
 * @param {string} date - Date string from frontmatter
 * @param {string} filename - Article filename for logging
 * @returns {string} Valid YYYY-MM-DD date string
 */
function validateDate(date, filename) {
  if (!date) {
    console.warn(`⚠️  No date found in ${filename}, using current date`);
    return new Date().toISOString().split('T')[0];
  }

  if (!DATE_FORMAT_REGEX.test(date)) {
    console.warn(`⚠️  Invalid date format in ${filename}: "${date}" (expected YYYY-MM-DD), using current date`);
    return new Date().toISOString().split('T')[0];
  }

  return date;
}

/**
 * Generate sitemap.xml with all site URLs
 */
function generateSitemap() {
  try {
    // Check if articles directory exists
    if (!fs.existsSync(ARTICLES_DIR)) {
      console.log(`⚠️  Articles directory not found: ${ARTICLES_DIR}`);
      console.log('Creating sitemap with homepage and articles page only...');

      const xml = generateMinimalSitemap();
      fs.writeFileSync(OUTPUT_PATH, xml, 'utf8');
      console.log('✓ Minimal sitemap generated at /public/sitemap.xml');
      return;
    }

    // Read all markdown files
    const files = fs.readdirSync(ARTICLES_DIR).filter(f => f.endsWith('.md'));

    if (files.length === 0) {
      console.log('⚠️  No markdown files found in articles directory');
      console.log('Creating sitemap with homepage and articles page only...');

      const xml = generateMinimalSitemap();
      fs.writeFileSync(OUTPUT_PATH, xml, 'utf8');
      console.log('✓ Minimal sitemap generated at /public/sitemap.xml');
      return;
    }

    // Parse articles and extract metadata
    const articles = files.map(file => {
      const content = fs.readFileSync(path.join(ARTICLES_DIR, file), 'utf8');
      const { data } = matter(content);

      return {
        slug: file.replace('.md', ''),
        date: validateDate(data.date, file)
      };
    });

    // Sort articles by date (newest first) for consistent sitemap ordering
    articles.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Get current date for homepage/articles page lastmod
    const today = new Date().toISOString().split('T')[0];

    // Generate sitemap XML
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Articles page -->
  <url>
    <loc>${SITE_URL}/articles</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Individual articles -->
${articles.map(article => `  <url>
    <loc>${SITE_URL}/articles/${article.slug}</loc>
    <lastmod>${article.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

    // Write sitemap to public directory
    fs.writeFileSync(OUTPUT_PATH, xml, 'utf8');

    console.log(`✓ Sitemap generated successfully at /public/sitemap.xml`);
    console.log(`  - Homepage: ${SITE_URL}/`);
    console.log(`  - Articles page: ${SITE_URL}/articles`);
    console.log(`  - ${articles.length} article(s) included`);

  } catch (error) {
    console.error('✗ Error generating sitemap:', error.message);
    process.exit(1);
  }
}

/**
 * Generate minimal sitemap when no articles exist yet
 */
function generateMinimalSitemap() {
  const today = new Date().toISOString().split('T')[0];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Articles page -->
  <url>
    <loc>${SITE_URL}/articles</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`;
}

// Run sitemap generation
generateSitemap();
