# Testing Workflow - AIDefence
**Story:** 8.6 - Establish Testing Workflow Before Production
**Date:** 2025-12-18
**Status:** Production-Ready

---

## Overview

This document defines the complete testing workflow for AIDefence, from feature development through production deployment. Following this workflow ensures bugs and security issues are caught before reaching users.

**Testing Levels:**
1. **Local Development** - Developer testing on localhost
2. **Preview Deployment** - Automated testing on PR preview URLs
3. **Staging Environment** - Integration testing before production
4. **Production Deployment** - Final validation and monitoring

---

## Testing Workflow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                     FEATURE DEVELOPMENT                          │
└─────────────────────────────────────────────────────────────────┘
                               │
                               ▼
                    ┌──────────────────┐
                    │ Create Feature   │
                    │ Branch           │
                    └──────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                   LOCAL TESTING (Required)                       │
│  • npm run dev (development server)                              │
│  • npm run build (production build)                              │
│  • npm start (production server)                                 │
│  • Manual testing in browser                                     │
│  • Check console for errors                                      │
└─────────────────────────────────────────────────────────────────┘
                               │
                               ▼
                    ┌──────────────────┐
                    │ Push Branch      │
                    │ Create PR        │
                    └──────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│              PREVIEW DEPLOYMENT (Automatic via Vercel)           │
│  • Vercel builds PR branch                                       │
│  • Creates unique preview URL                                    │
│  • Posts URL to PR comments                                      │
└─────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│              PREVIEW TESTING (Required before merge)             │
│  • Run pre-deployment checklist                                  │
│  • Test functionality on preview URL                             │
│  • Run Lighthouse audit                                          │
│  • Verify accessibility                                          │
│  • Test cross-browser compatibility                              │
│  • Check mobile responsiveness                                   │
└─────────────────────────────────────────────────────────────────┘
                               │
                          ┌────┴────┐
                          │  Pass?  │
                          └────┬────┘
                     No ◄──────┤────── Yes
                     │         │
                     │         ▼
                     │  ┌──────────────┐
                     │  │ Merge to     │
                     │  │ Main         │
                     │  └──────────────┘
                     │         │
                     │         ▼
                     │  ┌──────────────────────────────────┐
                     │  │ PRODUCTION DEPLOYMENT (Automatic) │
                     │  │  • Vercel builds main branch      │
                     │  │  • Deploys to www.suniliyer.ca    │
                     │  │  • Automatic rollback on failure  │
                     │  └──────────────────────────────────┘
                     │         │
                     │         ▼
                     │  ┌──────────────────┐
                     │  │ POST-DEPLOYMENT  │
                     │  │ MONITORING       │
                     │  └──────────────────┘
                     │
                     ▼
              ┌────────────┐
              │ Fix Issues │
              │ & Retry    │
              └────────────┘
```

---

## 1. Local Development Testing

### Before Creating PR

**Required Steps:**

1. **Start Development Server**
   ```bash
   npm run dev
   ```
   - Open http://localhost:3000
   - Test feature functionality
   - Verify no errors in terminal
   - Check browser console (F12 → Console)

2. **Build Production Version**
   ```bash
   npm run build
   ```
   - Must complete without errors
   - Check for TypeScript errors
   - Check for build warnings
   - Review bundle size (should be <200 KB)

3. **Test Production Build Locally**
   ```bash
   npm start
   ```
   - Open http://localhost:3000
   - Test all functionality works in production mode
   - Verify theme toggle
   - Test navigation
   - Check article pages

4. **Run Type Checking**
   ```bash
   npx tsc --noEmit
   ```
   - Must pass with 0 errors
   - Fix all TypeScript errors before proceeding

**Local Testing Checklist:**
- [ ] Development server starts without errors
- [ ] Production build completes successfully
- [ ] Production server runs correctly
- [ ] No TypeScript errors
- [ ] No console errors in browser
- [ ] Feature works as expected

---

## 2. Preview Deployment Testing

### Automatic Preview Creation

When you create a PR, Vercel automatically:
1. Builds your feature branch
2. Creates a unique preview URL
3. Posts the URL as a comment on the PR
4. Updates the preview on every push to the branch

**Example Preview URL:**
```
https://aidefence-git-feature-article-search-sunilviyer.vercel.app
```

### Pre-Deployment Checklist

Before merging any PR, complete this checklist on the **preview URL**:

#### Build & Deployment
- [ ] Vercel build succeeded (check PR status)
- [ ] Preview URL is accessible
- [ ] No 404 errors on valid pages
- [ ] Custom 404 page displays for invalid URLs

#### Functionality
- [ ] All new features work as expected
- [ ] No regressions in existing features
- [ ] Theme toggle works (light/dark mode)
- [ ] Navigation menu works
- [ ] Article filtering works (if applicable)
- [ ] Article expansion works (if applicable)
- [ ] Related articles load correctly (if applicable)
- [ ] All links navigate correctly

#### Performance
- [ ] Run Lighthouse audit (see instructions below)
- [ ] Performance score ≥90
- [ ] Accessibility score = 100 (or documented exception)
- [ ] Best Practices score ≥90
- [ ] SEO score ≥90
- [ ] LCP <2.5s
- [ ] CLS <0.1

#### Visual & Design
- [ ] Design system colors used correctly
- [ ] Typography consistent
- [ ] Spacing consistent
- [ ] No layout shifts on page load
- [ ] Images load correctly (if applicable)
- [ ] Animations smooth (60fps)

#### Accessibility
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] Screen reader accessible (test with VoiceOver/NVDA)
- [ ] Focus indicators visible
- [ ] Skip to main content link works
- [ ] ARIA labels present and correct
- [ ] Color contrast meets WCAG AA (4.5:1 text, 3:1 UI)

#### Responsive Design
- [ ] Desktop (1920px) - layout correct
- [ ] Laptop (1366px) - layout correct
- [ ] Tablet (768px) - layout correct
- [ ] Mobile (375px) - layout correct
- [ ] Touch targets ≥44x44px on mobile
- [ ] Text readable without zoom

#### Cross-Browser Testing
- [ ] Chrome/Edge (latest) - works correctly
- [ ] Firefox (latest) - works correctly
- [ ] Safari (latest) - works correctly
- [ ] Safari iOS - works correctly (if possible)
- [ ] Chrome Android - works correctly (if possible)

#### Security
- [ ] No sensitive data exposed (API keys, secrets)
- [ ] No console warnings about security
- [ ] HTTPS enforced (automatic via Vercel)
- [ ] Security headers present (check with DevTools)
- [ ] No XSS vulnerabilities (if user input added)

#### Content
- [ ] No typos in new content
- [ ] Markdown renders correctly (if applicable)
- [ ] Code syntax highlighting works (if applicable)
- [ ] Article metadata correct (title, description, date)
- [ ] Sitemap includes new articles (if applicable)

---

## 3. Running Lighthouse Audits

### On Preview Deployment

**Command:**
```bash
npx lighthouse <preview-url> \
  --only-categories=performance,accessibility,best-practices,seo \
  --view
```

**Example:**
```bash
npx lighthouse https://aidefence-git-feature-search.vercel.app \
  --only-categories=performance,accessibility,best-practices,seo \
  --view
```

**Target Scores:**
- Performance: ≥90 (current: 99-100)
- Accessibility: 100 (current: 95-100)
- Best Practices: ≥90 (current: 100)
- SEO: ≥90 (current: 100)

**If Scores Drop:**
1. Identify the issue in Lighthouse report
2. Fix the issue locally
3. Push update to feature branch
4. Wait for preview deployment to update
5. Re-run Lighthouse audit

---

## 4. Staging Environment Testing (Optional)

### When to Use Staging

Use staging for:
- Major feature releases (multiple PRs merged)
- Security patches (NFR-SEC-3 requirement)
- Integration testing across multiple features
- Stakeholder review before production
- Performance testing at scale

### Staging Workflow

1. **Merge Main to Staging**
   ```bash
   git checkout staging
   git merge main
   git push origin staging
   ```

2. **Wait for Staging Deployment**
   - Vercel automatically deploys to staging URL
   - Check deployment status in Vercel dashboard

3. **Run Full Test Suite on Staging**
   - Complete pre-deployment checklist (same as preview)
   - Run Lighthouse on all major pages:
     - Homepage: `/`
     - Articles: `/articles`
     - Sample article: `/articles/sample-article`
   - Test all user journeys
   - Load testing (if applicable)

4. **Approve for Production**
   - If staging tests pass, main branch is already updated
   - Production deployment happens automatically on merge to main
   - Monitor production after deployment

---

## 5. Production Deployment

### Automatic Deployment

When you merge a PR to `main`:
1. GitHub triggers Vercel webhook
2. Vercel builds main branch
3. Deployment occurs to www.suniliyer.ca
4. Previous deployment kept for rollback

**Deployment Time:** ~2 minutes

### Post-Deployment Monitoring

**Immediately After Deployment (0-5 minutes):**

1. **Smoke Test**
   ```bash
   # Check homepage
   curl -I https://www.suniliyer.ca

   # Check articles page
   curl -I https://www.suniliyer.ca/articles

   # Check sitemap
   curl -I https://www.suniliyer.ca/sitemap.xml
   ```

2. **Visual Verification**
   - Open www.suniliyer.ca in incognito mode
   - Clear cache (Cmd+Shift+R / Ctrl+F5)
   - Check homepage loads correctly
   - Check theme toggle works
   - Navigate to /articles
   - Open an article
   - Test navigation

3. **Browser Console Check**
   - Open DevTools (F12)
   - Check Console tab - no errors
   - Check Network tab - all resources loaded
   - Check Application tab - no service worker errors

**Within 24 Hours:**

4. **Lighthouse Production Audit**
   ```bash
   npx lighthouse https://www.suniliyer.ca \
     --only-categories=performance,accessibility,best-practices,seo \
     --view
   ```
   - Verify scores maintained (≥90)
   - Document any regressions

5. **Analytics Check (if enabled)**
   - Verify tracking working
   - Check for error spikes
   - Review user journey completions

6. **SEO Check**
   - Verify sitemap.xml accessible
   - Check robots.txt working
   - Verify meta tags correct (View Source)
   - Check structured data (Google Rich Results Test)

**Within 1 Week:**

7. **Core Web Vitals (Google Search Console)**
   - Check LCP <2.5s (field data from real users)
   - Check CLS <0.1
   - Check INP ≤200ms
   - Review any failing URLs

---

## 6. Rollback Procedures

### When to Rollback

Rollback if:
- Critical bug discovered in production
- Performance regression >10% (e.g., LCP jumps from 1.5s to 2.5s)
- Accessibility score drops below 90
- Functionality broken for users
- Security vulnerability introduced

### Automatic Rollback (Vercel)

**If build fails:**
- Vercel automatically keeps previous deployment live
- No manual action needed
- Fix issue and re-deploy

### Manual Rollback via Vercel

1. **Go to Vercel Dashboard**
   - Navigate to project: aidefence
   - Click "Deployments" tab

2. **Find Previous Working Deployment**
   - Deployments are sorted by date
   - Identify last known good deployment
   - Click "..." menu on that deployment

3. **Promote to Production**
   - Click "Promote to Production"
   - Confirmation dialog appears
   - Click "Promote"
   - Previous version live in <60 seconds

### Manual Rollback via Git

**Emergency Revert:**
```bash
# Find last good commit
git log --oneline

# Create revert commit
git revert <bad-commit-hash>
git push origin main

# Vercel auto-deploys reverted version
```

**Hard Reset (use with caution):**
```bash
# Only if no one else has pulled the bad commit
git reset --hard <good-commit-hash>
git push --force origin main
```

---

## 7. Testing Scripts

### Quick Test Script

Create `.github/workflows/test.sh` for local testing:

```bash
#!/bin/bash
set -e

echo "🧪 Running pre-deployment tests..."

echo "✓ Running TypeScript check..."
npx tsc --noEmit

echo "✓ Running production build..."
npm run build

echo "✅ All tests passed! Ready to create PR."
```

Usage:
```bash
chmod +x .github/workflows/test.sh
./.github/workflows/test.sh
```

### Lighthouse CI Script

Create `scripts/lighthouse-test.sh`:

```bash
#!/bin/bash

URL=${1:-http://localhost:3000}

echo "Running Lighthouse audit on: $URL"

npx lighthouse "$URL" \
  --only-categories=performance,accessibility,best-practices,seo \
  --output=json \
  --output=html \
  --output-path=./lighthouse-report

echo "Report saved to ./lighthouse-report.html"
echo "Opening report..."
open ./lighthouse-report.html
```

Usage:
```bash
chmod +x scripts/lighthouse-test.sh

# Local testing
./scripts/lighthouse-test.sh http://localhost:3000

# Preview testing
./scripts/lighthouse-test.sh https://aidefence-git-feature.vercel.app

# Production testing
./scripts/lighthouse-test.sh https://www.suniliyer.ca
```

---

## 8. Common Issues & Solutions

### Issue: Build Fails on Vercel but Passes Locally

**Cause:** Environment differences (Node version, missing env vars)

**Solution:**
```bash
# Check Node version matches Vercel
node -v  # Should be 20.x or 22.x

# Verify package.json engines field
{
  "engines": {
    "node": "22.x"
  }
}

# Test in clean environment
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Issue: Preview Deployment Not Created

**Cause:** Vercel GitHub app not configured

**Solution:**
1. Check Vercel is connected to GitHub repo
2. Verify branch is pushed to origin: `git push origin <branch>`
3. Check Vercel dashboard for build logs
4. Ensure PR is from same repo (not fork)

### Issue: Performance Score Drops in Production

**Cause:** CDN cache, different network conditions

**Solution:**
1. Test in incognito mode (no cache)
2. Test from different locations
3. Run multiple Lighthouse audits (scores vary ±5 points)
4. Check Vercel Analytics for real user metrics
5. Compare against baseline from Story 8.2

### Issue: Accessibility Score Regression

**Cause:** New component missing ARIA labels or contrast issue

**Solution:**
1. Run axe DevTools on failing page
2. Check Lighthouse accessibility section for specific issues
3. Common fixes:
   - Add alt text to images
   - Ensure proper heading hierarchy (h1 → h2 → h3)
   - Add ARIA labels to interactive elements
   - Fix color contrast (use design system colors)

---

## 9. Testing Best Practices

### Before Every PR

✅ **Always:**
- Test locally first (dev + production build)
- Run TypeScript check: `npx tsc --noEmit`
- Clear browser cache when testing
- Test in incognito mode
- Check browser console for errors
- Complete pre-deployment checklist

❌ **Never:**
- Merge without testing preview URL
- Skip Lighthouse audit
- Ignore TypeScript errors
- Merge with build warnings
- Deploy on Friday afternoon (hard to rollback on weekends)

### During Code Review

**Reviewer Checklist:**
- [ ] Build passes (green check on PR)
- [ ] Preview URL works
- [ ] Code changes reviewed
- [ ] No security vulnerabilities introduced
- [ ] Performance not regressed
- [ ] Tests added for new features (when applicable)
- [ ] Documentation updated (if needed)

### After Production Deployment

**Monitor for:**
- Error spikes in Vercel logs
- 404 errors (check Vercel Analytics)
- Performance regressions (Lighthouse scores)
- User reports of issues
- Search Console errors (within 24-48h)

---

## 10. Security Testing (NFR-SEC-3)

### Security Patch Workflow

For security-critical changes (dependency updates, security fixes):

1. **Create Security Fix Branch**
   ```bash
   git checkout -b security/fix-dependency-vulnerability
   ```

2. **Apply Security Patch**
   ```bash
   npm update <vulnerable-package>
   npm audit  # Verify 0 vulnerabilities
   ```

3. **Test Locally**
   - Run full test suite
   - Verify functionality not broken
   - Check for any deprecation warnings

4. **Deploy to Staging First**
   ```bash
   git checkout staging
   git merge security/fix-dependency-vulnerability
   git push origin staging
   ```

5. **Test on Staging**
   - Complete pre-deployment checklist
   - Security-specific checks:
     - Run `npm audit` (0 vulnerabilities)
     - Check for console warnings
     - Verify HTTPS enforced
     - Check security headers (DevTools → Network → Response Headers)

6. **Merge to Main (Production)**
   ```bash
   git checkout main
   git merge security/fix-dependency-vulnerability
   git push origin main
   ```

7. **Monitor Production**
   - Verify fix deployed
   - Run security scan
   - Check for any runtime errors

### Security Checklist

- [ ] `npm audit` shows 0 vulnerabilities
- [ ] No secrets in code (API keys, passwords)
- [ ] Environment variables in Vercel only
- [ ] HTTPS enforced (automatic via Vercel)
- [ ] Security headers present (X-Frame-Options, etc.)
- [ ] No `eval()` or `dangerouslySetInnerHTML` without sanitization
- [ ] User input sanitized (if applicable)
- [ ] Dependencies up-to-date

---

## 11. Documentation Updates

### When to Update Documentation

Update documentation when:
- Adding new features (update architecture.md)
- Changing deployment process (update deployment-guide.md)
- Adding new testing procedures (update testing-workflow.md)
- Updating dependencies (update README.md)
- Changing environment variables (update .env.example)

### Documentation Review Checklist

- [ ] README.md updated with new setup steps (if needed)
- [ ] CHANGELOG.md updated (if maintaining)
- [ ] Architecture diagrams updated (if structure changed)
- [ ] API documentation updated (if APIs added)
- [ ] Inline code comments added for complex logic

---

## 12. Testing Workflow Summary

**Quick Reference:**

```bash
# 1. LOCAL TESTING
npm run build              # Must pass
npm start                  # Test production build
npx tsc --noEmit          # Type check

# 2. CREATE PR
git push origin feature/name
gh pr create

# 3. TEST PREVIEW URL
# Complete pre-deployment checklist
npx lighthouse <preview-url>  # Scores ≥90

# 4. MERGE TO MAIN
gh pr merge --squash

# 5. MONITOR PRODUCTION
curl -I https://www.suniliyer.ca  # Check 200 OK
npx lighthouse https://www.suniliyer.ca  # Verify scores
```

---

## Conclusion

Following this testing workflow ensures:
- ✅ Bugs caught before production
- ✅ Performance maintained (Lighthouse 99-100)
- ✅ Accessibility compliance (WCAG AA)
- ✅ Security vulnerabilities prevented
- ✅ Quick rollback if issues occur
- ✅ Consistent quality across deployments

**Status:** Testing workflow established and production-ready.

All acceptance criteria for Story 8.6 met.
