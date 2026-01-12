import { getCardsByArticle } from '@/lib/db';
import { ArticlePageWrapper } from '@/components/articles/ArticlePageWrapper';
import { InlineContextCard } from '@/components/articles/InlineContextCard';

export default async function AIFamilyTreePage() {
  // Fetch cards from database
  const cards = await getCardsByArticle('ai-family-tree');

  return (
    <ArticlePageWrapper
      path="history"
      pathTitle="History"
      articleTitle="The AI Family Tree"
      tldr="Understanding the different categories of AI—from the specialized Narrow AI systems we use today to theoretical AGI and ASI—helps leaders match governance oversight to actual risk levels."
      tags={['AI Categories', 'AGI', 'AI History']}
      readTime="7 min read"
      updatedDate="January 2025"
      headerImage="/images/headercards/history-header.png"
      currentIndex={2}
      totalArticles={8}
      prevArticle={{
        slug: '/articles/what-ai-actually-is',
        title: 'What AI Actually Is'
      }}
      nextArticle={{
        slug: '/articles/types-of-ai-intelligence',
        title: 'Types of AI Intelligence'
      }}
      cards={cards}
    >
      <AIFamilyTreeContent />
    </ArticlePageWrapper>
  );
}

function AIFamilyTreeContent() {
  return (
    <>
      {/* Main Content */}
      <h2 className="content-h2">
        <span className="heading-decoration" />
        Specialists vs. Generalists
      </h2>

      <div className="content-p">
        Imagine you are building a team for a new project. You could hire a specialist who is the world&apos;s leading expert in tax law, or a generalist who can learn law, marketing, and accounting as the need arises. In the world of technology, we are currently living in the era of the specialist. As we discussed in What AI Actually Is, these systems are software tools that make inferences based on patterns.
      </div>

      <div className="content-p">
        To understand the path forward, we need to look at how the different branches of this technology grew. For a long time, researchers tried to build &quot;intelligence&quot; by feeding computers thousands of human-written rules. This is often called Symbolic AI. It worked for specific games, such as when{' '}
        <InlineContextCard cardId="ex-deep-blue" trigger="Deep Blue defeated Garry Kasparov" />{' '}
        in 1997, but it struggled with the messy, unpredictable nature of the real world.
      </div>

      <h2 className="content-h2">
        <span className="heading-decoration" />
        The Limbs of the Tree: Narrow AI
      </h2>

      <div className="content-p">
        Every AI system you interact with today—from the facial recognition on your phone to the recommendations on your favorite shopping site—is considered Narrow AI (or Weak AI). Think of it this way: these systems are like exceptional specialists that are brilliant at one job but helpless at anything else. A system trained to detect credit card fraud cannot suddenly decide to write a job description for you.
      </div>

      <div className="content-p">
        Here is the key insight: because Narrow AI is bounded, its risks are also bounded. When we evaluate a hiring algorithm, we aren&apos;t worried about it &quot;waking up&quot; and taking over the company; we are worried about it learning to discriminate based on biased historical data. This is why most current regulations, like the{' '}
        <InlineContextCard cardId="fw-eu-ai-act" trigger="EU AI Act" />, focus on these specific, real-world harms.
      </div>

      <h2 className="content-h2">
        <span className="heading-decoration" />
        The Theoretical Frontier: AGI and ASI
      </h2>

      <div className="content-p">
        You might wonder why there is so much talk about &quot;Strong AI&quot; or Artificial General Intelligence (AGI) if it doesn&apos;t exist yet. AGI refers to a system that could learn any intellectual task a human can, transferring knowledge between domains without being retrained by a human. While the timeline is debated—with experts like Jensen Huang from NVIDIA and Sam Altman suggesting it could arrive within the next decade—it remains a goal rather than a reality.
      </div>

      <div className="content-p">
        Beyond AGI lies the most speculative limb: Artificial Superintelligence (ASI). This describes an intellect that is much smarter than the best human brains in practically every field. While this sounds like science fiction, the people building today&apos;s models take it seriously because the speed of progress has consistently surpassed predictions.
      </div>

      <h2 className="content-h2">
        <span className="heading-decoration" />
        Learning from the Seasons
      </h2>

      <div className="content-p">
        The growth of the AI tree hasn&apos;t always been steady. In the 1970s, the field entered its first &quot;AI Winter.&quot; This period of disappointment followed a devastating assessment known as the Lighthill Report, which concluded that researchers had failed to deliver on their grand promises. Funding plummeted, and laboratories closed.
      </div>

      <div className="content-p">
        To understand this history is to understand why we must be careful with hype today. When we overpromise what a &quot;thinking machine&quot; can do, we risk a collapse of interest and funding when reality eventually bites back. Governance serves as the steady hand that helps us navigate these cycles of excitement and disappointment.
      </div>

      <h2 className="content-h2">
        <span className="heading-decoration" />
        Why This Matters for Your Strategy
      </h2>

      <div className="content-p">
        As a leader, your role is to distinguish between the branch that is providing value today and the one that is still growing. Most of your strategic decisions will involve Narrow AI. You should ask: Is this system a specialist? Does it have a defined purpose? Is it being used within its design parameters?
      </div>

      <div className="content-p">
        By categorizing AI this way, you can match your oversight to the actual risk. You don&apos;t need a &quot;containment protocol&quot; for a spam filter, but you do need robust bias testing for a high-stakes hiring tool. Now that we&apos;ve mapped the tree, our next step is to explore the different ways these &quot;intelligence levels&quot; manifest in business operations.
      </div>
    </>
  );
}
