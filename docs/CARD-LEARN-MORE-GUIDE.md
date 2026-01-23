# Card Learn More Feature Guide

## Overview

The `learn_more` column in the cards table allows concept cards (and other card types) to link to detailed articles for deeper learning. When a card has a `learn_more` value, the UI will display a "Learn More" button that navigates users to the specified article.

---

## Database Schema

**Column Name:** `learn_more`
**Type:** TEXT
**Nullable:** Yes
**Purpose:** Store article slug for "Learn More" navigation

---

## Usage

### Format

The `learn_more` field should contain the **article slug** (not the full URL):

```sql
UPDATE cards
SET learn_more = 'the-ai-family-tree'
WHERE card_id = 'concept-symbolic-ai';
```

**NOT this:**
```sql
-- ❌ Wrong - Don't use full paths
learn_more = '/articles/the-ai-family-tree'
learn_more = 'https://suniliyer.ca/articles/the-ai-family-tree'

-- ✅ Correct - Just the slug
learn_more = 'the-ai-family-tree'
```

---

## UI Behavior

### When `learn_more` is Present

The card will display a "Learn More" button that:
- Navigates to `/articles/{learn_more}`
- Opens in same tab (can be configured for new tab)
- Shows icon: 📖 or 📚 or →

### When `learn_more` is NULL or Empty

No "Learn More" button is displayed.

---

## Example Usage by Card Type

### Concept Cards

**Best Practice:** Link to the detailed article in the **Terminology** learning path.

```sql
-- Example: Symbolic AI concept links to AI Family Tree article
UPDATE cards
SET learn_more = 'the-ai-family-tree'
WHERE card_id = 'concept-symbolic-ai';

-- Example: AGI concept links to Types of AI Intelligence
UPDATE cards
SET learn_more = 'types-of-ai-intelligence'
WHERE card_id = 'concept-agi';

-- Example: Model Drift links to terminology article
UPDATE cards
SET learn_more = 'model-drift-explained'
WHERE card_id = 'concept-model-drift';
```

### Framework Cards

**Best Practice:** Link to the detailed article in **Responsibility** path.

```sql
-- Example: GDPR framework links to GDPR compliance article
UPDATE cards
SET learn_more = 'gdpr-compliance-guide'
WHERE card_id = 'fw-gdpr';

-- Example: NIST AI RMF links to framework overview
UPDATE cards
SET learn_more = 'nist-ai-risk-management'
WHERE card_id = 'fw-nist-ai-rmf';
```

### Resource Cards

**Best Practice:** Link to implementation guides or tutorials.

```sql
-- Example: Model card template links to implementation guide
UPDATE cards
SET learn_more = 'implementing-model-cards'
WHERE card_id = 'res-model-card-template';
```

### Example Cards

**Best Practice:** Link to broader topic or case study deep-dive.

```sql
-- Example: Amazon hiring bias links to algorithmic bias article
UPDATE cards
SET learn_more = 'algorithmic-bias'
WHERE card_id = 'ex-amazon-hiring';

-- Example: DeepMind AlphaGo links to AI history article
UPDATE cards
SET learn_more = 'ai-history'
WHERE card_id = 'ex-deepmind-alphago';
```

---

## Batch Update Examples

### Update All Concept Cards for a Topic

```sql
-- Link all symbolic AI related concepts to family tree article
UPDATE cards
SET learn_more = 'the-ai-family-tree'
WHERE card_id IN (
  'concept-symbolic-ai',
  'concept-narrow-ai',
  'concept-expert-systems'
);
```

### Update Cards by Pattern

```sql
-- Link all AGI-related concepts to AGI article
UPDATE cards
SET learn_more = 'types-of-ai-intelligence'
WHERE card_id LIKE 'concept-%agi%';
```

---

## UI Component Implementation

### Example React Component

```typescript
interface Card {
  card_id: string;
  card_type: string;
  title: string;
  summary: string;
  learn_more?: string;  // Optional article slug
  // ... other fields
}

function CardComponent({ card }: { card: Card }) {
  return (
    <div className="card">
      <h3>{card.title}</h3>
      <p>{card.summary}</p>

      {/* Show Learn More button if learn_more exists */}
      {card.learn_more && (
        <a
          href={`/articles/${card.learn_more}`}
          className="learn-more-button"
        >
          📖 Learn More
        </a>
      )}
    </div>
  );
}
```

### Suggested Button Styles

```css
.learn-more-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--accent-color);
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.875rem;
  transition: all 0.2s ease;
}

.learn-more-button:hover {
  background: var(--accent-color-dark);
  transform: translateY(-1px);
}
```

---

## Mapping Guide: Concepts to Articles

### History Path

| Concept Card | Article Slug | Article Title |
|--------------|--------------|---------------|
| `concept-symbolic-ai` | `the-ai-family-tree` | The AI Family Tree |
| `concept-narrow-ai` | `types-of-ai-intelligence` | Types of AI Intelligence |
| `concept-agi` | `types-of-ai-intelligence` | Types of AI Intelligence |
| `concept-machine-learning` | `how-machines-learn` | How Machines Learn |
| `concept-supervised-learning` | `how-machines-learn` | How Machines Learn |
| `concept-reinforcement-learning` | `how-machines-learn` | How Machines Learn |
| `concept-deep-learning` | `deep-learning-decoded` | Deep Learning Decoded |
| `concept-neural-networks` | `deep-learning-decoded` | Deep Learning Decoded |
| `concept-generative-ai` | `generative-ai-explained` | Generative AI Explained |
| `concept-llm` | `large-language-models` | Large Language Models |
| `concept-transformer` | `large-language-models` | Large Language Models |

### Terminology Path

(Will be populated as terminology articles are created)

| Concept Card | Article Slug | Article Title |
|--------------|--------------|---------------|
| `concept-hallucination` | `ai-hallucinations` | AI Hallucinations |
| `concept-model-drift` | `model-drift-explained` | Model Drift Explained |
| `concept-bias` | `algorithmic-bias` | Algorithmic Bias |
| `concept-explainability` | `ai-explainability` | AI Explainability |

### Risk Path

| Concept Card | Article Slug | Article Title |
|--------------|--------------|---------------|
| `concept-algorithmic-bias` | `algorithmic-bias` | Algorithmic Bias |
| `concept-hallucination` | `ai-hallucinations` | AI Hallucinations |
| `concept-deepfake` | `deepfakes-synthetic-media` | Deepfakes & Synthetic Media |

---

## Validation Query

Check which concept cards don't have `learn_more` set:

```sql
SELECT card_id, title, card_type
FROM cards
WHERE card_type LIKE 'concept%'
  AND (learn_more IS NULL OR learn_more = '')
ORDER BY card_id;
```

---

## Migration Script Template

```typescript
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

async function addLearnMoreLinks() {
  const mappings = [
    { card_id: 'concept-symbolic-ai', article: 'the-ai-family-tree' },
    { card_id: 'concept-narrow-ai', article: 'types-of-ai-intelligence' },
    { card_id: 'concept-agi', article: 'types-of-ai-intelligence' },
    // ... add more
  ];

  for (const { card_id, article } of mappings) {
    await sql`
      UPDATE cards
      SET learn_more = ${article}
      WHERE card_id = ${card_id}
    `;
    console.log(`✓ Linked ${card_id} → ${article}`);
  }

  console.log(`\n✅ Updated ${mappings.length} cards`);
}

addLearnMoreLinks();
```

---

## Best Practices

### ✅ DO

- Use article slugs only (no paths or URLs)
- Link concept cards to detailed terminology articles
- Link framework cards to governance/compliance articles
- Link example cards to broader topic articles
- Keep mappings documented
- Validate article slugs exist before setting

### ❌ DON'T

- Use full URLs or paths
- Link to external websites (use `full_content` for that)
- Create circular references (article A → card → article A)
- Link to draft/unpublished articles
- Leave important concept cards without learn_more

---

## Future Enhancements

### Possible Additions

1. **learn_more_label**: Custom button text
   ```sql
   learn_more = 'ai-history'
   learn_more_label = 'Read the Full History'
   ```

2. **learn_more_type**: Specify link behavior
   ```sql
   learn_more_type = 'article' | 'external' | 'pdf'
   ```

3. **Multiple Learn More Links**:
   ```json
   {
     "primary": "ai-hallucinations",
     "related": ["model-drift-explained", "ai-bias"]
   }
   ```

---

## Summary

**Column:** `learn_more` (TEXT)
**Format:** Article slug only (e.g., `'the-ai-family-tree'`)
**UI Behavior:** Shows "Learn More" button → navigates to `/articles/{slug}`
**Best Use:** Concept cards linking to Terminology path articles

**Next Steps:**
1. Update existing concept cards with `learn_more` values
2. Implement UI component to display "Learn More" button
3. Validate all article slugs exist before deployment

---

**Last Updated:** January 2025
**Version:** 1.0
