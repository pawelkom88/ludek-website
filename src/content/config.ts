import { defineCollection, z } from "astro:content";

const navCollection = defineCollection({
  type: "content",
  schema: z.object({
    home: z.string(),
    news: z.string(),
    journal: z.string(),
    blog: z.string(),
    events: z.string(),
    team: z.string(),
    contact: z.string(),
  }),
});

const headingsCollection = defineCollection({
  type: "content",
  schema: z.object({
    latestNews: z.string(),
  }),
});

export const collections = {
  nav: navCollection,
  headings: headingsCollection,
};
