// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "http://syedarbaazhussain.github.io/",
  base: '/linktree',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});