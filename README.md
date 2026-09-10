# Scope Creep Shield Kit

Finished digital product site for freelancers who need to protect project scope in the AI era.

- **Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Stripe Checkout Session verification
- **Price:** €24 one-time (Payment Link)
- **Locales:** French + English (`?lang=fr|en`, cookie + client toggle)
- **Brand:** Glint

## Quick start

```bash
cp .env.example .env.local
# set STRIPE_SECRET_KEY and NEXT_PUBLIC_STRIPE_PAYMENT_LINK
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Serve production build |

## Environment

| Variable | Purpose |
|----------|---------|
| `STRIPE_SECRET_KEY` | Server-side Checkout Session verification on `/success` |
| `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` | Buy CTA URL (falls back to `#pricing` if unset) |
| `NEXT_PUBLIC_SITE_URL` | Optional canonical site URL |

## Routes

- `/` — bilingual landing + Scope Risk Calculator
- `/success?session_id=…` — gated downloads after paid session
- `/legal/terms` — terms of sale
- `/legal/privacy` — privacy
- `/legal/mentions` — legal notice

## Pack

Deliverables live under `public/pack/` (individual files + `scope-creep-shield-kit.zip`). Links are shown only after Stripe verification on `/success`.

## Stripe product (reference)

- Product: `prod_VEkt6OgZJ6Mzm3`
- Price: `price_1UEHNKFmPnFPvlGKRSFRIc8I`

Do not commit secrets. Use Stripe test-mode keys for local/preview; production live keys only after explicit go-live.
