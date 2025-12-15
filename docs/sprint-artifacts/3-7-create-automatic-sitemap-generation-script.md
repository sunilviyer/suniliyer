# Story 3.7: Create Automatic Sitemap Generation Script

Status: ready-for-dev

## Story

As a **search engine**,
I want **an automatically-generated sitemap.xml with all article URLs**,
so that **I can discover and crawl all content efficiently**.

## Acceptance Criteria

**Given** article utilities exist
**When** I create `scripts/generate-sitemap.js`
**Then** the script calls `getAllArticles()` to retrieve all articles
**And** Sitemap.xml is generated with URLs for homepage and all article pages
**And** Each URL includes `<lastmod>` using article date field (YYYY-MM-DD format)
**And** Sitemap is written to `/public/sitemap.xml`
**And** Script is called during build process (added to package.json build script)
**And** robots.txt in `/public` allows crawling and references sitemap

## Tasks / Subtasks

- [ ] Create scripts directory and generate-sitemap.js file (AC: #1)
  - [ ] Create `/scripts` directory if it doesn't exist
  - [ ] Create `/scripts/generate-sitemap.js` file
  - [ ] Add Node.js shebang if needed: `#!/usr/bin/env node`
  - [ ] Add file-level comment documenting the script's purpose

- [ ] Set up CommonJS module imports (AC: #1)
  - [ ] Use `require()` for imports (Node.js script, not TypeScript)
  - [ ] `const fs = require('fs');`
  - [ ] `const path = require('path');`
  - [ ] Note: Can't use ES6 imports unless package.json has "type": "module"

- [ ] Import article utilities (AC: #1)
  - [ ] Since this is a build script, need to handle TypeScript imports
  - [ ] Option 1: Use ts-node to run TypeScript directly
  - [ ] Option 2: Read markdown files directly with gray-matter (simpler)
  - [ ] Recommend Option 2: Use gray-matter directly to parse frontmatter
  - [ ] `const matter = require('gray-matter');`

- [ ] Read all article files (AC: #1)
  - [ ] Define articles directory: `const ARTICLES_DIR = path.join(__dirname, '../content/articles')`
  - [ ] Read all .md files: `const files = fs.readdirSync(ARTICLES_DIR).filter(f => f.endsWith('.md'))`
  - [ ] For each file: read content and parse with gray-matter
  - [ ] Extract slug (filename without .md), date, and other metadata

- [ ] Generate sitemap XML structure (AC: #2, #3)
  - [ ] Start with XML declaration and urlset tag
  - [ ] Add homepage URL: `https://www.suniliyer.ca/`
  - [ ] Add articles page URL: `https://www.suniliyer.ca/articles`
  - [ ] For each article: add URL with loc, lastmod, changefreq, priority
  - [ ] Format lastmod as YYYY-MM-DD from article.date
  - [ ] Use XML template literals for clean structure

- [ ] Write sitemap.xml to public directory (AC: #4)
  - [ ] Output path: `path.join(__dirname, '../public/sitemap.xml')`
  - [ ] Use `fs.writeFileSync(outputPath, xmlContent, 'utf8')`
  - [ ] Log success message: `console.log('✓ Sitemap generated at /public/sitemap.xml')`
  - [ ] Handle errors gracefully with try/catch

- [ ] Integrate script into build process (AC: #5)
  - [ ] Open `package.json`
  - [ ] Update build script: `"build": "node scripts/generate-sitemap.js && next build"`
  - [ ] Sitemap generation runs BEFORE Next.js build
  - [ ] Ensures sitemap is always up-to-date in production

- [ ] Create robots.txt file (AC: #6)
  - [ ] Create `/public/robots.txt` file
  - [ ] Allow all crawlers: `User-agent: *` and `Allow: /`
  - [ ] Reference sitemap: `Sitemap: https://www.suniliyer.ca/sitemap.xml`
  - [ ] Disallow nothing for AIDefence (all content is public)

- [ ] Test sitemap generation
  - [ ] Run script manually: `node scripts/generate-sitemap.js`
  - [ ] Verify `/public/sitemap.xml` is created
  - [ ] Verify XML is valid (check with online validator)
  - [ ] Verify all article URLs are included
  - [ ] Verify homepage and articles page URLs are included
  - [ ] Verify lastmod dates match article frontmatter dates
  - [ ] Run build script: `npm run build` and verify sitemap is generated

## Dev Notes

**Architecture Patterns:**
- **Build Script**: Node.js CommonJS script (not TypeScript)
- **Sitemap Format**: XML following sitemaps.org protocol
- **Build Integration**: Runs before Next.js build in package.json
- **File Location**: `/scripts/generate-sitemap.js` (Architecture pattern)

**Sitemap XML Structure:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>https://www.suniliyer.ca/</loc>
    <lastmod>2025-12-14</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Articles page -->
  <url>
    <loc>https://www.suniliyer.ca/articles</loc>
    <lastmod>2025-12-14</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Individual articles -->
  <url>
    <loc>https://www.suniliyer.ca/articles/large-language-models</loc>
    <lastmod>2025-12-12</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- ... more articles ... -->
</urlset>
```

**Script Implementation:**
```javascript
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const SITE_URL = 'https://www.suniliyer.ca';
const ARTICLES_DIR = path.join(__dirname, '../content/articles');
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');

function generateSitemap() {
  // Read all article files
  const files = fs.readdirSync(ARTICLES_DIR).filter(f => f.endsWith('.md'));

  // Parse articles
  const articles = files.map(file => {
    const content = fs.readFileSync(path.join(ARTICLES_DIR, file), 'utf8');
    const { data } = matter(content);
    return {
      slug: file.replace('.md', ''),
      date: data.date
    };
  });

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${SITE_URL}/articles</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
${articles.map(article => `  <url>
    <loc>${SITE_URL}/articles/${article.slug}</loc>
    <lastmod>${article.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

  // Write to file
  fs.writeFileSync(OUTPUT_PATH, xml, 'utf8');
  console.log('✓ Sitemap generated at /public/sitemap.xml');
}

generateSitemap();
```

**robots.txt Content:**
```
# Allow all crawlers
User-agent: *
Allow: /

# Sitemap location
Sitemap: https://www.suniliyer.ca/sitemap.xml
```

**Build Script Integration:**
```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "node scripts/generate-sitemap.js && next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

**SEO Best Practices:**
- `<lastmod>`: Tells search engines when content was last updated
- `<changefreq>`: Hints how often content changes (homepage: weekly, articles: monthly)
- `<priority>`: Relative importance (0.0 to 1.0) - homepage highest, articles lower
- All URLs must be absolute (include full https://www.suniliyer.ca domain)

**Future Enhancements:**
- Add `<image:image>` tags for article images (Growth phase with Stable Diffusion)
- Split into multiple sitemaps if article count exceeds 50,000 (unlikely)
- Add sitemap index if multiple sitemaps needed

### Project Structure Notes

**File Locations:**
- `scripts/generate-sitemap.js` (new file)
- `public/sitemap.xml` (generated file, not committed to git)
- `public/robots.txt` (new file, committed to git)

**Dependencies:**
- `fs` - Node.js filesystem (built-in)
- `path` - Node.js path utilities (built-in)
- `gray-matter` - Already installed for markdown parsing

**Git Ignore:**
- Add `/public/sitemap.xml` to .gitignore (generated file)
- Commit `scripts/generate-sitemap.js` (source)
- Commit `public/robots.txt` (static configuration)

**Integration Points:**
- Runs before Next.js build in package.json
- Uses article date metadata from frontmatter
- Sitemap served at `https://www.suniliyer.ca/sitemap.xml`

**No Conflicts Detected:**
- Story builds on 3.2 (uses gray-matter for frontmatter parsing)
- Independent of other Epic 3 stories (can run standalone)
- Prepares SEO foundation for search engine crawling

### References

- [Source: docs/architecture.md#SEO & Discoverability] - Build-time SEO approach
- [Source: docs/architecture.md#Project Structure] - Scripts directory location
- [Source: docs/architecture.md#Development Workflow Integration] - Build process integration
- [Source: docs/epics.md#Story 3.7] - Full acceptance criteria
- [Source: docs/prd.md#FR30] - Auto-generated sitemap.xml requirement
- [Source: docs/prd.md#FR35] - robots.txt requirement
- [Source: docs/prd.md#FR36] - Sitemap last-modified dates requirement
- [Source: docs/prd.md#FR57] - Generate sitemap during build process

## Dev Agent Record

### Context Reference

<!-- Path(s) to story context XML will be added here by context workflow -->

### Agent Model Used

Claude Sonnet 4.5 (claude-sonnet-4-5-20250929)

### Debug Log References

### Completion Notes List

### File List
