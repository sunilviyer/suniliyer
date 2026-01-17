import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

const articleContent = {
  tldr: "Understanding the different categories of AI—from the specialized Narrow AI systems we use today to theoretical AGI and ASI—helps leaders match governance oversight to actual risk levels.",
  tags: ['AI Categories', 'AGI', 'AI History'],
  readTime: '7 min read',
  updatedDate: 'January 2025',
  headerImage: '/images/history/ai-family-tree.webp',
  content: `<h2 class="content-h2"><span class="heading-decoration"></span>Specialists vs. Generalists</h2><div class="content-p">Imagine you are building a team for a new project. You could hire a specialist who is the world's leading expert in tax law, or a generalist who can learn law, marketing, and accounting as the need arises. In the world of technology, we are currently living in the era of the specialist. As we discussed in What AI Actually Is, these systems are software tools that make inferences based on patterns.</div><div class="content-p">To understand the path forward, we need to look at how the different branches of this technology grew. For a long time, researchers tried to build "intelligence" by feeding computers thousands of human-written rules. This is often called Symbolic AI. It worked for specific games, such as when {{CARD|ex-deep-blue|Deep Blue defeated Garry Kasparov}} in 1997, but it struggled with the messy, unpredictable nature of the real world.</div><h2 class="content-h2"><span class="heading-decoration"></span>The Limbs of the Tree: Narrow AI</h2><div class="content-p">Every AI system you interact with today—from the facial recognition on your phone to the recommendations on your favorite shopping site—is considered Narrow AI (or Weak AI). Think of it this way: these systems are like exceptional specialists that are brilliant at one job but helpless at anything else. A system trained to detect credit card fraud cannot suddenly decide to write a job description for you.</div><div class="content-p">Here is the key insight: because Narrow AI is bounded, its risks are also bounded. When we evaluate a hiring algorithm, we aren't worried about it "waking up" and taking over the company; we are worried about it learning to discriminate based on biased historical data. This is why most current regulations, like the {{CARD|fw-eu-ai-act|EU AI Act}}, focus on these specific, real-world harms.</div><h2 class="content-h2"><span class="heading-decoration"></span>The Theoretical Frontier: AGI and ASI</h2><div class="content-p">You might wonder why there is so much talk about "Strong AI" or Artificial General Intelligence (AGI) if it doesn't exist yet. AGI refers to a system that could learn any intellectual task a human can, transferring knowledge between domains without being retrained by a human. While the timeline is debated—with experts like Jensen Huang from NVIDIA and Sam Altman suggesting it could arrive within the next decade—it remains a goal rather than a reality.</div><div class="content-p">Beyond AGI lies the most speculative limb: Artificial Superintelligence (ASI). This describes an intellect that is much smarter than the best human brains in practically every field. While this sounds like science fiction, the people building today's models take it seriously because the speed of progress has consistently surpassed predictions.</div><h2 class="content-h2"><span class="heading-decoration"></span>Learning from the Seasons</h2><div class="content-p">The growth of the AI tree hasn't always been steady. In the 1970s, the field entered its first "AI Winter." This period of disappointment followed a devastating assessment known as the Lighthill Report, which concluded that researchers had failed to deliver on their grand promises. Funding plummeted, and laboratories closed.</div><div class="content-p">To understand this history is to understand why we must be careful with hype today. When we overpromise what a "thinking machine" can do, we risk a collapse of interest and funding when reality eventually bites back. Governance serves as the steady hand that helps us navigate these cycles of excitement and disappointment.</div><h2 class="content-h2"><span class="heading-decoration"></span>Why This Matters for Your Strategy</h2><div class="content-p">As a leader, your role is to distinguish between the branch that is providing value today and the one that is still growing. Most of your strategic decisions will involve Narrow AI. You should ask: Is this system a specialist? Does it have a defined purpose? Is it being used within its design parameters?</div><div class="content-p">By categorizing AI this way, you can match your oversight to the actual risk. You don't need a "containment protocol" for a spam filter, but you do need robust bias testing for a high-stakes hiring tool. Now that we've mapped the tree, our next step is to explore the different ways these "intelligence levels" manifest in business operations.</div>`,
  keyLearnings: [
    'Narrow AI acts as a highly specialized tool that cannot transfer its skills to unrelated tasks.',
    'Artificial General Intelligence (AGI) is a theoretical system capable of human-level reasoning across all cognitive domains.',
    'The history of AI is marked by "AI Winters," periods where overhyped expectations led to significant funding cuts.',
    'Symbolic AI relies on human-coded logic rules, while modern Machine Learning discovers its own rules from data.',
    'Effective governance requires distinguishing between existing Narrow AI risks and hypothetical AGI safety concerns.'
  ],
  additionalResources: [
    'Nick Bostrom - Superintelligence: Paths, Dangers, Strategies',
    'Stuart Russell - Human Compatible: AI and the Problem of Control',
    'The Lighthill Report (1973) - SERC AI Research Review',
    'OECD AI Classification Framework - Risk-Based Categorization',
    'Jensen Huang & Sam Altman - Timelines for AGI Development'
  ],
  sources: [
    'Lighthill, J. (1973). Artificial Intelligence: A General Survey - Science Research Council Report',
    'Bostrom, N. (2014). Superintelligence: Paths, Dangers, Strategies - Oxford University Press',
    'Russell, S., Norvig, P. (2020). Artificial Intelligence: A Modern Approach (4th Edition)',
    'IBM (1997). Deep Blue vs. Garry Kasparov - Match Documentation',
    'European Commission (2024). Regulation (EU) 2024/1689 - EU AI Act'
  ]
};

async function uploadArticle() {
  try {
    console.log('Uploading ai-family-tree article content (FIXED VERSION)...');

    const result = await sql`
      UPDATE articles
      SET yaml_content = ${JSON.stringify(articleContent)},
          status = 'published',
          updated_at = NOW()
      WHERE slug = 'ai-family-tree'
      RETURNING article_id, slug, title
    `;

    console.log('Article uploaded successfully:', result[0]);
  } catch (error) {
    console.error('Error uploading article:', error);
    throw error;
  }
}

uploadArticle();
