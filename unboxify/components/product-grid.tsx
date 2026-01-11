import Link from "next/link";
import type { Product } from "@/data/products";
import { ProductCard } from "./product-card";

type ProductGridProps = {
  title: string;
  products: Product[];
  ctaHref?: string;
  ctaLabel?: string;
};

export function ProductGrid({
  title,
  products,
  ctaHref,
  ctaLabel,
}: ProductGridProps) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="flex flex-col gap-4 text-left">
          <span className="text-xs uppercase tracking-[0.45em] text-accent-primary">
            {title}
          </span>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Curated for visionary storytellers.
          </h2>
          <p className="max-w-2xl text-sm text-zinc-400 sm:text-base">
            Each Unboxify release is art-directed for premium experiences, layered for motion, and delivered with
            instant secure downloads in multiple formats.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {ctaHref && ctaLabel && (
          <div className="flex justify-center">
            <Link
              href={ctaHref}
              className="rounded-full border border-accent-primary/40 px-10 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-accent-primary transition hover:border-accent-primary hover:text-white"
            >
              {ctaLabel}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
