# Veronica | Cinematic Photography & Films Portfolio

A high-end, premium portfolio website designed for emotional heirloom photography and cinematic films. This project features a sophisticated "stacking" scroll architecture, responsive design across all devices, and an automated inquiry management system using Google Sheets.

## 🚀 Key Features

- **Cinematic Stacking Effect**: Sections gracefully overlap each other using a custom CSS `sticky` and JavaScript hybrid system.
- **Dynamic 5-Column Grid**: Specialized "Offerings" section designed with a 5x2 grid for optimal desktop presentation.
- **Responsive Architecture**: Fully contained layout with zero horizontal overflow, meticulously adjusted for mobile, tablet, and desktop viewports.
- **Google Sheets Automation**: Contact form submissions are automatically saved to a Google Spreadsheet via a Google Apps Script bridge.
- **Premium Aesthetics**: Curated typography (Cormorant Garamond & Manrope), micro-animations, and a dark-mode-first luxury design system.

## 📁 Project Structure

```text
file3way/
├── index.html       # The skeletal structure and content of the portfolio
├── style.css       # The design system, animations, and responsive layouts
├── script.js        # Core logic: Stacking offsets, mobile menu, and form automation
└── README.md        # Project documentation and setup guide
```

## 🛠️ Getting Started

### 1. Local Development
This is a static site project, so no build tools (like npm or Vite) are required.
- Simply open `index.html` in any modern web browser.
- **Recommended**: Use a local server (like the "Live Server" extension in VS Code) to ensure all scroll behaviors and assets load flawlessly.

### 2. Setting Up Google Sheets Integration
To ensure your form inquiries are saved, follow these steps:

1.  Create a new **Google Sheet**.
2.  Open **Extensions > Apps Script**.
3.  Paste the `doPost` script found in the comments at the top of `script.js`.
4.  Click **Deploy > New Deployment**.
    - **Type**: Web App
    - **Execute as**: Me
    - **Who has access**: Anyone
5.  Copy the **Web App URL**.
6.  Open `script.js`, find the `SCRIPT_URL` variable (around line 340), and paste your URL there.

## ✒️ Author

**Veronica Lodge**  
*Emotional Heirloom Photographer*

## 📜 Technologies Used

- **HTML5**: Semantic structure for SEO and accessibility.
- **CSS3**: Vanilla CSS with custom properties (CSS Variables), Grid, and Flexbox.
- **JavaScript**: ES6+ for intersection observers, sticky calculations, and fetch automation.
- **Google Apps Script**: Serverless backend for sheet integration.

---

*Designing for the archives, preserving stories for a lifetime.*
