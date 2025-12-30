# Epic 1: Homepage Foundation & Deployment

**Status**: ⏳ Ready (waiting for Epic 0 Phase 1 hero image)
**Priority**: P0 (Foundation)
**Owner**: Development Team
**Estimated Effort**: 24-32 hours (3-4 days)
**Dependencies**: Epic 0 Phase 1 (hero image)
**Blocks**: Epic 2, Epic 3

---

## Epic Goal

Set up Next.js 14 project from Rayo template, create homepage with hero section, learning path preview cards, deploy to Vercel with CI/CD pipeline, establish dark mode theming system.

---

## Success Criteria

- ✅ Next.js 14 project initialized with Rayo template structure
- ✅ Homepage deployed to Vercel at production URL
- ✅ Hero section with animated background and CTA
- ✅ 5 learning path preview cards with hover effects
- ✅ Dark mode toggle working (persistent via localStorage)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Lighthouse Performance score ≥85
- ✅ All fonts, colors match UX spec earth-tone palette
- ✅ Git workflow established (main branch, auto-deploy)

---

## Story Breakdown

### Story 1.1: Next.js Project Setup from Rayo Template

**Goal**: Initialize Next.js 14 project using Rayo template structure and configure build system.

**Rayo Template Integration**:
- **Use from Rayo**: Animations, structure, component patterns, GSAP implementations
- **Customize for AIDefence**: Colors (UX spec earth tones), logo, name, content
- **Keep**: Rayo's StackCards animation, page transitions, responsive patterns
- **Replace**: Blog/portfolio features with learning paths content

**Tasks**:
1. Clone or download Rayo template from `/Volumes/External/AIDefence/rayo-digital-agency-personal-portfolio-nextjs-template/`
2. Extract relevant components:
   - StackCards animation (modify for learning paths)
   - Header/Footer structure
   - Page transition animations
   - Responsive layout patterns
   - GSAP animation utilities
3. Remove Rayo-specific content:
   - Blog posts → Learning path articles
   - Portfolio items → Concept cards
   - Personal branding → AIDefence/Seshan Intelligence branding
4. Initialize new Next.js 14 project with App Router
4. Configure TypeScript with strict mode
5. Set up Tailwind CSS with custom earth-tone palette
6. Configure ESLint and Prettier
7. Create project directory structure:
   ```
   /app
     /layout.tsx
     /page.tsx (homepage)
     /globals.css
   /components
     /layout
       /Header.tsx
       /Footer.tsx
     /homepage
       /Hero.tsx
       /PathPreviewCard.tsx
   /lib
     /constants.ts (colors, paths)
   /public
     /images
   /types
     /learning-path.ts
   ```
8. Install dependencies: GSAP, Framer Motion, next-mdx-remote
9. Create initial commit

**Acceptance Criteria**:
- [ ] `npm run dev` starts development server
- [ ] `npm run build` succeeds without errors
- [ ] TypeScript strict mode enabled
- [ ] Tailwind configured with UX spec colors
- [ ] All dependencies installed
- [ ] Project structure matches architecture plan

**Estimated Effort**: 4-6 hours

---

### Story 1.2: Configure UX Spec Earth-Tone Palette

**Goal**: Implement complete design system from UX spec in Tailwind and CSS variables.

**Tasks**:
1. Update `tailwind.config.ts` with earth-tone colors:
   ```typescript
   theme: {
     extend: {
       colors: {
         history: {
           primary: '#936639',
           secondary: '#7f4f24',
           accent: '#a68a64',
         },
         terminology: {
           primary: '#a68a64',
           secondary: '#b6ad90',
           accent: '#656d4a',
         },
         risk: {
           primary: '#582f0e',
           secondary: '#7f4f24',
           accent: '#333d29',
         },
         responsibility: {
           primary: '#a4ac86',
           secondary: '#c2c5aa',
           accent: '#656d4a',
         },
         future: {
           primary: '#414833',
           secondary: '#656d4a',
           accent: '#333d29',
         },
         // Dark mode
         charcoal: '#333d29',
         moss: '#414833',
         fern: '#656d4a',
         // Light mode
         ivory: '#F5F5DC',
       }
     }
   }
   ```

2. Update `app/globals.css` with CSS variables:
   ```css
   :root {
     /* Learning Path Colors */
     --color-history-primary: #936639;
     --color-terminology-primary: #a68a64;
     --color-risk-primary: #582f0e;
     --color-responsibility-primary: #a4ac86;
     --color-future-primary: #414833;

     /* Dark Mode (Default) */
     --color-bg-primary: #333d29;
     --color-bg-secondary: #414833;
     --color-text-primary: #F5F5DC;
     --color-text-secondary: #c2c5aa;
   }

   [data-theme="light"] {
     --color-bg-primary: #F5F5DC;
     --color-bg-secondary: #c2c5aa;
     --color-text-primary: #333d29;
     --color-text-secondary: #656d4a;
   }
   ```

3. Create `/lib/constants.ts`:
   ```typescript
   export const LEARNING_PATHS = [
     {
       id: 'history',
       title: 'History & Foundations',
       slug: 'history',
       color: '#936639',
       description: 'Understand what AI is, how it works, and why it matters',
       cardCount: 15,
     },
     // ... other paths
   ] as const;
   ```

**Acceptance Criteria**:
- [ ] All UX spec colors available in Tailwind
- [ ] CSS variables work in both light and dark mode
- [ ] Constants file exports learning path metadata
- [ ] Smart contrast text colors working (dark bg = light text)

**Estimated Effort**: 2-3 hours

---

### Story 1.3: Create Header Component with Dark Mode Toggle

**Goal**: Build responsive header with logo, navigation, dark mode toggle.

**Tasks**:
1. Create `/components/layout/Header.tsx`:
   ```typescript
   'use client';

   export function Header() {
     const [theme, setTheme] = useState('dark');

     useEffect(() => {
       const saved = localStorage.getItem('theme') || 'dark';
       setTheme(saved);
       document.documentElement.setAttribute('data-theme', saved);
     }, []);

     const toggleTheme = () => {
       const newTheme = theme === 'dark' ? 'light' : 'dark';
       setTheme(newTheme);
       localStorage.setItem('theme', newTheme);
       document.documentElement.setAttribute('data-theme', newTheme);
     };

     return (
       <header className="fixed top-0 w-full bg-charcoal/80 backdrop-blur-sm z-50">
         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
           <Logo />
           <nav>
             <Link href="/history">History</Link>
             {/* other paths */}
           </nav>
           <button onClick={toggleTheme} aria-label="Toggle theme">
             {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
           </button>
         </div>
       </header>
     );
   }
   ```

2. Add logo (AIDefence wordmark or icon)
3. Style navigation links with hover effects
4. Make responsive (hamburger menu on mobile)
5. Add smooth scroll behavior

**Acceptance Criteria**:
- [ ] Header fixed at top with blur backdrop
- [ ] Dark mode toggle persists via localStorage
- [ ] Smooth transition between themes (300ms)
- [ ] Mobile responsive with hamburger menu
- [ ] Accessible (keyboard navigation, ARIA labels)

**Estimated Effort**: 4-5 hours

---

### Story 1.4: Create Hero Section with Animated Background

**Goal**: Build hero section with animated gradient background, headline, CTA.

**Tasks**:
1. Create `/components/homepage/Hero.tsx`:
   ```typescript
   export function Hero() {
     return (
       <section className="relative h-screen flex items-center justify-center overflow-hidden">
         <AnimatedBackground />
         <div className="relative z-10 text-center max-w-4xl px-4">
           <h1 className="text-5xl md:text-7xl font-bold mb-6 text-ivory">
             Master AI Governance
           </h1>
           <p className="text-xl md:text-2xl mb-8 text-khaki">
             Navigate AI compliance, ethics, and responsible deployment
             through 5 expert-curated learning paths
           </p>
           <Link href="#paths" className="btn-primary">
             Start Learning
           </Link>
         </div>
       </section>
     );
   }
   ```

2. Create `/components/homepage/AnimatedBackground.tsx`:
   - Use GSAP or CSS gradients
   - Subtle animated mesh gradient (earth tones)
   - Performance-optimized (CSS transform, will-change)

3. Add scroll indicator (down arrow with pulse animation)
4. Ensure text has WCAG AAA contrast over background

**Acceptance Criteria**:
- [ ] Hero takes full viewport height
- [ ] Animated background smooth (60fps)
- [ ] Text readable over background (7:1 contrast)
- [ ] CTA button prominent with hover effect
- [ ] Scroll indicator visible
- [ ] Responsive text sizing (mobile to desktop)

**Estimated Effort**: 4-5 hours

---

### Story 1.5: Create Learning Path Preview Cards

**Goal**: Build 5 interactive preview cards for each learning path.

**Tasks**:
1. Create `/components/homepage/PathPreviewCard.tsx`:
   ```typescript
   interface PathPreviewCardProps {
     path: {
       id: string;
       title: string;
       slug: string;
       color: string;
       description: string;
       cardCount: number;
     };
   }

   export function PathPreviewCard({ path }: PathPreviewCardProps) {
     return (
       <Link
         href={`/${path.slug}`}
         className="group relative block overflow-hidden rounded-lg border-2 border-transparent hover:border-[var(--path-color)] transition-all"
         style={{ '--path-color': path.color } as React.CSSProperties}
       >
         <div className="aspect-[3/2] relative">
           <Image
             src={`/images/${path.slug}-hero.jpg`}
             alt={path.title}
             fill
             className="object-cover group-hover:scale-105 transition-transform duration-500"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 to-transparent" />
         </div>
         <div className="p-6">
           <h3 className="text-2xl font-bold mb-2" style={{ color: path.color }}>
             {path.title}
           </h3>
           <p className="text-khaki mb-4">{path.description}</p>
           <div className="flex items-center justify-between">
             <span className="text-sm text-fern">{path.cardCount} cards</span>
             <ArrowRightIcon className="text-[var(--path-color)]" />
           </div>
         </div>
       </Link>
     );
   }
   ```

2. Update `/app/page.tsx`:
   ```typescript
   import { LEARNING_PATHS } from '@/lib/constants';
   import { PathPreviewCard } from '@/components/homepage/PathPreviewCard';

   export default function HomePage() {
     return (
       <>
         <Hero />
         <section id="paths" className="py-20 px-4">
           <div className="container mx-auto">
             <h2 className="text-4xl font-bold text-center mb-12">
               5 Learning Paths
             </h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {LEARNING_PATHS.map(path => (
                 <PathPreviewCard key={path.id} path={path} />
               ))}
             </div>
           </div>
         </section>
       </>
     );
   }
   ```

3. Add hover effects:
   - Image scale on hover
   - Border color matches path color
   - Arrow slides right
   - Smooth transitions (300-500ms)

**Acceptance Criteria**:
- [ ] 5 path preview cards render correctly
- [ ] Hero images load (from Epic 0 Phase 1)
- [ ] Hover effects smooth and performant
- [ ] Path colors match UX spec
- [ ] Responsive grid (1 col mobile, 2 tablet, 3 desktop)
- [ ] Links work (even if path pages don't exist yet)

**Estimated Effort**: 4-5 hours

---

### Story 1.6: Deploy to Vercel with CI/CD

**Goal**: Set up Vercel deployment with automatic deployments on git push.

**Tasks**:
1. Create GitHub repository (if not exists)
2. Push code to main branch
3. Connect repository to Vercel:
   - Sign in to Vercel
   - Import GitHub repository
   - Configure build settings:
     - Framework: Next.js
     - Build Command: `npm run build`
     - Output Directory: `.next`
     - Install Command: `npm install`
4. Configure environment variables (if any)
5. Set up custom domain (if available)
6. Configure deployment settings:
   - Auto-deploy on push to main
   - Preview deployments for pull requests
7. Test deployment:
   - Make a change, push to main
   - Verify auto-deployment triggers
   - Check production URL
8. Set up deployment notifications (Slack or email)
9. Document deployment process in `/docs/deployment.md`

**Acceptance Criteria**:
- [ ] Repository connected to Vercel
- [ ] Production deployment successful
- [ ] Homepage accessible at production URL
- [ ] Auto-deploy on push to main working
- [ ] Preview deployments for PRs working
- [ ] SSL certificate configured
- [ ] Custom domain configured (if available)
- [ ] Deployment documentation complete

**Estimated Effort**: 2-3 hours

---

## Implementation Sequence

### Day 1 (8 hours)
- Story 1.1: Project setup (4-6 hours)
- Story 1.2: UX spec palette (2-3 hours)

### Day 2 (8 hours)
- Story 1.3: Header component (4-5 hours)
- Story 1.4: Hero section (4-5 hours)

### Day 3 (8 hours)
- Story 1.5: Path preview cards (4-5 hours)
- Story 1.6: Vercel deployment (2-3 hours)

**Total**: 24-32 hours (3-4 days)

---

## Dependencies

**Epic 1 depends on**:
- ✅ Epic 0 Phase 1 (5 hero images) - Partial dependency
  - Can start Stories 1.1-1.4 without images
  - Story 1.5 needs hero images

**Epic 1 blocks**:
- Epic 2: History Path (needs homepage navigation)
- Epic 3: All Paths Infrastructure (needs base layout)

---

## Technical Architecture

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + CSS Variables
- **Animations**: GSAP (hero background), Framer Motion (page transitions)
- **Deployment**: Vercel
- **Version Control**: Git + GitHub

### File Structure
```
/app
  /layout.tsx              # Root layout with Header/Footer
  /page.tsx                # Homepage (Hero + PathPreviewCards)
  /globals.css             # CSS variables, Tailwind imports

/components
  /layout
    /Header.tsx            # Fixed header with dark mode toggle
    /Footer.tsx            # Footer (create in Epic 1 or later)
  /homepage
    /Hero.tsx              # Hero section with CTA
    /AnimatedBackground.tsx # Gradient animation
    /PathPreviewCard.tsx   # Learning path preview card

/lib
  /constants.ts            # Learning path metadata, colors
  /utils.ts                # Helper functions

/public
  /images
    /history-hero.jpg      # From Epic 0
    /terminology-hero.jpg
    /risk-hero.jpg
    /responsibility-hero.jpg
    /future-hero.jpg

/types
  /learning-path.ts        # TypeScript interfaces
```

---

## Risks & Mitigations

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Hero images not ready from Epic 0 | Medium | Low | Use placeholder gradients, swap images when ready |
| Rayo template conflicts with Next.js 14 | High | Medium | Extract only needed components, rebuild from scratch if needed |
| Performance issues with animated background | Medium | Medium | Use CSS gradients, GPU acceleration, test on low-end devices |
| Vercel deployment fails | High | Low | Test build locally first, check build logs, use Vercel support |
| Dark mode flicker on page load | Low | High | Set theme in `<script>` tag before React hydration |

---

## Success Metrics

### Technical
- ✅ Lighthouse Performance: ≥85
- ✅ Build time: <2 minutes
- ✅ Homepage load time: <2 seconds (3G)
- ✅ No console errors or warnings

### Design
- ✅ All colors match UX spec earth-tone palette
- ✅ Dark mode toggle works without flicker
- ✅ Responsive on mobile (375px), tablet (768px), desktop (1440px)
- ✅ WCAG 2.1 AAA contrast ratios (7:1)

### Deployment
- ✅ Auto-deploy on git push working
- ✅ Zero downtime deployments
- ✅ Production URL accessible
- ✅ SSL certificate valid

---

## Testing Checklist

### Functionality
- [ ] Homepage renders without errors
- [ ] Dark mode toggle switches themes
- [ ] Dark mode preference persists on reload
- [ ] All 5 path preview cards render
- [ ] Hero images load (or placeholders)
- [ ] Navigation links work (even if paths don't exist yet)
- [ ] CTA button scrolls to #paths section

### Responsive
- [ ] Mobile (375px): Single column cards, hamburger menu
- [ ] Tablet (768px): 2 column cards
- [ ] Desktop (1440px): 3 column cards
- [ ] Hero text scales appropriately

### Accessibility
- [ ] Keyboard navigation works
- [ ] Dark mode toggle has aria-label
- [ ] Images have alt text
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG AAA (7:1)

### Performance
- [ ] Lighthouse score ≥85
- [ ] No layout shift (CLS < 0.1)
- [ ] First Contentful Paint < 1.5s
- [ ] Animated background runs at 60fps

### Cross-Browser
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

---

## Documentation Deliverables

1. **Deployment Guide** (`/docs/deployment.md`):
   - How to deploy to Vercel
   - Environment variables
   - Custom domain setup
   - Rollback procedure

2. **Development Setup** (`/docs/development-setup.md`):
   - Prerequisites (Node.js version, npm)
   - Installation steps
   - Running dev server
   - Building for production

3. **Component Documentation**:
   - Header component props and usage
   - PathPreviewCard component API
   - Dark mode implementation details

---

## Definition of Done

- ✅ All 6 stories complete with acceptance criteria met
- ✅ Code reviewed and merged to main branch
- ✅ Deployed to production Vercel URL
- ✅ Homepage accessible and functional
- ✅ Dark mode working and persistent
- ✅ All 5 path preview cards rendering with hero images
- ✅ Lighthouse score ≥85
- ✅ No console errors or warnings
- ✅ Documentation complete (deployment guide, dev setup)
- ✅ Passes all testing checklist items
- ✅ Product owner (Sunil) approval

---

**Epic Status**: ⏳ Ready to start (waiting for hero images from Epic 0 Phase 1)
**Next Epic**: Epic 2 (History Path Implementation)
