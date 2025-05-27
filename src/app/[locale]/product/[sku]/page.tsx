import ProductImages from "@/components/product/ProductImages";
import ProductDetails from "@/components/product/ProductDetails";
import PurchaseBox from "@/components/product/PurchaseBox";
import StoreInfo from "@/components/product/StoreInfo";
import ProductHeader from "@/components/product/ProductHeader";
import { notFound } from "next/navigation";
import { getProduct } from "@/services/products";
import PaymentInfoBox from "@/components/product/PaymentInfoBox";
import ProductSpecs from "@/components/product/ProductSpecs";

export interface ProductVariation {
  sku: string;
  name: string;
  primaryImage: string;
}

export interface SpecItem {
  icon: string;
  value: string;
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
  descriptionFull: string;
  seller: {
    name: string
    logo: string
    banner: string
  };
  specs: SpecItem[];
  suggestions: string[];
}

export default async function ProductPage({ params }: { params: { sku: string } }) {
  const { sku } = await params;
  const res = await getProduct(sku);
  const product: Product = await res;

  if (!product) return notFound();

  return (
    <>
      <ProductHeader suggestions={product.suggestions} />
      <main className="min-h-screen bg-gray-100 mx-auto px-8 pt-4">
        <div className="max-w-screen-xl mx-auto bg-white rounded shadow-sm px-8 py-8 grid grid-cols-3 gap-8">
          <div className="col-span-2  ">
            <div className="col-span-1 grid grid-cols-2">
              <div className="col-span-1">
                <ProductImages images={product.images} />
              </div>
              <div className="col-span-1">
                <ProductDetails product={product} />
              </div>
            </div>

            <hr className="my-12" />

            <ProductSpecs
              product={product}
            />
          </div>

          <div className="space-y-4">
            <PurchaseBox product={product} />
            <StoreInfo product={product} />
            <PaymentInfoBox product={product} />
          </div>
        </div>

      </main >
    </>
  );
}
