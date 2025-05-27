import "@testing-library/jest-dom";
import { defaultNS } from "@/services/i18n.config";

import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

i18next.use(initReactI18next).init({
  lng: 'pt-BR',
  fallbackLng: 'pt-BR',
  defaultNS,
  ns: [defaultNS],
  interpolation: {
    escapeValue: false,
  },
  returnNull: false,
})