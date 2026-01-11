import type { Metadata } from "next";
import { products } from "@/data/products";
import { SectionHeading } from "@/components/section-heading";
import { ShopBrowser } from "@/components/shop-browser";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Explore Unboxify's curated library of DDD (3D Digital Design) artworks with instant multi-format delivery.",
};

export default function ShopPage() {
  return (
    <div className="px-4 pb-24 pt-36 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <SectionHeading
          eyebrow="Shop Unboxify"
          title="Futuristic DDD art, ready to license and download."
          description="Our collections are hand-curated for premium brand storytelling, immersive experiences, and editorial features. Filter by category and format to find the perfect asset."
          align="left"
        />

        <ShopBrowser products={products} />

        <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-6 sm:grid-cols-3">
          {[
            {
              title: "Secure Checkout",
              description:
                "PCI-compliant payments with encrypted delivery links that activate instantly after purchase.",
            },
            {
              title: "Instant File Delivery",
              description:
                "Receive organized downloads for PNG, JPG, MP4, and 3D formats with checksum validation.",
            },
            {
              title: "License Support",
              description:
                "Get white-glove support for commercial clearances, extended rights, and bespoke collaborations.",
            },
          ].map((item) => (
            <div key={item.title} className="space-y-3 text-sm text-zinc-400">
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="glass-panel flex flex-col gap-6 rounded-3xl px-8 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-accent-primary">
              Creative Teams
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              Need custom 3D art direction or licensing guidance?
            </h3>
            <p className="mt-3 text-sm text-zinc-400">
              Our creative technologists support agency teams and brand partners with bespoke DDD pipelines, colorway
              variants, and staging for immersive environments.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-accent-primary/40 px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-accent-primary transition hover:border-accent-primary hover:text-white"
          >
            Connect With Us
          </Link>
        </div>
      </div>
    </div>
  );
}
