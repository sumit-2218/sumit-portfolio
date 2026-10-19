# Sumit Kumar — Backend & AI Engineer Portfolio

A futuristic, dark-only, responsive multi-page portfolio built with React, TypeScript, Tailwind CSS, Vite, React Router, Framer Motion, and Lucide icons.

## Pages
- `/` — Home / animated hero / selected work
- `/about` — Profile, education, approach, and milestones
- `/projects` — Searchable and filterable project index
- `/projects/sales-operations-agent` — Sales Operations Agent detail
- `/projects/cyvanta` — Cyvanta detail
- `/projects/instagas` — InstaGas detail
- `/projects/taskmanager-web` — TaskManager Web detail
- `/skills` — Skills inventory and current learning roadmap
- `/contact` — Contact details and mailto-based message form

## Run locally

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Vite will print a local development URL, usually `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

## Deploy

### Vercel
1. Push this folder to a GitHub repository.
2. Import the repository into Vercel.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.

The included `vercel.json` rewrites client-side routes to `index.html`, so project detail routes work on refresh.

## Customization

- Contact and social links are in `src/components/Layout.tsx` and `src/pages/Contact.tsx`.
- Project content is centralized in `src/data.ts`.
- Main design tokens, animations, and responsive rules are in `src/styles.css`.
- Tailwind CSS is configured and available for further component styling; the current visual system also uses custom CSS for its detailed art direction.

## Project links

- Sales Operations Agent: https://sales-operations-agent-umber.vercel.app/
- Cyvanta: https://peru-oyster-657501.hostingersite.com/
- InstaGas: https://lightpink-antelope-289036.hostingersite.com/index.php
- TaskManager Web: local development only (no public demo URL)

## Notes

- The contact form opens the visitor's email application with a prefilled message; this static portfolio does not store submissions.
- The TaskManager Web project is intentionally marked as local-only.
- Skills are presented as a mix of project experience and a learning roadmap rather than claims of expert-level proficiency in every listed technology.
