# parsec-website
Parsec showcase website

## Helpful commands:

Install the project
```shell
npm install
```

To get info on `astro` commands:
```shell
npm run astro
```

Run locally
```shell
npm run dev
```

Run locally with auto open in browser
```shell
npm run web:open
```

Run a visual preview
```shell
npm run preview
```

Build the project
```shell
npm run build
```


## Development tips

### Translations

Translations are handled with the `astro-react-i18next` library. Pages need to be included in the subfolder `pages/[...locale]`, this allows us to keep only one version of each page instead of having a subfolder for every locale (`pages/fr`, `pages/en`, ...).

The locale setting is set by the pages, so components and layouts will have their locale set by the parent page.

To enable the translation in an Astro file:

1. Import `i18n` in the header part
```astro
---
import i18n from 'i18next';
---
```

2. Wrap the `html` with this tag
```html
<html lang={i18n.language}>
    ...
</html>
```

3. Call `i18n.t` to translate a locale key with their corresponding translation in `@/locales/en/common.json` and `@/locales/fr/common.json`
```ts
{i18n.t('locale.key')}
```


### Routing

To switch to another page, a route can be set as a `href` directly:

```html
<a class="button" href="route/name" />
```

We need to take into account localization when switching pages, since it's done with a route prefix `.../fr/route/name`.

The current locale can be found as a `string | undefined` in the following variable, accessible from all `Astro` files, and set with a fallback value:
```astro
const currentLocale = Astro.currentLocale ?? 'en';
```

Then a route name can be built with the `astro:i18n.getRelativeLocaleUrl()` function.
Here's the full working example along with a translated button text:

```astro
---
import i18n from 'i18next';
import { getRelativeLocaleUrl } from 'astro:i18n';

const currentLocale = Astro.currentLocale ?? 'en';
---
<html lang={i18n.language}>
    <div>
        <a class="button" href={getRelativeLocaleUrl(currentLocale, 'route/name')}>{i18n.t('button.text')}</a>
    </div>
</html>
```

---------

Base Astro README:

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
