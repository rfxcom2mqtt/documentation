import { sidebarConfig } from 'vuepress-theme-hope'
import { getFiles } from "./navbar";

export const sidebar = sidebarConfig({
  '/': [
    {
      text: 'Getting started',
      icon: 'fa-solid fa-circle-arrow-right',
      link: 'getting-started/',
      children: [
        '/installations/README.md',
        {
          text: 'Configuration',
          link: '/configuration/README.md',
        },
        '/usage/README.md',
      ]
    },
    {
      text: 'Installations',
      icon: 'fa-solid fa-cloud-arrow-down',
      link: '/installations',
      children: [
        {
          text: 'Home Assistant addon',
          link: '/installations/02_ha_addon.md',
        },
        {
          text: 'Docker',
          link: '/installations/03_installation_docker.md',
        }
      ]
    },
    {
      text: 'Usage',
      icon: 'fa-solid fa-sliders',
      link: '/usage',
      children: [
        '/usage/integrations/README.md',
        '/usage/debug.md',
        '/usage/mqtt_topics_and_messages.md',
      ]
    },
    {
      text: 'Configuration',
      icon: 'fa-solid fa-gears',
      link: '/configuration',
      children: [
        '/configuration/homeassistant.md',
        '/configuration/frontend.md',
      ]
    },
    {
      text: 'Supported Devices',
      icon: 'fa-solid fa-microchip',
      link: '/supported-devices',
      children: [
        '/supported-devices/README.md',
      ]
    }
  ],
});
