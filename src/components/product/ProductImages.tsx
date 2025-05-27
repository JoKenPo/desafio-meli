'use client';

import Image from 'next/image';
import { FC, useState } from 'react';

interface ProductImagesProps {
  images: {
    full: string[];
    preview: string[];
  }
}

const ProductImages: FC<ProductImagesProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="grid grid-cols-5 gap-4 background-white">
      {/* Miniaturas verticais */}
      <div className="col-span-1 flex flex-col space-y-2">
        {images.preview.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`w-16 h-16 border rounded overflow-hidden flex items-center justify-center 
              ${idx === activeIndex ?
                'ring-2 ring-blue-500' : ''
              }`}
          >
            <Image
              loading="lazy"
              src={img}
              width={62}
              height={62}
              alt={`Thumb ${idx}`}
              quality={80}
              className="max-w-full max-h-full object-contain"
            />
          </button>
        ))}
      </div>

      {/* Imagem principal */}
      <div className="col-span-4 pr-4">
        <Image
          loading="lazy"
          width={410}
          height={500}
          quality={80}
          src={images.full[activeIndex]}
          alt={`Product ${activeIndex}`}
          className="max-w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default ProductImages;
