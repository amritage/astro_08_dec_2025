// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

export default defineConfig({
  devToolbar: { enabled: false },

  site: 'https://astro-landing-page-railway.app', // Updated for Railway deployment

  output: 'server',
  prerender: false,
  trailingSlash: 'ignore',

  adapter: vercel({
    isr: { expiration: 60 * 60 },
  }),
  build: {
    // ✅ safest for your current setup of big per-section <style> blocks
    inlineStylesheets: 'auto', // 'auto' | 'always' | 'never'
  },
  integrations: [react()],
});