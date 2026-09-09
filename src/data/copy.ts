import type { Locale } from './site';

export interface Copy {
  htmlLang: string;
  meta: { title: string; description: string };
  nav: { work: string; projects: string; stack: string; education: string; contact: string };
  hero: {
    kicker: string;
    role: string;
    roleTail: string;
    intro: string;
    cv: string;
    mail: string;
  };
  sections: { work: string; projects: string; stack: string; education: string; contact: string };
  present: string;
  current: string;
  jobs: Record<string, { meta: string; blurb: string; roles: Record<string, string> }>;
  stack: { label: string; items: string }[];
  projects: {
    lede: string;
    code: string;
    open: string;
    items: Record<string, { blurb: string }>;
  };
  education: { label: string; quote: string; meta: string; degrees: string[] };
  footer: { talk: string; languages: string; note: string };
  notFound: { metaTitle: string; eyebrow: string; title: string; home: string };
  ui: { theme: string; lang: string; skip: string; emailFallback: string; newTab: string };
}

const en: Copy = {
  htmlLang: 'en',
  meta: {
    title: 'Oriol Tomàs Fortuny — Frontend Tech Lead',
    description:
      'Frontend Tech Lead at PDPAOLA in Barcelona. Nuxt and TypeScript over Laravel and GraphQL, after years of PHP and Symfony, and the technical leadership of the team.',
  },
  nav: { work: 'Work', projects: 'Projects', stack: 'Stack', education: 'Education', contact: 'Contact' },
  hero: {
    kicker: 'Barcelona · Ten years building for the web',
    role: 'Frontend Tech Lead at PDPAOLA.',
    roleTail: 'I came in through the backend and ended up leading the front of a jewelry ecommerce.',
    intro:
      'PHP and Symfony taught me to build things that hold up. These days it’s Nuxt and TypeScript on the front, Laravel and GraphQL on the back, and MongoDB and RabbitMQ when the volume calls for it. The rest of the job never lands in a repository: deciding the architecture, reviewing code, and growing the team’s autonomy.',
    cv: 'Download CV',
    mail: 'Write to me',
  },
  sections: { work: 'Work', projects: 'Projects', stack: 'Stack', education: 'Education', contact: 'Get in touch' },
  present: 'Present',
  current: 'Current',
  jobs: {
    pdpaola: {
      meta: 'Barcelona · Hybrid · 5 yrs 2 mos',
      blurb:
        'Technical leadership of the ecommerce team and, since the end of 2025, of the frontend chapter: architecture, code review, priorities and mentoring. A Nuxt and TypeScript storefront over a Laravel and GraphQL backend, with RabbitMQ and MongoDB underneath. Before that, fullstack work on the shop itself.',
      roles: {
        frontendLead: 'Frontend Tech Lead',
        ecommerceLead: 'Ecommerce Tech Lead',
        fullstack: 'Fullstack Web Developer',
      },
    },
    dgtls: {
      meta: '2 yrs 3 mos',
      blurb:
        'Back and front development with Pimcore, a Symfony-based platform, across agency projects — plus configuring and maintaining the servers they ran on. Distributed team, with the head office in Germany.',
      roles: { fullstack: 'Fullstack Web Developer' },
    },
    eina: {
      meta: '1 yr 1 mo',
      blurb:
        'New features and maintenance across Symfony projects, working in Scrum with an established team.',
      roles: { seniorBackend: 'Senior Backend Developer' },
    },
    bebop: {
      meta: '7 mos',
      blurb: 'An internal management web app and several landing pages, built with Drupal and PHP.',
      roles: { backend: 'Backend Developer' },
    },
    opendrako: {
      meta: '3 mos',
      blurb: 'A web application for academic management, built with Symfony2 on MySQL.',
      roles: { backend: 'Backend Developer' },
    },
  },
  stack: [
    { label: 'Frontend', items: 'Nuxt · Vue.js · TypeScript · JavaScript · HTML & CSS' },
    { label: 'Backend', items: 'PHP · Laravel · GraphQL · Symfony' },
    { label: 'Data & messaging', items: 'MongoDB · MySQL · RabbitMQ' },
    {
      label: 'Leadership',
      items: 'Technical leadership · Technical debt management · Technical roadmap · Scrum',
    },
    { label: 'Earlier', items: 'Pimcore · Drupal · Python & Django · Server configuration' },
  ],
  projects: {
    lede: 'Things I build outside work, mostly to answer a question I could not find a good answer to.',
    code: 'Code',
    open: 'Open it',
    items: {
      aprenEnCalma: {
        blurb:
          'Quiet games for children aged two to seven, learning letters, numbers, shapes and colours. No sounds, no rewards, no rush — deliberately the opposite of what most children’s apps do. A single HTML file with no dependencies, that installs like an app and keeps working with no connection.',
      },
    },
  },
  education: {
    label: 'Final degree project · Music Technology Group · UPF',
    quote:
      'A music recommendation web app built for people living with Alzheimer’s and for their families and carers, as support for music therapy sessions.',
    meta: 'The interesting part was applying new tooling somewhere it rarely goes: healthcare.',
    degrees: [
      'Computer Engineering — Universitat Pompeu Fabra, 2012–2017',
      'Computer Engineering — Universitat Politècnica de Catalunya, 2010–2012',
    ],
  },
  footer: {
    talk: 'Get in touch',
    languages: 'Catalan · Spanish · English (FCE)',
    note: 'Built with Astro. No trackers, no cookies.',
  },
  notFound: {
    metaTitle: 'Page not found — Oriol Tomàs Fortuny',
    eyebrow: 'Error 404',
    title: 'This page does not exist',
    home: 'Back to the start',
  },
  ui: {
    theme: 'Switch between light and dark',
    lang: 'Llegeix-ho en català',
    skip: 'Skip to content',
    emailFallback: 'oriol [at] tomasfortuny [dot] com',
    newTab: '(opens in a new tab)',
  },
};

const ca: Copy = {
  htmlLang: 'ca',
  meta: {
    title: 'Oriol Tomàs Fortuny — Frontend Tech Lead',
    description:
      'Frontend Tech Lead a PDPAOLA, Barcelona. Nuxt i TypeScript sobre Laravel i GraphQL, després d’anys de PHP i Symfony, i el lideratge tècnic de l’equip.',
  },
  nav: { work: 'Trajectòria', projects: 'Projectes', stack: 'Stack', education: 'Formació', contact: 'Contacte' },
  hero: {
    kicker: 'Barcelona · Deu anys fent web',
    role: 'Frontend Tech Lead a PDPAOLA.',
    roleTail: 'Vaig començar al backend i he acabat liderant el front d’un ecommerce de joieria.',
    intro:
      'PHP i Symfony em van ensenyar a construir coses que aguanten. Ara treballo amb Nuxt i TypeScript al front, Laravel i GraphQL al back, i MongoDB i RabbitMQ quan el volum ho demana. La resta de la feina no queda al repositori: decidir l’arquitectura, revisar codi i fomentar l’autonomia de l’equip.',
    cv: 'Descarrega el CV',
    mail: 'Escriu-me',
  },
  sections: { work: 'Trajectòria', projects: 'Projectes', stack: 'Stack', education: 'Formació', contact: 'Parlem' },
  present: 'Actualitat',
  current: 'Actual',
  jobs: {
    pdpaola: {
      meta: 'Barcelona · Híbrid · 5 anys 2 mesos',
      blurb:
        'Lideratge tècnic de l’equip d’ecommerce i, des del final del 2025, del capítol de frontend: arquitectura, revisió de codi, prioritats i acompanyament de l’equip. Un storefront amb Nuxt i TypeScript sobre un backend de Laravel i GraphQL, amb RabbitMQ i MongoDB a sota. Abans, feina fullstack sobre la mateixa botiga.',
      roles: {
        frontendLead: 'Frontend Tech Lead',
        ecommerceLead: 'Ecommerce Tech Lead',
        fullstack: 'Desenvolupador web fullstack',
      },
    },
    dgtls: {
      meta: '2 anys 3 mesos',
      blurb:
        'Desenvolupament back i front amb Pimcore, una plataforma basada en Symfony, en projectes d’agència — i configuració i manteniment dels servidors on s’allotjaven. Equip distribuït, amb la central a Alemanya.',
      roles: { fullstack: 'Desenvolupador web fullstack' },
    },
    eina: {
      meta: '1 any 1 mes',
      blurb:
        'Noves funcionalitats i manteniment de projectes Symfony, treballant amb Scrum dins d’un equip ja fet.',
      roles: { seniorBackend: 'Desenvolupador backend sènior' },
    },
    bebop: {
      meta: '7 mesos',
      blurb: 'Una aplicació web de gestió interna i diverses landings, amb Drupal i PHP.',
      roles: { backend: 'Desenvolupador backend' },
    },
    opendrako: {
      meta: '3 mesos',
      blurb: 'Una aplicació web de gestió acadèmica, feta amb Symfony2 sobre MySQL.',
      roles: { backend: 'Desenvolupador backend' },
    },
  },
  stack: [
    { label: 'Frontend', items: 'Nuxt · Vue.js · TypeScript · JavaScript · HTML i CSS' },
    { label: 'Backend', items: 'PHP · Laravel · GraphQL · Symfony' },
    { label: 'Dades i cues', items: 'MongoDB · MySQL · RabbitMQ' },
    {
      label: 'Lideratge',
      items: 'Lideratge tècnic · Gestió de deute tècnic · Roadmap tècnic · Scrum',
    },
    { label: 'Abans', items: 'Pimcore · Drupal · Python i Django · Configuració de servidors' },
  ],
  projects: {
    lede: 'Coses que faig fora de la feina, gairebé sempre per respondre una pregunta que no trobava ben resolta.',
    code: 'Codi',
    open: 'Obre’l',
    items: {
      aprenEnCalma: {
        blurb:
          'Jocs tranquils per a infants de dos a set anys, per aprendre lletres, números, formes i colors. Sense sons, sense premis i sense presses — deliberadament el contrari del que fa la majoria d’aplicacions infantils. Un sol fitxer HTML sense cap dependència, que s’instal·la com una app i segueix funcionant sense connexió.',
      },
    },
  },
  education: {
    label: 'Treball Final de Grau · Music Technology Group · UPF',
    quote:
      'Una aplicació web de recomanació musical pensada per a persones amb Alzheimer i per als seus familiars i cuidadors, com a suport de teràpies musicals.',
    meta: 'La gràcia era aplicar eines noves en un terreny on rarament arriben: la salut.',
    degrees: [
      'Enginyeria Informàtica — Universitat Pompeu Fabra, 2012–2017',
      'Enginyeria Informàtica — Universitat Politècnica de Catalunya, 2010–2012',
    ],
  },
  footer: {
    talk: 'Parlem',
    languages: 'Català · Castellà · Anglès (FCE)',
    note: 'Fet amb Astro. Sense rastrejadors ni galetes.',
  },
  notFound: {
    metaTitle: 'Pàgina no trobada — Oriol Tomàs Fortuny',
    eyebrow: 'Error 404',
    title: 'Aquesta pàgina no existeix',
    home: 'Torna a l’inici',
  },
  ui: {
    theme: 'Canvia entre clar i fosc',
    lang: 'Read it in English',
    skip: 'Ves al contingut',
    emailFallback: 'oriol [at] tomasfortuny [punt] com',
    newTab: '(s’obre en una pestanya nova)',
  },
};

export const copy: Record<Locale, Copy> = { en, ca };
