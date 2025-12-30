
![Article 46: AI and HIPAA – Healthcare Privacy Implications]({{IMAGE_PLACEHOLDER_article-46-ai-and-hipaa-healthcare-privacy-implications}})

---
category: "AI Fundamentals"
learning_objectives:

  - "Understand the key concepts and principles of ai governance frameworks"
  - "Implement regulatory requirements in real-world scenarios"
  - "Evaluate audit procedures for organizational compliance"
seo_keywords:

  - "article"
  - "hipaa"
  - "artificial intelligence"
  - "AI compliance"
  - "when"
word_count: 3508
processed_date: "2025-12-18T20:00:55.030Z"
---


## HIPAA Basics: A Foundation


### What HIPAA Regulates

HIPAA regulates the use and disclosure of "Protected Health Information" (PHI) by "covered entities" and their "business associates."

**Protected Health Information (PHI)** is individually identifiable health information that relates to:

- An individual's past, present, or future physical or mental health condition
- Healthcare provided to the individual
- Past, present, or future payment for healthcare

PHI includes obvious identifiers (name, address, Social Security number) combined with health information, but also less obvious identifiers that could be used to identify individuals.

**Covered Entities** are:

- Healthcare providers (hospitals, doctors, clinics, pharmacies, etc.) that transmit health information electronically
- Health plans (insurance companies, HMOs, government programs like Medicare)
- Healthcare clearinghouses (entities that process health information)

**Business Associates** are persons or organizations that perform functions involving PHI on behalf of covered entities. This is where most AI companies enter the picture.


### The Three HIPAA Rules

HIPAA's requirements come primarily from three rules:

**The Privacy Rule:** Governs who can access PHI, what it can be used for, and individuals' rights regarding their health information.

**The Security Rule:** Requires administrative, physical, and technical safeguards to protect electronic PHI (ePHI).

**The Breach Notification Rule:** Requires notification to individuals, HHS, and sometimes media when breaches of unsecured PHI occur.

---


## How AI Companies Become Subject to HIPAA


### The Business Associate Relationship

Most AI companies aren't covered entities themselves. They become subject to HIPAA when they handle PHI as business associates of covered entities.

**When does an AI company become a business associate?**

If your AI company:

- Processes PHI on behalf of a hospital, insurer, or other covered entity
- Provides AI services that involve access to patient data
- Stores, analyzes, or transmits PHI as part of your service
- Develops AI models using data from covered entities

...you're likely a business associate.

**Business Associate Agreement (BAA):**

Before a covered entity can share PHI with a business associate, they must execute a Business Associate Agreement. This contract:

- Establishes what PHI the business associate can access
- Limits how the business associate can use PHI
- Requires the business associate to implement safeguards
- Requires reporting of security incidents and breaches
- Establishes liability for HIPAA violations

**No BAA = No PHI access.** Covered entities that share PHI without a BAA face HIPAA violations. AI companies that receive PHI without a BAA may also face liability.


### When AI Companies Aren't Business Associates

Some AI activities don't trigger business associate status:

**De-identified data:** If data has been properly de-identified under HIPAA standards, it's no longer PHI, and HIPAA doesn't apply. (More on de-identification below.)

**Consumer health apps:** Apps that consumers download directly, without involvement from covered entities, may not be subject to HIPAA—though they may face FTC regulation and state privacy laws.

**Research exemptions:** Certain research uses of PHI have specific rules that may differ from standard business associate requirements.

---


## The Privacy Rule and AI


### Permitted Uses and Disclosures

The Privacy Rule limits how PHI can be used and disclosed. Even with a BAA, AI companies can only use PHI for purposes permitted by the rule.

**Treatment, Payment, and Healthcare Operations (TPO):**

PHI can generally be used without individual authorization for:

- **Treatment:** Providing healthcare services
- **Payment:** Billing and collecting payment
- **Healthcare Operations:** Quality improvement, training, credentialing, etc.

Most healthcare AI falls under treatment or operations:

- AI diagnostic tools support treatment
- AI for quality improvement is operations
- AI for fraud detection supports payment

**Authorization required for other uses:**

Uses beyond TPO generally require individual authorization:

- Marketing
- Sale of PHI
- Research (with some exceptions)
- Many commercial purposes

**AI development implications:**

If you're developing AI using PHI:

- Training AI for a specific covered entity's operations may be permitted under TPO
- Training a general commercial AI product may require authorization or de-identified data
- Selling AI trained on PHI raises sale-of-PHI concerns


### Minimum Necessary Standard

The Privacy Rule requires that uses and disclosures of PHI be limited to the "minimum necessary" to accomplish the intended purpose.

**For AI, this means:**

- Don't collect more PHI than needed for the AI's purpose
- Don't retain PHI longer than necessary
- Limit access to PHI to those who need it
- Consider whether less sensitive data could achieve the same purpose

**Example:** An AI analyzing radiology images to detect tumors needs the images and relevant clinical context. It probably doesn't need the patient's home address, employment history, or detailed billing information.


### Individual Rights

The Privacy Rule gives individuals rights regarding their PHI:

**Access:** Individuals can access their health information. If AI generates information that becomes part of the medical record, individuals can access it.

**Amendment:** Individuals can request correction of incorrect information. This could include AI-generated content in their records.

**Accounting of disclosures:** Individuals can request an accounting of certain disclosures of their PHI.

**Restrictions:** Individuals can request restrictions on uses of their PHI (though covered entities aren't always required to agree).

**AI implications:** AI systems should be designed to support these rights. Can you identify what PHI a specific individual's data contributed to? Can you explain AI-generated content in records?

---


## The Security Rule and AI


### Overview

The Security Rule requires covered entities and business associates to implement safeguards protecting electronic PHI (ePHI). This is particularly relevant for AI, which is inherently electronic.

The Rule requires three types of safeguards:

- Administrative safeguards
- Physical safeguards
- Technical safeguards


### Administrative Safeguards

**Risk analysis:** Organizations must conduct thorough assessments of risks to ePHI. For AI:

- Assess risks from AI training processes
- Evaluate security of AI models themselves
- Consider risks from AI outputs containing PHI

**Risk management:** Implement measures to reduce identified risks to reasonable levels.

**Workforce security:** Ensure workforce members with access to ePHI are appropriate and trained.

**Information access management:** Implement policies for authorizing access to ePHI.

**Security awareness and training:** Train workforce on security procedures.

**Security incident procedures:** Establish procedures for detecting, responding to, and reporting security incidents.

**Contingency planning:** Establish plans for responding to emergencies.

**Business associate contracts:** Ensure contracts with business associates include required security provisions.


### Physical Safeguards

**Facility access controls:** Limit physical access to systems containing ePHI.

**Workstation security:** Implement policies for workstation use and security.

**Device and media controls:** Govern the receipt, movement, and disposal of hardware and media containing ePHI.

**For AI:**

- Secure servers running AI models
- Control access to training data storage
- Properly dispose of media containing training data
- Secure devices used for AI development


### Technical Safeguards

**Access controls:** Implement technical measures to limit access to ePHI to authorized users.

**Audit controls:** Implement mechanisms to record and examine access to ePHI.

**Integrity controls:** Implement measures to ensure ePHI isn't improperly altered or destroyed.

**Transmission security:** Implement measures to guard against unauthorized access to ePHI during transmission.

**For AI systems:**

- Authentication for access to AI systems processing PHI
- Encryption of PHI at rest and in transit
- Audit logs of data access and AI processing
- Integrity verification for training data and models


### Security Rule Flexibility

The Security Rule is designed to be scalable and flexible. It doesn't mandate specific technologies but requires organizations to:

- Assess their own circumstances
- Implement measures appropriate to their size, complexity, and risk
- Document their decisions

This flexibility helps accommodate AI, which wasn't contemplated when the Rule was written.

---


## De-Identification: The Key to AI Development


### Why De-Identification Matters

De-identified data isn't PHI. If data is properly de-identified, HIPAA doesn't apply to it.

This is crucial for AI development. If you can develop AI using de-identified data:

- You don't need to be a business associate
- Privacy Rule restrictions don't apply
- Security Rule requirements don't apply
- You have much more flexibility in how you use and share the data


### HIPAA De-Identification Standards

HIPAA provides two methods for de-identification:

**Expert Determination (§164.514(b)(1)):**

A qualified statistical or scientific expert determines that the risk of identifying individuals is "very small." The expert must document:

- Methods used
- Results of the analysis
- Basis for the determination

This method allows more data to be retained but requires genuine expert analysis.

**Safe Harbor (§164.514(b)(2)):**

Remove 18 specific identifiers:

1. Names
2. Geographic data smaller than state (except first 3 digits of zip code if population >20,000)
3. Dates (except year) related to an individual
4. Phone numbers
5. Fax numbers
6. Email addresses
7. Social Security numbers
8. Medical record numbers
9. Health plan beneficiary numbers
10. Account numbers
11. Certificate/license numbers
12. Vehicle identifiers and serial numbers
13. Device identifiers and serial numbers
14. Web URLs
15. IP addresses
16. Biometric identifiers
17. Full-face photographs and comparable images
18. Any other unique identifying number or code

AND have no actual knowledge that remaining information could identify an individual.


### De-Identification Challenges for AI

**Re-identification risk:** AI itself can potentially re-identify de-identified data by finding patterns that link records to individuals. This creates tension:

- Safe Harbor removal of 18 identifiers may not prevent AI re-identification
- Expert Determination must account for AI re-identification capabilities
- What's "de-identified" for human analysis may not be for AI

**Medical images:** Radiology images, pathology slides, and other medical images often contain embedded identifiers and may contain identifying features (faces in head CTs, unique anatomical features). De-identification requires careful image processing.

**Free text:** Clinical notes, discharge summaries, and other text may contain identifying information throughout. Simple identifier removal isn't sufficient—NLP-based de-identification is often needed.

**Rare conditions:** Patients with rare diseases may be identifiable even without traditional identifiers. A dataset with a unique combination of rare conditions may identify specific individuals.

**Longitudinal data:** Data linked over time increases re-identification risk. Multiple visits, procedures, and conditions create unique patterns.


### Best Practices for AI De-Identification

1. **Use expert determination** for complex AI applications rather than relying solely on Safe Harbor

2. **Consider AI-specific re-identification risks** in expert analysis

3. **Apply additional protections** beyond minimum Safe Harbor requirements when data will be used for AI

4. **Test re-identification risk** using state-of-the-art techniques

5. **Monitor for re-identification** as AI capabilities evolve

6. **Consider synthetic data** as an alternative to de-identification

---


## AI-Specific HIPAA Considerations


### AI Model Training

**Using PHI for training:**

- Must be covered by a BAA
- Must be for a permitted purpose (typically healthcare operations)
- Must apply minimum necessary standard
- Must implement Security Rule safeguards

**Training data retention:**

- PHI used for training should be retained only as long as necessary
- Consider whether models need to be retrained with original data
- Document retention decisions

**Model memorization:**

- AI models can memorize training examples
- Models may be able to regenerate PHI from training data
- Consider whether trained models themselves contain PHI


### AI Model as PHI?

An emerging question: Is a trained AI model itself PHI if it was trained on PHI?

**Arguments that models are PHI:**

- Models can potentially regenerate training data
- Models contain information derived from individuals
- Membership inference attacks can reveal if someone was in training data

**Arguments that models aren't PHI:**

- Models are abstractions, not individual records
- Properly trained models shouldn't reveal individual information
- Model weights aren't "individually identifiable"

**Current practice:** Most organizations treat trained models as non-PHI but implement safeguards:

- Test models for memorization
- Implement access controls
- Consider differential privacy during training
- Restrict model distribution


### AI Outputs and the Medical Record

When AI generates outputs that become part of the medical record:

- Outputs are PHI and subject to all HIPAA requirements
- Individuals have a right to access AI-generated content in their records
- AI outputs should be clearly identified as AI-generated
- Mechanisms for correcting erroneous AI outputs should exist


### FDA-Regulated AI Medical Devices

AI systems that are FDA-regulated medical devices face both FDA and HIPAA requirements:

- FDA regulates safety and effectiveness
- HIPAA regulates privacy and security
- Compliance with both is required
- Documentation and quality systems must address both frameworks

---


## Breach Notification


### What Constitutes a Breach

A breach is the acquisition, access, use, or disclosure of PHI in a manner not permitted by the Privacy Rule that compromises the security or privacy of the PHI.

**For AI systems, breaches could include:**

- Unauthorized access to training data
- Extraction of PHI from AI models
- AI outputs revealing PHI to unauthorized persons
- Security incidents affecting AI systems containing PHI


### Breach Risk Assessment

Not every impermissible disclosure is a breach requiring notification. Organizations must assess:

1. The nature and extent of PHI involved
2. The unauthorized person who received the PHI
3. Whether PHI was actually acquired or viewed
4. The extent to which risk has been mitigated


### Notification Requirements

When a breach occurs:

**Individual notification:** Notify affected individuals within 60 days of discovery. Include:

- Description of what happened
- Types of information involved
- Steps individuals should take
- What the organization is doing
- Contact information

**HHS notification:** Notify the Department of Health and Human Services:

- Within 60 days for breaches affecting 500+ individuals
- Annually for smaller breaches

**Media notification:** For breaches affecting 500+ individuals in a state, notify prominent media outlets.


### AI Breach Scenarios

**Scenario 1: Training data breach**
An AI company's servers are hacked, and training data containing PHI is stolen. This is a breach requiring notification by the covered entity (and likely the business associate).

**Scenario 2: Model extraction attack**
Attackers use queries to an AI system to extract information about individuals in the training data. Depending on what's extracted, this could be a breach.

**Scenario 3: Erroneous output disclosure**
An AI system generates a report containing PHI and sends it to the wrong recipient. This is a breach.

---


## Practical Compliance Framework


### For AI Companies Working with Healthcare

**Step 1: Determine if HIPAA applies**

- Will you receive, process, or store PHI?
- Are you working with covered entities?
- Can you use de-identified data instead?

**Step 2: Execute Business Associate Agreements**

- Ensure BAAs are in place before receiving PHI
- Understand your obligations under the BAA
- Negotiate appropriate terms for AI use cases

**Step 3: Implement Privacy Rule compliance**

- Limit PHI use to permitted purposes
- Apply minimum necessary standard
- Establish individual rights procedures

**Step 4: Implement Security Rule compliance**

- Conduct risk analysis
- Implement administrative, physical, and technical safeguards
- Document security measures

**Step 5: Establish breach procedures**

- Implement incident detection
- Establish response procedures
- Know notification requirements

**Step 6: Address AI-specific issues**

- Assess model memorization risk
- Implement training data governance
- Establish AI output procedures


### Security Checklist for Healthcare AI

**Data protection:**

- [ ] PHI encrypted at rest
- [ ] PHI encrypted in transit
- [ ] Access controls limiting PHI access
- [ ] Audit logging of PHI access
- [ ] Secure deletion procedures

**AI-specific:**

- [ ] Training data inventory maintained
- [ ] Model memorization testing conducted
- [ ] AI output review procedures established
- [ ] Model access controls implemented
- [ ] API security measures in place

**Organizational:**

- [ ] Risk analysis completed
- [ ] Security policies documented
- [ ] Workforce training provided
- [ ] Incident response plan established
- [ ] BAAs executed with all relevant parties

---


## Common HIPAA-AI Compliance Challenges


### Challenge 1: Getting Data for AI Development

**Problem:** Covered entities are cautious about sharing PHI, making it hard to get training data.

**Solutions:**

- Use de-identified data where possible
- Demonstrate robust security practices
- Offer to train models on-site (data doesn't leave the covered entity)
- Use federated learning approaches
- Consider synthetic data generation


### Challenge 2: Multi-Institution Training Data

**Problem:** Powerful AI often requires data from multiple institutions, multiplying HIPAA complexity.

**Solutions:**

- Federated learning (train locally, share only model updates)
- Centralized de-identified data repositories
- Research networks with established governance
- Synthetic data sharing


### Challenge 3: Cloud Services

**Problem:** AI often runs in cloud environments, raising questions about data location and access.

**Solutions:**

- Ensure cloud providers will sign BAAs (major providers like AWS, Google Cloud, and Azure will)
- Implement encryption so cloud providers can't access PHI
- Consider healthcare-specific cloud configurations
- Document cloud security measures


### Challenge 4: Ongoing Model Monitoring

**Problem:** AI models should be monitored for performance, but monitoring may require ongoing PHI access.

**Solutions:**

- Build monitoring into BAA scope
- Use de-identified data for performance monitoring where possible
- Implement secure monitoring pipelines
- Limit monitoring access to minimum necessary


### Challenge 5: Model Updates and Retraining

**Problem:** AI models may need retraining, requiring ongoing access to PHI.

**Solutions:**

- Address retraining in BAAs
- Establish clear retention periods for training data
- Consider whether new BAAs are needed for updates
- Document retraining procedures and data use

---


## Emerging Issues


### AI and the HIPAA Right of Access

HHS has emphasized individual right of access to health information. Questions emerging include:

- Do individuals have access to AI models trained on their data?
- Can individuals request explanation of AI decisions in their care?
- How should AI-generated content be provided under access requests?


### Information Blocking and AI

The 21st Century Cures Act prohibits "information blocking"—practices that interfere with health information exchange. This could affect:

- Proprietary AI that doesn't interoperate
- AI outputs not shared with other providers
- AI that impedes patient access to information


### State Health Privacy Laws

Many states have health privacy laws beyond HIPAA:

- California's CMIA (Confidentiality of Medical Information Act)
- State genetic privacy laws
- State mental health privacy laws

AI systems may need to comply with multiple frameworks.


### Research vs. Commercial Use

The line between research and commercial AI development affects HIPAA compliance:

- Research has specific HIPAA provisions (IRB oversight, waivers)
- Commercial development generally requires standard business associate relationships
- AI that starts as research and becomes commercial raises transition questions

---


## Conclusion

HIPAA wasn't designed for AI, but it applies to AI fully. Any AI system that processes Protected Health Information must comply with the Privacy Rule, Security Rule, and Breach Notification Rule.

For organizations developing or deploying healthcare AI:

1. **Understand when HIPAA applies:** If you're handling PHI on behalf of covered entities, you're likely a business associate subject to HIPAA.

2. **Execute proper agreements:** Business Associate Agreements must be in place before PHI is shared.

3. **Implement required safeguards:** The Security Rule's administrative, physical, and technical safeguards apply to AI systems.

4. **Limit data use:** The Privacy Rule's permitted uses and minimum necessary standards constrain how PHI can be used for AI.

5. **Consider de-identification:** Properly de-identified data isn't PHI and can be used more freely—but de-identification must account for AI re-identification risks.

6. **Prepare for breaches:** Incident response procedures must address AI-specific breach scenarios.

7. **Stay current:** HIPAA guidance continues to evolve, and HHS is increasingly focused on AI.

Healthcare AI offers tremendous promise—earlier diagnoses, personalized treatments, reduced errors, and more accessible care. But realizing that promise requires handling health information responsibly. HIPAA provides the framework; AI developers and healthcare organizations must implement it thoughtfully.

The stakes are high. Patients trust healthcare organizations with their most sensitive information. That trust depends on protecting patient privacy—even as AI transforms what's possible in healthcare.

---


## Sources

1. Health Insurance Portability and Accountability Act of 1996 (HIPAA), Pub. L. 104-191.

2. HIPAA Privacy Rule, 45 CFR Part 160 and Part 164, Subparts A and E.

3. HIPAA Security Rule, 45 CFR Part 160 and Part 164, Subparts A and C.

4. HIPAA Breach Notification Rule, 45 CFR Part 164, Subpart D.

5. U.S. Department of Health and Human Services. "Guidance Regarding Methods for De-identification of Protected Health Information in Accordance with the Health Insurance Portability and Accountability Act (HIPAA) Privacy Rule." HHS.gov, 2012. https://www.hhs.gov/hipaa/for-professionals/privacy/special-topics/de-identification/index.html

6. U.S. Department of Health and Human Services. "Business Associate Contracts." HHS.gov. https://www.hhs.gov/hipaa/for-professionals/covered-entities/sample-business-associate-agreement-provisions/index.html

7. Office for Civil Rights. "HIPAA Security Series: Security Standards - Administrative Safeguards." HHS.gov.

8. Office for Civil Rights. "HIPAA Security Series: Security Standards - Technical Safeguards." HHS.gov.

9. U.S. Food and Drug Administration. "Artificial Intelligence and Machine Learning in Software as a Medical Device." FDA.gov. https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-and-machine-learning-software-medical-device

10. Office for Civil Rights. "Breach Notification Rule." HHS.gov. https://www.hhs.gov/hipaa/for-professionals/breach-notification/index.html

11. El Emam, Khaled, and Luk Arbuckle. "Anonymizing Health Data: Case Studies and Methods to Get You Started." O'Reilly Media, 2013.

12. Price, W. Nicholson, and I. Glenn Cohen. "Privacy in the Age of Medical Big Data." Nature Medicine, Vol. 25, 2019.

13. Cohen, I. Glenn, and Michelle M. Mello. "HIPAA and Protecting Health Information in the 21st Century." JAMA, Vol. 320, No. 3, 2018.

14. U.S. Department of Health and Human Services. "Health App Use Scenarios & HIPAA." HHS.gov. https://www.hhs.gov/hipaa/for-professionals/special-topics/health-apps/index.html
