import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
// https://astro.build/config
export default defineConfig({
  site: 'https://yourdomain.com',
  output: "server",
  adapter: netlify(),
  integrations: [sitemap()],
});