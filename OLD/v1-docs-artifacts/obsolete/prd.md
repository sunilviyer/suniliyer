---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
lastStep: 11
workflowCompleted: true
completedDate: '2025-12-12'
inputDocuments:
  - 'docs/analysis/brainstorming-session-2025-12-11.md'
  - 'article_009_large_language_models.md'
  - 'article_005_strong_vs_weak_ai.md'
  - 'week-1-building-blocks-what-ai-actually-is.md'
  - 'article_013_multimodal_ai.md'
  - 'article_014_ai_compute.md'
  - 'article_011_data_behind_ai.md'
  - 'week4_ai_history.md'
  - 'article_008_generative_ai_explained.md'
  - 'article_012_foundation_models.md'
  - 'article_010_ai_vs_automation.md'
  - 'article_015_environmental_cost_ai.md'
  - 'week-2-ai-family-tree-types-of-ai-systems.md'
  - 'article_007_deep_learning_decoded.md'
documentCounts:
  briefs: 0
  research: 0
  brainstorming: 1
  projectDocs: 13
workflowType: 'prd'
lastStep: 0
project_name: 'AIDefence'
user_name: 'Sunil'
date: '2025-12-11'
deployment:
  git_repo: 'sunilviyer/suniliyer.git'
  production_url: 'www.suniliyer.ca'
  vercel_url: 'suniliyer.vercel.app'
  platform: 'Vercel'
---

# Product Requirements Document - AIDefence

**Author:** Sunil
**Date:** 2025-12-11

## Executive Summary

AIDefence is a next-generation portfolio platform that transforms static AI governance articles into an immersive, app-like reading experience while demonstrating advanced full-stack development capabilities. The platform replaces the current minimal landing page at www.suniliyer.ca with a sophisticated content management system that serves dual audiences: readers seeking AI governance knowledge and professionals evaluating engineering expertise.

**The Dual Showcase:**
The platform serves as both portfolio content (AI governance expertise) AND portfolio artifact (full-stack engineering capability). Every architectural decision demonstrates production-grade system design while delivering exceptional user experience.

**Current State Problem (Quantified):**

Current suniliyer.ca displays no articles despite 13 completed AI governance pieces covering Large Language Models, Generative AI, Strong vs Weak AI, Deep Learning, and related topics. The existing site is a functional but basic Next.js landing page with dark/light theme toggle and minimal navigation - serving as a placeholder rather than a content showcase.

Adding each article manually to the current system would require:
- Image creation/sourcing: 30-60 min per article
- Related article linking: 15-30 min (grows with article count)
- SEO metadata + sitemap updates: 15 min
- Navigation/category updates: 10 min
- **Total: ~70-115 minutes per article**

For the planned 158-article series: **185-303 hours of manual content management work.**

**The business case:** Build automated content pipeline once, eliminate 200+ hours of ongoing manual work while enabling rapid content publication and demonstrating engineering excellence.

**The Transformation:**

This PRD defines a complete platform rebuild featuring:

**Content Discovery Architecture:**
- Related articles identified through combined tag intersection + keyword similarity scoring
- Build-time pre-computation of relationship graphs (avoids runtime performance impact)
- Fallback hierarchy: exact tag matches → partial tag matches → category matches → recent articles
- Maximum 5 related articles displayed per article to prevent analysis paralysis
- Performance tested through 158 articles; scalability beyond requires monitoring and potential caching strategy

**Expandable Card Interaction:**
- Keyboard accessible: Enter to expand, Escape to collapse, Arrow keys for next/prev navigation
- Screen reader announcements for state changes (collapsed/expanded)
- Focus management: expanding card receives focus, collapsing returns focus to card
- Mobile: Full-screen expansion on viewports < 768px for readability
- WCAG 2.1 AA compliance target for contrast ratios and interactive elements

**Responsive Breakpoints:**
- Desktop (≥1024px): 3-column masonry grid with variable card heights based on content length
- Tablet (768-1023px): 2-column grid with reduced whitespace
- Mobile (<768px): Single column, cards expand to full-width for optimal reading
- Card height calculation: excerpt length + illustration aspect ratio, capped at 600px to prevent extreme variance
- **Tested viewports:** 393px (iPhone 17 Pro), 390px (iPhone 12), 768px (iPad), 1440px (desktop standard)

**Image Strategy:**
- Base illustrations generated via Stable Diffusion with consistent dark-optimized palette (local generation on M4 Mac Mini)
- CSS filter transforms for light mode (brightness, contrast, hue-rotate adjustments)
- Trade-off: Some color accuracy loss in light mode vs 50% storage savings and instant theme switching
- Fallback: If filter quality insufficient, generate dual image sets during SD batch process

**Automated Content Pipeline:**
Rich frontmatter metadata (category, tags, related_context, video_url, SEO fields, reading_time, difficulty) drives complete automation:
- Breadcrumbs auto-generate from category hierarchy
- SEO metadata and sitemap auto-populate on build
- Related articles match via pre-computed similarity scoring
- Templates handle all display logic
- Adding article = drop markdown file with frontmatter → everything else automatic

**Target Audiences:**

1. **Primary: Content Consumers** - Professionals, researchers, and learners seeking accessible AI governance education
2. **Secondary: Professional Evaluators** - Recruiters, potential employers, and collaborators assessing full-stack engineering capabilities

**Critical Success Factor:**

The platform must enable adding article #16 through #158 with the same minimal effort as article #1. "Add article with minimal coding and automatic formatting" drives every architectural decision - from frontmatter-driven templates to build-time relationship computation to local asset generation.

### What Makes This Special

**Three Breakthrough Concepts:**

1. **Expandable Card Revolution**
   - Browse masonry grid → click card → article expands inline full-width
   - Navigate next/previous with keyboard arrows without page loads
   - Transforms traditional blog into modern web app reading experience
   - Eliminates navigation friction entirely while maintaining accessibility

2. **Smart Image Processing**
   - Generate 158 unique generative art illustrations once using local Stable Diffusion (M4 Mac Mini)
   - Consistent prompt formula ensures visual cohesion while maintaining per-article uniqueness
   - CSS filters create light mode variants (50% storage reduction) with fallback to dual generation if needed
   - Enables real-time theme switching without duplicate assets

3. **Build-Time Content Intelligence**
   - Pre-compute article relationships during build to avoid runtime performance impact
   - Algorithmic matching eliminates manual content management
   - Scales from 13 articles through 158-article series without architecture redesign
   - Zero manual linking or SEO maintenance overhead

**Visual Identity:**

**Color Palette (Specific Values TBD in UX Phase):**
- Background: Deep charcoal (~#1a1a1a range)
- Surface: Slightly lighter (~#242424 range)
- Primary text: Off-white (~#e8e6e3 range) - minimum 7:1 contrast ratio
- Accent 1: Warm terracotta or muted earth tone for AI Fundamentals category
- Accent 2: Sage green for Legal Frameworks category
- Light mode toggle with inverse palette (off-white background, charcoal text)
- All color values finalized during UX design phase with WCAG AA contrast verification

**Design Philosophy:**
Generous whitespace (Maude-inspired), subtle scroll-triggered animations, category-coded color systems, and generative art creating unique visual identity for each article.

**Known Risks & Mitigation:**

- **Related article accuracy**: Tag-based matching may surface weak relationships → Monitor user engagement metrics, refine algorithm based on actual reading patterns
- **Performance at scale**: Pre-computation handles 158 articles; monitoring required beyond that threshold → Implement caching strategy if needed
- **Accessibility compliance**: WCAG 2.1 AA target requires testing with assistive technologies → Allocate time for accessibility audit and remediation in sprint planning
- **CSS filter quality**: Theme switching via filters may have color accuracy limitations → Fallback plan to generate dual image sets if quality issues emerge during testing

## Project Classification

**Technical Type:** web_app (SPA/Next.js)
**Domain:** general (educational content, AI governance - not regulated)
**Complexity:** low-medium (standard web practices, focus on UX and automation, no regulatory compliance)
**Project Context:** Brownfield - transforming existing basic site into production platform

**Technical Stack:**
- **Platform:** Vercel (Git-based deployment from sunilviyer/suniliyer.git)
- **Framework:** Next.js/React
- **Styling:** Tailwind CSS
- **Content:** Markdown with YAML frontmatter
- **Image Generation:** Stable Diffusion (local on M4 Mac Mini)
- **Production URL:** www.suniliyer.ca
- **Deployment:** Automated via Vercel (suniliyer.vercel.app backup)

**Project Scope:**

This PRD defines comprehensive platform features while the existing 13 articles provide immediate content for testing and launch. Architecture designed to scale from current content through planned 158-article series without requiring system redesign. Performance monitoring and optimization may be required if article count exceeds initial design threshold.

**Design Philosophy:**

Inspired by cross-pollination analysis of successful platforms:
- **Aziz Khaldi** (azizkhaldi.com) - Minimalist homepage with single-page scroll and subtle animations
- **Maude** (getmaude.com) - Premium feel through generous whitespace and earthy neutrals
- **Design For Mankind** (designformankind.com/blog) - Grid-based article cards with clear categorization

**Key Differentiators:**

- Content-first automation (frontmatter drives everything)
- App-like reading experience (inline expansion, keyboard navigation, accessibility-first)
- Engineering showcase (platform demonstrates technical capabilities alongside content expertise)
- Build-time intelligence (pre-computed relationships, auto-generated SEO/sitemap)
- Local asset generation (Stable Diffusion eliminates ongoing image costs and external dependencies)
- Honest about trade-offs and risks (CSS filter quality vs storage, scalability monitoring, accessibility testing requirements)

## Success Criteria

### User Success: The Reading Flow

**Core Success Moment:** User discovers article in masonry grid → expands inline → reads comfortably → navigates to related article with keyboard → continues reading flow without interruption.

**Measurable Indicators:**
- **Session Depth:** Users read ≥3 articles per session (indicates successful related article discovery)
- **Time on Site:** Average session ≥15 minutes (indicates engaged reading, not bouncing)
- **Keyboard Navigation Adoption:** ≥40% of expanded article sessions use arrow key navigation (validates UX innovation)
- **Mobile Reading Completion:** ≥60% of mobile users scroll to end of expanded articles (validates full-screen expansion design)
- **Theme Switching:** ≥20% of users toggle dark/light mode (validates dual-theme implementation)

**Qualitative Success:**
- Portfolio visitors comment on smooth reading experience in feedback
- Zero accessibility complaints from users with assistive technologies
- Articles feel like "using an app" rather than "visiting a blog"

### Business Success: Portfolio Impact

**Primary Goal:** Portfolio demonstrates engineering capabilities that lead to career opportunities (job offers, consulting engagements, professional connections).

**3-Month Indicators (Launch Phase):**
- Portfolio shared in ≥5 job applications or professional introductions
- ≥3 mentions of "impressive engineering" or "smooth UX" in feedback from recruiters/employers
- Site featured in personal introduction as technical showcase

**12-Month Indicators (Growth Phase):**
- Portfolio directly contributes to ≥1 job offer or consulting engagement
- Engineering peers reference AIDefence as example of quality portfolio implementation
- Site generates organic professional inquiries or collaboration opportunities

**Content Success (Secondary):**
- Readers share articles in AI governance communities
- Articles rank for target keywords (monitored but not primary metric)
- Content establishes thought leadership in AI governance space

### Technical Success

**Performance Benchmarks:**
- **Lighthouse Score:** ≥90 across Performance, Accessibility, Best Practices, SEO
- **Core Web Vitals:** LCP <2.5s, FID <100ms, CLS <0.1
- **Build Time:** ≤3 minutes for full 158-article build
- **Accessibility:** Zero WCAG 2.1 AA violations on automated tests
- **Cross-Browser:** Expandable cards work flawlessly on Chrome, Firefox, Safari (desktop + mobile)

**Developer Experience:**
- **Article Addition Time:** ≤10 minutes from markdown creation to deployed article (including image generation)
- **Zero Manual Linking:** Related articles populate automatically without human intervention
- **SEO Automation:** Sitemap regenerates on build without manual updates
- **Template Reliability:** New article adopts correct styling/layout via frontmatter alone

**System Reliability:**
- **Zero Regressions:** Existing articles remain functional when new articles added
- **Theme Consistency:** All articles render correctly in both dark and light modes
- **Responsive Accuracy:** Layout adapts correctly across all tested viewports (393px, 390px, 768px, 1440px)

### Measurable Outcomes

**Launch Readiness (MVP):**
- [ ] 13 existing articles displayed in masonry grid
- [ ] Expandable inline cards functional with keyboard navigation
- [ ] Dark mode implemented with ≥7:1 contrast ratios
- [ ] Basic homepage with navigation to article grid
- [ ] Simple category filtering working
- [ ] Lighthouse score ≥90 on all metrics
- [ ] Zero WCAG AA violations

**Growth Phase (30+ Articles):**
- [ ] Single-page scroll homepage with animations
- [ ] Stable Diffusion image generation pipeline operational
- [ ] CSS filter-based light mode implemented
- [ ] Algorithmic related article matching active
- [ ] Auto-generated sitemap on build
- [ ] 30+ articles published and navigable

**Vision Achieved (158 Articles):**
- [ ] Full 158-article series published
- [ ] Search functionality implemented
- [ ] Analytics tracking user reading patterns
- [ ] Newsletter signup integrated
- [ ] Social sharing buttons functional
- [ ] Portfolio cited in ≥1 job offer or professional opportunity

## Product Scope

### MVP Scope (Launch Ready)

**Must Have:**
- **Homepage:** Basic landing page with site name, tagline, navigation to article grid
- **Article Grid:** Masonry layout displaying all 13 articles with category badges
- **Expandable Cards:** Click to expand article inline full-width, keyboard navigation (Enter/Escape/Arrows)
- **Dark Mode Only:** Single theme with WCAG AA compliant contrast ratios
- **Manual Images:** Placeholder illustrations or manually sourced images for MVP
- **Simple Category Filter:** Dropdown or button group to filter articles by category
- **Basic Frontmatter:** category, tags, title, date, reading_time, excerpt

**Explicitly Out of Scope (MVP):**
- Single-page scroll homepage animations
- Stable Diffusion generated illustrations
- Light mode / theme toggle
- Algorithmic related articles (manual links acceptable for MVP)
- Auto-generated sitemap (manual sitemap.xml acceptable)
- Search functionality
- Video integration
- Newsletter signup

### Growth Scope (30+ Articles)

**Add When:**
- MVP launched successfully with ≥13 articles
- User feedback validates expandable card concept
- Ready to scale to 30+ articles

**Features:**
- **Single-Page Scroll Homepage:** Aziz Khaldi-inspired landing with scroll-triggered animations
- **SD Image Generation:** Stable Diffusion pipeline for consistent generative art illustrations
- **CSS Filter Light Mode:** Theme toggle using CSS filters on dark-optimized images
- **Algorithmic Related Articles:** Tag intersection + keyword similarity scoring (build-time pre-computation)
- **Auto-Generated Sitemap:** Build script generates sitemap.xml from article frontmatter
- **Enhanced Frontmatter:** video_url, related_context, SEO fields (meta_description, og_image)
- **30+ Articles Published:** Expand content library using automated pipeline

### Vision Scope (158 Articles)

**Long-Term Goals:**
- **Full Article Series:** All 158 AI governance articles published
- **Search Functionality:** Full-text search across articles with result highlighting
- **Analytics Integration:** Track reading patterns, keyboard usage, session depth
- **Newsletter Integration:** Capture email signups for new article notifications
- **Social Sharing:** Share buttons with Open Graph metadata
- **Learning Paths:** Curated article sequences for specific learning outcomes
- **Comment System:** Reader engagement via comments or reactions
- **Mobile App:** PWA or native mobile experience for offline reading

**Timeline:** Vision features implemented based on user demand and portfolio impact, not on fixed schedule.

## User Journeys

### Journey 1: Content Consumer - The Learning Flow

**Meet Alex Chen - The Curious Product Manager**

Alex is a senior product manager at a mid-sized tech company that's exploring AI integration into their platform. Their CEO keeps asking questions about AI governance, ethics, and regulations, but Alex doesn't have a technical AI background. They've tried reading academic papers (too dense), Twitter threads (too fragmented), and generic blog posts (too superficial). They need something in between - accessible but thorough.

**The Discovery:**
Late Tuesday evening, Alex searches "what are foundation models explained" and lands on your article from Google. The dark-themed page loads instantly - clean, professional, not another generic WordPress blog. They see a masonry grid of article cards with intriguing generative art illustrations and category badges. The "AI Fundamentals" category catches their eye.

**The Breakthrough Moment:**
Alex clicks on "Foundation Models" and instead of a jarring page navigation, the card elegantly expands inline to full-width. The article opens with a clear summary at the top (not buried at the end!). As they read, they notice "Related Articles" at the bottom - "Large Language Models" looks relevant. Instead of opening a new tab, Alex presses the right arrow key and the next article smoothly loads inline.

**The Flow State:**
15 minutes later, Alex has read 4 interconnected articles without ever leaving the page. They're using arrow keys to navigate between related pieces, building a coherent mental model of AI concepts. The reading experience feels like using a polished app, not jumping around a blog. When a colleague Slack messages asking for AI governance resources, Alex immediately shares the site saying "this is the clearest explanation I've found."

**Three Months Later:**
Alex has bookmarked AIDefence and returns weekly when new questions arise. They've recommended it to 5 colleagues. The site's professional polish and smooth UX gave them confidence in the content quality - this wasn't some random blog, this was clearly built by someone who knows engineering.

### Journey 2: Professional Evaluator - Assessing Engineering Excellence

**Meet Sarah Rodriguez - The Technical Recruiter**

Sarah is a senior technical recruiter at a Series B startup looking for a full-stack engineer who can build production-grade systems, not just follow tutorials. She's reviewed 47 portfolios this month - most are either basic landing pages with GitHub links, or over-engineered React dashboards that don't solve real problems. She's looking for someone who can balance technical sophistication with user experience and ship actual products.

**The First Impression:**
Sarah opens www.suniliyer.ca from Sunil's LinkedIn profile. Within 2 seconds, her mental checklist starts: Fast load? ✓ Professional design? ✓ Not a generic template? ✓ She immediately notices this isn't another "hero section with three cards" portfolio - it's a functional content platform.

**The Technical Assessment:**
She clicks an article card and watches it expand inline with smooth animation. "Interesting - state management, CSS transitions, focus handling." She opens DevTools and checks the Performance tab - Lighthouse score 94. She presses the right arrow key experimentally and the next article loads without page refresh. "Smart - they're pre-fetching or using client-side routing well."

**The Deep Dive:**
Sarah views the page source. Clean semantic HTML, proper meta tags, structured data for SEO. She checks mobile responsiveness - breakpoints are thoughtful (393px, 768px, not just Bootstrap defaults). She toggles dark/light mode - instant switching, no flash of unstyled content. She inspects the masonry grid CSS - "They know their way around modern layout techniques."

**The Validation Moment:**
Sarah navigates to the About section and sees: "Built with Next.js, deployed on Vercel, images generated via local Stable Diffusion." She thinks: "They can architect a complete system - content pipeline, build-time optimization, asset generation, deployment automation. This isn't someone who just follows tutorials."

**Two Days Later:**
Sarah schedules Sunil for a technical interview. In her notes she writes: "Portfolio demonstrates: production-grade React/Next.js, accessibility awareness (WCAG compliance mentioned), performance optimization, UX design sensibility, can ship complete products. Strong candidate."

### Journey 3: Content Administrator - The Scalable Publishing Flow

**Meet Sunil - The Content Creator Fighting Manual Overhead**

Sunil has written 13 comprehensive AI governance articles and has 145 more planned. Each article represents hours of research and writing. The current suniliyer.ca site displays none of them because publishing each article manually would require 70-115 minutes of image sourcing, metadata updates, navigation changes, and related article linking. At that rate, publishing the full 158-article series would consume 185-303 hours of pure overhead work.

Sunil is a skilled engineer, not a content operations manager. He wants to write articles and ship them, not maintain spreadsheets of manual links and regenerate sitemaps by hand.

**The Old Reality (Before AIDefence System):**
Friday afternoon, Sunil finishes "Multimodal AI Explained." To publish it on the current basic site, he would need to:
- Search for or create a hero image (30-60 min)
- Manually update the navigation component to include new article
- Read through existing articles to identify 3-5 related pieces, hardcode links
- Update sitemap.xml manually
- Add meta description, Open Graph tags, structured data
- Push to git, wait for Vercel deploy, verify everything works

Total time: 90+ minutes. By article #20, this process would consume an entire workweek.

**The New Reality (After AIDefence System):**
Friday afternoon, Sunil finishes "Multimodal AI Explained." He opens his markdown file and adds frontmatter:

```yaml
---
title: "Multimodal AI Explained"
category: "AI Fundamentals"
tags: ["multimodal", "computer-vision", "nlp", "foundation-models"]
date: "2025-12-15"
reading_time: 12
difficulty: "intermediate"
excerpt: "How AI systems combine vision, language, and audio..."
related_context: "foundation models, large language models, AI compute"
meta_description: "Clear explanation of multimodal AI systems..."
---
```

He saves the file to `/content/articles/article_013_multimodal_ai.md`. Done.

**What Happens Automatically:**
- Build script detects new article, reads frontmatter
- Related article algorithm matches via tags ("foundation-models" appears in both articles)
- Breadcrumbs auto-generate: Home → AI Fundamentals → Multimodal AI
- SEO metadata populates from frontmatter
- Sitemap.xml regenerates on build
- Article card appears in masonry grid with correct category color
- Vercel auto-deploys on git push

**The Morning After:**
Sunil checks the deployed site. The new article is live, properly categorized, with 4 algorithmically-matched related articles at the bottom. Navigation works. SEO tags are correct. Lighthouse score still 93. He spent zero time on any of this - the system handled everything.

**Six Months Later:**
Sunil has published 45 articles. Each one took <10 minutes from markdown file to deployed article. He's never manually updated navigation, never hardcoded a related article link, never touched sitemap.xml. The system scales effortlessly. He's spending his time writing and improving content, not fighting publishing overhead.

### Journey 4: SEO Crawler - The Discovery Engine

**Meet Googlebot - The Algorithmic Gatekeeper**

Googlebot is Google's web crawler, constantly scanning billions of pages to index content and determine search rankings. It doesn't care about beautiful design or smooth animations - it cares about structure, speed, metadata, and semantic markup. For AIDefence to reach professionals searching for AI governance content, Googlebot needs to successfully discover, understand, and rank every article.

**The Initial Crawl:**
Googlebot receives a crawl request for www.suniliyer.ca from Google Search Console. It requests the homepage and evaluates within milliseconds:
- Server response time: 180ms ✓ (fast)
- Status code: 200 ✓ (not broken)
- Robots.txt: Allows crawling ✓
- Sitemap reference: Found at /sitemap.xml ✓

**The Sitemap Discovery:**
Googlebot fetches /sitemap.xml and finds 13 article URLs with last-modified dates and priority weights. The sitemap is clean, valid XML with proper namespaces. Each URL returns 200 status. Googlebot schedules crawls for all 13 articles.

**The Content Understanding:**
Googlebot crawls /articles/foundation-models and parses the HTML:
- `<title>` tag: Clear, descriptive, includes target keyword ✓
- Meta description: Compelling summary under 160 characters ✓
- Open Graph tags: Proper og:title, og:description, og:image for social sharing ✓
- Structured data: JSON-LD schema.org/Article markup with author, datePublished, headline ✓
- Semantic HTML: Proper `<article>`, `<h1>`, `<h2>` hierarchy ✓
- Internal links: 5 related articles linking to other content on site ✓
- Mobile-friendly: Passes mobile usability test ✓
- Core Web Vitals: LCP 1.8s, CLS 0.05, FID 45ms ✓

**The Ranking Decision:**
Googlebot's algorithms evaluate the page:
- Content quality: In-depth, well-structured article (1,800 words)
- E-E-A-T signals: Author expertise demonstrated through comprehensive coverage
- User experience: Fast load, mobile-friendly, good Core Web Vitals
- Freshness: Recently published with accurate datePublished markup
- Internal linking: Well-connected to related topics (signals topic authority)

**The Index Update:**
Googlebot indexes the article for queries: ["foundation models explained", "what are foundation models", "AI foundation models", "large language model architecture"]. The page enters search results at position 23 for "foundation models explained."

**Three Months Later:**
User engagement signals improve (low bounce rate, high dwell time, strong CTR from search results). Googlebot re-crawls the site, discovers 15 new articles via updated sitemap. The internal linking structure now forms a comprehensive topic cluster around AI governance. Rankings improve: "foundation models explained" moves to position 8. Organic traffic increases from 12 visitors/month to 340 visitors/month.

**Six Months Later:**
The site is established as a quality resource. Googlebot crawls new articles within 24 hours of publication. The algorithmic related articles create a dense internal linking structure that signals topical authority. AIDefence articles appear in featured snippets and "People also ask" sections. Sarah the recruiter found Sunil's profile through organic search, not just LinkedIn.

### Journey 5: Accessibility User - The Assistive Technology Experience

**Meet James Park - The Keyboard-Only Navigator**

James is a software engineering manager with limited motor control due to cerebral palsy. He navigates the web exclusively with keyboard shortcuts and relies heavily on well-implemented focus management. He's researching AI governance for his team's upcoming project and has encountered countless "modern" websites with beautiful animations that completely break keyboard navigation. He's skeptical of flashy portfolio sites - they're usually inaccessible.

**The Cautious Arrival:**
James tabs through Google search results and presses Enter on "Foundation Models Explained - suniliyer.ca". The page loads and he immediately tests: Tab key moves focus to the first interactive element (skip to main content link). Good sign. He activates it with Enter and focus jumps past the header navigation directly to the article grid. "Someone actually thought about this."

**The Discovery Test:**
James tabs through the masonry grid. Each article card receives visible focus outline (not the dreaded `outline: none`). The focus indicator has strong contrast - he can clearly see which card is active. He reaches "Foundation Models" and presses Enter.

**The Critical Moment:**
The card expands inline with smooth animation. His screen reader announces: "Article expanded. Foundation Models. Heading level 1." Focus automatically moves to the article heading inside the expanded card - he doesn't have to hunt for where the content appeared. "This is well done."

**The Reading Experience:**
As James reads with his screen reader, the semantic HTML structure works perfectly:
- Headings are properly nested (H1 → H2 → H3), making navigation easy
- Links have descriptive text (not "click here" or "read more")
- Images have meaningful alt text describing the generative art
- Code snippets are properly marked up in `<pre><code>` blocks
- The color contrast meets WCAG AA standards (7:1 ratio) - readable even with his visual processing challenges

**The Navigation Test:**
At the bottom of the article, James encounters "Related Articles". He tabs to the first link, but then remembers seeing something in the intro about keyboard navigation. He presses the Right Arrow key experimentally.

The next related article loads inline. His screen reader announces: "Navigated to Large Language Models. Article 2 of 5." Focus remains on the article content - no jarring jump back to the top of the page. James presses Left Arrow - previous article loads. Escape key - the card collapses and focus returns to the original article card in the grid.

"Holy shit, this actually works."

**The Mobile Experience:**
Later that evening, James uses his iPad with VoiceOver. The mobile layout displays single-column cards. When he expands an article, it goes full-screen (smart - easier to read on small viewport). VoiceOver gestures work perfectly - swipe to navigate headings, two-finger scroll to read continuously. The touch targets are large enough (minimum 44x44px) that his imprecise motor control isn't an issue.

**Two Weeks Later:**
James recommends AIDefence to his team in their Slack's accessibility channel: "Rare example of a portfolio site that's actually accessible. Keyboard nav is flawless, screen reader support is solid, focus management is thoughtful. If you're building anything interactive, check out how they handled expandable cards - it's a masterclass."

He also makes a mental note: if this Sunil person is ever looking for work, James wants to interview them. Anyone who understands accessibility this well would be valuable on his team.

### Journey Requirements Summary

These five journeys reveal the complete capability set needed for AIDefence:

**Content Discovery & Reading (Journey 1 - Content Consumer):**
- Masonry grid layout with category-coded visual system
- Inline expandable cards with smooth animations
- Keyboard navigation between articles (arrow keys)
- Algorithmic related article matching
- Summary/key takeaways at top of articles
- Dark mode optimized for extended reading
- Fast load times and professional polish

**Engineering Showcase (Journey 2 - Professional Evaluator):**
- Exceptional performance (Lighthouse ≥90)
- Clean semantic HTML and modern CSS techniques
- Thoughtful responsive design with custom breakpoints
- Instant theme switching without FOUC
- About/Technical Details section explaining architecture
- Production deployment quality
- Visible engineering excellence in implementation

**Scalable Content Pipeline (Journey 3 - Content Administrator):**
- Rich frontmatter schema driving all automation
- Build-time content processing pipeline
- Algorithmic related articles (zero manual linking)
- Auto-generated breadcrumbs, sitemap, SEO metadata
- Template-driven rendering (drop markdown → automatic styling)
- Simple file-based workflow (no CMS required)
- Git-based deployment with auto-deploy

**Search Visibility (Journey 4 - SEO Crawler):**
- Auto-generated sitemap.xml with proper structure
- Meta tags (title, description, Open Graph, JSON-LD)
- Semantic HTML and proper heading hierarchy
- Core Web Vitals optimization
- Internal linking structure creating topic authority
- Clean URL structure and canonical tags
- Mobile-friendly responsive design

**Universal Access (Journey 5 - Accessibility User):**
- Full keyboard navigation support
- Focus management for expandable cards
- Screen reader announcements and semantic HTML
- WCAG 2.1 AA compliance (contrast, focus indicators)
- Large touch targets on mobile
- Progressive enhancement (works without JavaScript)
- Descriptive alt text and ARIA labels

## Innovation & Novel Patterns

### Detected Innovation Areas

AIDefence introduces three genuine innovations that differentiate it from traditional content platforms and portfolio sites:

**1. Expandable Card Revolution - Novel Reading Interaction Pattern**

**The Innovation:**
Inline article expansion with seamless keyboard navigation that transforms browsing into an app-like reading experience. Users discover articles in a masonry grid, expand them full-width inline, and navigate between related articles using arrow keys - all without page loads or URL changes.

**What Makes It Novel:**
- **Challenges traditional blog navigation:** Eliminates the browse → click → page load → back button → repeat cycle that fragments reading flow
- **Goes beyond SPA routing:** Not just client-side navigation, but a fundamentally different interaction model where content expands/collapses in place
- **Keyboard-first reading flow:** Arrow keys for next/previous article navigation while expanded is uncommon in content platforms (mostly seen in image galleries)
- **Combines discovery + reading in one view:** Users maintain spatial context of the grid while reading full articles

**Market Context:**
- Traditional blogs: Separate pages per article (WordPress, Medium, Ghost)
- Modern SPAs: Client-side routing but still full-page transitions (Dev.to, Hashnode)
- Card-based grids: Typically link to separate pages (Pinterest, Design For Mankind)
- Inline expansion exists for: Image galleries, product quick-views, email previews - but rarely for long-form content at this level of sophistication

**Competitive Differentiation:**
No major content platform combines masonry grid browsing + full inline article expansion + keyboard navigation for sequential reading. This is genuinely novel interaction design for blog-style content.

**2. Smart Image Processing - CSS Filter-Based Theme Switching**

**The Innovation:**
Generate one set of dark-optimized illustrations using Stable Diffusion, then use CSS filters (brightness, contrast, hue-rotate) to create light mode variants in real-time. Achieves instant theme switching with 50% storage reduction compared to maintaining separate image sets.

**What Makes It Novel:**
- **Challenges dual-asset convention:** Most dark/light mode implementations maintain two complete image sets or use neutral colors that work in both themes
- **CSS filters for content images at scale:** Filters are common for UI elements, but applying them systematically to 158 unique content illustrations is unconventional
- **Local SD generation with filter pipeline:** Batch-generate consistent dark-mode illustrations once, apply filters client-side for light mode

**Market Context:**
- Standard approach: Generate/source separate images for each theme (Stripe, GitHub, Apple)
- Neutral approach: Use colors that work in both themes (many blogs, documentation sites)
- UI-only filters: CSS filters for icons/UI elements, not primary content images
- Dynamic image generation: Some sites generate images on-the-fly, but typically server-side with storage overhead

**Trade-offs and Honest Assessment:**
- **Pro:** 50% storage savings, instant theme switching, no network requests for theme changes
- **Con:** Potential color accuracy loss in light mode due to filter transformations
- **Fallback:** Acknowledged plan to generate dual image sets during SD batch process if filter quality insufficient

**3. Build-Time Content Intelligence - Zero-Manual-Linking Automation**

**The Innovation:**
Rich frontmatter metadata drives complete automation: algorithmic related article matching (tag intersection + keyword similarity), auto-generated breadcrumbs, auto-populated SEO metadata, and auto-generated sitemap. Adding article #158 requires identical effort as article #1.

**What Makes It Novel:**
- **Challenges manual content management:** Traditional CMSs require manual linking, navigation updates, and sitemap maintenance
- **Build-time pre-computation:** Related articles calculated during build rather than runtime (performance optimization)
- **Frontmatter as single source of truth:** One YAML block drives breadcrumbs, SEO, related articles, categories, and rendering - not scattered across multiple systems
- **Scales without architecture change:** System designed to handle 13 or 158 articles identically without performance degradation

**Market Context:**
- Traditional CMSs: Manual related article selection (WordPress, Drupal)
- Tag-based systems: Show "same tag" articles but lack sophisticated matching (Ghost, Jekyll)
- AI/ML recommendations: Server-side computation with runtime overhead (Medium, Dev.to)
- Build-time optimization: Common for static sites, but usually limited to basic tag matching

**Competitive Differentiation:**
The combination of algorithmic sophistication (tag intersection + keyword similarity) with build-time pre-computation is unusual. Most platforms choose either simple tag matching (fast, not smart) or complex ML (smart, runtime overhead). This approach achieves both intelligence and performance.

### Market Context & Competitive Landscape

**Portfolio Sites:**
- **Typical approach:** Static landing page with project cards linking to case studies or GitHub
- **AIDefence difference:** Functional content platform that demonstrates engineering capabilities through its own implementation

**Content Platforms:**
- **Medium/Substack:** Traditional separate-page navigation, limited keyboard shortcuts, no inline expansion
- **Dev.to/Hashnode:** Modern SPAs with good performance but still page-based navigation
- **Documentation sites (Docusaurus, GitBook):** Excellent keyboard navigation but sidebar-based, not discovery-focused

**Existing Expandable Card Implementations:**
- **E-commerce quick views:** Inline product details but limited to product specs, not long-form content
- **Email clients (Gmail):** Expand/collapse threads but within list view, not masonry grid
- **Image galleries (Pinterest, Google Photos):** Lightbox expansion but for images, not articles

**Gap AIDefence Fills:**
No existing platform combines:
1. Masonry grid content discovery
2. Full inline article expansion
3. Keyboard navigation for sequential reading
4. Build-time content intelligence
5. Portfolio showcase + functional content platform

### Validation Approach

**Innovation 1: Expandable Card Reading Flow**

**Hypothesis:** Inline expansion with keyboard navigation increases session depth and time on site compared to traditional page-based navigation.

**Validation Metrics:**
- **Session Depth:** Users read ≥3 articles per session (target: ≥40% of sessions)
- **Keyboard Adoption:** ≥40% of expanded article sessions use arrow key navigation
- **Time on Site:** Average session ≥15 minutes (indicates engaged reading flow)
- **Mobile Reading Completion:** ≥60% of mobile users scroll to end of expanded articles

**Validation Method:**
- Analytics tracking: expandCard events, keyboardNavigation events, sessionDepth, timeOnSite
- A/B comparison: If needed, compare against traditional separate-page navigation
- Qualitative feedback: Portfolio visitors commenting on "smooth reading experience"

**Success Criteria:** If ≥2 of 4 metrics hit targets in first 3 months, innovation validates. If not, reassess interaction model.

**Innovation 2: CSS Filter Theme Switching**

**Hypothesis:** CSS filters produce acceptable color accuracy in light mode while delivering instant theme switching and 50% storage savings.

**Validation Metrics:**
- **Color Accuracy:** Subjective assessment by designer/users - are light mode illustrations readable and aesthetically acceptable?
- **Theme Switching Adoption:** ≥20% of users toggle dark/light mode (indicates feature is discovered and valued)
- **Performance:** Theme switch completes in <100ms with no flash of unstyled content

**Validation Method:**
- Visual QA: Generate test batch of 10 illustrations, apply filters, assess quality in light mode
- User testing: Show both dark and light versions to 5-10 users, gather feedback on acceptability
- Performance testing: Measure theme switch time across browsers

**Success Criteria:** If filtered images are "acceptable" (7/10 quality rating) and switching is instant, innovation validates. If quality <6/10, fallback to dual image generation.

**Innovation 3: Algorithmic Related Articles**

**Hypothesis:** Tag intersection + keyword similarity scoring produces relevant related article recommendations without manual curation.

**Validation Metrics:**
- **Click-Through Rate:** ≥15% of article readers click a related article link
- **Relevance Score:** Manual audit of 20 random article pairs - are recommendations contextually relevant? (Target: ≥80% relevant)
- **Session Continuation:** Users who click related articles read ≥1 additional article (validates recommendation quality)

**Validation Method:**
- Analytics tracking: relatedArticleClick events, sourceArticle/destinationArticle pairs
- Manual audit: Review algorithmic recommendations for logical relevance
- Feedback collection: Monitor for user complaints about irrelevant recommendations

**Success Criteria:** If CTR ≥15% and relevance ≥80%, innovation validates. If relevance <70%, refine algorithm weights or add manual override capability.

### Risk Mitigation

**Innovation 1 Risks: Expandable Card Interaction**

**Risk:** Users don't discover or adopt keyboard navigation, limiting the "flow state" benefit.
**Mitigation:**
- Visual keyboard hint displayed when article first expands ("Use arrow keys to navigate")
- Tooltip on first visit explaining keyboard shortcuts
- Navigation still works with mouse clicks on "Next/Previous" buttons
- Success doesn't depend on 100% keyboard adoption - even 40% validates the innovation

**Risk:** Inline expansion causes accessibility issues (focus management, screen reader announcements).
**Mitigation:**
- Explicit focus management: expanding card moves focus to article heading, collapsing returns focus to card
- ARIA live regions announce state changes ("Article expanded", "Navigated to [title]")
- Keyboard escape hatch: Escape key always collapses and returns to grid
- Accessibility audit scheduled during development phase

**Risk:** Mobile users find inline expansion confusing or cramped.
**Mitigation:**
- Full-screen expansion on mobile (<768px viewports) for clarity
- Clear close button always visible
- Swipe gestures as alternative to arrow keys on touch devices
- If mobile completion <60%, add explicit mobile-optimized navigation

**Innovation 2 Risks: CSS Filter Theme Switching**

**Risk:** Filtered images have unacceptable color accuracy loss in light mode.
**Mitigation:**
- Fallback plan explicitly documented: Generate dual image sets during SD batch process if needed
- Test batch of 10 images before committing to full 158-article generation
- User testing with 5-10 people to validate acceptability before launch
- Storage savings (50%) only matters if quality is acceptable - fallback doesn't break the project

**Risk:** CSS filters perform poorly on older browsers or mobile devices.
**Mitigation:**
- Feature detection: If CSS filters unsupported, serve neutral-colored fallback images
- Progressive enhancement: Dark mode works perfectly; light mode degrades gracefully if needed
- Browser testing across Chrome, Firefox, Safari (desktop + mobile)

**Innovation 3 Risks: Algorithmic Related Articles**

**Risk:** Algorithm produces weak or irrelevant recommendations, users ignore related articles.
**Mitigation:**
- Fallback hierarchy built in: exact tag matches → partial tag matches → category matches → recent articles
- Manual override capability: Frontmatter can include explicit `related_articles` array if algorithmic matching fails
- Continuous refinement: Monitor CTR and relevance metrics, adjust algorithm weights based on data
- Low stakes: Poor recommendations are annoying but don't break core reading experience

**Risk:** Algorithm doesn't scale beyond 158 articles without performance impact.
**Mitigation:**
- Build-time pre-computation eliminates runtime overhead
- If article count exceeds 500-1000, implement caching strategy for relationship graphs
- Performance monitoring built into success criteria (build time ≤3 minutes)
- Scalability limits explicitly acknowledged in PRD - monitoring required beyond initial threshold

### Innovation Implementation Priority

**MVP (Must Validate First):**
- Expandable card interaction with keyboard navigation (core innovation)
- Basic algorithmic related articles (can refine after launch)

**Growth Phase (Validate After MVP Success):**
- CSS filter theme switching (fallback to dual images acceptable for MVP)
- Refined related article algorithm based on user engagement data

**Vision (Long-term Innovation):**
- Learning path recommendations (curated sequences based on reading patterns)
- Predictive pre-fetching based on user navigation patterns
- AI-generated article summaries and key takeaways

## Web Application Specific Requirements

### Project-Type Overview

AIDefence is a Next.js-based web application deployed on Vercel, optimized for content delivery and portfolio presentation. The architecture prioritizes static generation with client-side interactivity for the expandable card system, SEO optimization for organic discovery, and accessibility compliance for universal access.

### Technical Architecture Considerations

**Framework & Build Strategy:**
- **Framework:** Next.js (App Router) - latest stable release with security patches applied
- **React Version:** Compatible with Next.js stable release
- **Build Mode:** Static Site Generation (SSG) with client-side hydration
- **Deployment:** Vercel with Git-based continuous deployment
- **Content Source:** Markdown files with YAML frontmatter (file-based, no CMS)

**Architecture Pattern:**
- **Static Generation:** All article pages pre-rendered at build time for performance
- **Client-Side State:** Expandable card state, theme switching, keyboard navigation handled in browser
- **No Real-Time Features:** No WebSockets, Server-Sent Events, or live updates required
- **Build-Time Intelligence:** Related article matching, sitemap generation, SEO metadata population during build

### Critical Security Requirements

**MANDATORY: Next.js Security Vulnerability Mitigation**

AIDefence MUST use Next.js versions with critical security patches addressing December 2025 vulnerabilities:

**Vulnerabilities Affecting App Router (CVE-2025-55184 & CVE-2025-55183):**
- **CVE-2025-55184 (HIGH SEVERITY):** Denial of Service - crafted HTTP request causes infinite loop, hangs server process
- **CVE-2025-55183 (MEDIUM SEVERITY):** Source Code Exposure - crafted request returns compiled source of Server Functions

**Affected Versions:** Next.js >=13.3 through 16.x (all releases without patches)

**Required Fixed Versions (choose based on release line):**
- **14.2.35** (for projects on 13.3-14.1.x)
- **15.0.7** (for 15.0.x line)
- **15.1.11** (for 15.1.x line)
- **15.2.8** (for 15.2.x line)
- **15.3.8** (for 15.3.x line)
- **15.4.10** (for 15.4.x line)
- **15.5.9** (for 15.5.x line)
- **16.0.10** (for 16.0.x line)

**Recommended Action:**
- Use latest stable 15.x or 16.x release with security patches (15.5.9+ or 16.0.10+)
- Run `npx fix-react2shell-next` during project initialization to verify version compliance
- NO WORKAROUNDS AVAILABLE - upgrade is mandatory before deployment

**Version Pinning Strategy:**
- Exact version pinning in package.json (no `^` or `~` for Next.js dependency)
- Strict package-lock.json enforcement
- Document baseline working version in project README
- Test dependency updates in staging before production deployment

### Browser Support Matrix

**Target Browser Support:**

**Modern Browsers (Primary Support):**
- Chrome/Edge: Last 2 major versions
- Firefox: Last 2 major versions
- Safari: Last 2 major versions (macOS and iOS)

**Older Browser Compatibility:**
- Chrome/Edge: Back to versions supporting ES6 modules (Chrome 61+, Edge 79+)
- Firefox: Back to version 60+
- Safari: Back to version 11+ (iOS Safari 11+)

**Not Supported:**
- Internet Explorer 11 or earlier (end-of-life, not supported by Next.js or React 18+)

**Polyfill Strategy:**
- Next.js automatic polyfilling for modern features (Promise, fetch, Object.assign)
- CSS feature detection for advanced layout (masonry grid, CSS filters)
- Progressive enhancement: core reading experience works without cutting-edge features

**Testing Requirements:**
- Cross-browser testing on Chrome, Firefox, Safari (desktop + mobile)
- Mobile testing on real devices: iPhone 17 Pro (iOS Safari), iPhone 12, iPad, Android Chrome
- Automated browser compatibility testing in CI/CD pipeline

### Responsive Design Specifications

**Breakpoint Strategy:**

| Breakpoint | Viewport Width | Layout | Grid Columns | Card Behavior |
|------------|---------------|--------|--------------|---------------|
| Mobile | <768px | Single column | 1 | Full-width cards, full-screen expansion |
| Tablet | 768-1023px | Multi-column | 2 | Reduced whitespace, inline expansion |
| Desktop | ≥1024px | Masonry grid | 3 | Variable card heights, inline expansion |

**Tested Viewports:**
- 393px (iPhone 17 Pro portrait)
- 390px (iPhone 12 portrait)
- 768px (iPad portrait)
- 1024px (iPad landscape / small desktop)
- 1440px (Standard desktop)

**Responsive Images:**
- Next.js Image component for automatic optimization
- Responsive srcset for different screen densities (1x, 2x, 3x)
- Lazy loading below-the-fold images
- Dark-optimized illustrations with CSS filter transforms for light mode

### Performance Targets

**Core Web Vitals (Mandatory):**
- **LCP (Largest Contentful Paint):** <2.5 seconds
- **FID (First Input Delay):** <100 milliseconds
- **CLS (Cumulative Layout Shift):** <0.1

**Lighthouse Score Targets:**
- Performance: ≥90
- Accessibility: ≥90 (aiming for 100)
- Best Practices: ≥90
- SEO: ≥90 (aiming for 100)

**Build Performance:**
- Build time for 158 articles: ≤3 minutes
- Incremental builds: ≤30 seconds for single article change
- Bundle size: <200KB initial JS (gzipped)

**Runtime Performance:**
- Time to Interactive (TTI): <3.5 seconds
- Theme switch: <100ms with no FOUC (Flash of Unstyled Content)
- Card expansion animation: 60fps smooth animation
- Keyboard navigation response: <16ms (single frame)

### SEO Strategy & Implementation

**Sitemap Generation:**
- Auto-generated sitemap.xml on every build
- All article URLs included with last-modified dates
- Priority weighting: Homepage (1.0), Articles (0.8), Categories (0.6)
- Submitted to Google Search Console for indexing

**Meta Tags (Per Article):**
```html
<title>{article_title} | AIDefence - Sunil Iyer</title>
<meta name="description" content="{meta_description from frontmatter}" />
<link rel="canonical" href="{production_url}{article_path}" />
```

**Open Graph Tags (Social Sharing):**
```html
<meta property="og:title" content="{article_title}" />
<meta property="og:description" content="{excerpt}" />
<meta property="og:image" content="{article_illustration_url}" />
<meta property="og:url" content="{canonical_url}" />
<meta property="og:type" content="article" />
```

**Structured Data (JSON-LD):**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{article_title}",
  "author": {
    "@type": "Person",
    "name": "Sunil Iyer"
  },
  "datePublished": "{date}",
  "dateModified": "{date}",
  "image": "{article_illustration_url}",
  "publisher": {
    "@type": "Person",
    "name": "Sunil Iyer"
  }
}
```

**Robots.txt Configuration:**
- Allow all crawlers for public content
- Disallow: /api/, /_next/, /admin/ (if applicable)
- Sitemap reference: Sitemap: https://www.suniliyer.ca/sitemap.xml

**URL Structure:**
- Clean semantic URLs: `/articles/foundation-models`, `/articles/multimodal-ai`
- No query parameters for content pages
- Consistent trailing slash strategy

### Accessibility Requirements (WCAG 2.1 AA)

**Keyboard Navigation:**
- Tab: Navigate between interactive elements (cards, links, buttons)
- Enter: Expand article card
- Escape: Collapse expanded card, return focus to card
- Arrow Left/Right: Navigate to previous/next article when expanded
- Skip to main content link (first tab stop)

**Screen Reader Support:**
- Semantic HTML: `<article>`, `<nav>`, `<main>`, `<header>`, proper heading hierarchy
- ARIA live regions for state changes: "Article expanded", "Navigated to {title}"
- Descriptive alt text for all illustrations (generative art context)
- Form labels and input associations (if search implemented)

**Visual Accessibility:**
- Color contrast ratios: ≥7:1 for body text (exceeds WCAG AA 4.5:1 requirement)
- Focus indicators: Visible high-contrast outline on all interactive elements (no `outline: none`)
- Text resizing: Layout remains functional at 200% zoom
- No information conveyed by color alone (category badges include text labels)

**Touch Targets (Mobile):**
- Minimum touch target size: 44x44px for all interactive elements
- Adequate spacing between touch targets to prevent mis-taps
- Swipe gestures as alternative to arrow keys on touch devices

**Progressive Enhancement:**
- Core reading experience works without JavaScript (static HTML content)
- Expandable cards degrade to traditional links if JS disabled
- Theme preference saved in localStorage with server-side default (dark mode)

### Implementation Considerations

**Development Environment:**
- Node.js: LTS version (18.x or 20.x)
- Package manager: npm or yarn with locked dependencies
- TypeScript: Optional but recommended for type safety
- ESLint + Prettier: Code quality and formatting enforcement

**Content Management Workflow:**
1. Create markdown file: `/content/articles/article_NNN_title.md`
2. Add frontmatter with required fields (title, category, tags, date, excerpt, meta_description)
3. Write article content in markdown
4. (Optional) Generate illustration via Stable Diffusion, place in `/public/images/articles/`
5. Git commit and push to trigger Vercel deployment
6. Build process handles: frontmatter parsing, related article matching, sitemap generation, SEO metadata

**Build Process:**
- Parse all markdown files in `/content/articles/`
- Extract frontmatter, render markdown to HTML
- Pre-compute related articles (tag intersection + keyword similarity)
- Generate sitemap.xml with all article URLs
- Populate meta tags from frontmatter
- Static export to Vercel edge network

**Deployment Strategy:**
- Git push to main branch triggers Vercel production deployment
- Preview deployments for pull requests
- Automatic rollback if deployment fails health checks
- Environment variables: NEXT_PUBLIC_SITE_URL for canonical URLs

**Monitoring & Analytics:**
- Vercel Analytics for Core Web Vitals tracking
- (Optional) Google Analytics or privacy-focused alternative for user behavior
- Error tracking: Vercel error monitoring or Sentry integration
- Performance monitoring: Lighthouse CI in GitHub Actions

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach: Experience-First Launch**

AIDefence follows an **Experience MVP** strategy - delivering the innovative expandable card reading experience as the core differentiator while keeping supporting features minimal. This approach prioritizes:

1. **Breakthrough Interaction Model:** Expandable cards with keyboard navigation must work flawlessly - this is the portfolio's engineering showcase
2. **Content Foundation:** 13 existing articles provide immediate substance for testing and demonstration
3. **Engineering Excellence Signals:** Performance, accessibility, and code quality visible to professional evaluators
4. **Scalability Proof:** Architecture handles 13 or 158 articles identically (demonstrates system design thinking)

**Why This MVP Strategy:**
- **Portfolio Impact:** Professional evaluators (recruiters, employers) assess the platform within 2-5 minutes - the innovative interaction must be immediately apparent
- **Content Leverage:** 13 completed articles eliminate content creation as MVP blocker
- **Technical Validation:** Core innovation (expandable cards) can be validated with minimal feature set
- **Solo Development Viable:** One developer can build and launch this MVP in reasonable timeframe

**Resource Requirements:**
- **Team Size:** 1 full-stack developer (Sunil)
- **Skills Required:** Next.js/React, Tailwind CSS, markdown processing, Vercel deployment
- **Timeline Estimate:** 4-8 weeks for MVP (expandable cards + 13 articles + dark mode)
- **Infrastructure:** Vercel free tier, M4 Mac Mini for Stable Diffusion (Growth phase)

### MVP Feature Set (Phase 1 - Launch Ready)

**Core User Journey Supported: Content Consumer Reading Flow**

The MVP focuses exclusively on Journey 1 (Alex Chen - Content Consumer) as the primary user experience. Journeys 2-5 (Professional Evaluator, Content Admin, SEO Crawler, Accessibility User) are supported passively through architecture quality.

**Must-Have Capabilities:**

**Content Discovery:**
- Masonry grid layout displaying all 13 articles
- Category badges for visual organization (color-coded)
- Article cards showing: title, category, reading time, excerpt
- Simple category filter (dropdown or button group)

**Reading Experience (Core Innovation):**
- Click to expand article inline (full-width, smooth animation)
- Keyboard navigation: Enter (expand), Escape (collapse), Arrow keys (next/prev article)
- Proper focus management (WCAG compliant)
- Screen reader announcements for state changes
- Mobile: Full-screen expansion on <768px viewports

**Visual Design:**
- Dark mode only (off-white text on deep charcoal background)
- WCAG 2.1 AA contrast ratios (≥7:1 for body text)
- Generous whitespace (Maude-inspired)
- Manual or placeholder images for articles (SD generation deferred to Growth phase)

**Performance & SEO:**
- Lighthouse score ≥90 on all metrics
- Auto-generated sitemap.xml
- Basic meta tags and Open Graph (manual or template-driven)
- Fast load time (<2.5s LCP)

**Infrastructure:**
- Next.js with security patches (15.5.9+ or 16.0.10+)
- Static site generation (SSG)
- Vercel deployment with Git-based CD
- Markdown files with basic frontmatter (title, category, tags, date, excerpt)

**Explicitly Out of MVP Scope:**
- Light mode / theme toggle
- Algorithmic related articles (manual links or no related articles acceptable)
- Stable Diffusion generated illustrations
- Search functionality
- Advanced animations (scroll-triggered, single-page scroll homepage)
- Video integration
- Newsletter signup
- Analytics beyond Vercel's built-in metrics

### Post-MVP Features

**Phase 2: Growth (30+ Articles)**

**Trigger Conditions:**
- MVP launched successfully with ≥13 articles live
- User feedback validates expandable card concept (≥40% keyboard navigation adoption)
- Ready to scale to 30+ articles

**Growth Features:**
- **Light Mode:** Theme toggle with CSS filter-based image transformation (or dual image sets if filters insufficient)
- **Stable Diffusion Pipeline:** Local batch generation of unique illustrations (M4 Mac Mini)
- **Algorithmic Related Articles:** Tag intersection + keyword similarity scoring (build-time pre-computation)
- **Auto-Generated Sitemap:** Build script generates sitemap.xml from frontmatter automatically
- **Enhanced Frontmatter:** Add video_url, related_context, advanced SEO fields
- **Single-Page Scroll Homepage:** Aziz Khaldi-inspired landing with subtle animations
- **30+ Articles Published:** Expand content library using automated pipeline

**Phase 3: Vision (158 Articles)**

**Long-Term Goals:**
- **Full Article Series:** All 158 AI governance articles published
- **Search Functionality:** Full-text search with result highlighting
- **Analytics Integration:** Track reading patterns, keyboard usage, session depth, validate innovation metrics
- **Newsletter Integration:** Email capture for new article notifications
- **Social Sharing:** Share buttons with proper Open Graph metadata
- **Learning Paths:** Curated article sequences for specific learning outcomes
- **Comment System:** Reader engagement via comments or reactions
- **PWA Features:** Offline reading, install prompts, push notifications for new content

**Timeline:** Vision features implemented based on user demand, portfolio impact, and career opportunities - not on fixed schedule.

### Risk Mitigation Strategy

**Technical Risks**

**Risk: Expandable card implementation more complex than anticipated (state management, focus handling, animations)**
- **Mitigation:** Build proof-of-concept with 3 articles before full implementation
- **Fallback:** If inline expansion proves too complex for MVP timeline, fall back to traditional separate article pages with excellent transitions
- **De-risking:** Allocate 40% of MVP dev time to expandable card interaction (critical path item)

**Risk: Next.js security vulnerabilities or framework instability**
- **Mitigation:** Use exact version pinning (no `^` or `~`), test updates before deploying
- **Mandatory:** Deploy only with patched versions (15.5.9+, 16.0.10+) addressing CVE-2025-55184 and CVE-2025-55183
- **Monitoring:** Subscribe to Next.js security announcements, Vercel status updates

**Risk: Performance targets not met (Lighthouse <90, Core Web Vitals failing)**
- **Mitigation:** Implement performance budgets early, test on real devices throughout development
- **Tooling:** Lighthouse CI in GitHub Actions, Vercel Analytics monitoring
- **Contingency:** If performance issues arise, simplify animations or reduce bundle size before launch

**Risk: Accessibility compliance failure (WCAG 2.1 AA violations)**
- **Mitigation:** Manual testing with keyboard-only navigation, screen reader (VoiceOver/NVDA) throughout development
- **Validation:** Automated axe DevTools scans, manual audit before launch
- **Contingency:** If accessibility issues found late, delay launch to fix (non-negotiable for portfolio quality)

**Market Risks**

**Risk: Professional evaluators (recruiters, employers) don't engage with portfolio long enough to see innovation**
- **Mitigation:** Make expandable card interaction immediately obvious (visual affordance, hover states, brief instructional overlay on first visit)
- **Validation:** Track engagement metrics (session depth, time on site, keyboard usage) in first month
- **Pivot:** If engagement low, add explicit demo video or interactive tutorial highlighting features

**Risk: Expandable cards don't resonate with users (low keyboard adoption, users prefer traditional navigation)**
- **Mitigation:** Provide both keyboard shortcuts AND mouse/touch navigation (don't force innovation)
- **Validation:** Target ≥40% keyboard adoption among engaged users (not 100%)
- **Fallback:** Innovation validated if ≥2 of 4 metrics hit targets (session depth, keyboard usage, time on site, mobile completion)

**Risk: Content quality doesn't match platform quality (articles perceived as shallow despite polished UX)**
- **Mitigation:** 13 existing articles already written and reviewed - content quality is controlled input
- **Validation:** Monitor qualitative feedback from portfolio viewers
- **Enhancement:** Continuously improve article quality based on reader feedback

**Resource Risks**

**Risk: Solo development takes longer than estimated 4-8 weeks**
- **Mitigation:** MVP scope already lean - can cut further if needed (remove category filtering, use simpler grid layout)
- **Minimum Viable MVP:** Expandable cards + 5 articles + dark mode + basic homepage = absolute minimum for portfolio demonstration
- **Timeline Flexibility:** No hard deadline - portfolio can launch when ready without external pressure

**Risk: Stable Diffusion image generation proves too time-consuming or technically challenging**
- **Mitigation:** Deferred to Growth phase (not MVP blocker)
- **Fallback Options:** Use stock photos, abstract geometric patterns, or no images initially
- **Growth Decision:** Only pursue SD generation if MVP successful and time available

**Risk: Loss of motivation or competing priorities**
- **Mitigation:** MVP delivers portfolio value immediately (career opportunities don't require full 158 articles)
- **Milestone Celebration:** Launch with 13 articles is complete achievement, not "incomplete" version
- **Incremental Value:** Each additional article adds value without requiring full vision completion

## Functional Requirements

### Content Discovery & Browsing

- **FR1:** Readers can view all published articles in a masonry grid layout
- **FR2:** Readers can see article preview information (title, category, reading time, published date, excerpt) on each card
- **FR3:** Readers can filter articles by category
- **FR4:** Readers can identify article categories through color-coded visual badges
- **FR5:** Readers can view articles organized by most recent publication date
- **FR6:** Readers can see category groupings for topical organization

### Article Reading Experience

- **FR7:** Readers can expand an article card to display full content inline without page navigation
- **FR8:** Readers can view article content in full-width expanded format
- **FR9:** Readers can read article summary and key takeaways at the beginning of content
- **FR10:** Readers can view properly formatted markdown content (headings, lists, code blocks, tables, links)
- **FR11:** Readers can see article illustrations associated with each piece
- **FR12:** Readers can view related articles suggested at the end of content
- **FR13:** Readers can collapse expanded articles to return to grid view
- **FR14:** Readers can identify their current reading position within an article

### Navigation & Interaction

- **FR15:** Readers can navigate to the next related article without closing expanded view
- **FR16:** Readers can navigate to the previous related article without closing expanded view
- **FR17:** Readers can use keyboard shortcuts to expand articles (Enter key)
- **FR18:** Readers can use keyboard shortcuts to collapse articles (Escape key)
- **FR19:** Readers can use keyboard shortcuts to navigate between articles (Arrow Left/Right keys)
- **FR20:** Readers can use mouse/touch to expand and navigate articles
- **FR21:** Readers can access a homepage that links to the article grid
- **FR22:** Readers can navigate using breadcrumbs showing their location (Home → Category → Article)

### Content Management (Administrator)

- **FR23:** Content administrators can add new articles by creating markdown files with frontmatter
- **FR24:** Content administrators can specify article metadata through frontmatter fields (title, category, tags, date, excerpt, reading_time, difficulty)
- **FR25:** Content administrators can publish articles by committing to Git repository
- **FR26:** Content administrators can trigger automatic deployment through Git push
- **FR27:** Content administrators can add article illustrations to designated directory
- **FR28:** Content administrators can see new articles appear in grid automatically after build
- **FR29:** Content administrators can update existing articles by editing markdown files

### Search Engine Optimization

- **FR30:** Search engines can discover all article URLs through auto-generated sitemap.xml
- **FR31:** Search engines can access article metadata through HTML meta tags (title, description, canonical URL)
- **FR32:** Search engines can access Open Graph metadata for social sharing
- **FR33:** Search engines can parse structured data (JSON-LD schema.org/Article format)
- **FR34:** Search engines can crawl all public content without authentication barriers
- **FR35:** Search engines can access robot.txt configuration specifying crawl permissions
- **FR36:** Search engines can discover updated content through sitemap last-modified dates

### Accessibility & Universal Access

- **FR37:** Keyboard-only users can navigate all interactive elements using Tab key
- **FR38:** Keyboard-only users can access "skip to main content" link as first tab stop
- **FR39:** Keyboard-only users can see visible focus indicators on all interactive elements
- **FR40:** Screen reader users can hear announcements when article state changes (expanded/collapsed/navigated)
- **FR41:** Screen reader users can navigate content using semantic HTML structure (article, nav, main, proper heading hierarchy)
- **FR42:** Screen reader users can hear descriptive alternative text for all images
- **FR43:** Assistive technology users can access ARIA labels for complex interactions
- **FR44:** Mobile touch users can expand articles with full-screen display on small viewports (<768px)
- **FR45:** Mobile users can use touch targets of minimum 44x44px size
- **FR46:** Users can resize text up to 200% without breaking layout functionality
- **FR47:** Users can access core reading content even if JavaScript fails to load (progressive enhancement)

### Visual Presentation & Theming

- **FR48:** Readers can view content in dark mode with high-contrast color ratios (≥7:1 for body text)
- **FR49:** Readers can view content with generous whitespace for comfortable reading
- **FR50:** Readers can see smooth animations during card expansion and collapse
- **FR51:** Readers can see responsive layout adapt to their viewport size (mobile/tablet/desktop)
- **FR52:** Readers can view content on mobile devices (<768px) with single-column layout
- **FR53:** Readers can view content on tablet devices (768-1023px) with two-column layout
- **FR54:** Readers can view content on desktop devices (≥1024px) with three-column masonry grid
- **FR55:** Readers can see category-specific color coding applied consistently throughout interface

### Performance & Build System

- **FR56:** The system can build and deploy all 158 articles within 3 minutes
- **FR57:** The system can generate sitemap automatically during build process
- **FR58:** The system can populate SEO metadata from frontmatter during build
- **FR59:** The system can pre-compute related article relationships during build time
- **FR60:** The system can generate automatic breadcrumbs from category hierarchy
- **FR61:** The system can serve all content as static files (no runtime server dependency)

## Non-Functional Requirements

### Performance

**Response Time:**
- **NFR-PERF-1:** Page load time (Largest Contentful Paint) must be <2.5 seconds on 3G network connection
- **NFR-PERF-2:** Time to Interactive must be <3.5 seconds
- **NFR-PERF-3:** Card expansion animation must maintain 60fps (16ms frame time)
- **NFR-PERF-4:** Keyboard navigation response must be <16ms (single frame)
- **NFR-PERF-5:** Theme switch must complete in <100ms with zero flash of unstyled content

**Lighthouse Metrics:**
- **NFR-PERF-6:** Lighthouse Performance score must be ≥90
- **NFR-PERF-7:** Lighthouse Best Practices score must be ≥90
- **NFR-PERF-8:** Lighthouse SEO score must be ≥90

**Core Web Vitals:**
- **NFR-PERF-9:** First Input Delay (FID) must be <100 milliseconds
- **NFR-PERF-10:** Cumulative Layout Shift (CLS) must be <0.1

**Build Performance:**
- **NFR-PERF-11:** Full site build for 158 articles must complete in ≤3 minutes
- **NFR-PERF-12:** Incremental build for single article change must complete in ≤30 seconds
- **NFR-PERF-13:** Initial JavaScript bundle size must be <200KB (gzipped)

### Accessibility

**Standards Compliance:**
- **NFR-ACCESS-1:** All content must meet WCAG 2.1 Level AA compliance
- **NFR-ACCESS-2:** Zero WCAG AA violations detected by automated testing tools (axe DevTools, Lighthouse)

**Keyboard Navigation:**
- **NFR-ACCESS-3:** All interactive elements must be navigable using keyboard only (Tab, Enter, Escape, Arrow keys)
- **NFR-ACCESS-4:** All interactive elements must display visible focus indicators with minimum 3:1 contrast ratio
- **NFR-ACCESS-5:** "Skip to main content" link must be first tab stop on every page

**Screen Reader Support:**
- **NFR-ACCESS-6:** All state changes must announce to screen readers via ARIA live regions
- **NFR-ACCESS-7:** All content must be navigable using screen readers (NVDA, JAWS, VoiceOver)
- **NFR-ACCESS-8:** All images must have descriptive alternative text

**Visual Accessibility:**
- **NFR-ACCESS-9:** Body text must maintain ≥7:1 color contrast ratio (exceeds WCAG AA 4.5:1 requirement)
- **NFR-ACCESS-10:** Layout must remain functional when text is resized up to 200%
- **NFR-ACCESS-11:** No information conveyed by color alone

**Touch Accessibility:**
- **NFR-ACCESS-12:** All touch targets must be minimum 44x44px size
- **NFR-ACCESS-13:** Touch targets must have adequate spacing to prevent accidental taps

**Progressive Enhancement:**
- **NFR-ACCESS-14:** Core reading content must be accessible without JavaScript enabled

### Security

**Dependency Security:**
- **NFR-SEC-1:** Next.js version must include security patches for CVE-2025-55184 (DoS vulnerability) and CVE-2025-55183 (source code exposure)
- **NFR-SEC-2:** All npm dependencies must use exact version pinning (no `^` or `~` in package.json)
- **NFR-SEC-3:** Security patches must be tested in staging before production deployment

**Content Security:**
- **NFR-SEC-4:** All external content loaded over HTTPS only
- **NFR-SEC-5:** No sensitive information (API keys, credentials) committed to Git repository

**Deployment Security:**
- **NFR-SEC-6:** Production deployment must require passing automated tests
- **NFR-SEC-7:** Failed deployments must automatically roll back to last known good state

### Reliability

**Availability:**
- **NFR-REL-1:** Site must be accessible 99.9% of time (leverages Vercel SLA)
- **NFR-REL-2:** Deployment must complete successfully or roll back automatically

**Build Stability:**
- **NFR-REL-3:** Build process must be deterministic (same input produces identical output)
- **NFR-REL-4:** Build failures must not deploy broken state to production
- **NFR-REL-5:** Adding new articles must not break existing articles (regression prevention)

**Browser Compatibility:**
- **NFR-REL-6:** All features must work on Chrome 61+, Firefox 60+, Safari 11+, Edge 79+
- **NFR-REL-7:** Core reading experience must work on mobile Safari (iOS 11+) and Chrome Mobile

**Error Handling:**
- **NFR-REL-8:** 404 errors for missing articles must display helpful error page
- **NFR-REL-9:** Build errors must provide clear diagnostic messages for troubleshooting

### Maintainability

**Code Quality:**
- **NFR-MAIN-1:** Code must pass ESLint with zero errors
- **NFR-MAIN-2:** Code formatting must be enforced via Prettier
- **NFR-MAIN-3:** TypeScript (if used) must have zero type errors before deployment

**Content Management:**
- **NFR-MAIN-4:** Adding new article must require ≤10 minutes (markdown creation to deployed)
- **NFR-MAIN-5:** Article frontmatter must be the single source of truth for all metadata (no manual updates elsewhere)
- **NFR-MAIN-6:** Build errors related to malformed frontmatter must provide clear error messages

**Documentation:**
- **NFR-MAIN-7:** README must document local development setup, build process, and deployment procedure
- **NFR-MAIN-8:** Frontmatter schema must be documented with required and optional fields

**Deployment:**
- **NFR-MAIN-9:** Git push to main branch must trigger automatic deployment
- **NFR-MAIN-10:** Preview deployments must be created for all pull requests
