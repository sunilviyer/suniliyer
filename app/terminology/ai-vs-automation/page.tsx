import { getCardsByArticle } from '@/lib/db';
import { ArticlePageWrapper } from '@/components/articles/ArticlePageWrapper';
import { InlineContextCard } from '@/components/articles/InlineContextCard';
import { KeyLearnings } from '@/components/articles/KeyLearnings';
import { Accordion } from '@/components/articles/Accordion';

export default async function AIvsAutomationArticle() {
  // Fetch cards from database
  const cards = await getCardsByArticle('ai-vs-automation');

  return (
    <ArticlePageWrapper
      path="terminology"
      pathTitle="Terminology"
      articleTitle="AI vs Automation"
      tldr="Automation follows human-written 'if-then' rules, while AI learns to recognize patterns from data. Understanding this distinction is crucial for proper governance and risk management."
      tags={['AI Fundamentals', 'Automation', 'RPA', 'Governance Basics']}
      readTime="8 min read"
      updatedDate="January 2025"
      headerImage="/images/history/ai-vs-automation.webp"
      currentIndex={2}
      totalArticles={8}
      prevArticle={{
        slug: '/articles/ai-technology-stack',
        title: 'The AI Technology Stack'
      }}
      nextArticle={{
        slug: '/articles/data-behind-ai',
        title: 'The Data Behind AI'
      }}
      cards={cards}
    >
      <AIvsAutomationContent />
    </ArticlePageWrapper>
  );
}

function AIvsAutomationContent() {
  return (
    <>
      {/* Main Content */}
      <h2 className="content-h2">
        <span className="heading-decoration" />
        The Tale of Two Systems
      </h2>

      <div className="content-p">
        Think about the last time you set an out-of-office reply on your email. You told the computer: IF an email arrives while I am away, THEN send this specific response. This is a perfect example of automation. It is reliable, predictable, and does exactly what you told it to do—nothing more and nothing less.
      </div>

      <div className="content-p">
        Now, think about your email&apos;s spam filter. No human wrote a rule for every possible spam message. Instead, the system looked at millions of examples to learn what &quot;spammy&quot; patterns look like. This is{' '}
        <InlineContextCard cardId="article-link-what-ai-actually-is" trigger="artificial intelligence" />. Here is the key insight: Automation follows rules we write, but AI discovers patterns we might not even see.
      </div>

      <h2 className="content-h2">
        <span className="heading-decoration" />
        Rules vs. Learning
      </h2>

      <div className="content-p">
        To understand why this distinction matters for leadership, consider how these systems are built. Automation is deterministic. If you give it the same input a thousand times, you will get the exact same output a thousand times. This makes it very easy to audit. You just read the &quot;if-then&quot; code to see if the logic is correct.
      </div>

      <div className="content-p">
        AI is probabilistic. It does not provide &quot;the&quot; answer; it provides its best guess with a certain level of confidence. Because AI behavior emerges from data rather than explicit instructions, it can handle novel situations that a rule-book might miss. However, this also means it can fail in ways that are much harder to predict.
      </div>

      <div className="content-p">
        This difference is why we use a{' '}
        <InlineContextCard cardId="res-ai-vs-automation-decision-tree" trigger="classification decision tree" />{' '}
        to determine how to govern a new tool. You do not need a complex bias audit for a simple rule-engine, but you definitely need one for a system that &quot;learns&quot; from historical data.
      </div>

      <h2 className="content-h2">
        <span className="heading-decoration" />
        The &quot;Robotic&quot; Confusion
      </h2>

      <div className="content-p">
        You might wonder why{' '}
        <InlineContextCard cardId="concept-rpa-vs-ai" trigger="Robotic Process Automation (RPA)" />{' '}
        is often discussed alongside AI. Despite the name, traditional RPA is pure automation. It is essentially a software script that mimics human clicks to move data between spreadsheets and forms.
      </div>

      <div className="content-p">
        Think of it this way: RPA takes the &quot;robot&quot; out of the human by handling the dreary, repetitive tasks. It only becomes &quot;intelligent automation&quot; when we add an AI component—like using machine learning to read a handwritten form before the RPA bot copies the data. For governance, it is vital to identify which parts of your process are following fixed rules and which parts are making inferences.
      </div>

      <h2 className="content-h2">
        <span className="heading-decoration" />
        Why This Matters for Your Strategy
      </h2>

      <div className="content-p">
        Mislabeling automation as AI can lead to &quot;AI washing,&quot; where capabilities are exaggerated to stakeholders. More importantly, it creates a governance gap. Automation risks usually stem from simple logic errors or &quot;brittleness&quot; when a system it depends on changes. AI risks are different; they involve{' '}
        <InlineContextCard cardId="concept-model-drift" trigger="model drift" />{' '}
        and hidden biases.
      </div>

      <div className="content-p">
        When you evaluate a new initiative, ask your team: &quot;Does this system learn from data, or does it follow a set of instructions we provided?&quot; By getting the label right, you can match your oversight to the actual risk. Now that we understand the difference between rules and learning, we are ready to look at the most important part of any AI system: the data it uses to learn those patterns.
      </div>

      <div className="content-p">
        <i>
          Analogy: Automation is like a train following a fixed track; it is fast and efficient, but it can only go where the rails are laid. AI is more like a driver in a car; it can navigate new roads and handle obstacles, but it requires much more constant monitoring to ensure it stays on the right path.
        </i>
      </div>

      <AIvsAutomationFooter />
    </>
  );
}

function AIvsAutomationFooter() {
  return (
    <>
      {/* Key Learnings */}
      <KeyLearnings
        learnings={[
          'Automation follows explicit "if-then" rules written by humans, making it deterministic and predictable.',
          'AI learns patterns from data and makes probabilistic predictions, which can handle novel situations but also fail unpredictably.',
          'RPA (Robotic Process Automation) is pure automation unless combined with AI components like machine learning or OCR.',
          'Model drift occurs when real-world data patterns change over time, degrading AI performance without continuous monitoring.',
          'Proper classification of systems as AI vs automation is essential for matching governance oversight to actual risk levels.'
        ]}
      />

      {/* Accordions */}
      <div style={{ marginTop: '60px' }}>
        <div style={{ marginTop: '20px' }}>
          <Accordion title="Additional Resources">
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>UiPath - Introduction to RPA and Intelligent Automation</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Gartner - AI vs Automation: Classification Framework</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>MIT Sloan - Model Drift Detection and Mitigation Strategies</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>IEEE - Standards for Autonomous and Intelligent Systems</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0' }}>McKinsey - AI Washing: Identifying Genuine AI Capabilities</li>
            </ul>
          </Accordion>
        </div>

        <div style={{ marginTop: '20px' }}>
          <Accordion title="Sources & References">
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>OECD (2024). OECD AI Principles - Defining AI Systems</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Gartner (2024). Magic Quadrant for Robotic Process Automation</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Russell, S., Norvig, P. (2020). Artificial Intelligence: A Modern Approach - Chapter on Learning</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>MIT (2023). Model Monitoring and Drift Detection Best Practices</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0' }}>European Commission (2024). EU AI Act - Classification of AI Systems vs Traditional Software</li>
            </ul>
          </Accordion>
        </div>
      </div>
    </>
  );
}
