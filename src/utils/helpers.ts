import { wpquery } from "@/data/wordpress";
import type { PostQueryResponse } from "src/types/types";

export function getLanguageFromUrl(url: string) {
  return url.split("/")[1];
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString();
}

export async function loadAllPosts(lang: string) {
  const data = await wpquery<PostQueryResponse>({
    query: `
 query loadAllPosts($language: LanguageCodeFilterEnum!) {
  posts(where: { language: $language }) {
    edges {
      node {
        id
        content
        excerpt
        author {
          node {
            name
            slug
          }
        }
        date
         tags {
          nodes {
            name
          }
        }
        title
        slug
        language {
          code
          locale
        }
        featuredImage {
          node {
            mediaItemUrl
            altText
          }
        }
      }
    }
  }
}
  `,
    variables: { language: lang.toUpperCase() },
  });

  return data;
}
