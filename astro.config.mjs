import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';
import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
  integrations: [
    {
      name: "manifest",
      hooks: {
        "astro:build:setup": options => {
          options.vite.build.manifest = true;
        }
      }
    }
  ],
  experimental: {
    viewTransitions: true
  },
  integrations: [react(), tailwind()],
  output: 'server',
  adapters: [vercel()],
  adapter: vercel()
});