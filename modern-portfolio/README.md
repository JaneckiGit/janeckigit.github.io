# modern-portfolio

The Next.js application powering **[janeckimateusz.com](https://janeckimateusz.com)** — the personal portfolio of [Mateusz Janecki](https://github.com/JaneckiGit).

> 📖 Full project overview, screenshots and deployment details: see the [repository README](../README.md).

## Quick start

```bash
npm install
npm run dev      # dev server with Turbopack → http://localhost:3000
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server (Turbopack) |
| `npm run build` | Production build + static export to `./out` |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Structure

```
src/app/
├── components/       # UI sections & building blocks
│   ├── Hero.tsx            # Landing section with typewriter animation
│   ├── About.tsx           # Bio, skills, languages, contact cards
│   ├── Experience.tsx      # Timeline of roles & internships
│   ├── Projects.tsx        # Selected work
│   ├── Education.tsx       # Academic background
│   ├── Certificates.tsx    # Certifications (PSM I, Google Cloud, …)
│   ├── ContactSection.tsx  # Contact form & links
│   └── …                   # Navbar, Footer, LiquidBackground, etc.
├── layout.tsx        # Root layout, SEO metadata, Open Graph, JSON-LD
├── page.tsx          # Home page composition
├── sitemap.ts        # sitemap.xml generation
└── robots.ts         # robots.txt generation

public/               # Photos, CV (PDF), OG image, favicons
```

## Tech

Next.js 15 (App Router, `output: "export"`) · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · react-icons · react-type-animation · tsParticles
