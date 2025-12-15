/**
 * Mock for next-mdx-remote to avoid ESM issues in Jest
 */

/* eslint-disable @typescript-eslint/no-unused-vars */
export const serialize = jest.fn(async (_source: string, _options?: unknown) => {
  return {
    compiledSource: `<div>Mocked MDX Content</div>`,
    scope: {},
    frontmatter: {},
  };
});

export const MDXRemote = jest.fn(() => null);
