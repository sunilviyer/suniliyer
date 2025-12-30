# Article 142: AI in Human Resources – Hiring, Performance, and Retention

## TL;DR

AI is transforming HR—from resume screening and candidate matching to performance evaluation and retention prediction. But HR AI is under intense regulatory scrutiny because it directly affects people's livelihoods. NYC's Local Law 144 requires bias audits for hiring AI. The EEOC is actively enforcing discrimination laws against algorithmic hiring. The EU AI Act classifies employment AI as high-risk. For organizations, this means: AI can make HR more efficient, but governance is essential. Bias testing, transparency to candidates, human oversight, and documentation aren't optional—they're legal requirements in many jurisdictions. This article covers where AI is used in HR, the regulatory landscape, key fairness challenges, and best practices for responsible HR AI deployment.

---

## Introduction

In 2018, Amazon scrapped an AI recruiting tool that had taught itself to discriminate against women. The system, trained on resumes submitted over a 10-year period, learned that most successful hires were men—because that's who Amazon had historically hired. So it penalized resumes that included words like "women's" and downgraded graduates of all-women's colleges.

Amazon caught the problem internally. But how many companies are using AI in hiring without realizing their algorithms have similar biases?

HR is one of the highest-stakes domains for AI. These aren't decisions about which movie to recommend—they're decisions about who gets a job, who gets promoted, who gets fired. AI promises efficiency: scanning thousands of resumes, predicting job performance, identifying flight risks. But AI also risks automating discrimination at scale.

This article explores AI in HR: where it's used, how it's regulated, what can go wrong, and how to do it right.

---

## How AI Is Used in HR

### Recruiting and Hiring

**Resume Screening:**
- Parsing resumes to extract skills and experience
- Matching candidates to job requirements
- Ranking applicants by fit
- Filtering out unqualified candidates

**Sourcing:**
- Identifying passive candidates
- Searching social media and professional networks
- Predicting candidate interest

**Assessment:**
- Video interview analysis (facial expressions, word choice, tone)
- Skills testing and scoring
- Personality and cognitive assessments
- Work sample evaluations

**Interview Scheduling:**
- Automated scheduling
- Chatbot interactions with candidates
- Interview logistics coordination

### Performance Management

**Performance Prediction:**
- Identifying high performers
- Predicting performance problems
- Recommending development

**Productivity Monitoring:**
- Tracking work output
- Monitoring computer activity
- Measuring engagement

**Feedback and Development:**
- Suggesting feedback
- Recommending training
- Career path suggestions

### Retention and Workforce Planning

**Attrition Prediction:**
- Identifying flight risks
- Predicting turnover
- Suggesting retention interventions

**Workforce Analytics:**
- Skills gap analysis
- Succession planning
- Workforce optimization

**Compensation:**
- Pay equity analysis
- Compensation recommendations
- Market benchmarking

---

## The Regulatory Landscape

### NYC Local Law 144

The most specific AI hiring regulation in the United States:

**What It Requires:**

| Requirement | Details |
|-------------|---------|
| Scope | Automated Employment Decision Tools (AEDTs) used in NYC |
| Bias Audit | Annual independent audit for disparate impact |
| Public Disclosure | Publish audit results and notice of AI use |
| Candidate Notice | Inform candidates 10 days before AI evaluation |
| Alternative Option | Must allow candidates to request alternative process |

**What's an AEDT?**
A computational process that "substantially assists or replaces" discretionary decision-making in employment.

**Penalties:**
- $500 first violation
- $500-$1,500 subsequent violations (per violation, per day)

**Impact:**
Though NYC-specific, many companies apply it nationally because:
- Hiring is often centralized
- Easier than different processes for different locations
- Sets de facto national standard

### EEOC Enforcement

The Equal Employment Opportunity Commission enforces federal anti-discrimination laws:

**Key Laws:**
- Title VII (race, color, religion, sex, national origin)
- Age Discrimination in Employment Act
- Americans with Disabilities Act

**EEOC AI Guidance (2023):**
- Employers are liable for AI discrimination, even if they didn't create the AI
- Vendor AI is still employer's responsibility
- Disparate impact applies to AI decisions
- ADA requires reasonable accommodations in AI assessments

**Enforcement:**
The EEOC has made AI a priority, with dedicated resources for investigating algorithmic discrimination.

### Illinois BIPA and AI Video Interview Act

**Illinois AI Video Interview Act:**
- Notify candidates that AI will analyze video interviews
- Explain how AI works and what characteristics it evaluates
- Obtain consent before AI analysis
- Limit video sharing

**Illinois BIPA:**
- Regulates collection of biometric data
- Applies to facial recognition in hiring
- Private right of action with significant damages
- Several major settlements in employment context

### EU AI Act

Employment AI is classified as high-risk:

**Requirements:**
- Risk management system
- Data governance
- Technical documentation
- Transparency to affected persons
- Human oversight
- Accuracy, robustness, security

**Specific Provisions:**
- AI for recruitment, promotion, termination decisions
- Performance monitoring at work
- Emotion recognition in workplace (prohibited in some contexts)

### Colorado AI Act

Applies to "consequential decisions" including employment:

**Requirements:**
- Risk management
- Disclosure to consumers
- Ability to appeal decisions
- Reporting requirements

### Other Regulations

| Jurisdiction | Requirement |
|--------------|-------------|
| California | CCPA/CPRA privacy rights for employee data |
| Maryland | Consent for facial recognition in hiring |
| Various states | Ban the box, fair chance hiring laws |

---

## Key Fairness Challenges

### Challenge 1: Training Data Reflects Historical Bias

**The Problem:**
AI learns from historical data. If past hiring was biased, AI learns that bias.

**Amazon Example Revisited:**
- AI trained on 10 years of resumes
- Most hires were men (tech industry history)
- AI learned "male" patterns predicted success
- Penalized feminine-associated patterns

**Other Examples:**
- Past performance ratings may reflect biased managers
- "Cultural fit" data encodes homogeneity preferences
- Success definitions may favor certain groups

**Mitigation:**
- Audit training data for representation
- Question whether historical success predicts future success
- Consider counterfactual: would these patterns hold absent discrimination?

### Challenge 2: Proxy Discrimination

**The Problem:**
Even without using protected characteristics, AI can find proxies that correlate with them.

**Examples:**

| Proxy | What It May Encode |
|-------|-------------------|
| Name | Race, ethnicity, gender |
| Address/ZIP code | Race, socioeconomic status |
| College attended | Race, socioeconomic status |
| Graduation year | Age |
| Activities/interests | Gender, religion |
| Professional associations | Race, gender |

**The Challenge:**
Some proxies are legitimate job qualifications; others aren't. Distinguishing requires careful analysis.

### Challenge 3: Disability Discrimination

**ADA Requirements:**
Employers must provide reasonable accommodations, including in hiring processes.

**AI Challenges:**
- Video analysis may disadvantage those with speech differences
- Personality tests may screen out neurodivergent candidates
- Time-limited assessments may disadvantage some disabilities
- Facial expression analysis disadvantages many conditions

**EEOC Guidance:**
- AI cannot screen out based on disability unless job-related and consistent with business necessity
- Reasonable accommodations must be available
- Employers can't use AI to identify disabilities

### Challenge 4: Age Discrimination

**The Problem:**
AI can easily discriminate based on age through:
- Graduation dates
- Years of experience (favoring less or more)
- Technology platform familiarity
- Cultural references in applications

**Legal Context:**
ADEA prohibits age discrimination against workers 40+. Disparate impact applies.

### Challenge 5: The "Black Box" Problem

**The Challenge:**
Many AI hiring tools can't explain why they made specific decisions.

**Why It Matters:**
- Candidates can't challenge decisions they don't understand
- Employers can't verify compliance
- Regulators can't audit effectively
- Bias harder to detect and fix

**Example:**
An AI rejects a candidate. Why? The system says "low probability of success." Based on what? "Multiple factors in the model." This isn't a useful explanation.

### Challenge 6: Vendor Accountability

**The Problem:**
Many organizations use third-party AI hiring tools. But:
- Employers are still legally responsible
- Vendors may not provide adequate information
- Due diligence is challenging
- Contracts may limit visibility

**EEOC Position:**
"If an employer administers a selection procedure, it may be responsible under Title VII if the procedure discriminates... regardless of whether it is a vendor or other party that developed the procedure."

---

## Best Practices for HR AI Governance

### Governance Structure

**HR AI Governance Committee:**
- HR leadership
- Legal/Employment law
- Diversity and inclusion
- IT/Data science
- Ethics/Compliance

**Key Functions:**
- Approve AI tool adoption
- Establish policies and standards
- Monitor for discrimination
- Ensure regulatory compliance
- Handle complaints and appeals

### Pre-Deployment Assessment

**Before using any HR AI:**

| Question | Why It Matters |
|----------|---------------|
| What decisions does it affect? | Determines regulatory requirements |
| What data does it use? | Proxy discrimination risk |
| How was it developed and validated? | Bias in training |
| Can it be explained? | Compliance, candidate rights |
| What are known limitations? | Appropriate use |
| Is vendor reliable? | Ongoing support, compliance |

### Bias Testing Framework

**Required Testing:**

| Test | Purpose |
|------|---------|
| Adverse impact analysis | Selection rate differences by protected class |
| Four-fifths rule | Basic threshold for disparate impact |
| Statistical significance testing | Whether differences are meaningful |
| Intersectional analysis | Combined effects (e.g., Black women) |
| Proxy analysis | Which variables correlate with protected characteristics |

**When to Test:**
- Before deployment
- Annually (NYC requires this)
- After significant changes
- When concerns arise

**What to Do with Results:**
- Document findings
- Remediate if adverse impact found
- Consider alternatives
- Justify if business necessity claimed

### Transparency Requirements

**For Candidates:**

| Timing | What to Communicate |
|--------|---------------------|
| Application | Notice that AI will be used |
| Before assessment | What AI evaluates, how it works |
| After decision | Ability to request human review |
| If requested | Information about AI role in decision |

**Documentation for Compliance:**
- AI system descriptions
- Bias audit results
- Decision logs
- Human oversight records
- Accommodation requests and outcomes

### Human Oversight

**Levels of Oversight:**

| Level | Description | Appropriate For |
|-------|-------------|-----------------|
| AI assists, human decides | AI provides information, human makes call | All hiring decisions recommended |
| Human reviews AI decisions | AI decides initially, human can override | Lower-stakes screening |
| Human audits samples | AI decides, human reviews subset | Only with robust testing |

**Best Practice:**
For significant employment decisions (hiring, firing, promotion), a human should make the final decision, with AI as input, not determinant.

### Vendor Management

**Due Diligence Questions:**

| Area | Questions to Ask |
|------|------------------|
| Development | How was the AI trained? On what data? |
| Validation | What testing has been done? On what populations? |
| Bias testing | What disparate impact analysis exists? Results? |
| Explainability | Can the AI explain individual decisions? |
| Compliance | Is this NYC LL144 compliant? EEOC compliant? |
| Liability | Who's responsible if discrimination occurs? |
| Audit rights | Can we audit the system? |

**Contract Provisions:**
- Right to audit
- Bias testing requirements
- Compliance representations
- Indemnification for discrimination claims
- Data ownership and deletion
- Change notification

### Handling Complaints and Appeals

**Process Requirements:**
- Clear mechanism for candidates to raise concerns
- Human review of AI-influenced decisions on request
- Documentation of review and outcome
- Pattern tracking for systemic issues

---

## Sector-Specific Considerations

### High-Volume Hiring (Retail, Hospitality, Warehouses)

**AI Applications:**
- Resume screening at scale
- Automated scheduling of interviews
- Skills assessments
- Chatbot-based screening

**Key Concerns:**
- Speed pressures may reduce oversight
- Low-wage workers less able to challenge
- High volume means small bias affects many people
- Turnover makes validation difficult

### Professional Services (Law, Consulting, Finance)

**AI Applications:**
- Resume matching
- Video interviews
- Personality assessments
- Partner/promotion decisions

**Key Concerns:**
- "Culture fit" may encode homogeneity
- Prestige bias (schools, firms)
- Subjective criteria harder to audit
- Partnership decisions high stakes

### Tech Industry

**AI Applications:**
- Technical assessment
- Coding challenges
- Skills matching
- Diversity sourcing

**Key Concerns:**
- Technical assessments may disadvantage self-taught developers
- Time-limited coding tests (accessibility)
- Bias in "good coder" definitions
- Pipeline problems vs. selection problems

### Remote/Gig Work Platforms

**AI Applications:**
- Platform matching
- Performance ratings
- Work allocation
- Deactivation decisions

**Key Concerns:**
- Workers may not be "employees" but face algorithmic management
- Limited transparency into decisions
- Difficult to challenge platform AI
- Winner-take-all dynamics

---

## The Performance and Retention Dimension

### AI in Performance Management

**Productivity Monitoring:**
AI tracking keystrokes, mouse movements, active time, output metrics.

**Concerns:**
- Privacy implications
- Stress and wellbeing impact
- May not measure actual performance
- Disadvantages those with disabilities or caregiving responsibilities

**Legal Considerations:**
- Some states require notice of monitoring
- EU GDPR limits workplace surveillance
- Works councils in some countries

**Best Practices:**
- Transparency about what's monitored
- Focus on outputs, not activity
- Human context for AI metrics
- Consider employee wellbeing

### Attrition Prediction

**How It Works:**
AI predicts which employees are likely to leave, allowing proactive retention efforts.

**Concerns:**
- Self-fulfilling prophecy (identified employees get different treatment)
- Privacy (using personal data to predict behavior)
- May identify protected characteristics (pregnancy, illness)
- Could be used for preemptive termination

**Best Practices:**
- Use for positive interventions (retention), not negative (termination)
- Be transparent with employees
- Don't use for decisions unless validated
- Consider privacy implications

---

## Conclusion

AI in HR offers genuine benefits: processing more candidates, reducing human inconsistency, identifying great hires that might be overlooked. But it also risks automating discrimination at unprecedented scale—often in ways that are hard to detect and easy to deny.

Key takeaways:

1. **Regulation is here and growing:** NYC LL144, EEOC enforcement, EU AI Act, state laws—compliance isn't optional

2. **Employer liability is clear:** Using vendor AI doesn't shift responsibility; you're accountable for your hiring decisions

3. **Bias testing is essential:** Pre-deployment and ongoing testing for disparate impact

4. **Human oversight matters:** AI should inform, not replace, human judgment on significant employment decisions

5. **Transparency builds trust:** Candidates and employees deserve to know when and how AI affects them

6. **Documentation protects you:** In an enforcement action, you'll need to show what you did and why

Organizations that get HR AI right can build more effective, fairer hiring processes. Those that don't face legal liability, reputation damage, and—most importantly—harm to the people whose careers depend on fair treatment.

The goal isn't to avoid AI in HR. It's to use it responsibly.

---

## Sources and Further Reading

1. **NYC Local Law 144:** New York City Department of Consumer and Worker Protection. (2023). Automated Employment Decision Tools Rules.

2. **EEOC AI Guidance:** U.S. Equal Employment Opportunity Commission. (2023). The Americans with Disabilities Act and the Use of Software, Algorithms, and Artificial Intelligence.

3. **EEOC AI Enforcement:** EEOC. (2023). Select Issues: Assessing Adverse Impact in Software, Algorithms, and Artificial Intelligence.

4. **Illinois AI Video Interview Act:** Illinois Legislature. (2020). 820 ILCS 42.

5. **Amazon AI Recruiting Tool:** Dastin, J. (2018). Amazon scraps secret AI recruiting tool that showed bias against women. Reuters.

6. **EU AI Act Employment Provisions:** European Parliament. Regulation (EU) 2024/1689, Annex III.

7. **Colorado AI Act:** Colorado General Assembly. (2024). SB24-205.

8. **SHRM AI Resources:** Society for Human Resource Management. AI in the workplace resources.

9. **Upturn Hiring Research:** Upturn. Reports on hiring algorithms and civil rights.

10. **Data & Society Research:** Data & Society. Workplace monitoring and AI research.

11. **ADA and AI:** Job Accommodation Network. AI and disability accommodation resources.

12. **FTC on AI Hiring:** Federal Trade Commission. Guidance on AI and employment decisions.

---

*This article is part of the AI Governance Mastery Program by AIDefence (suniliyer.ca). For more resources on AI governance, visit the complete article series.*
