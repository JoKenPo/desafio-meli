'use client';

import { SpecItem } from "@/app/[locale]/product/[sku]/page";
import { getI18n } from "@/utils/getI18n";
import Image from "next/image";

interface SpecsGridProps {
  specs: SpecItem[];
}

const SpecsGrid = ({ specs }: SpecsGridProps) => {
  const translate = getI18n('product');

  return (
    <div className="grid grid-cols-2 gap-y-6 gap-x-8">
      {specs.map((item, idx) => (
        <div key={idx} className="flex items-center gap-3">
          <div className="bg-[#F2F2F2] rounded-full">
            <Image
              src={`/icons/${item.icon}.svg`}
              alt={item.icon}
              width={40}
              height={40}
              className="100 p-1"
            />
          </div>
          <div className="text-sm leading-tight">
            <div className="text-muted-foreground">{translate(`specs.${item.icon}`)}:</div>
            <div className="font-medium">{item.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpecsGrid;
