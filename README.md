# BC Bakes Tally — Static React Promo Site

A polished, static, React-based landing page for **BC Bakes Tally**. It is built to promote the business while keeping ordering on Hotplate, where live inventory, preorder windows, pricing, and pickup details can stay accurate.

## What is included

- A fully designed single-page React site
- Ready-to-host static files in `dist/`
- Vite/React source files in `src/`
- Responsive layout, animated hero, menu filtering, wishlist-note interaction, FAQ, pickup/location section, social links, and JSON-LD bakery schema
- Local SVG favicon and Open Graph image
- Netlify and Vercel config files

## Fastest deployment

Upload the contents of the `dist/` folder to any static host:

- Netlify drag-and-drop
- Vercel static project
- Cloudflare Pages
- GitHub Pages
- S3/CloudFront
- Any basic static web server

The `dist/` version imports React from `esm.sh`, so it is static-hostable without a build step. For a fully bundled production version, use the Vite workflow below.

## Local development with Vite

```bash
npm install
npm run dev
```

Build a bundled production site:

```bash
npm run build
```

Preview the build:

```bash
npm run preview
```

## Editing content

Most business content lives in:

```text
src/content.js
```

Update this file to change:

- Business name, baker name, Hotplate URL, social links
- Current announcement and pickup location
- Menu highlight cards
- FAQ copy
- Proof points / promotional bullets

For the prebuilt `dist/` version, update the matching content in `dist/assets/content.js`, or run a fresh Vite build after editing `src/content.js`.

## Important content notes

The Hotplate page is client-rendered, so the public page text was not extractable directly through the browser tool. The site copy was built from publicly discoverable Hotplate/social snippets and intentionally avoids hard-coding prices or live inventory. Hotplate should remain the source of truth for ordering.

Before publishing, verify:

- Current pickup location and hours
- Current menu items and prices
- Whether the Thursday pop-up details are still current
- Any preferred business phone/email/contact method
- Exact preferred spelling for the baker name, if you want it shown prominently

## Design notes

The site intentionally uses warm bakery colors, glassy cards, subtle animation, and a “wishlist” interaction to make the page feel alive while remaining completely static. It does not fake a checkout flow; all real ordering CTAs point back to Hotplate.
