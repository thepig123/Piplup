# Piplup Scout maintenance

## Hosting and source mirror
- Live website: https://piplup-scout.martinemilolsen.chatgpt.site
- Sites project_id: appgprj_6addf76da2b88191b2163c0dcf064a0a
- User-requested GitHub source mirror: https://github.com/thepig123/Piplup (main).
- Keep the application hosted on ChatGPT Sites. Do not migrate hosting or enable GitHub Pages unless requested.
- Whenever changing this project, publish through the Sites workflow and push the same authored source changes to the GitHub repository. The user explicitly requested this ongoing workflow on 2026-10-26.
- Read both current branch heads before synchronizing; preserve unrelated changes. Never force-push over user edits.
- Keep the Sites source remote and GitHub remote separate. Use the Sites tools for publication and the GitHub connector or an authenticated GitHub remote for the mirror.
- Exclude credentials, runtime data, node_modules, generated builds and local tool state. Keep secrets in Sites runtime configuration, never GitHub.
- If either publication or GitHub sync fails, report which succeeded and which remains pending.

## Current prototype
- FINN: manual server-side public search parser; bounded to 1–3 pages. Report errors honestly; do not equate missing results with sold listings.
- Facebook: search links and manual saves only. No implemented Facebook scraper.
- eBay: separate UI and placeholder endpoint; no live API integration yet.
- Collection state: browser localStorage with JSON backup import/export; no cross-device sync.
- Validate TypeScript and build after functional code changes. Do not claim untested source integrations work.
