# Anindya Sen — Portfolio

A recruiter-focused personal portfolio built with React, TypeScript, Tailwind CSS, and Vite.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check + production build → dist/
npm run preview   # preview the production build locally
npm run lint       # oxlint
```

Requires Node.js 18+.

## Editing content

Almost everything on the site is driven from plain data files in `src/data/` —
you shouldn't need to touch component code to update content.

| File                     | Controls                                                    |
| ------------------------ | ------------------------------------------------------------ |
| `src/data/profile.ts`    | Name, tagline, summary, email/GitHub/LinkedIn, resume URL, coding-profile URLs, contact form provider |
| `src/data/projects.ts`   | All project cards, including the featured DevOpsAI case study, tech tags, GitHub/demo links, and implemented-vs-planned feature lists |
| `src/data/education.ts`  | Education timeline entries |
| `src/data/techStack.ts`  | Grouped technology tags in the Tech Stack section |
| `src/data/skills.ts`     | The six skill-area cards |
| `src/data/automation.ts` | Copy and pipeline steps in the "Engineering with AI" section |

Search each file for `EDIT ME` comments — those mark the values you should
fill in with your real details (college name, CGPA, repo URLs, socials, etc.).
Anything still showing a bracketed placeholder like `[Your College Name]` will
render with a dashed placeholder style in the UI so it's obvious what's left
to fill in.

## Contact form

The contact form UI is functional but has **no backend wired up by default**
(per the "no fake backend" requirement). To make it actually send messages:

1. Sign up for [Formspree](https://formspree.io) (or another provider).
2. In `src/components/sections/Contact.tsx`, set `FORMSPREE_ENDPOINT` to your
   form's endpoint.
3. In `src/data/profile.ts`, set `contactFormProvider` to `"formspree"`.

To use EmailJS instead, install `@emailjs/browser` and call `emailjs.send(...)`
inside `handleSubmit` in `Contact.tsx` — there's a comment marking where.

## Deploying to Netlify

The repo includes a `netlify.toml` with the build command and publish
directory already set (`npm run build` → `dist`). To deploy:

1. Push this project to a GitHub repo.
2. In Netlify, "Add new site" → "Import an existing project" → pick the repo.
3. Build settings are auto-detected from `netlify.toml` — just click deploy.

This is a single-page app with no client-side routing, so no redirect rules
are needed for direct URL navigation.

## Project structure

```
src/
  components/
    sections/   # one component per page section (Hero, About, Projects, ...)
    ui/          # small reusable primitives (Button, Tag, PipelineDiagram, ...)
  data/          # all editable content — see table above
  hooks/         # useReducedMotion
  lib/           # small utilities (cn)
  App.tsx
  main.tsx
```

## Notes

- Respects `prefers-reduced-motion` throughout.
- Mobile-first, responsive from ~360px up.
- No fake testimonials, job history, certifications, or GitHub stats — only
  what was provided, with clearly marked placeholders elsewhere.
