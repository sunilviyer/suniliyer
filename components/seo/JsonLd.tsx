/**
 * JSON-LD structured data component
 * Renders schema.org markup in the document head
 *
 * Each node gets its own <script type="application/ld+json"> with the type
 * at the top level, rather than one script wrapping everything in @graph.
 * Both forms are valid JSON-LD and consumers that merge by @id treat them
 * identically, but plenty of readiness/SEO crawlers only look at the
 * top-level @type and score a @graph document as "no identity declared".
 *
 * SECURITY NOTE: dangerouslySetInnerHTML is safe here because:
 * 1. JSON.stringify() automatically escapes all special characters
 * 2. We're only serializing TypeScript objects (not user input)
 * 3. This is the standard Next.js pattern for JSON-LD (per Google's documentation)
 */

interface JsonLdProps {
  data: object | object[];
}

export function JsonLd({ data }: JsonLdProps) {
  const nodes = Array.isArray(data) ? data : [data];

  return (
    <>
      {nodes.map((node, index) => {
        const jsonLd = {
          '@context': 'https://schema.org',
          ...node,
        };

        // JSON.stringify automatically escapes all HTML/JS - this is safe for structured data
        const jsonString = JSON.stringify(jsonLd, null, 0);
        const id = (node as { '@id'?: unknown })['@id'];
        const key = typeof id === 'string' ? id : `jsonld-${index}`;

        return (
          <script
            key={key}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: jsonString }}
          />
        );
      })}
    </>
  );
}
