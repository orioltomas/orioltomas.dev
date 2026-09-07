# tomasfortuny.com

Personal site and CV for Oriol Tomàs Fortuny. Static, built with Astro, English and Catalan.

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
| `src/pages/index.astro` | English, served at `/` |
| `src/pages/ca/index.astro` | Catalan, served at `/ca/` |

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

## Deploying

`npm run build` produces a plain static `dist/`. Netlify, Cloudflare Pages, Vercel and
GitHub Pages all take it as is:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node:** 22 or newer

### Changing the domain

The canonical URL, the `hreflang` tags, the sitemap and `robots.txt` all read from a
single value: `site` in `astro.config.mjs`, which defaults to `https://tomasfortuny.com`.
Set `SITE_URL` in the host's build environment to point everything somewhere else without
touching the code:

```bash
SITE_URL=https://orioltomas.dev npm run build
```

`src/pages/robots.txt.ts` and the sitemap regenerate from that value on every build.

## Not on this site, on purpose

The old Europass CV carried a postal address, a phone number, a date of birth and two
former managers' phone numbers. None of it is in this repository, and none of it should
go back in.
