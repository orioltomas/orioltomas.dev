# orioltomas.dev

Personal site and CV for Oriol Tomàs Fortuny. Static, built with Astro, Catalan and English.

## Commands

```bash
npm run dev      # dev server at http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the build locally
```

## Structure

| Path | What lives there |
| --- | --- |
| `src/data/site.ts` | Domain, email parts, GitHub and LinkedIn URLs, locale routing |
| `src/data/cv.ts` | Dates, companies and tags — the facts, language-independent |
| `src/data/copy.ts` | Every readable string, in `en` and `ca` |
| `src/styles/global.css` | Design tokens, both themes, print stylesheet |
| `src/components/` | Nav, Hero, Work, Stack, Education, Contact |
| `src/pages/index.astro` | Catalan, served at `/` |
| `src/pages/en/index.astro` | English, served at `/en/` |

To edit the CV, touch `cv.ts` (dates) and `copy.ts` (words). The components do not
contain content.

## Themes

Three states: no attribute (follow the OS), `data-theme="light"`, `data-theme="dark"`.
The toggle writes to `localStorage`; an inline script in `Base.astro` applies the saved
value before first paint so the page never flashes the wrong theme.

## The CV download

"Download CV" opens the browser's print dialog against the print stylesheet in
`global.css` — navigation, buttons and the footer note drop out, links print their URLs.
There is no separate PDF file to keep in sync.

## Languages

Catalan is the primary language and sits at the root; English lives at `/en/`. The pair is
declared once in `astro.config.mjs` (`i18n.defaultLocale`) and once in `src/data/site.ts`
(`localePath` and `altLocale`, which drive the header switch and the `hreflang` tags).

`hreflang="x-default"` points at the English page on purpose: a visitor whose language
matches neither should land on English, not Catalan.

## Deploying to Cloudflare

The site is deployed as a **Worker serving static assets** (not a Pages project).
`wrangler.jsonc` holds the deploy settings; `name` there must keep matching the
existing Worker, or a push creates a second one.

`assets.not_found_handling` is set to `404-page`. Without it, Workers answers an
unmatched route with an empty 404 body rather than `dist/404.html`.

Connect the repository in the Cloudflare dashboard, then:

| Setting | Value |
| --- | --- |
| Framework preset | Astro |
| Build command | `npm run build` |
| Output directory | `dist` |
| Environment variable | `SITE_URL = https://orioltomas.dev` |

`.node-version` pins Node 22, so the build image does not pick something older.

`public/_headers` ships the security headers and marks `/_astro/*` immutable — Cloudflare
reads it straight out of the build output.

The apex is what the site is served from. Add a Cloudflare **Redirect Rule** for
`www.orioltomas.dev/*` → `https://orioltomas.dev/$1` (301); `_headers` cannot do
cross-hostname redirects.

### Changing the domain

The canonical URL, the `hreflang` tags, the sitemap and `robots.txt` all read from one
value: `site` in `astro.config.mjs`, which defaults to `https://orioltomas.dev` and is
overridden by `SITE_URL`. Nothing else in the codebase hardcodes the domain.

```bash
SITE_URL=https://example.test npm run build
```

## Not on this site, on purpose

The old Europass CV carried a postal address, a phone number, a date of birth and two
former managers' phone numbers. None of it is in this repository, and none of it should
go back in.
