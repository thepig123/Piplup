# Piplup Scout

A personal Pokémon card-hunting dashboard for the Piplup collection.

**Live private website:** https://piplup-scout.martinemilolsen.chatgpt.site

This repository mirrors the source of the ChatGPT Sites-hosted app. GitHub is for viewing and versioning the code; it does not host the live website. Future changes made through the project should be published to Sites and mirrored here (see [AGENTS.md](AGENTS.md)). This is a maintenance workflow, not a background GitHub synchronization service.

## Features

- Manual FINN scans, limited to 1–3 public search-result pages per click.
- Listing deduplication, unseen flags and observed price changes.
- Filters for price, title keywords, language, grader and grade. Language and grade are inferred from titles and may be unknown.
- Wanted-card searches, saved listings, hide/restore, and scan history.
- Local import of saved FINN HTML search pages when live fetching is unavailable.
- JSON backup export/import; collection data stays in the current browser's localStorage.
- Facebook search shortcuts and manual listing saves.
- Separate eBay page awaiting developer credentials and API implementation.

Prices exclude unknown shipping costs. A missing listing is not automatically marked sold. No automatic purchases or background scans.

## Code map

| File | Purpose |
| --- | --- |
| `app/page.tsx` | Dashboard, filters, watchlist, local state and imports |
| `app/globals.css` | Responsive layout and styling |
| `app/api/scan/route.ts` | Bounded manual FINN fetch endpoint |
| `lib/finn.ts` | Structured listing parser |
| `app/api/ebay/route.ts` | Disconnected eBay status placeholder |
| `app/layout.tsx` | App metadata and root layout |
| `.openai/hosting.json` | Sites project identity (not a secret) |

## Development

Built with React, TypeScript and the Sites Vinext starter (Next.js-style routes on Vite / Cloudflare Workers).

Use Node.js 22.13 or newer. See [DEVELOPMENT.md](DEVELOPMENT.md) for the starter's setup and runtime instructions. The project includes its dependency lockfile and Sites build helpers. Production credentials must never be committed.

The eBay integration is deliberately unfinished until API access is available. The existing dashboard works without it.
