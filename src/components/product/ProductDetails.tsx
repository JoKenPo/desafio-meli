"use client";

import { getI18n } from '@/utils/getI18n';
import { FC, JSX, useState } from 'react';
import renderStars from './RatingStars';
import ColorSelector from './ColorSelector';
import { Product } from '@/app/[locale]/product/[sku]/page';
import Image from 'next/image';
import { HeartFilledIcon, HeartIcon } from '@radix-ui/react-icons';

interface ProductDetailsProps {
  product: Product;
}
function ProductDetails({ product }: ProductDetailsProps): JSX.Element {
  const [selectedColor, setSelectedColor] = useState(product.id);
  const [favorited, setFavorited] = useState(false);

  function toggleFavorite() {
    setFavorited((prev) => !prev);
  }

  const discountedPrice = product.price * (1 - product.discount / 100);

  const translate = getI18n('product');

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Image
          width={25}
          height={25}
          src={product.seller.logo}
          alt={product.seller.name}
          className="object-contain"
        />
        <div>
          <div className="text-xs">
            <button className="text-BLUE font-medium">{`${translate('ACCESS STORE')} ${product.seller.name}`}</button>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="flex items-center justify-between gap-4 gap-2 w-full justify-between">
          <div className="text-xs font-semibold">{translate('NEW PRODUCTS')}</div>
          <button onClick={toggleFavorite} className="text-BLUE">
            {favorited ? (
              <HeartFilledIcon width={30} height={30} />
            ) : (
              <HeartIcon width={30} height={30} />
            )}
          </button>
        </div>
      </div>

      <h1 className="text-[22px] font-semibold">{product.title}</h1>

      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-700 flex">
          {product.rating.value.toFixed(1)}
          <div className="flex mx-1">{renderStars(product.rating.value)}</div>
          ({product.rating.count})
        </span>
      </div>

      <div className="space-y-1">
        {product.discount > 0 && (
          <div className="flex items-center gap-2">
            <span className="text-gray-500 line-through">${product.price.toFixed(2)}</span>
            {/* <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm">
              {product.discount}% OFF
            </span> */}
          </div>
        )}
        <p className="text-4xl font-light">${discountedPrice.toFixed(2)}</p>

        <div className="text-green-600 text-lg font-normal">
          {product.installments.amount}x ${product.installments.value.toFixed(2)} {translate('INTEREST FREE')}
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-600 mb-1">{translate("COLOR")}: <strong>{product.color}</strong></p>
        <ColorSelector
          options={product.variations}
          active={selectedColor}
          onChange={setSelectedColor}
        />
      </div>

      <div className="pt-4">
        <h2 className="font-medium mb-2">{translate("DESCRIPTION")}</h2>
        <ul className="list-disc pl-5 space-y-1">
          {product.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* <div className="pt-4">
        <ProductSpecs
          ram={product.ram}
          storage={product.storage}
          description={product.descriptionFull}
        />
      </div> */}
    </div>
  );
};

export default ProductDetails;
