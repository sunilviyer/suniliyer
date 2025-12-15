/** @type {import('jest').Config} */
const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^next-mdx-remote/serialize$': '<rootDir>/lib/__tests__/__mocks__/next-mdx-remote.ts',
    '^next-mdx-remote$': '<rootDir>/lib/__tests__/__mocks__/next-mdx-remote.ts',
    '^rehype-prism$': '<rootDir>/lib/__tests__/__mocks__/rehype-prism.ts',
  },
  testMatch: [
    '**/__tests__/**/*.test.ts',
    '**/__tests__/**/*.test.tsx',
  ],
  collectCoverageFrom: [
    'lib/**/*.{ts,tsx}',
    'types/**/*.{ts,tsx}',
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(next-mdx-remote)/)',
  ],
};

module.exports = config;
