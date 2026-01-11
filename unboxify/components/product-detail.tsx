"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";
import { CheckoutModal } from "./checkout-modal";

type ProductDetailProps = {
  product: Product;
};

export function ProductDetail({ product }: ProductDetailProps) {
  const [isCheckoutOpen, setCheckoutOpen] = useState(false);
  const mediaSrc =
    product.heroMedia.type === "image"
      ? product.heroMedia.src
      : product.heroMedia.poster ?? product.gallery[0];

  return (
    <>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start">
        <div className="space-y-8">
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40">
            {product.heroMedia.type === "video" ? (
              <video
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                controls
                preload="metadata"
                poster={product.heroMedia.poster}
                autoPlay
                loop
                muted
              >
                <source src={product.heroMedia.src} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={mediaSrc}
                alt={product.title}
                width={1280}
                height={720}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                priority
              />
            )}
            <div className="absolute inset-x-0 bottom-0 flex justify-between p-6">
              <span className="rounded-full border border-white/10 bg-black/60 px-4 py-2 text-[0.65rem] uppercase tracking-[0.35em] text-zinc-200">
                {product.category}
              </span>
              <span className="rounded-full border border-white/10 bg-accent-primary/10 px-4 py-2 text-[0.65rem] uppercase tracking-[0.35em] text-accent-primary">
                3D Digital Design
              </span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {product.gallery.map((image, index) => (
              <div
                key={image}
                className="group relative overflow-hidden rounded-2xl border border-white/5"
              >
                <Image
                  src={image}
                  alt={`${product.title} preview ${index + 1}`}
                  width={420}
                  height={280}
                  className="h-40 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.45em] text-accent-primary">
                {product.category}
              </p>
              <p className="text-lg font-semibold text-white">${product.price}</p>
            </div>
            <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              {product.title}
            </h1>
            <p className="mt-4 text-sm text-zinc-400">{product.description}</p>
            <motion.button
              type="button"
              whileTap={{ scale: 0.97 }}
              onClick={() => setCheckoutOpen(true)}
              className="button-glow mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#6f7dff] to-[#8d5bff] px-8 py-4 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:opacity-90"
            >
              Buy & Download
            </motion.button>
            <p className="mt-3 text-center text-[0.7rem] text-zinc-500">
              Secure checkout with instant download links and checksum verification.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-lg font-semibold text-white">Included Formats</h2>
            <div className="mt-4 grid gap-3">
              {product.formats.map((format) => (
                <div
                  key={format.label}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-sm text-zinc-300"
                >
                  <div>
                    <p className="font-medium text-white">{format.label}</p>
                    <p className="text-xs text-zinc-500">{format.fileSize}</p>
                  </div>
                  <span className="text-[0.65rem] uppercase tracking-[0.35em] text-accent-primary">
                    Secure
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-lg font-semibold text-white">Features</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm text-zinc-400">
              {product.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-lg font-semibold text-white">License</h2>
            <p className="mt-3 text-sm text-zinc-400">{product.license}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.65rem] uppercase tracking-[0.35em] text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CheckoutModal
        open={isCheckoutOpen}
        onClose={() => setCheckoutOpen(false)}
        product={product}
      />
    </>
  );
}
