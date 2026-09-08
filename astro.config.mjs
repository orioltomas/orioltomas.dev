// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// One place to change if the site moves to another domain. Set SITE_URL in the
// host's build environment (Cloudflare Pages) to override it.
const site = process.env.SITE_URL ?? 'https://orioltomas.dev';

// https://astro.build/config
export default defineConfig({
  site,
  // 'preserve' keeps index pages as index.html (so / and /en/ are unchanged)
  // while writing en/404.astro to en/404.html — the filename Cloudflare looks
  // for when walking up the tree for the nearest error page. The default
  // 'directory' would bury it in en/404/index.html, where it is never found.
  build: { format: 'preserve' },
  i18n: {
    // Catalan is the primary language and lives at the root; English at /en/.
    defaultLocale: 'ca',
    locales: ['ca', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      // 'preserve' surfaces the error pages as ordinary routes and drops the
      // trailing slash from /en, which would point the sitemap at a redirect.
      filter: (page) => !/\/404\/?$/.test(page),
      serialize: (item) => ({
        ...item,
        url: item.url.endsWith('/') ? item.url : `${item.url}/`,
      }),
    }),
  ],
});
