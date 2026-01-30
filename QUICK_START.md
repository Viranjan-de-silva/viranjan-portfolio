# Quick Start Guide - 5 Minutes to Deploy

Follow these steps to get your portfolio online quickly!

## Prerequisites ✓

- [ ] Node.js installed ([Download](https://nodejs.org/))
- [ ] Git installed ([Download](https://git-scm.com/))
- [ ] GitHub account ([Sign up](https://github.com/))

## Step 1: Setup Project (2 minutes)

```bash
# Navigate to the project folder
cd viranjan-portfolio

# Install dependencies
npm install
```

## Step 2: Customize (2 minutes)

### A. Update `package.json`
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/viranjan-portfolio"
```

### B. Update `src/App.js`
- Search for "linkedin.com/in/" and update your LinkedIn URL
- Search for "github.com/" and update your GitHub username
- Search for "viranjandesilva@gmail.com" and update your email

## Step 3: Test Locally (30 seconds)

```bash
npm start
```

Your browser will open to http://localhost:3000

## Step 4: Create GitHub Repository (30 seconds)

1. Go to [GitHub.com](https://github.com)
2. Click "+" → "New repository"
3. Name: `viranjan-portfolio`
4. Keep it **Public**
5. Don't check any boxes
6. Click "Create repository"

## Step 5: Deploy (1 minute)

```bash
# Initialize git
git init

# Add files
git add .

# Commit
git commit -m "Initial commit"

# Connect to GitHub (replace YOUR_USERNAME!)
git remote add origin https://github.com/YOUR_USERNAME/viranjan-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main

# Deploy to GitHub Pages
npm run deploy
```

## Step 6: Enable GitHub Pages (30 seconds)

1. Go to your repository on GitHub
2. Settings → Pages
3. Source: `gh-pages` branch, `/ (root)` folder
4. Click Save

## ✅ Done!

Your site will be live at:
```
https://YOUR_USERNAME.github.io/viranjan-portfolio
```

**Note:** It may take 5-10 minutes to appear online.

---

## Need Help?

- **Detailed Guide**: See `DEPLOYMENT_GUIDE.md`
- **Full Documentation**: See `README.md`
- **Email**: viranjandesilva@gmail.com

---

## Update Your Site Later

```bash
# Make changes to your files

# Then run:
git add .
git commit -m "Updated content"
git push origin main
npm run deploy
```

---

**Pro Tip:** Bookmark your portfolio URL and share it in your PhD applications!
