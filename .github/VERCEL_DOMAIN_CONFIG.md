# Vercel Domain Configuration - WWW Redirect Issue

## Problem
Google Search Console is reporting "Page with redirect" for:
- `http://suniliyer.ca/` (redirects to https://www.suniliyer.ca/)

This creates a **redirect chain** that hurts SEO:
1. `http://suniliyer.ca` → `https://suniliyer.ca` (Vercel auto HTTPS upgrade)
2. `https://suniliyer.ca` → `https://www.suniliyer.ca` (Vercel domain redirect)

## Why This Happens
Vercel automatically handles HTTPS upgrades and www redirects, but you need to configure which is your **canonical domain** (the "preferred" URL).

## Solution (Vercel Dashboard)

### Step 1: Log into Vercel
1. Go to https://vercel.com/dashboard
2. Select your project: **suniliyer**

### Step 2: Configure Domains
1. Click **Settings** → **Domains**
2. You should see two domains listed:
   - `suniliyer.ca`
   - `www.suniliyer.ca`

### Step 3: Set Canonical Domain
Choose **ONE** canonical domain (recommended: `www.suniliyer.ca`):

**Option A: Make www canonical (RECOMMENDED)**
- Set `www.suniliyer.ca` as **Production Domain**
- Set `suniliyer.ca` to **Redirect to www.suniliyer.ca**

**Option B: Make non-www canonical**
- Set `suniliyer.ca` as **Production Domain**
- Set `www.suniliyer.ca` to **Redirect to suniliyer.ca**

### Step 4: Verify Configuration
After saving, Vercel will:
1. Auto-upgrade HTTP → HTTPS for both domains
2. Redirect non-canonical → canonical domain (single 301 redirect)

Example with www canonical:
- `http://suniliyer.ca` → `https://www.suniliyer.ca` (single 308 redirect)
- `https://suniliyer.ca` → `https://www.suniliyer.ca` (single 308 redirect)

## Why This Can't Be Fixed in Code
The www redirect is handled by **Vercel's edge network** before your application code runs. You cannot configure this in:
- ❌ `vercel.json`
- ❌ `next.config.ts`
- ❌ Middleware
- ✅ **Vercel Dashboard only**

## After Configuration
1. Wait 5-10 minutes for DNS propagation
2. Test both URLs:
   ```bash
   curl -I http://suniliyer.ca/
   curl -I https://suniliyer.ca/
   curl -I https://www.suniliyer.ca/
   ```
3. All should redirect to your canonical domain in **1 hop** (not 2)

## Google Search Console
After fixing:
1. Google will re-crawl within 1-7 days
2. "Page with redirect" warnings will clear
3. Only canonical URLs will appear in search results

## Reference
- Vercel Docs: https://vercel.com/docs/projects/domains/redirecting-domains
- Google: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls

---

**Current Status**: ⚠️ Needs Vercel Dashboard configuration
**Target**: ✅ Single canonical domain with no redirect chains
