import ProductImages from "@/components/product/ProductImages";
import ProductDetails from "@/components/product/ProductDetails";
import PurchaseBox from "@/components/product/PurchaseBox";
import StoreInfo from "@/components/product/StoreInfo";
import ProductHeader from "@/components/product/ProductHeader";
import { notFound } from "next/navigation";
import { getProduct } from "@/services/products";

export interface ProductVariation {
  sku: string;
  name: string;
  primaryImage: string;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  discount: number;
  installments: {
    amount: number;
    value: number;
  };
  tags: string[];
  rating: {
    value: number;
    count: number;
  }
  images: {
    full: string[];
    preview: string[];
  };
  color: string;
  variations: ProductVariation[];
  ram: string;
  storage: string;
  description: string[];
  seller: {
    name: string
    logo: string
  };
  suggestions: string[];
}

export default async function ProductPage({ params: { sku } }: { params: { sku: string } }) {
  const res = await getProduct(sku);
  const product: Product = await res;

  if (!product) return notFound();

  return (
    <>
      <ProductHeader suggestions={product.suggestions} />
      <main className="min-h-screen bg-gray-100 mx-auto px-8 pt-4">
        <div className="max-w-screen-xl mx-auto bg-white rounded shadow-sm px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductImages images={product.images} />
          <ProductDetails product={product} />
          <div className="space-y-4">
            <PurchaseBox product={product} />
            <StoreInfo product={product} />
          </div>
        </div>
      </main>
    </>
  );
}
