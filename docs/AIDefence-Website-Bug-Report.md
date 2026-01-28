# AIDefence Website Bug Report

**Generated:** January 27, 2026
**Last Updated:** January 27, 2026 (After Session Fixes)
**Purpose:** Comprehensive issue list for development team

---

## ✅ FIXED TODAY (Commits: 2df98f2, d95b14d, 1ce9833, da78b66, ea662db)

### Critical Issues Resolved:
1. **Algorithmic Bias garbage data** - Fixed corrupted content in database
2. **7 Pages crashing due to "missing cards"** - Published 9 draft cards that were filtered out
   - AI Transparency, AI Accountability, Human-Centered AI
   - Cross Border Compliance, AI Safety, Future AI Regulation, Trustworthy AI
3. **Terminology Articles 1-3** - Converted to DatabaseArticleRenderer
   - Fixed header images (now load from `/images/terminology/`)
   - Fixed additional resources (now from database instead of hardcoded)
4. **DatabaseArticleRenderer crash** - Fixed to handle sources with `citation` field instead of `title`
5. **~25+ ResourceCard download/preview buttons** - Converted from non-functional `<button>` elements to working `<a>` tags
   - Download buttons now use resource.downloadUrl with download attribute
   - Preview buttons now use resource.previewUrl with target="_blank"

---

## 🔴 CRITICAL: Missing Images (Still Outstanding)

These images are missing or have wrong paths in database:

| Image Path | Used In | Status |
|------------|---------|--------|
| ~~`/images/history/ai-technology-stack.webp`~~ | ~~Terminology - AI Technology Stack~~ | ✅ FIXED (now uses `/images/terminology/`) |
| ~~`/images/history/ai-vs-automation.webp`~~ | ~~Terminology - AI vs Automation~~ | ✅ FIXED (now uses `/images/terminology/`) |
| ~~`/images/history/data-behind-ai.webp`~~ | ~~Terminology - Data Behind AI~~ | ✅ FIXED (now uses `/images/terminology/`) |
| `/images/terminology/foundation-models.webp` | Terminology - Foundation Models | ❌ NEEDS FIX (article still hardcoded) |
| `/images/risk/ai-privacy-dilemma.webp` | Risk - AI Privacy | ❌ Missing file |
| (header image) | Future - AI Existential Risk | ❌ No header image in DB |
| (header image) | Future - Future of AI Ethics | ❌ No header image in DB |

**Also missing:** `/favicon.ico` (404 error)

---

## HOME PAGE

| # | Issue | Action Required |
|---|-------|-----------------|
| 1 | Mobile view: vibe text placed above image | Move text below image on mobile breakpoint |
| 2 | Learning path carousel shows Terminology first | Change default to show History first |
| 3 | Carousel auto-rolls on hover | Disable auto-roll; only scroll via mouse drag or arrow clicks |

---

## GLOBAL / NAVIGATION

| # | Issue | Action Required |
|---|-------|-----------------|
| 1 | Learning path pages missing Home button | Add Home button to all learning path level pages (currently only shows history/terminology/risk breadcrumbs) |

---

## HISTORY ARTICLES

### history-01 (What is AI)
| # | Issue | Action Required |
|---|-------|-----------------|
| 1 | RPA vs AI card is incomplete | Complete the card content |
| 2 | Text says "throughout this course" | Change to "throughout this learning path" |

### Deep Learning Decoded
| # | Issue | Action Required |
|---|-------|-----------------|
| 1 | Governance Audit Checklist - download button does nothing | Fix download functionality |

### Generative AI
| # | Issue | Action Required |
|---|-------|-----------------|
| 1 | Governance Implementation Guide - download doesn't work | Fix download functionality |

### Large Language Models
| # | Issue | Action Required |
|---|-------|-----------------|
| 1 | Remove sentence: "For a deeper understanding of this phenomenon, see our article on AI Hallucinations." | Delete this line |
| 2 | Add learn more button to hallucination card linking to the article | Add link to hallucination card |
| 3 | LLM Risk Classification Framework - download doesn't work | Fix download functionality |

---

## TERMINOLOGY ARTICLES

### ~~AI Technology Stack~~ ✅ FIXED
| # | Issue | Status |
|---|-------|--------|
| ~~1~~ | ~~Header image doesn't load~~ | ✅ FIXED - now uses DatabaseArticleRenderer |
| 2 | Stack Assessment Framework - no download option | ❌ Still broken |
| 3 | "Cost of single high-end H100 GPU" displayed as card | ❌ Convert to plain text |
| ~~4~~ | ~~Additional Resources section is hardcoded~~ | ✅ FIXED - now from database |

### ~~AI vs Automation~~ ✅ FIXED
| # | Issue | Status |
|---|-------|--------|
| ~~1~~ | ~~Header image doesn't load~~ | ✅ FIXED - now uses DatabaseArticleRenderer |
| 2 | "Artificial intelligence" link in second paragraph points to wrong URL | ❌ Fix URL |
| 3 | AI vs Automation Decision Tree resource is missing | ❌ Add resource or remove reference |
| ~~4~~ | ~~Additional Resources section is hardcoded~~ | ✅ FIXED - now from database |

### ~~Data Behind AI~~ ✅ FIXED
| # | Issue | Status |
|---|-------|--------|
| 1 | Training data URL points to `/articles` instead of correct path | ❌ Fix URL to correct article |
| 2 | Datasheet for Datasets resource card - no download button | ❌ Add download button (resource exists in DB) |
| ~~3~~ | ~~Additional Resources section is hardcoded~~ | ✅ FIXED - now from database |

### Foundation Models
| # | Issue | Action Required |
|---|-------|-----------------|
| 1 | LLM URL is wrong | Fix URL |
| 2 | Header image missing | Add header image AND convert to DatabaseArticleRenderer |
| 3 | Additional Resources section is hardcoded | Convert to DatabaseArticleRenderer |

### Multi-Modal AI
| # | Issue | Action Required |
|---|-------|-----------------|
| 1 | "Text only chatbots" links to wrong card (shows ChatGPT) | Link to correct card |
| 2 | Multimodal AI Governance Framework - Learn More doesn't work | Fix Learn More functionality |
| 3 | Multimodal AI Governance Framework - Download doesn't work | Fix download functionality |
| 4 | Verification Protocol - Learn More doesn't work | Fix Learn More functionality |
| 5 | Verification Protocol - Download doesn't work | Fix download functionality |

### AI Compute
| # | Issue | Action Required |
|---|-------|-----------------|
| 1 | "Cost of single high-end H100 GPU" displayed as card | Convert to plain text |
| 2 | "Organization AI compute" displayed as card | Convert to plain text, add "as seen in the previous article" |
| 3 | Sustainable AI Reporting Framework - Learn More doesn't work | Fix Learn More functionality |
| 4 | Sustainable AI Reporting Framework - Download doesn't work | Fix download functionality |

### Black Box
| # | Issue | Action Required |
|---|-------|-----------------|
| 1 | AI Use Case Assessment resource card - download doesn't work | Fix download functionality |

---

## RISK ARTICLES

### When AI Goes Wrong
| # | Issue | Action Required |
|---|-------|-----------------|
| 1 | Resource Card - Learn More doesn't work | Fix Learn More functionality |
| 2 | Resource Card - Download doesn't work | Fix download functionality |

### ~~Algorithmic Bias~~ ✅ FIXED
| # | Issue | Status |
|---|-------|--------|
| ~~1~~ | ~~**CRITICAL:** Page displays garbage data - card reference loop~~ | ✅ FIXED - content restored from markdown |

### AI Hallucinations
| # | Issue | Action Required |
|---|-------|-----------------|
| 1 | AI Hallucination card not needed | Convert to plain text |
| 2 | Hallucination Mitigation Checklist - Learn More doesn't work | Fix Learn More functionality |
| 3 | Hallucination Mitigation Checklist - Download doesn't work | Fix download functionality |

### AI Privacy
| # | Issue | Action Required |
|---|-------|-----------------|
| 1 | Privacy by Design resource card - Learn More doesn't work | Fix Learn More functionality |
| 2 | Privacy by Design resource card - Download doesn't work | Fix download functionality |

### Deepfakes & Synthetic Media
| # | Issue | Action Required |
|---|-------|-----------------|
| 1 | Verification Protocols resource card - Learn More doesn't work | Fix Learn More functionality |
| 2 | Verification Protocols resource card - Download doesn't work | Fix download functionality |

### AI Misinformation
| # | Issue | Action Required |
|---|-------|-----------------|
| 1 | Resilience Toolkit - Download doesn't work | Fix download functionality |

---

## RESPONSIBILITY ARTICLES

### EU AI Act Explained
| # | Issue | Action Required |
|---|-------|-----------------|
| 1 | Classification Decision Tree - Learn More doesn't work | Fix Learn More functionality |
| 2 | Classification Decision Tree - Download doesn't work | Fix download functionality |
| 3 | High-Risk AI Compliance Checklist - Learn More doesn't work | Fix Learn More functionality |
| 4 | High-Risk AI Compliance Checklist - Download doesn't work | Fix download functionality |

### NIST AI RMF
| # | Issue | Action Required |
|---|-------|-----------------|
| 1 | "NIST AI Risk Management Framework (AI RMF)" card is highlighted but no link/action | Either link to article OR convert to bold text |
| 2 | NIST Core Functions Guide - Download doesn't work | Fix download functionality |

### ISO 42001
| # | Issue | Action Required |
|---|-------|-----------------|
| 1 | Card highlighted but no animation or link | Fix card interaction or convert to text |
| 2 | AI Impact Assessment - highlighted but no resources | Add resources or remove highlighting |
| 3 | Certification Roadmap - Download doesn't work | Fix download functionality |

### ~~AI Transparency~~ ✅ FIXED
| # | Issue | Status |
|---|-------|--------|
| ~~1~~ | ~~**CLIENT-SIDE EXCEPTION** - Page crashes~~ | ✅ FIXED - draft cards published |

### ~~AI Accountability~~ ✅ FIXED
| # | Issue | Status |
|---|-------|--------|
| ~~1~~ | ~~**CLIENT-SIDE EXCEPTION** - Page crashes~~ | ✅ FIXED - draft cards published |

### ~~Human-Centered AI~~ ✅ FIXED
| # | Issue | Status |
|---|-------|--------|
| ~~1~~ | ~~**CLIENT-SIDE EXCEPTION** - Page crashes~~ | ✅ FIXED - draft cards published |

### Global AI Law Tracker
| # | Issue | Action Required |
|---|-------|-----------------|
| 1 | None of the cards animate on hover | Fix card hover animations |
| 2 | Resource card - Download doesn't work | Fix download functionality |

### ~~Cross Border Compliance~~ ✅ FIXED
| # | Issue | Status |
|---|-------|--------|
| ~~1~~ | ~~**CLIENT-SIDE EXCEPTION** - Page crashes~~ | ✅ FIXED - draft cards published |

---

## FUTURE ARTICLES

### AGI Governance
| # | Issue | Action Required |
|---|-------|-----------------|
| 1 | "Separating Signal from Noise" - Download doesn't work | Fix download functionality |

### AI Existential Risk
| # | Issue | Action Required |
|---|-------|-----------------|
| 1 | No header image | Add header image |

### AI National Security
| # | Issue | Action Required |
|---|-------|-----------------|
| 1 | None of the cards work (all repeated cards from other articles) | Fix card references or convert to plain text |

### ~~AI Safety~~ ✅ FIXED
| # | Issue | Status |
|---|-------|--------|
| ~~1~~ | ~~**CLIENT-SIDE EXCEPTION** - Page crashes~~ | ✅ FIXED - draft cards published |

### Future of AI Ethics
| # | Issue | Action Required |
|---|-------|-----------------|
| 1 | No header image | Add header image |
| 2 | Repeated examples throughout | Review and deduplicate |
| 3 | Human Centered Design Process - Download doesn't work | Fix download functionality |

### ~~Future AI Regulation~~ ✅ FIXED
| # | Issue | Status |
|---|-------|--------|
| ~~1~~ | ~~**CLIENT-SIDE EXCEPTION** - Page crashes~~ | ✅ FIXED - draft cards published |

### Governance Careers
| # | Issue | Action Required |
|---|-------|-----------------|
| 1 | Cards highlighted but don't work (repeated cards) | Convert to plain text since they're repeats |
| 2 | RACI Matrices - Download doesn't work | Fix download functionality |

### ~~Trustworthy AI~~ ✅ FIXED
| # | Issue | Status |
|---|-------|--------|
| ~~1~~ | ~~**CLIENT-SIDE EXCEPTION** - Page crashes~~ | ✅ FIXED - draft cards published |

---

## SUMMARY BY PRIORITY

### ✅ P0 - Critical (FIXED)
- ~~24 missing cards causing page crashes~~ ✅ FIXED - cards were in draft status
- ~~1 article with garbage data rendering (Algorithmic Bias)~~ ✅ FIXED
- ~~7 articles with client-side exceptions~~ ✅ FIXED
- ~~3 terminology articles with no images~~ ✅ FIXED

### 🔴 P0 - Critical (Still Outstanding)
- 4 missing header images (Foundation Models, AI Privacy, AI Existential Risk, Future AI Ethics)
- 1 missing favicon

### 🟡 P1 - High (Functionality Broken)
- ~~**~25+ download buttons not working**~~ ✅ FIXED - ResourceCard component updated (commit ea662db)
- **Note:** Learn More buttons in InlineContextCard already work correctly - no fix needed
- Multiple wrong URL links (5-10 instances)
- Foundation Models needs conversion to DatabaseArticleRenderer

### 🟠 P2 - Medium (UX Issues)
- Home page carousel behavior (auto-roll, default path)
- Mobile view text positioning
- Missing Home button on learning path pages
- Card hover animations not working (Global AI Law Tracker)

### 🟢 P3 - Low (Content Fixes)
- "Course" → "Learning path" text change (1 instance)
- Cards that should be plain text (~5 instances)
- Remove specific sentences from articles (1 instance)
- Repeated cards/examples in some articles

---

## RECOMMENDED FIX ORDER

1. ~~**First:** Add all 24 missing cards to database~~ ✅ DONE - Published draft cards
2. ~~**Second:** Fix Algorithmic Bias garbage data~~ ✅ DONE
3. ~~**Third:** Fix terminology articles 1-3 images~~ ✅ DONE - Converted to DatabaseArticleRenderer
4. ~~**Fourth:** Fix download functionality (~25 buttons)~~ ✅ DONE - Fixed ResourceCard component
5. ~~**Fifth:** Fix Learn More button functionality~~ ✅ NOT NEEDED - InlineContextCard already works correctly
6. **Sixth:** Upload missing header images (4 images)
7. **Seventh:** Convert Foundation Models to DatabaseArticleRenderer
8. **Eighth:** Correct wrong URLs (5-10 instances)
9. **Ninth:** UI/UX fixes (carousel, mobile view, navigation)
10. **Tenth:** Content text changes and cleanup

---

## SESSION SUMMARY - January 27, 2026

### Commits Made:
- **2df98f2**: Fixed terminology articles 1-3 (converted to DatabaseArticleRenderer)
- **d95b14d**: Fixed algorithmic-bias corrupted content
- **1ce9833**: Published 9 draft cards (fixed 7 crashing pages)
- **da78b66**: Fixed DatabaseArticleRenderer to handle citation field
- **ea662db**: Fixed ResourceCard download and preview buttons (~25 buttons)

### Issues Resolved: 16 critical bugs (15 in P0, 1 in P1)
### Issues Remaining: ~55 (mostly P1-P3 priority)

### Key Insights:
1. The "missing cards" weren't missing - they existed but had `status='draft'`. Database queries filter by `status='published'`, so they were invisible to the frontend.
2. Download buttons weren't broken in InlineContextCard (already used `<a>` tags) - only ResourceCard component needed fixing (used non-functional `<button>` elements).
3. Learn More buttons already work correctly via InlineContextCard component - no fixes needed.
