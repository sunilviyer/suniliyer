
![Article 118: AI Audit Evidence – What to Collect and Analyze]({{IMAGE_PLACEHOLDER_article-118-ai-audit-evidence-what-to-collect-and-analyze}})

---
title: 'Article 118: AI Audit Evidence – What to Collect and Analyze'
tldr: ''
category: AI Auditing & Accountability
learning_objectives:
- Understand the key concepts and principles of ai governance frameworks
- Implement regulatory requirements in real-world scenarios
- Evaluate policy development for organizational compliance
seo_keywords:
- article
- audit
- AI governance
- AI ethics
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
- type: table
  label: Category vs Examples Table
  section: 'Type 1: Documentary Evidence'
  id: table-type-1-documentary-evidence
- type: table
  label: Stakeholder vs What They Know Table
  section: 'Type 2: Testimonial Evidence'
  id: table-type-2-testimonial-evidence
- type: table
  label: Question Type vs Purpose Table
  section: 'Type 2: Testimonial Evidence'
  id: table-type-2-testimonial-evidence
- type: table
  label: Category vs What You Measure Table
  section: 'Type 3: Quantitative Evidence'
  id: table-type-3-quantitative-evidence
- type: table
  label: Demographic Group vs Approval Rate Table
  section: 'Type 3: Quantitative Evidence'
  id: table-type-3-quantitative-evidence
- type: table
  label: Analysis vs What It Tells You Table
  section: 'Type 3: Quantitative Evidence'
  id: table-type-3-quantitative-evidence
- type: table
  label: Tool vs Best For Table
  section: 'Type 3: Quantitative Evidence'
  id: table-type-3-quantitative-evidence
- type: table
  label: Aspect vs What You're Looking For Table
  section: 'Type 4: Observational Evidence'
  id: table-type-4-observational-evidence
- type: table
  label: Factor vs More Reliable Table
  section: Reliability
  id: table-reliability
- type: table
  label: Category vs Documents Table
  section: 'Phase 1: Documentation Request (Week 1)'
  id: table-phase-1-documentation-request-week-1
- type: table
  label: Item vs Requested Table
  section: 'Phase 1: Documentation Request (Week 1)'
  id: table-phase-1-documentation-request-week-1
- type: table
  label: Test vs Data Needed Table
  section: 'Phase 4: Testing and Analysis (Week 2-4)'
  id: table-phase-4-testing-and-analysis-week-2-4
- type: flowchart
  label: 'Type 1: Documentary Evidence Process'
  section: 'Type 1: Documentary Evidence'
  id: flowchart-type-1-documentary-evidence
- type: flowchart
  label: Sources and Further Reading Process
  section: Sources and Further Reading
  id: flowchart-sources-and-further-reading
- type: template
  label: 'Example:'
  section: 'Type 1: Documentary Evidence'
  id: template-type-1-documentary-evidence
  template_link: /templates/example.md
- type: template
  label: 'Example:'
  section: 'Type 2: Testimonial Evidence'
  id: template-type-2-testimonial-evidence
  template_link: /templates/example.md
- type: template
  label: 'Example: Bias Analysis'
  section: 'Type 3: Quantitative Evidence'
  id: template-type-3-quantitative-evidence
  template_link: /templates/example-bias-analysis.md
- type: template
  label: 'Example:'
  section: 'Type 4: Observational Evidence'
  id: template-type-4-observational-evidence
  template_link: /templates/example.md
- type: template
  label: 'Example:'
  section: Sufficiency
  id: template-sufficiency
  template_link: /templates/example.md
- type: template
  label: 'Challenge 2: Too Much Information'
  section: 'Challenge 2: Too Much Information'
  id: template-challenge-2-too-much-information
  template_link: /templates/challenge-2-too-much-information.md
topic_fingerprint:
- audit
- model card
- ai ethics
- oversight
- fairness
named_examples:
- defense
- ibm
- international organization for standardization
- iso
- microsoft
- national institute of standards
- nist
word_count: 2792
processed_date: '2025-12-18T20:05:01.854Z'
---


## Why Evidence Matters


### The Credibility Problem

AI auditing is still a young field. Unlike financial auditing, where standards have been refined over a century, AI audit findings can be disputed, questioned, or dismissed.

Strong evidence solves this problem. When you can show:
- "Here's the policy that says X should happen"
- "Here's the test data showing X isn't happening"
- "Here are three stakeholders who confirmed they weren't trained on X"

...your findings become much harder to dismiss.


### The Legal Exposure Problem

AI audit reports may be used in:
- Regulatory compliance demonstrations
- Litigation defense
- Due diligence for acquisitions
- Public disclosure requirements

If your evidence doesn't hold up under scrutiny, neither will your conclusions—and that can create legal problems for your organization.


### The Action Problem

Audit findings are useless if nobody acts on them. Decision-makers need clear evidence to:
- Understand what's wrong
- Prioritize fixes
- Allocate resources
- Monitor improvements

Vague findings like "governance could be improved" don't drive action. Evidence-based findings like "4 of 7 required policies are missing, specifically..." do.

---


## The Four Types of Audit Evidence


### Type 1: Documentary Evidence

Documentary evidence is recorded information—the paper trail (even when it's digital).

**What It Includes:**

| Category | Examples |
<!-- component:table:table-type-1-documentary-evidence -->
|----------|----------|
| Governance Documents | AI policies, ethics guidelines, committee charters, approval records |
| Technical Documentation | Model cards, system specifications, architecture diagrams, data dictionaries |
| Development Records | Requirements documents, design decisions, testing results, change logs |
| Operational Documents | User manuals, training materials, incident reports, maintenance logs |
| Compliance Records | Impact assessments, consent records, audit trails, certification documents |
| Communications | Emails, meeting minutes, Slack threads (where relevant to decisions) |

**Why It's Important:**

Documentation shows what was supposed to happen and what decisions were made. It's your baseline for comparing intentions to reality.

<!-- component:template:template-type-1-documentary-evidence -->
**Example:**

You're auditing a hiring AI. Documentary evidence might include:
- The vendor's model card describing how the AI works
- The company's AI ethics policy requiring bias testing
- Email chains showing the procurement decision process
- Training records for HR staff using the system
- Bias testing results from before deployment

**How to Collect It:**

<!-- component:flowchart:flowchart-type-1-documentary-evidence -->
1. **Request a document list:** Ask the audit client to inventory all relevant documents
2. **Review systematically:** Don't just skim—read carefully and take notes
3. **Check for gaps:** Missing documentation is itself a finding
4. **Verify authenticity:** Confirm documents are genuine and current
5. **Maintain chain of custody:** Track what you received, when, and from whom

**Common Documentation Gaps:**

- Model cards that don't exist or lack key details
- Policies that are outdated or don't address AI
- Missing records of important decisions
- Training materials that don't match actual system capabilities
- Impact assessments that were never completed


### Type 2: Testimonial Evidence

Testimonial evidence is what people tell you—through interviews, surveys, and discussions.

**Who to Interview:**

| Stakeholder | What They Know |
<!-- component:table:table-type-2-testimonial-evidence -->
|-------------|----------------|
| AI Developers/Data Scientists | How the system was built, what trade-offs were made, known limitations |
| System Operators | How the system works in practice, workarounds used, problems encountered |
| Decision Recipients | How AI decisions affect them, concerns they have, whether they understand the process |
| Executives/Sponsors | Strategic objectives, risk tolerance, organizational commitment |
| Compliance/Legal | Regulatory requirements, legal exposure, past issues |
| IT/Security | System access, data protection, technical controls |
| HR/Change Management | Training programs, organizational readiness, cultural factors |

**Why It's Important:**

Documents tell you what's written down. Interviews tell you what actually happens—and often reveal gaps between policy and practice.

<!-- component:template:template-type-2-testimonial-evidence -->
**Example:**

The documentation says all AI decisions are reviewed by a human before becoming final. But in interviews, you discover:
- Operators rubber-stamp 95% of decisions without meaningful review
- They don't have time for proper review given volume
- Training didn't cover how to identify cases needing intervention

This testimonial evidence reveals that "human oversight" exists on paper but not in practice.

**How to Conduct Interviews:**

**Prepare Thoroughly**
- Review documentation first so you can ask informed questions
- Prepare a question guide (but stay flexible)
- Understand the interviewee's role and perspective

**Create a Safe Environment**
- Explain the audit purpose and how information will be used
- Clarify confidentiality expectations
- Avoid leading questions or seeming judgmental

**Ask Effective Questions**

| Question Type | Purpose | Example |
<!-- component:table:table-type-2-testimonial-evidence -->
|---------------|---------|---------|
| Open-ended | Get broad understanding | "Walk me through how you use the system day-to-day" |
| Probing | Dig deeper | "You mentioned workarounds—can you give me a specific example?" |
| Clarifying | Ensure understanding | "When you say 'often,' about how frequently would you estimate?" |
| Comparative | Understand gaps | "How does actual practice compare to the documented procedure?" |
| Hypothetical | Explore edge cases | "What happens if the system makes an obviously wrong decision?" |

**Document Responses**
- Take detailed notes during the interview
- Consider recording with permission
- Summarize key points immediately afterward
- Attribute quotes accurately


### Type 3: Quantitative Evidence

Quantitative evidence is numerical data—the results of testing and analysis.

**Types of Quantitative Evidence:**

| Category | What You Measure | Example Metrics |
<!-- component:table:table-type-3-quantitative-evidence -->
|----------|-----------------|-----------------|
| Performance | How well the AI works | Accuracy, precision, recall, F1 score, AUC-ROC |
| Fairness | Equity across groups | Disparate impact ratio, equal opportunity difference, predictive parity |
| Operational | How the system is used | Volume of decisions, override rates, processing time |
| Outcome | What happens as a result | Approval rates, error rates, complaint rates |
| Trend | Changes over time | Performance drift, demographic shift, error rate trends |

**Why It's Important:**

Numbers don't lie (though they can be misinterpreted). Quantitative evidence provides objective measurements that support—or challenge—qualitative findings.

<!-- component:template:template-type-3-quantitative-evidence -->
**Example: Bias Analysis**

You're testing a lending AI for demographic bias. Your quantitative analysis might show:

| Demographic Group | Approval Rate | Denial Rate | False Rejection Rate |
<!-- component:table:table-type-3-quantitative-evidence -->
|------------------|---------------|-------------|---------------------|
| White applicants | 72% | 28% | 3.2% |
| Black applicants | 54% | 46% | 8.7% |
| Hispanic applicants | 61% | 39% | 6.1% |
| Asian applicants | 75% | 25% | 2.8% |

The disparate impact ratio for Black applicants is 54/72 = 0.75, which is below the 0.80 threshold (the "four-fifths rule"). This is strong quantitative evidence of potential discrimination.

**How to Collect and Analyze Quantitative Data:**

**1. Define What to Measure**

Based on your audit criteria, identify the specific metrics you need. For a bias audit, this might include:
- Selection/approval rates by demographic group
- Error rates (false positives, false negatives) by group
- Score distributions by group
- Outcome rates (e.g., loan default rates) by group

**2. Obtain the Data**

You'll need:
- Historical decision data (inputs and outputs)
- Demographic information (may require careful handling for privacy)
- Ground truth data (actual outcomes, where available)

**3. Clean and Prepare Data**

- Check for missing values
- Identify outliers
- Verify data quality
- Handle categorical variables appropriately

**4. Conduct Analysis**

Common analyses include:

| Analysis | What It Tells You | When to Use |
<!-- component:table:table-type-3-quantitative-evidence -->
|----------|------------------|-------------|
| Descriptive statistics | Basic patterns | Always—start here |
| Disparate impact calculation | Selection rate ratios | Fairness testing |
| Statistical significance testing | Whether differences are meaningful | When comparing groups |
| Regression analysis | What factors drive outcomes | Understanding causation |
| Confusion matrix analysis | Types of errors | Performance evaluation |
| Trend analysis | Changes over time | Model drift detection |

**5. Validate Results**

- Cross-check with alternative methods
- Test sensitivity to assumptions
- Have another analyst review your work

**Tools for Quantitative Analysis:**

| Tool | Best For | Skill Level |
<!-- component:table:table-type-3-quantitative-evidence -->
|------|----------|-------------|
| Excel | Simple calculations, charts | Basic |
| Python (pandas, scikit-learn) | Complex analysis, ML metrics | Intermediate |
| R | Statistical analysis | Intermediate |
| Aequitas | Fairness metrics | Intermediate |
| Fairlearn | Microsoft's fairness toolkit | Intermediate |
| IBM AI Fairness 360 | Comprehensive bias testing | Advanced |


### Type 4: Observational Evidence

Observational evidence is what you see when you watch the system in action.

**What to Observe:**

| Aspect | What You're Looking For |
<!-- component:table:table-type-4-observational-evidence -->
|--------|------------------------|
| System behavior | Does the AI work as documented? |
| User interaction | How do operators actually use the system? |
| Decision process | What really happens when AI makes a recommendation? |
| Override handling | How are human interventions processed? |
| Error handling | What happens when things go wrong? |
| Training effectiveness | Do users understand the system? |

**Why It's Important:**

There's often a gap between what documentation says, what interviews reveal, and what actually happens. Observation catches things people forget to mention or don't realize are problems.

<!-- component:template:template-type-4-observational-evidence -->
**Example:**

Documentation says: "Operators must review AI recommendations before approval."

Interviews reveal: "Yes, we review everything before approving."

Observation shows: An operator sits with the system open, rapidly clicking "approve" on recommendation after recommendation—averaging 3 seconds per decision, with no apparent review of case details.

This observational evidence contradicts both documentation and interview claims.

**How to Conduct Observations:**

**1. Plan Your Observation**
- What specific activities will you watch?
- How long will you observe?
- Will you observe silently or ask questions?
- How will you document what you see?

**2. Minimize Observer Effect**
- People behave differently when watched (the Hawthorne effect)
- Observe multiple times if possible
- Build rapport before observing
- Be unobtrusive

**3. Use Structured Recording**
- Create a checklist of things to look for
- Note timestamps for key events
- Document exactly what you see, not interpretations
- Record environmental factors

**4. Debrief with Participants**
- After observing, ask clarifying questions
- "I noticed you skipped this screen—can you tell me why?"
- "Is what I saw today typical?"

---


## Evidence Quality Standards

Not all evidence is created equal. Good audit evidence meets three standards:


### Relevance

Does the evidence actually relate to your audit objectives?

**Example of Irrelevant Evidence:**
You're auditing an AI hiring tool for bias. You collect extensive documentation about the company's environmental sustainability policies. While interesting, this isn't relevant to your audit.

**How to Ensure Relevance:**
- Tie each piece of evidence to specific audit criteria
- Ask: "What audit question does this help answer?"
- Don't collect data just because it's available


### Reliability

Can you trust the evidence? Is it accurate and complete?

**Factors Affecting Reliability:**

| Factor | More Reliable | Less Reliable |
<!-- component:table:table-reliability -->
|--------|--------------|---------------|
| Source | Independent third party | Self-reported by auditee |
| Type | Direct observation, system data | Hearsay, opinions |
| Timing | Current, contemporaneous | Historical, reconstructed |
| Corroboration | Multiple sources agree | Single source only |
| Objectivity | Factual data | Subjective assessments |

**How to Ensure Reliability:**
- Corroborate important findings with multiple evidence types
- Verify data directly from systems when possible
- Question evidence that seems too convenient
- Note limitations in how evidence was collected


### Sufficiency

Do you have enough evidence to support your conclusions?

**How Much Is Enough?**

This depends on:
- The significance of the finding (major issues need stronger evidence)
- The risk level (higher risk = more evidence needed)
- Stakeholder expectations (regulatory audits may have specific requirements)

<!-- component:template:template-sufficiency -->
**Example:**

Finding: "The AI system discriminates against women."

This is a major finding with serious implications. You'd want:
- Quantitative data showing disparate impact
- Statistical significance testing
- Document review showing lack of bias testing
- Interviews confirming no fairness oversight
- Observation of system behavior

A single piece of evidence wouldn't be sufficient for such a significant conclusion.

---


## Evidence Collection: Practical Workflow

Here's a step-by-step approach to collecting evidence during an audit:


### Phase 1: Documentation Request (Week 1)

**Send an Initial Request List**

Common items to request:

| Category | Documents |
<!-- component:table:table-phase-1-documentation-request-week-1 -->
|----------|-----------|
| Governance | AI policy, ethics guidelines, committee charters, approval records |
| Technical | Model cards, system specs, data dictionaries, architecture diagrams |
| Development | Requirements, design docs, testing records, validation reports |
| Operations | User guides, training materials, incident logs, change records |
| Compliance | Impact assessments, consent records, audit history |

**Track What You Receive**

Create an evidence log:

| Item | Requested | Received | Format | Location | Notes |
<!-- component:table:table-phase-1-documentation-request-week-1 -->
|------|-----------|----------|--------|----------|-------|
| AI Ethics Policy | Jan 5 | Jan 8 | PDF | /docs/gov/ethics.pdf | v2.1, dated 2023 |
| Model Card | Jan 5 | Pending | - | - | Follow up Jan 12 |


### Phase 2: Document Review (Week 1-2)

**Review Systematically**

For each document:
- Note key findings
- Identify gaps or inconsistencies
- Generate follow-up questions
- Cross-reference to audit criteria

**Look for Red Flags:**
- Policies that don't mention AI
- Technical documentation with large "TBD" sections
- Testing records that skip fairness evaluation
- Missing approval signatures
- Documents that contradict each other


### Phase 3: Interviews (Week 2-3)

**Schedule Strategically**

- Start with operational staff to understand day-to-day reality
- Move to developers to understand technical details
- Interview executives last (you'll have better questions)

**Prepare Interview Guides**

For each stakeholder type, prepare:
- Introduction and context-setting
- Core questions (5-10)
- Follow-up probes
- Time for interviewee questions

**Document Thoroughly**

Create interview summaries within 24 hours including:
- Key points made
- Direct quotes (attributed)
- Contradictions with other evidence
- Follow-up items


### Phase 4: Testing and Analysis (Week 2-4)

**Define Test Cases**

Based on your criteria, define what you'll test:

| Test | Data Needed | Method | Expected Result |
<!-- component:table:table-phase-4-testing-and-analysis-week-2-4 -->
|------|-------------|--------|-----------------|
| Overall accuracy | Decision data + outcomes | Confusion matrix | ≥ 90% accuracy |
| Demographic parity | Decision data + demographics | Disparate impact | Ratio ≥ 0.80 |
| Equal opportunity | Outcomes by group | False negative rate comparison | Difference < 5% |

**Obtain and Validate Data**

- Request specific datasets needed for testing
- Validate data quality before analyzing
- Document any data limitations

**Conduct Analysis**

- Run defined analyses
- Document methodology clearly
- Save code/queries for reproducibility
- Generate visualizations


### Phase 5: Observation (Week 3)

**Schedule Observation Sessions**

- Observe system in normal operation
- Watch during peak periods if possible
- Observe different user types if applicable

**Document Observations**

- Note specific behaviors
- Record timestamps
- Take screenshots if appropriate
- Ask clarifying questions afterward


### Phase 6: Evidence Synthesis (Week 4)

**Triangulate Findings**

For each potential finding:
- What documentary evidence supports it?
- What testimonial evidence supports it?
- What quantitative evidence supports it?
- What observational evidence supports it?

**Assess Evidence Strength**

For each finding, rate:
- Relevance: High/Medium/Low
- Reliability: Strong/Moderate/Weak
- Sufficiency: Sufficient/Partial/Insufficient

**Document Gaps**

Note where evidence is missing or inconclusive.

---


## Common Evidence Collection Challenges


### Challenge 1: Access Denied

**Problem:** The organization won't provide requested documentation or system access.

**Solutions:**
- Escalate to audit sponsor
- Document refusal as a finding
- Work with available evidence
- Note limitations in report

<!-- component:template:template-challenge-2-too-much-information -->

### Challenge 2: Too Much Information

**Problem:** You're drowning in data and documents.

**Solutions:**
- Prioritize based on audit objectives
- Sample rather than reviewing everything
- Use search tools effectively
- Focus on high-risk areas


### Challenge 3: Contradictory Evidence

**Problem:** Different sources tell different stories.

**Solutions:**
- Dig deeper to understand the contradiction
- Seek additional corroborating evidence
- Interview parties to clarify
- Report the contradiction itself as a finding


### Challenge 4: Technical Complexity

**Problem:** You don't understand the technical aspects.

**Solutions:**
- Bring in technical expertise
- Ask developers to explain in plain terms
- Focus on outcomes rather than mechanisms
- Use available tools and frameworks


### Challenge 5: Data Quality Issues

**Problem:** The data provided is incomplete, inaccurate, or poorly formatted.

**Solutions:**
- Document quality issues
- Clean and validate what you can
- Adjust conclusions based on limitations
- Recommend data quality improvements

---


## Conclusion

Evidence is the foundation of credible audit findings. Without solid evidence, your conclusions are just opinions—easily dismissed or challenged.

The four types of evidence work together:
- **Documentary evidence** shows what was planned and recorded
- **Testimonial evidence** reveals what people believe and experience
- **Quantitative evidence** provides objective measurements
- **Observational evidence** shows what actually happens

Collect all four types, ensure they meet quality standards (relevant, reliable, sufficient), and triangulate across sources. When your evidence is strong, your findings are defensible—and your recommendations are more likely to drive real change.

Remember: you're building a case. Every piece of evidence either supports your conclusions or raises questions you need to answer. By the time you write your report, you should be confident that your findings can withstand scrutiny.

---


## Sources and Further Reading

<!-- component:flowchart:flowchart-sources-and-further-reading -->
1. **NIST AI Risk Management Framework:** National Institute of Standards and Technology. (2023). AI Risk Management Framework (AI RMF 1.0). https://www.nist.gov/itl/ai-risk-management-framework

2. **AI Fairness 360:** IBM Research. AI Fairness 360 Open Source Toolkit. https://aif360.mybluemix.net/

3. **Fairlearn:** Microsoft. Fairlearn: A toolkit for assessing and improving fairness in AI. https://fairlearn.org/

4. **Aequitas:** Center for Data Science and Public Policy. Aequitas: Bias and Fairness Audit Toolkit. https://github.com/dssg/aequitas

5. **IIA Standards:** Institute of Internal Auditors. (2024). Global Internal Audit Standards. https://www.theiia.org/

6. **Four-Fifths Rule:** U.S. Equal Employment Opportunity Commission. (1978). Uniform Guidelines on Employee Selection Procedures. 29 C.F.R. § 1607.

7. **Model Cards for Model Reporting:** Mitchell, M., et al. (2019). Model Cards for Model Reporting. Proceedings of the Conference on Fairness, Accountability, and Transparency. https://arxiv.org/abs/1810.03993

8. **ISO 19011:** International Organization for Standardization. (2018). ISO 19011:2018 Guidelines for auditing management systems.

9. **ProPublica COMPAS Analysis:** Angwin, J., Larson, J., Mattu, S., & Kirchner, L. (2016). How We Analyzed the COMPAS Recidivism Algorithm. ProPublica. https://www.propublica.org/article/how-we-analyzed-the-compas-recidivism-algorithm

10. **Hawthorne Effect:** McCambridge, J., Witton, J., & Elbourne, D. R. (2014). Systematic review of the Hawthorne effect. Journal of Clinical Epidemiology.

---

*This article is part of the AI Governance Mastery Program by AIDefence (suniliyer.ca). For more resources on AI governance, visit the complete article series.*
