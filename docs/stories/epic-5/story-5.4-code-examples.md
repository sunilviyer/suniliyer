# Story 5.4: Implement Code Examples with Syntax Highlighting

**Epic**: 5 - Terminology Path Implementation
**Story ID**: 5.4
**Priority**: P2 (Medium)
**Estimated Effort**: 3-4 hours
**Dependencies**: Story 5.2
**Assigned To**: TBD

---

## Story Description

Add code examples with syntax highlighting, copy button, and dark mode support to relevant terminology concepts.

---

## User Story

**As a** developer learning ML/AI
**I want** to see code examples with syntax highlighting
**So that** I can understand implementation patterns and copy examples

---

## Acceptance Criteria

- [ ] Syntax highlighting works for Python code
- [ ] Copy button copies code to clipboard
- [ ] Dark mode syntax theme looks good
- [ ] Code blocks are responsive on mobile
- [ ] Line numbers displayed (optional toggle)

---

## Code Examples to Add

1. **Supervised Learning Example** - scikit-learn classification
2. **Neural Network Definition** - PyTorch/TensorFlow model
3. **Data Preprocessing** - pandas data cleaning
4. **Model Training Loop** - Training and validation
5. **Transfer Learning** - Loading and fine-tuning pre-trained model

---

## Tasks

- [ ] Integrate Prism.js or Highlight.js for syntax highlighting
- [ ] Create CodeBlock component with copy button
- [ ] Add code examples to relevant concept cards
- [ ] Support multiple languages (Python, JavaScript)
- [ ] Implement dark mode compatible color scheme
- [ ] Add line numbering and filename display
- [ ] Test copy functionality across browsers
- [ ] Verify mobile responsiveness

---

## Technical Specifications

**CodeBlock Component**:
```typescript
interface CodeBlockProps {
  code: string;
  language: 'python' | 'javascript' | 'typescript';
  filename?: string;
  showLineNumbers?: boolean;
  highlightLines?: number[];
}
```

**Syntax Highlighting**:
- Library: Prism.js (lighter) or Highlight.js
- Theme: One Dark Pro (dark mode) / GitHub Light (light mode)
- Languages: Python, JavaScript, TypeScript

---

## Definition of Done

- Code examples integrated
- Syntax highlighting functional
- Copy button working
- Dark mode support
- Mobile responsive

---

**Story Status**: Ready to Start
**Previous Story**: 5.3 - Diagrams
**Next Story**: 5.5 - Cross-References
