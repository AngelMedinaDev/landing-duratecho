// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://duratecho.com.mx', // <-- Solo tenías que agregar esta línea
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()]
});