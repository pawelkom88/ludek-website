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
    domains: [
      "https://csimg.nyc3.cdn.digitaloceanspaces.com,https://scontent-lhr6-2.xx.fbcdn.net,https://scontent-lhr8-1.xx.fbcdn.net",
    ],
  },
});
