# Epic 2.5: Create Missing History Articles

**Status**: ⏳ Ready (can start immediately)
**Priority**: P0 (Content creation prerequisite)
**Owner**: Content Team / Sunil
**Estimated Effort**: 16-24 hours (2-3 days)
**Dependencies**: None
**Blocks**: Epic 2.7 (MDX integration tests need these articles)

---

## Epic Goal

Write 4 missing History path articles using OECD AI definitions, ISO/IEC 22989:2022 terminology standards, and authoritative sources. Create comprehensive, accessible content for AI governance professionals.

---

## Success Criteria

- ✅ 4 new History articles written (8,000-12,000 words total)
- ✅ All articles use OECD/ISO definitions as primary sources
- ✅ Each article 2,000-3,000 words
- ✅ MDX frontmatter properly formatted
- ✅ All articles cite authoritative sources
- ✅ Content accessible to non-technical professionals
- ✅ All articles reviewed and approved
- ✅ Files saved in `/content/articles/final/`

---

## Articles to Create

### Article 1: The Building Blocks – What AI Actually Is

**Filename**: `what-ai-actually-is-oecd-definition.md`
**Word Count**: 2,500-3,000 words
**Target Audience**: AI governance professionals, executives, policymakers
**Reading Level**: Accessible (avoid jargon, explain when necessary)

---

#### Outline

**1. Introduction (300 words)**
- Why AI definitions matter for governance
- The challenge of defining a moving target
- Preview of OECD's authoritative definition

**2. The OECD AI Definition (November 2023) (600 words)**
- Official OECD definition verbatim
- Breaking down key components:
  - "Machine-based system"
  - "Explicit or implicit objectives"
  - "Inferences, predictions, recommendations, decisions"
  - "Influencing real or virtual environments"
- Why this definition matters for policy and regulation
- How it differs from earlier definitions (2019 OECD version)

**3. ISO/IEC 22989:2022 Terminology (500 words)**
- ISO/IEC's technical definition
- Key concepts:
  - Engineered system
  - Autonomy levels
  - Learning vs. rule-based systems
- How ISO complements OECD (technical vs. policy focus)

**4. What Makes AI Different from Traditional Software (600 words)**
- Traditional software: Explicit programming (if-then rules)
- AI: Learning from data, pattern recognition
- Key differentiators:
  - Probabilistic vs. deterministic
  - Black box vs. transparent logic
  - Emergent behavior vs. predictable outcomes
- Real-world examples:
  - Spam filter (AI) vs. email client (traditional)
  - Recommendation engine vs. database query

**5. Why Definitions Matter for Governance (400 words)**
- Regulatory scope: What falls under AI regulations?
- Case studies:
  - EU AI Act's definition and scope implications
  - US NIST AI RMF's definition approach
  - China's AI regulation definitions
- Consequences of poorly defined scope:
  - Over-regulation stifling innovation
  - Under-regulation leaving gaps

**6. Key Takeaways for Practitioners (200 words)**
- Use OECD definition for policy work
- Use ISO for technical specifications
- Be aware of definitional differences across jurisdictions
- Understand implications for compliance

---

#### Sources
- OECD AI Principles (updated November 2023)
- ISO/IEC 22989:2022
- EU AI Act definitions (Article 3)
- NIST AI Risk Management Framework
- UK Government AI definition
- Stanford HAI reports on AI definitions

---

#### MDX Frontmatter
```yaml
---
title: "The Building Blocks – What AI Actually Is"
slug: what-ai-actually-is-oecd-definition
path: history
tldr: "OECD defines AI as a machine-based system that makes inferences, predictions, or recommendations for explicit or implicit objectives. This definition matters for governance because it determines what falls under AI regulation."
contentSections:
  - OECD AI Definition (Nov 2023)
  - ISO/IEC 22989:2022 Terminology
  - What Makes AI Different from Traditional Software
  - Why Definitions Matter for Governance
relatedConcepts: [history-2, history-3, history-4]
crossPathRefs:
  terminology: [term-1]
  responsibility: [resp-1, resp-5]
tags: [OECD, ISO-standards, AI-definition, governance, regulation]
image: ai-definition.jpg
author: Sunil
publishDate: 2025-12-22
readingTime: 12 minutes
---
```

**Estimated Effort**: 5-6 hours

---

### Article 2: The AI Family Tree – Types of AI Systems Explained

**Filename**: `ai-family-tree-types-of-ai-systems.md`
**Word Count**: 2,500-3,000 words
**Target Audience**: AI governance professionals, business leaders
**Reading Level**: Accessible

---

#### Outline

**1. Introduction (200 words)**
- Why categorizing AI matters
- Common confusion: AGI vs. Narrow AI
- Preview of classification frameworks

**2. The Classic Framework: Narrow, General, Super (600 words)**
- **Narrow AI (ANI)**:
  - Definition: Single-task AI
  - Examples: Spam filters, recommendation engines, chess engines
  - Current state: 99.9% of AI today is narrow
- **Artificial General Intelligence (AGI)**:
  - Definition: Human-level AI across multiple domains
  - Examples: None exist yet
  - Timeline debates: 5 years? 50 years? Never?
- **Artificial Super Intelligence (ASI)**:
  - Definition: Beyond human intelligence
  - Philosophical/ethical considerations
  - Why governance professionals should track AGI/ASI developments

**3. OECD Classification Framework (5 Dimensions) (800 words)**
- **Dimension 1: Context**
  - Application domain (healthcare, finance, defense)
  - Sector-specific considerations
- **Dimension 2: Data & Input**
  - Structured vs. unstructured data
  - Single-modal vs. multimodal
- **Dimension 3: AI Model**
  - Machine learning, deep learning, symbolic AI
  - Rule-based, statistical, hybrid
- **Dimension 4: Task & Output**
  - Classification, prediction, generation, optimization
  - Level of autonomy
- **Dimension 5: Interaction**
  - Human-in-the-loop, human-on-the-loop, autonomous
  - Decision-support vs. decision-making

**4. Use Case Categories (600 words)**
- **Perception AI**: Vision, speech recognition
- **Predictive AI**: Risk scoring, forecasting
- **Generative AI**: Content creation, synthesis
- **Decision AI**: Automated decision-making
- **Robotic AI**: Physical automation
- Real-world examples for each category

**5. Why Classification Matters for Governance (300 words)**
- Risk-based regulation (EU AI Act risk tiers)
- Compliance requirements vary by AI type
- Impact assessments tailored to AI category
- Example: High-risk vs. minimal-risk AI under EU AI Act

**6. Practical Guidance (200 words)**
- How to classify your organization's AI systems
- Tools and frameworks for AI inventory
- Mapping to regulatory requirements

---

#### Sources
- OECD AI Classification Framework
- EU AI Act Annex III (high-risk AI list)
- NIST AI RMF categories
- Stanford AI Index taxonomy
- Research papers on AGI timelines

---

#### MDX Frontmatter
```yaml
---
title: "The AI Family Tree – Types of AI Systems Explained"
slug: ai-family-tree-types-of-ai-systems
path: history
tldr: "AI systems span narrow AI (single task), general AI (multiple tasks like humans), and super AI (beyond human). OECD's 5-dimension framework classifies AI by context, data, model, task, and interaction level—critical for risk-based regulation."
contentSections:
  - Narrow vs. General vs. AGI
  - OECD Classification Framework (5 dimensions)
  - Use Case Categories
  - Why Classification Matters for Governance
relatedConcepts: [history-1, history-5, history-8]
crossPathRefs:
  terminology: [term-1, term-9]
  future: [future-1, future-2]
  responsibility: [resp-1]
tags: [classification, AGI, narrow-AI, OECD-framework, risk-based-regulation]
image: ai-family-tree.jpg
author: Sunil
publishDate: 2025-12-22
readingTime: 12 minutes
---
```

**Estimated Effort**: 5-6 hours

---

### Article 3: Machine Learning Demystified

**Filename**: `machine-learning-demystified-how-ai-learns.md`
**Word Count**: 2,500-3,000 words
**Target Audience**: AI governance professionals, non-technical leaders
**Reading Level**: Accessible (explain technical concepts clearly)

---

#### Outline

**1. Introduction (200 words)**
- What is machine learning?
- Why governance professionals need to understand ML
- Preview of three main types

**2. What Is Machine Learning? (400 words)**
- Definition: Algorithms that learn from data
- Contrast with traditional programming:
  - Traditional: Rules → Output
  - ML: Data + Output → Rules (learned)
- The learning process:
  - Training phase
  - Inference phase
- Key concept: Generalization (applying learning to new data)

**3. Supervised Learning (600 words)**
- **Definition**: Learning from labeled data
- **Process**:
  - Training data with correct answers
  - Algorithm learns patterns
  - Predicts labels for new data
- **Examples**:
  - Spam detection (email → spam/not spam)
  - Fraud detection (transaction → fraud/legitimate)
  - Medical diagnosis (symptoms → disease)
- **Common algorithms**:
  - Decision trees
  - Random forests
  - Neural networks
- **Governance implications**:
  - Need for representative training data
  - Risk of bias in labels
  - Explainability challenges

**4. Unsupervised Learning (500 words)**
- **Definition**: Learning from unlabeled data
- **Process**:
  - Algorithm finds patterns/structure
  - No "correct answers" provided
- **Examples**:
  - Customer segmentation (grouping similar customers)
  - Anomaly detection (finding outliers)
  - Recommendation engines (clustering preferences)
- **Common algorithms**:
  - K-means clustering
  - Principal Component Analysis (PCA)
  - Autoencoders
- **Governance implications**:
  - Less interpretable results
  - Harder to validate fairness
  - Privacy concerns (learning sensitive patterns)

**5. Reinforcement Learning (500 words)**
- **Definition**: Learning through trial and error
- **Process**:
  - Agent takes actions in environment
  - Receives rewards or penalties
  - Learns to maximize rewards
- **Examples**:
  - Game-playing AI (AlphaGo, chess)
  - Robotics (teaching robots to walk)
  - Autonomous vehicles
- **Common algorithms**:
  - Q-learning
  - Policy gradient methods
  - Deep Q-Networks (DQN)
- **Governance implications**:
  - Unpredictable behavior during learning
  - Safety concerns (exploration vs. exploitation)
  - Difficult to audit decision-making

**6. Key Takeaways for Governance (300 words)**
- Supervised learning most common in business
- Unsupervised learning raises unique privacy issues
- Reinforcement learning requires special safety testing
- All types need governance frameworks
- Questions to ask:
  - What type of ML is used?
  - How was it trained?
  - What are the risks specific to this ML type?

---

#### Sources
- Andrew Ng's Machine Learning course materials
- NIST AI RMF guidance on ML types
- EU AI Act considerations for ML systems
- Academic papers on ML governance

---

#### MDX Frontmatter
```yaml
---
title: "Machine Learning Demystified – How AI Learns from Data"
slug: machine-learning-demystified-how-ai-learns
path: history
tldr: "Machine learning comes in three flavors: supervised (learning from labeled data like spam filters), unsupervised (finding patterns in unlabeled data like customer segmentation), and reinforcement (learning through trial-and-error like game-playing AI). Each type has unique governance implications."
contentSections:
  - What Is Machine Learning?
  - Supervised Learning
  - Unsupervised Learning
  - Reinforcement Learning
  - Governance Implications by ML Type
relatedConcepts: [history-7, history-11, history-12]
crossPathRefs:
  terminology: [term-1, term-2, term-4]
  risk: [risk-2, risk-4]
tags: [machine-learning, supervised-learning, unsupervised-learning, reinforcement-learning, training-data]
image: machine-learning-demystified.jpg
author: Sunil
publishDate: 2025-12-22
readingTime: 12 minutes
---
```

**Estimated Effort**: 5-6 hours

---

## Content Creation Process

### Phase 1: Research (4-6 hours)
- Gather all source materials
- Read OECD AI Principles (Nov 2023 update)
- Read ISO/IEC 22989:2022 relevant sections
- Review EU AI Act definitions
- Collect real-world examples
- Create outline for each article

### Phase 2: Writing (10-14 hours)
- Write Article 1 (5-6 hours)
- Write Article 2 (5-6 hours)
- Write Article 3 (5-6 hours)
- Total: ~3,000-3,500 words per article

### Phase 3: Review & Editing (2-4 hours)
- Self-edit for clarity and accuracy
- Verify all citations
- Check MDX frontmatter formatting
- Ensure consistent tone and style
- Technical accuracy review
- Readability check (Hemingway Editor)

---

## Quality Standards

### Content Quality
- ✅ Authoritative sources cited (OECD, ISO, EU, NIST)
- ✅ Real-world examples included
- ✅ Technical concepts explained for non-technical audience
- ✅ Actionable takeaways for governance professionals
- ✅ No marketing fluff or filler content

### Writing Style
- ✅ Clear, concise, professional tone
- ✅ Active voice preferred
- ✅ Short paragraphs (3-4 sentences max)
- ✅ Bullet points for easy scanning
- ✅ Analogies to explain complex concepts
- ✅ Consistent terminology

### Technical Accuracy
- ✅ Definitions match authoritative sources (OECD, ISO)
- ✅ Examples are factually correct
- ✅ Statistics/data are current (2023-2024)
- ✅ No misleading simplifications

### Accessibility
- ✅ Reading level: Accessible to executives without AI background
- ✅ Jargon explained on first use
- ✅ Acronyms spelled out
- ✅ Complex concepts broken down step-by-step

---

## MDX Frontmatter Template

```yaml
---
title: "[Article Title]"
slug: "[url-friendly-slug]"
path: history
tldr: "[1-2 sentence summary, 150-200 chars]"
contentSections:
  - "[Section 1]"
  - "[Section 2]"
  - "[Section 3]"
  - "[Section 4]"
relatedConcepts: [history-X, history-Y]
crossPathRefs:
  terminology: [term-X]
  risk: [risk-Y]
  responsibility: [resp-Z]
tags: [tag1, tag2, tag3, tag4, tag5]
image: "[filename].jpg"
author: "Sunil"
publishDate: "2025-12-22"
readingTime: "12 minutes"
---
```

---

## Dependencies

**Epic 2.5 depends on**:
- None (can start immediately)

**Epic 2.5 blocks**:
- Epic 2.7: MDX integration (needs articles to test)
- Indirectly affects Epic 2 completion

---

## Success Metrics

### Quantitative
- ✅ 4 articles completed (100%)
- ✅ Total word count: 10,000-12,000 words
- ✅ Average reading time: 12 minutes per article
- ✅ 15+ authoritative sources cited

### Qualitative
- ✅ Technical accuracy verified
- ✅ Accessibility to non-technical readers
- ✅ Governance relevance (practical takeaways)
- ✅ Engaging writing (not dry or academic)

---

## Definition of Done

- ✅ All 4 articles written and edited
- ✅ All articles 2,500-3,000 words
- ✅ All MDX frontmatter properly formatted
- ✅ All sources cited and verifiable
- ✅ Files saved in `/content/articles/final/`
- ✅ Content review approved
- ✅ Ready for MDX integration in Epic 2.7

---

**Epic Status**: ⏳ Ready to start immediately
**Next**: Epic 5.5 (Terminology Articles) and Epic 7.5 (Risk Articles)
