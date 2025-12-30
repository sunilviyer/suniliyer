---
title: 'Article 116: AI Auditing Fundamentals – What, Why, and How'
tldr: ''
category: AI Auditing & Accountability
learning_objectives:
- Understand the key concepts and principles of ai governance frameworks
- Implement regulatory requirements in real-world scenarios
- Evaluate audit procedures for organizational compliance
seo_keywords:
- article
- auditing
- AI governance
- artificial intelligence
- AI risk management
components:
- type: image_prompt
  label: Article Hero Image
  section: Header
  id: image-prompt-hero
  prompt: audit checklist, magnifying glass over AI system, accountability chain visualization,
    checklist, magnifying glass, inspection tools, quality badges, professional illustration,
    modern flat design style, clean and authoritative, high quality, blue and gray
    color scheme with accent colors, suitable for professional article header
- type: flowchart
  label: For Organizations Process
  section: For Organizations
  id: flowchart-for-organizations
- type: flowchart
  label: For Auditors Process
  section: For Auditors
  id: flowchart-for-auditors
- type: flowchart
  label: Sources and Further Reading Process
  section: Sources and Further Reading
  id: flowchart-sources-and-further-reading
- type: template
  label: Access to Information
  section: Access to Information
  id: template-access-to-information
  template_link: /templates/access-to-information.md
- type: list
  label: Legal and Regulatory Requirements
  section: Legal and Regulatory Requirements
  id: list-legal-and-regulatory-requirements
topic_fingerprint:
- deep learning
- audit
- fairness
- oversight
- accountability
named_examples:
- amazon
- eu ai act
- european parliament
- executive order
- fair
- gdpr
- iec
- ieee
- international organization for standardization
- iso
- microsoft
- national institute of standards
- nist
- nyc local law 144
- twitter
word_count: 2008
processed_date: '2025-12-18T20:04:58.822Z'
---


## What Is AI Auditing?


### The Basic Definition

AI auditing is a systematic examination of an AI system to evaluate whether it performs as intended, operates fairly, complies with laws and regulations, and aligns with organizational values.

Think of it this way: when your company hires a human employee, you check their references, verify their credentials, and monitor their work performance. AI auditing does the same thing for AI systems.


### What Makes AI Auditing Different from Traditional Auditing?

Traditional financial audits look at numbers—did the company report its revenues correctly? Did expenses match receipts? The rules are clear, and the math either adds up or it doesn't.

AI auditing is more complicated because:

**The "black box" problem:** Many AI systems, especially those using deep learning, can't easily explain why they made a specific decision. It's like having an employee who gives you the right answer most of the time but can't tell you how they figured it out.

**Performance varies by group:** An AI might work great overall (say, 95% accuracy) but perform terribly for certain groups of people. A facial recognition system might correctly identify most faces but fail regularly on people with darker skin tones.

**Behavior changes over time:** Unlike a spreadsheet that stays the same until someone edits it, AI systems can "drift"—their performance can degrade over time as the real world changes from what the AI was trained on.

**Multiple dimensions to check:** You're not just checking accuracy. You're also checking fairness, privacy, security, legal compliance, and whether humans can understand and override the system when needed.


### A Real-World Example

Consider COMPAS, an AI system used in the U.S. criminal justice system to predict whether defendants will commit future crimes. ProPublica investigated this system and found that it was twice as likely to incorrectly label Black defendants as high-risk compared to white defendants with similar backgrounds.

This is exactly the kind of problem an AI audit should catch. The system wasn't obviously broken—it gave predictions, judges used them, and everyone assumed it worked. But a careful examination revealed serious fairness problems.

---


## Why AI Auditing Matters

<!-- component:list:list-legal-and-regulatory-requirements -->

### Legal and Regulatory Requirements

Governments worldwide are requiring AI audits for certain types of systems:

**European Union AI Act:** High-risk AI systems (those used in hiring, credit decisions, education, and law enforcement) must undergo conformity assessments before deployment and ongoing monitoring afterward.

**New York City Local Law 144:** Since July 2023, employers using AI for hiring in NYC must conduct annual bias audits and publish the results publicly.

**GDPR Article 22:** When companies use AI to make automated decisions that significantly affect people, those people have the right to meaningful information about how the decision was made.

**U.S. Executive Order 14091:** Requires federal agencies to assess AI systems for civil rights impacts.


### Business Risk Management

Beyond legal requirements, AI audits help manage business risks:

**Reputational damage:** Amazon had to scrap an AI hiring tool after discovering it discriminated against women. The negative press coverage was significant.

**Financial losses:** Incorrect AI decisions can directly cost money—wrong fraud predictions, bad inventory forecasts, or pricing errors.

**Operational failures:** AI systems can fail in unexpected ways. Microsoft's chatbot Tay began posting offensive content within hours of launch because it learned from malicious users.


### Stakeholder Trust

Customers, employees, investors, and partners increasingly want to know that AI systems are trustworthy:

- Job applicants want assurance that AI hiring tools won't unfairly screen them out
- Loan applicants want to know AI-based credit decisions are fair
- Patients want to trust AI diagnostic recommendations
- Investors want to know AI systems won't create liability

---


## How AI Auditing Works


### The Three Levels of AI Auditing

AI audits typically examine systems at three levels:

**1. Governance Level:** Does the organization have proper policies, procedures, and oversight for AI? Is there clear accountability? Are there processes for handling problems when they arise?

**2. Process Level:** How was the AI system developed? Was the training data collected ethically? Were diverse perspectives included in the design? Is there documentation of key decisions?

**3. Technical Level:** Does the system perform accurately? Is it fair across different groups? Is it secure against attacks? Can its decisions be explained?


### Key Areas an AI Audit Examines

**Accuracy and Performance**
- Does the AI make correct predictions/decisions?
- How does performance compare to human baselines or industry benchmarks?
- Does performance vary by user group, geography, or time?

**Fairness and Bias**
- Does the AI treat different demographic groups equitably?
- Are there disparities in error rates across groups?
- Do outcomes show unjustified discrimination?

**Transparency and Explainability**
- Can the AI's decisions be explained to affected individuals?
- Is there documentation of how the system works?
- Can operators understand why specific decisions were made?

**Privacy and Data Protection**
- Was training data collected with proper consent?
- Does the system protect personal information?
- Does the AI inference reveal sensitive information?

**Security and Robustness**
- Is the system protected against adversarial attacks?
- What happens when the system encounters unusual inputs?
- Are there appropriate access controls?

**Human Oversight**
- Can humans review and override AI decisions?
- Are appropriate human-in-the-loop controls in place?
- Do operators have sufficient training?

**Legal Compliance**
- Does the system comply with relevant laws (GDPR, sector-specific regulations)?
- Are required impact assessments completed?
- Are disclosure requirements met?


### The Audit Process: A Step-by-Step Overview

**Step 1: Define the Scope**
What system are you auditing? What aspects will you examine? What standards will you measure against?

**Step 2: Gather Information**
Collect documentation, interview stakeholders, and obtain technical access to the system and its data.

**Step 3: Evaluate**
Test the system's performance, analyze outputs for bias, review governance practices, and check compliance with applicable standards.

**Step 4: Document Findings**
Record what you found, noting both problems and things working well.

**Step 5: Make Recommendations**
Provide practical guidance on addressing identified issues.

**Step 6: Report**
Present findings to appropriate stakeholders in a format they can understand and act upon.

**Step 7: Follow Up**
Verify that recommendations are implemented and monitor for new issues.

---


## Types of AI Audits


### By Who Conducts Them

**Internal Audits:** Conducted by the organization's own staff. Faster and cheaper but may lack independence.

**External Audits:** Conducted by independent third parties. More credible but more expensive.

**Regulatory Audits:** Conducted by government agencies. May be mandatory for certain high-risk systems.


### By What They Examine

**Pre-deployment Audits:** Conducted before an AI system goes live. Focuses on design, testing, and readiness.

**Post-deployment Audits:** Conducted on live systems. Examines real-world performance and impacts.

**Continuous Auditing:** Ongoing monitoring rather than point-in-time assessments. Uses automated tools to track performance and flag issues.


### By Focus Area

**Bias Audits:** Specifically examine fairness across demographic groups. Required in NYC for hiring AI.

**Conformity Assessments:** Check compliance with specific regulations like the EU AI Act.

**Risk Assessments:** Evaluate potential harms and mitigation measures.

**Technical Audits:** Deep dive into model performance, data quality, and system architecture.

---


## Challenges in AI Auditing

<!-- component:template:template-access-to-information -->

### Access to Information

Auditors need access to training data, model details, and real-world outcomes. Organizations may be reluctant to provide this due to:
- Trade secret concerns
- Privacy limitations
- Technical complexity


### Lack of Standards

Unlike financial auditing (which has GAAP and IFRS), AI auditing doesn't yet have universally accepted standards. Auditors must piece together guidance from:
- NIST AI Risk Management Framework
- ISO/IEC 42001
- IEEE standards
- Industry-specific guidance


### Technical Complexity

AI systems can be extremely complex. Auditors need both technical expertise (understanding how models work) and domain expertise (understanding the business context).


### Dynamic Systems

AI systems change over time—they may be retrained, their inputs may shift, or user behavior may evolve. A point-in-time audit may not capture how the system performs under all conditions.

---


## Getting Started with AI Auditing


### For Organizations

<!-- component:flowchart:flowchart-for-organizations -->
1. **Inventory your AI systems:** You can't audit what you don't know exists. Create a list of all AI systems in use, their purposes, and their risk levels.

2. **Prioritize by risk:** Focus first on AI systems that affect important decisions about people (hiring, lending, healthcare) or involve significant financial or safety stakes.

3. **Establish governance:** Create clear policies about AI use, designate responsible individuals, and establish escalation procedures.

4. **Build internal capability:** Train existing audit staff on AI concepts, or hire specialists.

5. **Engage external experts:** For high-risk systems or credibility purposes, consider third-party audits.


### For Auditors

1. **Learn the fundamentals:** Understand basic AI/ML concepts, common risk patterns, and relevant regulations.

2. **Study existing frameworks:** Familiarize yourself with NIST AI RMF, ISO/IEC 42001, and sector-specific guidance.

3. **Develop technical skills:** You don't need to be a data scientist, but you should understand how to interpret model performance metrics and bias analyses.

4. **Practice with case studies:** Review published audits and regulatory enforcement actions to understand what problems look like in practice.

---


## Conclusion

AI auditing is becoming as essential to modern organizations as financial auditing. As AI systems make more consequential decisions—determining who gets hired, who gets loans, who gets medical treatments—the need to verify these systems work correctly and fairly becomes unavoidable.

The field is still maturing. Standards are evolving, regulations are expanding, and best practices are being developed. But the core principle is simple: if an AI system can affect people's lives, someone should be checking that it works properly.

Organizations that embrace AI auditing early will find themselves better prepared for regulatory requirements, protected against reputational risks, and more trusted by their stakeholders. Those that wait may find themselves scrambling to catch up—or dealing with the consequences of unchecked AI failures.

---


## Sources and Further Reading

<!-- component:flowchart:flowchart-sources-and-further-reading -->
1. **ProPublica COMPAS Investigation:** Angwin, J., Larson, J., Mattu, S., & Kirchner, L. (2016). "Machine Bias." ProPublica. https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing

2. **EU AI Act:** European Parliament and Council. (2024). Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence. Official Journal of the European Union.

3. **NYC Local Law 144:** New York City Department of Consumer and Worker Protection. (2023). Automated Employment Decision Tools. https://rules.cityofnewyork.us/rule/automated-employment-decision-tools-2/

4. **NIST AI Risk Management Framework:** National Institute of Standards and Technology. (2023). AI Risk Management Framework (AI RMF 1.0). https://www.nist.gov/itl/ai-risk-management-framework

5. **Amazon Hiring AI Case:** Dastin, J. (2018). "Amazon scraps secret AI recruiting tool that showed bias against women." Reuters.

6. **Microsoft Tay Incident:** Vincent, J. (2016). "Twitter taught Microsoft's AI chatbot to be a racist asshole in less than a day." The Verge.

7. **GDPR Article 22:** European Parliament and Council. General Data Protection Regulation, Article 22: Automated individual decision-making, including profiling.

8. **ISO/IEC 42001:** International Organization for Standardization. (2023). ISO/IEC 42001:2023 Information technology — Artificial intelligence — Management system.

---

*This article is part of the AI Governance Mastery Program by AIDefence (suniliyer.ca). For more resources on AI governance, visit the complete article series.*
