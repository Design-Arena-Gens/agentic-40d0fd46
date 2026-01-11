"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroScene = dynamic(() => import("./hero-scene").then((mod) => mod.HeroScene), {
  ssr: false,
  loading: () => (
    <div className="glass-panel flex h-[420px] w-full items-center justify-center rounded-3xl sm:h-[480px] md:h-[520px]">
      <div className="h-12 w-12 animate-pulse rounded-full border border-accent-primary/40" />
    </div>
  ),
});

const stats = [
  { label: "Curated Collections", value: "72+" },
  { label: "Instant Downloads", value: "4K-12K" },
  { label: "Creator Network", value: "150+" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const blurOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden px-4 pb-24 pt-40 sm:px-6 md:px-8">
      <motion.div
        style={{ opacity: blurOpacity }}
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center"
      >
        <div className="glow-gradient h-96 w-[720px] opacity-60 blur-3xl" />
      </motion.div>
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <span className="inline-flex items-center rounded-full border border-accent-primary/40 bg-white/5 px-4 py-2 text-[0.65rem] uppercase tracking-[0.45em] text-accent-primary">
            Discover Digital Depth
          </span>
          <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            The premium marketplace for immersive{" "}
            <span className="text-gradient">3D digital art</span> experiences.
          </h1>
          <p className="mt-6 max-w-xl text-base text-zinc-400 sm:text-lg">
            Unboxify curates visionary creations from the world’s leading DDD artists. Immerse in cinematic worlds,
            neon sculptures, and architectural dreamscapes — ready for instant licensing and seamless multi-format delivery.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/shop"
              className="button-glow inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#6f7dff] to-[#8d5bff] px-8 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-white transition hover:opacity-90"
            >
              Enter the Gallery
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-zinc-300 transition hover:border-accent-primary hover:text-white"
            >
              Our Vision
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5">
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.35em] text-zinc-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <motion.div style={{ y: translateY }} className="parallax-layer">
            <HeroScene />
          </motion.div>
          <div className="absolute -left-10 bottom-10 hidden max-w-[260px] rounded-2xl border border-white/10 bg-white/5 p-5 text-xs text-zinc-400 lg:block">
            <p className="text-[0.65rem] uppercase tracking-[0.35em] text-zinc-500">
              Live Preview
            </p>
            <p className="mt-2 text-sm text-zinc-300">
              Real-time holographic render harnessing multi-layered emissions and depth mapped volumetrics.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
