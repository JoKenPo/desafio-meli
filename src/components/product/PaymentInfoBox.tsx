'use client';

import { Product } from "@/app/[locale]/product/[sku]/page";
import { applyBreakLine } from "@/utils/formatText";
import { IdCardIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function PaymentInfoBox({ product }: { product: Product }) {
  return (
    <>
      <div className="text-sm border rounded divide-y">
        <div className="p-4">
          <strong>Outras opções de compra</strong><br />
        </div>
        <div className="p-4">
          <a href="#" className="text-BLUE hover:underline text-sm block">
            Ver 9 opções a partir de $ {product?.price.toFixed(2)}
          </a>
        </div>
      </div>

      <div className="space-y-4 border p-4 rounded">
        <h2 className="font-normal text-lg">Meios de pagamento</h2>

        <button className="w-full bg-GREEN text-white font-semibold p-4 rounded flex items-center justify-center gap-2 text-sm hover:bg-green-700 transition">
          <IdCardIcon width={25} height={25} />
          {applyBreakLine('Pague *em até 18x sem juros!*')}
        </button>

        <div>
          <h3 className="font-medium mb-1">Cartões de crédito</h3>
          <div className="flex flex-wrap gap-3">
            <Image src="/icons/hipercard.svg" alt="Hipercard" width={48} height={24} />
            <Image src="/icons/elo.svg" alt="Elo" width={48} height={24} />
            <Image src="/icons/visa.svg" alt="Visa" width={48} height={24} />
            <Image src="/icons/mastercard.svg" alt="Mastercard" width={48} height={24} />
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-1">Cartões de débito</h3>
          <div className="flex items-center gap-3">
            <Image src="/icons/visa.svg" alt="Visa" width={48} height={24} />
            <Image src="/icons/mastercard.svg" alt="Mastercard" width={48} height={24} />
          </div>
        </div>

        <a href="#" className="text-BLUE hover:underline text-sm block mt-2">
          Confira outros meios de pagamento
        </a>
      </div>
    </>
  );
}
