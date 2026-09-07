export const site = {
  name: 'Oriol Tomàs Fortuny',
  url: 'https://tomasfortuny.com',
  // Split so the address is not sitting in the markup as one scrapeable string.
  email: { user: 'oriol', domain: 'tomasfortuny.com' },
  github: 'https://github.com/orioltomas',
  linkedin: 'https://www.linkedin.com/in/oriol-tom%C3%A0s-fortuny-938506124',
} as const;

export const locales = ['en', 'ca'] as const;
export type Locale = (typeof locales)[number];

/** Path of the current page in the other language. */
export const altLocale: Record<Locale, { locale: Locale; path: string; label: string }> = {
  en: { locale: 'ca', path: '/ca/', label: 'CA' },
  ca: { locale: 'en', path: '/', label: 'EN' },
};

export const localePath: Record<Locale, string> = { en: '/', ca: '/ca/' };
