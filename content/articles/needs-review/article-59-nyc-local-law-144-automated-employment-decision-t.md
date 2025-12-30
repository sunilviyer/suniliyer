---
title: 'Article 59: NYC Local Law 144 – Automated Employment Decision Tools'
tldr: ''
category: Legal Frameworks
learning_objectives:
- Understand the key concepts and principles of ai governance principles
- Implement implementation strategies in real-world scenarios
- Evaluate compliance frameworks for organizational compliance
seo_keywords:
- article
- local
- AI governance
- artificial intelligence
- local law
components:
- type: image_prompt
  label: Article Hero Image
  section: Header
  id: image-prompt-hero
  prompt: legal documents, scales of justice, regulatory framework visualization,
    government buildings, legal documents, regulatory symbols, compliance checkmarks,
    professional illustration, modern flat design style, clean and authoritative,
    high quality, blue and gray color scheme with accent colors, suitable for professional
    article header
- type: table
  label: Category vs Candidates Table
  section: Sample Audit Results
  id: table-sample-audit-results
- type: table
  label: Category vs Candidates Table
  section: Sample Audit Results
  id: table-sample-audit-results
- type: flowchart
  label: The Audit Process Process
  section: The Audit Process
  id: flowchart-the-audit-process
- type: flowchart
  label: For Employers Process
  section: For Employers
  id: flowchart-for-employers
- type: flowchart
  label: For Vendors Process
  section: For Vendors
  id: flowchart-for-vendors
- type: flowchart
  label: For Job Seekers Process
  section: For Job Seekers
  id: flowchart-for-job-seekers
- type: flowchart
  label: Emerging Best Practices Process
  section: Emerging Best Practices
  id: flowchart-emerging-best-practices
- type: flowchart
  label: Conclusion Process
  section: Conclusion
  id: flowchart-conclusion
- type: flowchart
  label: Sources Process
  section: Sources
  id: flowchart-sources
- type: list
  label: The Three Core Requirements
  section: The Three Core Requirements
  id: list-the-three-core-requirements
- type: list
  label: Best Practices for Compliance
  section: Best Practices for Compliance
  id: list-best-practices-for-compliance
- type: list
  label: Emerging Best Practices
  section: Emerging Best Practices
  id: list-emerging-best-practices
topic_fingerprint:
- machine learning
- audit
- transparency
- fairness
- oversight
named_examples:
- aedt
- amazon
- fair
- mit
- nyc local law 144
word_count: 2564
processed_date: '2025-12-18T20:06:48.777Z'
---


## What Problem Is the Law Trying to Solve?


### The Rise of AI in Hiring

AI has become a standard part of the recruiting process. A 2023 survey found that over 80% of large employers use some form of AI in hiring. Common applications include:

- **Resume screening**: AI scans thousands of resumes and filters out candidates who don't match certain criteria
- **Chatbot interviews**: Automated systems ask candidates initial screening questions
- **Video interview analysis**: AI analyzes recorded interviews for speech patterns, facial expressions, and keywords
- **Skills assessments**: Automated testing and scoring of candidate abilities
- **Candidate matching**: AI ranks candidates based on predicted fit

**The efficiency argument**: A large company might receive 10,000 applications for 100 positions. No human team can carefully review all 10,000 resumes, so AI becomes the first filter.


### The Bias Problem

The concern is that AI systems can embed and amplify bias:

**Amazon's lesson**: In 2018, Amazon scrapped an AI recruiting tool after discovering it penalized resumes containing the word "women's" (as in "women's chess club captain") because it was trained on historically male-dominated tech hiring data.

**Facial analysis concerns**: Studies have shown that some facial analysis AI performs less accurately on darker-skinned faces, potentially disadvantaging certain candidates in video interviews.

**Proxy discrimination**: Even when AI doesn't use protected characteristics directly, it can use proxies. A zip code might correlate with race; graduation year might reveal age; certain names might suggest gender or ethnicity.


### Why NYC Acted

New York City has a long history of civil rights legislation. The city also has one of the largest job markets in the world, with companies processing millions of applications annually. When advocates and academics raised alarms about AI bias in hiring, NYC became the first major jurisdiction to respond with specific legislation.

---


## What Does Local Law 144 Require?


### What Systems Are Covered?

The law applies to "Automated Employment Decision Tools" (AEDTs), defined as:

> Any computational process, derived from machine learning, statistical modeling, data analytics, or artificial intelligence, that issues simplified output, including a score, classification, or recommendation, that is used to substantially assist or replace discretionary decision making for making employment decisions.

**Breaking this down**:
- It must use AI/ML techniques (not just simple keyword matching)
- It must produce a score, classification, or recommendation
- It must substantially assist or replace human judgment
- It must be used for employment decisions


### Who Must Comply?

Both **employers** and **employment agencies** in New York City that use AEDTs to evaluate candidates or employees who:
- Applied for a job in NYC, or
- Are employed in NYC

**Important geography note**: The law applies based on where the job is located, not where the company or candidate is located. A San Francisco company hiring for NYC positions must comply.

<!-- component:list:list-the-three-core-requirements -->

### The Three Core Requirements


#### 1. Annual Bias Audit

Before using an AEDT, and annually thereafter, employers must obtain a "bias audit" conducted by an independent auditor. The audit must assess the tool's disparate impact on:

- **Sex categories** (including male, female, and non-binary/unknown)
- **Race/ethnicity categories** (including Hispanic/Latino, White, Black/African American, Asian, Native Hawaiian/Pacific Islander, American Indian/Alaska Native, and two or more races)

**What the audit calculates**:
- **Selection rate** (or scoring rate) for each category
- **Impact ratio**: Each category's selection rate compared to the highest-selected category

**The 80% rule**: While the law doesn't specify a threshold, auditors typically reference the EEOC's "4/5ths rule"—if a protected group's selection rate is less than 80% of the most-selected group's rate, there may be adverse impact requiring attention.


#### 2. Public Disclosure

Employers must publish the bias audit summary on their website, including:
- The date of the most recent audit
- The distribution of candidates across categories (if available)
- Selection/scoring rates for each category
- Impact ratios

**The transparency goal**: Anyone, including job applicants, can see how the AI tool performs across different groups.


#### 3. Candidate Notice

Before using an AEDT on a candidate, employers must provide notice:

**For candidates residing in NYC**:
- At least 10 business days before use
- Can be via job posting, email, or other written communication
- Must include information about what job qualifications the AEDT assesses
- Must inform candidates of their right to request an alternative selection process
- Must explain how to request reasonable accommodation

**For employees being evaluated for promotion/retention**:
- Same notice requirements
- At least 10 business days before use

---


## What the Audit Actually Looks Like


### Finding an Independent Auditor

The law requires auditors to be "independent," meaning:
- Not employed by the company using the AEDT
- Not employed by the AEDT vendor
- No financial interest in the audit outcome

In practice, auditors include:
- Consulting firms specializing in AI fairness
- Statistical analysis companies
- Academic researchers
- Law firms with appropriate expertise


### The Audit Process

A typical bias audit involves:

<!-- component:flowchart:flowchart-the-audit-process -->
1. **Data collection**: Gathering historical data on candidates who were evaluated by the AEDT
2. **Category assignment**: Identifying candidates' race/ethnicity and sex categories
3. **Outcome tracking**: Recording who was selected/scored positively vs. not
4. **Rate calculation**: Computing selection rates for each category
5. **Impact analysis**: Calculating impact ratios
6. **Report generation**: Documenting findings and methodology


### Sample Audit Results

Here's a simplified example of what audit results might look like:

**Selection Rate by Sex**

| Category | Candidates | Selected | Rate | Impact Ratio |
<!-- component:table:table-sample-audit-results -->
|----------|------------|----------|------|--------------|
| Male | 5,000 | 500 | 10% | 1.00 |
| Female | 4,500 | 360 | 8% | 0.80 |
| Non-binary/Unknown | 500 | 45 | 9% | 0.90 |

**Selection Rate by Race/Ethnicity**

| Category | Candidates | Selected | Rate | Impact Ratio |
<!-- component:table:table-sample-audit-results -->
|----------|------------|----------|------|--------------|
| White | 4,000 | 480 | 12% | 1.00 |
| Asian | 2,000 | 220 | 11% | 0.92 |
| Hispanic/Latino | 2,500 | 175 | 7% | 0.58 |
| Black | 1,500 | 90 | 6% | 0.50 |

In this example, the impact ratios for Hispanic/Latino and Black candidates fall below 0.80, indicating potential adverse impact requiring further investigation.


### What If the Audit Reveals Bias?

The law requires an audit—it doesn't automatically prohibit tools that show disparate impact. However:

- Employers should investigate potential causes
- Results might indicate discrimination under existing civil rights laws
- Companies typically work with vendors to adjust or retrain systems
- Some organizations may choose to discontinue use

---


## Real-World Compliance Challenges


### Challenge 1: Data Availability

Many employers don't have complete demographic data on applicants. Candidates aren't always required to provide race/ethnicity information. This creates two options:

**Option A: Use historical data**
Audit based on past candidates who voluntarily provided demographic information. Risk: Sample may not be representative.

**Option B: Use proxy data**
Some auditors use statistical estimation based on name and geography. Risk: Proxies are imperfect and somewhat controversial.


### Challenge 2: Defining "Substantially Assist"

The law covers tools that "substantially assist" decisions. But what counts as substantial?

**Clearly covered**: AI ranks candidates 1-100 and recruiters only interview the top 10
**Gray area**: AI provides "suggested" scores that recruiters frequently override
**Likely not covered**: AI organizes resumes alphabetically

The NYC Department of Consumer and Worker Protection (DCWP) has provided some guidance, but interpretation challenges remain.


### Challenge 3: Third-Party Tools

Many employers use hiring platforms from vendors like HireVue, Pymetrics, or HiredScore. Questions arise:

- Is the employer or vendor responsible for the audit?
- What if the vendor refuses to share data needed for auditing?
- Can multiple employers share one vendor audit?

**Current practice**: Many vendors now provide audit results to their clients, though employers remain ultimately responsible.


### Challenge 4: Cost

Bias audits aren't cheap. Costs range from $5,000 to $50,000+ depending on:
- Complexity of the AEDT
- Volume of historical data
- Number of tools to audit
- Depth of analysis required

For smaller employers, these costs can be significant.

---


## Criticisms from All Sides


### Criticisms from Employers

**Too burdensome**: Annual audits are expensive and time-consuming, especially for companies with multiple AI tools.

**Vague requirements**: The law leaves many questions unanswered, creating compliance uncertainty.

**NYC-only complication**: National companies must either limit tool use for NYC candidates or comply everywhere (often the simpler choice).


### Criticisms from Advocates

**Too narrow**: The law only covers AI in hiring, not other consequential uses of algorithms.

**Weak enforcement**: The Department of Consumer and Worker Protection has limited resources for enforcement.

**No private right of action**: Individuals can't sue directly under LL 144 (though they can still sue under general anti-discrimination laws).

**Low penalties**: Maximum penalty of $1,500 per violation may not deter large employers.

**Bias thresholds not specified**: The law requires disclosure but doesn't say how much bias is "too much."


### Vendor Concerns

**Competitive disadvantage**: Vendors must reveal information that might embarrass them or help competitors.

**Gaming risk**: Once audit methodology is public, bad actors might design systems that pass audits but still discriminate in subtle ways.

---


## Enforcement and Penalties


### Who Enforces the Law?

The NYC Department of Consumer and Worker Protection (DCWP) is responsible for enforcement.


### Penalty Structure

- First violation: Civil penalty up to $500
- Subsequent violations: Up to $1,500 per violation
- Each day of non-compliance = separate violation

**Example**: If an employer uses an AEDT without proper notice for 30 days, they could face:
- $500 for the first day
- $1,500 × 29 = $43,500 for subsequent days
- **Total: $44,000**


### Enforcement Activity So Far

As of late 2024, enforcement has been relatively light:
- DCWP has focused on education and outreach
- No major penalty actions have been publicly announced
- The agency appears to be allowing a grace period for compliance

This may change as the law matures and enforcement resources increase.

---


## How Companies Are Responding


### Strategy 1: Full Compliance

Many large employers have embraced the law:
- Hiring auditors to evaluate AEDTs
- Publishing results on career websites
- Adding notice language to job postings
- Training recruiters on new requirements

**Example approach**: Adding this language to job postings:

> "This job posting uses an automated employment decision tool to help screen candidates. More information about the tool, including the bias audit results, is available at [link]. Candidates may request an alternative selection process or a reasonable accommodation under applicable laws."


### Strategy 2: Avoid NYC Trigger

Some companies are restructuring to avoid the law:
- Limiting AEDT use to non-NYC positions
- Increasing human review to fall outside "substantially assist"
- Replacing AI tools with manual processes for NYC roles


### Strategy 3: Wait and See

Some employers, particularly smaller ones, are:
- Monitoring enforcement activity
- Waiting for additional DCWP guidance
- Hoping for clarifying amendments

This strategy carries compliance risk but may be rational for resource-constrained organizations.

---


## Impact Beyond New York City


### Influence on Other Jurisdictions

LL 144 has influenced AI hiring discussions nationwide:

**Colorado**: The state's AI Act includes employment as a "consequential decision"
**Illinois**: Strengthening enforcement of its AI Video Interview Act
**California**: Considering similar disclosure requirements
**Federal**: EEOC has referenced LL 144 in its AI guidance


### Industry Self-Regulation

The law has accelerated industry efforts:
- Vendors increasingly offer built-in bias auditing
- Industry groups developing best practices
- Third-party auditor ecosystem expanding
- Transparency becoming a competitive differentiator


### National Corporate Policies

Many national employers have adopted LL 144-like practices company-wide:
- Easier than location-specific compliance
- Demonstrates commitment to fair hiring
- Prepares for expected regulation elsewhere

---

<!-- component:list:list-best-practices-for-compliance -->

## Best Practices for Compliance


### For Employers

<!-- component:flowchart:flowchart-for-employers -->
1. **Inventory your hiring tools**: Know what AI/ML systems are used in recruiting
2. **Assess coverage**: Determine which tools qualify as AEDTs
3. **Engage auditors early**: Good auditors have limited capacity
4. **Coordinate with vendors**: Request bias documentation and audit support
5. **Update job postings**: Include required notice language
6. **Train recruiters**: Ensure staff understand the requirements
7. **Prepare for questions**: Candidates may ask about alternative processes
8. **Document everything**: Keep records of audits, notices, and decisions


### For Vendors

1. **Conduct internal bias testing**: Know your tool's performance before audits
2. **Provide audit support**: Help clients obtain required data
3. **Offer transparency**: Consider publishing your own bias analysis
4. **Build in fairness**: Incorporate bias mitigation into development
5. **Communicate proactively**: Keep clients informed about compliance


### For Job Seekers

1. **Look for notices**: Check job postings for AEDT disclosures
2. **Request alternatives**: You can ask for human review
3. **Know your rights**: Discrimination remains illegal regardless of AI involvement
4. **File complaints**: Report violations to NYC DCWP

---


## The Future of AI Hiring Regulation


### Expected Developments

**NYC**: Possible amendments to clarify ambiguities and strengthen enforcement

**Federal**: EEOC continuing to develop AI guidance; possible legislation

**States**: More states likely to adopt similar requirements

**Courts**: Eventual lawsuits will clarify interpretations

<!-- component:list:list-emerging-best-practices -->

### Emerging Best Practices

The field is converging on several principles:

<!-- component:flowchart:flowchart-emerging-best-practices -->
1. **Regular auditing** of AI hiring tools
2. **Transparency** about AI use in recruiting
3. **Human oversight** for significant decisions
4. **Candidate rights** to explanation and appeal
5. **Ongoing monitoring** after deployment

---


## Conclusion

NYC Local Law 144 represents a milestone in AI governance—the first US law specifically addressing automated employment decisions. While it has limitations and critics on all sides, it has fundamentally changed the conversation about AI in hiring.

For business leaders, the key takeaways are:

1. **If you hire in NYC, you must comply**: The law is active and enforcement will increase
2. **Annual audits are required**: Budget for professional bias auditing
3. **Transparency is mandatory**: Publish your results; notify candidates
4. **This is likely the floor, not the ceiling**: Expect more regulation ahead
5. **Fair hiring is good business**: Beyond compliance, these practices improve outcomes

The law isn't perfect, but it establishes an important principle: when AI makes decisions about people's livelihoods, there should be accountability. As one city council member said during the law's passage, "If you're going to use robots to hire people, you have to make sure the robots aren't racist."

---


## Sources

1. New York City Council. "Local Law 144 of 2021." https://legistar.council.nyc.gov/LegislationDetail.aspx?ID=4344524

2. NYC Department of Consumer and Worker Protection. "Automated Employment Decision Tools." 2023. https://www.nyc.gov/site/dca/about/automated-employment-decision-tools.page

3. NYC DCWP. "Final Rules for Automated Employment Decision Tools." April 2023. https://rules.cityofnewyork.us/rule/automated-employment-decision-tools-background/

4. EEOC. "The Americans with Disabilities Act and the Use of Software, Algorithms, and Artificial Intelligence to Assess Job Applicants and Employees." May 2022. https://www.eeoc.gov/laws/guidance/americans-disabilities-act-and-use-software-algorithms-and-artificial-intelligence

5. Brookings Institution. "New York City's Automated Decision Systems Law: A First Look." 2023. https://www.brookings.edu/

6. Center for Democracy and Technology. "NYC Local Law 144: AI Hiring Law Analysis." 2023. https://cdt.org/

7. Reuters. "Amazon scraps secret AI recruiting tool that showed bias against women." October 2018. https://www.reuters.com/article/us-amazon-com-jobs-automation-insight-idUSKCN1MK08G

8. MIT Technology Review. "Bias isn't the only problem with AI in hiring." August 2023. https://www.technologyreview.com/

9. Hunton Andrews Kurth. "NYC Automated Employment Decision Tools Law Takes Effect." July 2023. https://www.huntonak.com/

10. Society for Human Resource Management. "NYC AI Hiring Law: What HR Needs to Know." 2023. https://www.shrm.org/
