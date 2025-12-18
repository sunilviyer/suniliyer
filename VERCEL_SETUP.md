# Vercel Setup Checklist

Quick reference for setting up AIDefence on Vercel with production deployment and auto-rollback.

**Full Guide:** See `/docs/production-deployment-guide.md` for detailed instructions.

---

## Initial Setup (One-Time)

### 1. Create Vercel Account
- [ ] Go to https://vercel.com
- [ ] Sign up with GitHub account
- [ ] Authorize Vercel to access GitHub

### 2. Import Repository
- [ ] Vercel Dashboard → "Add New..." → "Project"
- [ ] Select repository: `sunilviyer/suniliyer`
- [ ] Click "Import"

### 3. Configure Project
- [ ] Project Name: `aidefence` (or `suniliyer`)
- [ ] Framework: Next.js (auto-detected)
- [ ] Root Directory: `./`
- [ ] Build Command: `npm run build` (auto-detected)
- [ ] Output Directory: `.next` (auto-detected)
- [ ] Install Command: `npm install`
- [ ] Environment Variables: None needed (skip for now)
- [ ] Click "Deploy"

### 4. Configure Custom Domain
- [ ] Settings → Domains
- [ ] Add domain: `www.suniliyer.ca`
- [ ] Configure DNS (choose one):

  **Option A: Vercel Nameservers (Recommended)**
  - [ ] Copy nameservers from Vercel
  - [ ] Update domain registrar nameservers
  - [ ] Wait for DNS propagation (up to 48h, usually <1h)

  **Option B: External DNS (Cloudflare/etc)**
  - [ ] Add CNAME record: `www → cname.vercel-dns.com`
  - [ ] Add A records: `@ → 76.76.21.21`
  - [ ] Wait for DNS propagation

- [ ] Verify SSL certificate issued (automatic)
- [ ] Test: `https://www.suniliyer.ca` (should load)

### 5. Configure Git Integration
- [ ] Settings → Git
- [ ] Production Branch: `main` ✅ (already configured in vercel.json)
- [ ] Enable automatic deployments ✅ (default)
- [ ] Enable PR comments ✅ (default)

### 6. Configure Notifications
- [ ] Settings → Notifications
- [ ] Enable email notifications:
  - [ ] Deployment succeeded
  - [ ] Deployment failed
  - [ ] Build failed
- [ ] (Optional) Add Slack/Discord integration

### 7. Add Team Members (Optional)
- [ ] Settings → Team
- [ ] Invite collaborators
- [ ] Assign roles

---

## Verification (After Setup)

### Test Automatic Deployment

1. **Create Test PR**
   ```bash
   git checkout -b test/vercel-deployment
   echo "<!-- Test deployment -->" >> README.md
   git add README.md
   git commit -m "Test Vercel deployment"
   git push -u origin test/vercel-deployment
   gh pr create --title "Test Vercel Deployment" --body "Testing automatic deployment"
   ```

2. **Verify Preview Deployment**
   - [ ] PR shows Vercel bot comment with preview URL
   - [ ] Preview URL accessible
   - [ ] Build succeeded (✅ green check on PR)

3. **Test Production Deployment**
   ```bash
   gh pr merge --squash
   ```
   - [ ] Vercel triggers production build
   - [ ] Build completes in ~2 minutes
   - [ ] www.suniliyer.ca shows updated content
   - [ ] Run smoke tests:
     ```bash
     ./scripts/smoke-test.sh https://www.suniliyer.ca
     ```

### Test Auto-Rollback (Optional)

**Warning:** This will temporarily break production. Only test if comfortable with brief downtime.

1. **Create Intentional Build Failure**
   ```bash
   git checkout -b test/build-failure
   # Add TypeScript error
   echo "const x: number = 'string';" >> app/page.tsx
   git add app/page.tsx
   git commit -m "Test build failure"
   git push -u origin test/build-failure
   gh pr create --title "Test Build Failure" --body "Testing auto-rollback"
   ```

2. **Verify Build Fails**
   - [ ] Vercel build fails (❌ red x on PR)
   - [ ] Previous deployment still live
   - [ ] Production unaffected

3. **Clean Up**
   ```bash
   gh pr close --delete-branch
   ```

---

## Configuration Files (Already Configured)

- ✅ `vercel.json` - Vercel configuration
- ✅ `.vercelignore` - Deployment exclusions
- ✅ `package.json` - Build script with sitemap generation
- ✅ `scripts/generate-sitemap.js` - Sitemap generation

No changes needed - ready for deployment!

---

## Quick Reference

### Vercel Dashboard
- **Main Dashboard:** https://vercel.com/dashboard
- **Deployments:** Vercel Dashboard → Project → Deployments
- **Settings:** Vercel Dashboard → Project → Settings
- **Domains:** Settings → Domains
- **Environment Variables:** Settings → Environment Variables

### Deployment URLs
- **Production:** https://www.suniliyer.ca
- **Staging:** (Vercel URL for staging branch)
- **Preview:** `https://aidefence-git-<branch>-<team>.vercel.app`

### Commands
```bash
# Test build locally
npm run build

# Test production server locally
npm start

# Run smoke tests
./scripts/smoke-test.sh https://www.suniliyer.ca

# Run Lighthouse audit
./scripts/lighthouse-test.sh https://www.suniliyer.ca

# Create PR
gh pr create

# Merge PR (triggers deployment)
gh pr merge --squash
```

### Rollback
**Via Vercel Dashboard (fastest - <60 seconds):**
1. Go to Deployments
2. Find last working deployment
3. Click "..." → "Promote to Production"

**Via Git (slower - ~2 minutes):**
```bash
git revert <bad-commit>
git push origin main
```

---

## Troubleshooting

### Build Fails
- Check Vercel deployment logs
- Test locally: `npm run build`
- Check for TypeScript errors: `npx tsc --noEmit`
- Review recent code changes

### Domain Not Working
- Check DNS propagation: `nslookup www.suniliyer.ca`
- Wait up to 48 hours for DNS propagation
- Verify SSL certificate issued in Vercel dashboard
- Clear browser cache (hard refresh)

### Deployment Not Triggering
- Check Vercel → Settings → Git (integration connected?)
- Verify branch is `main` (production branch)
- Check if deployment manually canceled
- Push dummy commit to trigger

### Site Not Updating After Deployment
- Clear CDN cache (automatic, wait 1-2 minutes)
- Open in incognito mode
- Hard refresh (Cmd+Shift+R / Ctrl+F5)
- Check if correct deployment promoted to production

---

## Status

- ✅ Configuration files ready
- ✅ Build script configured
- ✅ Testing scripts ready
- ✅ Documentation complete
- ⏳ **Pending:** Vercel account connection
- ⏳ **Pending:** Domain configuration
- ⏳ **Pending:** First deployment test

**Next Action:** Create Vercel account and import repository

---

## Related Documentation

- **Full Guide:** `/docs/production-deployment-guide.md`
- **Testing Workflow:** `/docs/testing-workflow.md`
- **Deployment Guide:** `/docs/deployment-guide.md`
- **Pre-Deployment Checklist:** `/.github/PRE_DEPLOYMENT_CHECKLIST.md`

---

**Last Updated:** 2025-12-18 (Story 8.7)
