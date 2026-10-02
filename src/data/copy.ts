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
        'Technical leadership of the ecommerce team and, since the end of 2025, of the frontend chapter: architecture, code review, priorities and mentoring. Hands-on, fullstack work across the whole stack: a Nuxt and TypeScript storefront and a PHP, Laravel and GraphQL backend, with RabbitMQ and MongoDB underneath.',
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
      vincleStudio: {
        blurb:
          'A static, bilingual site for an architecture studio: content collections instead of a CMS, and a build that fails on purpose if a page is missing its translation, so the site can never end up half in Catalan and half in Spanish. No client-side framework, no analytics or cookies, and every photograph ships as build-time AVIF with sized fallbacks, so nothing shifts while it loads.',
      },
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
    lang: 'Change language',
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
        'Lideratge tècnic de l’equip d’ecommerce i, des del final del 2025, del capítol de frontend: arquitectura, revisió de codi, prioritats i acompanyament de l’equip. Feina fullstack real sobre tot l’stack: un storefront amb Nuxt i TypeScript i un backend de PHP, Laravel i GraphQL, amb RabbitMQ i MongoDB a sota.',
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
      vincleStudio: {
        blurb:
          'Un web estàtic i bilingüe per a un estudi d’arquitectura: col·leccions de contingut en lloc d’un CMS, i un build que falla a posta si a una pàgina li falta la traducció, perquè el web no pugui acabar mig en català i mig en castellà. Sense framework al client, sense analítica ni cookies, i cada fotografia es genera en build com a AVIF amb mides fixades, perquè res es mogui mentre carrega.',
      },
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
    lang: 'Canvia d’idioma',
    skip: 'Ves al contingut',
    emailFallback: 'oriol [at] tomasfortuny [punt] com',
    newTab: '(s’obre en una pestanya nova)',
  },
};

const es: Copy = {
  htmlLang: 'es',
  meta: {
    title: 'Oriol Tomàs Fortuny — Frontend Tech Lead',
    description:
      'Frontend Tech Lead en PDPAOLA, Barcelona. Nuxt y TypeScript sobre Laravel y GraphQL, después de años de PHP y Symfony, y el liderazgo técnico del equipo.',
  },
  nav: { work: 'Trayectoria', projects: 'Proyectos', stack: 'Stack', education: 'Formación', contact: 'Contacto' },
  hero: {
    kicker: 'Barcelona · Diez años construyendo para la web',
    role: 'Frontend Tech Lead en PDPAOLA.',
    roleTail: 'Empecé por el backend y acabé liderando el frontend de un ecommerce de joyería.',
    intro:
      'PHP y Symfony me enseñaron a construir cosas que aguantan. Ahora trabajo con Nuxt y TypeScript en el front, Laravel y GraphQL en el back, y MongoDB y RabbitMQ cuando el volumen lo pide. El resto del trabajo nunca llega al repositorio: decidir la arquitectura, revisar código y hacer crecer la autonomía del equipo.',
    cv: 'Descargar CV',
    mail: 'Escríbeme',
  },
  sections: { work: 'Trayectoria', projects: 'Proyectos', stack: 'Stack', education: 'Formación', contact: 'Hablemos' },
  present: 'Actualidad',
  current: 'Actual',
  jobs: {
    pdpaola: {
      meta: 'Barcelona · Híbrido · 5 años 2 meses',
      blurb:
        'Liderazgo técnico del equipo de ecommerce y, desde finales de 2025, del capítulo de frontend: arquitectura, revisión de código, prioridades y acompañamiento del equipo. Trabajo fullstack real sobre todo el stack: un storefront con Nuxt y TypeScript y un backend de PHP, Laravel y GraphQL, con RabbitMQ y MongoDB debajo.',
      roles: {
        frontendLead: 'Frontend Tech Lead',
        ecommerceLead: 'Ecommerce Tech Lead',
        fullstack: 'Desarrollador web fullstack',
      },
    },
    dgtls: {
      meta: '2 años 3 meses',
      blurb:
        'Desarrollo back y front con Pimcore, una plataforma basada en Symfony, en proyectos de agencia — además de configurar y mantener los servidores donde se alojaban. Equipo distribuido, con la central en Alemania.',
      roles: { fullstack: 'Desarrollador web fullstack' },
    },
    eina: {
      meta: '1 año 1 mes',
      blurb:
        'Nuevas funcionalidades y mantenimiento de proyectos Symfony, trabajando en Scrum con un equipo ya consolidado.',
      roles: { seniorBackend: 'Desarrollador backend sénior' },
    },
    bebop: {
      meta: '7 meses',
      blurb: 'Una aplicación web de gestión interna y varias landings, con Drupal y PHP.',
      roles: { backend: 'Desarrollador backend' },
    },
    opendrako: {
      meta: '3 meses',
      blurb: 'Una aplicación web de gestión académica, hecha con Symfony2 sobre MySQL.',
      roles: { backend: 'Desarrollador backend' },
    },
  },
  stack: [
    { label: 'Frontend', items: 'Nuxt · Vue.js · TypeScript · JavaScript · HTML y CSS' },
    { label: 'Backend', items: 'PHP · Laravel · GraphQL · Symfony' },
    { label: 'Datos y colas', items: 'MongoDB · MySQL · RabbitMQ' },
    {
      label: 'Liderazgo',
      items: 'Liderazgo técnico · Gestión de deuda técnica · Roadmap técnico · Scrum',
    },
    { label: 'Antes', items: 'Pimcore · Drupal · Python y Django · Configuración de servidores' },
  ],
  projects: {
    lede: 'Cosas que hago fuera del trabajo, casi siempre para responder una pregunta que no encontraba bien resuelta.',
    code: 'Código',
    open: 'Ábrelo',
    items: {
      vincleStudio: {
        blurb:
          'Un sitio estático y bilingüe para un estudio de arquitectura: colecciones de contenido en lugar de un CMS, y un build que falla a propósito si a una página le falta la traducción, para que el sitio nunca acabe mitad en catalán y mitad en castellano. Sin framework en el cliente, sin analítica ni cookies, y cada fotografía se genera en build como AVIF con tamaños fijados, para que nada se mueva mientras carga.',
      },
      aprenEnCalma: {
        blurb:
          'Juegos tranquilos para niños de dos a siete años, para aprender letras, números, formas y colores. Sin sonidos, sin premios y sin prisas — deliberadamente lo contrario de lo que hace la mayoría de aplicaciones infantiles. Un único archivo HTML sin dependencias, que se instala como una app y sigue funcionando sin conexión.',
      },
    },
  },
  education: {
    label: 'Trabajo Final de Grado · Music Technology Group · UPF',
    quote:
      'Una aplicación web de recomendación musical pensada para personas con Alzheimer y para sus familiares y cuidadores, como apoyo a terapias musicales.',
    meta: 'Lo interesante era aplicar herramientas nuevas en un terreno donde raramente llegan: la salud.',
    degrees: [
      'Ingeniería Informática — Universitat Pompeu Fabra, 2012–2017',
      'Ingeniería Informática — Universitat Politècnica de Catalunya, 2010–2012',
    ],
  },
  footer: {
    talk: 'Hablemos',
    languages: 'Catalán · Castellano · Inglés (FCE)',
    note: 'Hecho con Astro. Sin rastreadores, sin cookies.',
  },
  notFound: {
    metaTitle: 'Página no encontrada — Oriol Tomàs Fortuny',
    eyebrow: 'Error 404',
    title: 'Esta página no existe',
    home: 'Volver al inicio',
  },
  ui: {
    theme: 'Cambia entre claro y oscuro',
    lang: 'Cambiar de idioma',
    skip: 'Ir al contenido',
    emailFallback: 'oriol [en] tomasfortuny [punto] com',
    newTab: '(se abre en una pestaña nueva)',
  },
};

export const copy: Record<Locale, Copy> = { en, ca, es };
