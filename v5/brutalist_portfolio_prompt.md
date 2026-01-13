# COMPREHENSIVE BRUTALIST WEB DEVELOPER PORTFOLIO - BUILD SPECIFICATION

## 🎯 PROJECT OVERVIEW
You are tasked with building a modern web developer portfolio website using Neo-Brutalist design principles. This is a production-ready, professional portfolio that showcases projects, skills, and experience with cutting-edge interactions and animations.

---

## 🚨 CRITICAL REQUIREMENTS - READ FIRST

### MANDATORY PRE-BUILD RESEARCH PROTOCOL
Before implementing ANY feature, you MUST:

1. **Research Phase (For Each Major Feature)**
   - Search for best practices for the specific implementation
   - Review anime.js documentation for the animation technique needed
   - Investigate React patterns for the component structure
   - Look up performance optimization strategies for that feature
   - Document your findings in code comments

2. **Implementation Phase**
   - Only proceed after completing research
   - Implement based on best practices discovered
   - Test the feature in isolation first
   - Integrate with the broader application

3. **Features Requiring Research Before Implementation**
   - Scroll-triggered stacking sections
   - Click/hover-to-expand card mechanics
   - Anime.js integration with React hooks
   - Intersection Observer API usage
   - Performance optimization for animations
   - Responsive brutalist grid systems
   - Accessibility compliance for animated elements

---

## 🎨 DESIGN SYSTEM SPECIFICATIONS

### Color Palette (STRICT - NO GRADIENTS)
```
Primary Background: #FFFFFF (White)
Secondary Background: #F5F5F5 (Off-white/Light Gray)
Accent Color: #FF00FF or #7B00FF (Vibrant Magenta/Purple)
Text Primary: #000000 (Pure Black)
Text Secondary: #333333 (Dark Gray)
Border/Grid Lines: #000000 (Pure Black, 1-2px)
Hover State: #FFFF00 (Yellow) or invert current color
```

**ABSOLUTE RULES:**
- NO gradients anywhere
- NO soft shadows or blurs
- NO rounded corners (use sharp 0px border-radius)
- Only solid, flat colors
- High contrast at all times (WCAG AAA compliance)

### Typography System
```
Headings Font: 'Space Grotesk', 'Inter', or 'IBM Plex Mono' (monospace acceptable)
Body Font: 'Inter', 'Helvetica Neue', or system-ui
Code Font: 'JetBrains Mono', 'Fira Code'

Font Sizes (Mobile-first, then desktop):
- H1: 48px → 96px (extra bold, 700-900 weight)
- H2: 36px → 64px (bold, 700 weight)
- H3: 24px → 36px (bold, 700 weight)
- Body: 16px → 18px (regular, 400 weight)
- Small: 14px → 16px (regular, 400 weight)

Line Height: 1.2-1.4 for headings, 1.6-1.8 for body
Letter Spacing: -0.02em for headings, normal for body
```

### Grid & Layout System
```
Base Grid: 12 columns
Gutter: 24px (mobile) → 32px (desktop)
Max Width: 1400px
Section Padding: 80px (mobile) → 160px (desktop)
Visible Grid Lines: 1-2px solid black borders
```

**Grid Implementation:**
- Show visible grid lines as borders
- Use CSS Grid for main layout
- Maintain strict alignment to grid
- Grid should be part of the aesthetic, not hidden

### Spacing Scale (8px base)
```
xs: 8px
sm: 16px
md: 24px
lg: 32px
xl: 48px
2xl: 64px
3xl: 96px
4xl: 128px
```

---

## 🏗️ TECHNICAL STACK & SETUP

### Required Technologies
```
Core: React 19+ (functional components only)
Animation: anime.js (v3+)
Styling: Tailwind
Icons: lucide-react (brutalist-friendly icons)
Deployment: Optimized for Vercel/Netlify
```

### Project Structure
```
src/
├── components/
│   ├── sections/
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── SkillsSection.jsx
│   │   └── ContactSection.jsx
│   ├── interactive/
│   │   ├── StackingCard.jsx
│   │   ├── ExpandableCard.jsx
│   │   └── ProjectCard.jsx
│   ├── layout/
│   │   ├── Navigation.jsx
│   │   ├── Footer.jsx
│   │   └── GridOverlay.jsx
│   └── animations/
│       ├── useScrollAnimation.js
│       ├── useStackingEffect.js
│       └── animeConfig.js
├── hooks/
│   ├── useIntersectionObserver.js
│   ├── useScrollProgress.js
│   └── useMediaQuery.js
├── styles/
│   ├── globals.css
│   ├── variables.css
│   └── animations.css
├── utils/
│   └── animationHelpers.js
└── data/
    ├── projects.js
    └── skills.js
```

---

## 🎬 ANIMATION & INTERACTION SPECIFICATIONS

### 1. STACKING-ON-SCROLL SECTIONS

**Behavior Description:**
As user scrolls down, sections should "stack" on top of each other with a card-like appearance, creating a layered effect where previous sections remain partially visible underneath.

**Research Required:**
- Best practices for scroll-triggered animations with anime.js
- CSS transforms for 3D stacking effects
- Intersection Observer optimal thresholds
- Performance optimization for scroll animations

**Implementation Requirements:**
```javascript
// Pseudo-code structure
const StackingSection = ({ children, index }) => {
  // RESEARCH: anime.js scroll-linked animations
  // RESEARCH: Intersection Observer API usage
  
  useEffect(() => {
    // Setup intersection observer
    // Trigger anime.js animation when threshold met
    // Stack with z-index and transform: scale() + translateY()
  }, []);
  
  return (
    <section 
      style={{
        zIndex: sections.length - index,
        transform: `scale(${scale}) translateY(${offset}px)`,
        border: '2px solid black',
        background: 'white'
      }}
    >
      {children}
    </section>
  );
};
```

**Animation Specifications:**
- Duration: 600-800ms
- Easing: 'easeOutExpo' or 'spring(1, 80, 10, 0)'
- Scale: From 1.0 to 0.95 for sections underneath
- TranslateY: Progressive offset (20px per stacked section)
- Opacity: Sections underneath should remain at 1.0 (fully visible)

**Visual Result:**
```
[Current Section - Full size, z-index: 3]
  [Previous Section - 95% scale, visible, z-index: 2]
    [Earlier Section - 90% scale, visible, z-index: 1]
```

### 2. EXPANDABLE CARDS SYSTEM

**Two Variants Required:**

#### A. Click-to-Expand Cards (Projects)

**Behavior:**
- Initial state: Compact card showing title, thumbnail, tech stack tags
- Clicked state: Expands to show full description, images, links, details
- Re-click or click outside: Collapses back

**Research Required:**
- React state management for expand/collapse
- anime.js height animations
- Accessible toggle patterns (ARIA attributes)
- Preventing layout shift during expansion

**Implementation:**
```javascript
const ExpandableProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);
  
  // RESEARCH: anime.js for smooth height transitions
  // RESEARCH: Accessible button patterns for expand/collapse
  
  const handleExpand = () => {
    anime({
      targets: cardRef.current,
      height: isExpanded ? '200px' : 'auto',
      duration: 500,
      easing: 'easeOutQuart'
    });
    setIsExpanded(!isExpanded);
  };
  
  return (
    <div 
      ref={cardRef}
      onClick={handleExpand}
      style={{
        border: '3px solid black',
        padding: '24px',
        cursor: 'pointer',
        overflow: 'hidden'
      }}
      role="button"
      aria-expanded={isExpanded}
      tabIndex={0}
    >
      {/* Compact content always visible */}
      <h3>{project.title}</h3>
      <img src={project.thumbnail} alt="" />
      
      {/* Expanded content */}
      {isExpanded && (
        <div className="expanded-content">
          <p>{project.fullDescription}</p>
          <div className="tech-stack">{/* tags */}</div>
          <a href={project.link}>View Project</a>
        </div>
      )}
    </div>
  );
};
```

**Animation Specs:**
- Duration: 400-500ms
- Easing: 'easeOutQuart'
- Border: Increase from 2px to 3px on expand
- Background: Remain white (no gradient)
- Shadow: None (against brutalist principles)

#### B. Hover-to-Expand Cards (Skills/Tools)

**Behavior:**
- Default: Small card with icon and tool name
- On hover: Expands to show proficiency level, years of experience, brief description
- On mouse leave: Collapses back smoothly

**Research Required:**
- CSS hover states vs JavaScript hover handling
- anime.js integration with hover events
- Preventing hover jank on mobile
- Accessibility for hover-only interactions

**Implementation:**
```javascript
const HoverExpandCard = ({ skill }) => {
  const cardRef = useRef(null);
  
  // RESEARCH: Best way to handle hover with anime.js
  // RESEARCH: Mobile-friendly alternatives (tap to expand?)
  
  const handleMouseEnter = () => {
    anime({
      targets: cardRef.current,
      width: '300px',
      height: '200px',
      duration: 300,
      easing: 'easeOutQuad'
    });
  };
  
  const handleMouseLeave = () => {
    anime({
      targets: cardRef.current,
      width: '150px',
      height: '150px',
      duration: 200,
      easing: 'easeInQuad'
    });
  };
  
  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        border: '2px solid black',
        width: '150px',
        height: '150px',
        overflow: 'hidden'
      }}
    >
      {/* Content structure */}
    </div>
  );
};
```

**Mobile Consideration:**
On mobile (< 768px), convert hover-to-expand to click-to-expand behavior

### 3. ADDITIONAL ANIMATIONS

#### Page Load Animation
```javascript
// RESEARCH: anime.js stagger animations
anime({
  targets: '.section',
  translateY: [100, 0],
  opacity: [0, 1],
  delay: anime.stagger(100),
  duration: 800,
  easing: 'easeOutExpo'
});
```

#### Text Reveal Animation
```javascript
// For hero heading - character-by-character reveal
// RESEARCH: anime.js text animation techniques
anime({
  targets: '.hero-title .char',
  translateY: [100, 0],
  opacity: [0, 1],
  delay: anime.stagger(50),
  easing: 'easeOutQuad'
});
```

#### Cursor Follow Effect (Optional Enhancement)
- Custom cursor that responds to hover states
- Changes shape/size when hovering interactive elements
- Pure CSS or light JavaScript (research required)

---

## 📐 SECTION-BY-SECTION SPECIFICATIONS

### 1. NAVIGATION BAR

**Design:**
```
┌─────────────────────────────────────────────────────┐
│ LOGO          About  Projects  Skills  Contact     │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Fixed position at top
- 2px solid black bottom border
- Background: White (solid, no transparency)
- Height: 80px
- Logo: Text-based, bold, black
- Links: Uppercase, letter-spacing: 0.1em, on hover → yellow background with black text
- Active state: Underline with 3px black line

**Interaction:**
- Smooth scroll to sections on click (use `scrollIntoView` with smooth behavior)
- Current section highlighted in nav (based on scroll position)

### 2. HERO SECTION

**Layout:**
```
┌─────────────────────────────────────────────────────┐
│                                                     │
│    [GRID BACKGROUND]                                │
│                                                     │
│    YOUR NAME                                        │
│    IN MASSIVE TYPE                                  │
│                                                     │
│    Full Stack Developer                             │
│    Building digital experiences with precision      │
│                                                     │
│    [CTA Button: View Work ↓]                        │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Full viewport height (100vh)
- Visible grid overlay (light gray lines)
- Name: 96px font, bold (700-900 weight), black
- Subtitle: 24px, regular weight, dark gray
- CTA Button: 
  - Border: 3px solid black
  - Background: Yellow
  - Text: Black, uppercase, bold
  - Hover: Invert colors (black bg, yellow text)
  - Size: 200px × 60px

**Animation on Load:**
- Name: Slide in from left with opacity fade
- Subtitle: Delay 200ms, slide in from left
- Button: Delay 400ms, scale from 0 to 1

### 3. ABOUT SECTION (Stacking Section)

**Layout:**
```
┌─────────────────────────────────────────────────────┐
│ ABOUT                                         ───────│
│                                                     │
│  ┌─────────────────┐  ┌─────────────────────────┐  │
│  │                 │  │  Who I Am               │  │
│  │   [Photo or     │  │                         │  │
│  │    Abstract     │  │  3-4 paragraphs about   │  │
│  │    Graphic]     │  │  your background,       │  │
│  │                 │  │  approach, passion      │  │
│  └─────────────────┘  └─────────────────────────┘  │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Implements stacking-on-scroll behavior
- 2-column grid (1 column on mobile)
- Image/graphic: 1:1 aspect ratio, black border
- Text: 18px, line-height 1.6, dark gray
- Section title: Top-left, 48px, with horizontal line extending right

### 4. PROJECTS SECTION (Stacking Section)

**Layout:**
```
┌─────────────────────────────────────────────────────┐
│ FEATURED WORK                                 ───────│
│                                                     │
│  ┌──────────────────────┐ ┌──────────────────────┐ │
│  │ Project 1 (Collapsed) │ │ Project 2 (Collapsed)│ │
│  │ [Image]              │ │ [Image]              │ │
│  │ Title                │ │ Title                │ │
│  │ [Tags]               │ │ [Tags]               │ │
│  └──────────────────────┘ └──────────────────────┘ │
│                                                     │
│  ┌──────────────────────────────────────────────┐  │
│  │ Project 3 (EXPANDED)                         │  │
│  │ [Large Image]                                │  │
│  │ Title                                        │  │
│  │ Full description text here spanning multiple │  │
│  │ lines with details about the project...      │  │
│  │                                              │  │
│  │ Tech Stack: [Tag] [Tag] [Tag]                │  │
│  │ Role: [Your Role]                            │  │
│  │ Duration: [Timeline]                         │  │
│  │                                              │  │
│  │ [View Live] [GitHub]                         │  │
│  └──────────────────────────────────────────────┘  │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Implements stacking-on-scroll
- Grid: 2 columns (collapsed), 1 column (expanded), 1 column (mobile)
- Card borders: 2px solid black (collapsed), 3px solid black (expanded)
- Click-to-expand functionality (see expandable cards spec)
- Images: Maintain aspect ratio, 100% width
- Tags: Small pills with black border, yellow background, uppercase text
- Links: Bold, underlined, black → yellow background on hover

**Project Data Structure:**
```javascript
const projects = [
  {
    id: 1,
    title: "Project Name",
    thumbnail: "/images/project1-thumb.jpg",
    fullImage: "/images/project1-full.jpg",
    shortDesc: "Brief one-liner",
    fullDescription: "Detailed description...",
    techStack: ["React", "Node.js", "PostgreSQL"],
    role: "Full Stack Developer",
    duration: "3 months",
    liveLink: "https://...",
    githubLink: "https://github.com/..."
  },
  // More projects...
];
```

### 5. SKILLS SECTION (Stacking Section)

**Layout:**
```
┌─────────────────────────────────────────────────────┐
│ SKILLS & TOOLS                                ───────│
│                                                     │
│  Frontend                                           │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐                │
│  │ JS │ │React│ │CSS │ │... │ │... │                │
│  └────┘ └────┘ └────┘ └────┘ └────┘                │
│                                                     │
│  Backend                                            │
│  ┌────┐ ┌────┐ ┌────┐                               │
│  │Node│ │... │ │... │                               │
│  └────┘ └────┘ └────┘                               │
│                                                     │
│  (On hover, cards expand to show proficiency)       │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Implements stacking-on-scroll
- Category headers: 24px, bold, black
- Skill cards: Hover-to-expand (see hover card spec)
- Default size: 120px × 120px
- Expanded size: 250px × 180px
- Icon + skill name always visible
- On expand, show: Years of experience, proficiency bar (black border, yellow fill)

**Skill Data Structure:**
```javascript
const skills = [
  {
    category: "Frontend",
    items: [
      {
        name: "JavaScript",
        icon: "js-icon",
        proficiency: 90, // percentage
        years: 5,
        description: "Expert in modern ES6+ features"
      },
      // More skills...
    ]
  },
  // More categories...
];
```

### 6. CONTACT SECTION (Stacking Section, Final Section)

**Layout:**
```
┌─────────────────────────────────────────────────────┐
│ LET'S WORK                                          │
│ TOGETHER                                            │
│                                                     │
│  Email: your@email.com                              │
│  GitHub: github.com/username                        │
│  LinkedIn: linkedin.com/in/username                 │
│  Twitter: @username                                 │
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │ [Contact Form - Optional]                   │   │
│  │ Name: [_________________]                   │   │
│  │ Email: [________________]                   │   │
│  │ Message: [______________]                   │   │
│  │          [______________]                   │   │
│  │          [______________]                   │   │
│  │ [Send Message]                              │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Implements stacking-on-scroll
- Large heading: 64px, bold
- Contact links: 18px, underlined, click → navigate to link
- Form inputs: 
  - 2px solid black border
  - No border-radius
  - Padding: 16px
  - Focus state: 3px border, yellow background
- Submit button: Same style as CTA button in hero

### 7. FOOTER

**Layout:**
```
┌─────────────────────────────────────────────────────┐
│ © 2024 Your Name • Built with React & anime.js     │
│ [Social Icons]                                      │
└─────────────────────────────────────────────────────┘
```

**Specifications:**
- Height: 100px
- Border-top: 2px solid black
- Background: Black
- Text: White, centered, 14px
- Social icons: White stroke, 24px, hover → yellow fill

---

## ♿ ACCESSIBILITY REQUIREMENTS

**MANDATORY - Non-negotiable:**

1. **Keyboard Navigation**
   - All interactive elements accessible via Tab
   - Visible focus indicators (3px yellow outline)
   - Expandable cards work with Enter/Space keys
   - Skip to content link at top

2. **Screen Reader Support**
   - Semantic HTML (`<nav>`, `<section>`, `<article>`, etc.)
   - ARIA labels for all interactive elements
   - Alt text for all images
   - Proper heading hierarchy (H1 → H2 → H3)

3. **ARIA Attributes**
   ```html
   <div 
     role="button" 
     aria-expanded="false" 
     aria-label="Expand project details"
     tabindex="0"
   >
   ```

4. **Color Contrast**
   - All text must meet WCAG AAA standards
   - Test with color contrast checker
   - Minimum 7:1 ratio for body text
   - Minimum 4.5:1 ratio for large text

5. **Motion Sensitivity**
   - Respect `prefers-reduced-motion` media query
   - Disable/reduce animations for users who prefer it
   ```css
   @media (prefers-reduced-motion: reduce) {
     * {
       animation-duration: 0.01ms !important;
       transition-duration: 0.01ms !important;
     }
   }
   ```

6. **Focus Management**
   - When expanding cards, manage focus appropriately
   - Return focus to trigger when collapsing

---

## 📱 RESPONSIVE DESIGN SPECIFICATIONS

### Breakpoints
```css
/* Mobile First Approach */
--mobile: 320px - 767px
--tablet: 768px - 1023px
--desktop: 1024px+
--large-desktop: 1440px+
```

### Responsive Behavior

**Mobile (< 768px):**
- Navigation: Hamburger menu (brutalist style - black background, white text)
- Hero: Name font-size: 48px, single column
- About: Single column layout
- Projects: Single column, full width cards
- Skills: 2 columns grid
- All hover-to-expand → click-to-expand
- Reduce section padding to 40px

**Tablet (768px - 1023px):**
- Navigation: Horizontal, condensed
- Hero: Name font-size: 72px
- About: 2 columns
- Projects: 2 columns (collapsed)
- Skills: 3-4 columns grid
- Section padding: 80px

**Desktop (1024px+):**
- Full specifications as described above
- Hero: Name font-size: 96px
- Projects: 2 columns (collapsed), 1 column (expanded)
- Skills: 5-6 columns grid
- Section padding: 120px

**Touch Device Considerations:**
- Increase tap target sizes to minimum 44px × 44px
- Add touch feedback (brief yellow background flash on tap)
- Convert hover states to tap states appropriately

---

## ⚡ PERFORMANCE REQUIREMENTS

**MANDATORY Optimizations:**

1. **Code Splitting**
   - Lazy load sections not in viewport
   - Dynamic imports for heavy components
   ```javascript
   const ProjectsSection = lazy(() => import('./sections/ProjectsSection'));
   ```

2. **Image Optimization**
   - Use WebP format with JPEG/PNG fallback
   - Lazy load images with Intersection Observer
   - Proper sizing and responsive images
   ```html
   <img 
     loading="lazy"
     srcset="image-320w.webp 320w, image-768w.webp 768w"
     sizes="(max-width: 768px) 100vw, 50vw"
   />
   ```

3. **Animation Performance**
   - Use `transform` and `opacity` only (GPU accelerated)
   - Avoid animating `width`, `height`, `top`, `left`
   - Use `will-change` sparingly
   ```css
   .animated-element {
     will-change: transform, opacity;
   }
   ```

4. **Bundle Size**
   - Tree-shake unused anime.js features
   - Keep total bundle under 200KB (gzipped)
   - Analyze with webpack-bundle-analyzer

5. **Loading Strategy**
   - Show loading skeleton for sections
   - Implement smooth transitions between states
   - No layout shifts (CLS score < 0.1)

**Performance Targets:**
- Lighthouse Score: 90+ (all categories)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

---

## 🧪 TESTING REQUIREMENTS

**You Must Test:**

1. **Cross-Browser Testing**
   - Chrome, Firefox, Safari, Edge
   - Test animations work consistently
   - Test grid layouts render correctly

2. **Device Testing**
   - iPhone (various sizes)
   - Android phones
   - Tablets (both orientations)
   - Desktop (various screen sizes)

3. **Accessibility Testing**
   - Use axe DevTools
   - Test with screen reader (NVDA/JAWS)
   - Keyboard-only navigation test
   - Test with reduced motion enabled

4. **Performance Testing**
   - Run Lighthouse audits
   - Test on slow 3G connection
   - Monitor bundle size
   - Check animation frame rates (should be 60fps)

5. **Functionality Testing**
   - All cards expand/collapse correctly
   - Stacking sections animate smoothly
   - Navigation links scroll to correct sections
   - All links work correctly
   - Form validation (if implemented)

---

## 📋 CONTENT GUIDELINES

**Placeholder Content Structure:**

### Projects (Minimum 4-6 projects)
```javascript
{
  title: "E-Commerce Platform",
  shortDesc: "Full-stack shopping experience with real-time inventory",
  fullDescription: "Built a scalable e-commerce platform handling 10K+ daily users. Implemented real-time inventory management, secure payment processing, and personalized recommendations. Achieved 99.9% uptime and sub-200ms API response times.",
  techStack: ["React", "Node.js", "PostgreSQL", "Redis", "Stripe", "AWS"],
  role: "Lead Developer",
  duration: "4 months",
  highlights: [
    "Reduced page load time by 60%",
    "Implemented CI/CD pipeline",
    "Integrated 3 payment gateways"
  ]
}
```

### Skills (Categorized)
```javascript
{
  Frontend: ["JavaScript", "TypeScript", "React", "Vue", "HTML5", "CSS3", "Sass", "Tailwind"],
  Backend: ["Node.js", "Python", "Express", "Django", "REST APIs", "GraphQL"],
  Database: ["PostgreSQL", "MongoDB", "Redis", "Firebase"],
  DevOps: ["Docker", "AWS", "CI/CD", "Git", "Linux"],
  Tools: ["VS Code", "Figma", "Postman", "Webpack"]
}
```

### About Section
- Brief background (2-3 sentences)
- Current focus/expertise (2-3 sentences)
- What drives you (1-2 sentences)
- Optional: Fun fact or personal touch

---

## 🎯 DEFINITION OF DONE

The portfolio is considered **complete and production-ready** when:

### Functionality
- ✅ All sections render without errors
- ✅ Stacking-on-scroll works smoothly across all sections
- ✅ Click-to-expand project cards function correctly
- ✅ Hover-to-expand skill cards work (with mobile fallback)
- ✅ Navigation scrolls to sections smoothly
- ✅ All links are functional and open appropriately
- ✅ Page loads without layout shifts
- ✅ Animations run at 60fps without jank

### Design
- ✅ Follows brutalist design principles strictly
- ✅ No gradients, shadows, or rounded corners anywhere
- ✅ Color palette matches specification exactly
- ✅ Typography system implemented correctly
- ✅ Grid system visible and functional
- ✅ High contrast maintained throughout
- ✅ Spacing scale applied consistently

### Technical
- ✅ React components are properly structured
- ✅ anime.js integrated correctly with React lifecycle
- ✅ No console errors or warnings
- ✅ Code is well-commented and documented
- ✅ Research notes included for complex features
- ✅ Performance targets met (Lighthouse 90+)
- ✅ Bundle size under 200KB gzipped

### Responsive
- ✅ Works perfectly on mobile (320px+)
- ✅ Works perfectly on tablet (768px+)
- ✅ Works perfectly on desktop (1024px+)
- ✅ Touch interactions work on mobile devices
- ✅ Hover states appropriately replaced on touch devices
- ✅ No horizontal scrolling on any device

### Accessibility
- ✅ Passes axe DevTools with 0 violations
- ✅ All images have alt text
- ✅ Keyboard navigation works completely
- ✅ Focus indicators visible and clear
- ✅ Screen reader tested and functional
- ✅ WCAG AAA color contrast met
- ✅ Respects prefers-reduced-motion

### Content
- ✅ All placeholder content is realistic and well-written
- ✅ 4-6 projects included with full details
- ✅ Skills categorized and complete
- ✅ About section compelling and informative
- ✅ Contact information present and functional

### Deployment Ready
- ✅ Build completes without errors
- ✅ Production build optimized
- ✅ Environment variables configured (if needed)
- 