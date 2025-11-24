# Software Distribution Guide

This guide explains how to host and distribute your software installers professionally.

## 🎯 Overview

Your software download system is now set up with:
- ✅ Professional product pages (`/software/little-latte-lane`)
- ✅ Download buttons with version tracking
- ✅ Multiple platform support
- ✅ System requirements display
- ✅ Pricing information
- ✅ Changelog

**Next step:** Upload your installer files!

---

## 📦 File Hosting Options

### **Option 1: GitHub Releases** (RECOMMENDED)

**Best for:** Versioned software, free hosting, professional

**Pros:**
- ✅ Free and unlimited bandwidth
- ✅ Built-in version management
- ✅ Reliable (hosted by GitHub)
- ✅ Can handle large files (up to 2GB)
- ✅ Automatic CDN distribution
- ✅ Download statistics

**How to set up:**

1. **Go to your GitHub repository**
   - Visit: https://github.com/DDMaster24/ddm-technology-website

2. **Create a new release**
   - Click "Releases" on the right sidebar
   - Click "Create a new release"

3. **Tag the release**
   - Tag: `v1.0.0` (or your version number)
   - Release title: `Little Latte Lane v1.0.0`
   - Description: Add changelog

4. **Upload your installer**
   - Drag and drop your `.exe` file
   - Name it clearly: `little-latte-lane-1.0.0-win64.exe`
   - Click "Publish release"

5. **Copy the download URL**
   - Right-click the uploaded file
   - Copy link address
   - Example: `https://github.com/DDMaster24/ddm-technology-website/releases/download/v1.0.0/little-latte-lane-1.0.0-win64.exe`

6. **Update your code**
   - Open: `app/software/[slug]/page.tsx`
   - Find the `downloads` array
   - Update the `url` field with your GitHub release URL

---

### **Option 2: Vercel Blob Storage**

**Best for:** Integrated with your site, paid service

**Pricing:**
- Free tier: 500MB storage, 5GB bandwidth/month
- Pro: $20/month for more

**Setup:**
1. Install Vercel Blob: `npm install @vercel/blob`
2. Upload files via dashboard or CLI
3. Get permanent URLs

---

### **Option 3: Cloudflare R2**

**Best for:** Large-scale distribution, cost-effective

**Pricing:**
- 10GB free storage
- Free egress (downloads)
- $0.015 per GB after free tier

---

### **Option 4: Direct Hosting (public folder)**

**Best for:** Small files (<10MB)

**NOT recommended for:**
- Large installer files (>10MB)
- Frequent downloads
- Multiple versions

**How it works:**
1. Place file in `/public/downloads/`
2. Access at: `https://ddmtech.co.za/downloads/your-file.exe`
3. Committed to Git (not ideal for large files)

---

## 🚀 RECOMMENDED SETUP: GitHub Releases

### **Step-by-Step Instructions:**

### **1. Prepare Your Installer File**

Name your file clearly:
- Format: `product-name-version-platform-architecture.exe`
- Example: `little-latte-lane-1.0.0-win64.exe`

### **2. Create GitHub Release**

```bash
# From your project directory
git tag -a v1.0.0 -m "Little Latte Lane v1.0.0 - Initial Release"
git push origin v1.0.0
```

Then on GitHub:
1. Go to your repo → Releases → "Create a new release"
2. Select tag: `v1.0.0`
3. Title: `Little Latte Lane v1.0.0`
4. Description:
   ```
   ## Little Latte Lane v1.0.0

   Initial release of Little Latte Lane restaurant management system.

   ### Features
   - Real-time order management
   - Integrated payment processing
   - Customer loyalty program
   - Analytics dashboard
   - Multi-platform support

   ### System Requirements
   - Windows 10 or later (64-bit)
   - 4GB RAM minimum
   - 500MB disk space
   - .NET Framework 4.8 or later

   ### Installation
   1. Download the installer below
   2. Run the .exe file as administrator
   3. Follow the installation wizard
   4. Launch Little Latte Lane from your Start menu
   ```

5. **Upload your installer file**
6. Click "Publish release"

### **3. Get Download URL**

After publishing:
1. Right-click your uploaded file
2. "Copy link address"
3. URL format: `https://github.com/USER/REPO/releases/download/TAG/FILENAME`

Example:
```
https://github.com/DDMaster24/ddm-technology-website/releases/download/v1.0.0/little-latte-lane-1.0.0-win64.exe
```

### **4. Update Your Website**

Open: `app/software/[slug]/page.tsx`

Find this section:
```typescript
downloads: [
  {
    platform: 'Windows',
    architecture: '64-bit',
    version: '1.0.0',
    size: '125 MB',  // Update with actual size
    url: '/downloads/little-latte-lane-1.0.0-win64.exe',  // UPDATE THIS
    releaseDate: '2025-01-15',  // Update with actual date
  },
]
```

Replace with your GitHub release URL:
```typescript
downloads: [
  {
    platform: 'Windows',
    architecture: '64-bit',
    version: '1.0.0',
    size: '125 MB',  // Check actual file size
    url: 'https://github.com/DDMaster24/ddm-technology-website/releases/download/v1.0.0/little-latte-lane-1.0.0-win64.exe',
    releaseDate: '2025-01-15',
  },
]
```

### **5. Update Download Handler**

In the same file, find `handleDownload` function and update it:

```typescript
const handleDownload = (download: typeof product.downloads[0]) => {
  // Track download
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'download', {
      event_category: 'Software',
      event_label: `${product.name} - ${download.platform} ${download.architecture}`,
    })
  }

  // Trigger download
  window.location.href = download.url
}
```

### **6. Test the Download**

1. Build and test locally:
   ```bash
   npm run build
   npm run dev
   ```

2. Visit: `http://localhost:3000/software/little-latte-lane`
3. Click the download button
4. Should download from GitHub

### **7. Deploy**

```bash
git add .
git commit -m "Add GitHub release download links"
git push origin main
```

Vercel will automatically deploy!

---

## 📊 Adding More Software Products

To add another product:

1. **Open:** `app/software/[slug]/page.tsx`

2. **Add to products object:**
```typescript
const products = {
  'little-latte-lane': { ... },
  'your-new-product': {  // Add here
    name: 'Your Product Name',
    tagline: 'Product tagline',
    icon: '🚀',
    version: '1.0.0',
    // ... rest of the config
  }
}
```

3. **Create GitHub release** for the new product

4. **Update main software page** (`app/software/page.tsx`)

---

## 🎨 Adding Product Screenshots

1. **Add images to `/public/images/products/`**
2. **Update product config:**
```typescript
screenshots: [
  '/images/products/little-latte-lane/screenshot1.png',
  '/images/products/little-latte-lane/screenshot2.png',
],
```

3. **Add screenshot gallery to product page**

---

## 🔒 Security Best Practices

### **Code Signing** (Recommended)

Sign your .exe files to prevent Windows security warnings:

1. Get a code signing certificate (from DigiCert, Sectigo, etc.)
2. Sign your installer using SignTool
3. Users won't see "Unknown Publisher" warnings

**Cost:** ~$75-$400/year

### **Checksums**

Provide SHA-256 checksums for integrity verification:

```bash
# Generate checksum on Windows
certutil -hashfile your-installer.exe SHA256

# On Linux/Mac
sha256sum your-installer.exe
```

Add to release notes!

---

## 📈 Download Analytics

Track downloads with Google Analytics (we'll set this up next):

The download handler already includes GA tracking:
```typescript
gtag('event', 'download', {
  event_category: 'Software',
  event_label: `Product Name - Platform`,
})
```

---

## 🆕 Version Updates

When releasing a new version:

1. Update version in product config
2. Create new GitHub release with new tag
3. Upload new installer
4. Update changelog
5. Deploy changes

---

## ✅ Checklist

- [ ] Prepare installer file (named correctly)
- [ ] Create GitHub release (tag v1.0.0)
- [ ] Upload installer to release
- [ ] Copy download URL
- [ ] Update product config with URL
- [ ] Update file size
- [ ] Update release date
- [ ] Test download locally
- [ ] Deploy to Vercel
- [ ] Test on live site
- [ ] Share with customers!

---

## 🚨 Troubleshooting

### Downloads not working?
- Check URL is correct
- Verify GitHub release is public
- Test URL directly in browser

### File too large for GitHub?
- Max 2GB per file
- Use Vercel Blob or R2 for larger files

### Windows blocks download?
- Get code signing certificate
- Add checksums for verification
- Document as safe in release notes

---

Need help? Contact me and I'll guide you through each step!
