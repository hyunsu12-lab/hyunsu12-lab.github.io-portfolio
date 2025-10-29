# Hyunsoo Cho – Profile Site

Personal profile single-page app built with Vite, React, TypeScript, and Tailwind CSS. Supports light/dark themes, Korean/English copy toggles, anchor navigation, and PDF export of the main content blocks.

## Quick Start

```bash
npm install
npm run dev
```

The dev server boots at <http://localhost:5173>. Hot reload is enabled by default.

## Scaffold Commands (reference)

The project structure follows the Vite React (SWC + TS) template with Tailwind CSS and required libraries. For documentation purposes, these are the exact commands that shape the current setup:

```bash
npm create vite@latest hyunsoo-profile -- --template react-swc-ts
cd hyunsoo-profile
npm i
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm i lucide-react classnames react-to-print
npm run dev
```

## Features

- Smooth anchor navigation across sections (About, Skills, Projects, Awards, Contact)
- Locale toggle (KO/EN) with persistence via `localStorage`
- Dark mode toggle (Tailwind `dark` variant) with persistence
- `react-to-print` integration to export About/Skills/Projects/Awards/Contact sections as PDF
- Responsive layout (mobile through desktop) with Tailwind utility styling and lucide icons

## Tailwind Notes

Global styles live in `src/styles/index.css` and include the Tailwind base/component/utility directives. The Tailwind config targets `index.html` and all `src/**/*.{ts,tsx}` files, and dark mode is class-based (`document.documentElement.classList`).

## Using the Toggles

- **Language** — The header toggle switches between Korean (`ko`) and English (`en`) copy. The choice persists in `localStorage` under the `locale` key.
- **Dark mode** — The moon/sun toggle applies or removes the `dark` class on the `<html>` element, persisting under the `theme` key.
- **Save to PDF** — The “PDF 저장 / Save as PDF” button leverages `react-to-print` to print only the main content sections (excluding the header and hero banner). Adjust print settings to save as PDF.


