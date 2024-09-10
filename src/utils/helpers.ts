export function getLanguageFromUrl(url: string) {
  return url.split("/")[1];
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString();
}
