# Soin Wei Dong - Portfolio V2

**About Me**: I'm Wei Dong Soin, a recent Junior College graduate with a passion for building things with technology. Currently awaiting enlistment in the Singapore Army, I'm spending my time creating tools and applications that solve real problems. I'm the co-founder of Project Quik and currently creating the future at AETHER.

A modern, minimalist portfolio website designed to showcase my projects, experience, and writing.

## Features

-   **Multi-Page Structure**: Dedicated routes for Home (`/`), About (`/about`), Projects (`/projects`), and Blog (`/blog`).
-   **Responsive Layout**: Fully responsive designs with a custom `Container` system to manage max-width and padding across devices.
-   **Dark Mode Support**: Built-in dark mode using `next-themes` with a carefully curated Zinc/Teal color palette.
-   **Custom Design System**:
    -   **CSS Modules**: Styled entirely using standard CSS Modules for scoping and performance (no Tailwind dependency).
    -   **Glassmorphism**: Floating navbar with backdrop blur and shadow effects.
    -   **Grid Layouts**: Custom CSS grids for the Projects showcase and Blog card interface.

## Tech Stack

-   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
-   **Styling**: CSS Modules (`*.module.css`)
-   **Language**: JavaScript / React
-   **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
-   **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes)
-   **Content**: Markdown support for blog posts (via `gray-matter`, `remark`)

## Project Structure

-   `src/app`: App Router pages and layouts.
-   `src/components`: Reusable UI components (Navbar, Hero, ProjectCard, WorkWidget, etc.).
-   `src/lib`: Data constants and utility functions.
-   `public`: Static assets (images, fonts).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
