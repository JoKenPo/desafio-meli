import ProductImages from "@/components/product/ProductImages";
import ProductDetails from "@/components/product/ProductDetails";
import PurchaseBox from "@/components/product/PurchaseBox";
import StoreInfo from "@/components/product/StoreInfo";



interface Product {
  id: string;
  title: string;
  price: number;
  discount: number;
  installments: {
    amount: number;
    value: number;
  };
  images: {
    full: string[];
    preview: string[];
  };
  color: string;
  ram: string;
  storage: string;
  description: string[];
}


const res = await fetch("http://localhost:4000/products");
const products: Product[] = await res.json();
const product = products[0];

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {

  // const { locale } = await params

  return (
    <main className="max-w-screen-xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      <ProductImages images={product.images} />
      <ProductDetails product={product} />
      <div className="space-y-4">
        <PurchaseBox product={product} />
        <StoreInfo />
      </div>
    </main>
  );
}
