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

## CI

GitHub Actions runs on pull requests and `main` pushes:

```sh
npm run ci
```

Checks: Prettier, ESLint, Astro type checks, production build, Playwright browser
tests, WCAG 2.1 AA axe checks, browser coverage, and high-severity dependency audit.
Coverage reports write to `coverage/`; CI uploads reports and requires at least 60%
executed browser JavaScript bytes. `color-contrast` remains excluded from axe gate
until brand-palette accessibility review.

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
