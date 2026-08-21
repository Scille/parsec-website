import trailingSlashChecker from "./trailingSlashChecker";
import { shouldOmitDefaultLangPrefix } from "./i18nUtils";
import config from "../../../.astro/config.generated.json";

const {
  site: { trailingSlash },
} = config;

export const oldToNewSlug: Record<string, Record<string, string>> = {
  fr: {
    "demarrer-parsec": "download",
    // solutions
    "solution-zero-trust": "features",
    "solution-data-loss-prevention": "features",
    "solution-collaboratif": "features",
    "solution-anti-ransomware": "features",
    "solution-stockage": "features",
    // sectors
    "secteur-integrateurs": "features",
    "secteur-finance-banque-et-assurance": "features",
    "secteur-industrie": "features",
    "secteur-juridique-expert-comptable": "features",
    "secteur-sante-et-structures-hospitalieres": "features",
    "secteur-grand-groupe": "features",
    "secteur-administration": "features",
    "secteur-startup": "features",
    // security
    "securite-certification-cspn": "#certification",
    "securite-hebergement-cloud": "",
    // pricing
    tarifs: "pricing",
    tarification: "pricing",
    //misc
    "a-propos": "about-us",
    "nous-rejoindre": "contact",
    partenaires: "partners",
    "open-source": "features/#open-source",
    //legal
    "cgvu-parsec": "terms-conditions",
    "politique-de-confidentialite": "privacy-policy",
  },
  en: {
    "start-parsec": "download",
    // solutions
    "zerotrust-encryption-solution": "features",
    "anti-ransomware-solution": "features",
    "collaborative-solution": "features",
    "storage-solution": "features",
    // sectors
    "sector-technology-integrators": "features",
    "sector-finance-banking-insurance": "features",
    "sector-industrial-industry": "features",
    "sector-legal-charted-accoutant": "features",
    "sector-health-and-hospitals-structures": "features",
    "sector-large-group": "features",
    "sector-administration": "features",
    "sector-startups": "features",
    // security
    "security-cspn-certification": "#certification",
    "security-cloud-hosting": "",
    // pricing
    pricing: "pricing",
    //misc
    "join-parsec": "contact",
    partners__trashed: "partners",
    "open-source": "features/#open-source",
    //legal
    "gtcs-parsec": "terms-conditions",
    "politique-de-confidentialite": "privacy-policy",
  },
};

export function buildRedirectDestination(
  lang: string,
  newSlug: string,
): string {
  const isAbsolute = newSlug.startsWith("/");
  const langPrefix = shouldOmitDefaultLangPrefix(lang) ? "" : `/${lang}`;
  const rawDestination = isAbsolute
    ? `${langPrefix}${newSlug}`
    : `${langPrefix}/${newSlug}`;

  return trailingSlashChecker(rawDestination);
}

export type RedirectEntry = { status: number; destination: string };

export function buildRedirects(): Record<string, RedirectEntry> {
  return Object.fromEntries(
    Object.entries(oldToNewSlug).flatMap(([lang, slugs]) =>
      Object.entries(slugs).map(([oldSlug, newSlug]) => {
        const baseOldSlug = lang === "fr" ? `/${oldSlug}` : `/en/${oldSlug}`;
        const entry: RedirectEntry = {
          status: 302,
          destination: buildRedirectDestination(lang, newSlug),
        };

        const key = trailingSlash ? `${baseOldSlug}/` : baseOldSlug;

        return [key, entry] as const;
      }),
    ),
  );
}
