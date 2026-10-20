# Sumit Sharma — Backend & AI Engineer Portfolio

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
- `/github` — Live public repositories, repository metadata, and recent public GitHub events
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

## Recent interface enhancements

- Copperplate-inspired/Cinzel display typography for navigation, buttons, headings, and selected descriptive text.
- Smooth route transitions and scroll behavior with reduced-motion support.
- Thin reading-progress indicator at the top of the viewport.
- Floating back-to-top control that appears after scrolling.
- Clearer project actions with dedicated case-study and live-preview links.
- Refined project-card hover treatment and keyboard focus visibility.
- Skip-to-content link for keyboard accessibility.

## Local verification

Install dependencies with `npm install`, then run `npm run build`. The production output is generated in `dist/`.


## Portfolio upgrades inspired by the AI portfolio-maker paper
- Floating portfolio guide with curated, source-grounded answers about the published projects, skills, education, and contact options. It is a lightweight client-side guide, not a live LLM/API integration.
- Searchable skills explorer to filter the skills list by technology or category.
- Architecture explorer on each project case study, showing a vertical conceptual flow based on the listed architecture.
- Downloadable résumé PDF linked from the Home and About pages.
- Existing project case studies, responsive layout, SEO metadata, and Vercel route rewrites retained.

The uploaded paper describes a much larger AI portfolio-generation platform (AI-generated portfolios, template generation, user accounts, version history, one-click deployment, and analytics). Those are separate product capabilities and have not been misrepresented as features of this personal portfolio.


## GitHub activity page

The `/github` page fetches public repository metadata and recent public events from the GitHub REST API for `sumit-2218`. It includes searchable repository cards, language/star/fork metadata, and a 12-week activity visualization based only on events returned by GitHub's public-events endpoint.

- No GitHub token or backend secret is required for public data.
- GitHub's unauthenticated API has rate limits; a retry control is provided.
- The activity visualization is explicitly labelled as indicative, not a complete contribution calendar. Private contributions and activity not returned by the endpoint are not shown.
- The page does not scrape or claim access to private repositories.


## Latest portfolio update

- Updated the public-facing name to **Sumit Sharma** and replaced the previous wording with a **developer**-focused identity.
- Expanded the About page with a clearer backend + AI + application-development story.
- Added an education timeline for Galgotias University and Jawahar Navodaya Vidyalaya, Katihar (Class VI through Class XII).
- Highlighted Android application development with Kotlin, Jetpack Compose, Android Studio, and SQLite without presenting learning experience as expert-level mastery.
- Added the Cyvanta Smart India Hackathon milestone: the team cleared the internal hackathon round with the project.
- Added a Home-page application-development feature, animated aurora/grid background, and short route transitions with reduced-motion support.
- Refreshed the downloadable résumé to use the updated name and include the SIH milestone and app-development skills.
