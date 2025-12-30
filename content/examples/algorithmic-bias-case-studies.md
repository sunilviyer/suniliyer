# Algorithmic Bias Case Studies

**Purpose**: Real-world examples of algorithmic bias, their impacts, and lessons learned
**Concepts**: algorithmic-bias, discrimination, fairness, ai-failures

---

## Case Study 1: Apple Card Gender Discrimination (2019)

### What Happened

In November 2019, tech entrepreneur David Heinemeier Hansson tweeted that Apple Card's credit algorithm approved him for a credit limit 20 times higher than his wife's—despite her having a higher credit score and both filing joint tax returns.

The tweet went viral. Apple co-founder Steve Wozniak reported the same experience: he received a credit limit 10 times higher than his wife's, even though they shared all assets and accounts.

### The Investigation

New York's Department of Financial Services launched an investigation. Goldman Sachs, the bank behind Apple Card, insisted the algorithm didn't use gender as an input variable—it was "blind" to gender.

But that's precisely the problem: the algorithm wasn't explicitly told to discriminate, but it learned to discriminate anyway.

### Why It Happened

**Historical Data Bias**: The algorithm was likely trained on decades of credit decisions made in an era when women were systematically denied credit. Until 1974, banks could legally require women to bring a male co-signer for credit cards. The algorithm learned patterns from this discriminatory history.

**Proxy Variables**: Even without explicit gender information, the algorithm could infer gender from correlated variables like income patterns, spending categories, or employment history—all of which differ between men and women due to systemic inequality.

### The Impact

- Massive reputational damage to Apple and Goldman Sachs
- Regulatory investigation and scrutiny
- Public backlash and erosion of customer trust
- Became a cautionary tale cited in AI governance discussions worldwide

### Lessons Learned

1. **"Blindness" isn't fairness**: Removing gender as an input doesn't prevent gender discrimination
2. **Historical bias persists**: Training on past data embeds past discrimination
3. **Transparency matters**: Neither company could adequately explain how the algorithm worked
4. **Public exposure is inevitable**: Affected users will share their experiences

### Governance Implications

- Need for disaggregated performance testing by gender
- Requirement for fairness audits before deployment
- Importance of explainability for high-stakes decisions
- Value of external oversight and regulatory scrutiny

**Sources**:
- Vigdor, N. (2019). "Apple Card Investigated After Gender Discrimination Complaints." The New York Times.
- Knight, W. (2019). "The Apple Card Didn't 'See' Gender—and That's the Problem." Wired.

---

## Case Study 2: Amazon's Biased Hiring Tool (2018)

### What Happened

Amazon built an AI recruiting tool to automate resume screening and identify top talent. The company scrapped it in 2018 after discovering it discriminated against women for technical roles.

The tool penalized resumes that contained the word "women's" (as in "women's chess club captain") and downgraded graduates of all-women's colleges.

### Why It Happened

**Biased Training Data**: The algorithm was trained on resumes submitted to Amazon over a 10-year period—overwhelmingly from men, since the tech industry is male-dominated. The algorithm learned that male candidates were the pattern of success.

**Historical Hiring Patterns**: Amazon's past hiring decisions reflected the tech industry's gender imbalance. The AI learned to replicate that imbalance, not correct it.

**Pattern Recognition Without Context**: The algorithm identified linguistic patterns associated with women's resumes and learned to penalize them, without understanding that those patterns shouldn't matter for job performance.

### Amazon's Response

Amazon engineers tried to fix the problem by making the algorithm gender-neutral regarding specific terms. But they couldn't guarantee it wasn't learning to discriminate in other, subtler ways. The company ultimately abandoned the project.

### The Impact

- Project scrapped after significant investment
- Public revelation damaged Amazon's reputation in diversity efforts
- Became the go-to example in discussions of AI bias in hiring
- Prompted broader tech industry reflection on AI-driven recruitment

### Lessons Learned

1. **Garbage in, garbage out**: If training data reflects bias, the AI will learn bias
2. **Technical fixes aren't enough**: Making the model gender-neutral for obvious terms didn't solve the underlying problem
3. **Use case matters**: High-stakes decisions (hiring, lending, criminal justice) demand higher standards
4. **Transparency about failures**: Amazon's decision to disclose the problem (albeit after Reuters reported it) helped the broader conversation

### Governance Implications

- Hiring AI requires rigorous bias testing before deployment
- Regular audits needed to detect emerging bias patterns
- Human oversight essential for employment decisions
- Consider whether automation is appropriate for this use case

**Sources**:
- Dastin, J. (2018). "Amazon scraps secret AI recruiting tool that showed bias against women." Reuters.

---

## Case Study 3: COMPAS Recidivism Algorithm (2016)

### What Happened

ProPublica's 2016 investigation "Machine Bias" revealed that COMPAS—an algorithm widely used in U.S. courts to predict the likelihood of criminal reoffending—was biased against Black defendants.

The algorithm was nearly twice as likely to incorrectly label Black defendants as "high risk" for reoffending (false positives: 45% for Black defendants vs. 23% for white defendants). Conversely, it was more likely to incorrectly label white defendants as "low risk" (false negatives: 48% for white defendants vs. 28% for Black defendants).

### Why It Happened

**Historical Justice System Bias**: The algorithm was trained on data from a criminal justice system with documented racial disparities in arrests, convictions, and sentencing. It learned to replicate those disparities.

**Proxy Variables**: Even without explicit race information, variables like zip code, employment history, and family criminal history correlate with race due to systemic inequality and segregation.

**Compounding Errors**: Predictions influenced real-world outcomes (bail, sentencing), which generated more biased data, which reinforced the bias—a feedback loop.

### The Controversy

Northpointe (now Equivant), the company behind COMPAS, argued the algorithm satisfied "predictive parity"—when COMPAS predicted recidivism, it was equally accurate across races.

ProPublica argued the algorithm failed "equal opportunity"—it didn't have equal error rates across races.

**The mathematical reality**: These two fairness definitions can't both be satisfied when base rates differ across groups. This isn't a software bug—it's a mathematical impossibility. Someone must choose which definition of fairness matters more, and that's a values decision, not a technical one.

### The Impact

- Widespread media coverage and public outcry
- Challenges to COMPAS use in multiple states
- Legal challenges arguing algorithmic sentencing violated due process
- Sparked national conversation about AI in criminal justice
- Prompted fairness research in machine learning community

### Lessons Learned

1. **Fairness is not one thing**: Multiple mathematical definitions of fairness exist and often conflict
2. **Human judgment required**: Choosing which fairness definition matters is a values question
3. **High-stakes contexts demand scrutiny**: Criminal justice decisions affect fundamental rights
4. **Transparency is essential**: Proprietary "black box" algorithms in justice systems are problematic
5. **Feedback loops amplify bias**: Predictions influence reality, which influences future predictions

### Governance Implications

- Criminal justice AI requires external audits and public transparency
- Courts must understand algorithmic limitations before relying on predictions
- Affected individuals deserve to challenge algorithmic decisions
- Consider whether prediction is appropriate when base rates reflect systemic injustice

**Sources**:
- Angwin, J., Larson, J., Mattu, S., & Kirchner, L. (2016). "Machine Bias." ProPublica.

---

## Case Study 4: Healthcare Algorithm Racial Bias (2019)

### What Happened

A 2019 study published in *Science* revealed that a widely used healthcare algorithm exhibited significant racial bias. The algorithm, used by hospitals and insurers to identify patients needing extra medical care, systematically underestimated the health needs of Black patients.

At any given risk score, Black patients were significantly sicker than white patients. The algorithm assigned the same risk score to a Black patient and a white patient, even when the Black patient had far more chronic conditions.

### Why It Happened

**Biased Proxy for Health Need**: The algorithm used healthcare spending as a proxy for health needs. It assumed that patients who cost more need more care.

**Unequal Access to Care**: Black patients in the U.S. have less access to healthcare due to systemic inequality, insurance disparities, and geographic factors. They spend less on healthcare—not because they're healthier, but because they have less access to care.

**The Algorithm's Logic**: The algorithm saw lower spending by Black patients and concluded they needed less care. In reality, they needed *more* care but received less.

### The Impact

The bias affected millions of patients. The researchers estimated that correcting the bias would increase the percentage of Black patients identified for extra care programs from 17.7% to 46.5%.

That's not a small error—that's systematically denying care to people who need it most.

### The Response

After the study's publication, the algorithm's developer (Optum) worked with the researchers to reduce bias. The company committed to improving the algorithm and exploring alternative proxies for health need.

### Lessons Learned

1. **Proxy variables can encode injustice**: Using spending as a proxy for need embedded healthcare inequality
2. **Assumptions matter**: The assumption that spending = need seemed reasonable but was wrong
3. **Context is essential**: Understanding the social context (healthcare disparities) is necessary to design fair algorithms
4. **Real-world harm**: This wasn't theoretical—patients were denied care they needed
5. **Collaboration works**: Researchers and the company worked together to improve the system

### Governance Implications

- Healthcare AI requires scrutiny for disparities in access and outcomes
- Proxy variables must be validated for bias
- Domain expertise (healthcare, social determinants of health) essential
- Regular audits needed to detect bias in deployed systems

**Sources**:
- Obermeyer, Z., Powers, B., Vogeli, C., & Mullainathan, S. (2019). "Dissecting racial bias in an algorithm used to manage the health of populations." *Science*, 366(6464), 447-453.

---

## Case Study 5: UK A-Level Algorithm Controversy (2020)

### What Happened

In 2020, COVID-19 canceled A-level exams in the UK. The government used an algorithm to predict student grades instead.

The algorithm systematically downgraded nearly 40% of student predictions, with students from disadvantaged schools disproportionately affected. High-achieving students at historically underperforming schools saw their grades lowered, while students at elite schools were more likely to receive their predicted grades or better.

### Why It Happened

**Historical Performance Bias**: The algorithm adjusted individual teacher predictions based on each school's historical performance. If a school historically had lower grades, the algorithm downgraded predictions from that school—even for exceptional individual students.

**Assumption of Consistency**: The algorithm assumed past patterns would continue. It didn't account for individual student excellence at schools with lower historical performance.

**Scale vs. Personalization**: The algorithm worked "well" on average but failed individual students whose circumstances differed from their school's historical pattern.

### The Fallout

- Massive public protests and outrage
- Students denied university admission due to lowered grades
- Students from disadvantaged backgrounds disproportionately harmed
- Government reversed course within days, using teacher predictions instead
- Political crisis and ministerial resignations
- Algorithm abandoned entirely

### Lessons Learned

1. **Averages hide individual injustice**: An algorithm that's "accurate on average" can devastate individual lives
2. **Context collapse is dangerous**: Using school history penalized individual students for systemic factors beyond their control
3. **High-stakes decisions demand human judgment**: Automating life-changing decisions (university admission) proved unacceptable
4. **Public accountability matters**: Visible, widespread harm triggered immediate political pressure
5. **Equity considerations essential**: The algorithm amplified existing educational inequality

### Governance Implications

- High-stakes automated decisions require human review and appeal processes
- Algorithms must account for individual circumstances, not just group patterns
- Equity impact assessments needed before deployment
- Transparency about algorithmic decision-making essential for public trust

**Sources**:
- Adams, R. (2020). "A-level and GCSE results: How did the algorithm work?" BBC News.

---

## Case Study 6: Gender Shades — Facial Recognition Bias (2018)

### What Happened

Joy Buolamwini and Timnit Gebru published "Gender Shades," a study evaluating commercial facial recognition systems from Microsoft, IBM, and Face++. They found that error rates were dramatically higher for darker-skinned women than for lighter-skinned men.

For darker-skinned women, error rates reached 34.7% (IBM) and 20.8% (Microsoft). For lighter-skinned men, error rates were less than 1%.

### Why It Happened

**Training Data Bias**: Facial recognition systems were predominantly trained on datasets of lighter-skinned, male faces. Researchers analyzed common datasets and found 77.5% male and 83.5% lighter-skinned subjects.

**Underrepresentation**: Without sufficient examples of darker-skinned faces, especially women, the algorithms couldn't learn to accurately recognize them.

**Design Choices**: Development teams, predominantly composed of people who looked like the majority of training data, didn't notice the problem during internal testing.

### The Impact

- Immediate responses from Microsoft and IBM, who improved their systems and published updated accuracy metrics
- Sparked broader awareness of bias in computer vision systems
- Prompted research into fairness in facial recognition
- Influenced policy debates about facial recognition use by law enforcement
- Led to more diverse benchmark datasets

### Lessons Learned

1. **Representation in data matters**: AI can't recognize what it hasn't seen
2. **Intersectionality is real**: Bias compounds across dimensions (race × gender)
3. **Testing must be disaggregated**: Overall accuracy hides disparities for subgroups
4. **Academic research drives accountability**: External researchers revealed what companies missed
5. **Rapid improvement is possible**: When companies prioritized the issue, they fixed it

### Governance Implications

- Computer vision systems must be tested across demographic groups
- Diversity in training data should be a requirement, not an afterthought
- Use cases with disparate impacts (law enforcement, hiring) demand higher standards
- External audits and research essential for accountability

**Sources**:
- Buolamwini, J., & Gebru, T. (2018). "Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification." *Proceedings of Machine Learning Research*, 81, 1-15.

---

## Common Patterns Across Cases

### Root Causes

1. **Historical bias in training data** (Apple Card, Amazon, COMPAS, Healthcare, UK A-levels)
2. **Unrepresentative datasets** (Gender Shades)
3. **Problematic proxy variables** (Healthcare algorithm using spending as proxy for need)
4. **Lack of diverse perspectives** on development teams
5. **Insufficient testing** across demographic groups

### Failure Modes

1. **"Blindness" doesn't prevent bias** (Apple Card)
2. **Averages hide individual injustice** (UK A-levels)
3. **Feedback loops amplify bias** (COMPAS)
4. **Proxy variables encode systemic injustice** (Healthcare)
5. **Optimization for wrong metric** (Healthcare optimized for cost, not need)

### Consequences

1. **Real-world harm** to individuals and communities
2. **Reputational damage** to organizations
3. **Regulatory scrutiny** and legal challenges
4. **Erosion of public trust** in AI systems
5. **Amplification of existing inequalities**

### What Works

1. **External research and audits** (ProPublica, Gender Shades researchers)
2. **Disaggregated testing** by demographic groups
3. **Transparency and accountability**
4. **Diverse development teams**
5. **Human oversight** for high-stakes decisions
6. **Willingness to abandon** systems that can't be fixed (Amazon)

---

**Used By Articles**:
- Algorithmic Bias: How AI Discriminates and Why
- [Future articles on AI fairness, AI in criminal justice, healthcare AI, hiring AI]

**Reusable For**:
- AI bias articles
- Fairness in ML articles
- AI governance case studies
- Industry-specific AI risk articles (healthcare, finance, criminal justice, education)
