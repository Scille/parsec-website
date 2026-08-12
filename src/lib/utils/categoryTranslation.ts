import categoryTranslations from "@/config/categoryTranslations.json";

/**
 * Blog category slugs are generated per-language from each language's own
 * `categories:` frontmatter (see taxonomyParser.astro), so the same category
 * has a different slug in each locale (e.g. "others" in English is "autres"
 * in French). This table maps that small, fixed set of categories across
 * languages so links (like the language switcher) can carry the visitor to
 * the equivalent category page instead of a 404 or the wrong category.
 */
export const translateCategorySlug = (
  slug: string,
  fromLang: string,
  toLang: string,
): string => {
  if (fromLang === toLang) return slug;

  const row = (categoryTranslations as Record<string, string>[]).find(
    (entry) => entry[fromLang] === slug,
  );

  return row?.[toLang] ?? slug;
};
