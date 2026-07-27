# Christian Wijaya

Luxury fashion site built with Astro and vanilla TypeScript.

## Development

```sh
npm install
npm run dev
npm run check
npm run build
npm test
```

Playwright tests require Chromium:

```sh
npx playwright install chromium
```

## Routes

- `/`
- `/products`
- `/products/[slug]`
- `/events`
- `/about`

Legacy `.html` URLs redirect to clean routes. Product IDs from
`product-detail.html?id=N` map to generated product pages.

Forms, cart actions, checkout, newsletter subscription, and event registration
remain client-side demonstrations without backend persistence.

[Live website](https://christian-wijaya.vercel.app)
