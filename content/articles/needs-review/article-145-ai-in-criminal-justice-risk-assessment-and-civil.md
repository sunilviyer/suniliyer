---
title: 'Article 145: AI in Criminal Justice – Risk Assessment and Civil Liberties'
tldr: ''
category: AI Risks & Principles
learning_objectives:
- Understand the key concepts and principles of risk assessment methodologies
- Implement regulatory requirements in real-world scenarios
- Evaluate risk assessment frameworks for organizational compliance
seo_keywords:
- article
- criminal
- AI governance
- criminal justice
- risk assessment
components:
- type: image_prompt
  label: Article Hero Image
  section: Header
  id: image-prompt-hero
  prompt: balanced composition showing risk and safety elements, warning symbols with
    protective shields, checklist, magnifying glass, inspection tools, quality badges,
    shield icons, warning triangles, protective barriers, safety nets, professional
    illustration, modern flat design style, clean and authoritative, high quality,
    blue and gray color scheme with accent colors, suitable for professional article
    header
- type: table
  label: Type vs Description Table
  section: Predictive Policing
  id: table-predictive-policing
- type: table
  label: Stage vs Purpose Table
  section: Risk Assessment Tools
  id: table-risk-assessment-tools
- type: table
  label: Jurisdiction vs Restriction Table
  section: State and Local Laws
  id: table-state-and-local-laws
- type: table
  label: State vs Requirement Table
  section: State and Local Laws
  id: table-state-and-local-laws
- type: table
  label: Factor vs How It Creates Bias Table
  section: 'Concern 1: Racial Bias and Discrimination'
  id: table-concern-1-racial-bias-and-discrimination
- type: flowchart
  label: Predictive Policing Process
  section: Predictive Policing
  id: flowchart-predictive-policing
- type: flowchart
  label: 'Concern 5: Feedback Loops and Self-Fulfilling Prophecies Process'
  section: 'Concern 5: Feedback Loops and Self-Fulfilling Prophecies'
  id: flowchart-concern-5-feedback-loops-and-self-fulfilling-prophecies
- type: flowchart
  label: Conclusion Process
  section: Conclusion
  id: flowchart-conclusion
- type: flowchart
  label: Sources and Further Reading Process
  section: Sources and Further Reading
  id: flowchart-sources-and-further-reading
- type: template
  label: Reform Possibilities
  section: Reform Possibilities
  id: template-reform-possibilities
  template_link: /templates/reform-possibilities.md
- type: list
  label: Best Practices (If AI Is Used)
  section: Best Practices (If AI Is Used)
  id: list-best-practices-if-ai-is-used
- type: list
  label: Transparency Requirements
  section: Transparency Requirements
  id: list-transparency-requirements
topic_fingerprint:
- risk assessment
- transparency
- accountability
- fairness
- oversight
named_examples:
- fair
- harvard
- national institute of standards
- nist
word_count: 2056
processed_date: '2025-12-18T20:05:48.349Z'
---


## How AI Is Used in Criminal Justice


### Predictive Policing

**What It Does:**
Uses data to predict where crimes will occur or who will commit them.

**Types:**

| Type | Description | Examples |
<!-- component:table:table-predictive-policing -->
|------|-------------|----------|
| Place-based | Predicts crime hotspots | PredPol, HunchLab |
| Person-based | Identifies likely offenders/victims | Strategic Subject List (Chicago) |

**How It Works:**
- Analyzes historical crime data
- Identifies patterns (location, time, type)
- Generates predictions about future crime
- Directs police resources to predicted areas

**Concerns:**
- Based on arrest data, not crime data (reflects where police are, not where crime is)
<!-- component:flowchart:flowchart-predictive-policing -->
- Creates feedback loops (more policing → more arrests → more predicted crime)
- Disproportionate impact on minority communities
- Several departments have abandoned after criticism


### Facial Recognition

**Applications:**
- Identifying suspects from surveillance footage
- Real-time monitoring of public spaces
- Mugshot database searches
- Border and immigration enforcement

**Concerns:**
- Higher error rates for women and people of color
- Mass surveillance implications
- Wrongful arrests documented
- Chilling effect on free expression and assembly

**Notable Incidents:**
- Robert Williams (Detroit): Wrongfully arrested based on facial recognition misidentification
- Multiple documented cases of false matches leading to arrests
- Studies showing significant accuracy disparities by race and gender


### Risk Assessment Tools

**When Used:**

| Stage | Purpose |
<!-- component:table:table-risk-assessment-tools -->
|-------|---------|
| Pretrial | Bail/detention decisions |
| Sentencing | Risk of recidivism |
| Parole | Release decisions |
| Supervision | Level of monitoring |

**How They Work:**
- Collect data on defendant (criminal history, demographics, social factors)
- Apply algorithm to generate risk score
- Score informs (or determines) decision

**Common Tools:**
- COMPAS (Correctional Offender Management Profiling for Alternative Sanctions)
- PSA (Public Safety Assessment)
- LSI-R (Level of Service Inventory-Revised)
- ORAS (Ohio Risk Assessment System)


### Court Applications

**Case Management:**
- Docket prediction
- Resource allocation
- Scheduling optimization

**Legal Research:**
- AI-assisted case research
- Outcome prediction
- Document review


### Corrections

**Applications:**
- Housing decisions (security classification)
- Program assignment
- Parole predictions
- Monitoring and surveillance


### Investigative Tools

**Applications:**
- Evidence analysis
- Pattern identification in data
- Social media monitoring
- Gunshot detection (ShotSpotter)

---


## The Regulatory Landscape


### Constitutional Protections

**Due Process (5th and 14th Amendments):**
- Right to fair proceedings
- Requires notice of evidence and opportunity to challenge
- Raises questions about opaque algorithms

**Equal Protection (14th Amendment):**
- Prohibits discrimination
- Disparate impact arguments against biased algorithms
- But proving constitutional violation is difficult

**Fourth Amendment:**
- Protection against unreasonable searches
- Implications for surveillance and facial recognition
- Evolving doctrine on digital technologies


### Federal Legislation and Guidance

**Limited Federal Law:**
Currently, no comprehensive federal law governs AI in criminal justice.

**DOJ Guidance:**
- Some guidance on algorithm use
- Focus on constitutional compliance
- Civil rights enforcement authority


### State and Local Laws

**Facial Recognition Bans/Limits:**

| Jurisdiction | Restriction |
<!-- component:table:table-state-and-local-laws -->
|--------------|-------------|
| San Francisco | Banned government use |
| Boston | Banned city use |
| Portland, OR | Banned public and private use |
| Massachusetts | Statewide limitations |
| Vermont | State law enforcement limitations |
| Multiple cities | Various restrictions |

**Risk Assessment Regulations:**

| State | Requirement |
<!-- component:table:table-state-and-local-laws -->
|-------|-------------|
| California | Pretrial pilot program requirements |
| New Jersey | Validated pretrial assessment required |
| Various states | Validation and transparency requirements |

**Algorithmic Accountability:**
- Some jurisdictions require disclosure of algorithm use
- Validation requirements in some states
- Ongoing legislative activity


### Court Decisions

**State v. Loomis (Wisconsin, 2016):**
- Upheld use of COMPAS at sentencing
- But: can't be determinative, defendant can challenge
- Significant concerns expressed about transparency

**Other Cases:**
- Various challenges to predictive policing
- Facial recognition lawsuits
- Ongoing litigation

---


## Key Concerns


### Concern 1: Racial Bias and Discrimination

**The Evidence:**
- ProPublica COMPAS analysis: Black defendants more likely to be falsely flagged as high risk
- Facial recognition: Higher error rates for darker-skinned faces
- Predictive policing: Concentrates enforcement in minority communities

**Why This Happens:**

| Factor | How It Creates Bias |
<!-- component:table:table-concern-1-racial-bias-and-discrimination -->
|--------|-------------------|
| Historical data | Reflects past discriminatory policing |
| Arrest vs. crime data | Arrests reflect where police are, not where crime is |
| Feedback loops | AI predictions drive policing, which generates data that confirms predictions |
| Proxy variables | Factors correlated with race (zip code, employment) |

**The Measurement Debate:**
Different fairness definitions conflict. COMPAS can be:
- Equally predictive across races (it was)
- While still generating disparate error rates (it did)

This isn't just statistics—it's about whose errors we're willing to tolerate.


### Concern 2: Due Process and Transparency

**The Black Box Problem:**
Defendants often can't:
- Know what algorithm was used
- Access the algorithm's logic
- Challenge the specific factors
- Present contrary evidence

**Trade Secret Claims:**
Companies often refuse to disclose algorithms, claiming proprietary information. This puts trade secrets above due process.

**Loomis Paradox:**
Wisconsin courts said defendants can challenge COMPAS scores, but without knowing how it works, how can they effectively challenge?


### Concern 3: Accuracy and Validation

**How Good Are These Tools?**
Studies show risk assessment tools are only modestly accurate:
- AUC (predictive accuracy measure) typically 0.65-0.75
- Not much better than simple formulas or human judgment
- Significant false positive and false negative rates

**Validation Problems:**
- Many tools not validated for populations where used
- Performance may differ by jurisdiction
- Limited independent validation
- Outcomes depend on what interventions follow


### Concern 4: Automation of Discretion

**The Shift:**
From human judgment with its biases to algorithmic recommendations with different biases.

**Problems:**
- Humans may defer to algorithms (automation bias)
- Individual circumstances may be ignored
- Professional judgment devalued
- Accountability diffused ("algorithm said so")

**The Question:**
Is automated bias better than human bias? Or does it just make discrimination more efficient and harder to challenge?


### Concern 5: Feedback Loops and Self-Fulfilling Prophecies

**How It Works:**
<!-- component:flowchart:flowchart-concern-5-feedback-loops-and-self-fulfilling-prophecies -->
1. AI predicts higher crime in certain areas
2. Police concentrate in those areas
3. More arrests in those areas (because more police)
4. Data "confirms" prediction
5. AI predicts even higher crime
6. Cycle continues

**Person-Based Version:**
1. Person flagged as high risk
2. Receives more monitoring/restrictions
3. More likely to be caught for any violation
4. "Confirms" risk prediction
5. Future predictions reinforced


### Concern 6: Surveillance and Civil Liberties

**Facial Recognition Concerns:**
- Enables mass surveillance
- Chilling effect on protest and free expression
- Authoritarian applications
- No consent, no opt-out

**Predictive Systems:**
- Treat people as suspects based on predictions, not actions
- Pre-crime concept (intervention before crime occurs)
- Minority Report concerns made real

**Data Aggregation:**
- Social media monitoring
- Location tracking
- Network analysis
- Comprehensive surveillance infrastructure

---


## The Debate: Should AI Be Used at All?


### Arguments For AI in Criminal Justice

**Reducing Human Bias:**
- Human decisions are also biased
- At least AI bias is consistent and measurable
- Can be audited and improved

**Efficiency:**
- Faster processing
- More consistent decisions
- Resource optimization

**Potential for Improvement:**
- Could be designed to reduce incarceration
- Early intervention for at-risk youth
- Better than purely punitive approaches


### Arguments Against AI in Criminal Justice

**Fundamental Problems:**
- Built on biased historical data
- Can't be debiased without changing inputs
- Legitimizes discrimination through technical veneer

**Due Process Violations:**
- Defendants can't effectively challenge
- Trade secrets over transparency
- Shifts burden to accused

**Disproportionate Impact:**
- Concentrated harm on marginalized communities
- Reinforces existing inequalities
- May be unconstitutional under equal protection

**Better Alternatives:**
- Invest in community services instead
- Address root causes of crime
- Reform cash bail without algorithms
- Human judgment with appropriate constraints


### The Middle Ground?

**Some Argue:**
- AI can be improved with better data and design
- Transparency and validation requirements can help
- Oversight and auditing are possible
- Ban is overreaction

**Others Counter:**
- Criminal justice is too high-stakes for experimentation
- Even "improved" AI on bad data is problematic
- Moratorium until fundamental issues addressed
- Some applications should never use AI

---

<!-- component:list:list-best-practices-if-ai-is-used -->

## Best Practices (If AI Is Used)

<!-- component:list:list-transparency-requirements -->

### Transparency Requirements

**Minimum Disclosure:**
- What algorithm is being used
- What factors it considers
- How it generates scores
- Known limitations and error rates
- Validation studies

**Public Access:**
- Algorithms should be publicly available
- No trade secret exceptions for justice system
- Independent audit access


### Validation Standards

**Required Validation:**
- On local population before deployment
- Regular revalidation
- By independent parties
- Disaggregated by race, gender, age

**Performance Requirements:**
- Minimum accuracy thresholds
- Maximum disparity thresholds
- Comparison to alternatives (including no algorithm)


### Due Process Protections

**Defendant Rights:**
- Notice that algorithm was used
- Access to algorithm details
- Expert assistance to challenge
- Weight as one factor, not determinative
- Right to human decision


### Oversight and Accountability

**Governance:**
- Public body oversight
- Community input
- Regular public reporting
- Clear accountability for errors

**Auditing:**
- Regular bias audits
- Outcome monitoring
- Public reporting of disparities


### Use Limitations

**Restricted Applications:**
- No facial recognition (some jurisdictions)
- Risk assessment as information, not decision
- Human override required
- Prohibited from being sole factor

---


## The Path Forward


### Current Trends

**Growing Criticism:**
- Multiple cities banning or limiting facial recognition
- Departments abandoning predictive policing
- Increasing legal challenges
- Academic and civil liberties criticism

**Continued Expansion:**
- Many jurisdictions still adopting tools
- Federal agencies expanding AI use
- New applications emerging

<!-- component:template:template-reform-possibilities -->

### Reform Possibilities

**Legislative:**
- Transparency requirements
- Validation mandates
- Bias testing requirements
- Use limitations or bans

**Judicial:**
- Courts requiring disclosure
- Due process challenges
- Equal protection litigation

**Executive:**
- Agency policies limiting use
- Procurement requirements
- Civil rights enforcement


### Fundamental Questions

**Should We Be Doing This?**
Is criminal justice the right domain for AI, given:
- Inability to fix historical bias in data
- Life-altering consequences of errors
- Due process requirements
- Disparate impact on marginalized communities

**Who Decides?**
These are not just technical questions. They're questions about values, justice, and what kind of society we want. They should be decided democratically, not by vendors or agencies acting alone.

---


## Conclusion

AI in criminal justice sits at the intersection of technology, civil liberties, racial justice, and democratic accountability. The stakes couldn't be higher—these systems affect who loses their freedom.

Key takeaways:

<!-- component:flowchart:flowchart-conclusion -->
1. **Bias is embedded:** AI trained on biased criminal justice data learns that bias; this is not easily fixed

2. **Due process is threatened:** Opaque algorithms undermine defendants' ability to challenge evidence

3. **Feedback loops amplify problems:** Predictive systems can create self-fulfilling prophecies

4. **Transparency is essential:** If AI is used, it must be fully transparent and challengeable

5. **Alternatives exist:** Many AI applications can be replaced with simpler, more accountable approaches

6. **Democratic oversight is required:** These decisions should be made by communities, not just agencies or vendors

AI in criminal justice is not neutral. It makes choices about whose liberty matters, whose neighborhoods get surveilled, and who gets labeled "high risk." These choices embed values—often values that perpetuate existing injustices.

The question is not just "does this work?" but "should we do this at all?" And if we do, "who gets to decide, and who bears the consequences?"

Those questions deserve democratic answers.

---


## Sources and Further Reading

1. **ProPublica COMPAS Investigation:** Angwin, J., et al. (2016). Machine Bias. ProPublica.

2. **State v. Loomis:** Wisconsin Supreme Court. (2016). State v. Loomis, 881 N.W.2d 749.

3. **NIST Facial Recognition Study:** National Institute of Standards and Technology. (2019). Face Recognition Vendor Test (FRVT).

4. **AI Now Institute:** Reports on AI in criminal justice. https://ainowinstitute.org/

5. **Leadership Conference on Civil Rights:** Reports on predictive policing and civil rights.

6. **Pretrial Justice Institute:** Research on pretrial risk assessment.

7. **Brennan Center for Justice:** Reports on AI and criminal justice.

8. **ACLU:** Resources on facial recognition and surveillance.

9. **Partnership on AI:** Research on AI in criminal justice.

10. **Harvard Law Review:** Various articles on algorithmic decision-making and due process.

11. **Cathy O'Neil:** Weapons of Math Destruction (2016). Discussion of COMPAS and criminal justice algorithms.

12. **Rashida Richardson:** Research on police surveillance and AI.

---

*This article is part of the AI Governance Mastery Program by AIDefence (suniliyer.ca). For more resources on AI governance, visit the complete article series.*
