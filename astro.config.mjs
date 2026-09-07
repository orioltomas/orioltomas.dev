// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// One place to change if the site moves to another domain. Set SITE_URL in the
// host's build environment (Cloudflare Pages, Netlify, Vercel) to override it.
const site = process.env.SITE_URL ?? 'https://tomasfortuny.com';

// https://astro.build/config
export default defineConfig({
  site,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ca'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap()],
});
