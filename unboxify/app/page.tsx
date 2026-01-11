import { Hero } from "@/components/hero";
import { ProductGrid } from "@/components/product-grid";
import { ParallaxShowcase } from "@/components/parallax-showcase";
import { SectionHeading } from "@/components/section-heading";
import { products } from "@/data/products";
import Link from "next/link";

export default function Home() {
  const featuredProducts = products.filter((product) => product.isFeatured);

  return (
    <>
      <Hero />
      <ProductGrid
        title="Featured Collections"
        products={featuredProducts.slice(0, 6)}
        ctaHref="/shop"
        ctaLabel="View Full Catalog"
      />
      <ParallaxShowcase />
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:items-center">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Premium Delivery"
              title="Secure checkout with instant, encrypted downloads."
              description="Unboxify integrates safe checkout flows with one-click access to your licensed files. Every artwork ships with checksum validation, version history, and multi-format support."
              align="left"
            />
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Multi-format vault",
                  description: "Download PNG, JPG, MP4, and GLB/GLTF files instantly with resumable delivery links.",
                },
                {
                  title: "License clarity",
                  description: "Every product includes clear commercial license details and attribution guidelines.",
                },
                {
                  title: "Automated updates",
                  description: "Receive instant notifications for artwork updates, colorways, and variant releases.",
                },
                {
                  title: "Team-ready access",
                  description: "Share vault access securely with collaborators using role-based download permissions.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-zinc-300"
                >
                  <h3 className="text-base font-medium text-white">{item.title}</h3>
                  <p className="mt-3 text-zinc-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel relative overflow-hidden rounded-3xl p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6f7dff]/40 via-transparent to-[#8d5bff]/20 opacity-70" />
            <div className="relative space-y-6">
              <p className="text-xs uppercase tracking-[0.45em] text-zinc-300">
                Trusted by digital pioneers
              </p>
              <h3 className="text-2xl font-semibold text-white">
                “Unboxify elevates the way our campaigns feel. We plug the artwork straight into WebGL showrooms and immersive events.”
              </h3>
              <p className="text-sm text-zinc-400">— Mila Rez, Creative Technologist at Synapse Labs</p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-accent-primary/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-accent-primary transition hover:border-accent-primary hover:text-white"
              >
                Book A Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
