export function getLanguageFromUrl(url: string) {
  return url.split("/")[1];
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString();
}

export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}
