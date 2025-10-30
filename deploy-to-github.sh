#!/bin/bash

# GitHub Pages Deployment Script
echo "🚀 Preparing files for GitHub Pages deployment..."

# Create a clean deploy folder
rm -rf deploy-gh-pages
mkdir -p deploy-gh-pages

# Copy the dist folder contents to deploy folder
cp -r dist/* deploy-gh-pages/

echo "✅ Files prepared in 'deploy-gh-pages' folder"
echo ""
echo "📋 Next steps:"
echo "1. Upload ALL files from 'deploy-gh-pages' folder to your GitHub repository root"
echo "2. Make sure to upload these files:"
echo "   - index.html"
echo "   - assets/ folder (contains CSS and JS files)"
echo "3. Go to your repository settings on GitHub"
echo "4. Enable GitHub Pages"
echo "5. Select 'Deploy from a branch' → main → / (root)"
echo ""
echo "🔗 Your website will be available at:"
echo "https://your-username.github.io/your-repo-name/"
echo ""
echo "⚠️  Wait 5-10 minutes for deployment to complete!"