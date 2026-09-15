// Parsec Cloud (https://parsec.cloud) Copyright (c) BUSL-1.1 2016-present Scille SAS

import type { KnipConfig } from "knip";

// Knip configuration
const config = {
  tags: ["-lintignore"],
  // TODO: Fix code base to enable these checks
  exclude: ["duplicates", "exports", "types"],
  // TODO: the following dependencies are reported as unused, check if still needed
  ignoreDependencies: [
    "date-fns", // used by src/lib/utils/formatRelativeDate.ts:1:24 (reported as unused file below)
    "linkedom", // used by src/layouts/shortcodes/Tabs.astro:19:27  (reported as unused file below)
    "tarteaucitronjs",
  ],
  // TODO: the following files are reported as unused, check if still needed
  ignoreFiles: [
    "public/tarteaucitron/css/tarteaucitron.min.css",
    "public/tarteaucitron/custom.css",
    "public/tarteaucitron/lang/tarteaucitron.en.min.js",
    "public/tarteaucitron/lang/tarteaucitron.fr.min.js",
    "public/tarteaucitron/tarteaucitron.min.js",
    "public/tarteaucitron/tarteaucitron.services.min.js",
    "public/umami.is.js",
    "src/layouts/components/widgets/Marquee.astro",
    "src/layouts/shortcodes/Card.astro",
    "src/layouts/shortcodes/CardGrid.astro",
    "src/layouts/shortcodes/Notice.astro",
    "src/layouts/shortcodes/ImageItem.astro",
    "src/layouts/shortcodes/ImageList.astro",
    "src/layouts/shortcodes/Tab.astro",
    "src/layouts/shortcodes/Tabs.astro",
    "src/layouts/shortcodes/Testimonial.astro",
    "src/lib/utils/bgOptimizedImage.ts",
    "src/lib/utils/dateFormat.ts",
    "src/lib/utils/downloadSelfHostedFonts.ts",
    "src/lib/utils/formatRelativeDate.ts",
    "src/lib/utils/generateTypeScale.ts",
    "src/lib/utils/getRelatedContent.ts",
    "src/lib/utils/removeEmptyKeys.ts",
    "src/lib/utils/removeUnusedFonts.ts",
    "src/lib/utils/splitProtectedText.ts",
    "src/plugins/sticky-sidebar.js",
  ],
} satisfies KnipConfig;

export default config;
