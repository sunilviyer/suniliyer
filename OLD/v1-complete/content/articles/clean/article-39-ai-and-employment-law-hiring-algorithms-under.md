
![Article 39: AI and Employment Law – Hiring Algorithms Under Scrutiny]({{IMAGE_PLACEHOLDER_article-39-ai-and-employment-law-hiring-algorithms-under-scr}})

---
category: "Legal Frameworks"
learning_objectives:

  - "Understand the key concepts and principles of regulatory requirements"
  - "Implement audit procedures in real-world scenarios"
  - "Evaluate transparency measures for organizational compliance"
seo_keywords:

  - "article"
  - "employment"
  - "artificial intelligence"
  - "employment law"
  - "new york city"
word_count: 3663
processed_date: "2025-12-18T20:00:54.945Z"
---


## The Legal Framework: Laws That Apply to AI Hiring


### Title VII of the Civil Rights Act of 1964

Title VII is the foundational federal law prohibiting employment discrimination. It applies to employers with 15 or more employees and prohibits discrimination based on:

- Race
- Color
- Religion
- Sex (including pregnancy, sexual orientation, and gender identity)
- National origin

Title VII prohibits two types of discrimination:

**Disparate treatment:** Intentionally treating people differently because of a protected characteristic. Example: refusing to hire women for physically demanding jobs.

**Disparate impact:** Using practices that are neutral on their face but disproportionately affect a protected group without business justification. Example: requiring a high school diploma for jobs where education isn't necessary, if that requirement disproportionately excludes certain racial groups.

Disparate impact is particularly important for AI hiring tools. An algorithm doesn't need to intentionally discriminate to violate Title VII. If it produces discriminatory outcomes without a legitimate, job-related justification, it may be illegal.

**Example:** An AI resume screener that filters for "culture fit" based on patterns in existing employees could systematically exclude candidates who don't match the demographic profile of the current workforce. Even though the algorithm doesn't use race or gender as inputs, the effect is discriminatory.


### The Age Discrimination in Employment Act (ADEA)

The ADEA prohibits discrimination against workers 40 and older in companies with 20 or more employees. AI hiring tools can violate the ADEA if they:

- Disproportionately screen out older candidates
- Use proxies for age (graduation year, years of experience caps, "digital native" requirements)
- Are trained on data that reflects historical age discrimination

**Example:** An AI tool that penalizes candidates with more than 10 years of experience—ostensibly to avoid "overqualified" applicants—may disproportionately exclude older workers. If this exclusion isn't justified by business necessity, it could violate the ADEA.


### The Americans with Disabilities Act (ADA)

The ADA prohibits discrimination against qualified individuals with disabilities and requires employers to provide reasonable accommodations. AI hiring tools raise several ADA concerns:

**Accessibility:** Many AI tools aren't accessible to candidates with disabilities. Video interview platforms may not work with screen readers. Timed assessments may disadvantage candidates with cognitive disabilities. Game-based assessments may be impossible for candidates with certain physical limitations.

**Measuring disability, not ability:** AI tools that analyze facial expressions, speech patterns, or physical movements may inadvertently measure disability-related characteristics rather than job-relevant qualifications. A candidate with a speech impediment might score poorly on a verbal assessment not because they lack communication skills, but because the AI wasn't trained on diverse speech patterns.

**Accommodation requests:** Employers must provide accommodations for AI-based assessments when requested. If an employer uses a video interview platform, they must offer alternatives for candidates who can't use video due to disability.

**Example:** The EEOC settled a case with a company that used an online pre-employment test that wasn't accessible to applicants with visual impairments. The test provider had to modify the assessment and the employer had to change its practices.


### State and Local Laws

Beyond federal law, many states and localities have their own employment discrimination statutes. Some have enacted AI-specific requirements:

**New York City Local Law 144 (2023):** Requires employers using "automated employment decision tools" (AEDTs) to:

- Conduct annual bias audits by independent auditors
- Publish audit results on their websites
- Notify candidates that AI is being used
- Allow candidates to request information about the AI's use

**Illinois AI Video Interview Act (2020):** Requires employers using AI to analyze video interviews to:

- Notify applicants that AI will be used
- Explain how the AI works
- Obtain consent before using AI analysis
- Limit sharing of video recordings

**Maryland (2020):** Requires applicant consent before using facial recognition in interviews.

**California:** Proposed legislation would require impact assessments and transparency for AI hiring tools.

These state and local laws create a patchwork of requirements. A company hiring nationally must track and comply with different rules in different jurisdictions.

---


## How AI Hiring Tools Can Discriminate


### Training Data Reflects Historical Bias

AI systems learn from data. If that data reflects historical discrimination, the AI learns to replicate it.

Most AI hiring tools are trained on data about successful employees—who got hired, who performed well, who stayed with the company. But if past hiring was biased, the AI learns those biased patterns.

**The Amazon Example:** Amazon's AI recruiting tool was trained on resumes submitted over a 10-year period. Because most successful candidates were men (reflecting tech industry demographics), the AI learned that male-associated characteristics predicted success. It penalized resumes containing "women's" and downgraded candidates from women's colleges.

Amazon caught this problem and scrapped the tool. But how many other AI hiring tools have similar biases that haven't been detected?


### Proxies for Protected Characteristics

Even if an AI doesn't use protected characteristics directly, it may use proxies that correlate with them:

- **Zip code** correlates with race and socioeconomic status
- **Name** correlates with race, ethnicity, and gender
- **Graduation year** correlates with age
- **Gaps in employment** correlate with gender (caregiving) and disability
- **Hobbies and interests** may correlate with race, gender, or national origin
- **Communication style** varies across cultures

An AI that weights these factors may produce discriminatory outcomes without ever "seeing" protected characteristics.

**Example:** Researchers found that AI resume screening tools sometimes make different predictions for identical resumes with different names. A resume with a traditionally white-sounding name might score higher than an identical resume with a traditionally Black-sounding name. The AI didn't use race as an input, but names served as a proxy.


### Measuring the Wrong Things

Some AI hiring tools measure characteristics that seem relevant but actually correlate with protected characteristics more than job performance.

**Video interview analysis:** AI that evaluates facial expressions, eye contact, and vocal tone may measure cultural differences in communication style rather than actual qualifications. A candidate from a culture that values indirect eye contact might score poorly for "lack of engagement." A candidate with autism might be flagged for "atypical" facial expressions.

**Gamified assessments:** AI games designed to measure cognitive abilities may measure familiarity with gaming conventions rather than raw cognitive skills. Candidates who grew up playing video games have an advantage unrelated to job performance.

**Keyword matching:** Resume screeners that look for specific keywords may favor candidates who know the right buzzwords over those who have the relevant skills but describe them differently.


### Lack of Validation

Many AI hiring tools have never been validated—tested to confirm they actually predict job performance. Vendors make claims about accuracy and fairness, but independent verification is often lacking.

The Uniform Guidelines on Employee Selection Procedures, adopted by the EEOC and other agencies in 1978, require that selection procedures be validated if they have adverse impact on protected groups. This means employers must demonstrate that the tool actually predicts job performance and that no less discriminatory alternative would work as well.

**Example:** A vendor might claim their AI personality assessment predicts employee success. But when examined closely, the "success" being predicted might be supervisor ratings (which could themselves be biased) or retention (which might reflect factors other than performance). Without rigorous validation, these tools may just be automating discrimination.

---


## EEOC Guidance and Enforcement


### Technical Assistance Document (2023)

In May 2023, the EEOC issued guidance titled "Assessing Adverse Impact in Software, Algorithms, and Artificial Intelligence Used in Employment Selection Procedures Under Title VII."

Key points:

**Employers are responsible:** Even if a vendor develops the AI tool, the employer using it is liable for discriminatory outcomes. "The fact that an employer does not design or develop the algorithm or rely on the vendor's description of what a tool measures does not shield an employer from liability."

**The four-fifths rule applies:** Under the Uniform Guidelines, adverse impact is typically found if the selection rate for a protected group is less than 80% (four-fifths) of the rate for the group with the highest selection rate. This rule applies to AI hiring tools.

**Validation is required:** If an AI tool has adverse impact, the employer must show the tool is job-related and consistent with business necessity. This requires proper validation.

**Consider alternatives:** Even if an AI tool is validated, employers should consider whether less discriminatory alternatives would serve the same purpose.


### EEOC Strategic Enforcement Plan

The EEOC's Strategic Enforcement Plan for 2024-2028 identifies "technology-related employment discrimination" as a priority. The Commission specifically mentions:

- Algorithmic decision-making
- AI and machine learning
- Automated systems that screen or score candidates

This means more investigations, more enforcement actions, and more litigation involving AI hiring tools.


### Enforcement Examples

While many EEOC AI cases have been resolved quietly through settlements, some have become public:

**iTutorGroup Settlement (2023):** The EEOC settled with iTutorGroup for allegedly programming its recruiting software to automatically reject female applicants over 55 and male applicants over 60. This was disparate treatment—the algorithm was explicitly programmed to discriminate.

**EEOC v. Facebook (ongoing):** The EEOC has investigated whether Facebook's ad targeting tools allowed age-based discrimination in job advertising, steering job ads away from older workers.

---


## NYC Local Law 144: A Model for AI Hiring Regulation

New York City's Local Law 144, which took effect in 2023, represents the most detailed AI hiring regulation in the United States. It provides a template that other jurisdictions may follow.


### What's Covered

The law applies to "automated employment decision tools" (AEDTs)—any computational process derived from machine learning, statistical modeling, data analytics, or AI that issues simplified outputs (scores, classifications, recommendations) used to "substantially assist or replace discretionary decision making" in hiring or promotion.


### Bias Audit Requirement

Employers using AEDTs must conduct an annual "bias audit" by an independent auditor. The audit must calculate:

- **Impact ratio:** The selection rate for each race/ethnicity and sex category, compared to the most selected category
- **Scoring rates:** For tools that score candidates, the average score for each demographic group

If the audit reveals disparate impact, the law doesn't automatically prohibit use—but the results must be published.


### Transparency Requirements

Before using an AEDT, employers must:

1. **Notify candidates** that an AEDT will be used, at least 10 business days before use
2. **Disclose the job qualifications and characteristics** the AEDT will assess
3. **Describe the data source** for the qualifications and characteristics
4. **Offer an accommodation process** if requested by a candidate with a disability

Employers must also publish a summary of the bias audit on their website.


### Lessons from Implementation

NYC Local Law 144 has generated controversy and confusion during implementation:

**What counts as an AEDT?** The line between simple automation and "AI" is blurry. Employers have struggled to determine which tools are covered.

**Audit methodology challenges:** The law prescribes specific statistical tests, but applying them to real AI tools is complex. Auditors have developed different approaches, creating inconsistency.

**Vendor readiness:** Many AI vendors weren't prepared to provide the information needed for bias audits. Some have discontinued products rather than comply.

**Limited enforcement:** As of early 2024, enforcement had been minimal, leaving uncertainty about how strictly the law would be applied.

Despite these challenges, NYC's law has pushed the industry toward greater transparency. Other jurisdictions are watching its implementation closely.

---


## The Illinois AI Video Interview Act

Illinois was an early mover on AI hiring regulation. The Artificial Intelligence Video Interview Act, effective January 2020, applies to employers who use AI to analyze video interviews of job applicants.


### Requirements

Employers must:

1. **Notify applicants** in writing before the interview that AI will be used to analyze the video
2. **Explain** how the AI works and what characteristics it evaluates
3. **Obtain consent** from the applicant before using AI analysis

Regarding video recordings:

1. Employers may only share videos with people whose expertise is necessary for evaluation
2. Employers must delete videos within 30 days of an applicant's request


### Impact

The law's consent requirement gives candidates some control. If they don't consent to AI analysis, employers must consider them using other evaluation methods.

The law has prompted some employers to reconsider video interview AI altogether, questioning whether the efficiency gains justify the compliance burden and candidate concerns.

---


## Practical Guidance for Employers


### Before Adopting AI Hiring Tools

**Due diligence on vendors:** Don't just accept vendor claims about accuracy and fairness. Ask for:

- Documentation of how the tool was developed and trained
- Evidence of validation studies
- Adverse impact analyses across demographic groups
- Information about ongoing monitoring and updates

**Legal review:** Have employment counsel review any AI hiring tool before deployment. Consider both discrimination risk and disclosure requirements in all jurisdictions where you operate.

**Document the business justification:** Why are you using this tool? What job-related need does it address? Documentation of legitimate business reasons helps defend against claims.


### During Use

**Monitor for adverse impact:** Track selection rates by demographic group at each stage of the hiring process. If AI tools are creating disparate impact, you need to know—before the EEOC does.

**Maintain human oversight:** Don't let AI make final hiring decisions without human review. Human oversight helps catch errors and provides a check on algorithmic bias.

**Provide accommodations:** Have a process for candidates to request accommodations for AI-based assessments. Train staff to handle these requests appropriately.

**Keep records:** Document everything—which tools were used, how they were configured, what results they produced, and how hiring decisions were made.


### Disclosure and Transparency

**Know your disclosure obligations:** Track which jurisdictions require disclosure of AI use in hiring. New York City, Illinois, and Maryland have specific requirements; others may follow.

**Consider proactive disclosure:** Even where not required, being transparent about AI use builds trust. Many candidates appreciate knowing what to expect.

**Explain the process:** When disclosing AI use, explain what the tool evaluates and how it fits into the overall hiring process. Vague disclosures may not satisfy legal requirements.


### Responding to Challenges

**Take complaints seriously:** If candidates or employees raise concerns about AI hiring tools, investigate promptly. Dismissing concerns can lead to litigation and regulatory complaints.

**Prepare for EEOC inquiries:** The EEOC is actively investigating AI hiring tools. Have documentation ready to show the tools are validated, monitored, and compliant.

**Consider alternatives:** If an AI tool produces adverse impact, evaluate whether less discriminatory alternatives would serve the same purpose. This analysis is required under Title VII.

---


## The Role of HR Professionals

HR professionals are on the front line of AI hiring tool adoption and compliance. Key responsibilities include:

**Gatekeeping:** HR should be involved in decisions to adopt AI hiring tools, not just in using tools chosen by IT or procurement. HR understands employment law implications that technologists may miss.

**Training:** HR staff using AI hiring tools need training on:

- How the tools work
- What the tools can and cannot do
- Legal disclosure and accommodation requirements
- How to spot potential problems

**Feedback loops:** HR should monitor how AI tools perform in practice and report concerns to leadership. If a tool seems to be screening out qualified candidates from certain groups, that's a red flag.

**Candidate communication:** HR manages the candidate experience. When AI is involved, HR must ensure candidates are properly notified, have opportunity to request accommodations, and can ask questions about the process.

**Documentation:** HR should maintain records of AI tool use, including vendor documentation, bias audits, adverse impact analyses, and accommodation requests.

---


## The Vendor's Role and Employer Liability

AI hiring tool vendors often claim their products are "bias-free" or "EEOC compliant." These claims should be viewed skeptically.


### Vendor Claims vs. Reality

**"Our tool is bias-free":** No AI system is truly bias-free. At best, a tool has been tested and shows acceptable impact ratios. At worst, the claim is marketing fluff with no validation behind it.

**"Our tool is EEOC compliant":** The EEOC doesn't certify AI tools. Compliance depends on how the tool is used, not just how it was designed.

**"We handle all the legal stuff":** Vendors can help with compliance, but legal responsibility remains with the employer. Vendor contracts typically disclaim liability for discrimination claims.


### Employer Responsibility

Under EEOC guidance, employers cannot outsource their Title VII responsibilities to vendors:

> "If an employer administers a selection procedure, it may be responsible under Title VII if the procedure discriminates on a basis prohibited by Title VII, even if the procedure was designed or administered by an outside vendor."

This means:

- Employers must conduct their own adverse impact analyses
- Employers cannot rely solely on vendor assurances
- Employers face liability regardless of what vendors promise

Smart employers require vendors to provide:

- Detailed documentation of tool development
- Regular adverse impact reports
- Contractual indemnification for discrimination claims
- Cooperation with audits and investigations

---


## Looking Ahead: The Evolving Legal Landscape


### More Regulation Coming

The regulatory environment for AI hiring is expanding:

- **Federal legislation:** Several bills have been introduced in Congress to regulate AI in employment
- **State laws:** California, New Jersey, and other states are considering AI hiring regulations
- **EEOC guidance:** More detailed guidance on specific AI hiring tools is expected
- **Private litigation:** Class action lawsuits challenging AI hiring tools are increasing


### Industry Standards Development

Industry groups are developing standards and best practices:

- **SHRM** (Society for Human Resource Management) has issued guidance on ethical AI in HR
- **HR technology vendors** are forming coalitions to develop shared standards
- **Civil rights organizations** are publishing frameworks for AI auditing


### Technology Evolution

AI hiring tools continue to evolve:

- **Explainable AI:** New techniques make AI decisions more interpretable, potentially helping with legal compliance
- **Bias mitigation:** Technical approaches to reducing AI bias are improving, though none eliminate it entirely
- **Synthetic data:** Some vendors are exploring training on synthetic data to avoid encoding historical bias

---


## Conclusion

AI hiring tools promise to make recruitment faster, cheaper, and more objective. But they operate within a legal framework designed to prevent discrimination—a framework that applies regardless of whether decisions are made by humans or algorithms.

The law is clear: employers are responsible for discriminatory hiring practices whether they use AI or not. Using a vendor's tool doesn't shift that responsibility. Claims of "AI objectivity" don't override civil rights laws.

For HR professionals and business leaders, the path forward requires:

1. **Understanding the legal framework:** Title VII, ADEA, ADA, and state laws all apply to AI hiring
2. **Conducting due diligence:** Don't accept vendor claims at face value; demand evidence
3. **Monitoring for problems:** Track adverse impact and act quickly when problems emerge
4. **Meeting disclosure requirements:** Know and comply with transparency laws in every jurisdiction
5. **Maintaining human oversight:** Keep humans in the loop for hiring decisions

AI can be a valuable tool in hiring—but only if used responsibly, transparently, and in compliance with the law. The scrutiny on AI hiring tools will only increase. Companies that get ahead of these requirements now will avoid the lawsuits, investigations, and headlines that await those who don't.

---


## Sources

1. U.S. Equal Employment Opportunity Commission. "Assessing Adverse Impact in Software, Algorithms, and Artificial Intelligence Used in Employment Selection Procedures Under Title VII." Technical Assistance Document, May 18, 2023. https://www.eeoc.gov/laws/guidance/assessing-adverse-impact-software-algorithms-and-artificial-intelligence

2. U.S. Equal Employment Opportunity Commission. "The Americans with Disabilities Act and the Use of Software, Algorithms, and Artificial Intelligence to Assess Job Applicants and Employees." Technical Assistance Document, May 12, 2022. https://www.eeoc.gov/laws/guidance/americans-disabilities-act-and-use-software-algorithms-and-artificial-intelligence

3. U.S. Equal Employment Opportunity Commission. "Strategic Enforcement Plan Fiscal Years 2024-2028." September 21, 2023. https://www.eeoc.gov/strategic-enforcement-plan-fiscal-years-2024-2028

4. Dastin, Jeffrey. "Amazon scraps secret AI recruiting tool that showed bias against women." Reuters, October 10, 2018. https://www.reuters.com/article/us-amazon-com-jobs-automation-insight-idUSKCN1MK08G

5. New York City Department of Consumer and Worker Protection. "Automated Employment Decision Tools (Local Law 144)." Rules and guidance, 2023. https://www.nyc.gov/site/dca/about/automated-employment-decision-tools.page

6. Illinois General Assembly. "Artificial Intelligence Video Interview Act." 820 ILCS 42. https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=4015

7. Equal Employment Opportunity Commission. "EEOC Sues iTutorGroup for Age Discrimination." Press release, May 5, 2022; Settlement announced August 2023.

8. Uniform Guidelines on Employee Selection Procedures (1978). 29 CFR Part 1607. https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XIV/part-1607

9. Title VII of the Civil Rights Act of 1964. 42 U.S.C. § 2000e et seq.

10. Age Discrimination in Employment Act of 1967 (ADEA). 29 U.S.C. § 621 et seq.

11. Americans with Disabilities Act of 1990 (ADA). 42 U.S.C. § 12101 et seq.

12. Raghavan, Manish, et al. "Mitigating Bias in Algorithmic Hiring: Evaluating Claims and Practices." ACM Conference on Fairness, Accountability, and Transparency, 2020. https://dl.acm.org/doi/10.1145/3351095.3372828

13. Bogen, Miranda, and Aaron Rieke. "Help Wanted: An Examination of Hiring Algorithms, Equity, and Bias." Upturn, December 2018. https://www.upturn.org/work/help-wanted/

14. Society for Human Resource Management. "Using Artificial Intelligence for Employment Purposes." SHRM guidance document, 2024.
