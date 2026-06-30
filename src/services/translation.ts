import { changeLocale } from "astro-react-i18next/utils";

export function changeLocaleTo(locale: string): void {
  if (!['fr', 'en'].includes(locale)) {
    return;
  }
  changeLocale(locale);
  window.location.reload();
}
