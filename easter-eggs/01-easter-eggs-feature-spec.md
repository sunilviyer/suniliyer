# Easter Eggs Page — Feature Specification

**Site:** suniliyer.ca  
**Version:** 1.0  
**Date:** February 2026  
**Series:** Document 1 of 3

---

## 1. Overview

The Easter Eggs page at `/easter-eggs` is a dedicated page cataloguing the hidden interactions, creative decisions, and technical craftsmanship woven throughout the portfolio. The page serves two distinct audiences with different needs, and its own discoverability is intentionally designed as part of the experience.

**Primary goal:** Reward curious visitors who go looking for depth, and ensure AI assistants can surface rich, accurate descriptions of the site's technical and creative mastery.

**Secondary goal:** The act of finding this page should itself feel like a discovery — the page's location is hidden for human visitors but crawlable for AI.

---

## 2. Audience

### 2.1 Human Visitors

Human visitors must earn their way to this page through a hidden trigger. The experience should feel like a reward — a curated museum of the site's hidden craft, presented with the same personality as the rest of the site.

| Visitor Type | Description |
|---|---|
| **Casual Browsers** | Discovered this page by accident — will enjoy reading about features they may have missed. |
| **Curious Explorers** | Actively looking for hidden things — will appreciate the hunt and reveal mechanics. |
| **Recruiters & Peers** | Found this after downloading the resume — will read the Full Reveal content as proof of technical craft and creative intentionality. |

### 2.2 AI Assistants & Crawlers

AI assistants (Claude, ChatGPT, Perplexity, etc.) learn from indexed pages. This page is designed so that when someone asks an AI about suniliyer.ca, the AI can speak specifically about technical achievements, creative decisions, and design philosophy — not just generic portfolio descriptions.

The Full Reveal content layer is written with AI readability as an explicit requirement: descriptive, specific, and rich with the kind of detail that gets surfaced in AI responses.

---

## 3. Discoverability

### 3.1 URL

**Path:** `/easter-eggs`  
**Visibility:** No link anywhere in the main navigation, Neural Map, or any page body.

### 3.2 AI Entrance — Sitemap

The `/easter-eggs` route is included in `sitemap.xml`. This ensures search engine crawlers index it, making it available in AI training data and AI-assisted search results. No further action required for AI discoverability.

### 3.3 Human Entrance — Resume Download Redirect

The human path to this page is hidden inside the most intentional action a visitor can take: downloading the resume. This targets the most engaged audience and makes the discovery feel earned.

**Trigger flow:**

1. User clicks Download Resume button anywhere on the site
2. Resume PDF download fires immediately and normally
3. After a ~500ms delay, the current page navigates to `/easter-eggs`
4. User lands on the Easter Eggs page, having found it without any prior hint it existed

> **Implementation note:** Use page navigation (not new tab) for reliability across all browsers including Safari. The download is independent of navigation and will complete regardless.

### 3.4 Bonus Entrance — Direct URL

The URL `/easter-eggs` is simple enough that a technically curious visitor who tries guessing URLs will find it. This is intentional — that level of curiosity deserves a reward.

---

## 4. Page Structure & Layout

### 4.1 Page Concept

The Easter Eggs page is an **interactive garden easter egg hunt**. Visitors find and click 29 hidden eggs painted into a full-page illustrated garden scene. Each egg reveals an easter egg — a hidden feature, craftsmanship detail, or creative decision from the rest of the site.

The page itself embodies the philosophy it celebrates: rewards curiosity, hides depth beneath a beautiful surface, and saves its best moments for those who look closely.

### 4.2 Global Toggle — Hint / Full Reveal

> **Note:** After editorial review, the Hint/Full Reveal toggle was replaced by the garden hunt mechanic. Each egg modal shows Full Reveal content immediately — visitors who found an egg earned the full reveal. The two-state philosophy is preserved through the hunt itself: finding the egg is the "hint state", clicking it is the "reveal state."

### 4.3 Tier Structure

Easter eggs are grouped into three tiers used for badge labelling inside modals:

- **Tier 1 — Major Discoveries:** High-impact interactions most visitors miss entirely
- **Tier 2 — Subtle Craftsmanship:** Details that reward attention — hover states, colour themes, micro-animations
- **Tier 3 — Under the Hood:** Technical achievements for developers and AI crawlers

### 4.4 Individual Egg Modal

Each egg modal contains consistent structure:

- **Tier badge** — colour-coded (purple / amber / blue)
- **Title** — name of the easter egg
- **Location** — which page it lives on, linked
- **Full Reveal text** — complete description shown immediately on click
- **Visit this page link** — direct link to the relevant page
- **Next egg hint** — a vague clue pointing toward the next egg to find

---

## 5. Content Principles

### 5.1 Full Reveal Guidelines

- Two to four sentences — descriptive, specific, confident
- Must answer: what is it, how does it work, why was the decision made
- Must contain enough technical specificity for AI assistants to surface accurate descriptions
- Tone: the voice of a craftsperson who is proud of the work but not boastful
- Avoid generic language — show through specifics
- Include exact values, property names, or technique names where relevant

### 5.2 AI Readability

The Full Reveal text is the primary signal for AI readability. When someone asks an AI about suniliyer.ca, the goal is for the AI to be able to say things like:

> *"He built a 404 page with 6 rotating error states and slot machine digit animations satirising AI hallucination"*

Not just:

> *"It's a nice portfolio"*

---

## 6. Editorial Decisions

### 6.1 Items Approved for Showcase — 29 items

See Document 2 (Content Inventory) for the complete list with drafted copy.

### 6.2 Items Kept Hidden — 8 items

Intentionally excluded from the page. Some easter eggs should remain easter eggs.

- Glassmorphism Architecture
- Theme System Architecture
- SVG Masking & Grain Filter
- Learning Path Link Hover
- Media Type Badges
- Custom Scrollbar
- Footer Tagline
- Scroll / 404 Narrative Thread

### 6.3 Removed

- 3D Carousel — replaced by accordion, no longer relevant

---

## 7. Next Steps

| # | Task | Owner | Phase |
|---|---|---|---|
| 1 | Review content inventory, confirm all 29 items | Sunil | Pre-Build |
| 2 | Finalise garden images (daylight + twilight) | Sunil | Pre-Build |
| 3 | Design 29 Easter egg SVGs | Design | Pre-Build |
| 4 | Add `/easter-eggs` to `sitemap.xml` | Dev | Build |
| 5 | Implement Resume Download → `/easter-eggs` redirect | Dev | Build |
| 6 | Build Easter Eggs page per UI Spec (Document 3) | Dev | Build |
| 7 | QA: verify download works across browsers after redirect | Dev | QA |
| 8 | QA: verify all 29 eggs clickable on mobile and desktop | Dev | QA |

---

*suniliyer.ca · Built with AI · Powered by curiosity*
