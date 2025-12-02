# 🚀 Deployment Guide - Modinat Portfolio

## Pre-Deployment Checklist

### ✅ Files Copied
- [x] Certificates → `public/CERTIFICATES/`
- [x] Projects → `public/projects/`
- [x] Dashboard images → `public/dashboards/enhanced/`

### ✅ Configuration
- [x] Environment variables set up
- [x] API routes configured
- [x] SEO metadata added
- [x] Structured data implemented

## 📋 Deployment Steps

### Option 1: Vercel (Recommended - Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Modinat Portfolio"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variable: `RESEND_API_KEY`
   - Click "Deploy"

3. **Update Domain (Optional)**
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain

### Option 2: Netlify

1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Environment Variables**: Add `RESEND_API_KEY`

### Option 3: Manual Build

```bash
npm run build
npm start
```

## 🔧 Environment Variables

Create `.env.local` for local development:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

For production, add in your hosting platform's environment variables section.

## 📧 Contact Form Setup

1. **Get Resend API Key**
   - Sign up at [resend.com](https://resend.com)
   - Create API key
   - Add to environment variables

2. **Update Email Address**
   - Edit `app/api/contact/route.ts`
   - Change `to: ['omolarabuhari1@gmail.com']` if needed

3. **Verify Domain (Optional)**
   - For production, verify your domain in Resend
   - Update `from` field in route.ts

## ✅ Post-Deployment

1. **Test All Links**
   - [ ] Homepage loads
   - [ ] All navigation links work
   - [ ] Projects page displays correctly
   - [ ] Certificates open in browser
   - [ ] Contact form sends emails
   - [ ] Dashboard viewer works

2. **SEO Verification**
   - [ ] Google Search Console setup
   - [ ] Sitemap accessible at `/sitemap.xml`
   - [ ] Robots.txt accessible at `/robots.txt`
   - [ ] Meta tags verified

3. **Performance Check**
   - [ ] Page speed test (PageSpeed Insights)
   - [ ] Mobile responsiveness
   - [ ] All images load correctly

## 🎯 Customization

### Update Domain
1. `app/layout.tsx` - Update `metadataBase` URL
2. `app/robots.ts` - Update sitemap URL
3. `app/sitemap.ts` - Update base URL
4. `app/components/StructuredData.tsx` - Update URL

### Update Contact Info
- Edit `app/contact/page.tsx`
- Edit `app/page.tsx` (hero section)
- Edit `app/components/StructuredData.tsx`

## 📊 Analytics

Vercel Analytics and Speed Insights are already integrated. They'll start tracking automatically after deployment.

## 🆘 Troubleshooting

### Contact Form Not Working
- Check RESEND_API_KEY is set correctly
- Verify email address in route.ts
- Check Resend dashboard for errors

### Files Not Loading
- Verify files are in `public/` folder
- Check file paths match exactly (case-sensitive)
- Clear browser cache

### Build Errors
- Run `npm install` to ensure all dependencies
- Check Node.js version (should be 18+)
- Review error messages in build log

---

**Need Help?** Check the main README.md or contact the developer.

