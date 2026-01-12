# YAML Content Guidelines for Articles

## Avoiding ESLint `react/no-unescaped-entities` Errors

When creating article content in YAML files that will be rendered as JSX in React/Next.js, you must properly escape certain characters to avoid ESLint errors during build.

## Critical Rules

### 1. **Apostrophes and Single Quotes in JSX Content**

**DON'T use plain apostrophes in text that will be rendered in JSX:**
```yaml
content: |
  <p>It's important to understand AI's limitations.</p>
```

**DO use HTML entities for apostrophes:**
```yaml
content: |
  <p>It&apos;s important to understand AI&apos;s limitations.</p>
```

**Or use curly quote HTML entities:**
```yaml
content: |
  <p>It&rsquo;s important to understand AI&rsquo;s limitations.</p>
```

### 2. **Double Quotes in JSX Content**

**DON'T use plain double quotes around phrases:**
```yaml
content: |
  <p>We call this the "AI Winter" period.</p>
```

**DO use HTML entities for quotes:**
```yaml
content: |
  <p>We call this the &quot;AI Winter&quot; period.</p>
```

**Or use curly quote entities:**
```yaml
content: |
  <p>We call this the &ldquo;AI Winter&rdquo; period.</p>
```

### 3. **Single-Quoted Phrases (emphasis)**

**DON'T use single quotes for emphasis:**
```yaml
content: |
  <p>When we talk about 'good' data...</p>
```

**DO use curly quotes:**
```yaml
content: |
  <p>When we talk about &lsquo;good&rsquo; data...</p>
```

## HTML Entity Reference

| Character | Plain | Entity | Curly Entity | Usage |
|-----------|-------|--------|--------------|-------|
| Apostrophe | ' | `&apos;` | `&rsquo;` | Use in contractions (it's, don't) |
| Double Quote | " | `&quot;` | `&ldquo;` `&rdquo;` | Use for quoted text |
| Single Quote | ' | `&#39;` | `&lsquo;` `&rsquo;` | Use for emphasis |
| Em Dash | — | `&mdash;` | `&mdash;` | Use for breaks in thought |
| En Dash | – | `&ndash;` | `&ndash;` | Use for ranges |

## Important: Card Data vs JSX Content

### Card Data (JavaScript Strings) - NO HTML Entities Needed

Card definitions are JavaScript object properties, not JSX content, so use REGULAR quotes and apostrophes:

```yaml
cards:
  amazonHiring:
    title: "Amazon Hiring Bias"
    summary: "In 2018, Amazon scrapped an AI recruiting tool that showed bias against women's resumes."
    # ☝️ CORRECT - Regular apostrophe in JavaScript string
```

### JSX Content - HTML Entities Required

Article body content that renders as JSX must use HTML entities:

```yaml
content: |
  <p>In 2018, Amazon&apos;s recruiting tool showed bias.</p>
  # ☝️ CORRECT - HTML entity in JSX
```

## Navigation Paths

**Always use `/articles/` prefix for all article links:**

```yaml
navigation:
  prev:
    slug: "/articles/ai-technology-stack"  # ✅ CORRECT
    title: "The AI Technology Stack"
  next:
    slug: "/articles/foundation-models"   # ✅ CORRECT
    title: "Foundation Models"
```

**DON'T use path-based prefixes like `/terminology/` or `/history/`:**
```yaml
navigation:
  prev:
    slug: "/terminology/ai-technology-stack"  # ❌ WRONG
  next:
    slug: "/history/ai-history"              # ❌ WRONG
```

All articles live under `/articles/[slug]` regardless of their learning path.

## Common Patterns

### Example 1: Contractions
```yaml
content: |
  <p>It&apos;s important that we don&apos;t overpromise AI&apos;s capabilities.</p>
```

### Example 2: Quoted Terms
```yaml
content: |
  <p>We call this period the &quot;AI Winter&quot; when funding dried up.</p>
```

### Example 3: Emphasis with Single Quotes
```yaml
content: |
  <p>Understanding what &lsquo;good&rsquo; data means is crucial.</p>
```

### Example 4: Mixed Usage
```yaml
content: |
  <p>Amazon&apos;s &quot;intelligent automation&quot; system didn&apos;t work as expected because it couldn&apos;t handle &lsquo;edge cases&rsquo; effectively.</p>
```

## File Format

**Save YAML files as plain text (.yaml or .yml), NOT as .rtf files.**

Rich Text Format files will corrupt the YAML structure and make it impossible to parse correctly.

## Quick Checklist Before Submitting YAML

- [ ] All apostrophes in JSX content use `&apos;` or `&rsquo;`
- [ ] All double quotes in JSX content use `&quot;`, `&ldquo;`, or `&rdquo;`
- [ ] All single-quote emphasis uses `&lsquo;` and `&rsquo;`
- [ ] Card data uses REGULAR quotes (no HTML entities)
- [ ] Navigation paths use `/articles/` prefix
- [ ] File saved as plain text .yaml (not .rtf)
- [ ] All em dashes use `&mdash;`

## Testing

After creating article pages from YAML, run:

```bash
npx eslint app/articles/[article-name]/page.tsx
```

This will catch any unescaped characters before deployment.

## Why This Matters

The `react/no-unescaped-entities` ESLint rule enforces proper escaping in JSX to:
1. Prevent rendering issues in HTML
2. Avoid ambiguity between JSX syntax and content
3. Ensure consistent character encoding
4. Meet React/Next.js best practices

Following these guidelines ensures your articles will build successfully on Vercel without ESLint errors.
