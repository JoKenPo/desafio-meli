"use client";

import { getI18n } from "@/utils/getI18n";
import { Button } from "@radix-ui/themes";

export default function StoreInfo({ product }) {
  const translate = getI18n('product');

  return (
    <div className="border rounded-lg p-4 space-y-1 text-sm">
      <div className="font-medium">{translate("OFFICIAL_STORE")} {product.seller.name}</div>
      <div className="text-gray-600">+5mil vendas</div>
      <Button variant="link" className="px-0 text-blue-600">
        {translate("VISIT_STORE")}
      </Button>
    </div>
  );
}
