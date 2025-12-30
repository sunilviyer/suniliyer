# AIDefence Scripts Directory

This directory contains build scripts and testing utilities for the AIDefence project.

---

## Build Scripts

### generate-sitemap.js

**Purpose:** Generates sitemap.xml for SEO

**Usage:**
```bash
node scripts/generate-sitemap.js
```

**When it runs:**
- Automatically during `npm run build`
- Scans `/content/articles/` directory
- Extracts slug and date from frontmatter
- Generates `/public/sitemap.xml`

---

## Testing Scripts

### pre-deploy-test.sh

**Purpose:** Pre-deployment validation before creating PR

**What it tests:**
- TypeScript type checking (`npx tsc --noEmit`)
- Production build success (`npm run build`)
- Bundle size reporting
- Lint checks (if configured)

**Usage:**
```bash
./scripts/pre-deploy-test.sh
```

**When to run:**
- Before creating a pull request
- After making code changes
- Before committing

**Exit codes:**
- `0` - All tests passed
- `1` - Tests failed

---

### lighthouse-test.sh

**Purpose:** Run Lighthouse performance audits

**What it tests:**
- Performance score (target ≥90)
- Accessibility score (target 100)
- Best Practices score (target ≥90)
- SEO score (target ≥90)

**Usage:**
```bash
# Test localhost
./scripts/lighthouse-test.sh

# Test specific URL
./scripts/lighthouse-test.sh http://localhost:3000

# Test preview deployment
./scripts/lighthouse-test.sh https://aidefence-git-feature.vercel.app

# Test production
./scripts/lighthouse-test.sh https://www.suniliyer.ca
```

**Output:**
- Colored terminal output with scores
- HTML report saved to `./lighthouse-reports/lighthouse-report-TIMESTAMP.html`
- JSON report for programmatic access
- Automatically opens report in browser

**Requirements:**
- Node.js installed (for `npx lighthouse`)
- Target URL must be accessible

---

### smoke-test.sh

**Purpose:** Post-deployment smoke testing

**What it tests:**
- Homepage returns 200
- Articles page returns 200
- Sitemap.xml accessible
- Robots.txt accessible
- Favicon accessible
- 404 page returns 404
- Invalid article returns 404

**Usage:**
```bash
# Test localhost
./scripts/smoke-test.sh http://localhost:3000

# Test production
./scripts/smoke-test.sh https://www.suniliyer.ca

# Default (tests production)
./scripts/smoke-test.sh
```

**When to run:**
- Immediately after production deployment
- After merging to main
- During staging validation

**Exit codes:**
- `0` - All smoke tests passed
- `1` - One or more tests failed (investigate/rollback)

---

## Testing Workflow

### Before Creating PR

```bash
# 1. Run pre-deployment tests
./scripts/pre-deploy-test.sh

# 2. Start production server
npm start

# 3. Run Lighthouse audit locally
./scripts/lighthouse-test.sh http://localhost:3000

# 4. Create PR
gh pr create
```

### On Preview Deployment

```bash
# 1. Get preview URL from PR comment (e.g., https://aidefence-git-feature.vercel.app)

# 2. Run smoke tests
./scripts/smoke-test.sh <preview-url>

# 3. Run Lighthouse audit
./scripts/lighthouse-test.sh <preview-url>

# 4. Complete pre-deployment checklist (.github/PRE_DEPLOYMENT_CHECKLIST.md)

# 5. Merge if all tests pass
```

### After Production Deployment

```bash
# 1. Run smoke tests
./scripts/smoke-test.sh https://www.suniliyer.ca

# 2. Run Lighthouse audit
./scripts/lighthouse-test.sh https://www.suniliyer.ca

# 3. Visual verification in browser

# 4. Monitor Vercel logs for errors
```

---

## Script Maintenance

### Making Scripts Executable

If scripts are not executable:
```bash
chmod +x scripts/*.sh
```

### Adding New Scripts

**For build scripts (JavaScript):**
1. Create `scripts/script-name.js`
2. Add to `package.json` build command if needed
3. Document in this README

**For testing scripts (Bash):**
1. Create `scripts/script-name.sh`
2. Add shebang: `#!/bin/bash`
3. Add `set -e` for fail-fast behavior
4. Make executable: `chmod +x scripts/script-name.sh`
5. Document in this README

### Conventions

**Build Scripts (Node.js):**
- Files: kebab-case naming (`generate-sitemap.js`)
- Language: Node.js (CommonJS or ES modules)
- Error handling: Throw errors to fail build if critical
- Logging: Use `console.log` for progress, `console.error` for failures

**Testing Scripts (Bash):**
- Files: kebab-case naming with `.sh` extension (`lighthouse-test.sh`)
- Shebang: `#!/bin/bash`
- Error handling: `set -e` to exit on first error
- Exit codes: `0` for success, `1` for failure
- Output: Use color codes for readability
  - Green (`\033[0;32m`) for success
  - Red (`\033[0;31m`) for failure
  - Yellow (`\033[1;33m`) for warnings
  - Blue (`\033[0;34m`) for info

---

## Troubleshooting

### Lighthouse Command Not Found

```bash
# Install lighthouse globally
npm install -g lighthouse

# Or use npx (recommended, no global install)
npx lighthouse <url>
```

### Permission Denied

```bash
# Make scripts executable
chmod +x scripts/*.sh

# Run with bash explicitly
bash scripts/script-name.sh
```

### Build Script Fails

```bash
# Check Node version (should be 20.x or 22.x)
node -v

# Clean install
rm -rf node_modules package-lock.json
npm install

# Test build
npm run build
```

### Smoke Test Fails

```bash
# Check if server is running
curl -I http://localhost:3000

# Check Vercel deployment status
# Go to https://vercel.com/dashboard

# Review build logs
# Check Vercel deployment logs for errors
```

---

## Related Documentation

- **Testing Workflow:** `/docs/testing-workflow.md` - Complete testing procedures
- **Deployment Guide:** `/docs/deployment-guide.md` - Deployment workflows
- **Pre-Deployment Checklist:** `/.github/PRE_DEPLOYMENT_CHECKLIST.md` - PR checklist

---

## Script Status

| Script | Status | Tested | Production-Ready |
|--------|--------|--------|------------------|
| `generate-sitemap.js` | ✅ Active | ✅ Yes | ✅ Yes |
| `pre-deploy-test.sh` | ✅ Active | ✅ Yes | ✅ Yes |
| `lighthouse-test.sh` | ✅ Active | ✅ Yes | ✅ Yes |
| `smoke-test.sh` | ✅ Active | ✅ Yes | ✅ Yes |

Last updated: 2025-12-18 (Story 8.6)
