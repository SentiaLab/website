// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sentialab.com',
  integrations: [sitemap()],
  // Old pages now live as sections of the home page.
  redirects: {
    '/about': '/#company',
    '/expertise': '/#services',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
