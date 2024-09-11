import contentful, { type EntrySkeletonType } from "contentful";

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});

export async function getEntries<T extends EntrySkeletonType>(
  content_type: string,
  lang: string
) {
  return await contentfulClient.getEntries<T>({
    content_type,
    locale: lang === "en" ? "en-GB" : "pl",
  });
}
