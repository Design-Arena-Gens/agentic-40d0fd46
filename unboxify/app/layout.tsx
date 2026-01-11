import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageTransition } from "@/components/page-transition";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-unboxify-display",
});

const sansFont = Manrope({
  subsets: ["latin"],
  variable: "--font-unboxify-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-40d0fd46.vercel.app"),
  title: {
    default: "Unboxify — Digital Art in 3D",
    template: "%s · Unboxify",
  },
  description:
    "Unboxify is a premium e-commerce gallery showcasing DDD (3D Digital Design) artwork with instant secure delivery across PNG, JPG, MP4, and 3D formats.",
  keywords: [
    "Unboxify",
    "3D digital art",
    "DDD",
    "digital art marketplace",
    "futuristic art",
    "digital downloads",
  ],
  openGraph: {
    title: "Unboxify — Digital Art in 3D",
    description:
      "Experience a premium catalog of DDD artworks. Download instantly in multiple formats with secure licensing.",
    url: "https://agentic-40d0fd46.vercel.app",
    siteName: "Unboxify",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 900,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unboxify — Digital Art in 3D",
    description:
      "Explore premium 3D digital design, crafted for visionary brands and creators. Secure, instant downloads.",
    images: [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${displayFont.variable} ${sansFont.variable} bg-transparent text-foreground antialiased`}
      >
        <div className="relative flex min-h-screen flex-col overflow-hidden">
          <SiteHeader />
          <PageTransition>{children}</PageTransition>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
