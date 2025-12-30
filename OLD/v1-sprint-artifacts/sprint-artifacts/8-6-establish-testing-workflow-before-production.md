# Story 8.6: Establish Testing Workflow Before Production

**Epic:** 8 - Performance & Quality Assurance  
**Story:** 8.6  
**Status:** ready-for-dev

---

## Story

As a **developer**,  
I want **a clear testing workflow to validate changes before production**,  
So that **bugs and security issues are caught before users see them**.

---

## Acceptance Criteria

**Given** preview and staging environments exist  
**When** I make changes to the site  
**Then** I create a feature branch and open a pull request  
**And** I test changes in the preview deployment URL  
**And** I verify: functionality works, no build errors, Lighthouse scores maintained, accessibility tests pass  
**And** For security patches (NFR-SEC-3): changes are tested in staging before merging to main  
**And** After testing passes, I merge PR to `main` branch  
**And** Main branch auto-deploys to production (www.suniliyer.ca)  
**And** If production deployment fails, automatic rollback to last known good state occurs  
**And** I monitor production after deployment to ensure no regressions

---

## Tasks

1. **Document testing workflow** - 45 min
2. **Create testing checklist** - 30 min
3. **Test feature branch workflow** - 30 min
4. **Verify preview deployment testing** - 20 min
5. **Document rollback procedure** - 20 min

**Total Estimated Time:** 2.5 hours

---

## Dev Notes

**Testing Workflow:**
1. Create feature branch
2. Make changes
3. Open PR → preview deployment created
4. Test preview URL
5. Run testing checklist
6. Merge to main → production deployment
7. Monitor production

**Testing Checklist:**
- [ ] Build succeeds (no errors)
- [ ] Functionality works as expected
- [ ] Lighthouse Performance ≥90
- [ ] Accessibility 100
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Cross-browser compatible

**References:**
- [Source: docs/epics.md - Epic 8, Story 8.6, Lines 1266-1283]
