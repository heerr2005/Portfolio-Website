# Heer Chotaliya - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features include interactive data visualizations, dark/light theme toggle, and professional animations.

## 🚀 Live Demo

**Portfolio Website**: [Live Demo](https://heer-chotaliya.vercel.app/)

## ✨ Features

- **Modern Design**: Clean, minimalist design with professional aesthetics
- **Interactive Data Visualization**: Animated charts and dashboard elements
- **Dark/Light Theme**: Toggle between light and dark modes with smooth transitions
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Professional animations and transitions throughout
- **Animated Skills**: Progress bars with percentage animations
- **Contact Integration**: Professional contact section with social links
- **Single Page Application**: Smooth scrolling navigation between sections

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Custom Design System
- **Build Tool**: Vite
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Charts**: Recharts
- **Fonts**: Inter + Dancing Script (Google Fonts)

## 📁 Project Structure

```
heer-chotaliya-portfolio/
├── src/
│   ├── components/          # React components
│   ├── contexts/           # React contexts (Theme, etc.)
│   ├── hooks/              # Custom hooks
│   ├── lib/                # Utilities and configurations
│   ├── App.tsx             # Main app component
│   └── main.tsx            # App entry point
├── public/                 # Static assets
├── dist/                   # Built files for deployment
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
└── package.json            # Dependencies and scripts
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or pnpm package manager

### Local Development

1. **Clone and navigate to project**:
   ```bash
   cd heer-chotaliya-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open browser**:
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
pnpm build
```

The built files will be in the `dist/` folder.

## 📄 Deploy to GitHub Pages

### Method 1: Manual Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Prepare GitHub Pages files**:
   The built files in `dist/` folder are ready for GitHub Pages. Copy all contents from `dist/` folder to your GitHub repository root.

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Select **Deploy from a branch**
   - Choose **main** branch and **/ (root)** folder
   - Click **Save**

4. **Access your site**:
   Your portfolio will be available at:
   ```
   https://your-username.github.io/your-repo-name/
   ```

### Method 2: GitHub Actions (Automated)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
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

## 🎨 Customization

### Colors and Theme
- Theme colors are defined in `tailwind.config.js`
- Custom CSS variables in `src/index.css`
- Dark/light mode implementation in `src/contexts/ThemeContext.tsx`

### Content Updates
- **Personal Information**: Edit components in `src/components/sections/`
- **Skills**: Update skills and percentages in Skills component
- **Experience**: Modify experience data in Experience component
- **Projects**: Add/edit projects in Projects component
- **Contact**: Update contact information in Contact component

### Adding New Sections
1. Create component in `src/components/sections/`
2. Add route in `src/App.tsx`
3. Update navigation in Navigation component
4. Add responsive styles with Tailwind CSS

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## ⚡ Performance

- **Optimized Build**: Tree-shaking and code splitting
- **Lazy Loading**: Components loaded on demand
- **Optimized Images**: Responsive images with proper formats
- **CSS Purging**: Unused styles removed in production

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run clean        # Clean node_modules and cache
```

## 📊 Analytics & Tracking

The portfolio includes:
- **Performance Metrics**: Real-time counters and statistics
- **Interactive Charts**: Data visualization with Recharts
- **Skill Progress**: Animated progress bars
- **Professional Metrics**: Years of experience, projects completed, etc.

## 🎯 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Progressive Enhancement**: Graceful degradation for older browsers

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## 🙏 Acknowledgments

- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Dancing Script)
- **Framework**: React + Vite
- **Styling**: Tailwind CSS

---

**Built with ❤️ by Heer Chotaliya**
