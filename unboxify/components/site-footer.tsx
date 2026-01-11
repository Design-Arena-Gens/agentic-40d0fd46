import Link from "next/link";

const footerLinks = [
  {
    title: "Collections",
    links: [
      { label: "Immersive Worlds", href: "/shop?category=Immersive%20Worlds" },
      { label: "Futuristic Portraits", href: "/shop?category=Futuristic%20Portraits" },
      { label: "Architectural Dreams", href: "/shop?category=Architectural%20Dreams" },
      { label: "Organic Abstractions", href: "/shop?category=Organic%20Abstractions" },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Support", href: "/contact#support" },
      { label: "Licensing", href: "/about#licensing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Download Center", href: "/shop" },
      { label: "File Delivery", href: "/about#delivery" },
      { label: "Press Kit", href: "/about#press" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative isolate mt-24 px-4 pb-12 pt-16 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 blur-3xl">
        <div className="glow-gradient absolute right-0 top-0 h-72 w-72 opacity-30" />
        <div className="glow-gradient absolute bottom-0 left-0 h-60 w-60 opacity-20" />
      </div>
      <div className="glass-panel mx-auto max-w-6xl rounded-3xl px-8 py-10 shadow-2xl shadow-black/40">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <span className="text-xs uppercase tracking-[0.5em] text-gradient">
              Unboxify
            </span>
            <p className="mt-4 max-w-xs text-sm text-zinc-400">
              Unboxify curates avant-garde DDD artworks with instant, secure delivery for visionary brands, creators, and collectors.
            </p>
          </div>
          {footerLinks.map((column) => (
            <div key={column.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-zinc-300">
                {column.title}
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-400">
                {column.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Unboxify Studio. Crafted for digital dreamers.</p>
          <div className="flex gap-5">
            <Link href="/contact#support" className="transition hover:text-white">
              Support
            </Link>
            <Link href="/about#licensing" className="transition hover:text-white">
              Licensing
            </Link>
            <Link href="/privacy" className="transition hover:text-white">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
