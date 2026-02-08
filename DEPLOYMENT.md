# 🚀 Deployment Guide - Sri Veda Real Estates

This guide will help you deploy the website to various hosting platforms using GitHub.

## Prerequisites

- [GitHub Account](https://github.com/signup)
- Git installed on your computer (already done ✅)
- Code committed to local Git repository (already done ✅)

---

## Step 1: Create GitHub Repository

### Option A: Using GitHub Website (Recommended for Beginners)

1. Go to [GitHub](https://github.com) and log in
2. Click the **"+"** icon in the top-right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name:** `sri-veda-real-estates` (or any name you prefer)
   - **Description:** "Professional real estate website for Sri Veda Real Estates Ongole"
   - **Visibility:** Choose Public or Private
   - **DO NOT** initialize with README (we already have one)
5. Click **"Create repository"**
6. Copy the repository URL (e.g., `https://github.com/YOUR-USERNAME/sri-veda-real-estates.git`)

### Option B: Using GitHub CLI

```bash
# Install GitHub CLI if not installed: https://cli.github.com/
gh repo create sri-veda-real-estates --public --source=. --remote=origin --push
```

---

## Step 2: Push Code to GitHub

Run these commands in your terminal:

```bash
cd e:\veda

# Add GitHub repository as remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/sri-veda-real-estates.git

# Push code to GitHub
git branch -M main
git push -u origin main
```

**Note:** You may be asked to authenticate. Enter your GitHub username and password (or personal access token).

---

## Step 3: Deploy to Hosting Platform

Choose one of these platforms (all are free):

### 🔷 Option 1: Vercel (Recommended - Fastest & Easiest)

**Why Vercel?**
- ✅ Automatic deployments on every git push
- ✅ Free SSL certificate (HTTPS)
- ✅ Extremely fast global CDN
- ✅ Zero configuration needed

**Steps:**

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** → Choose **"Continue with GitHub"**
3. Click **"Import Project"** or **"Add New Project"**
4. Select your GitHub repository: `sri-veda-real-estates`
5. Vercel will auto-detect it's a Vite project
6. Click **"Deploy"**
7. Wait 1-2 minutes ⏳
8. Done! 🎉 Your site is live at `https://sri-veda-real-estates.vercel.app`

**Custom Domain (Optional):**
- Go to Project Settings → Domains
- Add your custom domain (e.g., `srivedarealestate.com`)
- Follow DNS configuration instructions

---

### 🟢 Option 2: Netlify

**Why Netlify?**
- ✅ Automatic deployments
- ✅ Free SSL certificate
- ✅ Great for forms and serverless functions
- ✅ Drag & drop deployment option

**Steps:**

1. Go to [netlify.com](https://netlify.com)
2. Click **"Sign Up"** → Choose **"GitHub"**
3. Click **"Add new site"** → **"Import an existing project"**
4. Select **"GitHub"** and authorize Netlify
5. Choose your repository: `sri-veda-real-estates`
6. Build settings (auto-filled):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
7. Click **"Deploy site"**
8. Wait 2-3 minutes ⏳
9. Done! 🎉 Your site is live at `https://random-name-12345.netlify.app`

**Custom Domain (Optional):**
- Site Settings → Domain Management → Add custom domain

---

### 🟣 Option 3: GitHub Pages

**Why GitHub Pages?**
- ✅ Free hosting directly from your GitHub repo
- ✅ Good for open-source projects
- ❌ Requires additional build step

**Steps:**

1. Install `gh-pages` package:
```bash
npm install -D gh-pages
```

2. Add these scripts to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

4. Enable GitHub Pages:
   - Go to your GitHub repository
   - Settings → Pages
   - Source: Select `gh-pages` branch
   - Click Save

5. Your site will be live at: `https://YOUR-USERNAME.github.io/sri-veda-real-estates`

---

## Step 4: Automatic Deployments

Once set up with **Vercel** or **Netlify**, every time you push code to GitHub, your website will automatically rebuild and deploy! 🚀

```bash
# Make changes to your code
# Then commit and push:
git add .
git commit -m "Update hero section"
git push
# 🎉 Your site will auto-deploy in 1-2 minutes!
```

---

## Environment Variables (If Needed)

If you add API keys or secrets later:

### Vercel:
1. Project Settings → Environment Variables
2. Add your variables
3. Redeploy

### Netlify:
1. Site Settings → Environment Variables
2. Add your variables
3. Trigger new deploy

---

## Custom Domain Setup

### If You Own a Domain (e.g., srivedarealestate.com):

#### For Vercel:
1. Go to Project → Settings → Domains
2. Add your domain
3. Update your domain's DNS:
   - Type: `A`
   - Name: `@`
   - Value: `76.76.21.21`
   
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com`

#### For Netlify:
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update your domain's DNS:
   - Follow Netlify's specific DNS instructions

---

## Monitoring & Analytics

### Add Google Analytics:
1. Get your GA tracking ID from [analytics.google.com](https://analytics.google.com)
2. Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## Troubleshooting

### Build Fails:
- Check build logs on Vercel/Netlify dashboard
- Ensure all dependencies are in `package.json`
- Try building locally: `npm run build`

### Images Not Loading:
- Ensure images are in `public/images/` folder
- Check image paths start with `/images/` not `./images/`
- Verify images are committed to Git

### 404 Errors:
- Check routing configuration in `vercel.json` or `netlify.toml`
- Ensure SPA redirect rules are set up correctly

---

## Support

For issues:
1. Check build logs on your hosting platform
2. Review [Vite documentation](https://vitejs.dev/)
3. Check [Vercel docs](https://vercel.com/docs) or [Netlify docs](https://docs.netlify.com/)

---

## 🎉 Congratulations!

Your website is now live and accessible to the world! Share the URL with your team and customers.

**Next Steps:**
- Add Google Analytics
- Set up custom domain
- Monitor site performance
- Add more features as needed

---

**Need Help?** Open an issue on GitHub or contact your development team.
