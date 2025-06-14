import { navbarConfig } from 'vuepress-theme-hope'
import { resolve } from 'path';
import { readdirSync } from 'fs';

export function getFiles(dir: string) {
  const base = resolve(__dirname, '../');
  return readdirSync(resolve(base, dir))
    .filter(file => file.endsWith('.md') && file !== 'README.md')
    .map(file => `/${ dir }/${ file }`);
}

export const navbar = navbarConfig([
      {
        text: 'Getting started',
        icon: 'fa-solid fa-circle-arrow-right',
        link: 'getting-started/',
      },
      {
        text: 'Installation',
        icon: 'fa-solid fa-cloud-arrow-down',
        link: 'installations/',
      },
      {
        text: 'Configuration',
        icon: 'fa-solid fa-gears',
        link: 'configuration/'
      },
      {
        text: 'Usage',
        icon: 'fa-solid fa-sliders',
        link: 'usage/'
      },
      {
        text: 'Supported Devices',
        icon: 'fa-solid fa-microchip',
        link: 'supported-devices/'
      }
])
