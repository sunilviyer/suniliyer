import { getCardsByArticle } from '@/lib/db';
import { ArticlePageWrapper } from '@/components/articles/ArticlePageWrapper';
import { InlineContextCard } from '@/components/articles/InlineContextCard';
import { KeyLearnings } from '@/components/articles/KeyLearnings';
import { Accordion } from '@/components/articles/Accordion';

export default async function AIHistoryArticle() {
  // Fetch cards from database
  const cards = await getCardsByArticle('ai-history');

  return (
    <ArticlePageWrapper
      path="history"
      pathTitle="History"
      articleTitle="AI History: Dartmouth to DeepMind"
      tldr="The history of AI is cyclical, defined by 'AI Winters' where overpromising led to drops in funding. Understanding this history helps manage expectations and build systems that outlast hype cycles."
      tags={['AI History', 'Milestones', 'AI Winter']}
      readTime="8 min read"
      updatedDate="January 2025"
      headerImage="/images/articles/ai-history-timeline-f.webp"
      currentIndex={8}
      totalArticles={8}
      prevArticle={{
        slug: '/articles/large-language-models',
        title: 'Large Language Models'
      }}
      cards={cards}
    >
      <AIHistoryContent />
    </ArticlePageWrapper>
  );
}

function AIHistoryContent() {
  return (
    <>
      {/* Main Content */}
      <h2 className="content-h2">
        <span className="heading-decoration" />
        The Summer of Great Expectations
      </h2>

      <div className="content-p">
        Imagine thinking you could solve the entire mystery of intelligence in just two months. In the summer of 1956, a small group of scientists gathered at{' '}
        <InlineContextCard cardId="ms-dartmouth-workshop" trigger="Dartmouth College" />{' '}
        with exactly that plan. They believed that every aspect of learning could be described so precisely that a machine could simulate it. While they were spectacularly wrong about the timeline—we are still working on it seven decades later—that workshop gave the field its name: Artificial Intelligence.
      </div>

      <div className="content-p">
        Think of it this way: AI wasn&apos;t born from a slow, steady climb. It was born from a burst of wild optimism. Early pioneers like Arthur Samuel built a checkers program that could beat its creator, and optimism ran so high that some predicted machines would do any work a man could do within twenty years.
      </div>

      <h2 className="content-h2">
        <span className="heading-decoration" />
        The Seasons of AI: Understanding the Winters
      </h2>

      <div className="content-p">
        When technology fails to meet grand promises, reality often bites back. By the early 1970s, the British government released the{' '}
        <InlineContextCard cardId="ms-lighthill-report" trigger="Lighthill Report" />, which concluded that AI research had fundamentally failed to deliver. Funding plummeted, and the first &quot;AI Winter&quot; began. A second winter followed in the late 1980s when &quot;expert systems&quot;—tools that tried to hard-code human expertise—proved too brittle and expensive to maintain.
      </div>

      <div className="content-p">
        Here is the key insight: For a governance professional, these winters are a cautionary tale. History shows us that overpromising leads to underfunding. When we manage AI today, we must distinguish between real capabilities and the &quot;marketing release&quot; hype to ensure we don&apos;t trigger another cycle of disappointment.
      </div>

      <h2 className="content-h2">
        <span className="heading-decoration" />
        From Games to Modern Intelligence
      </h2>

      <div className="content-p">
        The thaw of the modern era began with benchmarks that the whole world could see. In 1997, IBM&apos;s Deep Blue defeated a world chess champion, but it did so through sheer &quot;brute force&quot; calculation rather than learning. The real shift toward the intelligence we see today happened in 2012. A neural network called{' '}
        <InlineContextCard cardId="ms-alexnet-imagenet" trigger="AlexNet" />{' '}
        won a major image recognition challenge by a staggering margin, proving that deep learning could finally work if you had enough data and powerful hardware.
      </div>

      <div className="content-p">
        Perhaps the most profound moment for modern intuition was the{' '}
        <InlineContextCard cardId="ex-deepmind-alphago" trigger="AlphaGo victory" />{' '}
        in 2016. Unlike previous systems, AlphaGo didn&apos;t just follow rules; it taught itself by playing millions of games against itself. It made moves so unconventional that human experts initially thought the machine had made a mistake. It was a clear sign that AI had moved from &quot;calculating&quot; to &quot;learning patterns&quot; at a level we could no longer easily predict.
      </div>

      <h2 className="content-h2">
        <span className="heading-decoration" />
        Why History Is Your Map
      </h2>

      <div className="content-p">
        As we conclude our look at the foundations of AI, you might wonder why this history matters for your current strategy. It matters because we are currently living through the most significant boom in the field&apos;s history, triggered by the{' '}
        <InlineContextCard cardId="ms-chatgpt-release" trigger="release of ChatGPT" />{' '}
        in 2022. This explosion of interest has brought back the same level of excitement we saw in 1956.
      </div>

      <div className="content-p">
        By understanding where we came from, you can lead with perspective. You can recognize that while the current capabilities are real, our tendency toward overconfidence is also a historical pattern. Governance serves as the steady hand that allows your organization to capture the benefits of these breakthroughs while building the structures—risk management, oversight, and culture—that will outlast the current cycle of hype.
      </div>

      <AIHistoryFooter />
    </>
  );
}

function AIHistoryFooter() {
  return (
    <>
      {/* Key Learnings */}
      <KeyLearnings
        learnings={[
          'The Dartmouth Workshop (1956) marked the birth of AI as a formal field, driven by optimistic predictions that proved premature.',
          'AI Winters occurred when overpromising led to funding cuts—first after the Lighthill Report (1973), then again in the late 1980s.',
          'AlexNet\'s 2012 ImageNet victory demonstrated that deep learning could work at scale with sufficient data and computing power.',
          'AlphaGo\'s 2016 defeat of Lee Sedol showed AI had evolved from brute-force calculation to genuine pattern learning.',
          'The ChatGPT release (2022) triggered the current AI boom, echoing historical cycles of excitement that governance must navigate carefully.'
        ]}
      />

      {/* Accordions */}
      <div style={{ marginTop: '60px' }}>
        <div style={{ marginTop: '20px' }}>
          <Accordion title="Additional Resources">
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Pamela McCorduck - Machines Who Think: A Personal Inquiry into the History and Prospects of AI</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Daniel Crevier - AI: The Tumultuous History of the Search for Artificial Intelligence</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>The Lighthill Report (1973) - Full Text and Analysis</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>DeepMind - AlphaGo Documentary (2017)</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0' }}>OpenAI - The Story Behind ChatGPT</li>
            </ul>
          </Accordion>
        </div>

        <div style={{ marginTop: '20px' }}>
          <Accordion title="Sources & References">
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>McCarthy, J., Minsky, M., Rochester, N., Shannon, C. (1955). A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Lighthill, J. (1973). Artificial Intelligence: A General Survey - Science Research Council Report</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Krizhevsky, A., Sutskever, I., Hinton, G. (2012). ImageNet Classification with Deep Convolutional Neural Networks</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Silver, D., et al. (2016). Mastering the game of Go with deep neural networks and tree search - Nature</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0' }}>OpenAI (2022). ChatGPT: Optimizing Language Models for Dialogue</li>
            </ul>
          </Accordion>
        </div>
      </div>
    </>
  );
}
