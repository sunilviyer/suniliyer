# Article 42: GDPR Meets AI – Europe's Privacy Framework Applied

## TL;DR

The General Data Protection Regulation (GDPR) is Europe's comprehensive privacy law—and it applies to AI in profound ways. If your AI processes personal data of EU residents, you must comply with GDPR regardless of where your company is based. Key requirements include having a lawful basis for processing data (consent, contract, or legitimate interest), conducting Data Protection Impact Assessments for high-risk AI, providing transparency about how AI uses personal data, and respecting individuals' rights regarding automated decision-making. GDPR violations can result in fines up to €20 million or 4% of global revenue. For organizations using AI, GDPR isn't optional—it's the foundation of responsible AI governance.

---

## Introduction

In 2018, the European Union did something unprecedented: it created a privacy law with global reach and serious teeth.

The General Data Protection Regulation—GDPR—didn't just change how European companies handle personal data. It changed how every company that serves European customers handles data. And because building separate systems for Europe versus everywhere else is expensive and complicated, many companies simply adopted GDPR standards globally.

GDPR was drafted before the current AI explosion, but its principles apply remarkably well to artificial intelligence. In fact, GDPR anticipated many AI-related concerns:

- What happens when algorithms make decisions about people?
- How do we ensure transparency when decisions are automated?
- What rights do individuals have when machines, not humans, process their data?
- How do we prevent discrimination when AI learns from historical data?

For organizations building or deploying AI, GDPR isn't just one regulation among many. It's arguably the most important legal framework governing AI's use of personal data—and it applies to any organization that processes personal data of people in the EU, regardless of where that organization is located.

This article explains how GDPR applies to AI systems, what it requires, and how organizations can achieve compliance while still benefiting from AI's capabilities.

---

## GDPR Fundamentals: A Quick Overview

Before diving into AI-specific applications, let's establish how GDPR works.

### What GDPR Regulates

GDPR regulates the "processing" of "personal data" of individuals in the European Union.

**Personal data** is any information relating to an identified or identifiable natural person. This includes obvious identifiers (name, email, ID numbers) but also less obvious data that could identify someone:
- Location data
- IP addresses
- Cookie identifiers
- Behavioral patterns
- Biometric data
- Health information
- Even inferences drawn about a person

**Processing** covers virtually anything you can do with data:
- Collecting
- Recording
- Organizing
- Storing
- Adapting or altering
- Retrieving
- Using
- Disclosing
- Combining
- Erasing

For AI, this means: if your AI system uses any data that relates to identifiable individuals in the EU—for training, inference, or any other purpose—GDPR applies.

### Who Must Comply

GDPR applies to:

**Organizations in the EU:** Any company or organization established in the EU that processes personal data.

**Organizations outside the EU:** Any company that offers goods or services to EU residents, or monitors the behavior of EU residents—regardless of where the company is based.

This extraterritorial reach is crucial for AI. If your AI-powered service is available to people in Europe, or if your AI processes data about people in Europe, you're likely subject to GDPR.

### Key Roles

GDPR distinguishes between:

**Data controllers:** Organizations that determine the purposes and means of processing personal data. If you decide to use AI and what data it processes, you're likely a controller.

**Data processors:** Organizations that process personal data on behalf of controllers. If you provide AI services to other companies, processing their customers' data, you're likely a processor.

Both controllers and processors have compliance obligations, but controllers bear primary responsibility for lawful processing.

### Penalties

GDPR violations can result in:

- **Tier 1 fines:** Up to €10 million or 2% of global annual revenue (whichever is higher) for less severe violations
- **Tier 2 fines:** Up to €20 million or 4% of global annual revenue for more severe violations

These aren't theoretical. Since GDPR took effect, regulators have imposed hundreds of millions of euros in fines, including major penalties against tech giants like Meta, Amazon, and Google.

---

## The Six Lawful Bases for Processing

GDPR requires that every instance of personal data processing have a "lawful basis." There are six possible bases, and you must identify at least one before processing begins.

### 1. Consent

The individual has given clear, informed consent for their data to be processed for specific purposes.

**Requirements for valid consent:**
- Freely given (not coerced or bundled with unrelated terms)
- Specific (for particular purposes, not blanket consent)
- Informed (clear explanation of what's being consented to)
- Unambiguous (clear affirmative action, not silence or pre-checked boxes)
- Withdrawable (easy to withdraw at any time)

**Consent and AI:**
Using consent for AI can be challenging:
- How do you explain complex AI processing clearly enough for informed consent?
- If AI uses data in new ways over time, does original consent still apply?
- Can consent be truly "free" if refusing means losing access to a service?

**Example:** A health app asks users to consent to using their data to train AI that provides personalized recommendations. The consent request must explain what data is used, how AI processes it, and what happens to the data—in plain language.

### 2. Contract

Processing is necessary to perform a contract with the individual or to take steps at their request before entering a contract.

**Contract and AI:**
If someone orders a product, processing their address for delivery is necessary for the contract. But is AI-powered personalization "necessary" for the contract, or just nice to have?

Courts have generally interpreted "necessity" narrowly. AI processing that enhances the service but isn't strictly required for the core contract may not qualify.

**Example:** A customer signs up for a streaming service. Processing their viewing history to provide the streaming service is arguably necessary for the contract. But using that history to train AI models that serve other customers is probably not necessary for the individual's contract.

### 3. Legal Obligation

Processing is necessary to comply with a legal obligation.

**Legal obligation and AI:**
This basis might apply when AI is used to meet regulatory requirements—fraud detection systems required by financial regulations, for example. But the legal obligation must require the specific processing, not just permit it.

### 4. Vital Interests

Processing is necessary to protect someone's life.

**Vital interests and AI:**
This basis is narrow—generally reserved for life-or-death situations. AI in emergency medical contexts might qualify, but routine AI applications won't.

### 5. Public Task

Processing is necessary for performing a task in the public interest or in the exercise of official authority.

**Public task and AI:**
Government agencies might rely on this basis for AI systems serving public functions. Private companies generally cannot.

### 6. Legitimate Interests

Processing is necessary for legitimate interests pursued by the controller or a third party, except where overridden by the interests of the individual.

**Legitimate interests and AI:**
This is often the most relevant basis for commercial AI, but it requires a balancing test:
- What legitimate interest does the processing serve?
- Is the processing necessary for that interest?
- Do the individual's rights and interests override the legitimate interest?

**The balancing test for AI:**
- More intrusive AI processing (sensitive data, profiling, significant decisions) is harder to justify
- Less intrusive processing with clear benefits may pass the test
- The individual's reasonable expectations matter—would they expect this use?

**Example:** An e-commerce company uses AI to detect fraudulent transactions. Fraud prevention is a legitimate interest. The processing (analyzing transaction patterns) is necessary for that interest. And customers would reasonably expect fraud protection. This likely passes the balancing test.

**Counter-example:** A social media company uses AI to analyze private messages for advertising purposes. While advertising revenue is a legitimate interest, users don't reasonably expect their private conversations to be analyzed for ads, and the intrusion is significant. This might fail the balancing test.

---

## Data Protection Principles Applied to AI

GDPR establishes principles that govern all personal data processing. Here's how they apply to AI:

### Lawfulness, Fairness, and Transparency

**Lawfulness:** Processing must have a valid lawful basis (discussed above).

**Fairness:** Processing must not be done in ways that are detrimental, unexpected, or misleading to the individual. For AI, this means:
- AI shouldn't produce unfair outcomes (discrimination, unjustified denials)
- AI processing should align with what individuals would reasonably expect
- AI shouldn't exploit vulnerabilities or power imbalances

**Transparency:** Individuals must be informed about how their data is processed. For AI:
- Explain that AI is being used
- Describe what the AI does with personal data
- Clarify the consequences of AI processing

**Example:** A bank uses AI to assess loan applications. Fairness requires the AI not discriminate based on protected characteristics. Transparency requires telling applicants that AI is involved in the decision.

### Purpose Limitation

Personal data must be collected for specified, explicit, and legitimate purposes and not further processed in a manner incompatible with those purposes.

**Purpose limitation and AI:**
This principle creates significant challenges for AI:
- Data collected for one purpose (providing a service) may not be usable for another (training AI)
- Broad, vague purposes ("improving our services") may not be specific enough
- Repurposing historical data for AI training requires careful analysis

**Compatible purposes:** GDPR allows processing for purposes compatible with the original purpose. Factors to consider:
- Link between original and new purpose
- Context of collection and relationship with individual
- Nature of the data (sensitive data requires stricter controls)
- Consequences for individuals
- Existence of safeguards

**Example:** A retailer collects purchase data to process orders. Using that data to train AI product recommendations might be compatible (enhancing the shopping experience). Using it to train AI for unrelated purposes (selling insights to third parties) is probably not compatible.

### Data Minimization

Only data that is necessary for the purpose should be collected and processed.

**Data minimization and AI:**
This principle directly conflicts with the "more data is better" approach common in AI development:
- Don't collect data "just in case" it's useful for AI
- Don't use more personal data than necessary for the AI's purpose
- Consider whether anonymized or synthetic data could serve instead
- Regularly review what data AI systems actually need

**Example:** An AI chatbot for customer service doesn't need customers' browsing history to answer questions about their orders. Collecting and processing browsing history would violate data minimization unless it serves a specific, necessary purpose.

### Accuracy

Personal data must be accurate and kept up to date.

**Accuracy and AI:**
This principle applies to both input data and AI outputs:
- Training data should be accurate (garbage in, garbage out)
- AI predictions and inferences about individuals should be accurate
- Individuals have the right to rectify inaccurate data—including inaccurate inferences

**Example:** If an AI incorrectly infers that someone is a credit risk based on flawed data, the individual may have a right to correct that inference, not just the underlying data.

### Storage Limitation

Personal data should be kept only as long as necessary for the purposes for which it's processed.

**Storage limitation and AI:**
- Training data shouldn't be kept indefinitely after training is complete
- Consider whether models retain personal data (some AI models can memorize training examples)
- Establish retention periods for different types of AI-related data

**Example:** A company trains an AI model on customer data. After training, should the raw training data be deleted? Should the trained model be treated as containing personal data? These questions require careful analysis.

### Integrity and Confidentiality (Security)

Personal data must be processed securely, with appropriate measures against unauthorized access, loss, or damage.

**Security and AI:**
- Secure AI training pipelines and data stores
- Protect models from adversarial attacks that could extract personal data
- Secure AI systems in production from data breaches
- Consider privacy-enhancing technologies (discussed below)

### Accountability

Controllers must be able to demonstrate compliance with all GDPR principles.

**Accountability and AI:**
- Document AI data processing activities
- Record lawful bases and purpose limitations
- Maintain records of Data Protection Impact Assessments
- Be prepared to demonstrate compliance to regulators

---

## Data Protection Impact Assessments (DPIAs)

### When DPIAs Are Required

GDPR requires Data Protection Impact Assessments when processing is "likely to result in a high risk to the rights and freedoms of natural persons."

The regulation specifically mentions:
- **Automated decision-making** with legal or similarly significant effects
- **Large-scale processing** of sensitive data
- **Systematic monitoring** of public areas

Most AI systems fall into at least one of these categories. In practice, DPIAs are required for most AI applications that process personal data.

### What a DPIA Must Include

A DPIA must contain:

1. **Systematic description** of the processing operations and purposes, including legitimate interests if applicable

2. **Assessment of necessity and proportionality**—is this processing necessary for the purpose? Is there a less intrusive way to achieve the same goal?

3. **Assessment of risks** to individuals' rights and freedoms

4. **Measures to address risks**, including safeguards, security measures, and mechanisms to protect personal data

### DPIA Process for AI

**Step 1: Describe the AI system**
- What does the AI do?
- What personal data does it process?
- How does it process that data?
- Who has access to data and outputs?

**Step 2: Assess necessity**
- Is AI necessary for this purpose?
- Could a less data-intensive approach work?
- Is the amount of data proportionate to the purpose?

**Step 3: Identify risks**
- What could go wrong? (Discrimination, inaccuracy, data breaches, function creep)
- How likely are these risks?
- How severe would the impact be?

**Step 4: Identify mitigation measures**
- Technical measures (privacy-enhancing technologies, security controls)
- Organizational measures (access controls, training, oversight)
- Contractual measures (data processing agreements, restrictions on downstream use)

**Step 5: Document and review**
- Record the assessment and its conclusions
- Review and update as the AI system changes

### Consulting the Data Protection Authority

If the DPIA indicates high risks that cannot be adequately mitigated, the controller must consult the relevant Data Protection Authority before proceeding. This is rare, but important for high-risk AI systems.

---

## Automated Decision-Making and Profiling

### Article 22: The Right Not to Be Subject to Automated Decisions

GDPR Article 22 is perhaps the most AI-specific provision. It states:

> "The data subject shall have the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning him or her or similarly significantly affects him or her."

Let's break this down:

**"Solely on automated processing":** The decision must be made entirely by automated means, with no meaningful human involvement. If a human reviews and can override the automated decision, Article 22 may not apply.

**"Including profiling":** Profiling means automated processing that evaluates personal aspects—analyzing or predicting things like work performance, economic situation, health, preferences, reliability, behavior, location, or movements.

**"Legal effects or similarly significant effects":** The automated decision must have serious consequences. Legal effects include decisions about legal rights (contracts, benefits, legal status). "Similarly significant" effects include decisions about employment, credit, insurance, healthcare, or other important life matters.

### Exceptions to Article 22

Automated decision-making is permitted despite Article 22 if:

1. **Necessary for a contract:** The decision is necessary for entering into or performing a contract between the individual and the controller.

2. **Authorized by law:** EU or member state law authorizes the decision (with appropriate safeguards).

3. **Explicit consent:** The individual has explicitly consented to the automated decision.

Even under these exceptions, the controller must implement "suitable measures to safeguard the data subject's rights and freedoms and legitimate interests." At minimum, this includes the right to:
- Obtain human intervention
- Express their point of view
- Contest the decision

### What Counts as "Meaningful Human Involvement"?

If a human is involved in the decision, Article 22's prohibition may not apply. But the involvement must be "meaningful":

**Meaningful involvement:**
- The human has authority to change the decision
- The human actually reviews relevant information
- The human exercises independent judgment
- The human isn't simply rubber-stamping AI outputs

**Not meaningful involvement:**
- The human can only approve or reject (no option to modify)
- The human doesn't actually review the case
- The human always follows AI recommendations
- The review is token or cursory

**Example:** A loan application is processed by AI, which recommends denial. A human "reviewer" sees the recommendation and clicks "approve" without examining the application. This is probably not meaningful human involvement—Article 22 would still apply.

**Counter-example:** The same AI recommends denial, but a loan officer reviews the application, considers the AI's analysis, examines the applicant's specific circumstances, and makes an independent decision (which could agree with or override the AI). This is meaningful human involvement.

### Profiling Regulation

Even when Article 22's prohibition doesn't apply, profiling is subject to other GDPR requirements:

- **Transparency:** Individuals must be informed about profiling (what data is used, how decisions are made, consequences)
- **Accuracy:** Profiling must be based on accurate data
- **Purpose limitation:** Profiling must serve specified purposes
- **Rights:** Individuals can object to profiling for direct marketing

---

## Individual Rights and AI

GDPR gives individuals rights regarding their personal data. Here's how these rights apply to AI:

### Right of Access

Individuals can request access to their personal data and information about how it's processed.

**For AI, this may include:**
- What personal data is used by the AI
- The purposes of AI processing
- Who receives data or AI outputs
- How long data is stored
- The existence of automated decision-making

### Right to Rectification

Individuals can request correction of inaccurate personal data.

**For AI:**
- Correct inaccurate input data
- Potentially correct inaccurate inferences or predictions
- May require retraining or updating AI models

### Right to Erasure ("Right to Be Forgotten")

Individuals can request deletion of their personal data in certain circumstances.

**For AI:**
- Delete personal data from training datasets (if feasible)
- Remove data from AI inputs and outputs
- Potentially retrain models to remove influence of deleted data
- This is technically challenging—AI models may retain traces of training data

### Right to Restriction of Processing

Individuals can request that processing be limited while disputes are resolved.

**For AI:**
- May need to pause AI processing involving the individual's data
- Continue storing data but not actively processing it

### Right to Data Portability

Individuals can receive their personal data in a portable format and transmit it to another controller.

**For AI:**
- Provide personal data used by AI in machine-readable format
- Doesn't extend to inferences or predictions generated by AI

### Right to Object

Individuals can object to processing based on legitimate interests or for direct marketing.

**For AI:**
- Must honor objections to AI profiling for direct marketing
- Must consider objections to other legitimate-interest-based AI processing
- Must stop processing unless compelling legitimate grounds exist

---

## Privacy-Enhancing Technologies for AI

GDPR's data minimization and privacy-by-design requirements encourage the use of privacy-enhancing technologies (PETs). Several are particularly relevant for AI:

### Anonymization

Truly anonymized data falls outside GDPR entirely—it's no longer personal data. But anonymization is difficult:
- AI can often re-identify "anonymized" data
- Combining datasets can enable re-identification
- Anonymization may reduce data utility for AI

**Key point:** If there's any reasonable possibility of re-identification, the data isn't truly anonymized under GDPR.

### Pseudonymization

Pseudonymization replaces identifying information with artificial identifiers. The data remains personal data under GDPR (because re-identification is possible with additional information), but pseudonymization is recognized as a safeguard that can help satisfy GDPR requirements.

### Differential Privacy

Differential privacy adds calibrated noise to data or queries, providing mathematical guarantees that individual records cannot be identified. This technique can enable AI training while protecting privacy.

### Federated Learning

Federated learning trains AI models on decentralized data without centralizing the data. Instead of collecting all data in one place, the model travels to where data is stored, trains locally, and only model updates are shared.

This can help with:
- Data minimization (central storage isn't needed)
- Security (reducing data collection reduces breach risk)
- Cross-border data transfer issues

### Synthetic Data

Synthetic data is artificially generated data that preserves statistical properties of real data without containing actual personal data. If properly generated, synthetic data may not be personal data under GDPR.

---

## International Data Transfers

### The Transfer Problem

GDPR restricts transfers of personal data outside the EU unless adequate protection is ensured. This affects AI when:
- Training data is transferred to non-EU locations
- AI models are hosted outside the EU
- AI processing occurs in non-EU jurisdictions

### Transfer Mechanisms

**Adequacy decisions:** The European Commission can determine that a non-EU country provides adequate data protection. Currently, a handful of countries have adequacy status, including recently the EU-US Data Privacy Framework.

**Standard Contractual Clauses (SCCs):** Pre-approved contract terms that provide safeguards for data transfers. Widely used, but organizations must assess whether the clauses actually provide adequate protection in practice.

**Binding Corporate Rules (BCRs):** Internal rules for multinational corporations that allow data transfers within the corporate group. Requires approval from data protection authorities.

### AI and Transfer Challenges

**Cloud-based AI:** If AI services use non-EU cloud infrastructure, data transfers may occur even if the company is EU-based.

**Global AI development:** Training AI often involves data from multiple jurisdictions, processed on infrastructure spanning multiple countries.

**Foundation models:** Using foundation models from non-EU providers may involve data transfers when data is sent for processing or fine-tuning.

---

## Practical Compliance Steps for AI

### Step 1: Map Your AI Data Processing

Document:
- What AI systems process personal data
- What personal data each system uses
- Where data comes from
- Where data goes
- Who has access

### Step 2: Identify Lawful Bases

For each AI processing activity:
- Determine the appropriate lawful basis
- Document your reasoning
- Ensure the basis actually applies (don't just pick one)

### Step 3: Implement Transparency

- Update privacy notices to explain AI processing
- Provide specific information about automated decision-making
- Make information accessible and understandable

### Step 4: Conduct DPIAs

For high-risk AI:
- Complete comprehensive DPIAs
- Document risks and mitigations
- Review and update as systems change

### Step 5: Enable Individual Rights

Build processes to:
- Respond to access requests about AI processing
- Correct data used by AI when requested
- Delete data from AI systems when required
- Handle objections to AI processing

### Step 6: Implement Security

- Secure AI training data and models
- Implement access controls
- Monitor for unauthorized access
- Plan for data breaches

### Step 7: Document Everything

- Maintain records of processing activities
- Document compliance decisions
- Be prepared to demonstrate compliance to regulators

---

## Common Compliance Challenges

### Challenge 1: Purpose Limitation and Model Training

**Problem:** You want to train AI on data collected for other purposes.

**Solutions:**
- Analyze whether new purpose is compatible with original purpose
- Seek new consent if purposes are incompatible
- Consider anonymization (truly anonymized data isn't subject to GDPR)
- Use synthetic data that doesn't contain personal data

### Challenge 2: Transparency About AI

**Problem:** AI systems are complex; explaining them is hard.

**Solutions:**
- Focus on what matters to individuals (what data, what outcomes)
- Use clear, plain language (avoid technical jargon)
- Provide layered information (summary plus detailed explanation)
- Consider visual explanations

### Challenge 3: Enabling Rights in AI Systems

**Problem:** AI systems weren't designed with individual rights in mind.

**Solutions:**
- Build rights-enabling features into AI systems from the start
- Implement data lineage tracking to identify where personal data flows
- Create processes for handling rights requests involving AI
- Consider "machine unlearning" techniques for erasure requests

### Challenge 4: Automated Decision-Making

**Problem:** Your AI makes decisions with significant effects on individuals.

**Solutions:**
- Implement meaningful human oversight
- Create appeals processes
- Document decisions and reasoning
- Test for bias and discrimination

---

## Conclusion

GDPR wasn't written for AI, but it applies to AI with remarkable relevance. The regulation's principles—lawfulness, fairness, transparency, purpose limitation, data minimization, accuracy, storage limitation, security, and accountability—provide a comprehensive framework for responsible AI development.

For organizations using AI, GDPR compliance isn't just about avoiding fines (though €20 million or 4% of global revenue is certainly motivation). It's about building AI systems that respect individual rights—systems that people can understand, challenge, and trust.

Key takeaways:

1. **Know your lawful basis.** Every AI processing activity needs a valid basis. Consent, contract, and legitimate interests are most common, but each has requirements.

2. **Conduct DPIAs.** Most AI systems involving personal data require Data Protection Impact Assessments. Do them properly.

3. **Be transparent.** Explain what AI does with personal data in terms people can understand.

4. **Respect Article 22.** Automated decisions with significant effects require either human involvement, explicit consent, contractual necessity, or legal authorization—plus safeguards.

5. **Enable individual rights.** Build systems that can respond to access, rectification, and erasure requests.

6. **Document everything.** Accountability means being able to demonstrate compliance.

GDPR has become the global standard for data protection, influencing laws from California to Brazil to China. Organizations that master GDPR compliance position themselves not just for European markets, but for a world increasingly focused on data privacy and AI accountability.

The regulation's full name is revealing: the General Data Protection Regulation. It's not specific to any technology—it's general. And that generality is its strength. Whatever AI capabilities emerge in the future, GDPR's principles will remain relevant: process data lawfully, fairly, and transparently. Respect individual rights. Be accountable.

Those principles aren't just legal requirements. They're the foundation of AI that people can trust.

---

## Sources

1. Regulation (EU) 2016/679 of the European Parliament and of the Council (General Data Protection Regulation). Official Journal of the European Union, 2016. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679

2. European Data Protection Board. "Guidelines on Automated individual decision-making and Profiling for the purposes of Regulation 2016/679." WP251rev.01, February 2018.

3. Article 29 Data Protection Working Party. "Guidelines on Data Protection Impact Assessment (DPIA)." WP248rev.01, October 2017.

4. European Data Protection Board. "Guidelines on the concepts of controller and processor in the GDPR." Version 2.0, September 2020.

5. Information Commissioner's Office (UK). "Guidance on AI and data protection." ICO, 2020-2024. https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/

6. European Data Protection Supervisor. "Artificial Intelligence: Time to Take Stock and Look Ahead." EDPS Opinion, 2024.

7. CNIL (Commission Nationale de l'Informatique et des Libertés). "Artificial Intelligence: CNIL publishes its recommendations for AI systems that comply with GDPR." CNIL guidance, 2022.

8. Information Commissioner's Office. "Explaining decisions made with AI." ICO and The Alan Turing Institute, 2020.

9. European Commission. "Ethics Guidelines for Trustworthy AI." High-Level Expert Group on AI, 2019.

10. Veale, Michael, and Lilian Edwards. "Clarity, Surprises, and Further Questions in the Article 29 Working Party Draft Guidance on Automated Decision-Making and Profiling." Computer Law & Security Review, Vol. 34, Issue 2, 2018.

11. Wachter, Sandra, Brent Mittelstadt, and Luciano Floridi. "Why a Right to Explanation of Automated Decision-Making Does Not Exist in the General Data Protection Regulation." International Data Privacy Law, Vol. 7, Issue 2, 2017.

12. European Data Protection Board. "Guidelines on the Targeting of Social Media Users." Version 2.0, April 2021.

13. Kaminski, Margot E. "The Right to Explanation, Explained." Berkeley Technology Law Journal, Vol. 34, 2019.

14. European Union Agency for Fundamental Rights. "Data quality and artificial intelligence – mitigating bias and error to protect fundamental rights." FRA, 2019.
