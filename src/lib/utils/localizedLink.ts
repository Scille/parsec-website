import { getLocaleUrlCTM } from "./i18nUtils";

/**
 * Thin wrapper around getLocaleUrlCTM that supplies the Astro base path
 * automatically, so call sites don't need to pass import.meta.env.BASE_URL
 * themselves. Kept in its own file (rather than i18nUtils.ts) because
 * referencing import.meta there breaks the Jest suite, which compiles
 * i18nUtils.ts with a CommonJS-only tsconfig.
 */
export const localizedLink = (
  url: string,
  providedLang: string | undefined,
  prependValue?: string,
): string =>
  getLocaleUrlCTM(url, providedLang, prependValue, import.meta.env.BASE_URL);
