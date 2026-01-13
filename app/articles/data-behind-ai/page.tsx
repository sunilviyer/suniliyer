import { getCardsByArticle } from '@/lib/db';
import { ArticlePageWrapper } from '@/components/articles/ArticlePageWrapper';
import { InlineContextCard } from '@/components/articles/InlineContextCard';
import { KeyLearnings } from '@/components/articles/KeyLearnings';
import { Accordion } from '@/components/articles/Accordion';

export default async function DataBehindAIArticle() {
  // Fetch cards from database
  const cards = await getCardsByArticle('data-behind-ai');

  return (
    <ArticlePageWrapper
      path="terminology"
      pathTitle="Terminology"
      articleTitle="The Data Behind AI"
      tldr="Data is the foundation of AI; model behavior is a direct reflection of the patterns found in its training data. Understanding data quality, bias, and provenance is essential for responsible AI deployment."
      tags={['Training Data', 'Data Quality', 'Bias Mitigation']}
      readTime="8 min read"
      updatedDate="January 2025"
      headerImage="/images/history/data-behind-ai.webp"
      currentIndex={3}
      totalArticles={8}
      prevArticle={{
        slug: '/articles/ai-vs-automation',
        title: 'AI vs Automation'
      }}
      nextArticle={{
        slug: '/articles/foundation-models',
        title: 'Foundation Models'
      }}
      cards={cards}
    >
      <DataBehindAIContent />
    </ArticlePageWrapper>
  );
}

function DataBehindAIContent() {
  return (
    <>
      {/* Main Content */}
      <h2 className="content-h2">
        <span className="heading-decoration" />
        The Foundation of the AI House
      </h2>

      <div className="content-p">
        Think about how you learned to recognize a &lsquo;good&rsquo; employee or a &lsquo;fair&rsquo; deal. You didn&apos;t just read a manual; you observed thousands of interactions over many years. Here is the key insight: AI systems learn in much the same way. While traditional software follows rules we write, AI behavior is determined by the data it &lsquo;observes&rsquo; during training.
      </div>

      <div className="content-p">
        Think of it this way: the AI model is essentially a compressed representation of its{' '}
        <InlineContextCard cardId="article-link-how-machines-learn" trigger="training data" />. If you build a house on a shaky foundation, the whole structure is unstable. In the world of AI, that foundation is your data. If the data is flawed, the AI doesn&apos;t just fail; it learns those flaws and applies them to every decision it makes at scale.
      </div>

      <h2 className="content-h2">
        <span className="heading-decoration" />
        Data In, Behavior Out
      </h2>

      <div className="content-p">
        You may have heard the phrase &lsquo;Garbage In, Garbage Out.&rsquo; In AI, we use a stronger version: &lsquo;Data In, Behavior Out&rsquo;. Because AI detects statistical patterns rather than following fixed logic, every error or bias in your dataset becomes a potential pattern in the model&apos;s behavior.
      </div>

      <div className="content-p">
        To understand this, consider the{' '}
        <InlineContextCard cardId="ex-amazon-hiring" trigger="Amazon hiring bias incident" />. The engineers didn&apos;t program the system to be sexist; the model simply learned from a decade of historical data where men were disproportionately hired. The AI wasn&apos;t broken—it was doing exactly what it was trained to do: replicate the patterns of the past.
      </div>

      <h2 className="content-h2">
        <span className="heading-decoration" />
        The Dimensions of Quality
      </h2>

      <div className="content-p">
        When we talk about &lsquo;good&rsquo; data, we aren&apos;t just talking about it being &lsquo;clean.&rsquo; High-quality data for AI must be assessed across several dimensions. Accuracy is the baseline—are the values correct?. But Completeness and Representativeness are equally vital.
      </div>

      <div className="content-p">
        If your data is accurate but only represents a narrow slice of the population, your AI will have &lsquo;blind spots&rsquo;. For instance, a facial recognition system trained primarily on lighter skin tones will systematically fail on darker skin tones, not because the math is wrong, but because the{' '}
        <InlineContextCard cardId="concept-representation-bias" trigger="representation bias" />{' '}
        in the data prevented it from learning the necessary patterns.
      </div>

      <h2 className="content-h2">
        <span className="heading-decoration" />
        Provenance: Knowing Your Ingredients
      </h2>

      <div className="content-p">
        Would you eat a meal if you had no idea where the ingredients came from? Probably not. Similarly, you shouldn&apos;t deploy an AI if you don&apos;t know the &lsquo;provenance&rsquo; of its data. Data provenance is the documented history of where your data originated, how it was cleaned, and who handled it.
      </div>

      <div className="content-p">
        Standardized tools like{' '}
        <InlineContextCard cardId="res-datasheets-for-datasets" trigger="Datasheets for Datasets" />{' '}
        help bridge this transparency gap by recording the motivation, composition, and collection process of a dataset. This documentation is essential for accountability; you cannot explain an AI&apos;s decision if you cannot explain the information it used to learn.
      </div>

      <h2 className="content-h2">
        <span className="heading-decoration" />
        The Practical Takeaway
      </h2>

      <div className="content-p">
        As you lead AI initiatives, remember that most AI failures are actually data failures in disguise. Before investing in more powerful algorithms, you should ask your teams these three questions:
      </div>

      <ul className="content-ul">
        <li>Where did this data come from? (Legal basis and provenance).</li>
        <li>Does it represent the people we serve today? (Representativeness).</li>
        <li>What patterns of the past are we accidentally teaching it? (Historical bias).</li>
      </ul>

      <div className="content-p">
        By focusing on the data first, you ensure that your AI is built on a foundation of quality and fairness. In our next article, we will look at Foundation Models to see how these massive datasets are used to create the &lsquo;all-purpose&rsquo; AI tools we use today.
      </div>

      <DataBehindAIFooter />
    </>
  );
}

function DataBehindAIFooter() {
  return (
    <>
      {/* Key Learnings */}
      <KeyLearnings
        learnings={[
          'AI behavior is determined by training data patterns, not explicit programming—making data quality the foundation of responsible AI.',
          'The Amazon hiring bias case demonstrated how AI systems can learn and replicate historical biases present in training data.',
          'High-quality AI data requires accuracy, completeness, and representativeness across all populations that will be affected.',
          'Representation bias occurs when training data inadequately represents certain populations, creating systematic blind spots.',
          'Data provenance documentation (like Datasheets for Datasets) is essential for transparency, accountability, and explaining AI decisions.'
        ]}
      />

      {/* Accordions */}
      <div style={{ marginTop: '60px' }}>
        <div style={{ marginTop: '20px' }}>
          <Accordion title="Additional Resources">
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Google AI - Data Quality Guidelines for Machine Learning</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>MIT - Dataset Nutrition Label Framework</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Microsoft Research - Datasheets for Datasets Template</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Stanford HAI - Data and Its Discontents: Responsible Data Practices</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0' }}>NIST - AI Risk Management Framework - Data Quality Dimension</li>
            </ul>
          </Accordion>
        </div>

        <div style={{ marginTop: '20px' }}>
          <Accordion title="Sources & References">
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Dastin, J. (2018). Amazon scraps secret AI recruiting tool that showed bias against women - Reuters</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Gebru, T., et al. (2018). Datasheets for Datasets - arXiv:1803.09010</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Buolamwini, J., Gebru, T. (2018). Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0', borderBottom: '1px solid rgba(26, 26, 26, 0.06)' }}>Sambasivan, N., et al. (2021). Everyone wants to do the model work, not the data work - CHI 2021</li>
              <li style={{ fontFamily: 'Crimson Pro, Georgia, serif', fontSize: '17px', lineHeight: '1.7', padding: '12px 0' }}>NIST (2023). Artificial Intelligence Risk Management Framework - Data Quality Considerations</li>
            </ul>
          </Accordion>
        </div>
      </div>
    </>
  );
}
