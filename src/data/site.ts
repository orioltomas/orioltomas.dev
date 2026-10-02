export const site = {
  name: 'Oriol Tomàs Fortuny',
  // The canonical URL is not here on purpose: it comes from `site` in
  // astro.config.mjs (and therefore from SITE_URL), read as Astro.site.
  // Split so the address is not sitting in the markup as one scrapeable string.
  email: { user: 'oriol', domain: 'tomasfortuny.com' },
  github: 'https://github.com/orioltomas',
  linkedin: 'https://www.linkedin.com/in/oriol-tom%C3%A0s-fortuny-938506124',
} as const;

export const locales = ['ca', 'en', 'es'] as const;
export type Locale = (typeof locales)[number];

export const localePath: Record<Locale, string> = { ca: '/', en: '/en/', es: '/es/' };

/** Endonyms, for the language switcher — shown regardless of the current locale. */
export const languageNames: Record<Locale, string> = { ca: 'Català', en: 'English', es: 'Español' };
