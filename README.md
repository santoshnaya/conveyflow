# Planet Replica

A dynamic, scroll-driven landing page replicating Planet's climate action hub design. Built with Next.js, TypeScript, and Tailwind CSS, featuring immersive GSAP animations and environmental storytelling.

## 🌍 Overview

Planet Replica is a pixel-perfect clone of the Planet landing page, showcasing a global platform where changemakers advance climate action. The application features scroll-triggered animations, floating elements, and an environmental color palette that creates an engaging user experience.

## ✨ Features

- **Scroll-Driven Storytelling**: Each section unfolds with scroll-triggered animations
- **Environmental Design**: Deep blue/purple backgrounds with green/teal accents
- **Interactive Elements**: Floating project cards, animated user avatars, and hover effects
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Performance Optimized**: Built with Next.js 15 and optimized for fast loading
- **Accessibility**: Semantic HTML and proper contrast ratios

## 🚀 Technologies Used

- **Next.js 15.3.3** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP + ScrollTrigger** - Advanced scroll animations
- **Framer Motion** - React animation library
- **Lottie React** - Lightweight animations
- **Lucide React** - Beautiful SVG icons

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd planet-replica
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   ├── globals.css         # Global styles and animations
│   └── favicon.ico         # App icon
├── components/
│   ├── Navigation.tsx      # Fixed header navigation
│   ├── HeroSection.tsx     # Main hero with floating cards
│   ├── VideoSection.tsx    # Climate action video section
│   ├── FeatureSection.tsx  # Feature grid with illustrations
│   ├── CollaborationSection.tsx     # Collaboration showcase
│   ├── IntelligenceSection.tsx     # AI/intelligence features
│   ├── CollaborationToolsSection.tsx  # Mobile tools interface
│   ├── ImpactSection.tsx   # Impact value propositions
│   ├── TagCloudSection.tsx # Climate topics cloud
│   └── CTASection.tsx      # Call-to-action and footer
├── hooks/
│   └── useGSAP.ts          # GSAP animation hooks
└── lib/
    └── utils.ts            # Utility functions
```

## 🎨 Design System

### Color Palette
- **Primary**: Deep blues (#0a0f1c) and purples
- **Accent**: Bright greens (#10b981), teals, and lime
- **Background**: Gradient combinations of blue, purple, and teal
- **Text**: White and off-white for contrast

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Sizes**: Responsive scale from mobile to desktop
- **Weights**: 300, 400, 500, 600, 700

### Animations
- **Scroll Triggers**: Section pinning and element reveals
- **Floating Elements**: Continuous subtle movements
- **Hover Effects**: Scale and color transitions
- **Page Transitions**: Smooth scroll behavior

## 📱 Sections Overview

1. **Navigation** - Fixed header with Planet branding and auth buttons
2. **Hero** - Main title with floating environmental project cards
3. **Video** - Climate action video showcase with animated elements
4. **Features** - Grid layout highlighting platform capabilities
5. **Collaboration** - Project cards and animated user interactions
6. **Intelligence** - Concentric circles with orbiting user elements
7. **Tools** - Mobile interface mockup showing collaboration features
8. **Impact** - Three value proposition cards
9. **Tag Cloud** - Animated climate topics and keywords
10. **CTA** - Sign-up call-to-action with inspirational quote and footer

## 🔧 Build Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## 📈 Performance

- **Build Size**: ~200KB total bundle size
- **Loading**: Optimized with Next.js automatic optimization
- **Animations**: Hardware-accelerated with GSAP
- **Images**: Placeholder API integration ready for real assets

## 🌐 Deployment

The application is optimized for deployment on:
- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

## 🎯 Key Features Implemented

### Environmental Storytelling
- Scroll-driven narrative about climate action
- Visual progression from problem to solution
- Inspirational messaging and calls to action

### Advanced Interactions
- Floating project cards with hover effects
- Animated user avatars and collaboration indicators
- Smooth scroll animations and section transitions
- Responsive touch interactions for mobile

### Visual Excellence
- Pixel-perfect recreation of original design
- Consistent spacing and typography
- Environmental color palette throughout
- Professional gradients and shadows

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is a design replica created for educational and demonstration purposes. All design credit goes to the original Planet team.

## 🙏 Acknowledgments

- Original design inspiration from Planet
- GSAP for powerful animation capabilities
- Next.js team for the excellent framework
- Tailwind CSS for rapid styling
- Framer Motion for smooth React animations

---

**Built with ❤️ for climate action and beautiful web experiences**
