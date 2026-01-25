import { writeFileSync, mkdirSync } from 'fs';
import { readFileSync } from 'fs';

// Read the article data
const articlesData = JSON.parse(readFileSync('/tmp/missing-articles-data.json', 'utf-8'));

const pathTitles: Record<string, string> = {
  terminology: 'Terminology',
  risk: 'Risk',
  responsibility: 'Responsibility',
  future: 'Future',
};

const totalArticles: Record<string, number> = {
  terminology: 8,
  risk: 8,
  responsibility: 8,
  future: 8,
};

// Helper to convert slug to PascalCase function name
function toPascalCase(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

// Helper to convert slug to readable title
function toTitle(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

console.log('\n╔══════════════════════════════════════════════════════════════╗');
console.log('║        GENERATE MISSING ARTICLE PAGE.TSX FILES               ║');
console.log('╚══════════════════════════════════════════════════════════════╝\n');

let successCount = 0;
let errorCount = 0;

for (const [path, articles] of Object.entries(articlesData)) {
  console.log(`\n${path.toUpperCase()}:`);

  for (const article of articles) {
    const slug = article.slug as string;
    const title = article.title as string;
    const position = article.position as number;

    const functionName = toPascalCase(slug) + 'Article';
    const dirPath = `/Volumes/External/aidefence/app/${path}/${slug}`;
    const filePath = `${dirPath}/page.tsx`;

    try {
      // Create directory
      mkdirSync(dirPath, { recursive: true });

      // Generate page content
      const pageContent = `import { getCardsByArticle, getArticleBySlug } from '@/lib/db';
import { ArticlePageWrapper } from '@/components/articles/ArticlePageWrapper';
import { DatabaseArticleRenderer } from '@/components/articles/DatabaseArticleRenderer';
import { notFound } from 'next/navigation';

export default async function ${functionName}() {
  // Fetch article and cards from database
  const [article, cards] = await Promise.all([
    getArticleBySlug('${slug}'),
    getCardsByArticle('${slug}'),
  ]);

  // If article not found, show 404
  if (!article || !article.content) {
    notFound();
  }

  const { content } = article;

  return (
    <ArticlePageWrapper
      path="${path}"
      pathTitle="${pathTitles[path]}"
      articleTitle="${title}"
      tldr={content.tldr || ''}
      tags={content.tags || []}
      readTime={content.readTime || ''}
      updatedDate={content.updatedDate || ''}
      headerImage={content.headerImage || ''}
      currentIndex={${position}}
      totalArticles={${totalArticles[path]}}
      cards={cards}
    >
      <DatabaseArticleRenderer
        content={content.content}
        keyLearnings={content.keyLearnings}
        additionalResources={content.additionalResources}
        sources={content.sources}
      />
    </ArticlePageWrapper>
  );
}
`;

      // Write file
      writeFileSync(filePath, pageContent, 'utf-8');
      console.log(`  ✅ ${slug}`);
      successCount++;

    } catch (error) {
      console.log(`  ❌ ${slug} - Error: ${error}`);
      errorCount++;
    }
  }
}

console.log('\n═══════════════════════════════════════════════════════════════');
console.log(`✅ Successfully created: ${successCount}/23 article pages`);
console.log(`❌ Errors: ${errorCount}/23`);
console.log('═══════════════════════════════════════════════════════════════\n');
