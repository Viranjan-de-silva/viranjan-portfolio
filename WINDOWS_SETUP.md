# Windows Setup Guide for Viranjan Portfolio

Complete guide for setting up and deploying your portfolio on Windows.

## 📋 Prerequisites Installation

### 1. Install Node.js and npm

1. **Download Node.js:**
   - Go to [https://nodejs.org/](https://nodejs.org/)
   - Click the **"LTS"** button (recommended for most users)
   - Download will start automatically (file: `node-v20.x.x-x64.msi`)

2. **Install Node.js:**
   - Double-click the downloaded `.msi` file
   - Click "Next" through the installer
   - **Important:** Keep "Automatically install the necessary tools" CHECKED
   - Click "Install" (may ask for administrator permission - click "Yes")
   - Wait for installation to complete
   - Click "Finish"

3. **Restart your computer** (important!)

4. **Verify installation:**
   - Press `Win + R`
   - Type `cmd` and press Enter
   - In the Command Prompt, type:
   ```cmd
   node --version
   ```
   Should show: `v20.x.x` or similar
   
   ```cmd
   npm --version
   ```
   Should show: `10.x.x` or similar

### 2. Install Git

1. **Download Git:**
   - Go to [https://git-scm.com/download/win](https://git-scm.com/download/win)
   - Download will start automatically (file: `Git-2.x.x-64-bit.exe`)

2. **Install Git:**
   - Double-click the downloaded `.exe` file
   - Click "Next" on the welcome screen
   - Keep default installation location → "Next"
   - Keep default components → "Next"
   - Keep default Start Menu folder → "Next"
   - **Default editor:** Choose "Use Visual Studio Code" or "Use Notepad++" → "Next"
   - **Initial branch name:** Select "Override" and type `main` → "Next"
   - **PATH environment:** Select "Git from the command line and also from 3rd-party software" → "Next"
   - **HTTPS transport:** Keep "Use bundled OpenSSL library" → "Next"
   - **Line endings:** Keep "Checkout Windows-style, commit Unix-style" → "Next"
   - **Terminal emulator:** Keep "Use MinTTY" → "Next"
   - **git pull:** Keep default → "Next"
   - **Credential helper:** Keep "Git Credential Manager" → "Next"
   - **Extra options:** Keep defaults → "Next"
   - Click "Install"
   - Click "Finish"

3. **Verify installation:**
   - Open new Command Prompt (`Win + R` → type `cmd`)
   - Type:
   ```cmd
   git --version
   ```
   Should show: `git version 2.x.x`

### 3. Create GitHub Account

1. Go to [https://github.com](https://github.com)
2. Click "Sign up"
3. Enter your email (use your academic email if preferred)
4. Create a password
5. Choose a username (e.g., `viranjan-ds`)
6. Verify you're not a robot
7. Click "Create account"
8. Check your email and verify your account

---

## 🚀 Setting Up Your Portfolio

### Step 1: Extract the Project Files

1. **Locate the downloaded file:**
   - Go to your Downloads folder
   - Find `viranjan-portfolio.tar.gz`

2. **Extract using 7-Zip** (recommended):
   - If you don't have 7-Zip, download from [https://www.7-zip.org/](https://www.7-zip.org/)
   - Right-click `viranjan-portfolio.tar.gz`
   - Select "7-Zip" → "Extract Here"
   - This creates `viranjan-portfolio.tar`
   - Right-click `viranjan-portfolio.tar` again
   - Select "7-Zip" → "Extract Here"
   - This creates the `viranjan-portfolio` folder

3. **Move to a better location:**
   - Move the `viranjan-portfolio` folder to:
   - `C:\Users\YourName\Documents\Projects\`
   - OR
   - `C:\Projects\`
   
   **Create the Projects folder if it doesn't exist!**

### Step 2: Open Command Prompt in Project Folder

**Method 1 - Easy way:**
1. Open File Explorer
2. Navigate to your `viranjan-portfolio` folder
3. Click in the address bar at the top
4. Type `cmd` and press Enter
5. Command Prompt opens in that folder!

**Method 2 - Manual way:**
1. Press `Win + R`
2. Type `cmd` and press Enter
3. Type:
```cmd
cd C:\Users\YourName\Documents\Projects\viranjan-portfolio
```
(Adjust path to where you put the folder)

**Verify you're in the right place:**
```cmd
dir
```
You should see files like: `package.json`, `README.md`, `src`, etc.

### Step 3: Install Project Dependencies

```cmd
npm install
```

**What happens:**
- Downloads React and all required packages
- Creates a `node_modules` folder
- Takes 2-5 minutes
- You'll see lots of text scrolling - this is normal!

**Expected output:**
```
added 1500+ packages in 3m
```

**If you get an error:**
- Make sure you're in the correct folder (check with `dir`)
- Make sure Node.js is installed (check with `node --version`)
- Close and reopen Command Prompt

---

## ⚙️ Customize Your Portfolio

### Step 1: Install a Text Editor (if you don't have one)

**Option 1 - Visual Studio Code (Recommended):**
1. Download from [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Install it
3. Right-click your `viranjan-portfolio` folder
4. Select "Open with Code"

**Option 2 - Notepad++:**
1. Download from [https://notepad-plus-plus.org/](https://notepad-plus-plus.org/)
2. Install it
3. Open files by right-clicking → "Edit with Notepad++"

**Option 3 - Windows Notepad:**
- Already installed on Windows
- Right-click files → "Open with" → "Notepad"

### Step 2: Update package.json

1. Open `package.json` in your text editor
2. Find this line (around line 5):
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/viranjan-portfolio",
```

3. Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username
   - Example: If your GitHub username is `viranjan-ds`:
```json
"homepage": "https://viranjan-ds.github.io/viranjan-portfolio",
```

4. Save the file (`Ctrl + S`)

### Step 3: Update Personal Information

1. Open `src\App.js` in your text editor
2. Press `Ctrl + F` to open Find

**Update LinkedIn (around line 325):**
- Search for: `linkedin.com/in/`
- Replace `viranjan-de-silva` with your LinkedIn username
```javascript
href="https://linkedin.com/in/YOUR-LINKEDIN-USERNAME"
```

**Update GitHub (around line 333):**
- Search for: `github.com/`
- Replace `viranjandesilva` with your GitHub username
```javascript
href="https://github.com/YOUR-GITHUB-USERNAME"
```

**Update Email (search for it):**
- Search for: `viranjandesilva@gmail.com`
- Replace all occurrences (usually 2-3) with your email

**Update Phone (search for it):**
- Search for: `+94768022882`
- Replace with your phone number

3. Save the file (`Ctrl + S`)

---

## 🧪 Test Your Portfolio Locally

### Step 1: Start Development Server

In Command Prompt (in your project folder):
```cmd
npm start
```

**What happens:**
- Compiles your React app
- Starts a local server
- Automatically opens your browser to `http://localhost:3000`
- Takes 10-30 seconds

**Your portfolio should now be visible in your browser!**

### Step 2: Check Everything Works

Test these:
- ✓ Click navigation buttons (Home, About, Projects, etc.)
- ✓ Scroll down to see all sections
- ✓ Click on social media icons
- ✓ Check all your information is correct
- ✓ Resize browser window to test mobile view

### Step 3: Stop the Server

When you're done testing:
- Go to Command Prompt
- Press `Ctrl + C`
- Press `Y` when asked "Terminate batch job?"

---

## 📤 Deploy to GitHub

### Step 1: Configure Git (First Time Only)

In Command Prompt:
```cmd
git config --global user.name "Viranjan-de-silva"
git config --global user.email "viranjandesilva@gmail.com"
```

Use the same email as your GitHub account!

### Step 2: Create GitHub Repository

1. **Go to GitHub:**
   - Visit [https://github.com](https://github.com)
   - Sign in to your account

2. **Create new repository:**
   - Click the **"+"** icon (top-right corner)
   - Select **"New repository"**

3. **Fill in details:**
   - **Repository name:** `viranjan-portfolio`
   - **Description:** "Personal portfolio showcasing mechatronic engineering projects"
   - **Visibility:** Select **Public** (required for free GitHub Pages)
   - **Important:** Do NOT check "Add a README file"
   - **Important:** Do NOT add .gitignore or license
   - Click **"Create repository"**

4. **Copy your repository URL:**
   - You'll see a URL like: `https://github.com/YOUR-USERNAME/viranjan-portfolio.git`
   - Copy this URL (you'll need it soon!)

### Step 3: Initialize Git in Your Project

In Command Prompt (in your project folder):
```cmd
git init
```

### Step 4: Add All Files

```cmd
git add .
```

### Step 5: Create First Commit

```cmd
git commit -m "Initial commit: Portfolio website"
```

### Step 6: Connect to GitHub

```cmd
git remote add origin https://github.com/YOUR-USERNAME/viranjan-portfolio.git
```

**Replace `YOUR-USERNAME` with your actual GitHub username!**

Example:
```cmd
git remote add origin https://github.com/viranjan-ds/viranjan-portfolio.git
```

### Step 7: Push to GitHub

```cmd
git branch -M main
git push -u origin main
```

**If prompted for credentials:**
- **Username:** Your GitHub username
- **Password:** You need a Personal Access Token (NOT your GitHub password)

**Creating a Personal Access Token:**
1. Go to GitHub → Click your profile picture → Settings
2. Scroll down → Click "Developer settings" (bottom of left sidebar)
3. Click "Personal access tokens" → "Tokens (classic)"
4. Click "Generate new token" → "Generate new token (classic)"
5. **Note:** Type "Portfolio Deployment"
6. **Expiration:** Select "No expiration" or "90 days"
7. **Scopes:** Check the box for `repo` (this selects all sub-boxes)
8. Scroll down → Click "Generate token"
9. **Copy the token!** (It looks like: `ghp_1234567890abcdef...`)
10. **Save it somewhere safe!** You won't be able to see it again

**Use this token as your password when Git asks!**

### Step 8: Deploy to GitHub Pages

```cmd
npm run deploy
```

**What happens:**
- Builds an optimized production version
- Creates a `gh-pages` branch
- Pushes the build to GitHub
- Takes 1-2 minutes

**Expected output:**
```
Published
```

### Step 9: Enable GitHub Pages

1. **Go to your repository on GitHub:**
   - `https://github.com/YOUR-USERNAME/viranjan-portfolio`

2. **Open Settings:**
   - Click the "Settings" tab (top of page)

3. **Navigate to Pages:**
   - Click "Pages" in the left sidebar

4. **Configure GitHub Pages:**
   - **Source:** Select `gh-pages` branch from dropdown
   - **Folder:** Select `/ (root)`
   - Click "Save"

5. **Get your website URL:**
   - You'll see: "Your site is published at https://YOUR-USERNAME.github.io/viranjan-portfolio"
   - Copy this URL!

**Wait 5-10 minutes for your site to be deployed.**

### Step 10: Visit Your Live Website!

Open your browser and go to:
```
https://YOUR-USERNAME.github.io/viranjan-portfolio
```

**If you see a 404 error:**
- Wait another 5 minutes (GitHub Pages can be slow)
- Make sure GitHub Pages is enabled (Step 9)
- Check the homepage URL in `package.json` is correct

**Success!** 🎉 Your portfolio is now live on the internet!

---

## 🔄 Updating Your Website

When you want to make changes:

### Step 1: Make Changes
- Open files in your text editor
- Edit content, update projects, etc.
- Save files (`Ctrl + S`)

### Step 2: Test Changes Locally
```cmd
npm start
```
Check that everything looks good.

### Step 3: Save Changes to Git
```cmd
git add .
git commit -m "Updated project descriptions"
git push origin main
```

### Step 4: Deploy Updates
```cmd
npm run deploy
```

### Step 5: Wait and Check
- Wait 5-10 minutes
- Visit your portfolio URL
- Press `Ctrl + Shift + R` to hard refresh (clears cache)

---

## 🐛 Troubleshooting Windows-Specific Issues

### Issue: "npm is not recognized as an internal or external command"

**Solution:**
1. Restart your computer
2. Open a NEW Command Prompt
3. Try again
4. If still not working, reinstall Node.js

### Issue: "git is not recognized as an internal or external command"

**Solution:**
1. Restart your computer
2. Open a NEW Command Prompt
3. Try again
4. If still not working, reinstall Git

### Issue: Windows Defender or Antivirus Blocks npm install

**Solution:**
1. Open Windows Security
2. Go to "Virus & threat protection"
3. Click "Manage settings"
4. Temporarily disable "Real-time protection"
5. Run `npm install`
6. Re-enable "Real-time protection"

### Issue: Permission Denied Error

**Solution:**
1. Close all programs that might be using the files
2. Run Command Prompt as Administrator:
   - Press `Win + X`
   - Select "Command Prompt (Admin)" or "PowerShell (Admin)"
   - Navigate to your project folder
   - Try again

### Issue: Port 3000 is Already in Use

**Solution:**
```cmd
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F
```
Replace `<PID_NUMBER>` with the number shown.

Or just restart your computer.

### Issue: Cannot Find Module Error

**Solution:**
1. Delete `node_modules` folder
2. Delete `package-lock.json` file
3. Run `npm install` again

### Issue: Line Ending Warnings from Git

**Solution:**
```cmd
git config --global core.autocrlf true
```

---

## 💡 Windows Tips

### Using PowerShell Instead of Command Prompt

You can use PowerShell instead of cmd:
1. Open File Explorer
2. Navigate to your project folder
3. Hold `Shift` + Right-click in empty space
4. Select "Open PowerShell window here"

All commands work the same way!

### Creating a Desktop Shortcut

To quickly open Command Prompt in your project:
1. Create a new text file
2. Paste this:
```batch
@echo off
cd C:\Users\YourName\Documents\Projects\viranjan-portfolio
cmd
```
3. Save as `open-portfolio.bat` (change extension from `.txt` to `.bat`)
4. Double-click to open Command Prompt in your project folder!

### Quick Commands Reference

```cmd
# Navigate to project
cd C:\Users\YourName\Documents\Projects\viranjan-portfolio

# List files in current directory
dir

# Go up one folder
cd ..

# Clear screen
cls

# Show current path
cd

# Check Node version
node --version

# Check npm version
npm --version

# Check Git version
git --version
```

---

## ✅ Success Checklist

- [ ] Node.js installed and working
- [ ] Git installed and working
- [ ] GitHub account created
- [ ] Project extracted and in good location
- [ ] Dependencies installed (`npm install` completed)
- [ ] Personal information updated in code
- [ ] Tested locally (`npm start` works)
- [ ] Git repository created on GitHub
- [ ] Code pushed to GitHub
- [ ] Deployed to GitHub Pages
- [ ] Website is live and accessible

---

## 📞 Need More Help?

**Common Resources:**
- Node.js help: [https://nodejs.org/en/docs/](https://nodejs.org/en/docs/)
- Git for Windows: [https://gitforwindows.org/](https://gitforwindows.org/)
- GitHub docs: [https://docs.github.com/](https://docs.github.com/)

**Contact:**
- Email: viranjandesilva@gmail.com
- Include screenshots of any errors

---

**Congratulations!** You now have a professional portfolio website running on GitHub Pages! 🚀

Good luck with your PhD applications! 🎓
