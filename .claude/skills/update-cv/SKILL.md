---
name: update-cv
description: Update the CV website content - add or edit a job, skill, project, contact detail, or swap the hero image. Use when the user wants to change what the site says or shows.
---

# Update CV content

All content lives in `src/data/cv.ts`. Components only render it.

- **New job**: add an object at the top of `jobs` (newest first) with `companyName`, `time`, `title`, `items`. If the previous top job ended, remove its `current: true` and set the end date in its `time`; put `current: true` on the new one if ongoing.
- **Skill bullet**: add a string to `skills`. To add a logo to the Icon Cloud, import `si<Name>` from `simple-icons` in `src/components/skills-section.tsx` and append it to `brandIcons` (check the export exists first).
- **Project**: add `{ title, url, texts }` to `projects`.
- **Contact / title**: edit `contact` / `profile`.
- **GitHub activity heatmap**: accounts are listed in `src/data/github.json` (`logins`, counts are summed). Refresh the committed snapshot with `GITHUB_TOKEN=$(gh auth token) npm run fetch:contributions`; CI also refreshes it on every deploy and daily.
- **Hero image**: replace `src/assets/avatar.jpg` (lg+) and `src/assets/avatar_xs.jpg` (small screens), keeping the file names. Do not convert to grayscale; CSS does that. The small avatar that pops into the header while scrolling is `src/assets/profile.png` (square, ideally a transparent circle cut-out); replace it the same way.

Then run `npm run build` and `npm run lint`, and preview with `npm run preview`. Commit to `master` to deploy (GitHub Action); never commit `dist/`.
