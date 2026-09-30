# Matsilele AI Portfolio

React + TypeScript portfolio inspired by the supplied design reference.

## Run

```bash
npm install
npm run dev
```

Then open the local Vite URL.

## Personalise

1. Your portrait is loaded from `public/profile.jpg` (used in `Hero.tsx`).
2. Update your email and social links in `Navbar.tsx` and `Contact.tsx`.
3. Edit `src/data/projects.ts` to add your real projects.
4. Update the skills in `Skills.tsx`.

## Structure

Styled with Tailwind CSS v4 (`@tailwindcss/vite`). Pages are routed with React Router: `/`, `/about`, `/projects`, `/skills`, `/contact`.

When deploying to a static host, configure a fallback to `index.html` so direct visits to `/about` etc. work.

## Deploying

`public/_redirects` gives Netlify/Cloudflare Pages the SPA fallback. On Vercel add a rewrite of `/(.*)` to `/`.

Content lives in `src/data/`. Update those files when your CV changes.
