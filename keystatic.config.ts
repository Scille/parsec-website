// keystatic.config.ts
import { config, fields, collection } from "@keystatic/core";
import { block } from "@keystatic/core/content-components";

const keystaticLabels = {
  title: "Title",
  draft: "Draft",
  date: "Date",
  image: "Image (cover)",
  imageDescription: "Cover image, stored in src/assets/images/blog",
  author: "Author",
  categories: "Categories",
  categoriesDescription:
    "e.g. Cybersecurity, Digital Transformation, News, Others, Reglementation, Technology",
  category: "Category",
  excerpt: "Excerpt",
  excerptDescription: "Description below title to engage the user",
  content: "Content",
  addImage: "Add image",
  imageField: "Image",
  imageAlt: "Alt text",
  postsCollectionFrench: "Posts (French)",
  postsCollectionEnglish: "Posts (English)",
};

// Matches src/layouts/components/utilities/OptimizedImage.astro, provided globally to
// blog MDX content (see BlogSinglePageLayout.astro) so posts authored here
// don't need a hand-written `import OptimizedImage from "..."` line — Keystatic's
// MDX editor can't parse raw import statements.
const optimizedImageComponent = () =>
  block({
    label: keystaticLabels.addImage,
    schema: {
      src: fields.image({
        label: keystaticLabels.imageField,
        directory: "src/assets/images/blog",
        publicPath: "",
      }),
      alt: fields.text({
        label: keystaticLabels.imageAlt,
        validation: { isRequired: false },
      }),
    },
  });

// Shared "page" frontmatter fields, mirrored from the `page` zod schema in
// src/content.config.ts so Keystatic writes frontmatter Astro can actually read.
const pageFields = () => ({
  draft: fields.checkbox({ label: keystaticLabels.draft, defaultValue: false }),
  date: fields.date({ label: keystaticLabels.date, validation: { isRequired: false } }),
  image: fields.image({
    label: keystaticLabels.image,
    description: keystaticLabels.imageDescription,
    directory: "src/assets/images/blog",
    publicPath: "",
  }),
});

// Blog-specific fields, mirrored from the `blogCollection` schema extension.
const blogFields = () => ({
  author: fields.text({
    label: keystaticLabels.author,
    validation: { isRequired: false },
  }),
  categories: fields.array(fields.text({ label: keystaticLabels.category }), {
    label: keystaticLabels.categories,
    description: keystaticLabels.categoriesDescription,
    itemLabel: (props) => props.value,
  }),
  excerpt: fields.text({
    label: keystaticLabels.excerpt,
    description: keystaticLabels.excerptDescription,
    multiline: true,
    validation: { isRequired: false },
  }),
});

const postSchema = () => ({
  title: fields.slug({ name: { label: keystaticLabels.title } }),
  ...pageFields(),
  ...blogFields(),
  content: fields.mdx({
    label: keystaticLabels.content,
    components: { OptimizedImage: optimizedImageComponent() },
  }),
});

export default config({
  // GitHub Pages serves the production build as static files, so the Keystatic
  // admin (astro.config.mjs only injects its routes for `astro dev`) is only ever
  // reached locally. Local storage by default (no auth needed); set
  // KEYSTATIC_STORAGE=github to write through GitHub instead — requires
  // KEYSTATIC_GITHUB_CLIENT_ID, KEYSTATIC_GITHUB_CLIENT_SECRET and KEYSTATIC_SECRET.
  storage:
    process.env.KEYSTATIC_STORAGE === "github"
      ? { kind: "github", repo: "Scille/parsec-website" }
      : { kind: "local" },
  collections: {
    postsFrench: collection({
      label: keystaticLabels.postsCollectionFrench,
      slugField: "title",
      path: "src/content/blog/french/**",
      format: { contentField: "content" },
      schema: postSchema(),
    }),
    postsEnglish: collection({
      label: keystaticLabels.postsCollectionEnglish,
      slugField: "title",
      path: "src/content/blog/english/**",
      format: { contentField: "content" },
      schema: postSchema(),
    }),
  },
});
