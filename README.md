# Hexalink Landing Page

A modern, responsive landing page for **Hexalink** - a company that provides services in the field of human resources.

![Hexalink](public/hexalink-complete-icon.svg)

## 🚀 Overview

Hexalink is a company that provides services in the field of human resources. This landing page showcases the company's features, solutions, and company information with a premium, modern design.

## ✨ Features

- **Modern Design** - Glassmorphism effects, smooth animations, and gradient accents
- **Responsive** - Optimized for desktop, tablet, and mobile devices
- **SEO Optimized** - Proper meta tags, semantic HTML, and structured data
- **SSR Ready** - Server-side rendering with hybrid mode for dynamic routes
- **Docker Ready** - Containerized deployment with Docker Compose

## 📂 Project Structure

```
/
├── public/              # Static assets (images, icons, fonts)
├── src/
│   ├── components/      # Reusable Astro components
│   ├── interfaces/      # TypeScript interfaces
│   ├── layouts/         # Page layouts
│   ├── pages/           # Routes and pages
│   │   ├── index.astro      # Home page
│   │   ├── about.astro      # About us
│   │   ├── solutions.astro  # Products & solutions
│   │   ├── jobs.astro       # Job listings
│   │   ├── contact.astro    # Contact form
│   │   └── apply/[id].astro # Dynamic job application
│   ├── services/        # API service layers
│   └── styles/          # Global CSS styles
├── Dockerfile           # Docker build configuration
├── docker-compose.yml   # Docker Compose setup
└── astro.config.mjs     # Astro configuration
```

## 🧞 Commands

| Command           | Action                               |
| ----------------- | ------------------------------------ |
| `npm install`     | Install dependencies                 |
| `npm run dev`     | Start dev server at `localhost:4321` |
| `npm run build`   | Build for production                 |
| `npm run preview` | Preview production build             |

## 🐳 Docker Deployment

1. Copy the environment template:

   ```bash
   cp .env.template .env
   ```

2. Configure your environment variables in `.env`:

   ```env
   PUBLIC_API_URL=https://your-api-url.com/api
   PORT=4321
   ```

3. Build and run with Docker Compose:
   ```bash
   docker compose up --build
   ```

The application will be available at `http://localhost:4321`.

## 🔧 Environment Variables

| Variable         | Description                                  | Default |
| ---------------- | -------------------------------------------- | ------- |
| `PUBLIC_API_URL` | Backend API URL for vacancies and candidates | -       |
| `PORT`           | Port to expose the application               | `4321`  |

## 🎨 Tech Stack

- **[Astro](https://astro.build)** - Modern static site generator with SSR support
- **TypeScript** - Type-safe JavaScript
- **Vanilla CSS** - Custom styling with CSS variables and modern features
- **Node.js Adapter** - For server-side rendering in production

## 📄 License

Proprietary - All rights reserved.
