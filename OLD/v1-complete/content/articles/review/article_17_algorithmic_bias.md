# Algorithmic Bias – How AI Discriminates and Why

## TL;DR

Algorithmic bias occurs when AI systems produce unfair outcomes that favor or harm specific groups of people. This bias enters AI through three main pathways: biased training data (the AI learns from historical discrimination), biased design choices (developers make assumptions that harm certain groups), and biased deployment (the AI is used in contexts it wasn't designed for). Understanding these sources helps organizations identify and fix bias before it causes harm. The solution isn't perfect AI—it's building systems that are regularly audited, transparently documented, and designed with diverse perspectives from the start.

---

## Introduction

In 2019, Apple launched its new credit card with Goldman Sachs. Within months, users noticed something strange. Husbands were receiving credit limits 10 to 20 times higher than their wives—even when the wives had better credit scores. Tech entrepreneur David Heinemeier Hansson tweeted about his experience: his wife got a credit limit that was 1/20th of his, despite having a higher credit score and filing joint tax returns.

When challenged, Apple couldn't explain why. The algorithm was a black box, even to the company using it. New York's Department of Financial Services launched an investigation.

This wasn't a case of intentional discrimination. Nobody at Apple or Goldman Sachs programmed the system to give women lower limits. The algorithm discriminated on its own—and that's what makes algorithmic bias so dangerous. It can happen even when everyone involved has good intentions.

If you're responsible for AI systems in your organization—whether you're approving their purchase, managing their deployment, or overseeing their governance—understanding algorithmic bias is essential. This article explains where bias comes from, how to spot it, and what you can do about it.

---

## What Is Algorithmic Bias?

Algorithmic bias refers to systematic errors in AI systems that create unfair outcomes for certain groups of people. The key word is "systematic"—we're not talking about random mistakes, but patterns of error that consistently disadvantage specific populations.

Think of it this way: if an AI hiring tool rejects qualified candidates roughly equally across all demographic groups, that's just a limitation of the technology. But if that same tool rejects qualified women at twice the rate of qualified men, that's algorithmic bias.

Bias in AI systems can manifest in several ways:

**Disparate Impact**: The AI produces outcomes that disproportionately harm a protected group, even if the system doesn't explicitly consider protected characteristics. An algorithm that denies loans based on zip code might never "see" race, but if those zip codes correlate with racial demographics, the effect is racial discrimination.

**Disparate Treatment**: The AI explicitly uses protected characteristics (or close proxies) to make decisions. This is more obvious and often illegal, but it still happens—sometimes because developers don't realize a variable is acting as a proxy for race, gender, or another protected class.

**Representation Bias**: The AI performs differently for different groups because some groups were underrepresented in the training data. A medical AI trained mostly on data from white patients may perform poorly when diagnosing conditions in Black patients.

**Example: The Resume Screener**

A company uses AI to screen job applications. The system was trained on resumes of successful employees—people who were hired and performed well. But the company's historical hiring favored graduates from elite universities, which correlate with socioeconomic status and race. The AI learned that "elite university" predicts success, and it started filtering out equally qualified candidates from state schools. The company didn't intend to discriminate by class or race, but the algorithm did it anyway.

---

## The Three Sources of Algorithmic Bias

Bias doesn't appear in AI systems by magic. It enters through specific, identifiable pathways. Understanding these sources helps you know where to look for problems.

### Source 1: Biased Training Data

AI systems learn from data. If that data reflects historical discrimination, the AI will learn to discriminate too.

**Historical Bias in the Data**

Consider a hiring algorithm trained on a company's employment history. If that company has historically promoted men more than women (whether due to intentional discrimination or unconscious bias), the AI will learn that "male" correlates with "promotable." It's not that the AI is sexist—it's that the AI is accurately reflecting a sexist history.

This is perhaps the most common source of algorithmic bias, and it's particularly insidious because the data might be technically accurate. The historical pattern really exists. The problem is that perpetuating historical patterns means perpetuating historical injustices.

**Underrepresentation in Training Data**

The Gender Shades research by Joy Buolamwini found that commercial facial recognition systems had error rates of 0.8% for light-skinned men but 34.7% for dark-skinned women. Why? The training datasets were dominated by lighter-skinned faces. The AI simply hadn't seen enough examples of darker-skinned faces to learn to recognize them accurately.

This isn't limited to facial recognition. Medical AI trained primarily on data from white patients performs worse on Black patients. Voice recognition trained on American English accents struggles with other accents. Any AI is only as good as the diversity of its training data.

**Labeling Bias**

AI training data often requires human labels. Someone has to look at images and tag them, read text and categorize it, or listen to audio and transcribe it. These labelers bring their own biases to the task.

Research has shown that image datasets often label photos of kitchens as "woman" and photos of offices as "man." Pictures of doctors are labeled male; pictures of nurses are labeled female. The AI learns these stereotyped associations and reproduces them.

**Example: The Criminal Risk Assessment**

ProPublica's investigation of the COMPAS algorithm—used in courtrooms across America to predict criminal recidivism—found that Black defendants were far more likely to be incorrectly flagged as high risk than white defendants. White defendants were far more likely to be incorrectly flagged as low risk. The algorithm was trained on historical criminal justice data that reflected decades of biased policing and sentencing. The AI learned those patterns and encoded them into predictions that would influence judges' decisions.

### Source 2: Biased Design Choices

Even with perfect data (which doesn't exist), bias can enter through the choices developers make when building AI systems.

**Feature Selection**

Developers must decide which variables the AI will consider. These choices embed assumptions about what matters and what doesn't.

A lending algorithm might include "years at current address" as a factor predicting creditworthiness. This seems neutral, but it disadvantages younger people, renters, and people who move frequently for work—categories that correlate with race and class. The developer didn't intend to discriminate, but the feature choice had discriminatory effects.

**Objective Function Definition**

AI systems optimize for specific goals, called "objective functions." How you define that goal shapes everything the AI does.

Consider a content recommendation algorithm. If you define the goal as "maximize engagement," the AI may learn to show outrage-inducing content because anger keeps people scrolling. If you define the goal as "maximize user satisfaction," you might get different results. The choice of what to optimize is a human decision that embeds human values—or biases.

**Threshold Setting**

Many AI systems produce probability scores that humans convert into yes/no decisions by setting thresholds. If a fraud detection system assigns a risk score of 0-100, where do you draw the line for flagging a transaction for review?

Set the threshold too low, and you'll catch more fraud but also flag more legitimate transactions—creating friction for customers. Set it too high, and you'll miss fraud. If the AI's errors aren't distributed equally across customer groups, threshold choices can disproportionately impact some groups more than others.

**Example: The Grading Algorithm**

When COVID-19 canceled exams in the UK in 2020, officials used an algorithm to predict what grades students would have received. The algorithm weighted historical school performance heavily, which meant students at historically lower-performing schools (often in poorer areas) were predicted to do worse than their actual classwork suggested. Meanwhile, students at elite private schools saw their predicted grades rise. The design choice to weight school history over individual performance encoded socioeconomic bias into the system.

### Source 3: Biased Deployment

An AI system might be designed well and trained on good data, but still cause harm if it's deployed in the wrong context.

**Context Mismatch**

An AI trained in one context may not work in another. A medical diagnosis AI trained on data from well-equipped urban hospitals might perform poorly in rural clinics with different patient populations and equipment. Deploying it anyway—assuming it will generalize—can cause harm.

**Mission Creep**

AI systems are often deployed beyond their original purpose. A facial recognition system designed to unlock phones might get repurposed for law enforcement surveillance. A hiring tool built for entry-level positions might be applied to executive searches. Each new use case introduces new opportunities for bias.

**Feedback Loops**

Perhaps the most insidious deployment bias comes from feedback loops. An AI system makes predictions, those predictions influence outcomes, and those outcomes become the training data for the next version of the AI.

Consider predictive policing. An algorithm predicts crime will occur in certain neighborhoods, so police are sent there. More police presence leads to more arrests in those neighborhoods (because that's where the police are). Those arrests become data that "confirms" the algorithm's prediction, leading to even more policing of the same neighborhoods. The algorithm doesn't discover where crime happens—it determines where crime is recorded.

**Example: The Healthcare Algorithm**

That hospital algorithm discovered by Obermeyer et al. in 2019 didn't use race as an input variable. Instead, it used healthcare costs as a proxy for healthcare needs. The problem? Black patients in America have historically had less access to healthcare and incurred lower costs—not because they were healthier, but because they faced more barriers to care. By using cost as a proxy for need, the algorithm systematically underestimated how sick Black patients were. It was deployed as if cost and need were equivalent, but in a healthcare system shaped by racism, they weren't.

---

## How to Detect Algorithmic Bias

Bias won't announce itself. Organizations must actively look for it through systematic testing.

**Disaggregated Performance Metrics**

Don't just measure overall accuracy—measure accuracy for different groups. If your hiring AI is 90% accurate overall but only 70% accurate for women, you have a bias problem. Break down performance by every demographic category you can measure: gender, race, age, disability status, and their intersections.

**Fairness Metrics**

There are multiple mathematical definitions of fairness, and they often conflict. Three common ones:

- *Demographic Parity*: The AI makes positive decisions at equal rates across groups. If 30% of male applicants get hired, 30% of female applicants should too.

- *Equal Opportunity*: The AI makes correct positive decisions at equal rates across groups. Among actually qualified candidates, men and women should be hired at equal rates.

- *Predictive Parity*: When the AI predicts a positive outcome, it's equally accurate across groups. If the AI predicts someone will repay a loan, that prediction should be equally reliable regardless of race.

These definitions can't all be satisfied simultaneously except in unusual circumstances. You must choose which kind of fairness matters most for your use case—a decision that requires human judgment, not just technical optimization.

**Adversarial Testing**

Actively try to break your AI. Test it with edge cases. Have people from different backgrounds use it and report unexpected behavior. Red team exercises—where a dedicated group tries to find problems—can uncover biases that normal testing misses.

**External Audits**

Internal teams are often too close to their own work to see problems. Independent third-party audits bring fresh eyes and different perspectives. They're increasingly required by regulations like New York City's Local Law 144, which mandates bias audits for AI hiring tools.

---

## Mitigating Algorithmic Bias

Detecting bias is necessary but not sufficient. Organizations must take action to reduce it.

**Diversify Training Data**

If underrepresentation causes bias, representation reduces it. Actively seek out data from underrepresented groups. Augment existing datasets with additional examples. Consider synthetic data generation techniques to fill gaps—though these have their own limitations.

**Apply Technical Debiasing**

Machine learning researchers have developed various techniques to reduce bias:

- *Pre-processing*: Modify the training data to reduce historical bias before training the model.
- *In-processing*: Add fairness constraints to the model during training, so it optimizes for both accuracy and fairness.
- *Post-processing*: Adjust the model's outputs to achieve fairer results.

Each approach has trade-offs, and none guarantees perfectly fair outcomes. They're tools, not solutions.

**Build Diverse Teams**

Homogeneous teams have blind spots. People from different backgrounds will notice different potential harms. Diverse teams—in terms of gender, race, age, disability status, socioeconomic background, and disciplinary expertise—build better AI systems.

This isn't just about demographics. Include people with different types of expertise: ethicists, social scientists, legal experts, and representatives from affected communities. Technical excellence alone isn't enough.

**Establish Human Oversight**

AI systems shouldn't make high-stakes decisions autonomously. Build in human review for consequential outcomes. Ensure that humans have enough information to meaningfully evaluate AI recommendations—not just rubber-stamp them.

**Create Feedback Channels**

Make it easy for people affected by AI decisions to report problems. A loan applicant who believes they were unfairly denied should have a clear path to challenge the decision and trigger human review. These feedback channels generate valuable information about how the AI is performing in the real world.

**Document Everything**

Maintain detailed documentation of training data sources, design choices, testing results, and known limitations. Model cards and datasheets provide standardized formats for this documentation. When problems arise—and they will—good documentation helps you understand what went wrong and how to fix it.

---

## The Business Case for Addressing Bias

Addressing algorithmic bias isn't just ethically right—it's good business.

**Legal Risk**

Discrimination laws apply to AI systems. The Equal Credit Opportunity Act, Title VII of the Civil Rights Act, the Fair Housing Act, and the Americans with Disabilities Act all prohibit discrimination—whether by human or algorithm. Companies that deploy biased AI face lawsuits, regulatory enforcement actions, and consent decrees.

**Regulatory Pressure**

The EU AI Act requires conformity assessments for high-risk AI systems. New York City mandates bias audits for AI hiring tools. Colorado's AI Act requires deployers to use reasonable care to avoid discrimination. The regulatory trend is clear: governments are increasingly requiring organizations to address algorithmic bias.

**Reputational Harm**

The Apple Card controversy generated headlines worldwide. Amazon's biased hiring tool became a cautionary tale. When algorithmic bias is exposed, it damages brands and erodes customer trust. In a competitive market, that trust is hard to rebuild.

**Market Opportunity**

AI that works well for everyone accesses larger markets. Facial recognition that accurately identifies all skin tones can serve more customers. Healthcare AI that performs well across demographics provides better care. Unbiased AI isn't just fairer—it's more useful.

---

## Conclusion

Algorithmic bias isn't inevitable, but preventing it requires deliberate effort. Bias enters AI systems through training data that reflects historical discrimination, design choices that embed problematic assumptions, and deployment contexts that don't match the AI's capabilities.

Organizations can detect bias through disaggregated metrics, fairness testing, adversarial evaluation, and external audits. They can mitigate bias through diverse data, technical debiasing, inclusive teams, human oversight, and robust feedback channels.

But perhaps the most important lesson is this: bias in AI is fundamentally a human problem. Algorithms don't discriminate on their own—they learn to discriminate from us. Addressing algorithmic bias requires addressing the human systems, historical patterns, and institutional practices that created biased data in the first place.

The goal isn't perfect, bias-free AI—that may be impossible. The goal is AI systems that are transparent about their limitations, regularly audited for problems, and designed with the input of the communities they affect. When we build AI with care, accountability, and diverse perspectives, we move closer to technology that serves everyone fairly.

---

## Sources

1. Vigdor, N. (2019). "Apple Card Investigated After Gender Discrimination Complaints." The New York Times.

2. Knight, W. (2019). "The Apple Card Didn't 'See' Gender—and That's the Problem." Wired.

3. Buolamwini, J., & Gebru, T. (2018). "Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification." Proceedings of Machine Learning Research, 81, 1-15.

4. Angwin, J., Larson, J., Mattu, S., & Kirchner, L. (2016). "Machine Bias." ProPublica.

5. Dastin, J. (2018). "Amazon scraps secret AI recruiting tool that showed bias against women." Reuters.

6. Obermeyer, Z., Powers, B., Vogeli, C., & Mullainathan, S. (2019). "Dissecting racial bias in an algorithm used to manage the health of populations." Science, 366(6464), 447-453.

7. Adams, R. (2020). "A-level and GCSE results: How did the algorithm work?" BBC News.

8. Ensign, D., Friedler, S. A., Neville, S., Scheidegger, C., & Venkatasubramanian, S. (2018). "Runaway Feedback Loops in Predictive Policing." Proceedings of Machine Learning Research, 81, 1-12.

9. Mehrabi, N., Morstatter, F., Saxena, N., Lerman, K., & Galstyan, A. (2021). "A Survey on Bias and Fairness in Machine Learning." ACM Computing Surveys, 54(6), 1-35.

10. Mitchell, M., et al. (2019). "Model Cards for Model Reporting." Proceedings of the Conference on Fairness, Accountability, and Transparency.

11. Gebru, T., et al. (2021). "Datasheets for Datasets." Communications of the ACM, 64(12), 86-92.

12. U.S. Equal Employment Opportunity Commission. (2023). "Select Issues: Assessing Adverse Impact in Software, Algorithms, and Artificial Intelligence Used in Employment Selection Procedures."

13. New York City Department of Consumer and Worker Protection. (2023). "Automated Employment Decision Tools (AEDT) – Local Law 144."
