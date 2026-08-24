# D & S Auto Repair — Website

Marketing website for **D & S Auto Repair**, 6566 College St, Beaumont, TX 77707 — (409) 466-9350.

Single-page site built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4. Fully static — no backend, database, or CMS. Deploys cleanly to Vercel.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Where the facts live

**All business information is in `lib/site-config.ts`** — name, phone, address, hours, services, navigation, testimonials, SEO copy, and the aggregate rating shown in the hero. Change a fact there and it updates everywhere, including the JSON-LD structured data in `app/layout.tsx`.

Things flagged for owner verification:

- **Friday hours** — public listings disagree (5 PM vs 3 PM), so the site shows "Call for hours". Fix in `lib/site-config.ts` once confirmed (search `TODO(owner)`).
- **Rating** — shown as "4.8 average rating" with no review count on purpose; update `business.rating` if listings change.

## Replacing the placeholder photos

The images in `public/images/` are tasteful stock placeholders (Unsplash) — they do **not** depict D & S, David, or his shop. Swap them for real shop photos by replacing the files (keep the filenames, or update the paths in the components listed):

| File | Used in | Suggested real photo |
|---|---|---|
| `hero-engine.jpg` | `components/Hero.tsx` | Shop exterior or signature work shot (dark/moody reads best under the overlay) |
| `mechanic-working.jpg` | `components/WhyDS.tsx` | David at work |
| `story-hands.jpg` | `components/Story.tsx` | Close-up of hands-on repair work |
| `service-oil-change.jpg` | `components/Services.tsx` | Any service in progress |
| `tool-wall.jpg` | `components/Location.tsx` | Shop interior / storefront |

## Content integrity

Testimonials in `site-config.ts` are excerpts from genuine public customer reviews — don't edit their wording or add reviews that don't exist. The site deliberately makes no claims about certifications, warranties, years in business, financing, towing, or anything else not publicly verifiable.

## Deploy

```bash
npx vercel
```

No environment variables required.
