# Viranjan De Silva - Portfolio Website

A modern, responsive portfolio website showcasing mechatronic engineering projects, experience, and skills. Built with React and designed for PhD applications.

## 🚀 Live Demo

Visit the live site: `https://YOUR_GITHUB_USERNAME.github.io/viranjan-portfolio`

## ✨ Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Project Showcase**: Detailed presentations of 4 major projects
- **Interactive Navigation**: Smooth scrolling and active section tracking
- **Contact Information**: Easy access to email, phone, LinkedIn, and GitHub
- **Fast Performance**: Optimized build with React best practices

## 🛠️ Technologies Used

- React 18
- Framer Motion (animations)
- Lucide React (icons)
- CSS3 with custom properties
- GitHub Pages (hosting)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher) - [Download here](https://nodejs.org/)
- npm (comes with Node.js)
- Git - [Download here](https://git-scm.com/)
- A GitHub account

## 🔧 Installation & Setup

### Step 1: Clone or Download the Project

If you received this as a zip file, extract it. Otherwise, you can clone it:

```bash
git clone https://github.com/YOUR_USERNAME/viranjan-portfolio.git
cd viranjan-portfolio
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages including React, Framer Motion, and deployment tools.

### Step 3: Update Configuration

Open `package.json` and update the homepage URL:

```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/viranjan-portfolio"
```

Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.

### Step 4: Customize Content

Edit `src/App.js` to update:
- Your LinkedIn URL (search for "linkedin.com/in/")
- Your GitHub URL (search for "github.com/")
- Project links and details
- Any other personal information

## 💻 Development

### Run Locally

Start the development server:

```bash
npm start
```

This will open your browser to `http://localhost:3000`. The page will reload automatically when you make changes.

### Build for Production

Create an optimized production build:

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

## 🚢 Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name it: `viranjan-portfolio` (or any name you prefer)
4. **Important**: Keep it public for free GitHub Pages hosting
5. Don't initialize with README (we already have one)
6. Click "Create repository"

### Step 2: Initialize Git (if not already done)

```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

### Step 3: Connect to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/viranjan-portfolio.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### Step 4: Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
1. Build your project
2. Create a `gh-pages` branch
3. Push the build to that branch
4. Set up GitHub Pages automatically

### Step 5: Enable GitHub Pages (if needed)

1. Go to your repository on GitHub
2. Click "Settings" → "Pages"
3. Under "Source", select branch: `gh-pages` and folder: `/ (root)`
4. Click "Save"

Your site will be live at: `https://YOUR_USERNAME.github.io/viranjan-portfolio`

*Note: It may take 5-10 minutes for changes to appear online.*

## 🔄 Updating Your Website

After making changes to your code:

```bash
# Save your changes
git add .
git commit -m "Description of changes"
git push origin main

# Deploy the updates
npm run deploy
```

## 📱 Customization Guide

### Changing Colors

Edit the CSS variables in `src/App.css`:

```css
:root {
  --primary: #0a0e27;      /* Main background */
  --accent: #00d9ff;       /* Accent color (links, highlights) */
  --text: #e8eaed;         /* Text color */
  /* ... more variables */
}
```

### Adding/Removing Projects

In `src/App.js`, find the `projects` array and add/remove project objects:

```javascript
const projects = [
  {
    id: 1,
    title: "Your Project Title",
    category: "Category Name",
    description: "Project description...",
    technologies: ["Tech1", "Tech2"],
    highlights: ["Highlight 1", "Highlight 2"],
    image: "🤖", // Emoji icon
    links: {
      demo: "#",
      github: "#"
    }
  },
  // Add more projects...
];
```

### Updating Contact Information

Search for the contact section in `src/App.js` and update:
- Email: `viranjandesilva@gmail.com`
- Phone: `+94 768 022 882`
- LinkedIn URL
- GitHub URL

## 🐛 Troubleshooting

### "npm: command not found"
- Install Node.js from [nodejs.org](https://nodejs.org/)

### Changes not showing after deployment
- Wait 5-10 minutes for GitHub Pages to update
- Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check the gh-pages branch was updated

### 404 Error on GitHub Pages
- Verify the homepage URL in `package.json` matches your GitHub username
- Ensure GitHub Pages is enabled and set to the `gh-pages` branch

### Deployment fails
- Run `npm install gh-pages --save-dev` to ensure gh-pages is installed
- Check that you've committed all changes to git first

## 📊 Project Structure

```
viranjan-portfolio/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── App.js              # Main component with all content
│   ├── App.css             # Styling
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies and scripts
├── .gitignore             # Git ignore file
└── README.md              # This file
```

## 📝 Available Scripts

- `npm start` - Run development server
- `npm run build` - Build for production
- `npm run deploy` - Deploy to GitHub Pages
- `npm test` - Run tests

## 🎨 Design Philosophy

This portfolio features:
- **Tech-forward aesthetic**: Inspired by robotics and automation
- **High contrast**: Dark theme with cyan accents for readability
- **Smooth animations**: Framer Motion for professional interactions
- **Grid patterns**: Technical background reflecting engineering focus
- **Clear hierarchy**: Easy for PhD supervisors to find relevant information

## 📄 License

This project is open source and available for personal use.

## 🤝 Support

If you encounter any issues:
1. Check this README thoroughly
2. Search for the error message online
3. Check GitHub Issues in the repository
4. Reach out to: viranjandesilva@gmail.com

## 🎓 For PhD Applications

When sharing this portfolio with potential PhD supervisors:
1. Ensure all project links are working
2. Update LinkedIn with recent accomplishments
3. Keep contact information current
4. Consider adding a PDF version of your CV
5. Mention the portfolio URL in your application emails

---

**Created by Viranjan De Silva** | Mechatronic Engineer | 2026

Good luck with your PhD applications! 🚀
