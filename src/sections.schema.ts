import { z } from "astro/zod";

const sharedButtonBase = z
  .object({
    enable: z.boolean().optional(),
    tag: z.enum(["a", "button"]).optional(),
    url: z.string().optional(),
    label: z.string(),
    class: z.string().optional(),
    rel: z.string().optional(),
    iconLeft: z.string().optional(),
    iconRight: z.string().optional(),
    target: z.string().optional(),
    hoverEffect: z
      .enum(["text-flip", "creative-fill", "magnetic", "magnetic-text-flip"])
      .optional(),
    variant: z.enum(["fill", "outline", "link"]).optional(),
    color: z.enum(["primary", "neutral", "white"]).optional(),
  })
  .loose();

export const sharedButton = sharedButtonBase;
export const sharedButtonTag = sharedButtonBase.refine(
  (data) => data.tag !== "a" || !!data.url,
  {
    message: "`url` is required when `tag` is 'a'",
    path: ["url"],
  },
);

export const sharedContactItem = z.object({
  title: z.string(),
  icon: z.string(),
  description: z.string(),
  button: sharedButton.optional(),
});

export const ImagePositionEnum = z.enum(["left", "right"]);
export const AppearanceEnum = z.enum(["dark", "light"]);
export const button = sharedButtonTag;

export const videoConfigSchema = z.object({
  src: z.string(),
  type: z.string().optional(),
  provider: z.enum(["youtube", "vimeo", "html5"]).optional(),
  poster: z.string().optional(),
  autoplay: z.boolean().optional(),
  id: z.string().optional(),
});

export const inputFieldSchema = z.object({
  label: z.string().optional(),
  placeholder: z.string().optional(),
  required: z.boolean().optional(),
  halfWidth: z.boolean().optional(),
  defaultValue: z.string().optional(),
  name: z.string().optional(),
  selected: z.boolean().optional(),
  value: z.boolean().optional(),
  checked: z.boolean().optional(),
  type: z.enum(["text", "email", "radio", "checkbox"]).optional(),
  id: z.string().optional(),
  tag: z.literal("textarea").optional(),
  rows: z.string().optional(),
  group: z.string().optional(),
  groupLabel: z.string().optional(),
  items: z
    .array(
      z.object({
        label: z.string(),
        name: z.string().optional(),
        id: z.string().optional(),
        value: z.string().optional(),
        required: z.boolean().optional(),
        groupLabel: z.string().optional(),
        group: z.string().optional(),
        type: z.enum(["radio", "checkbox"]).optional(),
        halfWidth: z.boolean().optional(),
        defaultValue: z.string().optional(),
        checked: z.boolean().optional(),
      }),
    )
    .optional(),
  dropdown: z
    .object({
      type: z.enum(["select", "search"]).optional(),
      search: z
        .object({
          placeholder: z.string().optional(),
        })
        .optional(),
      items: z.array(
        z.object({
          label: z.string(),
          selected: z.literal(true),
          value: z.string(),
        }),
      ),
    })
    .optional(),
  content: z.string().optional(),
  note: z.enum(["info", "warning", "success", "deprecated", "hint"]).optional(),
  parentClass: z.string().optional(),
});

// ================================================================================
// SECTIONS SCHEMA
// ================================================================================

export const statsSectionSchema = z
  .object({
    enable: z.boolean().default(false), // Control the visibility of this section
    list: z.array(
      z.object({
        prependValue: z.string(),
        value: z.string(),
        appendValue: z.string(),
        label: z.string(),
        description: z.string(),
      }),
    ),
  })
  .optional();

// Pre-title schema
const preTitleSchema = z.object({
  label: z.string(),
  url: z.string().optional(),
  badge: z
    .object({
      enable: z.boolean().default(false),
      label: z.string(),
    })
    .optional(),
});

// Video schema (reuse your existing videoConfigSchema)
const heroButtonVideoSchema = z.object({
  src: z.string(),
  type: z.string().optional(),
  provider: z.enum(["youtube", "vimeo", "html5"]).optional().default("youtube"),
  poster: z.string().optional(),
  autoplay: z.boolean().optional(),
  id: z.string().optional(),
});

// Hero button schema
const heroButtonSchema = sharedButtonBase
  .extend({
    type: z.enum(["button", "video"]).optional(),
    video: heroButtonVideoSchema.optional(),
  })
  .refine((data) => data.tag !== "a" || !!data.url, {
    message: "`url` is required when `tag` is 'a'",
    path: ["url"],
  });

// Hero section schema
export const heroSectionSchema = z.object({
  enable: z.boolean().default(true),
  title: z.string(),
  preTitle: preTitleSchema.optional(),
  description: z.string(),
  image: z.string().optional(),
  buttons: z.array(heroButtonSchema).optional(),
});

export const pricingSectionSchema = z
  .object({
    enable: z.boolean().default(false),
    title: z.string().optional(),
    description: z.string().optional(),
    caption: z.string().optional(),
    priceComparisonTitle: z.string().optional(),
    list: z.array(
      z.object({
        enable: z.boolean().default(true),
        featured: z.boolean().default(false),
        badge: z
          .object({
            enable: z.boolean().default(false),
            label: z.string(),
          })
          .optional(),
        name: z.string(),
        description: z.string(),
        price: z.array(
          z.object({
            billing: z.string().optional(),
            prependValue: z.string().optional(),
            appendValue: z.string().optional(),
            tax: z.string().optional(),
            value: z.string(),
          }),
        ),
        features: z.array(z.string()).optional(), // Keep for backward compatibility
        button: button.optional(),
        mainFeaturesList: z.array(
          z.object({
            value: z.string(),
            isEnabled: z.boolean(),
          }),
        ),
      }),
    ),
    comparison: z
      .array(
        z.object({
          label: z.string(),
          list: z.array(
            z.object({
              value: z.string(),
              included: z.array(z.union([z.boolean(), z.string()])),
            }),
          ),
        }),
      )
      .optional(),
  })
  .optional();

export const contactFormSchema = z.object({
  action: z.string().optional(),
  emailSubject: z.string().optional(),
  note: z.string().optional(),
  submitButton: z.object({
    label: z.string(),
  }),
  inputs: z.array(inputFieldSchema),
});

const FaqItem = z.object({
  active: z.boolean().default(false),
  title: z.string(),
  content: z.string(),
});

const faqCategorySchema = z.object({
  label: z.string(),
  list: z.array(FaqItem),
});

export const faqSectionSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  draft: z.boolean().default(false),
  button: sharedButton.optional(),
  showTitle: z.boolean().default(false),
  showCategories: z.boolean().default(false),
  list: z.array(faqCategorySchema),
});

export const contactSectionSchema = z
  .object({
    enable: z.boolean().default(false),
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    contactInformation: z.array(sharedContactItem),
    form: contactFormSchema,
    testimonial: z.object({
      enable: z.boolean().default(true),
      content: z.string().optional(),
      customer: z.object({
        avatar: z.string(),
        name: z.string(),
        role: z.string(),
      }),
    }),
  })
  .optional();

export const featuresSectionSchema = z
  .object({
    enable: z.boolean().default(false).optional(),
    title: z.string().optional(),
    featureListLimit: z.number().optional(),
    list: z.array(
      z.object({
        image: z.string().optional(),
        title: z.string(),
        description: z.string(),
        halfWidth: z.boolean(),
        alternativeDirection: z.boolean(),
        imageHeight: z.number(),
      }),
    ),
  })
  .optional();

export const featuresSectionTwoSchema = z.object({
  enable: z.boolean().default(true),
  items: z.array(
    z.object({
      image: z.url(), // path to image

      // layout: image on left or right
      imagePosition: z.enum(["left", "right"]).default("left"),
      imageHeight: z.number().optional(),

      title: z.string(),
      description: z.string(),

      features: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
        }),
      ),
    }),
  ),
});

export const howItWorksSectionSchema = z
  .object({
    enable: z.boolean().default(false).optional(),
    title: z.string().optional(),
    list: z.array(
      z.object({
        step: z.string(), // e.g., "Step 01"
        image: z
          .object({
            src: z.string(),
            alt: z.string(),
          })
          .optional(),
        title: z.string(), // e.g., "Connect & Collaborate"
        description: z.string(), // e.g., "Invite your team..."
      }),
    ),
    button: z
      .object({
        label: z.string(),
        url: z.string(),
      })
      .optional(),
  })
  .optional();

export const differentiationSectionSchema = z
  .object({
    enable: z.boolean().default(false).optional(),
    title: z.string().optional(),
    list: z.array(
      z.object({
        name: z.string(),
        image: z
          .object({
            src: z.string(),
            alt: z.string(),
          })
          .optional(),
        title: z.string(),
        description: z.string(),
      }),
    ),
    button: z
      .object({
        label: z.string(),
        url: z.string(),
      })
      .optional(),
  })
  .optional();

export const benefitsSectionSchema = z
  .object({
    enable: z.boolean().default(false).optional(),
    title: z.string().optional(),
    benefits: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
      }),
    ),
    buttons: z.array(heroButtonSchema).optional(),
  })
  .optional();

export const teamSectionSchema = z
  .object({
    enable: z.boolean().default(false).optional(),
    title: z.string().optional(),
    list: z.array(
      z.object({
        name: z.string(),
        image: z.string(),
        role: z.string(),
      }),
    ),
  })
  .optional();

export const testimonialSectionSchema = z
  .object({
    enable: z.boolean().default(false).optional(),
    title: z.string().optional(),
    testimonialSection: z.object({
      enable: z.boolean().default(true).optional(),
      title: z.string().optional(),
      limit: z.union([z.number(), z.literal(false)]),
    }),
    list: z
      .array(
        z.object({
          enable: z.boolean().default(true).optional(),
          content: z.string(),
          customer: z.object({
            name: z.string(),
            role: z.string(),
            avatar: z.string().optional(),
            company: z.string().optional(),
          }),
        }),
      )
      .optional(),
  })
  .optional();

export const aboutSectionSchema = z.object({
  enable: z.boolean().default(false),
  title: z.string(),
  officeImages: z.array(z.string()),

  about: z.object({
    title: z.string(),
    description: z.string(),
    image: z.url(), // path to image
    list: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      }),
    ),
  }),

  stats: z.array(
    z.object({
      value: z.string(), // e.g., "20K+"
      title: z.string(), // e.g., "Happy Customers"
      description: z.string(), // supporting text
    }),
  ),
});

export const sectionsSchema = {
  contactSection: contactSectionSchema,
  statsSection: statsSectionSchema,
  teamSection: teamSectionSchema,
  testimonialSection: testimonialSectionSchema,
  pricingSectionSchema,
  heroSectionSchema,
  featuresSectionSchema,
  featuresSectionTwoSchema,
  howItWorksSectionSchema,
  differentiationSectionSchema,
  faqSectionSchema,
  aboutSectionSchema,
};
