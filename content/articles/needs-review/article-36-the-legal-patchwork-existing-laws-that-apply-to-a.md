---


## Title VII: Employment Discrimination


### What Title VII Prohibits

Title VII of the Civil Rights Act of 1964 prohibits employment discrimination based on:

- Race
- Color
- Religion
- Sex (including pregnancy, sexual orientation, gender identity)
- National origin

The law applies to employers with 15 or more employees, as well as employment agencies, labor organizations, and the federal government.


### The Disparate Impact Framework for Employment

When challenging an AI hiring tool under disparate impact theory, courts typically apply a three-step framework:

**Step 1 - Prima Facie Case:** The plaintiff shows that the AI produces significantly different outcomes for protected groups. The most common measure is the "four-fifths rule"—if the selection rate for a protected group is less than 80% of the rate for the highest-scoring group, adverse impact is presumed.

**Step 2 - Business Necessity:** If adverse impact is shown, the employer must prove the AI tool is "job related and consistent with business necessity." This typically requires validation studies demonstrating that the tool actually predicts job performance.

**Step 3 - Less Discriminatory Alternative:** Even if the employer shows business necessity, the plaintiff can still prevail by demonstrating that a less discriminatory alternative would serve the same purpose.

**Example:** Suppose an AI resume screener selects 60% of male applicants for interviews but only 40% of female applicants. The four-fifths rule is violated (40/60 = 67%, less than 80%). The employer would need to prove the tool is validated for predicting job performance. Even then, a plaintiff might argue that a different screening method would be equally effective with less disparate impact.


### Real-World Examples

**Amazon's Hiring Algorithm:** Amazon developed an AI recruiting tool trained on 10 years of resumes. Because most successful candidates were men, the AI learned to penalize resumes containing female-associated terms like "women's" or names of women's colleges. Amazon discovered and discontinued the tool, but the case illustrates how easily AI can encode gender bias.

**HireVue Facial Analysis:** HireVue's video interview platform once analyzed facial expressions to predict candidate success. Critics argued the system could discriminate against people with disabilities affecting facial expressions, and against cultural groups with different norms around eye contact and expression. HireVue discontinued facial analysis in 2021.

**Standardized Tests:** Before AI, courts addressed disparate impact in standardized employment tests. Many cognitive ability tests produce racial disparities. Courts have required employers to validate that test scores actually predict job performance and to consider less discriminatory alternatives.

---


## Equal Credit Opportunity Act: Lending Discrimination


### What ECOA Prohibits

The Equal Credit Opportunity Act (ECOA), passed in 1974, prohibits discrimination in lending based on:

- Race
- Color
- Religion
- National origin
- Sex
- Marital status
- Age (provided the applicant can enter contracts)
- Receipt of public assistance
- Good faith exercise of rights under consumer protection laws

ECOA applies to any creditor—banks, credit unions, mortgage lenders, credit card companies, and others who extend credit.


### AI Lending: The Fairness Challenge

AI lending models are increasingly common. They promise faster decisions, lower costs, and sometimes broader credit access. But they also raise serious fair lending concerns.

**The proxy problem:** Lending models may use factors that correlate with protected characteristics. Zip code correlates with race. Educational institution correlates with race and national origin. Shopping patterns may correlate with religion or national origin. Even seemingly neutral factors like browser type or typing speed have been proposed as credit indicators—and these could serve as proxies for age, disability, or socioeconomic status.

**The explainability problem:** Under ECOA, lenders must provide "adverse action notices" explaining why credit was denied. But many AI models are black boxes that can't explain their predictions in human-understandable terms. The Consumer Financial Protection Bureau (CFPB) has made clear that "we don't know why the AI said no" isn't an acceptable explanation.

**The testing problem:** Fair lending law requires testing for disparate impact, but testing AI models is complex. A model might show no disparate impact on the training data but produce discriminatory outcomes on real-world applications.


### Regulatory Guidance

The CFPB has issued multiple guidance documents on AI and fair lending:

**CFPB Circular 2022-03:** Clarified that creditors cannot avoid adverse action notice requirements by using AI. "Creditors must provide the specific reasons for taking adverse action, even when using complex algorithms."

**CFPB Circular 2023-03:** Warned that digital marketing and targeting using AI can violate fair lending laws if it steers protected groups away from favorable credit products.

**Interagency Statement (2023):** Federal financial regulators (OCC, Federal Reserve, FDIC, CFPB, NCUA) jointly stated that "existing laws and regulations apply regardless of whether a technology is used."


### Real-World Concerns

**Apple Card Investigation:** In 2019, tech entrepreneur David Heinemeier Hansson tweeted that the Apple Card gave him 20 times the credit limit of his wife, despite shared finances. Other couples reported similar experiences. The New York Department of Financial Services investigated. While no violation was found, the case highlighted how AI credit decisions can produce unexplainable, apparently discriminatory outcomes.

**Upstart and Fair Lending:** Upstart, an AI lending platform, has faced ongoing questions about its use of education and other non-traditional factors in credit decisions. The company has defended its model as expanding credit access, but critics argue it may discriminate based on proxies for protected characteristics.

---


## Fair Housing Act: Housing Discrimination


### What the Fair Housing Act Prohibits

The Fair Housing Act (FHA), passed in 1968, prohibits discrimination in housing based on:

- Race
- Color
- Religion
- National origin
- Sex
- Familial status (families with children)
- Disability

The law covers selling, renting, and financing housing, as well as advertising and other housing-related activities.


### AI in Housing: Where Problems Arise

AI touches housing decisions in numerous ways:

**Tenant screening:** AI tools evaluate rental applicants, predicting likelihood of paying rent, causing damage, or creating problems. These tools may use criminal records, credit history, eviction records, and other data that correlates with race.

**Mortgage underwriting:** AI increasingly assists with mortgage approval decisions. The same fair lending concerns that apply under ECOA apply to mortgage lending under the FHA.

**Property valuations:** AI-powered automated valuation models (AVMs) estimate property values. Studies have shown that homes in Black neighborhoods are systematically undervalued—a pattern AI could perpetuate.

**Advertising:** AI-powered advertising platforms can target (or exclude) users based on characteristics that correlate with protected classes.


### The Facebook Housing Ads Case

In 2019, the Department of Housing and Urban Development (HUD) charged Facebook with violating the Fair Housing Act. The allegation: Facebook's advertising platform allowed housing advertisers to exclude users based on race, color, religion, sex, familial status, national origin, and disability.

Facebook's ad targeting tools allowed advertisers to exclude users interested in "Hispanic culture," "African American culture," or other categories that served as proxies for protected characteristics. Advertisers could also exclude parents or people with certain disabilities from seeing housing ads.

The case settled in 2022, with Facebook agreeing to changes in its ad targeting for housing, employment, and credit. But the case illustrates how AI-powered advertising can enable discrimination at scale—even if the platform doesn't intend discriminatory use.


### Algorithmic Steering

"Steering" is a classic fair housing violation—directing homebuyers or renters toward or away from neighborhoods based on race or other protected characteristics.

AI-powered housing platforms can engage in algorithmic steering without any human intent to discriminate:

- A recommendation algorithm might learn that users "like" listings similar to what people like them have chosen—perpetuating segregation
- Search ranking algorithms might prioritize listings in ways that correlate with neighborhood racial composition
- Personalization might steer families with children away from certain buildings or neighborhoods

**Example:** If a housing search platform's AI learns that white users tend to click on listings in certain neighborhoods and Black users tend to click on listings in other neighborhoods, it might start showing different results to users based on inferred race—effectively steering users toward segregated neighborhoods.

---


## The Americans with Disabilities Act


### What the ADA Requires

The Americans with Disabilities Act (ADA), passed in 1990, prohibits discrimination against qualified individuals with disabilities. In employment (Title I), the ADA requires:

- Non-discrimination in hiring, promotion, and other employment decisions
- Reasonable accommodations for qualified individuals with disabilities
- That qualification standards not screen out people with disabilities unless job-related


### AI and Disability Discrimination

AI creates unique disability discrimination risks:

**Measuring disability, not ability:** AI tools that analyze facial expressions, speech patterns, body language, or physical movements may inadvertently measure disability-related characteristics rather than job-relevant qualifications.

**Example:** A video interview AI that evaluates "engagement" through eye contact would disadvantage candidates with autism or visual impairments. An AI that analyzes speech patterns might penalize candidates with speech impediments or hearing loss. A typing-based assessment might disadvantage candidates with motor disabilities.

**Inaccessible assessments:** Many AI-powered assessments aren't accessible to people with disabilities. Timed tests disadvantage people with cognitive or processing-speed disabilities. Visual assessments exclude people with visual impairments. Game-based assessments may be impossible for people with certain physical disabilities.

**Failure to accommodate:** Under the ADA, employers must provide reasonable accommodations for qualified applicants. When AI is involved, this means offering alternative assessments when the AI-powered version isn't accessible.


### EEOC Guidance

In 2022, the EEOC issued detailed guidance on "The Americans with Disabilities Act and the Use of Software, Algorithms, and Artificial Intelligence to Assess Job Applicants and Employees."

Key points:

- Employers must ensure AI assessments don't screen out people with disabilities unless the assessment measures abilities actually needed for the job
- Employers must provide reasonable accommodations for AI-based assessments
- Employers may be liable for ADA violations even when using vendor-provided AI tools
- Employers should ask vendors about accessibility and accommodation procedures

---


## Age Discrimination: The ADEA


### What the ADEA Prohibits

The Age Discrimination in Employment Act (ADEA), passed in 1967, prohibits employment discrimination against workers 40 and older. The law applies to employers with 20 or more employees.


### AI and Age Discrimination

AI can discriminate based on age in several ways:

**Proxies for age:** Even if an AI doesn't use age directly, it may use factors correlated with age:
- Graduation year reveals approximate age
- Years of experience can proxy for age
- Technological skill requirements may screen out older workers
- "Cultural fit" assessments may favor younger applicants

**Training data bias:** If an AI is trained on data from a young workforce, it may learn that youth predicts success—even if this isn't true.

**Digital marketing discrimination:** AI-powered job advertising that targets only younger users can violate the ADEA. In 2019, the EEOC investigated Facebook and other platforms for allowing age-based targeting in job ads.


### Legal Uncertainty

There's ongoing legal debate about whether the ADEA allows disparate impact claims (like Title VII) or only disparate treatment claims (requiring proof of intent). The Supreme Court's 2005 decision in Smith v. City of Jackson recognized disparate impact claims under the ADEA, but with a more limited scope than under Title VII.

For AI purposes, this means age discrimination claims may require showing more direct evidence of bias, not just statistical disparities. However, using age-correlated factors with knowledge of their effect could support a disparate treatment claim.

---


## How to Assess AI for Discrimination


### Step 1: Identify Protected Characteristics

Start by identifying which characteristics are protected under applicable laws:

| Law | Protected Characteristics |
|-----|--------------------------|
| Title VII | Race, color, religion, sex, national origin |
| ADEA | Age (40+) |
| ADA | Disability |
| ECOA | Race, color, religion, national origin, sex, marital status, age, public assistance receipt |
| FHA | Race, color, religion, national origin, sex, familial status, disability |


### Step 2: Collect Demographic Data

You can't measure disparate impact without demographic data. This creates a tension: collecting demographic data raises privacy concerns, but not collecting it makes discrimination invisible.

Best practice: collect demographic data for testing and monitoring purposes, but keep it separate from the data used by the AI. This allows you to assess outcomes by demographic group without the AI using protected characteristics.


### Step 3: Calculate Selection Rates

For each decision point (application screening, interview invitation, job offer, loan approval, etc.), calculate the selection rate for each demographic group:

Selection Rate = (Number selected from group) / (Total applicants from group)


### Step 4: Apply the Four-Fifths Rule

Compare each group's selection rate to the highest-scoring group:

Impact Ratio = (Lower group's selection rate) / (Highest group's selection rate)

If the impact ratio is below 0.80 (80%), adverse impact is presumed.

**Example:**
- White applicants: 50% selected (highest rate)
- Black applicants: 35% selected
- Impact ratio: 35/50 = 0.70 (70%)
- Result: Adverse impact presumed (below 80%)


### Step 5: Investigate and Remediate

If you find adverse impact:

1. **Investigate root causes:** Which factors in the AI are driving the disparity? Are they truly job-related?

2. **Validate job-relatedness:** Can you prove the AI's factors actually predict job performance, creditworthiness, or whatever the AI is supposed to predict?

3. **Consider alternatives:** Are there less discriminatory ways to achieve the same goal?

4. **Document everything:** If you're ever challenged, you'll need documentation of your testing, findings, and remediation efforts.

---


## Building Anti-Discrimination into AI Development


### Fairness by Design

Rather than testing for discrimination after an AI is built, organizations should build fairness considerations into the development process:

**Diverse development teams:** Homogeneous teams are more likely to overlook bias. Include people with different backgrounds, perspectives, and experiences.

**Representative training data:** Ensure training data includes adequate representation of all demographic groups. If your historical data underrepresents certain groups, consider techniques like oversampling or synthetic data.

**Feature review:** Before including a factor in the AI, ask: Could this factor serve as a proxy for protected characteristics? Is it actually predictive of the outcome we care about?

**Ongoing monitoring:** Bias can emerge over time as data distributions shift. Implement continuous monitoring for adverse impact.


### Fairness Metrics

Researchers have developed various mathematical definitions of fairness for AI:

**Demographic parity:** Selection rates should be equal across groups.

**Equal opportunity:** True positive rates should be equal across groups (among qualified candidates, equal percentages should be selected).

**Predictive parity:** Precision should be equal across groups (among those selected, equal percentages should be truly qualified).

**Individual fairness:** Similar individuals should receive similar treatment.

These metrics sometimes conflict—optimizing for one can worsen another. Organizations must make value judgments about which fairness metrics matter most for their context.

---


## What Organizations Should Do


### Inventory AI Systems

Create an inventory of all AI systems that make or influence decisions about people. For each system, document:

- What decisions does it affect?
- Which protected characteristics could be impacted?
- What data does it use?
- Has it been tested for adverse impact?


### Conduct Regular Testing

Test AI systems for adverse impact regularly—at least annually, and more frequently for high-stakes decisions. Document results and remediation efforts.


### Establish Governance

Create clear accountability for AI fairness:

- Who is responsible for testing?
- Who reviews results?
- Who decides whether to modify or discontinue a biased AI?
- How are decisions documented?


### Train Staff

Everyone involved with AI—developers, users, managers—should understand anti-discrimination law and how it applies to AI.


### Engage Experts

Consider engaging:

- Legal counsel with civil rights expertise
- Data scientists specializing in algorithmic fairness
- External auditors for independent assessment

---


## Conclusion

Civil rights laws were written before AI existed, but their principles apply with full force to algorithmic decision-making. Discrimination is discrimination, whether committed by a human or a machine.

For organizations using AI, the message is clear:

1. **Understand the law:** Disparate impact doctrine means you can violate civil rights laws without intending to discriminate.

2. **Test for adverse impact:** You can't fix what you don't measure. Regular testing is essential.

3. **Document your efforts:** If challenged, you'll need evidence of validation, testing, and remediation.

4. **Stay vigilant:** AI bias can emerge over time. Continuous monitoring is necessary.

5. **Prioritize fairness:** Build anti-discrimination considerations into AI development from the start, not as an afterthought.

The algorithmic age presents new challenges for civil rights, but also new opportunities. AI can potentially reduce human bias—if designed and monitored carefully. Organizations that take anti-discrimination seriously will build AI that's not only legal, but also more accurate and trustworthy.

The civil rights laws of the 1960s established that discrimination is wrong, regardless of intent. The task for our era is ensuring that principle applies equally to the algorithms that increasingly shape our lives.

---


## Sources

1. Civil Rights Act of 1964, Title VII. 42 U.S.C. § 2000e et seq.

2. Griggs v. Duke Power Co., 401 U.S. 424 (1971). https://supreme.justia.com/cases/federal/us/401/424/

3. Equal Credit Opportunity Act (ECOA). 15 U.S.C. § 1691 et seq.

4. Fair Housing Act. 42 U.S.C. § 3601 et seq.

5. Americans with Disabilities Act of 1990. 42 U.S.C. § 12101 et seq.

6. Age Discrimination in Employment Act of 1967 (ADEA). 29 U.S.C. § 621 et seq.

7. U.S. Equal Employment Opportunity Commission. "Uniform Guidelines on Employee Selection Procedures." 29 CFR Part 1607 (1978). https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XIV/part-1607

8. U.S. Equal Employment Opportunity Commission. "The Americans with Disabilities Act and the Use of Software, Algorithms, and Artificial Intelligence to Assess Job Applicants and Employees." May 12, 2022. https://www.eeoc.gov/laws/guidance/americans-disabilities-act-and-use-software-algorithms-and-artificial-intelligence

9. Consumer Financial Protection Bureau. "Consumer Financial Protection Circular 2022-03: Adverse action notification requirements in connection with credit decisions based on complex algorithms." May 26, 2022.

10. U.S. Department of Housing and Urban Development. "HUD Charges Facebook With Housing Discrimination Over Company's Targeted Advertising Practices." Press release, March 28, 2019.

11. Dastin, Jeffrey. "Amazon scraps secret AI recruiting tool that showed bias against women." Reuters, October 10, 2018.

12. Bartlett, Robert, et al. "Consumer-Lending Discrimination in the FinTech Era." National Bureau of Economic Research Working Paper, 2019.

13. Smith v. City of Jackson, 544 U.S. 228 (2005).

14. Barocas, Solon, and Andrew D. Selbst. "Big Data's Disparate Impact." California Law Review, Vol. 104, 2016.
