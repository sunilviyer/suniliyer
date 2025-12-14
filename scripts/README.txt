# AIDefence Build Scripts Directory

This directory contains Node.js scripts that run during the build process.

## Current Scripts

None yet - scripts will be added in Epic 3: Content Management Pipeline.

## Planned Scripts

- generate-sitemap.js (Epic 3)
  - Scans /content/articles/ directory
  - Extracts slug and date from frontmatter
  - Generates sitemap.xml in /public directory
  - Runs during build: "build": "node scripts/generate-sitemap.js && next build"

## Running Scripts

Build scripts are executed automatically during `npm run build`.
They can also be run manually for testing:

```bash
node scripts/generate-sitemap.js
```

## Script Conventions

- Files: kebab-case naming (generate-sitemap.js)
- Language: Node.js (CommonJS or ES modules)
- Error handling: Throw errors to fail build if critical
- Logging: Use console.log for progress, console.error for failures
