import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover Unboxify's creative vision, craft, and secure delivery pipeline for premium 3D digital design.",
};

const milestones = [
  {
    year: "2021",
    title: "Launch",
    description:
      "Unboxify debuts as a curated release platform for experimental DDD artists across the globe.",
  },
  {
    year: "2022",
    title: "Vault Delivery Engine",
    description:
      "We introduced encrypted vault delivery with checksum verification and watermark auditing.",
  },
  {
    year: "2023",
    title: "Immersive Collaborations",
    description:
      "Partnered with experiential agencies to deliver real-time WebGL exhibitions and mixed reality showcases.",
  },
  {
    year: "2024",
    title: "Creator Residency",
    description:
      "Launched Unboxify Residency, enabling hybrid art/tech teams to craft cinematic digital worlds.",
  },
];

export default function AboutPage() {
  return (
    <div className="px-4 pb-24 pt-36 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-20">
        <SectionHeading
          eyebrow="About Unboxify"
          title="Where creative technologists shape the future of digital art."
          description="Unboxify is a collective of DDD artists, developers, and producers crafting premium digital universes. We merge cinematic art direction with engineering rigor to deliver assets that feel alive across screens, spaces, and experiences."
          align="left"
        />

        <div className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 sm:grid-cols-2">
          <div className="space-y-4 text-sm text-zinc-400">
            <h2 className="text-lg font-semibold text-white">Our Origins</h2>
            <p>
              Founded in 2021, Unboxify set out to archive and present the most forward-thinking DDD artwork. We blend
              human artistry with procedural systems, elevating every texture, light, and animation for audiences who crave
              depth and authenticity.
            </p>
            <p>
              Our studio model is intentionally hybrid — artists collaborate with creative technologists to prototype, render,
              and package storytelling systems that adapt to interactive environments.
            </p>
          </div>
          <div className="space-y-4 rounded-3xl border border-white/10 bg-black/40 p-6 text-sm text-zinc-400">
            <h2 className="text-lg font-semibold text-white">Creative Vision</h2>
            <p>
              We believe premium digital art should feel tactile, immersive, and ready for any medium. We design assets that
              transition effortlessly from hero landing pages to XR stages, integrating parallax, volumetrics, and responsive
              lighting.
            </p>
            <p>
              Unboxify curates with intention: every release is limited, story-driven, and meticulously documented for teams
              who value craft.
            </p>
          </div>
        </div>

        <div className="space-y-10">
          <h2 className="text-2xl font-semibold text-white">Milestones</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {milestones.map((milestone) => (
              <div
                key={milestone.year}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-xs uppercase tracking-[0.4em] text-accent-primary">
                  {milestone.year}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {milestone.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-400">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          id="delivery"
          className="rounded-3xl border border-white/10 bg-white/5 p-8"
        >
          <h2 className="text-2xl font-semibold text-white">
            Instant Delivery Pipeline
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Secure Cart",
                description:
                  "Tokenized checkout with PCI-compliant payments and fraud monitoring.",
              },
              {
                title: "Vault Access",
                description:
                  "Encrypted vault links, resumable downloads, and checksum validation available for 48 hours.",
              },
              {
                title: "Format Readiness",
                description:
                  "PNG, JPG, MP4, and GLB/GLTF exports optimized for web, broadcast, and experiential contexts.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-black/40 p-5 text-sm text-zinc-400"
              >
                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          id="licensing"
          className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
        >
          <div className="space-y-4 text-sm text-zinc-400">
            <h2 className="text-2xl font-semibold text-white">
              Licensing Framework
            </h2>
            <p>
              Our licenses are globally enforceable and crafted to support flexible usage. Choose between Standard,
              Extended, and Agency tiers with options for exclusivity across digital, experiential, and print media.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Commercial usage across web, broadcast, and immersive environments</li>
              <li>White-label rights and sublicensing options for agency partners</li>
              <li>Optional exclusivity, available in limited runs per collection</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/40 p-6 text-sm text-zinc-400">
            <h3 className="text-lg font-semibold text-white">Need more?</h3>
            <p className="mt-3">
              Contact our licensing team for bespoke agreements, exclusive production, or artist collaborations tailored to
              your campaign.
            </p>
            <a
              href="mailto:studio@unboxify.art"
              className="mt-6 inline-flex items-center justify-center rounded-full border border-accent-primary/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-accent-primary transition hover:border-accent-primary hover:text-white"
            >
              studio@unboxify.art
            </a>
          </div>
        </div>

        <div
          id="press"
          className="rounded-3xl border border-white/10 bg-white/5 p-8"
        >
          <h2 className="text-2xl font-semibold text-white">Press & Media</h2>
          <p className="mt-4 max-w-3xl text-sm text-zinc-400">
            Download brand assets, 3D renders, and press releases from our media kit. We love sharing how 3D digital design
            unlocks storytelling for future-facing brands.
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center justify-center rounded-full border border-accent-primary/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-accent-primary transition hover:border-accent-primary hover:text-white"
          >
            Download Press Kit
          </a>
        </div>
      </div>
    </div>
  );
}
