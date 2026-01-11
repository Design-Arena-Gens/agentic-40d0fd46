"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Parallax Worlds",
    description:
      "Layered compositions engineered for responsive parallax storytelling, from landing pages to immersive exhibitions.",
    accent: "from-[#6f7dff]/60 via-[#9b67ff]/30 to-transparent",
  },
  {
    title: "Instant Delivery Stack",
    description:
      "Secure checkout with encrypted delivery links, checksum verification, and resumable downloads across every format.",
    accent: "from-[#70d7ff]/60 via-[#6f7dff]/30 to-transparent",
  },
  {
    title: "Creator Collaborations",
    description:
      "Partner with global DDD pioneers for bespoke commissions, co-branded drops, and experiential activations.",
    accent: "from-[#9b67ff]/60 via-[#70d7ff]/20 to-transparent",
  },
];

export function ParallaxShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  const backgroundShift = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        style={{ y: backgroundShift }}
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
      >
        <div className="glow-gradient absolute left-[-20%] top-[-10%] h-[340px] w-[340px]" />
        <div className="glow-gradient absolute bottom-[-10%] right-[-10%] h-[400px] w-[400px]" />
      </motion.div>

      <div className="mx-auto max-w-6xl space-y-16">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.45em] text-accent-primary">
            Seamless Experience
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Built for luxurious storytelling and effortless delivery.
          </h2>
          <p className="mt-4 text-sm text-zinc-400 sm:text-base">
            From cinematic previews to encrypted downloads, Unboxify combines high-end digital craftsmanship with reliable
            e-commerce infrastructure designed for creative teams at scale.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-40`}
              />
              <div className="relative flex min-h-[220px] flex-col justify-between gap-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-accent-primary">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm text-zinc-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
