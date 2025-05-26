import ptBr from '../i18n/pt-BR.json';
import en from '../i18n/en.json';
import es from '../i18n/es.json';
import { AcceptedLanguages, initializeI18n } from '@/services/i18n.config';

const locales = ['pt-BR', 'en', 'es'] as const;

export const i18nConfig = {
  defaultLocale: 'pt-BR',
  locales,
};

export const resources = {
  'pt-BR': { translation: ptBr },
  en: { translation: en },
  es: { translation: es },
} as const;

export const i18nClient = (locale: AcceptedLanguages) => initializeI18n(locale, resources);