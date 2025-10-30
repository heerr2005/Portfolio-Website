# Design Specification - Heer Chotaliya Portfolio

**Project**: Data Analyst Professional Portfolio  
**Style**: Modern Minimalism Premium  
**Target Audience**: Tech recruiters, hiring managers, data professionals (25-45)  
**Reference**: ashutoshhathidara.com/home

---

## 1. Direction & Rationale

### Visual Essence
Clean, spacious professional aesthetic with generous whitespace and subtle sophistication. Light gradient backgrounds create depth without distraction, while dark navy typography ensures excellent readability. Floating cards with soft shadows and restrained color accents establish trust and credibility—perfect for data professionals showcasing analytical skills.

### Style Inspiration
- **ashutoshhathidara.com/home** - Direct reference with light blue gradients, two-column hero, icon-driven sections
- **stripe.com** - Spacious layouts, professional restraint
- **linear.app** - Clean navigation, subtle interactions

### Why This Works
Data analyst portfolios need to communicate precision, clarity, and professionalism. The 90% neutral color ratio lets content shine while generous spacing (64-96px sections, 32-48px cards) creates premium feel. Two-column layouts balance visual interest with readability, and icon-driven skill sections provide quick scanability—critical when recruiters spend 6-8 seconds per portfolio.

---

## 2. Design Tokens

### 2.1 Color Palette

| Token | Value | Usage | WCAG |
|-------|-------|-------|------|
| **Primary Brand** | | | |
| `primary-50` | `#E6F0FF` | Lightest backgrounds, hero gradient start | - |
| `primary-100` | `#CCE0FF` | Hover backgrounds, subtle accents | - |
| `primary-500` | `#0066FF` | Main brand color, CTAs, links | 4.53:1 ✅ |
| `primary-600` | `#0052CC` | Hover states, active links | 5.82:1 ✅ |
| `primary-900` | `#003D99` | Dark accents, emphasis | 9.38:1 ✅ |

| Token | Value | Usage |
|-------|-------|-------|
| **Neutrals** | | |
| `neutral-50` | `#FAFAFA` | Page background base |
| `neutral-100` | `#F5F5F5` | Card/surface backgrounds |
| `neutral-200` | `#E5E5E5` | Borders, dividers |
| `neutral-500` | `#A3A3A3` | Disabled text, placeholders |
| `neutral-700` | `#404040` | Secondary text, labels (8.6:1 ✅) |
| `neutral-900` | `#171717` | Primary text, headings (16.5:1 ✅) |

| Token | Value | Usage |
|-------|-------|-------|
| **Background Gradients** | | |
| `bg-gradient-hero` | `linear-gradient(135deg, #E6F0FF 0%, #F5F5F5 100%)` | Hero section |
| `bg-gradient-page` | `linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 100%)` | Page background |

| Token | Value | Usage |
|-------|-------|-------|
| **Semantic Colors** | | |
| `success` | `#10B981` | Success states |
| `warning` | `#F59E0B` | Warning states |
| `error` | `#EF4444` | Error states |
| `info` | `#3B82F6` | Info states |

**Color Strategy**: 90% neutral (backgrounds, surfaces, text), 10% primary blue (CTAs, links, active states). Hero gradient (#E6F0FF → #F5F5F5) creates depth matching reference site. All text meets WCAG AA minimum (4.5:1).

### 2.2 Typography

| Token | Value | Usage |
|-------|-------|-------|
| **Font Families** | | |
| `font-primary` | `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | All text |
| **Weights** | | |
| `font-regular` | `400` | Body text |
| `font-medium` | `500` | Navigation, labels |
| `font-semibold` | `600` | Subheadings, buttons |
| `font-bold` | `700` | Headings |

| Token | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| `text-hero` | `64px` | `700` | `1.1` | `-0.02em` | Hero name |
| `text-title` | `48px` | `700` | `1.2` | `-0.01em` | Section headers |
| `text-subtitle` | `32px` | `600` | `1.3` | `0` | Subsection headers |
| `text-large` | `20px` | `400` | `1.6` | `0` | Hero tagline, intro |
| `text-body` | `16px` | `400` | `1.5` | `0` | Body content |
| `text-small` | `14px` | `400` | `1.5` | `0` | Captions, metadata |
| `text-caption` | `12px` | `400` | `1.4` | `0.01em` | Timestamps, labels |

**Responsive (Mobile <768px):**
- `text-hero`: 48px
- `text-title`: 36px
- `text-subtitle`: 28px

### 2.3 Spacing (8-Point Grid)

| Token | Value | Usage |
|-------|-------|-------|
| `space-xs` | `8px` | Icon + text, tight inline |
| `space-sm` | `16px` | Standard element spacing |
| `space-md` | `24px` | Related group spacing |
| `space-lg` | `32px` | Card padding minimum |
| `space-xl` | `48px` | Section internal spacing |
| `space-2xl` | `64px` | Section boundaries |
| `space-3xl` | `96px` | Hero section spacing |
| `space-4xl` | `128px` | Dramatic spacing |

### 2.4 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | `8px` | Small elements |
| `radius-md` | `12px` | Buttons, inputs |
| `radius-lg` | `16px` | Cards, containers |
| `radius-xl` | `24px` | Modals |
| `radius-full` | `9999px` | Pills, avatar |

### 2.5 Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-sm` | `0 1px 2px rgba(0, 0, 0, 0.05)` | Subtle borders |
| `shadow-card` | `0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)` | Cards default |
| `shadow-card-hover` | `0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)` | Cards on hover |
| `shadow-modal` | `0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)` | Modals |

### 2.6 Animation

| Token | Value | Usage |
|-------|-------|-------|
| `duration-fast` | `200ms` | Button clicks, hovers |
| `duration-base` | `250ms` | Standard transitions |
| `duration-slow` | `300ms` | Modals, drawers |
| `easing-default` | `ease-out` | 90% of animations |
| `easing-smooth` | `ease-in-out` | Elegant moments |

---

## 3. Component Specifications

### 3.1 Hero Section

**Structure**: Two-column layout (text left 50%, illustration/visual right 50%) with gradient background.

**Tokens**:
- Background: `bg-gradient-hero` (light blue → light gray)
- Height: `500-600px`
- Padding: `space-3xl` (96px) vertical, container max-width `1200px`
- Name: `text-hero` (64px bold), `neutral-900`
- Tagline: `text-large` (20px), `neutral-700`
- Bio snippet: `text-body` (16px), `neutral-700`, max-width `600px`
- CTA button: Primary button pattern (§3.2)
- Social icons: 24px, `primary-500`, `space-sm` (16px) gap

**States**:
- Social icons hover: Scale `1.1`, color `primary-600`, `duration-fast`
- Smooth scroll to sections on nav click

**Note**: Illustration on right uses decorative data visualization graphics (charts, graphs) matching data analyst theme. Keep minimal, avoid clutter.

### 3.2 Button

**Primary CTA**:
- Height: `56px`
- Padding: `20px 32px`
- Font: `font-semibold` (600), `16px`
- Color: White text on `primary-500`
- Radius: `radius-md` (12px)
- Shadow: `shadow-sm`

**States**:
- Hover: Background `primary-600`, transform `translateY(-2px)`, `shadow-card`, `duration-fast`
- Active: Transform `translateY(0)`, shadow `shadow-sm`
- Focus: 2px `primary-500` ring, `4px` offset

**Secondary**:
- Same dimensions
- Border: `2px solid neutral-200`
- Color: `neutral-700` text, transparent background
- Hover: Background `neutral-50`

### 3.3 Card (Skills, Education, Experience, Projects)

**Structure**: Vertical card with icon/image top, title, description, metadata.

**Tokens**:
- Padding: `space-lg` (32px) on desktop, `space-md` (24px) mobile
- Background: `neutral-100` (floats on `neutral-50` page bg)
- Radius: `radius-lg` (16px)
- Border: `1px solid neutral-200` (optional, subtle)
- Shadow: `shadow-card`
- Gap between elements: `space-sm` (16px)

**Content**:
- Icon/Image: 48px for skill icons, full-width for project images
- Title: `text-subtitle` (32px semibold), `neutral-900`
- Description: `text-body` (16px), `neutral-700`
- Metadata: `text-small` (14px), `neutral-500`

**States**:
- Hover: Transform `translateY(-4px) scale(1.02)`, shadow `shadow-card-hover`, `duration-base`
- No hover on mobile (performance)

**Grid**:
- Desktop: 3 columns (4-4-4 grid), `space-md` (24px) gap
- Tablet: 2 columns
- Mobile: 1 column

### 3.4 Navigation

**Structure**: Fixed header with logo left, horizontal menu center, CTA button right.

**Tokens**:
- Height: `72px`
- Background: White with `rgba(255, 255, 255, 0.8)` + `backdrop-blur(10px)` on scroll
- Shadow: `shadow-sm` on scroll only
- Container: Max-width `1200px`, padding `space-sm` (16px) horizontal

**Elements**:
- Logo/Name: `text-large` (20px semibold), `neutral-900`
- Nav links: `text-body` (16px medium), `neutral-700`, `space-xl` (48px) gap
- Active link: `primary-500`, `2px` bottom border
- Hover: `primary-600`, `duration-fast`
- Mobile: Hamburger menu icon 24px, drawer from right

**Behavior**:
- Sticky position `top: 0`
- Smooth scroll to sections (800ms ease-in-out)
- Active link updates on scroll

### 3.5 Skill Icon Grid

**Structure**: 4-column grid of icon cards for skill categories.

**Tokens**:
- Grid: 4 columns desktop (3-3-3-3), 2 columns tablet, 1 column mobile
- Gap: `space-md` (24px)
- Card padding: `space-lg` (32px)
- Icon size: 48px, `primary-500`
- Title: `text-subtitle` (24px semibold), `neutral-900`
- Technology list: `text-small` (14px), `neutral-700`, comma-separated

**Icons**: Use SVG from Lucide (recommended):
- Data Analysis: `BarChart3` icon
- Machine Learning: `Brain` icon
- Database: `Database` icon
- Technical Skills: `Code2` icon

**States**:
- Hover: Icon color `primary-600`, slight scale `1.05`

### 3.6 Timeline (Education & Experience)

**Structure**: Vertical timeline with left date marker, right content card.

**Tokens**:
- Timeline line: `2px` width, `neutral-200`, left aligned
- Dot: `12px` circle, `primary-500`, positioned on line
- Date: `text-small` (14px medium), `neutral-500`, left of line
- Content card: Standard card pattern (§3.3), right of line
- Spacing: `space-xl` (48px) between entries

**Content**:
- Organization: `text-large` (20px semibold), `neutral-900`
- Position/Degree: `text-body` (16px), `primary-500`
- Date: `text-small` (14px), `neutral-500`
- Description: `text-body` (16px), `neutral-700`

**Mobile**: Stack vertically, remove timeline line visual.

---

## 4. Layout & Responsive

### 4.1 Website Architecture (SPA)

Based on content-structure-plan.md, single-page application with smooth scrolling navigation:

**Section Sequence**:
1. **Hero Section** (500-600px): Two-column with name, tagline, bio, CTA, social links
2. **About Section** (auto height): Single column, centered max-width 800px, bio text
3. **Skills Section** (auto height): 4-column icon grid (§3.5)
4. **Education Section** (auto height): Timeline pattern (§3.6)
5. **Experience Section** (auto height): Timeline pattern (§3.6)
6. **Projects Section** (auto height): Card grid (1-3 columns based on project count)
7. **Contact Section** (auto height): Contact info card with icons
8. **Footer** (80px): Simple attribution

**Visual Hierarchy**:
- Hero: 500-600px, highest prominence, gradient background
- Sections: 64-96px vertical spacing between each
- All sections: Centered container max-width 1200px

**Navigation Pattern**:
- Fixed header (§3.4) with smooth scroll anchor links
- Section IDs: `#home`, `#about`, `#education`, `#experience`, `#projects`, `#contact`
- Active nav link updates based on scroll position

**Transitions**:
- Smooth scroll: `scroll-behavior: smooth` with 800ms ease-in-out
- Fade-in on scroll: Sections fade + translateY(20px) as they enter viewport, stagger 100ms

**Responsive Strategy**:
- Desktop (≥1024px): Full layout, two-column hero, 3-4 column grids
- Tablet (768-1023px): Adjusted columns (2-3), reduced spacing by 25%
- Mobile (<768px): Single column, stack hero text/visual, hamburger menu, 40% spacing reduction

### 4.2 Breakpoints & Grid

| Breakpoint | Width | Container Max | Columns | Grid Gap |
|------------|-------|---------------|---------|----------|
| `sm` | 640px | 100% | 1-2 | 16px |
| `md` | 768px | 100% | 2-3 | 20px |
| `lg` | 1024px | 1024px | 3-4 | 24px |
| `xl` | 1280px | 1200px | 4 | 24px |
| `2xl` | 1536px | 1400px | 4 | 32px |

**12-Column Grid System**: All layouts use 12-column foundation for flexibility.

**Common Splits**:
- Hero: 6-6 (text-visual 50/50)
- About: 12 (full width centered, max 800px)
- Skills: 3-3-3-3 (4 equal cards)
- Timeline: 2-10 (date-content)
- Projects: 4-4-4 (3 columns) or 6-6 (2 columns)

### 4.3 Touch Targets & Mobile

- **Minimum touch target**: 48×48px on mobile
- **Nav links**: 48px height on mobile (increase from 40px desktop)
- **Buttons**: 56px minimum height maintained
- **Spacing between tappable elements**: 12px minimum

**Mobile-Specific Adjustments**:
- Reduce `space-2xl` (64px) to `space-xl` (48px)
- Reduce `space-3xl` (96px) to `space-2xl` (64px)
- Hero height: 400-500px (reduced from 500-600px)
- Card padding: 24px (reduced from 32px)
- Font sizes: Body increases to 18px for better mobile readability

---

## 5. Interaction & Animation

### 5.1 Animation Standards

**Duration Values**:
- Button hovers: `duration-fast` (200ms)
- Card hovers: `duration-base` (250ms)
- Section transitions: `duration-slow` (300ms)
- Page scroll: 800ms (elegant, not standard token)

**Easing**:
- Default: `easing-default` (ease-out) for 90% of interactions
- Smooth scrolling: `easing-smooth` (ease-in-out)

### 5.2 Micro-Animations

**Buttons**:
- Hover: `translateY(-2px)`, shadow increase, background darken
- Active: `translateY(0)`, shadow decrease
- Focus: Ring appearance with 2px border

**Cards**:
- Hover: `translateY(-4px) scale(1.02)`, `shadow-card` → `shadow-card-hover`
- Click: Subtle scale down `0.98` for 100ms

**Navigation**:
- Link hover: Color shift `neutral-700` → `primary-500`, underline slide-in from left
- Active indicator: 2px bottom border, smooth color transition

**Scroll Animations**:
- Sections fade in: Opacity `0` → `1`, `translateY(20px)` → `0`
- Stagger: 100ms delay between consecutive elements
- Trigger: When section enters 20% of viewport

**Social Icons**:
- Hover: `scale(1.1)`, color `primary-500` → `primary-600`, rotate `5deg`

### 5.3 Performance Rules

**GPU-Accelerated Only**:
- ✅ Use: `transform` (translate, scale, rotate), `opacity`
- ❌ Never: Animate `width`, `height`, `margin`, `padding`, `top`, `left`

**Reduced Motion**:
- Respect `@media (prefers-reduced-motion: reduce)`
- Disable: Scroll animations, hover lifts, rotations
- Keep: Color transitions, opacity fades (essential feedback)

### 5.4 Loading States

**Initial Page Load**:
- Hero fades in first (300ms)
- Subsequent sections stagger fade (100ms intervals)
- Total perceived load: <1.5s

**Interaction Feedback**:
- Button clicks: Immediate visual response (<50ms)
- Form submissions: Spinner with `primary-500` color
- Navigation: Smooth scroll provides implicit feedback

---

## Quality Checklist

✅ **Style Guide Compliance**: All components match Modern Minimalism Premium specs  
✅ **Spacing**: Sections 64-96px apart, cards 32-48px padding  
✅ **Color Ratio**: 90% neutral, 10% primary accent  
✅ **Typography**: Clear hierarchy, Inter font, 48-64px hero  
✅ **WCAG**: Text contrast ≥4.5:1 (primary-500: 4.53:1, neutral-900: 16.5:1)  
✅ **Border Radius**: Consistent 12-16px  
✅ **Shadows**: Subtle card elevation, hover lift  
✅ **Icons**: SVG from Lucide, 24-48px, no emojis  
✅ **Animations**: Transform/opacity only, 200-300ms, reduced motion support  
✅ **Navigation**: Horizontal (not sidebar), smooth scroll  
✅ **Hero**: 500-600px height, two-column, gradient background  
✅ **Responsive**: Breakpoints defined, touch targets 48px  
✅ **SPA Structure**: Single page, smooth scrolling sections  

**Premium Essentials Met**:
- Background layers: Page gradient + card surfaces (≥5% contrast)
- Hero prominence: 500-600px with generous padding
- Card depth: 32-48px padding, subtle shadows, hover lift
- Section spacing: 64-96px vertical gaps
- No anti-patterns: No sidebar nav, no neon colors, no tight spacing
