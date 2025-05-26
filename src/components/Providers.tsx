'use client';

import { i18nClient } from "@/config/i18next";
import { AcceptedLanguages } from "@/services/i18n.config";
import { Theme } from "@radix-ui/themes";
import { I18nextProvider } from "react-i18next";

export default function Providers({ children, locale }: { children: React.ReactNode, locale: AcceptedLanguages }) {
  return (
    <I18nextProvider i18n={i18nClient(locale)}>
      <Theme>
        {children}
      </Theme>
    </I18nextProvider>
  )
}
