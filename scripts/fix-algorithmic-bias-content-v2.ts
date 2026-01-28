import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function fixAlgorithmicBiasContent() {
  console.log('Fixing algorithmic-bias corrupted content (v2)...\n');

  // First, let's get the current article structure
  const [currentArticle] = await sql`
    SELECT yaml_content FROM articles WHERE slug = 'algorithmic-bias'
  `;

  // Parse the current yaml_content
  const yamlData = JSON.parse(currentArticle.yaml_content);

  // Update the specific fields
  yamlData.content = `<h2 class="content-h2">
  <span class="heading-decoration" />
  How to Detect Algorithmic Bias
</h2>

<div class="content-p">
  Bias won't announce itself. Organizations must actively look for it through systematic testing.
</div>

<h3 class="content-h3">Disaggregated Performance Metrics</h3>

<div class="content-p">
  Don't just measure overall accuracy—measure accuracy for different groups. If your hiring AI is 90% accurate overall but only 70% accurate for women, you have a bias problem. Break down performance by every demographic category you can measure: gender, race, age, disability status, and their intersections.
</div>

<div class="content-p">
  <strong>Why This Matters</strong>: Amazon's hiring tool appeared to work well on average. But when disaggregated by gender, it systematically penalized women. Overall metrics hid the problem.
</div>

<div class="content-p">
  <strong>Example</strong>: Joy Buolamwini and Timnit Gebru's "Gender Shades" study revealed that commercial facial recognition systems had error rates of less than 1% for light-skinned men but up to 34.7% for dark-skinned women. Overall accuracy looked acceptable. Disaggregated metrics revealed catastrophic bias.
</div>

<h3 class="content-h3">Fairness Metrics</h3>

<div class="content-p">
  There are multiple mathematical definitions of fairness, and they often conflict. Three common ones:
</div>

<div class="content-p">
  <strong>Demographic Parity</strong>: The AI makes positive decisions at equal rates across groups. If 30% of male applicants get hired, 30% of female applicants should too.
</div>

<div class="content-p">
  <strong>Equal Opportunity</strong>: The AI makes correct positive decisions at equal rates across groups. Among actually qualified candidates, men and women should be hired at equal rates.
</div>

<div class="content-p">
  <strong>Predictive Parity</strong>: When the AI predicts a positive outcome, it's equally accurate across groups. If the AI predicts someone will repay a loan, that prediction should be equally reliable regardless of race.
</div>

<div class="content-p">
  <strong>The Problem</strong>: These definitions can't all be satisfied simultaneously except in unusual circumstances. You must choose which kind of fairness matters most for your use case—a decision that requires human judgment, not just technical optimization.
</div>

<div class="content-p">
  <strong>The COMPAS Controversy</strong>: ProPublica argued COMPAS failed "equal opportunity" (equal error rates across races). Northpointe argued it satisfied "predictive parity" (equal accuracy when predicting recidivism). Both were mathematically correct. The conflict wasn't a software bug—it was a fundamental impossibility when base rates differ across groups.
</div>

<h3 class="content-h3">Adversarial Testing</h3>

<div class="content-p">
  Actively try to break your AI. Test it with edge cases. Have people from different backgrounds use it and report unexpected behavior. Red team exercises—where a dedicated group tries to find problems—can uncover biases that normal testing misses.
</div>

<div class="content-p">
  <strong>What This Looks Like</strong>:
</div>

<ul class="content-ul">
  <li>Create identical resumes differing only in name (Emily vs. Lakisha, Brad vs. Jamal)</li>
  <li>Test addresses from different zip codes (affluent vs. poor neighborhoods)</li>
  <li>Test unusual names (non-Western, hyphenated, single names)</li>
  <li>Test atypical career paths or backgrounds</li>
</ul>

<h3 class="content-h3">External Audits</h3>

<div class="content-p">
  Internal teams are often too close to their own work to see problems. Independent third-party audits bring fresh eyes and different perspectives. They're increasingly required by regulations like New York City's Local Law 144, which mandates bias audits for AI hiring tools.
</div>

<h2 class="content-h2">
  <span class="heading-decoration" />
  Mitigating Algorithmic Bias
</h2>

<div class="content-p">
  Detecting bias is necessary but not sufficient. Organizations must take action to reduce it.
</div>

<h3 class="content-h3">Diversify Training Data</h3>

<div class="content-p">
  If underrepresentation causes bias, representation reduces it. Actively seek out data from underrepresented groups. Augment existing datasets with additional examples. Consider synthetic data generation techniques to fill gaps—though these have their own limitations.
</div>

<div class="content-p">
  <strong>The Gender Shades Impact</strong>: After Buolamwini and Gebru's study revealed facial recognition bias, Microsoft, IBM, and others collected more diverse training data—especially darker-skinned faces and women. Error rates for dark-skinned women dropped dramatically (IBM reduced error rate from 34.7% to under 10%).
</div>

<h3 class="content-h3">Apply Technical Debiasing</h3>

<div class="content-p">
  Machine learning researchers have developed various techniques to reduce bias:
</div>

<ul class="content-ul">
  <li><strong>Pre-processing</strong>: Modify the training data to reduce historical bias before training the model.</li>
  <li><strong>In-processing</strong>: Add fairness constraints to the model during training, so it optimizes for both accuracy and fairness.</li>
  <li><strong>Post-processing</strong>: Adjust the model's outputs to achieve fairer results.</li>
</ul>

<div class="content-p">
  Each approach has trade-offs, and none guarantees perfectly fair outcomes. They're tools, not solutions.
</div>

<h3 class="content-h3">Build Diverse Teams</h3>

<div class="content-p">
  Homogeneous teams have blind spots. People from different backgrounds will notice different potential harms. Diverse teams—in terms of gender, race, age, disability status, socioeconomic background, and disciplinary expertise—build better AI systems.
</div>

<div class="content-p">
  This isn't just about demographics. Include people with different types of expertise: ethicists, social scientists, legal experts, and representatives from affected communities. Technical excellence alone isn't enough.
</div>

<h3 class="content-h3">Establish Human Oversight</h3>

<div class="content-p">
  AI systems shouldn't make high-stakes decisions autonomously. Build in human review for consequential outcomes. Ensure that humans have enough information to meaningfully evaluate AI recommendations—not just rubber-stamp them.
</div>

<h3 class="content-h3">Create Feedback Channels</h3>

<div class="content-p">
  Make it easy for people affected by AI decisions to report problems. A loan applicant who believes they were unfairly denied should have a clear path to challenge the decision and trigger human review. These feedback channels generate valuable information about how the AI is performing in the real world.
</div>

<h3 class="content-h3">Document Everything</h3>

<div class="content-p">
  Maintain detailed documentation of training data sources, design choices, testing results, and known limitations. Model cards and datasheets provide standardized formats for this documentation. When problems arise—and they will—good documentation helps you understand what went wrong and how to fix it.
</div>

<h2 class="content-h2">
  <span class="heading-decoration" />
  The Business Case for Addressing Bias
</h2>

<div class="content-p">
  Addressing algorithmic bias isn't just ethically right—it's good business.
</div>

<h3 class="content-h3">Legal Risk</h3>

<div class="content-p">
  Discrimination laws apply to AI systems. The Equal Credit Opportunity Act, Title VII of the Civil Rights Act, the Fair Housing Act, and the Americans with Disabilities Act all prohibit discrimination—whether by human or algorithm. Companies that deploy biased AI face lawsuits, regulatory enforcement actions, and consent decrees.
</div>

<h3 class="content-h3">Regulatory Pressure</h3>

<div class="content-p">
  The EU AI Act requires conformity assessments for high-risk AI systems. New York City mandates bias audits for AI hiring tools. Colorado's AI Act requires deployers to use reasonable care to avoid discrimination. The regulatory trend is clear: governments are increasingly requiring organizations to address algorithmic bias.
</div>

<h3 class="content-h3">Reputational Harm</h3>

<div class="content-p">
  The Apple Card controversy generated headlines worldwide. Amazon's biased hiring tool became a cautionary tale. When algorithmic bias is exposed, it damages brands and erodes customer trust. In a competitive market, that trust is hard to rebuild.
</div>

<h3 class="content-h3">Market Opportunity</h3>

<div class="content-p">
  AI that works well for everyone accesses larger markets. Facial recognition that accurately identifies all skin tones can serve more customers. Healthcare AI that performs well across demographics provides better care. Unbiased AI isn't just fairer—it's more useful.
</div>`;

  yamlData.keyLearnings = [
    'Algorithmic bias occurs when AI systems make systematically unfair decisions based on protected characteristics like race, gender, or age.',
    'Disaggregated performance metrics reveal bias that overall accuracy numbers hide—Amazon\'s hiring tool appeared accurate overall but discriminated against women.',
    'Multiple conflicting definitions of fairness exist (demographic parity, equal opportunity, predictive parity)—choosing which matters is a values decision.',
    'Adversarial testing with edge cases and diverse testers uncovers bias that standard testing misses.',
    'Technical debiasing alone is insufficient—diverse teams, human oversight, and feedback channels are essential for mitigation.'
  ];

  yamlData.additionalResources = [
    {
      url: 'https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing',
      type: 'article',
      title: 'ProPublica - Machine Bias in Criminal Sentencing',
      description: 'Investigative report on COMPAS algorithm and racial bias in recidivism prediction.'
    },
    {
      url: 'http://gendershades.org/',
      type: 'research',
      title: 'Gender Shades - Intersectional Accuracy Disparities',
      description: 'Study revealing facial recognition bias across gender and skin tone.'
    },
    {
      url: 'https://research.google/pubs/pub48120/',
      type: 'paper',
      title: 'Google Research - Model Cards for Model Reporting',
      description: 'Framework for documenting ML model performance and limitations.'
    },
    {
      url: 'https://www.microsoft.com/en-us/research/publication/datasheets-for-datasets/',
      type: 'paper',
      title: 'Microsoft Research - Datasheets for Datasets',
      description: 'Standardized documentation template for training datasets.'
    },
    {
      url: 'https://www.nist.gov/itl/ai-risk-management-framework',
      type: 'framework',
      title: 'NIST - AI Risk Management Framework',
      description: 'Comprehensive framework including bias detection and mitigation strategies.'
    }
  ];

  yamlData.sources = [
    {
      citation: 'Vigdor, N. (2019). "Apple Card Investigated After Gender Discrimination Complaints." The New York Times.',
      url: 'https://www.nytimes.com/2019/11/10/business/Apple-credit-card-investigation.html'
    },
    {
      citation: 'Buolamwini, J., & Gebru, T. (2018). "Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification." Proceedings of Machine Learning Research, 81, 1-15.',
      url: 'http://proceedings.mlr.press/v81/buolamwini18a.html'
    },
    {
      citation: 'Angwin, J., Larson, J., Mattu, S., & Kirchner, L. (2016). "Machine Bias." ProPublica.',
      url: 'https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing'
    },
    {
      citation: 'Dastin, J. (2018). "Amazon scraps secret AI recruiting tool that showed bias against women." Reuters.',
      url: 'https://www.reuters.com/article/us-amazon-com-jobs-automation-insight-idUSKCN1MK08G'
    },
    {
      citation: 'Mitchell, M., et al. (2019). "Model Cards for Model Reporting." Proceedings of the Conference on Fairness, Accountability, and Transparency.',
      url: 'https://doi.org/10.1145/3287560.3287596'
    },
    {
      citation: 'Gebru, T., et al. (2021). "Datasheets for Datasets." Communications of the ACM, 64(12), 86-92.',
      url: 'https://doi.org/10.1145/3458723'
    }
  ];

  // Convert back to JSON string for storage
  const updatedYamlContent = JSON.stringify(yamlData);

  // Update the article with the complete structure
  await sql`
    UPDATE articles
    SET yaml_content = ${updatedYamlContent}
    WHERE slug = 'algorithmic-bias'
  `;

  console.log('✓ Algorithmic-bias content fixed\n');

  // Verify
  const [article] = await sql`
    SELECT slug,
           LENGTH(yaml_content::json->>'content') as content_length,
           jsonb_array_length(yaml_content::jsonb->'keyLearnings') as key_learnings_count,
           jsonb_array_length(yaml_content::jsonb->'additionalResources') as resources_count,
           jsonb_array_length(yaml_content::jsonb->'sources') as sources_count,
           LEFT(yaml_content::json->>'content', 200) as content_preview
    FROM articles
    WHERE slug = 'algorithmic-bias'
  `;

  console.log('Verification:');
  console.log(`  Slug: ${article.slug}`);
  console.log(`  Content length: ${article.content_length} characters`);
  console.log(`  Key learnings: ${article.key_learnings_count}`);
  console.log(`  Resources: ${article.resources_count}`);
  console.log(`  Sources: ${article.sources_count}`);
  console.log(`  Content preview: ${article.content_preview}...`);

  console.log('\n✅ Algorithmic-bias content successfully restored!');
}

fixAlgorithmicBiasContent().catch(console.error);
