import { Suspense } from "react"; 
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/data/products";
import ProductDetailClient from "./ProductDetailClient";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));  
}

async function ProductContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Đang tải thông tin sản phẩm...
        </div>
      }
    >
      <ProductContent params={params} />
    </Suspense>
  );
}   