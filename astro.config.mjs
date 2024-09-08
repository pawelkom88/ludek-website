import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
// https://astro.build/config
export default defineConfig({
  site: "https://yourdomain.com",
  output: "server",
  adapter: netlify(),
  integrations: [sitemap()],
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
});
