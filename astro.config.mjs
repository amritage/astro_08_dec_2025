// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless'; // ⬅️ SSR adapter

export default defineConfig({
  devToolbar: { enabled: false },

  // use your real deployed domain here
  site: 'https://astro21-ten.vercel.app',

  // ⬅️ full SSR, no static HTML baked
  output: 'server',

  // no prerender / ISR needed in pure SSR mode
  trailingSlash: 'ignore',

  adapter: vercel(),   // ⬅️ no isr here

  build: {
    // safest for your big in-component <style> blocks
    inlineStylesheets: 'auto',
  },

  integrations: [react()],
});
