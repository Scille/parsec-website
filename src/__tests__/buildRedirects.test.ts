import { describe, expect, test } from "@jest/globals";
import config from "../../.astro/config.generated.json";
import {
  buildRedirects,
  buildRedirectDestination,
  oldToNewSlug,
} from "@/lib/utils/buildRedirects";

const {
  settings: {
    multilingual: { defaultLanguage, showDefaultLangInUrl },
  },
  site: { trailingSlash },
} = config;

describe("buildRedirects", () => {
  const redirects = buildRedirects();

  // Flatten oldToNewSlug into one row per old URL, so every single legacy
  // URL is individually checked instead of relying on aggregate loops.
  const allOldUrls = Object.entries(oldToNewSlug).flatMap(([lang, slugs]) =>
    Object.keys(slugs).map((oldSlug) => ({
      lang,
      oldSlug,
      newSlug: slugs[oldSlug],
      basePath: lang === "fr" ? `/${oldSlug}` : `/en/${oldSlug}`,
    })),
  );

  test.each(allOldUrls)("Redirects $basePath", ({ basePath, newSlug }) => {
    const key = trailingSlash ? `${basePath}/` : basePath;
    const otherKey = trailingSlash ? basePath : `${basePath}/`;

    const entry = redirects[key];

    expect(entry).toBeDefined();
    expect(redirects[otherKey]).toBeUndefined();
    expect(entry.status).toBe(302);

    // The destination must be well-formed: absolute, no double slash,
    // and no trailing slash sneaking in after an anchor.
    expect(entry.destination.startsWith("/")).toBe(true);
    expect(entry.destination.includes("//")).toBe(false);
    if (newSlug.includes("#")) {
      expect(entry.destination.endsWith("/")).toBe(false);
    }
  });

  test("Every redirect uses a 302 status and an absolute destination", () => {
    for (const entry of Object.values(redirects)) {
      expect(entry.status).toBe(302);
      expect(entry.destination.startsWith("/")).toBe(true);
    }
  });

  test("Redirects a plain slug to the localized destination", () => {
    const destination = buildRedirectDestination("fr", "features");
    expect(destination).toBe(trailingSlash ? "/fr/features/" : "/fr/features");
  });

  test("Redirects to the default language without a locale prefix when configured", () => {
    const destination = buildRedirectDestination(defaultLanguage, "pricing");
    const expected = showDefaultLangInUrl
      ? `/${defaultLanguage}/pricing`
      : "/pricing";
    expect(destination).toBe(trailingSlash ? `${expected}/` : expected);
  });

  test("Redirects an empty slug to the localized root, without a double slash", () => {
    const destination = buildRedirectDestination("fr", "");
    expect(destination).toBe("/fr/");
    expect(destination.includes("//")).toBe(false);
  });

  test("Preserves anchors and never appends a trailing slash after the fragment", () => {
    const destination = buildRedirectDestination("fr", "#certification");
    expect(destination).toBe("/fr/#certification");
    expect(destination.endsWith("/")).toBe(false);
  });

  test("Preserves anchors on the default language root", () => {
    const destination = buildRedirectDestination(
      defaultLanguage,
      "#certification",
    );
    const expected = showDefaultLangInUrl
      ? `/${defaultLanguage}/#certification`
      : "/#certification";
    expect(destination).toBe(expected);
  });
});
