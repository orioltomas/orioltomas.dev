export const site = {
  name: 'Oriol Tomàs Fortuny',
  // The canonical URL is not here on purpose: it comes from `site` in
  // astro.config.mjs (and therefore from SITE_URL), read as Astro.site.
  // Split so the address is not sitting in the markup as one scrapeable string.
  email: { user: 'oriol', domain: 'tomasfortuny.com' },
  github: 'https://github.com/orioltomas',
  linkedin: 'https://www.linkedin.com/in/oriol-tom%C3%A0s-fortuny-938506124',
} as const;

export const locales = ['ca', 'en'] as const;
export type Locale = (typeof locales)[number];

/** Path of the current page in the other language. */
export const altLocale: Record<Locale, { locale: Locale; path: string; label: string }> = {
  ca: { locale: 'en', path: '/en/', label: 'EN' },
  en: { locale: 'ca', path: '/', label: 'CA' },
};

export const localePath: Record<Locale, string> = { ca: '/', en: '/en/' };
