// @ts-check
import { defineConfig } from 'astro/config';

import reactI18next from 'astro-react-i18next';

// https://astro.build/config
export default defineConfig({
  integrations: [
    reactI18next({
      defaultLocale: 'en',
      locales: ['en', 'fr'],
      localesDir: '../src/locales',
      prefixDefaultLocale: false,
    })
  ],
});