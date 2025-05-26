import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import "@radix-ui/themes/styles.css";

import Providers from "@/components/Providers";
import { AcceptedLanguages } from "@/services/i18n.config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Desafio Meli",
  description: "Desafio do Mercado Livre feito com Next.js",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: AcceptedLanguages };
}) {

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers locale={locale}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
