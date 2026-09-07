// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// One place to change if the site moves to another domain. Set SITE_URL in the
// host's build environment (Cloudflare Pages) to override it.
const site = process.env.SITE_URL ?? 'https://orioltomas.dev';

// https://astro.build/config
export default defineConfig({
  site,
  i18n: {
    // Catalan is the primary language and lives at the root; English at /en/.
    defaultLocale: 'ca',
    locales: ['ca', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap()],
});
