"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const mediaSrc =
    product.heroMedia.type === "image"
      ? product.heroMedia.src
      : product.heroMedia.poster ?? product.gallery[0];

  return (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3"
    >
      <div className="relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0 z-10 opacity-0 transition group-hover:opacity-100">
          <div className="glass-panel absolute inset-4 rounded-2xl border border-accent-primary/20 bg-gradient-to-br from-white/5 to-transparent opacity-80 blur-md" />
        </div>
        <Image
          src={mediaSrc}
          alt={product.title}
          width={640}
          height={420}
          className="h-64 w-full rounded-2xl object-cover transition duration-500 group-hover:scale-105"
          priority={product.isFeatured}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100">
          <span className="rounded-full border border-white/10 bg-black/60 px-4 py-2 text-[0.6rem] uppercase tracking-[0.4em] text-white">
            View Detail
          </span>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-2 px-2 pb-3">
        <div className="flex items-center justify-between">
          <span className="text-[0.65rem] uppercase tracking-[0.4em] text-accent-primary">
            {product.category}
          </span>
          <p className="text-sm font-semibold text-white">${product.price}</p>
        </div>
        <h3 className="text-lg font-semibold text-white">{product.title}</h3>
        <p className="text-sm text-zinc-400">{product.excerpt}</p>
      </div>
      <Link href={`/product/${product.slug}`} className="absolute inset-0">
        <span className="sr-only">{product.title}</span>
      </Link>
    </motion.article>
  );
}
