# Pre-Deployment Checklist

Copy this checklist into your PR description before merging to main.

---

## Build & Deployment
- [ ] Vercel build succeeded (green check on PR)
- [ ] Preview URL is accessible
- [ ] No 404 errors on valid pages
- [ ] Custom 404 page displays for invalid URLs

## Functionality
- [ ] All new features work as expected
- [ ] No regressions in existing features
- [ ] Theme toggle works (light/dark mode)
- [ ] Navigation menu works
- [ ] Article filtering works (if applicable)
- [ ] Article expansion works (if applicable)
- [ ] Related articles load correctly (if applicable)
- [ ] All links navigate correctly

## Performance (Run Lighthouse on Preview URL)
- [ ] Performance score ≥90
- [ ] Accessibility score = 100 (or documented exception)
- [ ] Best Practices score ≥90
- [ ] SEO score ≥90
- [ ] LCP <2.5s
- [ ] CLS <0.1

## Visual & Design
- [ ] Design system colors used correctly
- [ ] Typography consistent
- [ ] Spacing consistent
- [ ] No layout shifts on page load
- [ ] Images load correctly (if applicable)
- [ ] Animations smooth (60fps)

## Accessibility
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] Screen reader accessible (test with VoiceOver/NVDA)
- [ ] Focus indicators visible
- [ ] Skip to main content link works
- [ ] ARIA labels present and correct
- [ ] Color contrast meets WCAG AA (4.5:1 text, 3:1 UI)

## Responsive Design
- [ ] Desktop (1920px) - layout correct
- [ ] Laptop (1366px) - layout correct
- [ ] Tablet (768px) - layout correct
- [ ] Mobile (375px) - layout correct
- [ ] Touch targets ≥44x44px on mobile
- [ ] Text readable without zoom

## Cross-Browser Testing
- [ ] Chrome/Edge (latest) - works correctly
- [ ] Firefox (latest) - works correctly
- [ ] Safari (latest) - works correctly
- [ ] Safari iOS - works correctly (if possible)
- [ ] Chrome Android - works correctly (if possible)

## Security
- [ ] No sensitive data exposed (API keys, secrets)
- [ ] No console warnings about security
- [ ] HTTPS enforced (automatic via Vercel)
- [ ] Security headers present (check with DevTools)
- [ ] No XSS vulnerabilities (if user input added)

## Content (if applicable)
- [ ] No typos in new content
- [ ] Markdown renders correctly
- [ ] Code syntax highlighting works
- [ ] Article metadata correct (title, description, date)
- [ ] Sitemap includes new articles

---

**Lighthouse Command:**
```bash
npx lighthouse <preview-url> --only-categories=performance,accessibility,best-practices,seo --view
```

**Preview URL:** (paste from PR comment)

**Lighthouse Results:**
- Performance: __/100
- Accessibility: __/100
- Best Practices: __/100
- SEO: __/100

---

**Tested By:** @username
**Date:** YYYY-MM-DD
**Status:** ✅ Ready to merge / ⚠️ Issues found (see comments)
