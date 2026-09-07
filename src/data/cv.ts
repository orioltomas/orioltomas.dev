import type { Locale } from './site';

/** A month, as ISO `YYYY-MM`. `null` in `to` means "still going". */
export type Month = string;

export interface Role {
  id: string;
  from: Month;
  to: Month | null;
}

export interface Job {
  id: string;
  company: string;
  /** Shown in the left gutter of the timeline. */
  years: string;
  roles: Role[];
  tags: string[];
}

/** Language-independent facts. Everything readable lives in copy.ts. */
export const jobs: Job[] = [
  {
    id: 'pdpaola',
    company: 'PDPAOLA Jewelry',
    years: '2021 —',
    roles: [
      { id: 'frontendLead', from: '2025-12', to: null },
      { id: 'ecommerceLead', from: '2023-09', to: '2025-12' },
      { id: 'fullstack', from: '2021-08', to: '2023-09' },
    ],
    tags: ['Nuxt', 'TypeScript', 'Laravel', 'GraphQL', 'RabbitMQ', 'MongoDB', 'Tech leadership'],
  },
  {
    id: 'dgtls',
    company: 'DGTLS Spain · valantic',
    years: '2019 — 2021',
    roles: [{ id: 'fullstack', from: '2019-05', to: '2021-07' }],
    tags: ['Pimcore', 'Symfony', 'PHP', 'MySQL', 'JavaScript'],
  },
  {
    id: 'eina',
    company: 'Grup Eina Digital',
    years: '2018 — 2019',
    roles: [{ id: 'seniorBackend', from: '2018-03', to: '2019-03' }],
    tags: ['PHP', 'Symfony', 'Scrum'],
  },
  {
    id: 'bebop',
    company: 'Bebop Studio',
    years: '2017 — 2018',
    roles: [{ id: 'backend', from: '2017-09', to: '2018-03' }],
    tags: ['Drupal', 'PHP', 'MySQL'],
  },
  {
    id: 'opendrako',
    company: 'OpenDrako',
    years: '2016',
    roles: [{ id: 'backend', from: '2016-01', to: '2016-03' }],
    tags: ['Symfony2', 'PHP', 'MySQL'],
  },
];

const intlLocale: Record<Locale, string> = { en: 'en-GB', ca: 'ca-ES' };

/** `2025-12` → `Dec 2025` / `des. 2025`. */
export function formatMonth(month: Month, locale: Locale): string {
  const [year, m] = month.split('-').map(Number);
  const label = new Intl.DateTimeFormat(intlLocale[locale], {
    month: 'short',
    year: 'numeric',
  }).format(new Date(Date.UTC(year, m - 1, 1)));
  return label.charAt(0).toUpperCase() + label.slice(1);
}

export function formatRange(role: Role, locale: Locale, present: string): string {
  const from = formatMonth(role.from, locale);
  return `${from} — ${role.to ? formatMonth(role.to, locale) : present}`;
}
