# Sri Veda Real Estates - Modern Website Redesign

A professional, fully-animated real estate website redesign for Sri Veda Real Estates Ongole, built with **React**, **Tailwind CSS v4**, and **Framer Motion**.

![React](https://img.shields.io/badge/React-19.2-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?logo=vite)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.33-ff0055)

## 🌟 Features

### 🎨 Modern Design
- **Professional UI/UX** - Clean, modern design with smooth animations
- **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- **Glass Morphism** - Backdrop blur effects on cards and navigation
- **Custom Scrollbar** - Themed scrollbar matching brand colors

### ✨ Animations & Effects
- **Loading Screen** - Animated rings, particles, and progress bar
- **Framer Motion** - Scroll-triggered reveals, hover effects, staggered animations
- **Parallax Effects** - Smooth parallax scrolling backgrounds
- **Counter Animations** - Numbers count up when scrolled into view
- **Image Hover Effects** - Zoom and overlay transitions on all images

### 🏠 Sections
1. **Hero Section** - Full-screen hero with animated background and property showcase
2. **About Section** - Company information with reveal animations
3. **Services** - 6 service cards with image backgrounds on hover
4. **Projects** - Filterable property grid (All, Open Plots, Investment, Residential, Commercial)
5. **Statistics** - Animated counters (500+ properties, 1000+ families, 10+ years)
6. **Testimonials** - Auto-playing Swiper carousel with client reviews
7. **Contact Form** - Functional contact form with info cards
8. **Footer** - Complete footer with scroll-to-top button

### 🖼️ Images
All images sourced from the original [slvconsultancy.co.in](https://slvconsultancy.co.in/) website:
- Logo and branding assets
- Property and layout images
- Open plots banners
- House and commercial property photos

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development
The dev server runs at `http://localhost:5173`

## 📁 Project Structure

```
e:\veda\
├── public/
│   └── images/           # All property images
│       ├── logo.jpeg
│       ├── hero-plot.png
│       ├── property1.jpg
│       ├── property2.jpeg
│       ├── open-plots.png
│       ├── layout1.webp
│       └── ...
├── src/
│   ├── components/
│   │   ├── Loader.jsx           # Animated loading screen
│   │   ├── Navbar.jsx            # Sticky nav with scroll effects
│   │   ├── Hero.jsx              # Hero section with property showcase
│   │   ├── About.jsx             # About section with animations
│   │   ├── Services.jsx          # Service cards with image backgrounds
│   │   ├── Projects.jsx          # Filterable property grid
│   │   ├── Stats.jsx             # Animated counter section
│   │   ├── Testimonials.jsx      # Swiper carousel
│   │   ├── Contact.jsx           # Contact form + info
│   │   └── Footer.jsx            # Footer with social links
│   ├── App.jsx                   # Main app component
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Tailwind + custom styles
├── index.html                    # HTML template
├── vite.config.js                # Vite configuration
├── package.json                  # Dependencies
└── README.md                     # This file
```

## 🎨 Technologies Used

- **React 19.2** - UI library
- **Vite 7.3** - Build tool & dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion 12.33** - Animation library
- **Swiper 12.1** - Touch slider for testimonials
- **React CountUp** - Animated counters
- **React Intersection Observer** - Scroll-triggered animations
- **Lucide React** - Modern icon library

## 🎯 Key Features Implementation

### Filterable Projects
Click on category tabs (All, Open Plots, Investment, etc.) to filter properties with smooth animations.

### Lazy Loading Images
All images are optimized and loaded efficiently.

### Smooth Scrolling
Navigation links smoothly scroll to sections with offset for fixed navbar.

### Mobile Menu
Fully animated mobile navigation with hamburger menu.

### Contact Form
Functional contact form with validation and submission handling.

## 🌈 Color Scheme

```css
--color-primary: #131d3b      /* Dark blue */
--color-accent: #09ed8c       /* Bright green */
--color-accent-dark: #07c974  /* Dark green */
--color-red: #ee0505          /* Brand red */
--color-gold: #d4a853         /* Gold accents */
```

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Configuration

### Fonts
Google Fonts loaded in `index.html`:
- **Lato** - Body text
- **Poppins** - Headings

### Vite Config
Uses Tailwind CSS v4 Vite plugin for optimal performance.

## 📄 License

This project is built for **Sri Veda Real Estates Ongole**. All rights reserved.

## 🤝 Credits

- Original content from [slvconsultancy.co.in](https://slvconsultancy.co.in/)
- Images sourced from the original website
- Built with modern web technologies for optimal performance

## 📞 Contact Information

**Sri Veda Real Estates**
- 📍 Ongole, Andhra Pradesh
- 📞 +91 98765 43210
- 📧 info@srivedarealestate.com
- 🔗 [Facebook](https://www.facebook.com/srivedaongole)
- 🔗 [YouTube](https://www.youtube.com/channel/UC79q-p2bDv8B6QI_viNh4dg)

---

**Built with ❤️ using React + Tailwind CSS + Framer Motion**
