# Knowledge Graph Validation Report

**Generated**: 2025-12-25
**Knowledge Graph**: `/content/knowledge-graph.yaml`

---

## Summary

- **Total Concept Cards**: 71
- **Valid Cards**: 25 ✅
- **Cards with Issues**: 24 ⚠️
- **Critical Issues**: 24 ❌
- **Errors**: 0 ⚠️
- **Warnings**: 71 ℹ️

### Issue Breakdown

- **Broken File References**: 24 ❌
- **Broken Cross-References**: 0 ⚠️
- **Missing Required Fields**: 0 ⚠️
- **Duplicate Slugs**: 0 ⚠️
- **Duplicate IDs**: 0 ❌

---

## Validation Results by Path

- **history**: 13/15 valid ⚠️
- **terminology**: 0/14 valid ⚠️
- **risk**: 12/20 valid ⚠️
- **responsibility**: 0/20 valid ⚠️
- **future**: 0/2 valid ⚠️

---

## ❌ Critical Issues (24)

These issues MUST be fixed before proceeding.

### FILE REF

1. **history-1**: File not found: content/articles/final/article-title.md
2. **history-6**: File not found: content/articles/final/article-title.md
3. **term-1**: File not found: content/articles/final/article-title.md
4. **term-2**: File not found: Embedded in various ML articles
5. **term-3**: File not found: Derived from deep learning articles
6. **term-4**: File not found: Embedded in ML articles
7. **term-5**: File not found: ML fundamentals articles
8. **term-6**: File not found: content/articles/final/article-90-feature-engineering-the-art-of-training-data-preparation.md
9. **term-7**: File not found: Deep learning articles
10. **term-8**: File not found: Deep learning articles
11. **term-9**: File not found: Generative AI articles
12. **term-10**: File not found: Foundation model articles
13. **term-11**: File not found: ML training articles
14. **term-12**: File not found: Foundation model articles
15. **term-13**: File not found: NLP articles
16. **term-14**: File not found: ML lifecycle articles
17. **risk-8**: File not found: content/articles/final/article-title.md
18. **risk-9**: File not found: content/articles/final/article-title.md
19. **risk-13**: File not found: content/articles/final/article-title.md
20. **risk-16**: File not found: content/articles/final/article-title.md
21. **risk-17**: File not found: content/articles/final/article-title.md
22. **risk-18**: File not found: content/articles/final/article-title.md
23. **risk-19**: File not found: content/articles/final/article-title.md
24. **risk-20**: File not found: content/articles/final/article-title.md

---

## ℹ️ Warnings (71)

These issues are non-critical but should be reviewed.

1. **term-2**: Possible matches found: .DS_Store, .claude, .git, .github, .gitignore, .kiro, .vscode
2. **term-3**: Possible matches found: .DS_Store, .claude, .git, .github, .gitignore, .kiro, .vscode
3. **term-4**: Possible matches found: .DS_Store, .claude, .git, .github, .gitignore, .kiro, .vscode
4. **term-5**: Possible matches found: .DS_Store, .claude, .git, .github, .gitignore, .kiro, .vscode
5. **term-7**: Possible matches found: .DS_Store, .claude, .git, .github, .gitignore, .kiro, .vscode
6. **term-8**: Possible matches found: .DS_Store, .claude, .git, .github, .gitignore, .kiro, .vscode
7. **term-9**: Possible matches found: .DS_Store, .claude, .git, .github, .gitignore, .kiro, .vscode
8. **term-10**: Possible matches found: .DS_Store, .claude, .git, .github, .gitignore, .kiro, .vscode
9. **term-11**: Possible matches found: .DS_Store, .claude, .git, .github, .gitignore, .kiro, .vscode
10. **term-12**: Possible matches found: .DS_Store, .claude, .git, .github, .gitignore, .kiro, .vscode
11. **term-13**: Possible matches found: .DS_Store, .claude, .git, .github, .gitignore, .kiro, .vscode
12. **term-14**: Possible matches found: .DS_Store, .claude, .git, .github, .gitignore, .kiro, .vscode
13. **resp-1**: Broken example_cards reference: algorithmic-bias-case-studies (example card not found in knowledge graph)
14. **resp-1**: Broken example_cards reference: ai-privacy-violations-case-studies (example card not found in knowledge graph)
15. **resp-1**: Broken example_cards reference: responsible-ai-governance-case-studies (example card not found in knowledge graph)
16. **resp-2**: Broken example_cards reference: algorithmic-bias-case-studies (example card not found in knowledge graph)
17. **resp-2**: Broken example_cards reference: ai-governance-use-cases (example card not found in knowledge graph)
18. **resp-2**: Broken example_cards reference: ai-safety-incidents-case-studies (example card not found in knowledge graph)
19. **resp-3**: Broken example_cards reference: ai-governance-use-cases (example card not found in knowledge graph)
20. **resp-3**: Broken example_cards reference: ai-safety-incidents-case-studies (example card not found in knowledge graph)
21. **resp-3**: Broken example_cards reference: generative-ai-systems-comparison (example card not found in knowledge graph)
22. **resp-4**: Broken example_cards reference: ai-governance-use-cases (example card not found in knowledge graph)
23. **resp-4**: Broken example_cards reference: responsible-ai-governance-case-studies (example card not found in knowledge graph)
24. **resp-4**: Broken example_cards reference: ai-safety-incidents-case-studies (example card not found in knowledge graph)
25. **resp-5**: Broken example_cards reference: ai-governance-use-cases (example card not found in knowledge graph)
26. **resp-5**: Broken example_cards reference: ai-regulatory-compliance-examples (example card not found in knowledge graph)
27. **resp-5**: Broken example_cards reference: sandbox-participation-case-studies (example card not found in knowledge graph)
28. **resp-6**: Broken example_cards reference: ai-transparency-hiring-platform (example card not found in knowledge graph)
29. **resp-6**: Broken example_cards reference: ai-transparency-compliance-framework (example card not found in knowledge graph)
30. **resp-6**: Broken example_cards reference: ai-transparency-healthcare-infrastructure (example card not found in knowledge graph)

*... and 41 more warnings*

---

## Recommended Actions

### Immediate (Fix Critical Issues)

1. **Fix 24 broken file references**
   - Check if files were renamed or moved
   - Update `source_file` paths in knowledge graph
   - Consider using article slugs to find correct files

### Next Steps

⚠️ **Fix issues before proceeding with Story 0.6**

1. Fix all critical issues (24)
2. Fix all errors (0)
3. Re-run validation: `node scripts/validate-knowledge-graph.js`
4. When validation passes, proceed with Story 0.6

---

**Validation Script**: `/scripts/validate-knowledge-graph.js`
**Re-run**: `node scripts/validate-knowledge-graph.js`
