import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jzinter22-svg.github.io/industrial-sciences-medical-devices/',
  base: '/industrial-sciences-medical-devices',

  integrations: [svelte()],

  vite: {
    plugins: [tailwindcss()],
  },
});
