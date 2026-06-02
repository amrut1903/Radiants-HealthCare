# Radiants Health Care — Website

> **Radiating Trust from Doctors to Wellness**

A professional, multi-page static website for **Radiants Health Care**, built using HTML, CSS, and Vanilla JavaScript.

The website showcases the company's orthopaedic and musculoskeletal healthcare expertise, its full pharmaceutical product catalog across two divisions, doctor testimonials, and contact information — all wrapped in a modern, mobile-responsive design.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Live Preview](#live-preview)
- [Project Structure](#project-structure)
- [Pages](#pages)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [How to Run](#how-to-run)
- [Browser Support](#browser-support)
- [Contact](#contact)

---

## Project Overview

This project is the official website developed for **Radiants Health Care**, a science-driven pharmaceutical company headquartered in New Delhi, India, specializing in orthopaedic and musculoskeletal healthcare solutions.

| Detail | Information |
|---|---|
| **Company** | Radiants Health Care |
| **Website Type** | Static Website |
| **Pages** | 23 Pages (6 Core + 17 Product Detail) |
| **Technologies** | HTML, CSS, JavaScript |
| **Framework** | None (Pure Vanilla) |
| **Fonts** | Inter, Outfit, Alex Brush |
| **Divisions** | Radiants Health Care, Krivi Pharmaceuticals |

---

## Live Preview

You can run the website locally without installing any dependencies.

**Open directly:**
```
index.html
```

**Or run using a local development server:**
```bash
npx serve .
```

---

## Project Structure

```
radiants-health-care/
│
├── index.html                  # Home page
├── about.html                  # About Us page
├── contact.html                # Contact page with enquiry form
├── products.html               # Product catalog with category filters
├── doctors-reviews.html        # Doctor testimonials
├── login.html                  # Login page
├── product-radifrac.html       # Product detail — Radifrac
├── product-radifrac-plus.html  # Product detail — Radifrac Plus
├── product-radipro.html        # Product detail — Radipro
├── product-osedrate.html       # Product detail — Osedrate
├── product-stifex.html         # Product detail — Stifex
├── product-stifex-plus.html    # Product detail — Stifex Plus
├── product-elastros.html       # Product detail — Elastros
├── product-rutoperz.html       # Product detail — Rutoperz
├── product-soluperz.html       # Product detail — Soluperz
├── product-rmin-pfs.html       # Product detail — Rmin PFS
├── product-unol-plus.html      # Product detail — Unol Plus
├── product-oralixir.html       # Product detail — Oralixir
├── product-diminh.html         # Product detail — Diminh
├── product-oxamil-tablet.html  # Product detail — Oxamil Tablet
├── product-oxamil-syrup.html   # Product detail — Oxamil Syrup
├── product-lac-er-600.html     # Product detail — LAC-ER 600
├── product-kriviceff.html      # Product detail — Kriviceff
├── README.md
├── requirements.txt
├── .gitignore
│
├── css/
│   ├── style.css               # Main stylesheet with responsive design
│   ├── pages.css               # Inner page specific styles
│   └── animations.css          # Preloader and scroll reveal animations
│
├── js/
│   └── main.js                 # Navigation, dropdowns, scroll effects
│
├── images/
│   ├── radifrac.png
│   ├── radifrac-plus.png
│   ├── radipro.png
│   ├── osedrate.png
│   ├── stifex.png
│   ├── stifex-plus.png
│   ├── elastros.png
│   ├── rutoperz.png
│   ├── soluperz.png
│   ├── rmin-pfs.png
│   ├── unol-plus.png
│   ├── oralixir.png
│   ├── oxamil-tablet.png
│   ├── lac-er-600.png
│   ├── kriviceff.png
│   ├── mission.png
│   ├── director.png
│   └── vc.png
│
└── assets/
    ├── pharma_hero_bg.png      # Home page hero background
    ├── about_hero_bg.png       # About page hero background
    ├── hero_all_products.png   # Products page hero
    ├── hero_orthopaedics.png   # Category-specific hero images
    ├── hero_neurology.png
    ├── hero_gynaecology.png
    ├── hero_urology.png
    ├── hero_surgery.png
    ├── hero_oncology.png
    ├── hero_radiants.png
    ├── hero_krivi.png
    └── pharma_abstract_bg.png
```

---

## Pages

### Home (`index.html`)

The homepage introduces Radiants Health Care and highlights its core therapeutic areas.

**Features include:**
- Animated hero banner with India map and doctor network imagery
- Company overview and orthopaedic innovation story
- Key statistics counter (products, therapeutic areas, etc.)
- Core therapies section (Orthopaedic, Neurology, Gynaecology, and more)
- Call-to-action banner

---

### About Us (`about.html`)

The About page tells the company's story, mission, vision, and leadership team.

**Includes:**
- Hero section with company introduction
- Mission and Vision statement with supporting imagery
- Leadership profiles (Director, Vice Chairman)
- Company values and commitment to quality

---

### Products Catalog (`products.html`)

Displays the full pharmaceutical product lineup with a dynamic category filtering system.

**Product categories include:**
- Orthopaedics
- Neurology
- Gynaecology
- Urology
- Surgery & Post-Operative Care
- Oncology Supportive Care

**Division filters:**
- Radiants Health Care
- Krivi Pharmaceuticals

Each product card displays a product image, name, and links to its dedicated detail page.

---

### Product Detail Pages (`product-*.html`)

Each of the 17 products has its own dedicated detail page with:
- Hero banner with product image
- Detailed composition and dosage information
- Therapeutic uses and indications
- Key benefits section
- Related products navigation

---

### Doctor's Reviews (`doctors-reviews.html`)

Showcases testimonials from healthcare professionals who trust the company's products.

**Includes:**
- Doctor profile cards with names and specializations
- Detailed review quotes
- Professional avatar images

---

### Contact Us (`contact.html`)

Provides contact details and a customer enquiry form.

**Includes:**
- Corporate office address
- Email and website links
- Contact form with name, email, and message fields

---

## Features

Key functionality implemented across the website:

- ✅ Fully responsive design (Desktop, Tablet, and Mobile)
- ✅ Mobile-first drawer navigation with overlay backdrop
- ✅ Sticky header with two-tier navigation bar
- ✅ Dropdown menus for Products and Divisions
- ✅ Product category filtering system with dynamic hero images
- ✅ Scroll reveal animations on desktop
- ✅ Image lazy loading for faster page performance
- ✅ Preloader animation on page load
- ✅ Touch-friendly 48px minimum tap targets on mobile
- ✅ Horizontally scrollable filter buttons on mobile
- ✅ Clean pharmaceutical themed UI with premium aesthetics
- ✅ SEO-friendly semantic HTML structure

---

## Technology Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Page structure and semantic markup |
| **CSS3** | Styling, layout, responsive design, and animations |
| **JavaScript** | Navigation, filtering, scroll effects, and interactivity |
| **Google Fonts** | Typography |

**Fonts used:**
- **Inter** — Body text and general UI
- **Outfit** — Headings and section titles
- **Alex Brush** — Cursive accent on the hero tagline

---

## How to Run

### Option 1 — Directly Open
Simply open the homepage file in any modern browser:
```
index.html
```

### Option 2 — VS Code Live Server
1. Install the **Live Server** extension in VS Code
2. Open the project folder in VS Code
3. Right-click `index.html`
4. Select **Open with Live Server**

### Option 3 — Node Local Server
```bash
npx serve .
```

### Option 4 — Python Server
```bash
python -m http.server 8080
```
Then open: [http://localhost:8080](http://localhost:8080)

---

## Browser Support

| Browser | Support |
|---|---|
| Google Chrome | ✅ Supported |
| Firefox | ✅ Supported |
| Safari | ✅ Supported |
| Microsoft Edge | ✅ Supported |
| Internet Explorer | ❌ Not Supported |

---

## Contact

**Radiants Health Care**

- **Address:** Unit No. 718, 7th Floor, TC Jaina Tower‑1, District Centre, Janakpuri, New Delhi - 110058
- **Email:** radiantshealthcare@gmail.com
- **Website:** [www.radiantshealthcare.com](http://www.radiantshealthcare.com)

---

## Credits

- Designed and developed as a professional static website for Radiants Health Care.
- Product images and branding assets provided by the company.
- Icons and fonts sourced from [Google Fonts](https://fonts.google.com/).
