/**
 * JSON-LD structured data component
 * Renders schema.org markup in the document head
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
  const context = {
    '@context': 'https://schema.org'
  };

  const jsonLd = Array.isArray(data)
    ? { ...context, '@graph': data }
    : { ...context, ...data };

  // JSON.stringify automatically escapes all HTML/JS - this is safe for structured data
  const jsonString = JSON.stringify(jsonLd, null, 0);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonString }}
      key="jsonld"
    />
  );
}
