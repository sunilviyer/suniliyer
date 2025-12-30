# AIDefence V2 - Implementation Plan & Epics

**Project**: AIDefence V2 - Learning Paths Platform
**Domain**: suniliyer.ca
**Deployment**: Git → Vercel
**Template**: Rayo Next.js Creative Template (GSAP ScrollTrigger animations)
**Created**: 2025-12-22

---

## Implementation Strategy

Each epic follows this structure:
1. **Create** feature/page with Rayo animations
2. **Deploy** to suniliyer.ca via Git + Vercel
3. **Manual Testing** by Sunil
4. **Confirmation** before moving to next epic

**Critical**: All animations must follow Rayo template patterns (GSAP ScrollTrigger, Framer Motion, smooth transitions).

---

## Epic Breakdown

### Epic 1: Homepage - Foundation & Deployment

**Goal**: Deploy working homepage to suniliyer.ca with theme toggle, responsive design, and core navigation.

#### Stories:
1. **Story 1.1**: Set up Next.js project structure from Rayo template
   - Copy Rayo base structure
   - Configure Next.js 14 with App Router
   - Install dependencies (GSAP, Framer Motion, etc.)
   - Configure Tailwind CSS with Rayo custom classes

2. **Story 1.2**: Create homepage header component
   - Logo ring with image
   - "Sunil Iyer" name display
   - Theme toggle (☀️/🌙) with localStorage persistence
   - Hamburger menu (☰)
   - Responsive behavior
   - Rayo-style backdrop blur and fixed positioning

3. **Story 1.3**: Create homepage hero section
   - Large headline with Funnel Display font
   - Tagline and description
   - CTA buttons
   - GSAP fade-in animations on page load
   - Responsive breakpoints (desktop/tablet/mobile)

4. **Story 1.4**: Create 5 learning paths showcase section
   - Card-based layout showing all 5 paths:
     - History: "From Dartmouth to DeepMind"
     - Terminology: "How AI Actually Works"
     - Risk: "When AI Goes Wrong"
     - Responsibility: "AI Governance Frameworks"
     - Future: "What's Next for AI"
   - Hover animations (Rayo-style lift + border)
   - Click to navigate to learning path pages
   - Use placeholder images initially

5. **Story 1.5**: Configure deployment pipeline
   - Connect GitHub repository to Vercel
   - Configure custom domain: suniliyer.ca
   - Set up environment variables
   - Configure build settings for Next.js

6. **Story 1.6**: Deploy Homepage to Production
   - Git commit and push
   - Vercel automatic deployment
   - Verify suniliyer.ca loads correctly
   - Test all interactive elements

**Acceptance Criteria**:
- ✅ Homepage loads at suniliyer.ca
- ✅ Theme toggle works (light/dark mode persists)
- ✅ All 5 learning path cards visible and clickable
- ✅ Responsive on mobile, tablet, desktop
- ✅ Animations smooth (GSAP, Framer Motion)
- ✅ No console errors

**Deployment**: Git push → Vercel auto-deploy
**Testing**: Manual testing by Sunil
**Status**: Pending

---

### Epic 2: History Learning Path Page - StackCards Implementation

**Goal**: Deploy History learning path index page with Rayo StackCards scroll animation and all 15 concept cards.

#### Stories:
1. **Story 2.1**: Implement Rayo StackCards component
   - Port StackCards.tsx from Rayo template
   - GSAP ScrollTrigger setup
   - Pin/unpin scroll behavior
   - Card stacking animation (y-axis transformation)
   - Responsive card heights

2. **Story 2.2**: Create History path layout structure
   - Header (consistent with homepage)
   - Left sidebar: 5 learning paths navigation
     - History (active)
     - Terminology
     - Risk
     - Responsibility
     - Future
   - Right content area: Large headline "History from Dartmouth to DeepMind"
   - Description text below headline

3. **Story 2.3**: Create concept card component
   - Full-height card (85vh)
   - Background image with overlay gradient
   - Card number (Concept 01, 02, etc.)
   - Tags (always visible)
   - Title (always visible, 48px font)
   - **TLDR (hidden by default, reveals on hover)**
   - Cross-path badges
   - Hover effects:
     - Border color change to moss green
     - Card lift (translateY)
     - TLDR slide-in animation
     - Tags background change

4. **Story 2.4**: Populate all 15 History concept cards
   - Card 01: The Building Blocks – What AI Actually Is
   - Card 02: The AI Family Tree – Types of AI Systems
   - Card 03: The AI Technology Stack – From Chips to ChatGPT
   - Card 04: AI History – From Dartmouth to DeepMind
   - Card 05: Strong vs. Weak AI
   - Card 06: Machine Learning Demystified
   - Card 07: Deep Learning Decoded
   - Card 08: Generative AI Explained
   - Card 09: Large Language Models
   - Card 10: AI vs. Automation
   - Card 11: The Data Behind AI
   - Card 12: Foundation Models
   - Card 13: Multimodal AI
   - Card 14: AI Compute – Why GPUs Rule
   - Card 15: Environmental Cost of AI
   - Use placeholder images (or first batch of created images)

5. **Story 2.5**: Implement GSAP ScrollTrigger stacking animation
   - Cards positioned below each other initially (y: index * cardHeight)
   - On scroll down: cards animate to y:0 (stacking effect)
   - Pin cards as they stack
   - Smooth scrub animation tied to scroll position
   - Responsive breakpoints for mobile (smaller cards)

6. **Story 2.6**: Add responsive design
   - Desktop (>1024px): Full stacking effect, large cards
   - Tablet (768-1024px): Reduced card heights, adjusted spacing
   - Mobile (<768px): Smaller cards, simplified stacking

7. **Story 2.7**: Deploy History Learning Path Page
   - Route: /learn/history
   - Git commit and push
   - Vercel auto-deploy
   - Verify suniliyer.ca/learn/history loads

**Acceptance Criteria**:
- ✅ suniliyer.ca/learn/history loads with all 15 cards
- ✅ StackCards scroll animation works (GSAP ScrollTrigger)
- ✅ Cards stack on top of each other on scroll
- ✅ TLDR hidden by default, shows on hover
- ✅ Tags, title always visible
- ✅ Cross-path badges display correctly
- ✅ 5 learning paths navigation on left works
- ✅ Responsive on all devices
- ✅ No console errors, smooth 60fps animations

**Deployment**: Git push → Vercel auto-deploy
**Testing**: Manual testing by Sunil - Test scroll behavior, hover states, responsiveness
**Status**: Pending

---

### Epic 3: History Article Detail Pages - All 15 Articles

**Goal**: Deploy all 15 individual History concept articles with Rayo blog-article template styling, MDX rendering, and navigation.

#### Stories:
1. **Story 3.1**: Implement article detail page template
   - Route: /learn/history/[slug]
   - Breadcrumbs: Home → Learning Paths → History & Context → Article
   - Article metadata (date, read time)
   - Article title (H1)
   - Tags (clickable, filterable)
   - Hero image/thumbnail
   - Excerpt/TLDR in large text
   - Table of contents (auto-generated from H2 headings)
   - Smooth scroll to sections on TOC click

2. **Story 3.2**: Implement MDX content rendering
   - MDX setup with next-mdx-remote
   - Custom components for:
     - Headings (H2, H3 with anchor links)
     - Paragraphs with proper typography
     - Lists (UL, OL)
     - Blockquotes (Rayo-style with left border)
     - Code blocks (syntax highlighting)
     - Images (responsive, lazy loading)

3. **Story 3.3**: Create Related Concepts section
   - Grid layout (3 columns on desktop, 1 on mobile)
   - Related concept cards from same path
   - Hover effect (border, lift)
   - Click to navigate

4. **Story 3.4**: Create Cross-Path References section
   - Display connections to other learning paths
   - Badge for each path (Terminology, Responsibility, etc.)
   - Reason/description text
   - Links to specific articles in other paths

5. **Story 3.5**: Create Author bio section
   - Sunil Iyer photo (circular avatar)
   - Name, title
   - Bio text
   - Social links (LinkedIn, Twitter, Email)

6. **Story 3.6**: Create Prev/Next navigation
   - Previous article (if exists)
   - Next article (in sequence)
   - Back to History path overview
   - Hover animations

7. **Story 3.7**: Create all 15 History article MDX files
   - `/content/articles/history/what-ai-actually-is.mdx`
   - `/content/articles/history/ai-family-tree.mdx`
   - `/content/articles/history/ai-technology-stack.mdx`
   - `/content/articles/history/ai-history-timeline.mdx`
   - `/content/articles/history/strong-vs-weak-ai.mdx`
   - `/content/articles/history/machine-learning-explained.mdx`
   - `/content/articles/history/deep-learning-explained.mdx`
   - `/content/articles/history/generative-ai-explained.mdx`
   - `/content/articles/history/large-language-models.mdx`
   - `/content/articles/history/ai-vs-automation.mdx`
   - `/content/articles/history/data-behind-ai.mdx`
   - `/content/articles/history/foundation-models.mdx`
   - `/content/articles/history/multimodal-ai.mdx`
   - `/content/articles/history/ai-compute-gpus.mdx`
   - `/content/articles/history/environmental-cost-ai.mdx`
   - Use existing article content from `/content/articles/final/`
   - Transform to MDX format
   - Add frontmatter (title, slug, date, tags, etc.)

8. **Story 3.8**: Implement smooth page transitions
   - Rayo-style page transitions (Framer Motion)
   - Fade in on load
   - Smooth scroll behavior
   - Loading states

9. **Story 3.9**: Deploy all History articles
   - Routes: /learn/history/[slug] for all 15 articles
   - Git commit and push
   - Vercel auto-deploy
   - Verify all articles load

**Acceptance Criteria**:
- ✅ All 15 History articles load at /learn/history/[slug]
- ✅ Article content renders correctly from MDX
- ✅ Table of contents works (smooth scroll)
- ✅ Related concepts section displays 3 cards
- ✅ Cross-path references show connections
- ✅ Author bio displays with photo
- ✅ Prev/Next navigation works
- ✅ Breadcrumbs functional
- ✅ Tags clickable (filter/navigate)
- ✅ Hero images display
- ✅ Responsive on all devices
- ✅ Page transitions smooth (Framer Motion)
- ✅ No console errors

**Deployment**: Git push → Vercel auto-deploy
**Testing**: Manual testing by Sunil - Test each article, navigation, TOC, related content
**Status**: Pending

---

### Epic 4: Terminology Learning Path Page - StackCards Implementation

**Goal**: Deploy Terminology learning path index page with 24 concept cards using StackCards animation.

#### Stories:
1. **Story 4.1**: Create Terminology path layout
   - Reuse StackCards component from Epic 2
   - Left sidebar: 5 learning paths (Terminology active)
   - Headline: "How AI Actually Works"
   - Description: "Master AI terminology from machine learning to neural networks..."
   - Same structure as History path

2. **Story 4.2**: Populate all 24 Terminology concept cards
   - Cards 1-14: Core terminology concepts
   - Cards 15-19: Example cards (Netflix, Google Search, ChatGPT, etc.)
   - Card 20-24: Additional examples
   - Use placeholder images
   - TLDR hidden by default, reveals on hover

3. **Story 4.3**: Implement GSAP StackCards animation
   - Same animation as History path
   - 24 cards stacking on scroll

4. **Story 4.4**: Deploy Terminology Learning Path Page
   - Route: /learn/terminology
   - Git push → Vercel auto-deploy

**Acceptance Criteria**:
- ✅ suniliyer.ca/learn/terminology loads with all 24 cards
- ✅ StackCards animation works
- ✅ Navigation to Terminology from homepage works
- ✅ Consistent design with History path

**Deployment**: Git push → Vercel auto-deploy
**Testing**: Manual testing by Sunil
**Status**: Pending

---

### Epic 5: Terminology Article Detail Pages - All 24 Articles

**Goal**: Deploy all 24 Terminology concept articles.

#### Stories:
1. **Story 5.1**: Reuse article template from Epic 3
   - Same layout, different path
   - Breadcrumbs: Home → Learning Paths → Terminology → Article

2. **Story 5.2**: Create all 24 Terminology article MDX files
   - `/content/articles/terminology/machine-learning-terminology.mdx`
   - `/content/articles/terminology/supervised-unsupervised.mdx`
   - ... (all 24 articles)

3. **Story 5.3**: Deploy all Terminology articles
   - Routes: /learn/terminology/[slug]
   - Git push → Vercel auto-deploy

**Acceptance Criteria**:
- ✅ All 24 Terminology articles load
- ✅ Cross-path references to History, Risk work
- ✅ Example cards embedded in relevant articles

**Deployment**: Git push → Vercel auto-deploy
**Testing**: Manual testing by Sunil
**Status**: Pending

---

### Epic 6: Risk Learning Path Page - StackCards Implementation

**Goal**: Deploy Risk learning path index page with 28 concept cards.

#### Stories:
1. **Story 6.1**: Create Risk path layout
   - Headline: "When AI Goes Wrong"
   - Description: "Explore AI harms from algorithmic bias to deepfakes..."
   - 28 concept cards

2. **Story 6.2**: Populate all 28 Risk concept cards
   - Cards 1-20: Core risk concepts
   - Cards 21-28: Example cards (Amazon Hiring, COMPAS, etc.)

3. **Story 6.3**: Deploy Risk Learning Path Page
   - Route: /learn/risk

**Acceptance Criteria**:
- ✅ suniliyer.ca/learn/risk loads with all 28 cards
- ✅ StackCards animation works

**Deployment**: Git push → Vercel auto-deploy
**Testing**: Manual testing by Sunil
**Status**: Pending

---

### Epic 7: Risk Article Detail Pages - All 28 Articles

**Goal**: Deploy all 28 Risk concept articles.

#### Stories:
1. **Story 7.1**: Create all 28 Risk article MDX files
   - `/content/articles/risk/algorithmic-bias.mdx`
   - `/content/articles/risk/ai-hallucinations.mdx`
   - ... (all 28 articles)

2. **Story 7.2**: Deploy all Risk articles
   - Routes: /learn/risk/[slug]

**Acceptance Criteria**:
- ✅ All 28 Risk articles load
- ✅ Example cards (COMPAS, Amazon, etc.) render properly

**Deployment**: Git push → Vercel auto-deploy
**Testing**: Manual testing by Sunil
**Status**: Pending

---

### Epic 8: Responsibility Learning Path Page - StackCards Implementation

**Goal**: Deploy Responsibility learning path index page with 75 concept cards.

**Note**: This is the largest path (75 cards) covering legal frameworks, governance, compliance.

#### Stories:
1. **Story 8.1**: Create Responsibility path layout
   - Headline: "AI Governance Frameworks"
   - Description: "Navigate AI laws from GDPR to the EU AI Act..."
   - 75 concept cards (may need pagination or filtering)

2. **Story 8.2**: Implement optional filtering
   - Filter by category:
     - Legal Frameworks
     - Governance
     - Compliance
     - Policy Development
     - Risk Management
   - Dropdown or tab navigation
   - Filter cards without page reload

3. **Story 8.3**: Populate all 75 Responsibility concept cards
   - EU AI Act, GDPR, governance frameworks, etc.
   - Use placeholder images

4. **Story 8.4**: Deploy Responsibility Learning Path Page
   - Route: /learn/responsibility

**Acceptance Criteria**:
- ✅ suniliyer.ca/learn/responsibility loads with all 75 cards
- ✅ Optional filtering works
- ✅ StackCards animation handles large number of cards
- ✅ Performance remains smooth (60fps)

**Deployment**: Git push → Vercel auto-deploy
**Testing**: Manual testing by Sunil
**Status**: Pending

---

### Epic 9: Responsibility Article Detail Pages - All 75 Articles

**Goal**: Deploy all 75 Responsibility concept articles.

#### Stories:
1. **Story 9.1**: Create all 75 Responsibility article MDX files
   - `/content/articles/responsibility/eu-ai-act.mdx`
   - `/content/articles/responsibility/gdpr-and-ai.mdx`
   - ... (all 75 articles)
   - Many articles already exist in `/content/articles/final/`
   - Transform to MDX format

2. **Story 9.2**: Deploy all Responsibility articles
   - Routes: /learn/responsibility/[slug]

**Acceptance Criteria**:
- ✅ All 75 Responsibility articles load
- ✅ Resource cards (templates, checklists) embedded properly
- ✅ Cross-path references to Risk, Terminology work

**Deployment**: Git push → Vercel auto-deploy
**Testing**: Manual testing by Sunil
**Status**: Pending

---

### Epic 10: Future Learning Path Page - StackCards Implementation

**Goal**: Deploy Future learning path index page with 20 concept cards.

#### Stories:
1. **Story 10.1**: Create Future path layout
   - Headline: "What's Next for AI"
   - Description: "Explore AGI, existential risk, and emerging trends..."
   - 20 concept cards

2. **Story 10.2**: Populate all 20 Future concept cards
   - AGI, AI careers, future trends, etc.

3. **Story 10.3**: Deploy Future Learning Path Page
   - Route: /learn/future

**Acceptance Criteria**:
- ✅ suniliyer.ca/learn/future loads with all 20 cards
- ✅ StackCards animation works

**Deployment**: Git push → Vercel auto-deploy
**Testing**: Manual testing by Sunil
**Status**: Pending

---

### Epic 11: Future Article Detail Pages - All 20 Articles

**Goal**: Deploy all 20 Future concept articles.

#### Stories:
1. **Story 11.1**: Create all 20 Future article MDX files
   - `/content/articles/future/agi-timeline.mdx`
   - `/content/articles/future/ai-governance-careers.mdx`
   - ... (all 20 articles)

2. **Story 11.2**: Deploy all Future articles
   - Routes: /learn/future/[slug]

**Acceptance Criteria**:
- ✅ All 20 Future articles load
- ✅ Career resources embedded
- ✅ AIGP study guide linked

**Deployment**: Git push → Vercel auto-deploy
**Testing**: Manual testing by Sunil
**Status**: Pending

---

### Epic 12: Example Cards - Standalone Pages (Optional)

**Goal**: Create standalone pages for all 28 example cards (Amazon Hiring, COMPAS, etc.)

#### Stories:
1. **Story 12.1**: Create example card template
   - Route: /examples/[slug]
   - Company/case study logo
   - Summary
   - Detailed analysis
   - Related concepts
   - References/sources

2. **Story 12.2**: Create all 28 example card pages
   - Amazon Hiring
   - COMPAS
   - Apple Card
   - Gender Shades
   - ... (all 28)

3. **Story 12.3**: Deploy example cards
   - Routes: /examples/[slug]

**Acceptance Criteria**:
- ✅ All 28 example cards load as standalone pages
- ✅ Embedded in relevant articles
- ✅ Can be accessed directly

**Deployment**: Git push → Vercel auto-deploy
**Testing**: Manual testing by Sunil
**Status**: Optional (post-MVP)

---

### Epic 13: Resource Cards - Templates & Guides (Optional)

**Goal**: Create downloadable resource pages (templates, checklists, guides)

#### Stories:
1. **Story 13.1**: Create resource page template
   - Route: /resources/[slug]
   - Preview of template/guide
   - Download button (PDF)
   - Related articles
   - Category tags

2. **Story 13.2**: Create all 10 resource pages
   - Risk Assessment Template
   - Bias Audit Checklist
   - AI Policy Templates
   - ... (all 10)

3. **Story 13.3**: Generate PDFs with watermark
   - "Generated by AIDefence" watermark
   - Professional formatting
   - Sunil Iyer branding

4. **Story 13.4**: Deploy resource cards
   - Routes: /resources/[slug]

**Acceptance Criteria**:
- ✅ All 10 resource cards load
- ✅ PDF downloads work
- ✅ Embedded in relevant articles

**Deployment**: Git push → Vercel auto-deploy
**Testing**: Manual testing by Sunil
**Status**: Optional (post-MVP)

---

### Epic 14: SEO & Performance Optimization

**Goal**: Optimize SEO, performance, and implement 301 redirects from old articles.

#### Stories:
1. **Story 14.1**: Implement SEO metadata
   - Dynamic meta tags for all pages
   - Open Graph tags
   - Twitter Cards
   - Structured data (JSON-LD)
   - Canonical URLs

2. **Story 14.2**: Generate sitemap.xml
   - All learning paths
   - All articles (162 total)
   - Submit to Google Search Console

3. **Story 14.3**: Implement 301 redirects
   - Old article URLs → New learning path URLs
   - `/articles/algorithmic-bias-how-ai-discriminates-and-why` → `/learn/risk/algorithmic-bias`
   - All 158+ redirects from old structure

4. **Story 14.4**: Optimize images
   - Convert JPG → WebP
   - Responsive images (srcset)
   - Lazy loading
   - Blur placeholder on load

5. **Story 14.5**: Optimize performance
   - Code splitting
   - Bundle optimization
   - Font optimization (Funnel Display font subsetting)
   - GSAP bundle optimization
   - Lighthouse score > 90

6. **Story 14.6**: Deploy SEO optimizations
   - Verify Google Search Console
   - Submit sitemap
   - Monitor rankings

**Acceptance Criteria**:
- ✅ All pages have proper meta tags
- ✅ Sitemap generated and submitted
- ✅ 301 redirects working
- ✅ Images optimized (WebP)
- ✅ Lighthouse Performance > 90
- ✅ No broken links

**Deployment**: Git push → Vercel auto-deploy
**Testing**: Manual testing by Sunil + automated Lighthouse tests
**Status**: Post-MVP

---

### Epic 15: Analytics & Monitoring (Optional)

**Goal**: Implement analytics and error monitoring.

#### Stories:
1. **Story 15.1**: Set up Google Analytics 4
   - Track page views
   - Track learning path navigation
   - Track article reads
   - Track download clicks (resources)

2. **Story 15.2**: Set up error monitoring (Sentry)
   - Capture client-side errors
   - Capture server-side errors
   - Alert on critical errors

3. **Story 15.3**: Deploy analytics
   - Verify tracking works

**Acceptance Criteria**:
- ✅ Google Analytics tracking page views
- ✅ Sentry capturing errors
- ✅ Privacy policy updated

**Deployment**: Git push → Vercel auto-deploy
**Testing**: Manual testing by Sunil
**Status**: Post-MVP

---

## Content Creation Epics

**Note**: Based on content audit (see `/docs/content-creation-status.md`), we have:
- **140 articles already created** in `/content/articles/final/`
- **22 articles need to be written**
- **Responsibility & Future paths**: 100% complete (no new content needed)
- **History, Terminology, Risk paths**: Need content creation

---

### Epic 2.5: Create Missing History Path Articles (4 articles)

**Goal**: Write 4 missing History articles before deploying Epic 3 (Article Detail Pages)

**Articles Needed**:
1. The Building Blocks – What AI Actually Is
2. The AI Family Tree – Types of AI Systems
3. Machine Learning Demystified
4. *(All other 11 articles already exist)*

#### Stories:
1. **Story 2.5.1**: Write "The Building Blocks – What AI Actually Is"
   - OECD AI Definition (Nov 2023)
   - ISO/IEC 22989:2022 Terminology
   - What Makes AI Different from Traditional Software
   - Why Definitions Matter for Governance
   - **Target**: 2,500-3,000 words
   - Save to: `/content/articles/final/article-1-the-building-blocks-what-ai-actually-is.md`

2. **Story 2.5.2**: Write "The AI Family Tree – Types of AI Systems"
   - Narrow vs. General vs. AGI
   - OECD Classification Framework (5 dimensions)
   - Use Case Categories
   - **Target**: 2,500-3,000 words
   - Save to: `/content/articles/final/article-2-ai-family-tree-types-of-ai-systems.md`

3. **Story 2.5.3**: Write "Machine Learning Demystified"
   - What Is Machine Learning?
   - Supervised Learning (labeled data)
   - Unsupervised Learning (pattern discovery)
   - Reinforcement Learning (reward-based)
   - Real-World Examples
   - **Target**: 2,500-3,000 words
   - Save to: `/content/articles/final/article-6-machine-learning-demystified.md`

4. **Story 2.5.4**: Verify all 15 History articles exist
   - Articles 3, 4, 5, 7-15 already exist
   - Total: 15 articles ready for MDX conversion

**Acceptance Criteria**:
- ✅ 4 new History articles written (2,500-3,000 words each)
- ✅ All 15 History articles exist in `/content/articles/final/`
- ✅ Articles follow existing tone and structure
- ✅ Include cross-references to Terminology, Responsibility paths

**Timeline**: Complete before starting Epic 3
**Status**: Pending

---

### Epic 5.5: Create Missing Terminology Path Articles (10 articles)

**Goal**: Write 10 missing Terminology articles before deploying Epic 5 (Article Detail Pages)

**Note**: Many concepts are embedded in History articles 7-12. Extract and expand into standalone articles.

**Articles Needed**:
1. What Is Machine Learning? (Terminology Deep Dive)
2. Supervised vs. Unsupervised Learning
3. Neural Networks Architecture Basics
4. Training Data, Validation Data, Test Data
5. Bias vs. Variance Tradeoff
6. CNNs for Images
7. RNNs for Sequences
8. Transformers Architecture
9. Pre-training and Fine-tuning
10. Hyperparameters vs. Parameters

#### Stories:
1. **Story 5.5.1**: Write "What Is Machine Learning? (Terminology Deep Dive)"
   - Tom Mitchell's Definition
   - Supervised Learning Explained
   - Unsupervised Learning Explained
   - Reinforcement Learning Explained
   - When to Use Each Paradigm
   - **Target**: 2,500-3,000 words
   - **Extract from**: History article-6 (Machine Learning)

2. **Story 5.5.2**: Write "Supervised vs. Unsupervised Learning"
   - Supervised Learning: Classification, Regression
   - Unsupervised Learning: Clustering, Dimensionality Reduction
   - Semi-Supervised Learning
   - When to Use Each
   - **Target**: 2,000-2,500 words

3. **Story 5.5.3**: Write "Neural Networks Architecture Basics"
   - Neurons, Weights, Biases
   - Activation Functions (ReLU, Sigmoid, Tanh)
   - Feedforward vs. Recurrent Networks
   - Backpropagation (How Networks Learn)
   - **Target**: 2,500-3,000 words
   - **Extract from**: History article-7 (Deep Learning)

4. **Story 5.5.4**: Write "Training Data, Validation Data, Test Data"
   - Training Set: Where AI Learns
   - Validation Set: Hyperparameter Tuning
   - Test Set: Unbiased Evaluation
   - Overfitting vs. Underfitting
   - Cross-Validation Techniques
   - **Target**: 2,000-2,500 words
   - **Extract from**: History article-11 (Data Behind AI)

5. **Story 5.5.5**: Write "Bias vs. Variance Tradeoff"
   - What Is Bias (Underfitting)?
   - What Is Variance (Overfitting)?
   - The Tradeoff Curve
   - Regularization Techniques
   - **Target**: 2,000-2,500 words

6. **Story 5.5.6**: Write "CNNs for Images"
   - How CNNs Work (Convolution, Pooling)
   - AlexNet (2012 Breakthrough)
   - ResNet, VGG Architectures
   - Use Cases: Image Classification, Object Detection
   - **Target**: 2,500-3,000 words
   - **Extract from**: History article-7 (Deep Learning)

7. **Story 5.5.7**: Write "RNNs for Sequences"
   - How RNNs Work (Memory, Hidden State)
   - Vanishing Gradient Problem
   - LSTM (Long Short-Term Memory)
   - GRU (Gated Recurrent Units)
   - Replaced by Transformers for NLP
   - **Target**: 2,500-3,000 words
   - **Extract from**: History article-7, article-8

8. **Story 5.5.8**: Write "Transformers Architecture"
   - Attention Mechanism (Query, Key, Value)
   - Self-Attention
   - Multi-Head Attention
   - Positional Encoding
   - Encoder-Decoder Architecture
   - GPT (Decoder-Only), BERT (Encoder-Only)
   - **Target**: 3,000-3,500 words
   - **Extract from**: History article-8, article-9

9. **Story 5.5.9**: Write "Pre-training and Fine-tuning"
   - Pre-training Phase (Unlabeled Data, Self-Supervised)
   - Fine-tuning Phase (Task-Specific, Labeled Data)
   - Transfer Learning Benefits
   - Few-Shot, Zero-Shot Learning
   - **Target**: 2,500-3,000 words
   - **Extract from**: History article-12 (Foundation Models)

10. **Story 5.5.10**: Write "Hyperparameters vs. Parameters"
    - What Are Parameters? (Model Weights)
    - What Are Hyperparameters? (Learning Rate, etc.)
    - Hyperparameter Tuning Strategies
    - Grid Search, Random Search, Bayesian Optimization
    - **Target**: 2,000-2,500 words

**Acceptance Criteria**:
- ✅ 10 new Terminology articles written
- ✅ All 24 Terminology articles exist (14 existing + 10 new)
- ✅ Technical depth appropriate for each concept
- ✅ Code examples where applicable
- ✅ Diagrams described (for image creation)

**Timeline**: Complete before starting Epic 5
**Status**: Pending

---

### Epic 7.5: Create Missing Risk Path Articles (8 articles)

**Goal**: Write 8 missing Risk articles before deploying Epic 7 (Article Detail Pages)

**Articles Needed**:
1. Taxonomy of AI Harms
2. The Black Box Problem
3. Job Displacement
4. Autonomous Weapons
5. Trustworthy AI Pillars
6. Human-Centered AI Design
7. Fairness in AI – Definitions and Metrics
8. The Ethics Landscape

#### Stories:
1. **Story 7.5.1**: Write "Taxonomy of AI Harms"
   - Individual Harms (Discrimination, Privacy Violations)
   - Societal Harms (Misinformation, Manipulation)
   - Systemic Harms (Power Concentration, Environmental)
   - Severity vs. Likelihood Matrix
   - **Target**: 2,500-3,000 words

2. **Story 7.5.2**: Write "The Black Box Problem"
   - What Is the Black Box Problem?
   - Why Explainability Matters (Trust, Legal, Debugging)
   - Interpretable Models vs. Post-hoc Explanations
   - LIME, SHAP, Attention Visualization
   - Accuracy vs. Interpretability Tradeoff
   - **Target**: 2,500-3,000 words

3. **Story 7.5.3**: Write "Job Displacement – AI and the Future of Work"
   - Which Jobs Are at Risk? (Cognitive Automation)
   - Historical Automation vs. AI (Scope, Speed)
   - Economic Impact Estimates
   - Mitigation: Reskilling, UBI, Labor Protections
   - **Target**: 2,500-3,000 words

4. **Story 7.5.4**: Write "Autonomous Weapons – The AI Arms Race"
   - What Are Autonomous Weapons?
   - Current Capabilities (Drones, Missile Defense)
   - Risks: Accidents, Proliferation, Lowered Threshold for War
   - International Governance Efforts (UN CCW)
   - **Target**: 2,500-3,000 words

5. **Story 7.5.5**: Write "Building Trustworthy AI – The Seven Pillars"
   - Pillar 1: Human Agency and Oversight
   - Pillar 2: Technical Robustness and Safety
   - Pillar 3: Privacy and Data Governance
   - Pillar 4: Transparency
   - Pillar 5: Diversity, Non-discrimination, Fairness
   - Pillar 6: Societal and Environmental Wellbeing
   - Pillar 7: Accountability
   - **Target**: 3,000-3,500 words

6. **Story 7.5.6**: Write "Human-Centered AI Design"
   - What Is Human-in-the-Loop?
   - When HITL Is Required (High-Stakes Decisions)
   - Effective HITL Design (Avoid Rubber-Stamping)
   - Human-on-the-Loop (Monitoring)
   - Automation Bias Risk
   - **Target**: 2,500-3,000 words

7. **Story 7.5.7**: Write "Fairness in AI – Definitions, Metrics, and Trade-offs"
   - Demographic Parity
   - Equal Opportunity (True Positive Parity)
   - Predictive Parity (Precision Parity)
   - Individual Fairness
   - Impossibility Theorems (Can't Satisfy All)
   - Choosing the Right Metric
   - **Target**: 3,000-3,500 words

8. **Story 7.5.8**: Write "The Ethics Landscape – AI Principles Worldwide"
   - OECD AI Principles (2019, Updated 2024)
   - UNESCO AI Ethics Recommendation
   - IEEE Ethically Aligned Design
   - Corporate AI Principles (Google, Microsoft, Amazon)
   - Convergence vs. Divergence
   - **Target**: 2,500-3,000 words

**Acceptance Criteria**:
- ✅ 8 new Risk articles written
- ✅ All 28 Risk articles exist (20 existing + 8 new)
- ✅ Real-world examples embedded
- ✅ Cross-references to Responsibility path (legal frameworks)

**Timeline**: Complete before starting Epic 7
**Status**: Pending

---

### Content Creation Summary

**Total New Articles to Write**: 22

| Epic | Path | Articles Needed | Word Count | Timeline |
|------|------|----------------|------------|----------|
| Epic 2.5 | History | 4 articles | 10,000-12,000 words | Before Epic 3 |
| Epic 5.5 | Terminology | 10 articles | 25,000-30,000 words | Before Epic 5 |
| Epic 7.5 | Risk | 8 articles | 20,000-24,000 words | Before Epic 7 |
| **TOTAL** | **3 paths** | **22 articles** | **~55,000-66,000 words** | **3 weeks** |

**Existing Articles**: 140 (in `/content/articles/final/`)
- History: 11 articles ✅
- Terminology: 14 articles ✅
- Risk: 20 articles ✅
- Responsibility: 75 articles ✅ (100% complete)
- Future: 20 articles ✅ (100% complete)

**Content Creation Resources**:
- OECD AI Principles (2024)
- UNESCO AI Ethics Recommendation
- ISO/IEC 22989:2022
- EU AI Act documentation
- Existing 140 articles (for cross-referencing)
- History articles 7-12 (to extract technical content)

---

## Epic Timeline & Priorities

### Phase 1: Foundation (Week 1-2)
- ✅ Epic 1: Homepage
- ✅ Epic 2: History Learning Path Page
- ✅ Epic 3: History Article Detail Pages

**Milestone**: Fully functional History learning path deployed

### Phase 2: Expansion (Week 3-4)
- ✅ Epic 4: Terminology Learning Path Page
- ✅ Epic 5: Terminology Article Detail Pages
- ✅ Epic 6: Risk Learning Path Page
- ✅ Epic 7: Risk Article Detail Pages

**Milestone**: 3 out of 5 learning paths live

### Phase 3: Completion (Week 5-6)
- ✅ Epic 8: Responsibility Learning Path Page
- ✅ Epic 9: Responsibility Article Detail Pages
- ✅ Epic 10: Future Learning Path Page
- ✅ Epic 11: Future Article Detail Pages

**Milestone**: All 5 learning paths complete (162 articles)

### Phase 4: Enhancement (Week 7-8)
- Epic 12: Example Cards (Optional)
- Epic 13: Resource Cards (Optional)
- ✅ Epic 14: SEO & Performance
- Epic 15: Analytics (Optional)

**Milestone**: Production-ready, optimized, monitored

---

## Rayo Animation Requirements

**Critical**: All animations must use Rayo template patterns:

### 1. GSAP ScrollTrigger (StackCards)
```javascript
// From Rayo StackCards.tsx
ScrollTrigger.create({
  trigger: wrapper,
  start: "top top",
  pin: true,
  pinSpacing: true,
  scrub: true, // Smooth scroll-tied animation
  animation: stackingTimeline,
});
```

### 2. Card Hover Animations
```css
/* Rayo-style smooth transitions */
transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);

/* On hover */
transform: translateY(-8px);
border-color: var(--moss-green);
```

### 3. Page Transitions (Framer Motion)
```javascript
// Page enter/exit animations
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.3 }}
>
```

### 4. TLDR Reveal Animation
```css
/* Hidden by default */
.card-tldr {
  opacity: 0;
  max-height: 0;
  transform: translateY(10px);
  transition: all 0.4s ease;
}

/* Reveal on hover */
.concept-stack-card:hover .card-tldr {
  opacity: 1;
  max-height: 300px;
  transform: translateY(0);
}
```

### 5. Smooth Scroll
```javascript
// Smooth scroll to TOC sections
element.scrollIntoView({ behavior: 'smooth' });
```

---

## Deployment Process

### Git Workflow
```bash
# 1. Create feature branch
git checkout -b epic-1-homepage

# 2. Make changes, commit
git add .
git commit -m "Epic 1: Complete homepage with theme toggle and learning paths"

# 3. Push to GitHub
git push origin epic-1-homepage

# 4. Merge to main (after testing)
git checkout main
git merge epic-1-homepage
git push origin main
```

### Vercel Auto-Deploy
- Connected to GitHub repository
- Automatic deployment on push to `main` branch
- Preview deployments for branches
- Custom domain: suniliyer.ca

### Testing Checklist (After Each Deployment)
- [ ] Page loads without errors
- [ ] All animations smooth (60fps)
- [ ] Theme toggle works
- [ ] Navigation works (all links)
- [ ] Responsive on mobile, tablet, desktop
- [ ] TLDR reveals on hover
- [ ] Cross-path badges clickable
- [ ] No console errors
- [ ] Images load (or placeholders display)
- [ ] Back button works
- [ ] Forms submit (if applicable)
- [ ] Download links work (resources)

---

## Technology Stack

### Frontend
- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS** (Rayo custom config)
- **Funnel Display Font** (Google Fonts)

### Animations
- **GSAP 3** (ScrollTrigger plugin)
- **Framer Motion** (Page transitions)

### Content
- **MDX** (next-mdx-remote)
- **Gray Matter** (Frontmatter parsing)
- **Reading Time** (Estimate article read time)

### Deployment
- **Vercel** (Hosting, CDN, auto-deploy)
- **GitHub** (Version control)
- **suniliyer.ca** (Custom domain)

### Optional
- **Google Analytics 4** (Analytics)
- **Sentry** (Error monitoring)
- **Sharp** (Image optimization)

---

## File Structure

```
/Volumes/External/aidefence/
├── app/
│   ├── layout.tsx                     # Root layout with theme
│   ├── page.tsx                       # Homepage
│   ├── learn/
│   │   ├── history/
│   │   │   ├── page.tsx              # History path index (StackCards)
│   │   │   └── [slug]/
│   │   │       └── page.tsx          # History article detail
│   │   ├── terminology/
│   │   │   ├── page.tsx              # Terminology path index
│   │   │   └── [slug]/page.tsx
│   │   ├── risk/
│   │   │   ├── page.tsx              # Risk path index
│   │   │   └── [slug]/page.tsx
│   │   ├── responsibility/
│   │   │   ├── page.tsx              # Responsibility path index
│   │   │   └── [slug]/page.tsx
│   │   └── future/
│   │       ├── page.tsx              # Future path index
│   │       └── [slug]/page.tsx
│   ├── examples/
│   │   └── [slug]/page.tsx           # Example cards (optional)
│   └── resources/
│       └── [slug]/page.tsx           # Resource cards (optional)
├── components/
│   ├── animation/
│   │   └── StackCards.tsx            # Rayo StackCards component
│   ├── layout/
│   │   ├── Header.tsx                # Site header
│   │   ├── Footer.tsx                # Site footer
│   │   └── PathNavigation.tsx        # 5 learning paths nav
│   ├── articles/
│   │   ├── ArticleCard.tsx           # Concept card component
│   │   ├── ArticleDetail.tsx         # Article detail layout
│   │   ├── TableOfContents.tsx       # TOC component
│   │   ├── RelatedConcepts.tsx       # Related concepts grid
│   │   ├── CrossPathRefs.tsx         # Cross-path badges
│   │   └── AuthorBio.tsx             # Author section
│   └── common/
│       ├── ThemeToggle.tsx           # Theme toggle button
│       └── Breadcrumbs.tsx           # Breadcrumbs navigation
├── content/
│   └── articles/
│       ├── history/
│       │   ├── what-ai-actually-is.mdx
│       │   ├── ai-family-tree.mdx
│       │   └── ... (15 total)
│       ├── terminology/
│       │   └── ... (24 total)
│       ├── risk/
│       │   └── ... (28 total)
│       ├── responsibility/
│       │   └── ... (75 total)
│       └── future/
│           └── ... (20 total)
├── public/
│   └── images/
│       ├── logo.jpg                  # Site logo
│       ├── Sunil.jpg                 # Author photo
│       └── learn/
│           ├── paths/
│           │   ├── history-hero.jpg
│           │   ├── terminology-hero.jpg
│           │   ├── risk-hero.jpg
│           │   ├── responsibility-hero.jpg
│           │   └── future-hero.jpg
│           ├── history/
│           │   ├── what-ai-actually-is.jpg
│           │   └── ... (15 images)
│           ├── terminology/
│           │   └── ... (24 images)
│           ├── risk/
│           │   └── ... (28 images)
│           ├── responsibility/
│           │   └── ... (75 images)
│           ├── future/
│           │   └── ... (20 images)
│           ├── examples/
│           │   └── ... (28 images)
│           └── resources/
│               └── ... (10 images)
├── lib/
│   ├── animations.ts                 # GSAP helpers
│   ├── article-utils.ts              # MDX parsing, reading time
│   └── constants.ts                  # Design tokens
├── docs/
│   ├── aidefence-v2-implementation-plan.md  # THIS FILE
│   ├── learn-history-wireframe.html
│   ├── learn-article-detail-wireframe.html
│   ├── learning-paths-image-reference.md
│   └── rayo-template-analysis.md
└── package.json
```

---

## Success Metrics

### Technical Metrics
- Lighthouse Performance Score: > 90
- Lighthouse Accessibility Score: 100
- Lighthouse Best Practices Score: 100
- Lighthouse SEO Score: > 95
- Time to Interactive (TTI): < 3s
- First Contentful Paint (FCP): < 1.5s
- Cumulative Layout Shift (CLS): < 0.1

### Content Metrics
- Total Articles: 162
- Learning Paths: 5
- Example Cards: 28
- Resource Cards: 10
- Total Pages: 200+

### Business Metrics
- Organic traffic from learning path keywords
- Time on page > 3 minutes (article engagement)
- Bounce rate < 50%
- Resource downloads (templates, guides)

---

## Risk Mitigation

### Potential Risks:
1. **Large number of articles (162)** - May slow down build time
   - **Mitigation**: Incremental Static Regeneration (ISR)

2. **GSAP animations may lag on mobile** - Performance concerns
   - **Mitigation**: Reduce animation complexity on mobile, use will-change CSS

3. **75 cards on Responsibility path** - May be overwhelming
   - **Mitigation**: Implement filtering, consider pagination

4. **Image creation timeline** - 162+ images needed
   - **Mitigation**: Start with placeholders, add images incrementally

5. **Content migration from old articles** - 158 existing articles
   - **Mitigation**: Automated script to convert to MDX format

---

## Next Steps

1. **Immediate**: Start Epic 1 (Homepage)
2. **Week 1**: Complete Epics 1-3 (Homepage + History path)
3. **Week 2-3**: Complete Epics 4-7 (Terminology + Risk paths)
4. **Week 4-5**: Complete Epics 8-11 (Responsibility + Future paths)
5. **Week 6-7**: SEO optimization and polish
6. **Week 8**: Final testing and launch

---

**Last Updated**: 2025-12-22
**Status**: Ready to begin Epic 1
**Next Deployment**: Homepage to suniliyer.ca
