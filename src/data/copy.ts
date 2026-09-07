import type { Locale } from './site';

export interface Copy {
  htmlLang: string;
  meta: { title: string; description: string };
  nav: { work: string; stack: string; education: string; contact: string };
  hero: {
    kicker: string;
    role: string;
    roleTail: string;
    intro: string;
    cv: string;
    mail: string;
  };
  sections: { work: string; stack: string; education: string; contact: string };
  present: string;
  current: string;
  jobs: Record<string, { meta: string; blurb: string; roles: Record<string, string> }>;
  stack: { label: string; items: string }[];
  education: { label: string; quote: string; meta: string; degrees: string[] };
  footer: { talk: string; languages: string; note: string };
  ui: { theme: string; lang: string; skip: string; emailFallback: string };
}

const en: Copy = {
  htmlLang: 'en',
  meta: {
    title: 'Oriol Tomàs Fortuny — Frontend Tech Lead',
    description:
      'Frontend Tech Lead at PDPAOLA in Barcelona. Ten years building for the web, from PHP and Symfony to Nuxt, TypeScript and GraphQL.',
  },
  nav: { work: 'Work', stack: 'Stack', education: 'Education', contact: 'Contact' },
  hero: {
    kicker: 'Barcelona · Hybrid · Ten years building for the web',
    role: 'Frontend Tech Lead at PDPAOLA.',
    roleTail: 'I came in through the backend and ended up leading the front of a jewelry ecommerce.',
    intro:
      'PHP and Symfony taught me to build things that hold up. These days it is Nuxt and TypeScript on the front, Laravel and GraphQL behind it, and RabbitMQ and MongoDB where the traffic gets uncomfortable — plus architecture decisions, code review, and making sure the team keeps moving without me in the room.',
    cv: 'Download CV',
    mail: 'Write to me',
  },
  sections: { work: 'Work', stack: 'Stack', education: 'Education', contact: 'Get in touch' },
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
  ui: {
    theme: 'Switch between light and dark',
    lang: 'Llegeix-ho en català',
    skip: 'Skip to content',
    emailFallback: 'oriol [at] tomasfortuny [dot] com',
  },
};

const ca: Copy = {
  htmlLang: 'ca',
  meta: {
    title: 'Oriol Tomàs Fortuny — Frontend Tech Lead',
    description:
      'Frontend Tech Lead a PDPAOLA, Barcelona. Deu anys fent web, del PHP i Symfony al Nuxt, TypeScript i GraphQL.',
  },
  nav: { work: 'Trajectòria', stack: 'Stack', education: 'Formació', contact: 'Contacte' },
  hero: {
    kicker: 'Barcelona · Híbrid · Deu anys fent web',
    role: 'Frontend Tech Lead a PDPAOLA.',
    roleTail: 'Vaig començar al backend i he acabat liderant el front d’un ecommerce de joieria.',
    intro:
      'El PHP i el Symfony em van ensenyar a construir coses que aguanten. Ara és Nuxt i TypeScript al davant, Laravel i GraphQL al darrere, i RabbitMQ i MongoDB on el trànsit es posa incòmode — més decisions d’arquitectura, revisió de codi i que l’equip pugui avançar sense mi a la sala.',
    cv: 'Descarrega el CV',
    mail: 'Escriu-me',
  },
  sections: { work: 'Trajectòria', stack: 'Stack', education: 'Formació', contact: 'Parlem' },
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
  ui: {
    theme: 'Canvia entre clar i fosc',
    lang: 'Read it in English',
    skip: 'Ves al contingut',
    emailFallback: 'oriol [at] tomasfortuny [punt] com',
  },
};

export const copy: Record<Locale, Copy> = { en, ca };
