# wengelef.github.io

Personal CV site for Florian Wengelewski, published at https://wengelef.github.io (GitHub Pages user site, served from the domain root).

## Stack
Vite + React 19 + TypeScript, Tailwind CSS v4, shadcn/ui, Magic UI components, `motion`, `simple-icons`.

## Commands
- `npm run dev` – dev server
- `npm run build` – typecheck (`tsc -b`) and production build into `dist/`
- `npm run preview` – serve the built site
- `npm run lint` – oxlint

## Structure
- `src/data/cv.ts` – **all content** (profile, contact, skills, jobs, projects). Edit text here, not in components.
- `src/components/*.tsx` – page sections (`hero`, `contact-section`, `skills-section`, `experience-timeline`, `projects-section`, `site-header`).
- `src/components/ui/` – generated Magic UI / shadcn components.
- `src/assets/avatar.jpg` (lg+ screens) and `avatar_xs.jpg` (small screens) – hero images.

## Rules
- Add Magic UI components with the Magic UI MCP (`.mcp.json`) or `npx shadcn@latest add "https://magicui.design/r/<name>"`. Do not hand-edit files in `src/components/ui/` unless unavoidable.
- The hero image is made black & white in CSS (`grayscale` in `hero.tsx`). Never pre-process the image; just replace the file.
- Theme is the `dark` class on `<html>`, persisted in `localStorage["theme"]`; an inline script in `index.html` applies it before paint. Use shadcn tokens (`bg-background`, `text-muted-foreground`, ...) so both themes work.
- Deployment is only via `.github/workflows/deploy.yml` on push to `master`. Never commit `dist/`.
- Before finishing UI work, run `npm run build` and check light + dark mode and a phone-width viewport.

## Skills
- `.claude/skills/update-cv` – add or change a job, skill, project, or the hero image.
