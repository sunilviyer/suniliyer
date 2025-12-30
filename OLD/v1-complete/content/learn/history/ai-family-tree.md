---
type: concept
id: history-2
path: history
title: "The AI Family Tree – Types of AI Systems Explained"
slug: ai-family-tree
tldr: "AI systems span narrow AI (single task like spam filters), foundation models (multi-task like ChatGPT), and AGI (hypothetical human-level intelligence). The OECD Classification Framework uses 5 dimensions to assess AI systems for governance: People & Planet, Economic Context, Data & Input, AI Model, Task & Output."
category: AI Fundamentals

seo_keywords:
  - types of AI systems
  - narrow AI vs AGI
  - OECD AI classification
  - AI taxonomy

related_concepts:
  - id: history-1
    title: "What AI Actually Is"
    path: history
  - id: history-5
    title: "Strong vs. Weak AI"
    path: history
  - id: future-1
    title: "Artificial General Intelligence"
    path: future

cross_path_refs:
  terminology: [term-1, term-9]
  future: [future-1]

# Visual Components
components:
  - type: image_prompt
    id: hero
    prompt: "AI classification diagram, taxonomy tree visualization, professional illustration showing hierarchy from narrow AI to AGI"

word_count: 1800
---

# The AI Family Tree – Types of AI Systems Explained

## Introduction

Not all AI is created equal. A spam filter, a self-driving car, and ChatGPT are all "AI," but they differ dramatically in capability, risk, and governance needs.

This article maps the AI family tree—from narrow task-specific systems to hypothetical AGI—and introduces the OECD Classification Framework that governments use to assess AI systems for regulation.

---

## The Three Tiers of AI

### Tier 1: Narrow AI (Weak AI)
**Status**: Exists today, dominates AI applications

**Definition**: AI designed for a specific task with no ability to generalize beyond that task.

**Examples:**
- Spam filters (email classification only)
- Chess engines (chess only, can't play Go)
- Facial recognition (identify faces, can't drive cars)
- Fraud detection (payment fraud, can't diagnose diseases)

**Governance**: Well-understood, task-specific risk assessment

### Tier 2: Foundation Models / General-Purpose AI
**Status**: Exists today, rapidly evolving

**Definition**: AI trained on broad data that can be adapted to many tasks via prompting or fine-tuning.

**Examples:**
- GPT-4, Claude, Gemini (text generation, Q&A, coding, analysis)
- DALL-E, Stable Diffusion (image generation, editing)
- Multimodal models (text + vision combined)

**Governance**: Challenging because use cases are open-ended, EU AI Act specifically addresses

### Tier 3: Artificial General Intelligence (AGI / Strong AI)
**Status**: Does not exist, may never exist

**Definition**: Hypothetical AI matching or exceeding human cognitive abilities across all domains.

**Governance**: Theoretical frameworks only, not relevant to current governance

---

## The OECD Classification Framework (2022)

The OECD Framework for Classification of AI Systems helps policymakers characterize AI for governance purposes using 5 dimensions:

### 1. People & Planet
- Who is affected by the AI system?
- What are impacts on human rights, wellbeing, environment?
- Examples: Hiring AI affects job seekers; medical AI affects patients

### 2. Economic Context
- What sector does it operate in? (healthcare, finance, education)
- Who deploys it? (business model implications)
- Examples: AI in critical infrastructure has higher stakes

### 3. Data & Input
- What data does it use?
- How is data collected?
- What's the quality?
- Examples: AI trained on biased data produces biased outputs

### 4. AI Model
- What type of model? (neural network, decision tree, etc.)
- How transparent is it?
- How robust?
- Examples: Deep learning is more opaque than decision trees

### 5. Task & Output
- What does it do?
- What decisions does it make?
- Can users opt out?
- Examples: Autonomous decisions vs. recommendations with human review

**Why this framework matters:**

Different AI systems require different governance approaches. A restaurant recommendation and a criminal sentencing algorithm shouldn't be treated the same, even if both use machine learning.

---

## AI Use Case Categories

The OECD framework identifies common AI use case patterns:

### Recognition and Detection
**What it does**: Identifies patterns, objects, faces, speech, anomalies

**Examples:**
- Facial recognition (airport security)
- Speech recognition (Siri, Alexa)
- Fraud detection (payment systems)
- Medical imaging (detecting tumors)

**Governance focus**: Bias in recognition rates across groups, privacy

### Forecasting and Prediction
**What it does**: Predicts future events, trends, behaviors, risks

**Examples:**
- Credit scoring (loan approval likelihood)
- Recidivism prediction (criminal justice)
- Demand forecasting (retail inventory)
- Weather prediction

**Governance focus**: Accuracy, fairness, explainability of predictions

### Personalization
**What it does**: Tailors content, recommendations, experiences to individuals

**Examples:**
- Netflix recommendations
- Social media feeds
- Targeted advertising
- Personalized search results

**Governance focus**: Filter bubbles, manipulation, privacy

### Goal-driven Optimization
**What it does**: Finds optimal solutions within constraints

**Examples:**
- Route planning (Google Maps)
- Resource allocation (scheduling)
- Supply chain optimization
- Energy grid management

**Governance focus**: Objectives alignment, unintended consequences

### Content Generation
**What it does**: Creates text, images, code, music (generative AI)

**Examples:**
- ChatGPT (text generation)
- DALL-E (image generation)
- GitHub Copilot (code generation)
- Music generation tools

**Governance focus**: Misinformation, copyright, deepfakes

---

## Risk-Based Classification

The EU AI Act uses the OECD framework to classify AI by risk level:

### Unacceptable Risk (Prohibited)
- Social scoring systems
- Subliminal manipulation
- Real-time facial recognition in public (with exceptions)
- AI exploiting vulnerabilities

### High Risk
- AI in hiring, credit scoring, education assessment
- AI in critical infrastructure
- AI in law enforcement, justice
**Governance**: Strict requirements, conformity assessments

### Limited Risk (Transparency Required)
- Chatbots (must disclose AI use)
- Emotion recognition (must inform users)
- Deepfakes (must label as synthetic)

### Minimal Risk
- Spam filters, video game AI, inventory management
**Governance**: No special requirements

---

## Practical Implications

**For governance professionals:**

1. **Inventory your AI**: Map systems to the OECD framework dimensions
2. **Classify risk levels**: Use EU AI Act categories or organizational risk matrix
3. **Tailor governance**: High-risk systems need extensive testing; low-risk need basic oversight
4. **Enable cross-jurisdictional compliance**: OECD framework used globally

**Questions to ask about any AI system:**

- What task does it perform? (Task & Output dimension)
- Who does it affect? (People & Planet dimension)
- What data powers it? (Data & Input dimension)
- Where is it deployed? (Economic Context dimension)
- How does it work? (AI Model dimension)

---

## Conclusion

The AI family tree spans from simple spam filters to hypothetical AGI. Understanding this taxonomy—and using frameworks like the OECD Classification—enables proportional governance. Not all AI deserves the same scrutiny, and effective governance means matching controls to actual capabilities and risks.

---

## Related Concepts

**Within this path:**
- [What AI Actually Is](/learn/history/what-ai-actually-is)
- [Strong vs. Weak AI](/learn/history/strong-vs-weak-ai)

**Other paths:**
- [Machine Learning Explained](/learn/terminology/machine-learning-terminology) (Terminology)
- [Artificial General Intelligence – Hype vs Reality](/learn/future/artificial-general-intelligence) (Future)

---

## Sources

1. OECD Framework for Classification of AI Systems (2022)
2. EU AI Act (2024) - Risk-based classification
3. NIST AI RMF (2023) - AI system categorization
