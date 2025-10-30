# GitHub Pages Deployment Guide

## Step-by-Step Instructions

### 1. Update Configuration for Your Repository

**Edit `vite.config.ts`** - Change the base URL to your repository name:

```typescript
base: '/your-actual-repo-name/', // Replace with your GitHub repository name
```

**For example**, if your repo is `heer-chotaliya-portfolio`, it should be:
```typescript
base: '/heer-chotaliya-portfolio/',
```

### 2. Build the Project

```bash
# Navigate to project folder
cd heer-chotaliya-portfolio

# Install dependencies
npm install

# Build for production
npm run build
```

This creates a `dist` folder with all the static files.

### 3. Deploy to GitHub Pages

**Option A: Manual Upload (Recommended)**

1. Go to your GitHub repository
2. Click on the `dist` folder in your local project
3. Upload ALL contents of the `dist` folder to your repository root:
   - `index.html`
   - `assets` folder (contains CSS and JS files)
   - Any other files from dist

**Option B: Using GitHub Actions (Advanced)**

Create a `.github/workflows/deploy.yml` file:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Select source:
   - **If you uploaded files manually**: Select "Deploy from a branch"
   - **Branch**: Select "main" (or "master")
   - **Folder**: Select "/ (root)" if you uploaded files directly
5. Click "Save"

### 5. Access Your Website

Your website will be available at:
`https://your-username.github.io/your-repo-name/`

**Wait 5-10 minutes** for deployment to complete.

## Troubleshooting

### Common Issues:

**1. 404 Errors**
- Make sure `base` in `vite.config.ts` matches your repo name exactly
- Check that you uploaded the correct files from the `dist` folder

**2. Styling Missing**
- Ensure the `assets` folder from `dist` was uploaded
- Check that `base` path is correct

**3. Page Not Found**
- GitHub Pages takes time to deploy (up to 10 minutes)
- Try refreshing or clearing browser cache

### Quick Check:
1. Build the project locally: `npm run build`
2. Test the build: `npm run preview`
3. If it works locally, the same files should work on GitHub Pages

## File Structure Expected on GitHub:
```
your-repo/
├── index.html
└── assets/
    ├── index-[hash].css
    └── index-[hash].js
```

**Make sure you upload the contents of the `dist` folder, not the `dist` folder itself!**