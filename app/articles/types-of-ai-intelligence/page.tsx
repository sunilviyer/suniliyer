import { getCardsByArticle } from '@/lib/db';
import { ArticlePageWrapper } from '@/components/articles/ArticlePageWrapper';
import { InlineContextCard } from '@/components/articles/InlineContextCard';
import { KeyLearnings } from '@/components/articles/KeyLearnings';
import { Accordion } from '@/components/articles/Accordion';

export default async function TypesOfAIIntelligenceArticle() {
  // Fetch cards from database
  const cards = await getCardsByArticle('types-of-ai-intelligence');

  return (
    <ArticlePageWrapper
      path="history"
      pathTitle="History"
      articleTitle="Types of AI Intelligence"
      tldr="Narrow AI is an exceptional specialist, brilliant at one defined task but incapable of performing others without retraining. Understanding the spectrum from today's specialists to theoretical AGI and ASI helps leaders match governance to actual risk."
      tags={['AI Intelligence', 'AGI', 'Generative AI', 'Business Strategy']}
      readTime="7 min read"
      updatedDate="January 2025"
      headerImage="/images/headercards/history-header.png"
      currentIndex={3}
      totalArticles={8}
      prevArticle={{
        slug: '/articles/ai-family-tree',
        title: 'The AI Family Tree'
      }}
      nextArticle={{
        slug: '/articles/how-machines-learn',
        title: 'How Machines Learn'
      }}
      cards={cards}
    >
      <TypesOfAIIntelligenceContent />
    </ArticlePageWrapper>
  );
}

function TypesOfAIIntelligenceContent() {
  return (
    <>
      {/* Main Content */}
      <h2 className="content-h2">
        <span className="heading-decoration" />
        Beyond the Specialist
      </h2>

      <div className="content-p">
        Think of it this way: when you build a team, you might hire an exceptional accountant who is brilliant with numbers but knows nothing about marketing. In the AI world, we call this a &quot;specialist&quot; approach. As we have seen in our look at The AI Family Tree, almost every system we use today is a highly focused tool designed for a specific boundary.
      </div>

      <div className="content-p">
        Here is the key insight: most of the value AI creates today comes from these specialized systems, but the risks we must govern change fundamentally as these systems become more &quot;general.&quot; To lead effectively, you should understand where your tools sit on the spectrum of intelligence.
      </div>

      <h2 className="content-h2">
        <span className="heading-decoration" />
        Narrow AI: The Exceptional Specialist
      </h2>

      <div className="content-p">
        Every AI tool your organization currently uses—whether it is a spam filter, a recommendation engine, or a fraud detection system—is Narrow AI. These systems are like calculators: they are remarkably fast at one job but entirely helpless at anything else. For example, a system like{' '}
        <InlineContextCard cardId="insight-netflix-personalization-savings" trigger="Netflix's personalization algorithm" />{' '}
        can save a company $1 billion annually by predicting what you want to watch, yet it cannot even begin to schedule a meeting or write a simple email.
      </div>

      <div className="content-p">
        When you evaluate these tools, it is important to remember that their &quot;intelligence&quot; is bounded by their training data. A common governance challenge is ensuring these specialists do not encode human biases. Consider a{' '}
        <InlineContextCard cardId="sc-sarah-loan-denial" trigger="loan denial scenario" />{' '}
        where an AI uses zip codes or shopping patterns as proxies for risk; the system might be accurate, but it could be perpetuating historical discrimination without you realizing it.
      </div>

      <h2 className="content-h2">
        <span className="heading-decoration" />
        The Journey Toward AGI and ASI
      </h2>

      <div className="content-p">
        You might wonder why researchers are so focused on{' '}
        <InlineContextCard cardId="concept-agi" trigger="Artificial General Intelligence (AGI)" />{' '}
        if it does not exist yet. AGI would be like an employee who can learn any task a human can, transferring knowledge from HR to finance to marketing seamlessly. Leading experts like Sam Altman and Geoffrey Hinton believe we could see this transition within the next decade or two.
      </div>

      <div className="content-p">
        Beyond that lies Artificial Superintelligence (ASI), a level of intellect that outthinks human brains in every field, from social skills to complex strategy. For a CEO, ASI wouldn&apos;t just be a tool; it would be a strategic partner capable of redesigning your entire organizational structure. This raises a profound governance question: how do you oversee a system that is significantly smarter than the people managing it?
      </div>

      <div className="content-p">
        To understand this challenge, consider the{' '}
        <InlineContextCard cardId="sc-paperclip-maximizer" trigger="paperclip maximizer dilemma" />. It illustrates how a superintelligent system might pursue a literal goal so effectively that it causes catastrophic unintended consequences, not because it is &quot;evil,&quot; but because it lacks human values.
      </div>

      <h2 className="content-h2">
        <span className="heading-decoration" />
        Creators vs. Classifiers
      </h2>

      <div className="content-p">
        Regardless of the intelligence level, most AI systems fall into two functional camps: Discriminative or Generative. Discriminative AI acts like a screening committee; it looks at data and classifies it—predicting if a transaction is fraud or if an applicant is qualified.
      </div>

      <div className="content-p">
        Generative AI, on the other hand, is a creator. It learns patterns to produce brand-new content like text, images, or code. When your marketing team uses a tool to draft social media posts, they are using generative intelligence. While discriminative AI risks focus on bias, generative AI introduces new concerns regarding authenticity and intellectual property.
      </div>

      <h2 className="content-h2">
        <span className="heading-decoration" />
        Summary and Next Steps
      </h2>

      <div className="content-p">
        I hope you find, as I do, that categorizing AI this way makes it much easier to decide which oversight is necessary. Narrow AI requires technical accuracy and bias checks, while general systems require a much deeper focus on value alignment and safety.
      </div>

      <div className="content-p">
        Now that we have mapped out these levels of intelligence, we are ready to look at the &quot;how&quot; behind the magic. In our next article, How Machines Learn, we will explore the actual training methods that move these systems from random numbers to useful business tools.
      </div>

      <TypesOfAIIntelligenceFooter />
    </>
  );
}

function TypesOfAIIntelligenceFooter() {
  return (
    <>
      {/* Key Learnings */}
      <KeyLearnings
        learnings={[
          'Narrow AI is an exceptional specialist, brilliant at one defined task but incapable of performing others without retraining.',
          'Artificial General Intelligence (AGI) is a theoretical system that can transfer skills across diverse domains at a human level.',
          'Artificial Superintelligence (ASI) represents a level of intellect that surpasses the best human brains in virtually every field.',
          'Discriminative AI focuses on classifying data, while Generative AI focuses on creating novel content.',
          'Governance needs shift from technical accuracy to ethical alignment as systems move from narrow specialists toward autonomous agents.'
        ]}
      />

      {/* Accordions */}
      <div style={{ marginTop: '60px' }}>
        <div style={{ marginTop: '20px' }}>
          <Accordion title="Additional Resources">
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Nick Bostrom - Superintelligence: Paths, Dangers, Strategies</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Stuart Russell - Human Compatible: AI and the Problem of Control</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Sam Altman - AGI Timeline and Safety Considerations</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Geoffrey Hinton - The Future of Deep Learning and General Intelligence</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0' }}>Netflix Technology Blog - Personalization and Recommendation Algorithms</li>
            </ul>
          </Accordion>
        </div>

        <div style={{ marginTop: '20px' }}>
          <Accordion title="Sources & References">
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Bostrom, N. (2014). Superintelligence: Paths, Dangers, Strategies - Oxford University Press</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Russell, S., Norvig, P. (2020). Artificial Intelligence: A Modern Approach (4th Edition)</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Goodfellow, I., Bengio, Y., Courville, A. (2016). Deep Learning - MIT Press</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Netflix (2023). The Netflix Recommender System: Algorithms, Business Value, and Innovation</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0' }}>Altman, S. (2024). Planning for AGI and Beyond - OpenAI Blog</li>
            </ul>
          </Accordion>
        </div>
      </div>
    </>
  );
}
