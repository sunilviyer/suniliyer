# Story 8.7: Configure Vercel Production Deployment with Auto-Rollback

**Epic:** 8 - Performance & Quality Assurance  
**Story:** 8.7  
**Status:** ready-for-dev

---

## Story

As a **content administrator**,  
I want **automatic deployment to production when changes are merged**,  
So that **new content goes live without manual intervention**.

---

## Acceptance Criteria

**Given** the testing workflow is established  
**When** a pull request is merged to the `main` branch  
**Then** Vercel automatically triggers a production build  
**And** Build runs `next build` and sitemap generation script  
**And** Build succeeds and deploys to production (www.suniliyer.ca)  
**And** If build fails, deployment is NOT published  
**And** If deployment fails, it automatically rolls back to last known good state  
**And** Deployment status is visible in Vercel dashboard  
**And** Production URL (www.suniliyer.ca) reflects the deployed changes within 2 minutes

---

## Tasks

1. **Configure Vercel production settings** - 20 min
2. **Verify automatic deployment on merge** - 30 min
3. **Test build failure handling** - 30 min
4. **Verify auto-rollback functionality** - 30 min
5. **Document deployment process** - 30 min

**Total Estimated Time:** 2.5 hours

---

## Dev Notes

**Vercel Auto-Rollback:**
- If deployment fails health check → auto-rollback
- Last known good deployment remains live
- Manual rollback also available in dashboard

**Build Script:**
```json
{
  "scripts": {
    "build": "node scripts/generate-sitemap.js && next build"
  }
}
```

**References:**
- [Source: docs/epics.md - Epic 8, Story 8.7, Lines 1284-1301]
