'use client';

import Image from 'next/image';
import { FC, useRef, useState } from 'react';

interface ProductImagesProps {
  images: {
    full: string[];
    preview: string[];
  }
}

const ProductImages: FC<ProductImagesProps> = ({ images }) => {
  const zoomRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomVisible, setZoomVisible] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = zoomRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const x = e.clientX - 180;
    const y = e.clientY - 180;

    setZoomPos({ x, y });
  };

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
      <div className="col-span-4 pr-4"

        ref={zoomRef}
        onMouseEnter={() => setZoomVisible(true)}
        onMouseLeave={() => setZoomVisible(false)}
        onMouseMove={handleMouseMove} >
        <Image
          loading="lazy"
          width={410}
          height={500}
          quality={80}
          src={images.full[activeIndex]}
          alt={`Product ${activeIndex}`}
          className="max-w-full h-auto object-contain"
        />

        {zoomVisible && (
          <div
            className="absolute w-32 h-32 border-2 border-blue-500 cursor-zoom-in"
            style={{
              top: zoomPos.y + 32,
              left: zoomPos.x + 32,
              backgroundImage: `url(${images.full[activeIndex]})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '500%',
              backgroundPosition: `${(zoomPos.x / zoomRef.current!.offsetWidth) * 100}% ${(zoomPos.y / zoomRef.current!.offsetHeight) * 100}%`
            }}
          />
        )}
      </div>
    </div >
  );
};

export default ProductImages;
