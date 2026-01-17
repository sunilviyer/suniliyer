import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

const articleContent = {
  tldr: "The history of AI is cyclical, defined by 'AI Winters' where overpromising led to drops in funding. Understanding this history helps manage expectations and build systems that outlast hype cycles.",
  tags: ['AI History', 'Milestones', 'AI Winter'],
  readTime: '8 min read',
  updatedDate: 'January 2025',
  headerImage: '/images/history/ai-history-timeline-f.webp',
  content: `<h2 class="content-h2"><span class="heading-decoration"></span>The Summer of Great Expectations</h2><div class="content-p">Imagine thinking you could solve the entire mystery of intelligence in just two months. In the summer of 1956, a small group of scientists gathered at {{CARD|ms-dartmouth-workshop|Dartmouth College}} with exactly that plan. They believed that every aspect of learning could be described so precisely that a machine could simulate it. While they were spectacularly wrong about the timeline—we are still working on it seven decades later—that workshop gave the field its name: Artificial Intelligence.</div><div class="content-p">Think of it this way: AI wasn't born from a slow, steady climb. It was born from a burst of wild optimism. Early pioneers like Arthur Samuel built a checkers program that could beat its creator, and optimism ran so high that some predicted machines would do any work a man could do within twenty years.</div><h2 class="content-h2"><span class="heading-decoration"></span>The Seasons of AI: Understanding the Winters</h2><div class="content-p">When technology fails to meet grand promises, reality often bites back. By the early 1970s, the British government released the {{CARD|ms-lighthill-report|Lighthill Report}}, which concluded that AI research had fundamentally failed to deliver. Funding plummeted, and the first "AI Winter" began. A second winter followed in the late 1980s when "expert systems"—tools that tried to hard-code human expertise—proved too brittle and expensive to maintain.</div><div class="content-p">Here is the key insight: For a governance professional, these winters are a cautionary tale. History shows us that overpromising leads to underfunding. When we manage AI today, we must distinguish between real capabilities and the "marketing release" hype to ensure we don't trigger another cycle of disappointment.</div><h2 class="content-h2"><span class="heading-decoration"></span>From Games to Modern Intelligence</h2><div class="content-p">The thaw of the modern era began with benchmarks that the whole world could see. In 1997, IBM's Deep Blue defeated a world chess champion, but it did so through sheer "brute force" calculation rather than learning. The real shift toward the intelligence we see today happened in 2012. A neural network called {{CARD|ms-alexnet-imagenet|AlexNet}} won a major image recognition challenge by a staggering margin, proving that deep learning could finally work if you had enough data and powerful hardware.</div><div class="content-p">Perhaps the most profound moment for modern intuition was the {{CARD|ex-deepmind-alphago|AlphaGo victory}} in 2016. Unlike previous systems, AlphaGo didn't just follow rules; it taught itself by playing millions of games against itself. It made moves so unconventional that human experts initially thought the machine had made a mistake. It was a clear sign that AI had moved from "calculating" to "learning patterns" at a level we could no longer easily predict.</div><h2 class="content-h2"><span class="heading-decoration"></span>Why History Is Your Map</h2><div class="content-p">As we conclude our look at the foundations of AI, you might wonder why this history matters for your current strategy. It matters because we are currently living through the most significant boom in the field's history, triggered by the {{CARD|ms-chatgpt-release|release of ChatGPT}} in 2022. This explosion of interest has brought back the same level of excitement we saw in 1956.</div><div class="content-p">By understanding where we came from, you can lead with perspective. You can recognize that while the current capabilities are real, our tendency toward overconfidence is also a historical pattern. Governance serves as the steady hand that allows your organization to capture the benefits of these breakthroughs while building the structures—risk management, oversight, and culture—that will outlast the current cycle of hype.</div>`,
  keyLearnings: [
    'The Dartmouth Workshop (1956) marked the birth of AI as a formal field, driven by optimistic predictions that proved premature.',
    'AI Winters occurred when overpromising led to funding cuts—first after the Lighthill Report (1973), then again in the late 1980s.',
    "AlexNet's 2012 ImageNet victory demonstrated that deep learning could work at scale with sufficient data and computing power.",
    "AlphaGo's 2016 defeat of Lee Sedol showed AI had evolved from brute-force calculation to genuine pattern learning.",
    'The ChatGPT release (2022) triggered the current AI boom, echoing historical cycles of excitement that governance must navigate carefully.'
  ],
  additionalResources: [
    'Pamela McCorduck - Machines Who Think: A Personal Inquiry into the History and Prospects of AI',
    'Daniel Crevier - AI: The Tumultuous History of the Search for Artificial Intelligence',
    'The Lighthill Report (1973) - Full Text and Analysis',
    'DeepMind - AlphaGo Documentary (2017)',
    'OpenAI - The Story Behind ChatGPT'
  ],
  sources: [
    'McCarthy, J., Minsky, M., Rochester, N., Shannon, C. (1955). A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence',
    'Lighthill, J. (1973). Artificial Intelligence: A General Survey - Science Research Council Report',
    'Krizhevsky, A., Sutskever, I., Hinton, G. (2012). ImageNet Classification with Deep Convolutional Neural Networks',
    'Silver, D., et al. (2016). Mastering the game of Go with deep neural networks and tree search - Nature',
    'OpenAI (2022). ChatGPT: Optimizing Language Models for Dialogue'
  ]
};

async function uploadArticle() {
  try {
    console.log('Uploading ai-history article content...');

    const result = await sql`
      UPDATE articles
      SET yaml_content = ${JSON.stringify(articleContent)},
          status = 'published',
          updated_at = NOW()
      WHERE slug = 'what-ai-actually-is'
      RETURNING article_id, slug, title
    `;

    console.log('Article uploaded successfully:', result[0]);
  } catch (error) {
    console.error('Error uploading article:', error);
    throw error;
  }
}

uploadArticle();
