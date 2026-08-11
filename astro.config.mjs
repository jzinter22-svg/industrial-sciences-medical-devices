import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

export default defineConfig({
  site: 'https://jzinter22-svg.github.io/industrial-sciences-medical-devices/',
  base: '/industrial-sciences-medical-devices',
  integrations: [svelte()],
});
