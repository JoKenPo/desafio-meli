import i18n, { i18n as I18n } from "i18next";
import { initReactI18next } from "react-i18next";


export const acceptedLanguages = ['pt-BR', 'en', 'es'] as const
const browserLanguage = navigator.language

export const headerName = 'x-i18next-current-language'

export const defaultLanguage =
  acceptedLanguages.find((language) => browserLanguage.includes(language)) ||
  'pt-BR';

export const defaultNS = 'translation';
export type Resource = {
  [key in (typeof acceptedLanguages)[number]]: {
    translation: any
  }
}
export type AcceptedLanguages = typeof acceptedLanguages[number];


export async function initializeI18n(locale: AcceptedLanguages, resources?: Resource): Promise<I18n> {
  await i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: locale,
      fallbackLng: 'pt-BR',
      defaultNS,
      ns: [defaultNS],
      interpolation: {
        escapeValue: false,
      },
      returnNull: false,
    });

  return i18n;
}