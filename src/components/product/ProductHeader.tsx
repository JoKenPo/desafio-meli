"use client";


import { getI18n } from "@/utils/getI18n";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher";

interface ProductHeaderProps {
  suggestions: string[];
}

export default function ProductHeader({ suggestions }: ProductHeaderProps) {
  const translate = getI18n('product');

  return (
    <header className="w-full text-sm">
      <div className="bg-yellow-400 mx-auto flex items-center justify-between px-8 py-8">
        <div className="max-w-screen-xl w-[1280px] m-auto flex justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="text-lg font-bold text-blue-900">
            <Image
              src={"https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.6.125/mercadolibre/logo_large_plus.webp"}
              alt="Mercado Livres"
              width={134}
              height={34}
            />
          </Link>
          <LanguageSwitcher />
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-100 px-8 py-2 text-gray-600 text-xs">
        <div className="max-w-screen-xl mx-auto">
          <Link href="#">Voltar à lista</Link> &gt;{" "}
          <Link href="#">Celulares e Telefones</Link> &gt;{" "}
          <Link href="#">Celulares e Smartphones</Link> &gt;{" "}
          <Link href="#">Samsung</Link>
        </div>
      </div>

      {/* Interesse */}
      <div className="bg-gray-100 px-8 py-1 text-gray-800 text-xs">
        <div className="max-w-screen-xl mx-auto">
          {translate("SUGGESTION TITLE")}{" "}
          <span className="text-blue-600">{suggestions.join(" - ")}</span>
        </div>
      </div>
    </header >
  );
}
