'use client';

import { FC } from 'react';
import { getI18n } from '@/utils/getI18n';
import {
  CalendarIcon,
  LockClosedIcon,
  ResetIcon,
} from '@radix-ui/react-icons';
import Image from 'next/image';

interface Installment {
  amount: number;
  value: number;
}

interface Product {
  price: number;
  discount: number;
  installments: Installment;
  seller: {
    name: string;
    logo: string;
  };
}

interface PurchaseBoxProps {
  product: Product;
}

const PurchaseBox: FC<PurchaseBoxProps> = ({ product }) => {
  const translate = getI18n('product');

  return (
    <div className="border rounded-lg p-4 bg-white w-full text-sm space-y-4">
      <div>
        <div className="flex gap-1 font-medium">
          <p className="text-GREEN">{translate('FREE SHIPPING')}</p> {translate('ALL COUNTRY')}
        </div>
        <div className="text-gray-600 text-sm">
          {translate('DELIVERY_DESCRIPTION')}{' '}
          <span className="text-BLUE cursor-pointer">
            {translate('CALCULATE_ARRIVAL')}
          </span>
        </div>
      </div>

      <div>
        <div className="font-semibold">{translate('STOCK_AVAILABLE')}</div>
        <div className="mt-1">
          <label className="text-gray-600 mr-2">{translate('QUANTITY')}:</label>
          <select className="px-2 py-1 rounded text-sm font-medium">
            <option>1 {translate('UNIT')}</option>
            <option>2 {translate('UNITS')}</option>
            <option>3 {translate('UNITS')}</option>
          </select>
          <span className="text-gray-500 ml-2">({translate('AVAILABLE_QUANTITY')})
          </span>
        </div>
      </div>

      <div>
        <button className="w-full bg-BLUE text-white py-3 rounded font-medium hover:brightness-110 transition">
          {translate('BUY NOW')}
        </button>
        <button className="w-full bg-blue-100 text-BLUE py-3 rounded font-medium mt-2 hover:brightness-110 transition">
          {translate('ADD TO CART')}
        </button>
      </div>

      <div className="flex items-center gap-2 border-t pt-4">
        <Image
          width={80}
          height={800}
          src={product.seller.logo}
          alt={product.seller.name}
          className="object-contain"
        />
        <div>
          <div className="text-xs text-gray-600">
            {translate('OFFICIAL_STORE')}{' '}
            <span className="text-BLUE-600 font-medium">{product.seller.name}</span>
          </div>
          <div className="text-xs font-semibold">{translate('SALES_VOLUME')}</div>
        </div>
      </div>

      <ul className="border-t pt-4 text-xs space-y-2 text-gray-600">
        <li className="flex items-start gap-2">
          <ResetIcon className="mt-0.5" />
          <span>
            <strong className="text-BLUE cursor-pointer">
              {translate('FREE_RETURN')}
            </strong>{' '}
            {translate('FREE_RETURN_DESC')}
          </span>
        </li>
        <li className="flex items-start gap-2">
          <LockClosedIcon width={20} height={20} className="mt-0.5" />
          <span>
            <strong className="text-BLUE cursor-pointer">
              {translate('PURCHASE_PROTECTION')}
            </strong>{' '}
            {translate('PURCHASE_PROTECTION_DESC')}
          </span>
        </li>
        <li className="flex items-start gap-2">
          <CalendarIcon className="mt-0.5" />
          <span>{translate('WARRANTY')}</span>
        </li>
      </ul>
    </div>
  );
};

export default PurchaseBox;
