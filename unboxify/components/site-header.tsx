"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={clsx(
          "glass-panel relative mt-5 flex w-full max-w-6xl items-center justify-between rounded-full px-6 py-4 transition-all duration-500",
          scrolled && "mt-3 border-opacity-40 bg-opacity-80 backdrop-blur-xl"
        )}
      >
        <Link href="/" className="flex items-center gap-2">
          <span className="text-sm uppercase tracking-[0.5rem] text-gradient">
            Unboxify
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "relative font-medium uppercase tracking-[0.3em] text-xs text-zinc-200 transition",
                  "hover:text-white"
                )}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="navActive"
                    className="absolute -bottom-3 left-1/2 h-px w-12 -translate-x-1/2 bg-gradient-to-r from-accent-primary/0 via-accent-primary to-accent-secondary"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/shop"
            className="hidden rounded-full border border-accent-primary/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent-primary transition hover:border-accent-primary hover:text-white md:flex"
          >
            Explore
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-white transition hover:border-accent-primary hover:text-accent-primary md:hidden"
          >
            <span className="relative flex h-3 w-4 flex-col justify-between">
              <span
                className={clsx(
                  "h-0.5 w-full rounded-full bg-current transition",
                  isMenuOpen && "translate-y-1.5 rotate-45"
                )}
              />
              <span
                className={clsx(
                  "h-0.5 w-full rounded-full bg-current transition",
                  isMenuOpen && "-rotate-45"
                )}
              />
            </span>
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="glass-panel absolute top-24 w-full max-w-6xl rounded-3xl px-6 py-6 md:hidden"
          >
            <div className="flex flex-col gap-4 text-sm uppercase tracking-[0.4em] text-zinc-300">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl border border-transparent px-4 py-3 transition hover:border-accent-primary/40 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
