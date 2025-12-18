# Story 8.3: Ensure Cross-Browser Compatibility

**Epic:** 8 - Performance & Quality Assurance  
**Story:** 8.3  
**Status:** ready-for-dev

---

## Story

As a **user on any modern browser**,  
I want **the site to work flawlessly**,  
So that **I have a consistent experience regardless of my browser choice**.

---

## Acceptance Criteria

**Given** the site is deployed  
**When** I test across browsers  
**Then** all features work on Chrome 61+ (desktop and mobile)  
**And** all features work on Firefox 60+ (desktop and mobile)  
**And** all features work on Safari 11+ (desktop and iOS)  
**And** all features work on Edge 79+ (Chromium-based)  
**And** Core reading experience works on mobile Safari (iOS 11+)  
**And** Core reading experience works on Chrome Mobile (Android)  
**And** Expandable cards work correctly on all browsers  
**And** Theme toggle works correctly on all browsers  
**And** Animations respect browser-specific prefixes if needed

---

## Tasks

1. **Test on Chrome 61+ (desktop and mobile)** - 30 min
2. **Test on Firefox 60+ (desktop and mobile)** - 30 min
3. **Test on Safari 11+ (desktop and iOS)** - 30 min
4. **Test on Edge 79+ (Chromium-based)** - 20 min
5. **Verify expandable cards work on all browsers** - 30 min
6. **Verify theme toggle works on all browsers** - 20 min
7. **Check CSS autoprefixer configuration** - 20 min
8. **Create browser compatibility report** - 30 min

**Total Estimated Time:** 3.5 hours

---

## Dev Notes

**Browser Testing Tools:**
- BrowserStack (cross-browser testing)
- Chrome DevTools device emulation
- Firefox Developer Tools
- Safari Web Inspector

**Next.js 15 Browser Support:**
- Modern browsers (last 2 versions)
- Chrome 61+, Firefox 60+, Safari 11+, Edge 79+
- No IE11 support (React 18 dropped IE)

**Architecture Note:**
- All animations use transform/opacity (GPU-accelerated)
- CSS custom properties (wide browser support)
- Tailwind CSS (autoprefixer built-in)

**References:**
- [Source: docs/epics.md - Epic 8, Story 8.3, Lines 1209-1228]
- [Source: docs/architecture.md - Browser Support, Lines 131-135]
