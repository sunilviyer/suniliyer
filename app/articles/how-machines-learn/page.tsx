import { getCardsByArticle } from '@/lib/db';
import { ArticlePageWrapper } from '@/components/articles/ArticlePageWrapper';
import { InlineContextCard } from '@/components/articles/InlineContextCard';
import { KeyLearnings } from '@/components/articles/KeyLearnings';
import { Accordion } from '@/components/articles/Accordion';

export default async function HowMachinesLearnArticle() {
  // Fetch cards from database
  const cards = await getCardsByArticle('how-machines-learn');

  return (
    <ArticlePageWrapper
      path="history"
      pathTitle="History"
      articleTitle="How Machines Learn"
      tldr="Machine learning creates software by finding patterns in data instead of following human-written 'if-then' rules. The quality and representativeness of training data determine a model's behavior, making data governance foundational to AI safety."
      tags={['Machine Learning', 'AI Fundamentals', 'Training Methods']}
      readTime="8 min read"
      updatedDate="January 2025"
      headerImage="/images/headercards/history-header.png"
      currentIndex={4}
      totalArticles={8}
      prevArticle={{
        slug: '/articles/types-of-ai-intelligence',
        title: 'Types of AI Intelligence'
      }}
      nextArticle={{
        slug: '/articles/deep-learning-decoded',
        title: 'Deep Learning Decoded'
      }}
      cards={cards}
    >
      <HowMachinesLearnContent />
    </ArticlePageWrapper>
  );
}

function HowMachinesLearnContent() {
  return (
    <>
      {/* Main Content */}
      <h2 className="content-h2">
        <span className="heading-decoration" />
        Learning from Examples, Not Instructions
      </h2>

      <div className="content-p">
        Think about how you learned to recognize a &apos;good&apos; job candidate or a &apos;suspicious&apos; credit card transaction. No one gave you a 500-page manual covering every possible scenario. Instead, you observed thousands of examples, gradually building an intuition for what patterns matter. Here is the key insight: Machine learning works in a very similar way. Instead of a human programmer writing explicit &apos;if-then&apos; rules, we provide data and let the computer discover the patterns itself.
      </div>

      <div className="content-p">
        To understand the roots of this approach, consider the{' '}
        <InlineContextCard cardId="ms-samuel-checkers" trigger="1959 checkers program" />{' '}
        created by Arthur Samuel. It was a breakthrough because the computer didn&apos;t just play by a set of instructions; it played against itself and learned which moves led to victory. Today, we use this same basic logic to power everything from your email&apos;s spam filter to medical diagnosis tools.
      </div>

      <h2 className="content-h2">
        <span className="heading-decoration" />
        The Three Primary Ways Machines Learn
      </h2>

      <div className="content-p">
        Think of it this way: training an AI is like onboarding a new employee. Depending on the task and the resources you have, you might choose one of three different teaching methods.
      </div>

      <h3 className="content-h3">
        1. Supervised Learning: The Answer Key
      </h3>

      <div className="content-p">
        Imagine showing a new HR coordinator 10,000 past hiring decisions: &apos;This candidate was hired. This one wasn&apos;t&apos;. That is supervised learning. We provide the AI with a &apos;labeled&apos; dataset where the correct answer is already known. Through thousands of repetitions, the model learns to associate specific features—like years of experience or technical skills—with the desired outcome.
      </div>

      <h3 className="content-h3">
        2. Unsupervised Learning: Finding Hidden Patterns
      </h3>

      <div className="content-p">
        What if you gave an analyst your entire customer database and said, &apos;Find me the patterns,&apos; without giving them any categories to look for? In unsupervised learning, the AI identifies clusters and relationships on its own. This is how companies discover new customer segments or find unusual transaction patterns that might indicate a new type of fraud.
      </div>

      <h3 className="content-h3">
        3. Reinforcement Learning: Trial and Error
      </h3>

      <div className="content-p">
        Think of how an athlete improves through practice. They try different movements, receive feedback (success or failure), and optimize their behavior to win. This is reinforcement learning. The AI takes an action, receives a &apos;reward&apos; for success or a &apos;penalty&apos; for failure, and learns to maximize its long-term score. A famous example of this is the{' '}
        <InlineContextCard cardId="ex-deepmind-alphago" trigger="AlphaGo victory" />, where the system taught itself to play the game of Go at a superhuman level by playing millions of matches against its own previous versions.
      </div>

      <h2 className="content-h2">
        <span className="heading-decoration" />
        The Role of Data and Governance
      </h2>

      <div className="content-p">
        You might wonder why we spend so much time talking about data if the &apos;learning&apos; happens in the algorithm. Here is the key insight: The model is a compressed representation of its training data. If the training data reflects historical biases—like past hiring decisions that favored one demographic—the AI will learn those biases as if they were valid rules for success.
      </div>

      <div className="content-p">
        This is where{' '}
        <InlineContextCard cardId="concept-feature-engineering" trigger="feature engineering" />{' '}
        becomes critical. It is the process of deciding which characteristics we feed into the model. As a governance leader, you don&apos;t need to know how to write the code, but you must ask: &apos;What data did we use? How was it labeled? And what are we rewarding the system for achieving?&apos;. Understanding these fundamentals is your first step toward building AI systems that are not just powerful, but also fair and reliable.
      </div>

      <div className="content-p">
        With these learning methods in mind, we can now look &apos;under the hood&apos; to see the specific structures, called neural networks, that make this complex pattern recognition possible.
      </div>

      <HowMachinesLearnFooter />
    </>
  );
}

function HowMachinesLearnFooter() {
  return (
    <>
      {/* Key Learnings */}
      <KeyLearnings
        learnings={[
          'Machine learning creates software by finding patterns in data instead of following human-written \'if-then\' rules.',
          'Supervised learning requires a pre-labeled \'answer key\' to teach models how to associate inputs with correct outputs.',
          'Unsupervised learning discovers hidden structures and groupings in data without human guidance or pre-existing labels.',
          'Reinforcement learning optimizes behavior through a system of rewards and penalties, similar to how an athlete learns through practice.',
          'The quality and representativeness of training data determine a model\'s behavior, making data governance foundational to AI safety.'
        ]}
      />

      {/* Accordions */}
      <div style={{ marginTop: '60px' }}>
        <div style={{ marginTop: '20px' }}>
          <Accordion title="Additional Resources">
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Arthur Samuel - Some Studies in Machine Learning Using the Game of Checkers (1959)</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Tom Mitchell - Machine Learning (1997) - McGraw-Hill</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Andrew Ng - Machine Learning Course - Stanford/Coursera</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>DeepMind - AlphaGo Documentary (2017)</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0' }}>Pedro Domingos - The Master Algorithm: How the Quest for the Ultimate Learning Machine Will Remake Our World</li>
            </ul>
          </Accordion>
        </div>

        <div style={{ marginTop: '20px' }}>
          <Accordion title="Sources & References">
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Samuel, A. L. (1959). Some Studies in Machine Learning Using the Game of Checkers - IBM Journal</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Silver, D., et al. (2016). Mastering the game of Go with deep neural networks and tree search - Nature</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Goodfellow, I., Bengio, Y., Courville, A. (2016). Deep Learning - MIT Press</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Mitchell, T. M. (1997). Machine Learning - McGraw-Hill</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0' }}>Sutton, R. S., Barto, A. G. (2018). Reinforcement Learning: An Introduction (2nd Edition) - MIT Press</li>
            </ul>
          </Accordion>
        </div>
      </div>
    </>
  );
}
