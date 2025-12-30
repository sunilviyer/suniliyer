---
title: 'Article 43: Automated Decision-Making – Understanding GDPR Article 22'
tldr: ''
category: Legal Frameworks
learning_objectives:
- Understand the key concepts and principles of ai governance frameworks
- Implement bias detection techniques in real-world scenarios
- Evaluate model validation processes for organizational compliance
seo_keywords:
- article
- automated
- artificial intelligence
- automated decision
- making
components:
- type: image_prompt
  label: Article Hero Image
  section: Header
  id: image-prompt-hero
  prompt: legal documents, scales of justice, regulatory framework visualization,
    government buildings, data protection symbols, privacy locks, secure data flow,
    European Union flag colors, EU stars, professional illustration, modern flat design
    style, clean and authoritative, high quality, blue and gray color scheme with
    accent colors, suitable for professional article header
- type: flowchart
  label: The Text of Article 22 Process
  section: The Text of Article 22
  id: flowchart-the-text-of-article-22
- type: flowchart
  label: Designing for Human Involvement Process
  section: Designing for Human Involvement
  id: flowchart-designing-for-human-involvement
- type: flowchart
  label: Safeguards Required When Exceptions Apply Process
  section: Safeguards Required When Exceptions Apply
  id: flowchart-safeguards-required-when-exceptions-apply
- type: flowchart
  label: Automated Decisions Based on Sensitive Data Process
  section: Automated Decisions Based on Sensitive Data
  id: flowchart-automated-decisions-based-on-sensitive-data
- type: flowchart
  label: Conclusion Process
  section: Conclusion
  id: flowchart-conclusion
- type: flowchart
  label: Sources Process
  section: Sources
  id: flowchart-sources
- type: template
  label: 'Example:'
  section: The Blurry Line
  id: template-the-blurry-line
  template_link: /templates/example.md
- type: template
  label: 'Example:'
  section: Profiling Without Article 22 Decisions
  id: template-profiling-without-article-22-decisions
  template_link: /templates/example.md
- type: template
  label: 'Example:'
  section: 'Exception 1: Necessary for a Contract'
  id: template-exception-1-necessary-for-a-contract
  template_link: /templates/example.md
- type: template
  label: 'Example:'
  section: Practical Implications
  id: template-practical-implications
  template_link: /templates/example.md
- type: template
  label: 'Article 13 and 14: Information About Automated Decisions'
  section: 'Article 13 and 14: Information About Automated Decisions'
  id: template-article-13-and-14-information-about-automated-decisions
  template_link: /templates/article-13-and-14-information-about-automated-decisions.md
- type: template
  label: What "Meaningful Information About Logic" Means
  section: What "Meaningful Information About Logic" Means
  id: template-what-meaningful-information-about-logic-means
  template_link: /templates/what-meaningful-information-about-logic-means.md
- type: template
  label: 'Good example:'
  section: What "Meaningful Information About Logic" Means
  id: template-what-meaningful-information-about-logic-means
  template_link: /templates/good-example.md
- type: template
  label: 'Inadequate example:'
  section: What "Meaningful Information About Logic" Means
  id: template-what-meaningful-information-about-logic-means
  template_link: /templates/inadequate-example.md
- type: list
  label: The "Solely" Requirement
  section: The "Solely" Requirement
  id: list-the-solely-requirement
- type: list
  label: Transparency Requirements
  section: Transparency Requirements
  id: list-transparency-requirements
- type: list
  label: Common Mistakes and How to Avoid Them
  section: Common Mistakes and How to Avoid Them
  id: list-common-mistakes-and-how-to-avoid-them
topic_fingerprint:
- machine learning
- neural network
- oversight
- transparency
- audit
named_examples:
- berkeley
- eu ai act
- european parliament
- gdpr
- oxford
word_count: 4266
processed_date: '2025-12-18T20:06:25.891Z'
---


## The Text of Article 22

Let's start with what Article 22 actually says. The key provision is Article 22(1):

> "The data subject shall have the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning him or her or similarly significantly affects him or her."

This single sentence contains several important concepts that determine when Article 22 applies:

<!-- component:flowchart:flowchart-the-text-of-article-22 -->
1. **"A decision"** — There must be a decision, not just processing
2. **"Based solely on automated processing"** — The decision must be entirely automated
3. **"Including profiling"** — Profiling is specifically covered
4. **"Legal effects"** — Decisions affecting legal rights trigger Article 22
5. **"Similarly significantly affects"** — Decisions with comparable real-world impact also trigger Article 22

Let's examine each element in detail.

---


## Element 1: "A Decision"


### What Counts as a Decision?

Article 22 applies to decisions, not to all automated processing. The distinction matters.

**Processing that is a "decision":**
- Approving or denying a loan application
- Accepting or rejecting a job applicant
- Setting an insurance premium for an individual
- Granting or denying a benefit claim
- Determining credit limits
- Deciding whether to offer a contract

**Processing that probably isn't a "decision" under Article 22:**
- Generating recommendations (if a human makes the final decision)
- Creating risk scores (if a human uses the score to make the decision)
- Sorting applications into categories for human review
- Personalizing content displayed to users
- Fraud detection alerts that humans investigate


### The Blurry Line

The line between "processing that informs a decision" and "making a decision" can be blurry.

<!-- component:template:template-the-blurry-line -->
**Example:** An AI generates a credit score, and a loan officer reviews applications. In theory, the officer makes the decision. But if the officer always follows the AI's recommendation, is the human really deciding? Or is the human just rubber-stamping an automated decision?

Regulators have indicated that if human involvement is merely nominal—if the human doesn't genuinely exercise independent judgment—then the decision is effectively automated, and Article 22 applies.

---


## Element 2: "Based Solely on Automated Processing"

<!-- component:list:list-the-solely-requirement -->

### The "Solely" Requirement

Article 22 only applies to decisions made **solely** by automated means. If there's meaningful human involvement in the decision, Article 22 doesn't apply (though other GDPR provisions still do).

This creates a crucial question: What counts as meaningful human involvement?


### Meaningful vs. Token Human Involvement

The Article 29 Working Party (now the European Data Protection Board) has provided guidance on this distinction:

**Meaningful human involvement requires:**
- The human has the **authority** to make a different decision
- The human has **access** to relevant information
- The human actually **exercises judgment** based on that information
- The human's involvement is **timely** (not just post-hoc review)

**Not meaningful human involvement:**
- A human who only rubber-stamps automated decisions
- A human who lacks authority to override the system
- A human who doesn't actually review the case
- A human who reviews only after the decision has been communicated and implemented
- A human who always follows the automated recommendation


### The Practical Challenge

Many organizations claim human oversight while providing only token involvement. Regulators are increasingly skeptical.

**Example of inadequate oversight:** A hiring platform uses AI to screen applications. A "human reviewer" sees a list of AI recommendations and clicks "approve" or "reject" for each—averaging 200 decisions per hour. The reviewer has neither the time nor the information to exercise genuine judgment. This is probably still "solely automated" despite the human in the loop.

**Example of adequate oversight:** The same AI generates recommendations, but human recruiters receive full applications, spend meaningful time reviewing each one, have authority to override AI recommendations, and actually do override them in a significant percentage of cases. This is probably genuine human decision-making.


### Designing for Human Involvement

Organizations that want to avoid Article 22's requirements by incorporating human involvement should:

<!-- component:flowchart:flowchart-designing-for-human-involvement -->
1. **Ensure authority:** Humans must have genuine power to make different decisions
2. **Provide information:** Humans need access to relevant data, not just AI outputs
3. **Allow adequate time:** Rushing prevents genuine review
4. **Enable overrides:** Make it easy for humans to disagree with AI
5. **Monitor override rates:** If humans never override AI, involvement may be token
6. **Train reviewers:** Humans must understand what they're reviewing
7. **Document decisions:** Maintain records showing genuine human judgment

---


## Element 3: "Including Profiling"


### What Is Profiling?

GDPR Article 4(4) defines profiling as:

> "Any form of automated processing of personal data consisting of the use of personal data to evaluate certain personal aspects relating to a natural person, in particular to analyse or predict aspects concerning that natural person's performance at work, economic situation, health, personal preferences, interests, reliability, behaviour, location or movements."

In simpler terms: profiling is using data to make predictions or evaluations about people.


### Profiling Under Article 22

Article 22 specifically includes profiling. This means:

- AI that profiles individuals and then makes decisions based on those profiles is covered
- The prohibition applies whether the decision is based directly on personal data or on profiles derived from that data
- Profiling that leads to decisions with significant effects triggers Article 22


### Profiling Without Article 22 Decisions

Not all profiling triggers Article 22. Profiling that doesn't lead to decisions with legal or significant effects is subject to other GDPR requirements (transparency, purpose limitation, etc.) but not Article 22's specific prohibition.

<!-- component:template:template-profiling-without-article-22-decisions -->
**Example:** A streaming service profiles users' viewing preferences to recommend content. This is profiling, but not a decision with legal or significant effects. Article 22 doesn't apply (though other GDPR provisions do).

<!-- component:template:template-profiling-without-article-22-decisions -->
**Example:** An insurer profiles applicants' health risks and automatically sets premiums based on those profiles. This is profiling leading to a decision with significant effects. Article 22 applies.

---


## Element 4: "Legal Effects"


### Decisions with Legal Effects

"Legal effects" refers to decisions that affect someone's legal rights, status, or entitlements:

- Denial of statutory benefits (social security, unemployment, disability)
- Rejection of citizenship or visa applications
- Termination of a contract
- Denial of legally mandated services
- Decisions affecting legal proceedings
- Denial of access to education where there's a legal right to admission

These decisions have legal consequences that individuals could potentially enforce or challenge in courts.


### Legal Effects Are Clearly Covered

When an automated decision has legal effects, Article 22 unambiguously applies. There's little room for interpretation—if the decision affects legal rights, it triggers the prohibition.

---


## Element 5: "Similarly Significantly Affects"


### The Broader Category

Beyond legal effects, Article 22 covers decisions that "similarly significantly" affect individuals. This is the more commonly debated category, because "significant" isn't defined in the regulation.


### Guidance on Significance

The European Data Protection Board has provided guidance. Decisions may "significantly affect" individuals if they:

- Affect their **circumstances, behavior, or choices**
- Have a **prolonged or permanent impact**
- Lead to **exclusion or discrimination**
- Affect their **financial circumstances**
- Affect their **health or well-being**
- Impact their **reputation**
- Affect their access to **essential services**


### Examples of Significant Effects

The following automated decisions likely have "significant effects":

**Employment:**
- Automated hiring or rejection of job applications
- Automated termination of employment
- Automated decisions affecting promotion or assignment
- AI-driven performance evaluations affecting compensation

**Financial Services:**
- Credit decisions (approval, denial, terms)
- Insurance underwriting (approval, denial, premiums)
- Bank account opening or closure
- Payment fraud decisions (blocking transactions)

**Essential Services:**
- Decisions about housing applications
- Utility service approvals or disconnections
- Healthcare access or treatment decisions
- Educational admissions

**Pricing and Access:**
- Personalized pricing that significantly affects affordability
- Decisions to ban or restrict service access
- Content moderation decisions affecting livelihood (for content creators)


### Examples That Probably Aren't Significant

Some automated decisions, while affecting individuals, probably don't meet the "significant" threshold:

- Product recommendations
- Content personalization
- Targeted advertising (in most cases)
- Website customization
- Minor pricing variations
- Email filtering


### The Gray Areas

Many decisions fall in gray areas where significance depends on context:

**Personalized pricing:** If an AI charges you 5% more for a product, that's probably not significant. If it charges you 50% more for essential goods, that might be.

**Content moderation:** Removing a post might not be significant for most users. But for someone whose livelihood depends on a platform, removal of their account could be devastating.

**Fraud detection:** Flagging a transaction for review might not be significant. But automatically blocking a traveler's card abroad, leaving them unable to pay for essentials, could be.

**Credit decisions:** A decision about a small store credit card might have limited significance. A mortgage denial affects someone's life for years.

Organizations should assess each automated decision type and consider worst-case impacts, not just typical cases.

---


## The Prohibition and Its Effect


### What Article 22(1) Means in Practice

When Article 22(1) applies, individuals have a **right not to be subject** to the automated decision. This doesn't mean automated decision-making is absolutely prohibited—it means:

- Individuals can object to being subject to such decisions
- Organizations must offer alternatives to purely automated processing
- If an automated decision is made, individuals can challenge it and request human review


### Remedies for Individuals

If an organization makes an automated decision covered by Article 22 without legal basis, affected individuals can:

- Demand that the decision not be implemented
- Request human review of the decision
- Challenge the decision with the organization
- Complain to data protection authorities
- Seek judicial remedies

---


## The Exceptions: When Automated Decisions Are Permitted

Article 22 isn't an absolute ban on automated decision-making. Article 22(2) provides three exceptions that permit automated decisions even with legal or significant effects:


### Exception 1: Necessary for a Contract

Article 22(2)(a): The decision is "necessary for entering into, or performance of, a contract between the data subject and a data controller."

**When this applies:**
- The individual wants to enter into a contract (e.g., apply for a loan)
- Automated processing is genuinely necessary to provide the service
- There's no reasonable non-automated alternative

**When this doesn't apply:**
- The automated decision isn't truly "necessary"—it's just more convenient or cheaper
- The organization could reasonably offer human-reviewed alternatives
- The automation goes beyond what the contract requires

<!-- component:template:template-exception-1-necessary-for-a-contract -->
**Example:** An online bank offering instant lending decisions might argue that automation is necessary—the business model depends on speed. But if customers could alternatively apply with human review (even if slower), automation might not be strictly "necessary."

**Important limitation:** This exception doesn't apply to decisions based on special category data (sensitive data like health, race, religion, etc.) unless explicit consent is obtained.


### Exception 2: Authorized by Law

Article 22(2)(b): The decision is "authorized by Union or Member State law to which the controller is subject and which also lays down suitable measures to safeguard the data subject's rights and freedoms and legitimate interests."

**When this applies:**
- Specific legislation authorizes the automated processing
- The legislation includes appropriate safeguards
- Common in tax, benefits, and regulatory contexts

**Examples:**
- Automated processing for tax assessments authorized by tax law
- Automated fraud detection mandated by financial regulations
- Automated verification required by anti-money laundering rules

**Key requirement:** The law must include safeguards—simply permitting automation isn't enough.


### Exception 3: Explicit Consent

Article 22(2)(c): The individual has given "explicit consent."

**Requirements for explicit consent:**
- Must be separate from general terms and conditions
- Must specifically address automated decision-making
- Must clearly explain what automated processing will occur
- Must be genuinely voluntary (not required to access services)
- Must be withdrawable

**Example of adequate consent:** "We use automated systems to make credit decisions. This means a computer program, without human review, will decide whether to approve your application and on what terms. You have the right to request human review of any automated decision. By clicking 'I consent to automated decision-making,' you agree to this process."

**Example of inadequate consent:** Buried in paragraph 47 of terms of service: "We may use automated systems to process your application."

**Important limitation:** Like the contract exception, explicit consent doesn't cover automated decisions based on special category data unless additional conditions are met.

---


## Safeguards Required When Exceptions Apply

Even when automated decisions are permitted under the exceptions, Article 22(3) requires "suitable measures to safeguard the data subject's rights and freedoms and legitimate interests."

At minimum, individuals must have the right to:

<!-- component:flowchart:flowchart-safeguards-required-when-exceptions-apply -->
1. **Obtain human intervention** — Request that a person review the automated decision
2. **Express their point of view** — Provide additional information or context
3. **Contest the decision** — Challenge the automated outcome


### Implementing These Safeguards

**Human intervention:**
- Provide a clear mechanism for requesting human review
- The human reviewer must have authority to change the decision
- Review must be genuine, not pro forma
- Response time should be reasonable

**Expressing views:**
- Allow individuals to submit additional information
- Provide channels for communication (not just automated forms)
- Ensure submitted information is actually considered

**Contesting decisions:**
- Provide clear appeals processes
- Explain how to contest decisions
- Ensure contested decisions receive meaningful review
- Communicate outcomes of contests


### Additional Safeguards to Consider

Beyond the minimum requirements, organizations should consider:

- **Transparency:** Clear explanation of how automated decisions are made
- **Accuracy:** Regular testing and validation of automated systems
- **Bias prevention:** Assessment and mitigation of discriminatory outcomes
- **Data quality:** Ensuring input data is accurate and up-to-date
- **Security:** Protecting automated systems from manipulation
- **Audit trails:** Recording automated decisions for review

---


## Special Category Data: Additional Restrictions


### What Is Special Category Data?

GDPR Article 9 identifies "special categories" of personal data that receive extra protection:

- Racial or ethnic origin
- Political opinions
- Religious or philosophical beliefs
- Trade union membership
- Genetic data
- Biometric data (when used for identification)
- Health data
- Sex life or sexual orientation


### Automated Decisions Based on Sensitive Data

Article 22(4) provides that automated decisions covered by Article 22 cannot be based on special category data unless:

<!-- component:flowchart:flowchart-automated-decisions-based-on-sensitive-data -->
1. **Explicit consent** has been obtained, OR
2. **Processing is necessary** for substantial public interest, based on EU or member state law with appropriate safeguards

This is a higher bar than the general Article 22 exceptions. The contract exception alone isn't sufficient if special category data is involved.


### Practical Implications

If your AI uses health data, racial information, or other sensitive data to make automated decisions, you generally need:

- Explicit consent specifically authorizing both the use of sensitive data AND automated decision-making, OR
- Specific legal authorization with appropriate safeguards

<!-- component:template:template-practical-implications -->
**Example:** An insurer using health data for automated underwriting typically needs explicit consent that covers both the health data processing and the automated decision-making.

---

<!-- component:list:list-transparency-requirements -->

## Transparency Requirements

<!-- component:template:template-article-13-and-14-information-about-automated-decisions -->

### Article 13 and 14: Information About Automated Decisions

Beyond Article 22's specific requirements, GDPR Articles 13 and 14 require organizations to provide information about automated decision-making when collecting personal data:

- The **existence** of automated decision-making, including profiling
- **Meaningful information** about the logic involved
- The **significance** and **envisaged consequences** for the individual

<!-- component:template:template-what-meaningful-information-about-logic-means -->

### What "Meaningful Information About Logic" Means

This doesn't require disclosing source code or algorithm weights. Rather, it means explaining:

- What factors the algorithm considers
- How those factors are weighted (in general terms)
- What outcomes are possible
- How different inputs might affect outcomes

<!-- component:template:template-what-meaningful-information-about-logic-means -->
**Good example:** "Our credit decision considers your payment history, current debts, income, and length of credit history. Payment history is the most important factor. On-time payments improve your score, while late or missed payments lower it. Higher incomes relative to debts generally result in better offers."

<!-- component:template:template-what-meaningful-information-about-logic-means -->
**Inadequate example:** "We use algorithms to make credit decisions."


### Explaining AI Decisions Is Hard

Modern machine learning creates genuine challenges for transparency:

- Neural networks may have millions of parameters
- The relationship between inputs and outputs may not be linear or intuitive
- Even developers may not fully understand why the model makes specific predictions

However, difficulty doesn't excuse non-compliance. Organizations must make good-faith efforts to explain automated decision-making in understandable terms.

**Techniques that can help:**
- Feature importance analysis (which inputs matter most)
- Local explanations (why this specific decision was made)
- Counterfactual explanations ("if your income were higher, the result would be different")
- Plain language summaries of general decision logic

---


## Compliance Roadmap


### Step 1: Inventory Automated Decisions

Identify all automated decision-making that:
- Uses personal data
- Produces decisions (not just recommendations or processing)
- May have legal or significant effects


### Step 2: Assess Article 22 Applicability

For each identified system:
- Does it make decisions (not just process data)?
- Are decisions based solely on automated processing?
- Do decisions have legal or significant effects?

If all three are yes, Article 22 applies.


### Step 3: Determine Compliance Strategy

For systems where Article 22 applies, choose one approach:

**Option A: Add meaningful human involvement**
- Design genuine human oversight into the process
- Ensure humans have information, authority, time, and training
- Document that humans exercise independent judgment

**Option B: Rely on an exception**
- Contract necessity: Ensure automation is truly necessary
- Legal authorization: Identify specific legal basis with safeguards
- Explicit consent: Obtain proper consent specifically for automated decisions


### Step 4: Implement Required Safeguards

If relying on exceptions:
- Enable human intervention upon request
- Create channels for individuals to express views
- Establish appeals/contest mechanisms
- Document these safeguards


### Step 5: Ensure Transparency

- Update privacy notices to explain automated decision-making
- Provide meaningful information about logic
- Explain significance and consequences
- Make information accessible at the time of data collection


### Step 6: Address Special Category Data

If automated decisions involve sensitive data:
- Obtain explicit consent covering both sensitive data processing and automated decisions, OR
- Identify specific legal basis with appropriate safeguards
- Document your legal basis


### Step 7: Monitor and Document

- Keep records of automated decision systems
- Monitor for issues (accuracy, bias, complaints)
- Document safeguards and their implementation
- Maintain records of human reviews and appeals

---

<!-- component:list:list-common-mistakes-and-how-to-avoid-them -->

## Common Mistakes and How to Avoid Them


### Mistake 1: Assuming Human Involvement Is Enough

**The problem:** Organizations add a human "reviewer" but don't ensure meaningful involvement.

**The solution:** Verify that humans have authority, information, time, and training to exercise genuine judgment. Monitor override rates—if humans never override AI, involvement may be token.


### Mistake 2: Underestimating "Significant Effects"

**The problem:** Organizations assume their automated decisions aren't significant enough to trigger Article 22.

**The solution:** Consider worst-case scenarios, not just typical cases. When in doubt, treat decisions as potentially significant and implement safeguards.


### Mistake 3: Relying on General Consent

**The problem:** Organizations bury automated decision-making consent in general terms of service.

**The solution:** Obtain specific, explicit consent that clearly addresses automated decision-making. Consent must be informed, specific, and freely given.


### Mistake 4: Providing Inadequate Explanations

**The problem:** Organizations describe automated decisions too vaguely ("we use algorithms").

**The solution:** Provide meaningful information about what factors are considered, how they're weighted, and how different inputs affect outcomes.


### Mistake 5: Lacking Appeals Mechanisms

**The problem:** Organizations have no process for individuals to contest automated decisions.

**The solution:** Create clear, accessible mechanisms for requesting human review and contesting decisions. Train staff on handling these requests.


### Mistake 6: Ignoring Sensitive Data Issues

**The problem:** Organizations use health, demographic, or other sensitive data in automated decisions without proper authorization.

**The solution:** Identify when automated decisions use special category data and ensure you have explicit consent or specific legal authorization with safeguards.

---


## Enforcement Examples


### Major Cases

**Hungarian Data Protection Authority (2019):** A bank was fined for automatically rejecting loan applications without meaningful human review. The regulator found that human involvement was nominal—employees simply confirmed automated decisions without genuine assessment.

**Polish Data Protection Authority (2019):** A company scoring individuals' creditworthiness was ordered to provide meaningful information about scoring logic. The regulator required explanation of factors used and their relative importance.

**Italian Data Protection Authority (2021):** Deliveroo was fined €2.6 million partly for automated systems that affected rider rankings and work allocation without adequate transparency or human oversight.


### Patterns in Enforcement

Regulators have focused on:
- Lack of genuine human involvement in nominally "human-reviewed" decisions
- Inadequate transparency about automated decision logic
- Missing or ineffective safeguards for individuals
- Use of special category data without proper authorization
- Failure to enable individuals to contest automated decisions

---


## The Relationship with AI Act


### Overlap with EU AI Act

The EU AI Act, which entered into force in 2024, also addresses automated decision-making, particularly in high-risk contexts.

High-risk AI systems under the AI Act include those used for:
- Employment decisions (hiring, termination, task allocation)
- Credit and insurance decisions
- Access to essential services
- Law enforcement and justice


### How They Work Together

GDPR Article 22 and the AI Act are complementary:

- **GDPR Article 22** focuses on individual rights and requires human involvement or safeguards for automated decisions with significant effects
- **The AI Act** focuses on system-level requirements: risk management, data governance, transparency, human oversight, accuracy, and robustness

Organizations deploying AI for consequential decisions must comply with both frameworks.

---


## Looking Ahead


### Potential Developments

**Expanded interpretation:** As AI becomes more prevalent, regulators may interpret Article 22 more broadly, covering more types of automated decisions.

**Technical guidance:** More specific guidance on what constitutes meaningful human involvement, particularly for AI systems.

**Consistency across jurisdictions:** Greater harmonization in how different EU member states interpret and enforce Article 22.

**Integration with AI Act:** Clearer guidance on how GDPR Article 22 and AI Act requirements interact.


### Preparing for the Future

Organizations should:
- Design AI systems with Article 22 compliance in mind from the start
- Build flexibility to adjust human oversight levels
- Document compliance decisions and reasoning
- Stay informed about regulatory guidance and enforcement trends

---


## Conclusion

GDPR Article 22 establishes a fundamental principle: when machines make important decisions about people's lives, humans shouldn't be entirely cut out of the loop.

This doesn't mean AI can't be used for significant decisions. It means:

<!-- component:flowchart:flowchart-conclusion -->
1. **Either** there must be meaningful human involvement in the decision-making process, **or**

2. The decision must be authorized by contract necessity, law, or explicit consent—**and** safeguards must be in place.

For organizations deploying AI, compliance with Article 22 requires thoughtful system design:

- Decisions that truly need to be automated should be designed with safeguards from the start
- Human oversight should be meaningful, not token
- Individuals should be informed, able to express views, and able to contest decisions
- Special care is required when sensitive data is involved

Getting Article 22 right isn't just about avoiding fines—though fines can be substantial. It's about building AI systems that respect human dignity by keeping humans in meaningful control of decisions that significantly affect people's lives.

In an age of increasingly powerful automation, Article 22 stands for a simple proposition: humans matter. And for decisions that matter to humans, humans should remain part of the process.

---


## Sources

1. Regulation (EU) 2016/679 (General Data Protection Regulation), Article 22. Official Journal of the European Union, 2016.

2. Article 29 Data Protection Working Party. "Guidelines on Automated individual decision-making and Profiling for the purposes of Regulation 2016/679." WP251rev.01, as last revised and adopted on February 6, 2018.

3. European Data Protection Board. "Guidelines on the targeting of social media users." Version 2.0, adopted April 13, 2021.

4. Information Commissioner's Office. "Rights related to automated decision making including profiling." ICO Guidance, 2024. https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/individual-rights/rights-related-to-automated-decision-making-including-profiling/

5. CNIL (French Data Protection Authority). "Algorithms and artificial intelligence: CNIL's action plan." CNIL, 2022.

6. Malgieri, Gianclaudio, and Giovanni Comandé. "Why a Right to Legibility of Automated Decision-Making Exists in the General Data Protection Regulation." International Data Privacy Law, Vol. 7, Issue 4, 2017.

7. Wachter, Sandra, Brent Mittelstadt, and Luciano Floridi. "Why a Right to Explanation of Automated Decision-Making Does Not Exist in the General Data Protection Regulation." International Data Privacy Law, Vol. 7, Issue 2, 2017.

8. Veale, Michael, and Lilian Edwards. "Clarity, Surprises, and Further Questions in the Article 29 Working Party Draft Guidance on Automated Decision-Making and Profiling." Computer Law & Security Review, Vol. 34, Issue 2, 2018.

9. Hungarian National Authority for Data Protection and Freedom of Information. Decision on automated credit decisions, 2019.

10. Autorità Garante per la protezione dei dati personali (Italian DPA). "Ordinanza ingiunzione nei confronti di Deliveroo Italy s.r.l." Decision, 2021.

11. European Parliament and Council. Regulation (EU) 2024/1689 (AI Act). Official Journal of the European Union, 2024.

12. Bygrave, Lee A. "Minding the Machine v2.0: The EU General Data Protection Regulation and Automated Decision Making." In Yeung, Karen and Martin Lodge (eds.), Algorithmic Regulation, Oxford University Press, 2019.

13. Kaminski, Margot E. "The Right to Explanation, Explained." Berkeley Technology Law Journal, Vol. 34, 2019.

14. Selbst, Andrew D., and Julia Powles. "Meaningful Information and the Right to Explanation." International Data Privacy Law, Vol. 7, Issue 4, 2017.
