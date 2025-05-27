import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import "@radix-ui/themes/styles.css";

import Providers from "@/components/Providers";
import { AcceptedLanguages } from "@/services/i18n.config";

const MontserratSans = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Desafio Meli",
  description: "Desafio do Mercado Livre feito com Next.js",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: AcceptedLanguages };
}) {

  const { locale } = await params

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${MontserratSans.variable} antialiased`}>
        <Providers locale={locale}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
