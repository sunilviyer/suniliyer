import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

const articleContent = {
  tldr: "Automation follows human-written 'if-then' rules, while AI learns to recognize patterns from data. Understanding this distinction is crucial for proper governance and risk management.",
  tags: ['AI Fundamentals', 'Automation', 'RPA', 'Governance Basics'],
  readTime: '8 min read',
  updatedDate: 'January 2025',
  headerImage: '/images/history/ai-vs-automation.webp',
  content: `<h2 class="content-h2"><span class="heading-decoration"></span>The Tale of Two Systems</h2><div class="content-p">Think about the last time you set an out-of-office reply on your email. You told the computer: IF an email arrives while I am away, THEN send this specific response. This is a perfect example of automation. It is reliable, predictable, and does exactly what you told it to do—nothing more and nothing less.</div><div class="content-p">Now, think about your email's spam filter. No human wrote a rule for every possible spam message. Instead, the system looked at millions of examples to learn what "spammy" patterns look like. This is {{CARD|article-link-what-ai-actually-is|artificial intelligence}}. Here is the key insight: Automation follows rules we write, but AI discovers patterns we might not even see.</div><h2 class="content-h2"><span class="heading-decoration"></span>Rules vs. Learning</h2><div class="content-p">To understand why this distinction matters for leadership, consider how these systems are built. Automation is deterministic. If you give it the same input a thousand times, you will get the exact same output a thousand times. This makes it very easy to audit. You just read the "if-then" code to see if the logic is correct.</div><div class="content-p">AI is probabilistic. It does not provide "the" answer; it provides its best guess with a certain level of confidence. Because AI behavior emerges from data rather than explicit instructions, it can handle novel situations that a rule-book might miss. However, this also means it can fail in ways that are much harder to predict.</div><div class="content-p">This difference is why we use a {{CARD|res-ai-vs-automation-decision-tree|classification decision tree}} to determine how to govern a new tool. You do not need a complex bias audit for a simple rule-engine, but you definitely need one for a system that "learns" from historical data.</div><h2 class="content-h2"><span class="heading-decoration"></span>The "Robotic" Confusion</h2><div class="content-p">You might wonder why {{CARD|concept-rpa-vs-ai|Robotic Process Automation (RPA)}} is often discussed alongside AI. Despite the name, traditional RPA is pure automation. It is essentially a software script that mimics human clicks to move data between spreadsheets and forms.</div><div class="content-p">Think of it this way: RPA takes the "robot" out of the human by handling the dreary, repetitive tasks. It only becomes "intelligent automation" when we add an AI component—like using machine learning to read a handwritten form before the RPA bot copies the data. For governance, it is vital to identify which parts of your process are following fixed rules and which parts are making inferences.</div><h2 class="content-h2"><span class="heading-decoration"></span>Why This Matters for Your Strategy</h2><div class="content-p">Mislabeling automation as AI can lead to "AI washing," where capabilities are exaggerated to stakeholders. More importantly, it creates a governance gap. Automation risks usually stem from simple logic errors or "brittleness" when a system it depends on changes. AI risks are different; they involve {{CARD|concept-model-drift|model drift}} and hidden biases.</div><div class="content-p">When you evaluate a new initiative, ask your team: "Does this system learn from data, or does it follow a set of instructions we provided?" By getting the label right, you can match your oversight to the actual risk. Now that we understand the difference between rules and learning, we are ready to look at the most important part of any AI system: the data it uses to learn those patterns.</div><div class="content-p"><i>Analogy: Automation is like a train following a fixed track; it is fast and efficient, but it can only go where the rails are laid. AI is more like a driver in a car; it can navigate new roads and handle obstacles, but it requires much more constant monitoring to ensure it stays on the right path.</i></div>`,
  keyLearnings: [
    'Automation follows explicit "if-then" rules written by humans, making it deterministic and predictable.',
    'AI learns patterns from data and makes probabilistic predictions, which can handle novel situations but also fail unpredictably.',
    'RPA (Robotic Process Automation) is pure automation unless combined with AI components like machine learning or OCR.',
    'Model drift occurs when real-world data patterns change over time, degrading AI performance without continuous monitoring.',
    'Proper classification of systems as AI vs automation is essential for matching governance oversight to actual risk levels.'
  ],
  additionalResources: [
    'UiPath - Introduction to RPA and Intelligent Automation',
    'Gartner - AI vs Automation: Classification Framework',
    'MIT Sloan - Model Drift Detection and Mitigation Strategies',
    'IEEE - Standards for Autonomous and Intelligent Systems',
    'McKinsey - AI Washing: Identifying Genuine AI Capabilities'
  ],
  sources: [
    'OECD (2024). OECD AI Principles - Defining AI Systems',
    'Gartner (2024). Magic Quadrant for Robotic Process Automation',
    'Russell, S., Norvig, P. (2020). Artificial Intelligence: A Modern Approach - Chapter on Learning',
    'MIT (2023). Model Monitoring and Drift Detection Best Practices',
    'European Commission (2024). EU AI Act - Classification of AI Systems vs Traditional Software'
  ]
};

async function uploadArticle() {
  try {
    console.log('Uploading ai-vs-automation article content...');

    const result = await sql`
      UPDATE articles
      SET yaml_content = ${JSON.stringify(articleContent)},
          status = 'published',
          updated_at = NOW()
      WHERE slug = 'ai-vs-automation'
      RETURNING article_id, slug, title
    `;

    console.log('Article uploaded successfully:', result[0]);
  } catch (error) {
    console.error('Error uploading article:', error);
    throw error;
  }
}

uploadArticle();
