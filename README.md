# Eye Hospital.com 👁️

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4.21-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.14-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A modern, production-ready, fully responsive web application for **Eye Hospital.com**, a premier eye hospital located in Dhanmondi, Dhaka, Bangladesh.

Built with **React 18**, **Vite**, and **Tailwind CSS**, featuring authentic high-resolution clinical photography, an interactive right-to-left mobile slide-over navigation drawer, real-time appointment booking validation, and pixel-perfect fidelity to the approved medical design tokens.

---

## 🌟 Key Features

- **12 Production-Ready Modular Sections**:
  1. **Sticky Header & Navbar** — Clean desktop navigation + responsive mobile slide-over drawer.
  2. **Hero Section** — Impactful headline, value proposition, CTAs, and macro iris photography with smooth gradient blend.
  3. **Feature Strip** — 4 core pillars (*Advanced Technology*, *Expert Doctors*, *Personalized Care*, *Trusted by Thousands*).
  4. **About Us** — Reception interior visual, clinical narrative, and verifiable milestones (10+ Years, 50K+ Patients, 15+ Specialists).
  5. **Comprehensive Services** — 6 specialist services with custom icons and action links.
  6. **Why Choose Us** — Interactive slit-lamp examination visual with playable video modal & checklist.
  7. **Specialist Doctors** — Clinical staff cards for ophthalmologists, cataract surgeons, retina, and pediatric specialists.
  8. **Advanced Technology** — Diagnostic suite spotlight (OCT 3D imaging, laser precision).
  9. **Patient Stories / Testimonials** — Interactive carousel with real patient feedback and ratings.
  10. **Appointment Booking** — Comprehensive appointment form with instant field validation and confirmation modal.
  11. **Contact & Location** — Clinic hotline, email, Dhanmondi location details, and hospital facility visual.
  12. **Footer** — Structured quick links, service directory, legal mentions, and copyright bar.

- **Mobile Slide-Over Navigation (Right-to-Left)**:
  - On mobile devices (`≤ 860px`), the header navbar displays only the hospital logo and hamburger menu button.
  - Tapping the hamburger button slides a smooth drawer out from **right to left** (`translate-x-full` → `translate-x-0`).
  - Contains all navigation links, the prominent full-width **"Book Appointment"** button, hotline phone number, and address.
  - Fully accessible with keyboard navigation (`Escape` key support), backdrop blur overlay tap-to-dismiss, and body scroll lock.

- **High-Quality Authentic Photography**:
  - All visual assets feature real, optimized, high-definition photography tailored specifically for Eye Hospital.com in Dhaka.

- **Centralized Data Architecture**:
  - All copy, clinic information, phone numbers, addresses, and navigation links reside cleanly in `src/data/siteData.js` for zero hardcoded duplication.

---

## 📁 Project Structure

```text
eye-hospital/
├── frontend/                   # React + Vite application
│   ├── public/
│   │   └── assets/
│   │       └── images/         # 9 optimized high-resolution clinical photos
│   │           ├── hero.jpg
│   │           ├── reception.jpg
│   │           ├── exam.jpg
│   │           ├── equipment.jpg
│   │           ├── building.jpg
│   │           ├── doctor1.jpg
│   │           ├── doctor2.jpg
│   │           ├── doctor3.jpg
│   │           └── doctor4.jpg
│   ├── src/
│   │   ├── components/         # 14 reusable, modular UI components
│   │   │   ├── About.jsx
│   │   │   ├── BookingForm.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Doctors.jsx
│   │   │   ├── FeatureStrip.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Icons.jsx
│   │   │   ├── ImageWithFallback.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Technology.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   └── WhyChooseUs.jsx
│   │   ├── data/
│   │   │   └── siteData.js     # Centralized content, doctors, and clinic data
│   │   ├── App.jsx             # Root layout and section composition
│   │   ├── index.css           # Global design tokens, typography & CSS variables
│   │   └── main.jsx            # Application entry point
│   ├── index.html              # HTML shell with Google Fonts & metadata
│   ├── package.json            # Project dependencies & scripts
│   ├── postcss.config.js       # PostCSS configuration
│   ├── tailwind.config.js      # Tailwind CSS design system tokens
│   └── vite.config.js          # Vite build and dev server config
├── reference-design/           # Design specification reference
│   ├── Eye Hospital.com.html   # Approved visual design reference
│   └── Eye Hospital.com.md     # Copy & specification guidelines
├── .gitignore                  # Git ignore rules
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher)

### Installation & Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rakibal123/eye-hospital.git
   cd eye-hospital/frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Build for Production

To create an optimized, minified production build:

```bash
cd frontend
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🎨 Design Tokens

| Token | Hex Value | Usage |
| :--- | :--- | :--- |
| **Primary Navy** | `#0a3d5c` | Brand logo, primary titles, section headings |
| **Deep Navy** | `#08324d` | Booking banner, footer, drawer backdrops |
| **Teal** | `#1fb5a3` | Primary CTA buttons, badges, active states |
| **Light BG** | `#f1f7fc` | Page background, card backgrounds |
| **Border Line** | `#dbe7f1` | Clean dividers and card outlines |
| **Muted Ink** | `#5d7487` | Descriptive body text and captions |

---

## 👨‍💻 Author

- **GitHub**: [@rakibal123](https://github.com/rakibal123)
- **Repository**: [https://github.com/rakibal123/eye-hospital](https://github.com/rakibal123/eye-hospital)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
