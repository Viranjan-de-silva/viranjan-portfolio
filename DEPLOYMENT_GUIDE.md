# Complete Deployment Guide for GitHub Pages

This guide provides detailed, step-by-step instructions for deploying your portfolio website to GitHub Pages, even if you're new to web development.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Setting Up Your Development Environment](#setting-up-your-development-environment)
3. [Customizing Your Portfolio](#customizing-your-portfolio)
4. [Testing Locally](#testing-locally)
5. [Creating a GitHub Repository](#creating-a-github-repository)
6. [Deploying to GitHub Pages](#deploying-to-github-pages)
7. [Updating Your Website](#updating-your-website)
8. [Common Issues and Solutions](#common-issues-and-solutions)

---

## Prerequisites

Before starting, you'll need:

### 1. Install Node.js and npm

**Windows:**
1. Go to [https://nodejs.org/](https://nodejs.org/)
2. Download the LTS (Long Term Support) version
3. Run the installer (accept all defaults)
4. Restart your computer

**Mac:**
1. Go to [https://nodejs.org/](https://nodejs.org/)
2. Download the LTS version
3. Run the installer
4. Restart your terminal

**Linux:**
```bash
sudo apt update
sudo apt install nodejs npm
```

**Verify Installation:**
```bash
node --version    # Should show v14 or higher
npm --version     # Should show a version number
```

### 2. Install Git

**Windows:**
1. Download from [https://git-scm.com/](https://git-scm.com/)
2. Run installer (accept all defaults)

**Mac:**
```bash
# Install Homebrew first if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Then install Git
brew install git
```

**Linux:**
```bash
sudo apt install git
```

**Verify Installation:**
```bash
git --version    # Should show a version number
```

### 3. Create a GitHub Account

1. Go to [https://github.com](https://github.com)
2. Click "Sign up"
3. Follow the registration process
4. Verify your email address

---

## Setting Up Your Development Environment

### Step 1: Extract the Project

If you received the project as a zip file:
1. Right-click the zip file
2. Select "Extract All" (Windows) or double-click (Mac)
3. Choose a location (e.g., `Documents/Projects/`)

### Step 2: Open Terminal/Command Prompt

**Windows:**
- Press `Win + R`
- Type `cmd` and press Enter
- OR search for "Command Prompt" in Start menu

**Mac:**
- Press `Cmd + Space`
- Type "Terminal" and press Enter

**Linux:**
- Press `Ctrl + Alt + T`

### Step 3: Navigate to Project Folder

```bash
# Example (adjust path to where you extracted the files)
cd Documents/Projects/viranjan-portfolio
```

**Tip:** You can also:
- **Windows**: Shift + Right-click in the folder → "Open PowerShell window here"
- **Mac**: Right-click folder → Services → "New Terminal at Folder"

### Step 4: Install Dependencies

```bash
npm install
```

This will take 2-5 minutes and install all required packages. You'll see a progress bar and lots of text - this is normal!

**What this does:**
- Downloads React and all dependencies
- Sets up your development environment
- Prepares deployment tools

**Expected output:**
```
added 1500+ packages in 3m
```

---

## Customizing Your Portfolio

### Essential Updates

#### 1. Update GitHub Username

Open `package.json` in any text editor and change:

```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/viranjan-portfolio"
```

Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username (the one you created earlier).

**Example:**
If your GitHub username is "viranjan-ds", use:
```json
"homepage": "https://viranjan-ds.github.io/viranjan-portfolio"
```

#### 2. Update Personal Links

Open `src/App.js` and search for:

```javascript
// Around line 325 - Update LinkedIn
href="https://linkedin.com/in/viranjan-de-silva"
// Change to your LinkedIn profile

// Around line 333 - Update GitHub  
href="https://github.com/viranjandesilva"
// Change to your GitHub username

// Around line 655 - Update email
href="mailto:viranjandesilva@gmail.com"
// Change to your email

// Around line 665 - Update phone
href="tel:+94768022882"
// Change to your phone number
```

#### 3. Update Project Links (Optional)

In `src/App.js`, find the `projects` array (around line 35) and update the `links` for each project:

```javascript
links: {
  demo: "https://your-demo-link.com",
  github: "https://github.com/yourusername/project-repo",
  linkedin: "https://linkedin.com/posts/your-post"
}
```

Replace `#` with actual URLs when you have them.

---

## Testing Locally

Before deploying, test your website locally:

```bash
npm start
```

**What happens:**
- A development server starts
- Your browser opens automatically to `http://localhost:3000`
- You'll see your portfolio website

**Features while testing:**
- Changes you make to files will automatically update in the browser
- Press `Ctrl + C` in the terminal to stop the server

**Test these things:**
1. ✓ Navigation buttons work
2. ✓ Smooth scrolling works
3. ✓ All links open correctly
4. ✓ Mobile view (resize browser window)
5. ✓ All text is correct

---

## Creating a GitHub Repository

### Step 1: Sign in to GitHub

1. Go to [https://github.com](https://github.com)
2. Click "Sign in"
3. Enter your credentials

### Step 2: Create New Repository

1. Click the **"+"** icon in top-right corner
2. Select **"New repository"**

### Step 3: Configure Repository

Fill in these details:

- **Repository name**: `viranjan-portfolio` (or any name you prefer)
- **Description**: "Personal portfolio showcasing mechatronic engineering projects"
- **Visibility**: Choose **Public** (required for free GitHub Pages)
- **Important**: Do NOT check "Initialize with README" (we already have one)

Click **"Create repository"**

### Step 4: Note Your Repository URL

You'll see a page with setup instructions. Copy the URL that looks like:
```
https://github.com/YOUR_USERNAME/viranjan-portfolio.git
```

---

## Deploying to GitHub Pages

### Step 1: Initialize Git in Your Project

Open terminal in your project folder and run:

```bash
git init
```

**What this does:** Initializes Git version control in your project.

### Step 2: Configure Git (First Time Only)

If this is your first time using Git:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Use the same email as your GitHub account.

### Step 3: Add All Files

```bash
git add .
```

**What this does:** Stages all your files for commit.

### Step 4: Create First Commit

```bash
git commit -m "Initial commit: Portfolio website"
```

**What this does:** Saves a snapshot of your project with a message.

### Step 5: Connect to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/viranjan-portfolio.git
```

**Remember to replace `YOUR_USERNAME`!**

### Step 6: Push to GitHub

```bash
git branch -M main
git push -u origin main
```

**What this does:** Uploads your code to GitHub.

**If prompted for credentials:**
- Username: Your GitHub username
- Password: Use a Personal Access Token (not your password)

**Creating a Personal Access Token:**
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token (classic)
3. Name it: "Portfolio deployment"
4. Select scopes: `repo` (select all)
5. Generate token and copy it (save it somewhere safe!)
6. Use this token as your password

### Step 7: Deploy to GitHub Pages

```bash
npm run deploy
```

**What this does:**
1. Builds an optimized production version
2. Creates a `gh-pages` branch
3. Pushes the build to that branch
4. Sets up GitHub Pages automatically

**This takes 1-2 minutes.** When complete, you'll see:
```
Published
```

### Step 8: Verify GitHub Pages is Active

1. Go to your repository on GitHub
2. Click **"Settings"** → **"Pages"** (in left sidebar)
3. You should see: "Your site is published at https://YOUR_USERNAME.github.io/viranjan-portfolio"

**Wait 5-10 minutes**, then visit that URL!

---

## Updating Your Website

When you want to make changes:

### Step 1: Make Your Changes

Edit files in your project (e.g., update projects, change colors)

### Step 2: Test Changes

```bash
npm start
```

Verify everything looks good locally.

### Step 3: Save Changes to Git

```bash
git add .
git commit -m "Updated project descriptions"
git push origin main
```

### Step 4: Deploy Updated Version

```bash
npm run deploy
```

### Step 5: Wait and Verify

- Wait 5-10 minutes
- Visit your GitHub Pages URL
- Press `Ctrl + Shift + R` (or `Cmd + Shift + R`) to hard refresh

---

## Common Issues and Solutions

### Issue: "npm: command not found"

**Solution:**
- Verify Node.js is installed: Close and reopen terminal
- Reinstall Node.js from [nodejs.org](https://nodejs.org)
- Restart your computer

### Issue: "Permission denied" on npm install (Mac/Linux)

**Solution:**
```bash
sudo npm install
```
Enter your password when prompted.

### Issue: Port 3000 already in use

**Solution:**
- Find and close any other programs using port 3000
- Or use a different port:
```bash
PORT=3001 npm start
```

### Issue: Changes not showing on GitHub Pages

**Solution:**
1. Wait 10 minutes (GitHub Pages can be slow)
2. Clear browser cache: `Ctrl + Shift + Del` (or `Cmd + Shift + Del`)
3. Hard refresh: `Ctrl + Shift + R` (or `Cmd + Shift + R`)
4. Check gh-pages branch exists on GitHub

### Issue: 404 Error on GitHub Pages

**Solution:**
- Check `package.json` homepage URL matches your GitHub username
- Verify GitHub Pages is enabled and set to `gh-pages` branch
- Repository must be public

### Issue: "gh-pages branch not found"

**Solution:**
```bash
npm install gh-pages --save-dev
npm run deploy
```

### Issue: Git asks for password but I enter the correct one

**Solution:**
GitHub no longer accepts passwords. You need a Personal Access Token:

1. Go to GitHub → Settings → Developer settings
2. Personal access tokens → Tokens (classic)
3. Generate new token with `repo` scope
4. Use the token as your password

**Or use SSH:**
1. Generate SSH key: `ssh-keygen -t ed25519 -C "your@email.com"`
2. Add to GitHub: Settings → SSH and GPG keys
3. Change remote: 
```bash
git remote set-url origin git@github.com:YOUR_USERNAME/viranjan-portfolio.git
```

---

## Quick Reference Commands

```bash
# Install dependencies
npm install

# Start local development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy

# Git workflow
git add .
git commit -m "Your message"
git push origin main

# Check Git status
git status

# View Git history
git log
```

---

## Getting Help

If you're stuck:

1. **Read error messages carefully** - They usually tell you what's wrong
2. **Google the error** - Copy and paste it into Google
3. **Check Stack Overflow** - Most common issues have solutions there
4. **GitHub Issues** - Check the repository's Issues tab
5. **Contact**: Email viranjandesilva@gmail.com with:
   - What you were trying to do
   - The exact error message
   - Screenshots if possible

---

## Tips for Success

1. ✓ **Test locally first** before deploying
2. ✓ **Commit often** - Save your progress frequently
3. ✓ **Read error messages** - They're helpful!
4. ✓ **Keep backups** - Copy your project folder before major changes
5. ✓ **Be patient** - GitHub Pages can take 10 minutes to update
6. ✓ **Use descriptive commit messages** - You'll thank yourself later

---

## Congratulations! 🎉

You now have a professional portfolio website live on the internet!

**Share it:**
- Add it to your CV
- Include it in PhD applications  
- Share on LinkedIn
- Add to email signatures

**Next steps:**
- Regularly update with new projects
- Add blog posts or research papers
- Connect a custom domain (optional)

Good luck with your PhD applications! 🚀

---

**Last Updated:** January 2026
**Support:** viranjandesilva@gmail.com
