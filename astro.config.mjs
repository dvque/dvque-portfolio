import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
// Import /static for a static site
import vercelStatic from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  adapter: vercelStatic(),
});