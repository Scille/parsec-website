import mdx from "@astrojs/mdx";
import vue from "@astrojs/vue";
import remarkToc from "remark-toc";
import sitemap from "@astrojs/sitemap";
// import AutoImport from "astro-auto-import";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import fontsJson from "./src/config/fonts.json";
import rehypeExternalLinks from "rehype-external-links";
import { enabledLanguages } from "./src/lib/utils/i18nUtils.ts";
import remarkParseContent from "./src/lib/utils/remarkParseContent.ts";
import config from "./.astro/config.generated.json";
import { generateAstroFontsConfig } from "./src/lib/utils/AstroFont.ts";
import { unified } from "@astrojs/markdown-remark";
import icon from "astro-icon";

const fonts = generateAstroFontsConfig(fontsJson);

let {
  seo: { sitemap: sitemapConfig },
  settings: {
    multilingual: { showDefaultLangInUrl, defaultLanguage },
  },
} = config;

// https://astro.build/config
export default defineConfig({
  site: config.site.baseUrl ? config.site.baseUrl : "http://examplesite.com",
  base: process.env.PAGES_BASE_PATH || "/", //remove when final deploy on parsec.cloud
  trailingSlash: config.site.trailingSlash ? "always" : "never",
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
    sitemapConfig.enable ? sitemap() : null,
    // should be uncommented when astro-auto-import plugin will be compatible with Astro v7
    // AutoImport({
    //   imports: [
    //     "@/components/CustomButton.astro",
    //     "@/shortcodes/Accordion.astro",
    //     "@/shortcodes/Notice.astro",
    //     "@/shortcodes/Tabs.astro",
    //     "@/shortcodes/Tab.astro",
    //     "@/shortcodes/Testimonial.astro",
    //     "@/shortcodes/CardGrid.astro",
    //     "@/shortcodes/ImageList.astro",
    //     "@/shortcodes/ImageItem.astro",
    //     "@/shortcodes/Card.astro",
    //     "@/shortcodes/VideoInline.astro",
    //   ],
    // }),
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

    // Code Highlighter https://github.com/shikijs/shiki
    shikiConfig: {
      theme: "aurora-x", // https://shiki.style/themes
      wrap: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
