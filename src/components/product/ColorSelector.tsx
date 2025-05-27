'use client';

import { ProductVariation } from '@/app/[locale]/product/[sku]/page';
import { usePathname, useRouter } from 'next/navigation';

interface ColorSelectorProps {
  options: ProductVariation[];
  active: string;
  onChange?: (sku: string) => void;
}

export default function ColorSelector({ options, active }: ColorSelectorProps) {
  const router = useRouter();
  const pathname = usePathname();

  const goToColor = (sku: string) => {
    const segments = pathname.split('/');
    segments[segments.length - 1] = sku;
    router.push(segments.join('/'));
  };

  return (
    <div className="flex gap-4 overflow-x-auto py-2">
      {options.map(({ name, sku, primaryImage }) => {
        const isSelected = active === sku;
        return (
          <button
            key={name}
            onClick={() => goToColor(sku)}
            className={`flex flex-col items-center p-1 border rounded-md min-w-[64px] ${isSelected ? 'border-BLUE' : 'border-gray-300'
              }`}
          >
            <img src={primaryImage} alt={name} className="w-12 h-12 object-contain" />
          </button>
        );
      })}
    </div>
  );
}
