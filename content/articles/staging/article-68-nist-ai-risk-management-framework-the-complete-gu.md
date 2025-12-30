---
title: Article 68: NIST AI Risk Management Framework – The Complete Guide
slug: article-68-nist-ai-risk-management-framework-the-complete-gu
path: risk
tldr: The National Institute of Standards and Technology has been around since 1901.
contentSections:
  - What Is NIST and Why Does It Matter?
  - The AI RMF Structure: Two Parts
  - Trustworthy AI: The Seven Characteristics
  - The Four Core Functions
  - The AI RMF Playbook
  - Profiles and Use Cases
  - How the AI RMF Connects to Other Frameworks
  - Implementation: Getting Started
  - Common Implementation Challenges
  - The AI RMF in Practice: A Case Study
relatedConcepts: []
crossPathRefs:
tags:
  - article
  - nist
  - ai governance
  - artificial intelligence
  - ai ethics
category: Risk Frameworks & Standards
image: article-68-nist-ai-risk-management-framework-the-complete-gu.jpg
imageAlt: Article 68: NIST AI Risk Management Framework – The Complete Guide
author: Sunil Iyer
publishDate: 2025-12-23
readingTime: 13
seoTitle: Article 68: NIST AI Risk Management Framework – The Complete
seoDescription: The National Institute of Standards and Technology has been around since 1901.
---



## What Is NIST and Why Does It Matter?


### NIST's Role

The National Institute of Standards and Technology has been around since 1901. They're the folks who maintain the official US time, define measurement standards, and create frameworks for everything from cybersecurity to manufacturing quality.

NIST doesn't make laws or enforce regulations. Instead, they develop voluntary frameworks based on best practices, scientific research, and extensive stakeholder input. Their work becomes influential because it's good, not because it's mandatory.


### The Cybersecurity Precedent

If you've worked in cybersecurity, you probably know the NIST Cybersecurity Framework (CSF). Published in 2014, it became the de facto standard for managing cyber risks. Companies use it voluntarily because it works. Regulators reference it because it represents expert consensus.

The AI RMF follows the same model. NIST gathered input from over 240 organizations—tech companies, civil society groups, academic researchers, government agencies—to create a framework that reflects real-world needs.


### Why NIST AI RMF Has Gone Global

Even though NIST is a US agency, the AI RMF has been adopted internationally for several reasons:

<!-- component:flowchart:flowchart-why-nist-ai-rmf-has-gone-global -->
1. **Quality**: It's well-researched and practical
2. **Flexibility**: It adapts to different contexts and industries
3. **Free**: No licensing fees or membership required
4. **Neutral**: NIST has no commercial interests
5. **Connected**: It aligns with other frameworks (ISO, OECD, EU AI Act)

---


## The AI RMF Structure: Two Parts

The AI RMF has two main components:

<!-- component:template:template-part-1-foundational-information -->

### Part 1: Foundational Information

This section explains:
- How to think about AI risks
- What makes AI different from other technologies
- Key characteristics of trustworthy AI
- Who should be involved in AI risk management

Think of Part 1 as the "why" and "what"—the conceptual foundation.


### Part 2: The Core Framework

This section provides:
- Four functions for managing AI risk
- Categories and subcategories within each function
- Suggested actions and outcomes

Think of Part 2 as the "how"—the practical guidance.

---


## Trustworthy AI: The Seven Characteristics

Before diving into risk management, the AI RMF defines what we're aiming for. Trustworthy AI systems should demonstrate seven characteristics:


### 1. Valid and Reliable

The AI should do what it's supposed to do, consistently.

<!-- component:template:template-1-valid-and-reliable -->
*Example:* If you're using AI to detect fraudulent transactions, it should actually catch fraud (valid) and do so consistently over time (reliable), not just work well on test data.


### 2. Safe

The AI shouldn't cause harm to people, property, or the environment.

<!-- component:template:template-2-safe -->
*Example:* An AI system controlling industrial equipment should have safeguards preventing dangerous operations, even if the AI makes an error.


### 3. Secure and Resilient

The AI should resist attacks and recover from problems.

<!-- component:template:template-3-secure-and-resilient -->
*Example:* A facial recognition system shouldn't be fooled by adversarial images (security) and should continue functioning if part of the system fails (resilience).


### 4. Accountable and Transparent

Someone should be responsible for AI decisions, and the system's workings should be understandable.

<!-- component:template:template-4-accountable-and-transparent -->
*Example:* When an AI denies a loan application, the bank should be able to explain why (transparency) and someone should be accountable for that decision (accountability).


### 5. Explainable and Interpretable

People should be able to understand how the AI reaches its conclusions.

<!-- component:template:template-5-explainable-and-interpretable -->
*Example:* A doctor using AI for diagnosis should understand why the AI suggests a particular condition, not just receive a percentage score.


### 6. Privacy-Enhanced

The AI should protect personal information and respect privacy rights.

<!-- component:template:template-6-privacy-enhanced -->
*Example:* An AI trained on customer data should not leak personal information in its outputs or be vulnerable to attacks that extract training data.


### 7. Fair – With Harmful Bias Managed

The AI should treat people equitably and not discriminate unfairly.

<!-- component:template:template-7-fair-with-harmful-bias-managed -->
*Example:* A hiring AI should not systematically disadvantage candidates based on gender, race, or other protected characteristics.

---


## The Four Core Functions

The heart of the AI RMF is four functions that work together as a continuous cycle:

```
    ┌─────────────┐
    │   GOVERN    │ (Foundation)
    └──────┬──────┘
           │
    ┌──────▼──────┐
    │     MAP     │ (Understand Context)
    └──────┬──────┘
           │
    ┌──────▼──────┐
    │   MEASURE   │ (Assess Risks)
    └──────┬──────┘
           │
    ┌──────▼──────┐
    │   MANAGE    │ (Take Action)
    └─────────────┘
```


### Function 1: GOVERN

**Purpose:** Establish the culture, structures, and processes for AI risk management.

GOVERN is the foundation. Without proper governance, the other functions won't work effectively. This is where leadership commitment, policies, and accountability structures are established.

**Key Activities:**
- Define organizational AI risk tolerance
- Establish policies and procedures
- Assign roles and responsibilities
- Create accountability structures
- Foster a culture of responsible AI

*CEO Translation:* This is about setting the tone from the top. It's deciding that AI risk management matters, putting someone in charge, and making sure everyone knows their role.

<!-- component:template:template-function-1-govern -->
*Example:* A retail company creates an AI Ethics Board, appoints a Head of AI Governance, develops an AI policy, and includes AI risk discussions in quarterly board meetings.


### Function 2: MAP

**Purpose:** Understand the context in which your AI operates.

MAP is about understanding your specific situation—the AI systems you have, who's affected, what could go wrong, and what benefits you're trying to achieve.

**Key Activities:**
- Identify and inventory AI systems
- Understand intended purposes and users
- Identify potentially affected stakeholders
- Assess the context of use
- Document assumptions and limitations

*CEO Translation:* This is knowing what AI you actually have, who it affects, and what the stakes are. You can't manage risks you don't know about.

<!-- component:template:template-function-2-map -->
*Example:* A hospital maps all AI systems in use: diagnostic imaging AI (high risk, affects patient outcomes), scheduling optimization (lower risk, affects staff efficiency), and email filtering (minimal risk). Each gets documented with its purpose, users, and potential impacts.


### Function 3: MEASURE

**Purpose:** Assess, analyze, and track AI risks.

MEASURE is about actually evaluating risks—testing systems, analyzing potential harms, and monitoring ongoing performance.

**Key Activities:**
- Develop risk assessment approaches
- Test for bias and fairness
- Evaluate security vulnerabilities
- Monitor system performance
- Track and document risks

*CEO Translation:* This is putting numbers and evidence behind your risk understanding. Not just thinking something might go wrong, but actually testing to find out.

<!-- component:template:template-function-3-measure -->
*Example:* The hospital runs bias testing on the diagnostic imaging AI, checking whether it performs equally well across patient demographics. They establish ongoing monitoring dashboards tracking accuracy, speed, and error rates.


### Function 4: MANAGE

**Purpose:** Respond to risks based on what you've learned.

MANAGE is about taking action—prioritizing risks, implementing controls, and responding to issues when they arise.

**Key Activities:**
- Prioritize risks for action
- Implement risk treatments
- Document decisions and rationale
- Communicate with stakeholders
- Update practices based on lessons learned

*CEO Translation:* This is actually doing something about the risks you've found. Fixing problems, adding safeguards, or sometimes deciding not to deploy an AI system at all.

<!-- component:template:template-function-4-manage -->
*Example:* The hospital discovers the diagnostic AI is less accurate for certain patient populations. They respond by adding human review requirements for those cases, retraining the model with more diverse data, and informing clinicians of the limitation.

---


## The AI RMF Playbook

NIST didn't just publish the framework—they also created a companion Playbook with suggested actions for each subcategory. The Playbook is incredibly practical, offering specific steps you can take.


### Playbook Structure

For each area of the framework, the Playbook provides:
- **Suggested Actions:** Concrete steps to take
- **Transparency and Documentation:** What to record
- **AI Actor Tasks:** Who should be involved


### Example: Playbook Entry for Bias Testing

For the MEASURE function's bias assessment category, the Playbook suggests:

**Suggested Actions:**
- Establish processes for bias testing before deployment
- Use multiple fairness metrics appropriate to context
- Test across relevant demographic groups
- Document testing methodology and results

**Transparency and Documentation:**
- Record bias testing procedures
- Document fairness metrics selected and why
- Maintain records of test results
- Note any limitations or gaps in testing

**AI Actor Tasks:**
- Data scientists: Conduct technical testing
- Domain experts: Validate appropriateness
- Legal/compliance: Review for regulatory requirements
- Leadership: Review and approve deployment decisions

---


## Profiles and Use Cases

The AI RMF encourages organizations to create "profiles"—customized versions of the framework tailored to specific use cases, industries, or organizational contexts.


### What Is a Profile?

A profile maps your specific situation to the framework. It identifies:
- Which framework elements are most relevant
- Current state of your practices
- Target state you want to reach
- Gaps to address


### Industry Profiles

NIST and industry groups are developing profiles for specific sectors:

**Financial Services:** Focuses on credit decisions, fraud detection, trading algorithms

**Healthcare:** Emphasizes patient safety, clinical decision support, diagnostic AI

**Human Resources:** Addresses hiring, promotion, and workforce management AI


### Creating Your Own Profile

Even without an industry profile, you can create one for your organization:

<!-- component:flowchart:flowchart-creating-your-own-profile -->
1. **Identify your AI use cases** (inventory from MAP function)
2. **Assess risk levels** for each use case
3. **Select relevant framework elements** based on risk
4. **Document current practices** for each element
5. **Identify gaps** between current and target state
6. **Prioritize improvements** based on risk and resources

---


## How the AI RMF Connects to Other Frameworks

One of the AI RMF's strengths is how well it integrates with other standards and regulations.


### EU AI Act Alignment

The EU AI Act references risk management requirements that align closely with the AI RMF:
- Risk management systems (Article 9) ↔ All four functions
- Data governance (Article 10) ↔ MAP function
- Record-keeping (Article 12) ↔ Documentation throughout
- Human oversight (Article 14) ↔ GOVERN and MANAGE functions

Organizations using the AI RMF will be well-positioned for EU AI Act compliance.


### ISO Standards

The AI RMF aligns with ISO standards:
- **ISO 31000** (Risk Management): Similar risk management concepts
- **ISO/IEC 42001** (AI Management System): Complementary approaches
- **ISO/IEC 23894** (AI Risk Management): Directly related

<!-- component:list:list-oecd-ai-principles -->

### OECD AI Principles

The seven trustworthy AI characteristics map to the OECD AI Principles adopted by 40+ countries.

---


## Implementation: Getting Started


### Step 1: Get Leadership Buy-In

The GOVERN function requires executive commitment. Present the AI RMF as:
- A way to manage reputational and legal risks
- An investment in sustainable AI adoption
- A framework that prepares you for coming regulations
- A competitive advantage in responsible AI


### Step 2: Conduct an AI Inventory

You can't manage AI risks without knowing what AI you have. Create a comprehensive inventory:
- What AI systems are in use or development?
- Who uses them?
- What decisions do they affect?
- What data do they use?


### Step 3: Assess Current State

For each AI system and each framework element:
- What are we currently doing?
- How does it compare to the framework?
- What gaps exist?


### Step 4: Prioritize and Plan

Not everything needs immediate attention. Prioritize based on:
- Risk level of the AI application
- Gap severity
- Resource requirements
- Regulatory pressure


### Step 5: Implement and Iterate

Start with high-priority items, then expand. The AI RMF is designed for continuous improvement, not one-time compliance.

---


## Common Implementation Challenges


### Challenge 1: "We Don't Know What AI We Have"

Many organizations discover they have AI systems they didn't know about—embedded in vendor products, built by individual teams, or inherited from acquisitions.

**Solution:** Start with a discovery process. Survey business units, review vendor contracts, audit technical systems.


### Challenge 2: "This Seems Like a Lot of Work"

The full AI RMF can seem overwhelming, especially for smaller organizations.

**Solution:** Scale to your context. A startup with one AI product doesn't need the same apparatus as a Fortune 500. Use profiles to focus on what's relevant.


### Challenge 3: "We Don't Have AI Expertise"

Understanding AI risks requires some technical knowledge.

**Solution:** Build cross-functional teams. Pair business leaders with data scientists. Consider external expertise for initial assessments.


### Challenge 4: "How Do We Measure Success?"

It's hard to prove a negative—risks that didn't materialize.

**Solution:** Track leading indicators: completed assessments, issues identified and resolved, policy adoption rates, training completion.

---


## The AI RMF in Practice: A Case Study

Let's walk through how a fictional company might use the AI RMF.

**Company:** MidWest Insurance Co.
**AI Application:** Claims processing automation
**Context:** AI reviews claims and recommends approval/denial; human adjusters make final decisions


### GOVERN Phase

MidWest establishes:
- AI Risk Committee (meets monthly)
- AI Policy requiring risk assessment for all AI projects
- Claims Director accountable for this AI system
- Risk tolerance: "No systematic bias in claim decisions"


### MAP Phase

MidWest documents:
- System purpose: Accelerate claims processing while maintaining accuracy
- Users: Claims adjusters, supervisors
- Affected parties: Policyholders (including vulnerable populations)
- Data used: Claim forms, medical records, policy details
- Key assumption: Historical claims data reflects fair decisions


### MEASURE Phase

MidWest conducts:
- Accuracy testing across claim types
- Bias analysis by policyholder demographics
- Security assessment of data handling
- Ongoing monitoring of approval/denial rates

**Finding:** AI recommends denial 15% more often for claims from certain zip codes, even after controlling for claim characteristics.


### MANAGE Phase

MidWest responds:
- Implements additional human review for flagged zip codes
- Initiates investigation into training data
- Plans model retraining with bias mitigation
- Documents decision and communicates to regulators proactively

---


## Conclusion

The NIST AI Risk Management Framework is the most practical, comprehensive guide available for managing AI risks. It's not a compliance checklist—it's a way of thinking about AI risks that helps organizations make better decisions.

Key takeaways:

<!-- component:flowchart:flowchart-conclusion -->
1. **Start with GOVERN:** Leadership commitment and clear structures are foundational
2. **Know your context (MAP):** You can't manage risks you don't understand
3. **Test and monitor (MEASURE):** Assumptions about AI need verification
4. **Take action (MANAGE):** Assessment without action is just paperwork
5. **Iterate continuously:** AI risk management is ongoing, not one-time

The AI RMF is free, well-documented, and supported by an extensive playbook. There's no reason not to start using it today.

Whether you're a CEO trying to understand what your team should be doing, or an AI governance professional building a program, the AI RMF gives you a proven framework to follow.

---


## Sources and Further Reading

1. **NIST AI Risk Management Framework (AI RMF 1.0)** - The complete framework document. Available at: nist.gov/itl/ai-risk-management-framework

2. **NIST AI RMF Playbook** - Practical implementation guidance. Available at: airc.nist.gov/AI_RMF_Knowledge_Base/Playbook

3. **NIST AI RMF Roadmap** - Plans for framework evolution. Available at: nist.gov/itl/ai-risk-management-framework

4. **NIST AI Resource Center** - Additional tools and resources. Available at: airc.nist.gov

5. **NIST Trustworthy and Responsible AI Resource Center** - Research and guidance. Available at: nist.gov/trustworthy-and-responsible-ai

6. **Executive Order 14110** - US government AI policy referencing NIST AI RMF. Available at: whitehouse.gov

7. **NIST Special Publication 1270** - Towards a Standard for Identifying and Managing Bias in Artificial Intelligence. Available at: nist.gov

8. **OECD AI Principles** - International principles aligned with AI RMF characteristics. Available at: oecd.ai/en/ai-principles

9. **ISO/IEC 23894:2023** - Guidance on AI risk management (related standard). Available at: iso.org

10. **NIST Cybersecurity Framework** - The model that inspired the AI RMF structure. Available at: nist.gov/cyberframework

---

*This article is part of the AI Governance Implementation Program. For the complete curriculum, visit suniliyer.ca or the AIDefence YouTube channel.*
