# 🚀 DevFolio — Professional Developer Portfolio

> A modern, high-performance, and fully-typed developer portfolio built with Next.js and TypeScript, designed to showcase a developer's identity, skills, and projects efficiently.

---

## 📌 Project Overview

In the web development world, a portfolio is often the first point of contact between a developer and a recruiter or client. **DevFolio** serves as a clean, structured professional showcase.

The core objective of this project is to master data modeling using strict **TypeScript** interfaces and build modular, reusable React components with typed props inside a **Next.js** multi-page ecosystem.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (Multi-page Architecture / App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/) (Strictly Typed)
* **Styling:** Tailwind CSS *(or your preferred CSS framework)*

---

## 🌟 Key Features

### 1. 🏠 Home Page (Landing Page)
* **Hero Section:** High-impact introduction featuring name, professional title (e.g., "Fullstack Developer"), and a short catchy bio.
* **Call-to-Action (CTA):** Smooth navigation button redirecting users straight to the Portfolio page.
* **Featured Showcase:** Quick overview section highlighting 2 or 3 major projects in a grid format.

### 2. 👨‍💻 About Page (Personal Presentation)
* Bio section accompanied by a profile picture or custom avatar.
* **Professional Timeline:** Chronological list of education and work experience (minimum of 2 entries) containing: Title, Company/School, Period, and Description.

### 3. 📂 Portfolio Page (Projects Showcase)
* Comprehensive catalog displaying a minimum of 4 development projects.
* **Reusable Component:** Integration of a `<ProjectCard />` component driven by typed props.
* Each card includes: Title, short description, technical stack (array of strings), GitHub repository link, and a live demo URL.
* **Data Management:** All data is strictly typed and centralized inside `data/projects.ts`.

### 4. ⚡ Skills Page (Technical Competencies)
* Grouped skill categorization (e.g., Frontend, Backend, Tools).
* **Reusable Component:** Features a `<SkillBadge />` component displaying the skill name, proficiency level (Beginner / Intermediate / Advanced), and a corresponding icon or emoji.
* **Data Management:** Centralized and managed within `data/skills.ts`.

### 5. ✉️ Contact Page
* Visually complete contact form including Name, Email, and Message fields.
* Quick-access links to social networks (GitHub, LinkedIn) and a direct clickable mailto link.

### 6. 🗺️ Global Layout & Navigation
* **Unified Layout:** Persistent global Navbar and Footer across all pages.
* **Enhanced UX:** Dynamic active-link highlighting in the navigation bar to guide the user.

---
