import { neon } from '@neondatabase/serverless';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const envFile = readFileSync(resolve(process.cwd(), '.env.local'), 'utf-8');
const dbUrlMatch = envFile.match(/DATABASE_URL=["']?([^"'\n]+)["']?/);
if (!dbUrlMatch) {
  throw new Error('DATABASE_URL not found in .env.local');
}
const DATABASE_URL = dbUrlMatch[1];

const sql = neon(DATABASE_URL);

async function createCard() {
  try {
    const cardData = {
      card_id: 'concept-socio-technical-failure',
      card_type: 'concept',
      title: 'Socio-Technical Failure',
      trigger_text: 'socio-technical system',
      summary: 'AI systems exist within a social and organizational context. Failures often arise not from the technology alone, but from how it interacts with human decisions, organizational processes, and real-world complexity.',
      status: 'published',
      used_in_articles: ['what-ai-actually-is'],
      full_content: {
        definition: 'A socio-technical system is one where technology and human/organizational elements are deeply intertwined. In AI systems, failures frequently occur at the intersection of technical capabilities and human context—not just from algorithmic errors.',
        plain_english: 'An AI might work perfectly in the lab but fail in the real world because it doesn\'t account for how people actually use it, organizational constraints, or social dynamics.',
        category: 'systems-thinking',
        related_terms: [
          'Systems thinking',
          'Human-in-the-loop',
          'Organizational context',
          'Deployment environment'
        ],
        examples: [
          'A hiring algorithm trained on historical data that reflects past discrimination',
          'A chatbot that works in testing but fails when users ask unexpected questions',
          'An automated decision system that doesn\'t account for edge cases in real-world data'
        ],
        why_it_matters: 'Understanding AI as socio-technical systems means governance must address not just the algorithm, but training data quality, deployment context, user interaction, organizational oversight, and feedback mechanisms.',
        symptoms: [
          'System works in development but fails in production',
          'Unexpected user behavior breaks assumptions',
          'Organizational processes don\'t align with system design',
          'Failure to account for edge cases or changing environments'
        ],
        mitigation: [
          'Include diverse stakeholders in design and testing',
          'Test systems in realistic deployment scenarios',
          'Establish feedback loops between users and developers',
          'Monitor for drift between training and production environments',
          'Design organizational processes that account for system limitations'
        ],
        tags: ['Systems Thinking', 'AI Governance', 'Failure Modes', 'Deployment']
      }
    };

    await sql`
      INSERT INTO cards (
        card_id,
        card_type,
        title,
        trigger_text,
        summary,
        status,
        used_in_articles,
        full_content
      ) VALUES (
        ${cardData.card_id},
        ${cardData.card_type},
        ${cardData.title},
        ${cardData.trigger_text},
        ${cardData.summary},
        ${cardData.status},
        ${cardData.used_in_articles},
        ${JSON.stringify(cardData.full_content)}
      )
    `;

    console.log('✅ Created card: concept-socio-technical-failure');
    console.log('   Type: concept');
    console.log('   Status: published');
    console.log('   Used in: what-ai-actually-is');

  } catch (error) {
    console.error('❌ Error creating card:', error);
    throw error;
  }
}

createCard();
