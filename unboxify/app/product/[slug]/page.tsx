import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { ProductDetail } from "@/components/product-detail";

type ProductPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const shareImage =
    product.heroMedia.type === "image"
      ? product.heroMedia.src
      : product.heroMedia.poster ?? product.gallery[0];

  return {
    title: product.title,
    description: product.excerpt,
    openGraph: {
      title: product.title,
      description: product.excerpt,
      images: [
        {
          url: shareImage,
        },
      ],
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="px-4 pb-24 pt-36 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <ProductDetail product={product} />
      </div>
    </div>
  );
}
