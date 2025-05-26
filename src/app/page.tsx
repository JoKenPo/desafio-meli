import { notFound, redirect } from "next/navigation";
import { Product } from "./[locale]/product/[sku]/page";
import { getProductsList } from "@/services/products";

export default async function Home({ }: {
}) {
  const res = await getProductsList();
  const products: Product[] = await res;

  if (!products) return notFound();

  redirect(`${'pt-BR'}/product/${products[0].id}`);

}
