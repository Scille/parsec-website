import mdx from "@astrojs/mdx";
import vue from "@astrojs/vue";
import remarkToc from "remark-toc";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import fontsJson from "@/config/fonts.json";
import remarkParseContent from "@/lib/utils/remarkParseContent.ts";
import { enabledLanguages } from "@/lib/utils/i18nUtils.ts";
import { generateAstroFontsConfig } from "@/lib/utils/AstroFont.ts";
import { buildRedirects } from "@/lib/utils/buildRedirects.ts";
import rehypeExternalLinks from "rehype-external-links";
import config from ".astro/config.generated.json";
import { unified } from "@astrojs/markdown-remark";
import icon from "astro-icon";
import astroExpressiveCode from "astro-expressive-code";

const fonts = generateAstroFontsConfig(fontsJson);

let {
  seo: { sitemap: sitemapConfig },
  settings: {
    multilingual: { showDefaultLangInUrl, defaultLanguage },
  },
} = config;

const redirects = buildRedirects();

// https://astro.build/config
export default defineConfig({
  site:
    process.env.PAGES_SITE_URL ||
    (config.site.baseUrl ? config.site.baseUrl : "http://examplesite.com"),
  trailingSlash: config.site.trailingSlash ? "always" : "never",
  redirects: redirects,
  build: {
    inlineStylesheets: "always",
  },
  image: {
    layout: "constrained",
  },
  fonts,
  i18n: {
    locales: enabledLanguages,
    defaultLocale: defaultLanguage,
    routing: {
      prefixDefaultLocale: showDefaultLangInUrl,
    },
  },
  integrations: [
    astroExpressiveCode({
      themes: "github-dark",
    }),
    sitemapConfig.enable ? sitemap() : null,
    mdx(),
    vue(),
    icon(),
  ],
  markdown: {
    processor: unified({
      rehypePlugins: [
        [
          rehypeExternalLinks,
          {
            rel: "noopener noreferrer nofollow",
            target: "_blank",
          },
        ],
      ],
      remarkPlugins: [
        remarkParseContent, // Parse markdown content and add classes in heading and loading="lazy" to images
        remarkToc,
      ],
    }),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
