/**
 * Language-independent facts about personal projects. The words live in
 * copy.ts, keyed by `id`.
 *
 * `url` is the live version. Leave it out while a project has nowhere to
 * point: the card then links only to the code, rather than to a dead demo.
 */
export interface Project {
  id: string;
  name: string;
  year: string;
  repo: string;
  url?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 'aprenEnCalma',
    name: 'Aprèn en Calma',
    year: '2026',
    repo: 'https://github.com/orioltomas/apren-en-calma',
    url: 'https://orioltomas.github.io/apren-en-calma/',
    // Tags are shown in both languages, so they stay language-neutral.
    tags: ['PWA', 'JavaScript', 'Service Worker'],
  },
];
