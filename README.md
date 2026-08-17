# Parsec Website

Source code for the [parsec.cloud](https://parsec.cloud) showcase website — the public site for
Parsec Cloud (secure, ANSSI-certified collaborative cloud storage).

Built with [Astro](https://astro.build) + [Vue](https://vuejs.org) + [Tailwind CSS](https://tailwindcss.com),
content-driven via Markdown/MDX collections, and available in French and English.

## Requirements

- Node.js `>=22.12.0` (see `.tool-versions`, currently pinned to `22.22.2`)
- npm (used in CI and by the `postinstall`/`prebuild` hooks — stick to npm rather than pnpm/yarn
  even though a `pnpm-lock.yaml` is present)

## Getting started

```shell
npm install
npm run dev
```

The dev server runs at `localhost:4321`. `npm run dev` also starts a background watcher
(`toml:watch`) that regenerates content when `.toml` config files change.

Other useful commands:

| Command                | Action                                                          |
| :---------------------- | :--------------------------------------------------------------- |
| `npm run dev`           | Start the local dev server (`localhost:4321`)                   |
| `npm run dev -- --host` | Start the local dev server, exposed on the local network         |
| `npm run build`         | Production build to `./dist/`                                   |
| `npm run preview`       | Build, then serve it locally for a final check                  |
| `npm run astro-check`   | Type-check the Astro project                                    |
| `npm run test:watch`    | Jest in watch mode                                               |
| `npm run prettier:fix`  | Auto-format the codebase                                        |
| `npm run generate-favicons` | Regenerate favicons from `src/config/config.toml`'s `site.favicon.image` |

## Project structure

```text
/
├── public/                   Static assets served as-is
├── scripts/                  Node build/content scripts (see below)
├── src/
│   ├── assets/images/        Images bundled through Astro's asset pipeline
│   ├── config/               Site config (config.toml), menus, contact info, fonts
│   ├── content/              Markdown/MDX content, one folder per collection
│   │   └── <collection>/{english,french}/   Per-language content
│   ├── content.config.ts     Astro content collections & schemas
│   ├── i18n/                 en.json / fr.json UI strings
│   ├── layouts/              Base layout + reusable components, sections, widgets
│   ├── lib/                  Content/taxonomy parsing helpers
│   ├── pages/[...lang]/      Route entry points (language-prefixed)
│   ├── plugins/              Small client-side behaviors (scroll menu, sticky sidebar)
│   ├── styles/               Global CSS (Tailwind-based)
│   └── types/                Shared TS types
├── astro.config.mjs
└── package.json
```

### Content collections

Content lives under `src/content/<collection>/<language>/`, e.g. `src/content/blog/french/`.
Collections currently defined in `src/content.config.ts` include: `pages`, `404`, `blog`,
`author`, `changelog`, `contact`, `download`, `faq`, `features`, `footer`, `homepage`, `pricing`,
`sections`, `testimonial`. See `src/content/_file_format.md` for the expected frontmatter format
of a content file.

### Internationalization

The site is bilingual (English/French):

- UI strings: `src/i18n/en.json`, `src/i18n/fr.json`
- Navigation menus: `src/config/menu.en.json`, `src/config/menu.fr.json`
- Page content: per-collection `english/` and `french/` subfolders
- Routing: `src/pages/[...lang]/` handles the language prefix

`npm run generate-multilingual-content` and `npm run remove-multilingual` (in `scripts/`) help
scaffold or strip a language's content tree.

### Build scripts

Located in `scripts/`, invoked from `package.json`:

- `toml-watcher.mjs` — watches/syncs `.toml` config into generated content used during `dev`/`build`
- `sync-tarteaucitron.mjs` — syncs the [tarteaucitron.js](https://tarteaucitron.io/) cookie-consent
  library assets (runs automatically via `postinstall`/`prebuild`)
- `generate-favicons.mjs` — generates the favicon set from the configured source image
- `generate-multilingual-content.mjs` / `remove-multilingual.mjs` — add/remove a content language
- `remove-draft-from-sitemap.mjs` — strips draft pages from the generated sitemap post-build

### Site configuration

`src/config/config.toml` holds site-wide settings (title, SEO defaults, base URL, logo, favicon,
trailing slash behavior, etc.). Contact details live in `src/config/contact.json`, fonts in
`src/config/fonts.json`.

## Testing

Tests run with Jest (`src/__tests__/`) against a production build, mirroring CI:

```shell
npm run build
npm run test
```

