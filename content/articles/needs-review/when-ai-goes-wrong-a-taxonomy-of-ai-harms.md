---
title: When AI Goes Wrong – A Taxonomy of AI Harms
tldr: ''
category: AI Risks & Principles
learning_objectives:
- Understand the key concepts and principles of stakeholder engagement
- Implement policy development in real-world scenarios
- Evaluate risk assessment frameworks for organizational compliance
seo_keywords:
- when
- goes
- AI governance
- artificial intelligence
- AI ethics
components:
- type: image_prompt
  label: Article Hero Image
  section: Header
  id: image-prompt-hero
  prompt: balanced composition showing risk and safety elements, warning symbols with
    protective shields, professional illustration, modern flat design style, clean
    and authoritative, high quality, blue and gray color scheme with accent colors,
    suitable for professional article header
- type: flowchart
  label: Sources Process
  section: Sources
  id: flowchart-sources
- type: template
  label: 'Example: The Credit Score That Knew Too Much'
  section: 1. Harms to Individuals
  id: template-1-harms-to-individuals
  template_link: /templates/example-the-credit-score-that-knew-too-much.md
- type: template
  label: 'Example: The Loan Algorithm That Punished Communities'
  section: 2. Harms to Groups
  id: template-2-harms-to-groups
  template_link: /templates/example-the-loan-algorithm-that-punished-communities.md
- type: template
  label: 'Example: The Recommendation Algorithm That Radicalized Users'
  section: 3. Harms to Society
  id: template-3-harms-to-society
  template_link: /templates/example-the-recommendation-algorithm-that-radicalized-users.md
- type: template
  label: 'Example: The HR Algorithm Nobody Trusted'
  section: 4. Harms to Organizations
  id: template-4-harms-to-organizations
  template_link: /templates/example-the-hr-algorithm-nobody-trusted.md
- type: template
  label: 'Example: The Data Center That Drained the Town'
  section: 5. Harms to the Ecosystem
  id: template-5-harms-to-the-ecosystem
  template_link: /templates/example-the-data-center-that-drained-the-town.md
topic_fingerprint:
- generative ai
- large language model
- machine learning
- deep learning
- nlp
named_examples:
- amazon
- energy
- eu ai act
- facebook
- fair
- microsoft
- mit
- nist
- openai
- twitter
- uber
word_count: 2503
processed_date: '2025-12-18T20:07:46.614Z'
---


## The Five Categories of AI Harm

AI harms don't happen in isolation, and they rarely fit into neat boxes. However, organizing them into categories helps us think systematically about risk. The framework below, drawn from multiple AI governance bodies including the NIST AI Risk Management Framework and the OECD, organizes harms into five levels: individual, group, societal, organizational, and ecosystem.


### 1. Harms to Individuals

These are the most direct and personal AI harms—when a specific person suffers because of an AI system's decision or behavior.

**Civil Rights Violations**

Imagine applying for an apartment and being rejected, not because of your credit score or income, but because an AI system determined that people from your neighborhood are "higher risk." This isn't hypothetical. In 2019, the U.S. Department of Housing and Urban Development charged Facebook with housing discrimination because its ad targeting algorithm allowed landlords to exclude people based on race, religion, and national origin—even when landlords didn't explicitly select those criteria.

The AI had learned to discriminate on its own.

**Economic Opportunity Denial**

When Amazon built an AI recruiting tool to screen resumes, the company discovered it had taught itself to penalize any resume that included the word "women's"—as in "women's chess club captain." The system had learned from historical hiring data that favored men, and it replicated that bias at scale. Amazon scrapped the tool, but how many companies are using similar systems without realizing the harm they're causing?

**Physical Safety Risks**

Beyond the Uber fatality, consider healthcare AI. In 2019, researchers discovered that a widely-used hospital algorithm was systematically giving Black patients lower risk scores than equally sick white patients. The result? Black patients had to be significantly sicker than white patients before the system flagged them for extra care. This wasn't a small problem—the algorithm affected an estimated 200 million Americans.

<!-- component:template:template-1-harms-to-individuals -->
**Example: The Credit Score That Knew Too Much**

Sarah applies for a car loan. She has good income and no debt, but she's denied. Why? The AI system noticed that she shops at discount stores and lives in a neighborhood with lower average incomes. It correlated these factors with higher default risk—even though Sarah herself has never missed a payment on anything. The AI made a prediction about her based on her circumstances rather than her actual behavior.


### 2. Harms to Groups

While individual harms affect one person at a time, group harms affect entire communities or demographic categories. These harms often stem from the same root causes as individual harms, but they operate at scale.

**Algorithmic Discrimination**

Joy Buolamwini, a researcher at MIT, discovered that commercial facial recognition systems had error rates of up to 34.7% for dark-skinned women, compared to just 0.8% for light-skinned men. Her research, known as the "Gender Shades" project, revealed that the AI wasn't just making random errors—it was systematically failing for specific groups.

This matters because facial recognition is increasingly used for everything from unlocking phones to verifying identity for government services. When the technology works dramatically worse for certain groups, those groups bear a disproportionate burden of false rejections and false accusations.

**Bias Amplification**

AI systems don't just reflect existing biases—they can amplify them. Consider a hiring algorithm trained on historical data from a company that has always had more male engineers. The AI learns that "male" correlates with "successful engineer" and begins recommending men at even higher rates than the historical bias. What was a 60/40 gender split becomes 80/20. The AI turned a problem into a crisis.

<!-- component:template:template-2-harms-to-groups -->
**Example: The Loan Algorithm That Punished Communities**

A major bank uses AI to decide who gets approved for mortgages. The system notices that applicants from certain zip codes have historically had higher default rates. What the AI doesn't know is that those default rates were caused by predatory lending practices that targeted those same neighborhoods decades ago. By using location as a factor, the AI perpetuates a cycle of discrimination, making it harder for entire communities to build wealth through homeownership.


### 3. Harms to Society

Some AI harms extend beyond individuals and groups to affect society as a whole. These are the harms that keep policymakers up at night.

**Threats to Democracy**

In 2016 and subsequent elections, AI-powered systems were used to target voters with personalized political messages, some of which were misleading or outright false. AI made it possible to micro-target propaganda at scale, showing different messages to different people based on their psychological profiles.

More recently, generative AI has made it trivially easy to create convincing fake videos of politicians saying things they never said. As this technology improves, it becomes increasingly difficult for citizens to know what's real and what's fabricated.

**Misinformation at Scale**

AI systems can generate thousands of fake news articles, social media posts, and comments per minute. During the COVID-19 pandemic, AI-generated misinformation about vaccines spread faster than public health officials could respond. The combination of AI content generation and AI-powered recommendation algorithms created a perfect storm for false information.

**Job Displacement**

While automation has always changed the job market, AI threatens to accelerate this disruption. Unlike previous waves of automation that primarily affected manual labor, AI can perform cognitive tasks—writing, analyzing, even creating. A 2023 study by researchers at OpenAI and the University of Pennsylvania estimated that 80% of the U.S. workforce could have at least 10% of their tasks affected by large language models.

<!-- component:template:template-3-harms-to-society -->
**Example: The Recommendation Algorithm That Radicalized Users**

A social media platform uses AI to recommend content that keeps users engaged. The algorithm discovers that extreme content—conspiracy theories, political rage, shocking claims—gets more clicks and longer viewing times. Over months, users who started watching cooking videos find themselves recommended increasingly extreme political content. The algorithm didn't intend to radicalize anyone; it was just optimizing for engagement. But the societal effect was the same.


### 4. Harms to Organizations

Organizations that deploy AI face their own category of risks. These aren't just abstract concerns—they can destroy companies.

**Reputational Damage**

When Microsoft launched its AI chatbot Tay on Twitter in 2016, users quickly taught it to spout racist and offensive content. Microsoft shut it down within 24 hours, but the reputational damage was done. The incident became a cautionary tale taught in every AI ethics course.

More recently, Air Canada was held liable when its AI chatbot gave a customer incorrect information about bereavement fares. The airline argued it shouldn't be responsible for what its AI said, but the tribunal disagreed. The organization that deploys the AI bears responsibility for its behavior.

**Legal Liability**

As AI regulations proliferate—the EU AI Act, state laws in Colorado and Illinois, sector-specific rules from agencies like the EEOC—organizations face increasing legal risk from AI failures. A single discriminatory algorithm can result in class-action lawsuits, regulatory fines, and consent decrees that constrain business operations for years.

**Cultural Erosion**

Less obvious but equally important: what happens to organizational culture when decisions are increasingly made by algorithms? Employees may become less engaged if they feel like they're just implementing machine decisions. Critical thinking skills may atrophy if people stop questioning algorithmic outputs. Trust can erode if employees feel they're being surveilled or evaluated by AI systems.

<!-- component:template:template-4-harms-to-organizations -->
**Example: The HR Algorithm Nobody Trusted**

A company implements an AI system to identify employees at risk of leaving. The system analyzes email patterns, badge swipe data, and calendar entries to predict flight risk. When employees learn about the surveillance, morale plummets. The company's best performers—who have the most options—start leaving, citing the monitoring as a reason. The AI designed to reduce turnover ended up accelerating it.


### 5. Harms to the Ecosystem

The broadest category of AI harm affects the world beyond any single organization or society.

**Environmental Impact**

Training large AI models requires enormous amounts of electricity. Training GPT-3 consumed approximately 1,287 megawatt-hours of electricity and generated about 552 tons of carbon dioxide—equivalent to 123 gasoline-powered cars driven for a year. As AI models get larger and more companies train their own models, this environmental footprint grows.

**Resource Concentration**

AI development requires massive computing infrastructure, vast datasets, and specialized talent. This creates a concentration of power in the hands of a few large technology companies. Smaller organizations and developing nations may find themselves dependent on AI systems they didn't build and can't control.

**Supply Chain Exploitation**

The AI industry depends on a hidden workforce of data labelers, often paid poverty wages in developing countries, who manually classify training data. These workers are exposed to disturbing content—violence, hate speech, child exploitation—while receiving little support or fair compensation.

<!-- component:template:template-5-harms-to-the-ecosystem -->
**Example: The Data Center That Drained the Town**

A technology company builds a data center to power its AI operations in a rural area. The facility requires so much water for cooling that it strains the local water supply. Residents find their wells running dry during drought conditions while the data center continues operating. The AI systems running in that facility provide benefits to users worldwide, but the environmental cost is borne by one community that doesn't share in those benefits.

---


## Why This Taxonomy Matters

Understanding the different categories of AI harm isn't just an academic exercise. It has practical implications for anyone deploying AI systems.

**For Risk Assessment**

When evaluating an AI project, use this taxonomy as a checklist. Ask: Could this system harm individuals? Which groups might be disproportionately affected? What are the broader societal implications? What risks does this create for our organization? Are there ecosystem effects we should consider?

**For Governance Design**

Different types of harm require different governance controls. Individual harms might be addressed through appeals processes and human review. Group harms require demographic impact assessments. Societal harms may require coordination with regulators and civil society. Organizational harms need executive oversight and legal review. Ecosystem harms require supply chain audits and environmental assessments.

**For Stakeholder Communication**

When discussing AI risks with different audiences, the taxonomy helps frame the conversation appropriately. Board members may focus on organizational risks. Regulators care about societal harms. Employees worry about individual impacts. Environmental advocates focus on ecosystem effects. Speaking to each audience about their primary concerns builds trust and demonstrates comprehensive risk awareness.

---


## Preventing AI Harms: A Starting Point

Awareness is necessary but not sufficient. Organizations need practical steps to prevent AI harms.

**Conduct Impact Assessments Before Deployment**

Before launching any AI system, assess its potential for harm across all five categories. Who could be harmed? How likely is harm? How severe would it be? What safeguards can reduce risk? Document your analysis and have it reviewed by people outside the project team.

**Design for the Most Vulnerable**

The people most likely to be harmed by AI are often those with the least power to object: job applicants, loan applicants, patients, students. Design your systems with their interests in mind, not just the convenience of your organization.

**Build in Human Oversight**

Critical decisions should have human review, especially early in an AI system's deployment. Don't automate judgment calls that have significant consequences for people's lives.

**Monitor Continuously**

AI systems can develop problems after deployment. Monitor for drift in accuracy, emerging biases, and unexpected behaviors. Create channels for affected people to report problems.

**Prepare for Failure**

Despite best efforts, AI systems will sometimes cause harm. Have a plan for responding quickly, honestly, and effectively. Know who has authority to shut down a problematic system. Have communications plans ready.

---


## Conclusion

AI systems are not inherently good or bad—they're tools that can help or harm depending on how they're designed, deployed, and governed. The taxonomy presented here—individual, group, societal, organizational, and ecosystem harms—provides a framework for thinking comprehensively about AI risks.

The organizations that succeed with AI in the coming decade won't be those that move fastest or cut the most costs. They'll be the ones that anticipate harms, design safeguards, and respond quickly when problems arise. Understanding how AI can go wrong is the first step toward getting it right.

As you evaluate AI initiatives in your organization, return to this taxonomy. Ask the uncomfortable questions. Challenge assumptions about benefits without considering costs. The technology will keep advancing, but the fundamental question remains the same: who is helped, who is harmed, and are we comfortable with that trade-off?

---


## Sources

<!-- component:flowchart:flowchart-sources -->
1. National Transportation Safety Board. (2019). "Collision Between Vehicle Controlled by Developmental Automated Driving System and Pedestrian." NTSB Report HAR-19/03.

2. U.S. Department of Housing and Urban Development. (2019). "HUD Charges Facebook With Housing Discrimination Over Company's Targeted Advertising Practices."

3. Dastin, J. (2018). "Amazon scraps secret AI recruiting tool that showed bias against women." Reuters.

4. Obermeyer, Z., et al. (2019). "Dissecting racial bias in an algorithm used to manage the health of populations." Science, 366(6464), 447-453.

5. Buolamwini, J., & Gebru, T. (2018). "Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification." Proceedings of Machine Learning Research.

6. Elgan, E. (2023). "Air Canada ordered to pay customer who was misled by airline's chatbot." The Guardian.

7. Strubell, E., Ganesh, A., & McCallum, A. (2019). "Energy and Policy Considerations for Deep Learning in NLP." Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics.

8. Eloundou, T., et al. (2023). "GPTs are GPTs: An Early Look at the Labor Market Impact Potential of Large Language Models." arXiv preprint.

9. NIST. (2023). "AI Risk Management Framework (AI RMF 1.0)."

10. OECD. (2019). "Recommendation of the Council on Artificial Intelligence."

11. Partnership on AI. (2024). "AI Incident Database." https://incidentdatabase.ai/

12. Perrigo, B. (2023). "OpenAI Used Kenyan Workers on Less Than $2 Per Hour to Make ChatGPT Less Toxic." TIME Magazine.
