# AIDefence V2 - Vercel Deployment Instructions

**Epic 1: Homepage Foundation & Deployment**
**Last Updated**: 2025-12-30
**Status**: Ready for Production Deployment

---

## Prerequisites

Before deploying to Vercel, ensure you have:

- [x] GitHub account with repository access
- [x] Vercel account (sign up at https://vercel.com)
- [x] Git repository pushed to GitHub
- [x] Next.js project building successfully locally (`npm run build`)

---

## Quick Start Deployment

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Sign in to Vercel**
   - Go to https://vercel.com
   - Sign in with your GitHub account

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Choose your AIDefence V2 repository
   - Click "Import"

3. **Configure Project**
   ```
   Framework Preset: Next.js
   Root Directory: ./
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   Node Version: 18.x or later
   ```

4. **Environment Variables** (if any)
   - Currently none required for Epic 1
   - Future epics may require:
     - `NEXT_PUBLIC_SITE_URL`
     - API keys for analytics, etc.

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build and deployment
   - Vercel will provide a production URL: `https://aidefence-v2.vercel.app`

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - What's your project name? aidefence-v2
# - In which directory is your code located? ./
# - Want to override settings? No
```

---

## Automatic Deployments

Once connected to Vercel, automatic deployments are configured:

### Production Deployments
- **Trigger**: Push to `main` branch
- **URL**: https://aidefence-v2.vercel.app (or custom domain)
- **Build**: Automatic
- **Time**: ~2-3 minutes

### Preview Deployments
- **Trigger**: Push to any branch or Pull Request
- **URL**: Unique URL per deployment (e.g., `aidefence-v2-git-epic-2-username.vercel.app`)
- **Purpose**: Test changes before merging to main

---

## Custom Domain Setup (Optional)

1. **Add Domain in Vercel**
   - Go to Project → Settings → Domains
   - Enter your domain: `aidefence.com`
   - Click "Add"

2. **Configure DNS**
   - Add these records at your DNS provider:
     ```
     Type: A
     Name: @
     Value: 76.76.21.21

     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```

3. **Verify & Enable HTTPS**
   - Vercel automatically provisions SSL certificate
   - Wait ~24 hours for DNS propagation
   - HTTPS enabled by default

---

## Deployment Verification Checklist

After deployment, verify:

- [ ] Homepage loads at production URL
- [ ] Header navigation works
- [ ] Dark mode toggle functions and persists
- [ ] All 5 learning path cards display correctly
- [ ] Hero images load from Epic 0 (WebP format)
- [ ] Mobile responsive (test on phone/tablet)
- [ ] No console errors in browser DevTools
- [ ] Lighthouse Performance score ≥85

**Test URLs**:
- Production: `https://aidefence-v2.vercel.app` (or custom domain)
- Homepage: `/`
- Learning Paths: `/history`, `/terminology`, `/risk`, `/responsibility`, `/future` (404 expected until Epic 2+)

---

## Rollback Procedure

If deployment introduces issues:

### Via Vercel Dashboard
1. Go to Project → Deployments
2. Find the last working deployment
3. Click "..." menu → "Promote to Production"
4. Confirm rollback

### Via Vercel CLI
```bash
# List recent deployments
vercel ls

# Promote specific deployment
vercel promote <deployment-url>
```

---

## Environment Variables (Future Epics)

For future reference, add environment variables in Vercel:

1. Go to Project → Settings → Environment Variables
2. Add variables for each environment:
   - **Production**: Live environment
   - **Preview**: PR/branch deployments
   - **Development**: Local development (optional)

Example variables (not needed for Epic 1):
```
NEXT_PUBLIC_SITE_URL=https://aidefence.com
NEXT_PUBLIC_ANALYTICS_ID=G-XXXXXXXXX
DATABASE_URL=postgresql://...
```

---

## Build Configuration

Current `next.config.ts` settings:

```typescript
{
  reactStrictMode: true,
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
}
```

---

## Performance Optimization

Vercel automatically provides:
- **Edge Network**: Global CDN for fast content delivery
- **Image Optimization**: Automatic WebP/AVIF conversion
- **Compression**: Gzip/Brotli compression
- **Caching**: Static assets cached indefinitely
- **Analytics**: Core Web Vitals tracking (enable in settings)

---

## Monitoring & Analytics

### Enable Vercel Analytics
1. Go to Project → Analytics
2. Enable "Web Analytics"
3. View Core Web Vitals:
   - Largest Contentful Paint (LCP)
   - First Input Delay (FID)
   - Cumulative Layout Shift (CLS)

### Enable Speed Insights
1. Go to Project → Speed Insights
2. Enable real-user monitoring
3. Track performance across devices/locations

---

## Troubleshooting

### Build Fails

**Error**: `Module not found` or `Cannot find module`
- **Solution**: Ensure all dependencies in `package.json`
- Run `npm install` locally first
- Check `package-lock.json` is committed

**Error**: `Type error` during build
- **Solution**: Fix TypeScript errors locally
- Run `npm run build` and `npm run type-check`
- Our config has `ignoreBuildErrors: false`

**Error**: `ESLint failed`
- **Solution**: Fix ESLint errors locally
- Run `npm run lint`
- Our config has `ignoreDuringBuilds: false`

### Images Not Loading

- Check `public/images/heroes/` folder has all 5 WebP images
- Verify image paths in `lib/constants.ts` are correct
- Check Next.js Image component syntax

### Dark Mode Flicker

- Ensure `suppressHydrationWarning` is set on `<html>` and `<body>`
- Dark mode state is client-side, so initial render is dark by default

### Slow Performance

- Run Lighthouse audit: `npm run build && npx lighthouse http://localhost:3000`
- Check Core Web Vitals in Vercel Analytics
- Optimize images if needed (already using WebP)

---

## CI/CD Workflow

Current workflow (automatic via Vercel + GitHub):

```
Developer Push → GitHub → Vercel Build → Deploy → Live
     ↓
  main branch → Production (aidefence-v2.vercel.app)
  other branch → Preview (unique URL)
```

No additional CI/CD configuration needed. Vercel handles:
- Installing dependencies
- Building Next.js app
- Running type checking
- Running ESLint
- Deploying to edge network
- Generating unique preview URLs

---

## Production URL

After deployment, your site will be available at:

**Vercel Default**: `https://aidefence-v2.vercel.app`

**Custom Domain** (after DNS setup): `https://aidefence.com`

---

## Next Steps (Post-Epic 1)

- Epic 2: History Path Implementation
- Epic 3: All Paths Infrastructure
- Epic 4: Learning Path Navigation & Filtering
- Continue deploying automatically to Vercel on each push to main

---

## Support

- **Vercel Documentation**: https://vercel.com/docs
- **Next.js Deployment**: https://nextjs.org/docs/deployment
- **Vercel Support**: https://vercel.com/support

---

**Deployment Status**: ✅ Ready for Production
**Build Status**: ✅ Passing
**Epic 1**: Complete (Stories 1.1-1.6)
