"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Product } from "@/data/products";
import { ProductCard } from "./product-card";

type ShopBrowserProps = {
  products: Product[];
};

export function ShopBrowser({ products }: ShopBrowserProps) {
  const [category, setCategory] = useState<string>("All");
  const [format, setFormat] = useState<string>("All");
  const [search, setSearch] = useState<string>("");

  const formats = useMemo(() => {
    const set = new Set<string>();
    products.forEach((product) => {
      product.formats.forEach((item) => set.add(item.label));
    });
    return Array.from(set);
  }, [products]);

  const categories = useMemo(() => {
    const set = new Set<string>();
    products.forEach((product) => set.add(product.category));
    return ["All", ...Array.from(set)];
  }, [products]);

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = category === "All" || product.category === category;
      const matchesFormat =
        format === "All" ||
        product.formats.some((item) => item.label === format);
      const matchesSearch =
        search.length === 0 ||
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.tags.some((tag) =>
          tag.toLowerCase().includes(search.toLowerCase())
        );
      return matchesCategory && matchesFormat && matchesSearch;
    });
  }, [category, format, search, products]);

  return (
    <div className="space-y-12">
      <div className="glass-panel relative overflow-hidden rounded-3xl px-6 py-8 sm:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-[#6f7dff]/20 via-transparent to-[#8d5bff]/10 opacity-70" />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-accent-primary">
              Filter Experience
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Shop signature DDD collections.
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-zinc-400 sm:text-base">
              Fine-tune the catalog by format and discipline. Every product features multi-format downloads, layered textures,
              and licensing clarity for high-end storytelling.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-end lg:w-auto">
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search artwork or tags"
              className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/40 sm:w-64"
            />
          </div>
        </div>
        <div className="relative mt-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-3">
            {categories.map((item) => {
              const isActive = item === category;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`rounded-full border px-4 py-2 text-[0.65rem] uppercase tracking-[0.35em] transition ${
                    isActive
                      ? "border-accent-primary bg-accent-primary/20 text-white"
                      : "border-white/10 bg-white/5 text-zinc-300 hover:border-accent-primary/40 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
          <div className="flex flex-wrap gap-3">
            {["All", ...formats].map((item) => {
              const isActive = item === format;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFormat(item)}
                  className={`rounded-full border px-4 py-2 text-[0.65rem] uppercase tracking-[0.35em] transition ${
                    isActive
                      ? "border-accent-primary bg-accent-primary/20 text-white"
                      : "border-white/10 bg-white/5 text-zinc-300 hover:border-accent-primary/40 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <AnimatePresence mode="popLayout">
        <motion.div
          key={`${category}-${format}-${search}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full rounded-3xl border border-white/10 bg-white/5 px-8 py-12 text-center text-sm text-zinc-400">
              No artwork found. Try a different combination of filters or reset your search.
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
