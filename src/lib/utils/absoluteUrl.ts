export function absoluteUrl(url: string, Astro: any) {
  const base = import.meta.env.BASE_URL; // includes configured base, with trailing slash
  const path = url.startsWith("/") ? url.replace(/^\//, "") : url;
  return new URL(base + path, Astro.site).href;
}
