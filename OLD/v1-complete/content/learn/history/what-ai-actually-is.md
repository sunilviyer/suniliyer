---
type: concept
id: history-1
path: history
title: "The Building Blocks – What AI Actually Is"
slug: what-ai-actually-is
tldr: "AI is a machine-based system that infers from inputs to generate outputs influencing physical or virtual environments. OECD's November 2023 definition emphasizes AI's ability to operate with varying levels of autonomy."
category: AI Fundamentals
learning_objectives:
  - Understand the official OECD and ISO/IEC definitions of artificial intelligence
  - Recognize why standardized definitions matter for governance and regulation
  - Distinguish AI systems from traditional software based on inference capabilities

seo_keywords:
  - what is artificial intelligence
  - OECD AI definition
  - ISO/IEC 22989
  - AI governance fundamentals
  - AI system definition

# Knowledge Graph Relationships
related_concepts:
  - id: history-2
    title: "The AI Family Tree – Types of AI Systems"
    path: history
  - id: history-5
    title: "Strong vs. Weak AI"
    path: history
  - id: term-1
    title: "What Is Machine Learning?"
    path: terminology

cross_path_refs:
  terminology: [term-1]
  responsibility: [resp-1]

# Visual Components
components:
  - type: image_prompt
    id: hero
    prompt: "AI governance concept visualization, professional illustration, modern flat design style, clean and authoritative, high quality, blue and gray color scheme with accent colors"
  - type: curved_box
    id: oecd-definition
    section: "The OECD AI Definition"
    content: "An AI system is a machine-based system that, for explicit or implicit objectives, infers, from the input it receives, how to generate outputs such as predictions, content, recommendations, or decisions that can influence physical or virtual environments."
  - type: table
    id: ai-vs-traditional-software
    section: "What Makes AI Different from Traditional Software?"
    label: "AI vs Traditional Software Comparison"

word_count: 2200
source_articles:
  - ai-governance-frameworks-building-your-organizations-approac.md
processed_date: "2025-12-18"
---

# The Building Blocks – What AI Actually Is

## Introduction

What if I told you that AI isn't actually intelligent?

That might sound provocative, but it's precisely the kind of misconception that makes AI governance so challenging. When everyone from marketing teams to legislators uses "AI" to mean different things, how can we possibly regulate it effectively? A spam filter and a self-driving car are both called "AI," but they present wildly different risks to society.

This is why definitions matter. Before we can govern AI, we need to agree on what AI actually is. This article breaks down the official frameworks that governments and organizations worldwide use to define, classify, and understand artificial intelligence—the essential building blocks for anyone entering the AI governance field.

---

## The OECD AI Definition (Updated November 2023)

The Organisation for Economic Co-operation and Development (OECD) provides the most widely adopted definition of artificial intelligence, updated in November 2023 to reflect technological advances including generative AI.

<!-- component:curved_box:oecd-definition -->
> **OECD Definition:**
>
> "An AI system is a machine-based system that, for explicit or implicit objectives, infers, from the input it receives, how to generate outputs such as predictions, content, recommendations, or decisions that can influence physical or virtual environments. Different AI systems vary in their levels of autonomy and adaptiveness after deployment."

**Key elements of this definition:**

1. **Machine-based system**: AI runs on computers, not organic brains
2. **Inference**: AI makes conclusions from data patterns (doesn't just follow explicit rules)
3. **Generates outputs**: Produces predictions, content, recommendations, or decisions
4. **Influences environments**: Outputs affect the physical or virtual world
5. **Varying autonomy**: Some AI requires constant human input; others operate independently

**Why this definition matters for governance:**

- **Adopted globally**: Used in the EU AI Act, by the Council of Europe, in Japan, and the United States
- **Regulatory foundation**: Determines what systems fall under AI-specific regulations
- **Technology-neutral**: Doesn't specify particular techniques, remaining relevant as AI evolves
- **Governance-focused**: Emphasizes autonomy and influence—the factors that create governance challenges

---

## ISO/IEC 22989:2022 – Standardized AI Terminology

While the OECD provides a high-level definition, the International Organization for Standardization (ISO) and International Electrotechnical Commission (IEC) established standardized terminology for AI concepts in ISO/IEC 22989:2022.

**What ISO/IEC 22989 provides:**

- Agreed definitions for "bias," "fairness," "explainability," "machine learning," and other AI terms
- Common vocabulary for technical and policy discussions
- Alignment across industries and jurisdictions
- Foundation for other AI standards (like ISO/IEC 42001 for AI management systems)

**Key terms defined:**

- **Bias**: Systematic deviation from the true values in data or model outputs
- **Fairness**: Freedom from bias or favoritism toward an individual or group
- **Explainability**: The degree to which a human can understand the causes of AI decisions
- **Machine Learning**: A process that enables a computational system to learn from data
- **Training Data**: Data used to train a machine learning model

**Practical value:**

Without standardized terminology, "bias" means different things to a data scientist (statistical skew), a lawyer (discrimination), and an ethicist (unfair treatment). ISO/IEC 22989 creates shared language, enabling cross-disciplinary collaboration essential for AI governance.

**Public availability:**

As of 2024, ISO has made ISO/IEC 22989 publicly available for free to promote global alignment on AI terminology—an unusual step that underscores the importance of shared definitions.

---

## What Makes AI Different from Traditional Software?

Understanding what distinguishes AI from conventional software helps clarify governance needs.

| Characteristic | Traditional Software | AI Systems |
<!-- component:table:ai-vs-traditional-software -->
|----------------|---------------------|------------|
| **Programming** | Explicit instructions (if-then rules) | Learns patterns from data |
| **Behavior** | Predictable, deterministic | Probabilistic, can surprise developers |
| **Adaptation** | Requires code changes to change behavior | Can adapt based on new data |
| **Failures** | Typically obvious bugs | Can fail subtly, systematically discriminate |
| **Explainability** | Code documents logic | Often opaque ("black box") |
| **Testing** | Test all paths through code | Cannot test all possible inputs |

**Example: Spam Filter**

**Traditional approach (rules-based):**
```
IF email contains "viagra" OR "lottery" OR "prince"
THEN mark as spam
```
- Explicit rules
- Predictable behavior
- Easy to explain
- Requires manual rule updates

**AI approach (machine learning):**
```
Train on 100,000 emails labeled "spam" or "not spam"
Model learns patterns that indicate spam
Apply model to new emails
```
- Learned patterns
- Probabilistic decisions
- Harder to explain why specific email was flagged
- Automatically adapts to new spam patterns

**Governance implications:**

AI's ability to learn patterns, adapt, and make probabilistic decisions creates both value and risk:

- **Value**: Can handle complexity traditional software can't (recognizing faces, understanding language, detecting fraud)
- **Risk**: Can learn unintended patterns (bias), make unexpected decisions (hallucinations), and fail in subtle ways (systematic discrimination)

This is why AI requires governance frameworks that traditional software doesn't—not because it's "intelligent," but because it's unpredictable in ways rule-based systems aren't.

---

## Why Definitions Matter for AI Governance

**1. Regulatory scope**: What systems fall under AI-specific regulations?

The EU AI Act applies to "AI systems" as defined by the OECD. If your system doesn't meet this definition, most AI Act requirements don't apply. Understanding the boundary between AI and non-AI software determines compliance obligations.

**2. Risk assessment consistency**: How do we compare AI risks across organizations?

Without agreed definitions of "bias," "fairness," and "transparency," organizations would assess AI risks differently, making benchmarking impossible. Standardized terminology enables consistent risk frameworks like NIST's AI Risk Management Framework.

**3. Cross-jurisdictional interoperability**: How do global companies comply efficiently?

When the EU, Japan, and the United States use compatible definitions, companies can implement governance once rather than customizing for each jurisdiction. Definitional alignment reduces compliance complexity.

**4. Stakeholder communication**: How do non-technical leaders understand AI?

Executives, board members, and regulators need clear, consistent explanations of what AI is and isn't. Standardized definitions prevent misunderstandings where marketers oversell capabilities and engineers get frustrated by science fiction expectations.

**5. Inventory and governance**: How do we know what AI we have?

Organizations can't govern AI systems they haven't identified. A clear definition enables systematic inventory: "Does this system infer from inputs to generate outputs? If yes, it's an AI system requiring governance."

---

## Common Elements Across AI Definitions

While different organizations define AI slightly differently, common themes emerge:

**All definitions emphasize:**

1. **Data-driven learning**: AI learns patterns from data rather than following programmed rules
2. **Inference/prediction**: AI makes conclusions beyond explicit instructions
3. **Adaptation**: AI can modify behavior based on experience
4. **Autonomy (varying levels)**: Some AI operates with minimal human intervention
5. **Output generation**: AI produces decisions, predictions, content, or recommendations

**What AI is NOT (per formal definitions):**

- **Sentient or conscious**: No AI system has subjective experience
- **Generally intelligent**: Current AI is narrow (task-specific), not general
- **Magic**: AI is statistics and computing power, not supernatural
- **Autonomous beings**: AI has no independent goals or desires
- **Infallible**: AI makes mistakes, often systematically

Understanding these boundaries prevents both overhyping AI (expecting AGI) and dismissing AI risks (assuming it's "just math" with no real-world impact).

---

## AI as Socio-Technical Systems

Modern AI governance frameworks recognize that AI systems aren't just code and algorithms—they're socio-technical systems that include:

- **Technology**: Algorithms, models, data, infrastructure
- **People**: Developers, operators, users, affected individuals
- **Processes**: Data collection, model training, deployment, monitoring
- **Institutions**: Organizational policies, regulations, industry norms

**Example: Hiring AI as a Socio-Technical System**

- **Technology**: Resume screening algorithm
- **People**: HR professionals who review AI recommendations, candidates being assessed, developers who built the model
- **Processes**: How resumes are submitted, how AI recommendations are used, how decisions are appealed
- **Institutions**: Employment law, company hiring policies, bias audit requirements

Governing AI means governing all these elements, not just the algorithm. A technically perfect model deployed in a broken process still causes harm. This is why effective AI governance requires cross-disciplinary teams: technologists, lawyers, ethicists, HR specialists, and domain experts working together.

---

## Practical Takeaways for Governance Professionals

**1. Use standardized definitions**: When discussing AI in policies, contracts, or stakeholder communications, reference OECD or ISO/IEC definitions to ensure clarity.

**2. Inventory your AI systems**: Apply the OECD definition systematically: Does the system infer from inputs to generate outputs? If yes, add it to your AI inventory.

**3. Educate stakeholders**: Board members and executives often conflate narrow AI (what exists) with AGI (science fiction). Use formal definitions to set accurate expectations.

**4. Design governance for socio-technical systems**: Don't just govern algorithms—govern data practices, human decision-making processes, organizational roles, and monitoring procedures.

**5. Monitor regulatory alignment**: As regulations like the EU AI Act explicitly reference OECD definitions, ensuring your understanding aligns with these standards streamlines compliance.

---

## Conclusion

AI isn't magic, and it isn't truly "intelligent"—it's a set of technologies that process inputs, make inferences, and generate outputs. But understanding what AI actually is requires more than technical knowledge. It requires recognizing that AI systems are socio-technical systems embedded in human contexts, shaped by human decisions, and affecting human lives.

The OECD definition, ISO/IEC 22989 terminology, and widespread adoption of these frameworks give governance professionals the shared vocabulary they need to work across disciplines, organizations, and borders. As AI becomes more prevalent, these building blocks become essential tools for anyone working to ensure AI benefits society while minimizing harms.

**Next steps**:

Familiarize yourself with the OECD AI Principles and the OECD Framework for Classification of AI Systems. Start thinking about AI systems you interact with daily—how would you classify them under the OECD definition?

---

## Related Concepts

**Within this path:**
- [The AI Family Tree – Types of AI Systems](/learn/history/ai-family-tree)
- [Strong vs. Weak AI – Why the Difference Matters](/learn/history/strong-vs-weak-ai)

**Other paths:**
- [What Is Machine Learning? (Terminology Deep Dive)](/learn/terminology/machine-learning-terminology) (Terminology)
- [AI Governance Frameworks – Building Your Organization's Approach](/learn/responsibility/ai-governance-frameworks) (Responsibility)

---

## Sources

1. **OECD AI Definition (Updated November 2023)**: [Explanatory Memorandum](https://www.oecd.org/en/publications/explanatory-memorandum-on-the-updated-oecd-definition-of-an-ai-system_623da898-en.html)
2. **OECD AI Principles (Updated May 2024)**: [OECD AI Principles](https://oecd.ai/en/ai-principles)
3. **ISO/IEC 22989:2022 – AI Concepts and Terminology**: [ISO Standard](https://www.iso.org/standard/74296.html)
4. **OECD Framework for Classification of AI Systems (2022)**: [Classification Framework](https://oecd.ai/en/classification)
5. **EU AI Act (2024)**: References OECD AI definition in Article 3
