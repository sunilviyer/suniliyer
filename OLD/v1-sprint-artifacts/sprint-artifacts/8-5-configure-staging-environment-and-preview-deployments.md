# Story 8.5: Configure Staging Environment and Preview Deployments

**Epic:** 8 - Performance & Quality Assurance  
**Story:** 8.5  
**Status:** ready-for-dev

---

## Story

As a **developer**,  
I want **preview deployments for every pull request and a staging environment**,  
So that **I can test changes before they reach production**.

---

## Acceptance Criteria

**Given** the project is connected to Vercel  
**When** I create a pull request  
**Then** Vercel automatically creates a preview deployment with unique URL  
**And** Preview deployment builds from the PR branch  
**And** Preview URL is posted as a comment on the PR automatically  
**And** Preview deployment reflects all changes from the PR  
**And** Preview deployments are isolated from production data  
**And** Multiple preview deployments can exist simultaneously (one per PR)  
**And** Preview deployments are automatically cleaned up after PR is merged/closed  
**And** A dedicated `staging` branch deploys to a staging URL for integration testing

---

## Tasks

1. **Connect GitHub repository to Vercel** - 15 min
2. **Configure automatic preview deployments** - 20 min
3. **Create staging branch** - 10 min
4. **Configure staging environment URL** - 15 min
5. **Test preview deployment workflow** - 30 min
6. **Document deployment URLs** - 15 min

**Total Estimated Time:** 2 hours

---

## Dev Notes

**Vercel Automatic Preview Deployments:**
- Every PR automatically gets a preview URL
- Format: `project-name-git-branch-name.vercel.app`
- Isolated environment per PR
- Automatic cleanup after merge/close

**Staging Branch Setup:**
```bash
git checkout -b staging
git push -u origin staging
```

**Vercel Configuration:**
- Production: `main` branch → www.suniliyer.ca
- Staging: `staging` branch → staging.suniliyer.ca (or Vercel URL)
- Preview: All PRs → unique Vercel URLs

**References:**
- [Source: docs/epics.md - Epic 8, Story 8.5, Lines 1247-1265]
