# Vercel Deployment Guide for DDM Technology Website

This guide will walk you through deploying your Next.js website to Vercel step-by-step.

## Prerequisites

1. A GitHub account with your code pushed to a repository
2. A Vercel account (sign up at https://vercel.com)

## Step-by-Step Deployment Instructions

### Step 1: Push Your Code to GitHub

First, make sure all your code is committed and pushed to GitHub:

```bash
git add .
git commit -m "Convert website to Next.js"
git push origin main
```

### Step 2: Sign Up / Log In to Vercel

1. Go to https://vercel.com
2. Click "Sign Up" or "Log In"
3. Choose "Continue with GitHub" for the easiest integration
4. Authorize Vercel to access your GitHub account

### Step 3: Import Your Project

1. Once logged in, click the "Add New..." button in the top right
2. Select "Project" from the dropdown
3. You'll see a list of your GitHub repositories
4. Find "ddm-technology-website" and click "Import"

### Step 4: Configure Your Project

On the import screen, you'll see several configuration options:

#### Project Name
- Keep it as `ddm-technology-website` or choose a custom name
- This will be part of your URL: `your-project-name.vercel.app`

#### Framework Preset
- Vercel should automatically detect "Next.js"
- If not, select "Next.js" from the dropdown

#### Root Directory
- Leave this as `./` (the root of your repository)

#### Build and Output Settings
Vercel will automatically use these settings (you don't need to change them):
- Build Command: `next build`
- Output Directory: `.next`
- Install Command: `npm install`

#### Environment Variables
- For now, you don't need any environment variables
- You can add them later if needed (for example, for API keys)

### Step 5: Deploy

1. Click the "Deploy" button
2. Vercel will now:
   - Clone your repository
   - Install dependencies
   - Build your Next.js application
   - Deploy it to their global CDN

This process typically takes 1-3 minutes.

### Step 6: View Your Live Website

1. Once deployment is complete, you'll see a success screen with confetti!
2. Click "Visit" to see your live website
3. Your website URL will be: `https://ddm-technology-website.vercel.app` (or your custom project name)

## Custom Domain Setup (Optional)

To use your own domain (like www.ddm-technology.com):

### Step 1: Add Your Domain in Vercel

1. Go to your project dashboard in Vercel
2. Click on "Settings" tab
3. Click on "Domains" in the sidebar
4. Click "Add" and enter your domain name
5. Click "Add"

### Step 2: Configure DNS

Vercel will show you DNS records to add. You need to add these records in your domain registrar (where you bought your domain):

**For a root domain (ddm-technology.com):**
- Type: A
- Name: @
- Value: 76.76.21.21

**For www subdomain (www.ddm-technology.com):**
- Type: CNAME
- Name: www
- Value: cname.vercel-dns.com

### Step 3: Wait for DNS Propagation

- DNS changes can take 24-48 hours to fully propagate
- Vercel will automatically generate an SSL certificate once DNS is configured
- Your website will be accessible via HTTPS automatically

## Automatic Deployments

Every time you push code to GitHub:
1. Vercel automatically detects the changes
2. Builds your project
3. Deploys the new version
4. Your website is updated within minutes!

## Useful Vercel Features

### Preview Deployments
- Every pull request gets its own preview URL
- Perfect for testing changes before merging

### Analytics
- Go to the "Analytics" tab to see visitor statistics
- See page views, performance metrics, and more

### Logs
- Check the "Logs" tab to see build logs and runtime logs
- Useful for debugging if something goes wrong

## Common Issues and Solutions

### Build Fails
- Check the build logs in Vercel
- Make sure `npm run build` works locally
- Ensure all dependencies are in package.json

### 404 Errors
- Make sure all your pages are in the `app` directory
- Check that file names match your routes

### Styling Issues
- Clear your browser cache
- Check that globals.css is imported in layout.tsx
- Verify CSS modules are named correctly (*.module.css)

## Support

If you need help:
- Vercel Documentation: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- Next.js Documentation: https://nextjs.org/docs

## Summary of Your Project URLs

After deployment, you'll have:
- **Production URL**: `https://ddm-technology-website.vercel.app`
- **Custom Domain** (if configured): `https://www.ddm-technology.com`
- **GitHub Repository**: `https://github.com/DDMaster24/ddm-technology-website`

That's it! Your website is now live on Vercel with automatic deployments! 🎉
