"use client";

import { Product } from "@/app/[locale]/product/[sku]/page";
import { getI18n } from "@/utils/getI18n";
import { SketchLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function StoreInfo({ product }: { product: Product }) {
  const translate = getI18n("product");

  return (
    <div className="border rounded p-4 text-sm shadow-sm space-y-3 bg-white max-w-sm">
      <div className="relative w-full h-24 rounded bg-gray-100">
        <Image
          src={product.seller.banner}
          alt={`${product.seller.name} banner`}
          quality={5}
          fill
          className="object-cover rounded-xl"
        />
        <div className="absolute left-4 bottom-[-24px] bg-white rounded shadow p-1">
          <Image
            src={product.seller.logo}
            alt={`${product.seller.name} logo`}
            width={70}
            height={70}
          />
        </div>
      </div>

      <div className="pt-6">
        <div className="flex items-center gap-2 font-medium text-base">
          {product.seller.name}
        </div>
        <div className="text-gray-500 text-sm flex items-center"> <SketchLogoIcon className="text-BLUE mr-1" /> Loja oficial do Mercado Livre</div>
        <div className="text-gray-500 text-sm">+10mil produtos</div>
      </div>

      <div className="flex h-2 mt-2 overflow-hidden rounded">
        <div className="flex-1 bg-red-200" />
        <div className="flex-1 bg-orange-200" />
        <div className="flex-1 bg-yellow-200" />
        <div className="flex-1 bg-lime-200" />
        <div className="flex-1 bg-green-500" />
      </div>

      <div className="flex justify-between text-center text-xs text-gray-600 mt-2">
        <div>
          <div className="font-medium text-black">+1 M</div>
          Vendas concluídas
        </div>
        <div>
          <div className="text-green-600">✔</div>
          Oferece bom atendimento
        </div>
        <div>
          <div className="text-green-600">✔</div>
          Entrega no prazo
        </div>
      </div>

      <button className="w-full bg-blue-100 text-BLUE py-3 rounded font-medium mt-2 hover:brightness-110 transition">
        {translate("VISIT_STORE")}
      </button>
    </div >
  );
}
