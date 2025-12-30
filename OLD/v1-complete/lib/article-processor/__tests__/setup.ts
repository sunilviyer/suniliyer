/**
 * Test setup for Article Content Processor
 * Configures property-based testing with fast-check
 */

import * as fc from 'fast-check';

// Configure fast-check for consistent test runs
export const fcConfig = {
  numRuns: 100, // Minimum 100 iterations as per design document
  verbose: false,
  seed: undefined // Use random seed for each run
};

// Helper to run property tests with standard configuration
export function runPropertyTest<T>(
  arbitrary: fc.Arbitrary<T>,
  predicate: (value: T) => boolean | void,
  config?: Partial<typeof fcConfig>
): void {
  fc.assert(
    fc.property(arbitrary, predicate),
    { ...fcConfig, ...config }
  );
}

// Export fast-check for use in tests
export { fc };
