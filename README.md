# Veronica | Cinematic Photography & Films Portfolio

A luxury, high-end portfolio website designed for emotional heirloom photography and cinematic films. This project features a sophisticated "stacking" scroll architecture, rich glassmorphism, mouse-driven 3D depth, responsive design, audio-visual feedback, and Google Sheets inquiry automation.

## 🚀 Key Features

- **Vintage Creme Theme**: A curated, warm luxury color palette featuring a Vintage Creme base (`#F3EAD3`), shiny Vanta Black text (`#050505`), elegant Gold (`#d4af37`), and deep Maroon (`#4a0e17`) accents.
- **Lenis Smooth Scroll**: Integration of Lenis smooth scroll for a cinematic, inertia-based scrolling experience.
- **GSAP & ScrollTrigger Animations**:
  - **Hero Parallax**: Zoom and parallax transitions for the hero video and geometries.
  - **Image Zoom-on-Scroll**: Project images and marquees dynamically scale as they enter the center of the viewport to create visual depth.
  - **Signature Film Zoom**: The video frame dynamically scales and adjusts its border radius on scroll.
- **Interactive Audio-Visual Feedback**:
  - **Camera Flash Effect**: A full-screen flash transition overlays the page upon clicking.
  - **Shutter Sound Effects**: A synchronized high-quality camera shutter sound plays when clicking on the page.
  - **Custom Camera Cursor**: An custom SVG camera cursor that tracks mouse movement, coupled with a secondary micro-dot follower.
- **Micro-Animations & Magnetic Physics**:
  - **Magnetic Heading & Buttons**: Hovering over menu links, inquiry buttons, and the hero headline triggers a physics-based magnetic pull.
  - **Double-Track Marquees**: Dual-direction auto-scrolling image bands in the "Vision" section.
- **Enhanced Readability & Glassmorphism**:
  - **Frosted Glass Title Wrapper**: The "Emotion, Preserved." header uses a frosted glassmorphic card (`backdrop-filter: blur(16px)`) to remain highly readable over the moving slideshow marquee.
  - **Glassmorphic Navigation Bar**: Sophisticated glass transition with blur and border elements when scrolling down the page.
- **Client-Side Form Validation & Google Sheets Integration**:
  - Real-time field validation for email and phone numbers with status feedback.
  - Serverless backend integration with Google Sheets via a Google Apps Script web app.

## 📁 Project Structure

```text
file3way/
├── index.html       # Structural layout, content, and SVG assets
├── style.css       # Luxury design system, glassmorphism, custom scrollbar, and responsive media queries
├── script.js        # Core logic: GSAP setup, mobile menu, testimonials slider, and contact form integration
└── README.md        # Project documentation and setup guide
```

## 🛠️ Getting Started

### 1. Local Development
This is a static site project, so no build tools (like npm or Vite) are required.
- Simply open `index.html` in any modern web browser.
- **Recommended**: Use a local server (like the "Live Server" extension in VS Code) to ensure all scroll behaviors and assets load flawlessly.

### 2. Setting Up Google Sheets Integration
To ensure your form inquiries are saved, follow these steps:

1. Create a new **Google Sheet**.
2. Open **Extensions > Apps Script**.
3. Paste the `doPost` script found in the comments at the top of `script.js`.
4. Click **Deploy > New Deployment**.
   - **Type**: Web App
   - **Execute as**: Me
   - **Who has access**: Anyone
5. Copy the **Web App URL**.
6. Open `script.js`, find the `SCRIPT_URL` variable (around line 330), and paste your URL there.

## ✒️ Author

**Veronica Lodge**  
*Emotional Heirloom Photographer*

## 📜 Technologies Used

- **HTML5**: Semantic structure for SEO and accessibility.
- **CSS3 (Vanilla)**: Variables, Flexbox, Grid, CSS animations, and Backdrop-Filter.
- **JavaScript (ES6+)**: Custom cursor tracking, dynamic form validation, and Sheets integration.
- **GSAP & ScrollTrigger**: Custom timing and scroll-based motion choreography.
- **Lenis**: Smooth scrolling engine.
- **Google Apps Script**: Serverless backend for sheet integration.

---

*Designing for the archives, preserving stories for a lifetime.*
