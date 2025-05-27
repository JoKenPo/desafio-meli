'use client';

import { formatMessage } from "@/utils/formatText";
import { getI18n } from '@/utils/getI18n';
import SpecsGrid from "./SpecsGrid";
import { Product } from "@/app/[locale]/product/[sku]/page";

export default function ProductSpecs({ product }: { product: Product }) {
  const translate = getI18n('product');

  return (
    <div className="col-span-2 md:col-span-3 space-y-12">
      <section>
        <h2 className="text-2xl font-normal mb-8">{translate('PRODUCT SPECIFICATIONS')}</h2>
        <SpecsGrid specs={product.specs} />
        {/* <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <li><strong>Memória RAM:</strong> {product.ram}</li>
          <li><strong>Armazenamento:</strong> {storage}</li>
          <li><strong>Tela:</strong> 6.6"</li>
          <li><strong>Principal (traseira):</strong> 50 Mpx</li>
          <li><strong>Frontal:</strong> 32 Mpx</li>
          <li><strong>NFC:</strong> Sim</li>
          <li><strong>Desbloqueio:</strong> Impressão digital e facial</li>
        </ul> */}
      </section>
      <section>
        <h2 className="text-2xl font-normal mb-8">{translate('PRODUCT DESCRIPTION')}</h2>
        <div className="text-xl font-normal text-gray-700">{formatMessage(product.descriptionFull, null)}</div>
      </section>
    </div>
  );
}
