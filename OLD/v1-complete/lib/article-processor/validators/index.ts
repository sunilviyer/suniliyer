/**
 * Validators Module
 * Exports all validation and analysis functions
 */

export {
  validateStructure,
  hasH1Title,
  hasRequiredSections,
  validateHeaderDepth,
  getValidationIssues
} from './structure-validator';

export {
  analyzeWordCount,
  extractTargetWordCount,
  getWordCountDescription,
  calculatePercentageDifference,
  type WordCountAnalysis
} from './word-count-analyzer';
