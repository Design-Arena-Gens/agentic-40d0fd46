import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with the Unboxify team for support, collaborations, and bespoke 3D digital art commissions.",
};

export default function ContactPage() {
  return (
    <div className="px-4 pb-24 pt-36 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-16">
        <SectionHeading
          eyebrow="Contact & Support"
          title="Speak with the Unboxify studio."
          description="Whether you need licensing support, bespoke collaborations, or technical assistance, our team responds within 24 hours."
          align="left"
        />

        <div className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <form className="space-y-6 text-sm text-zinc-300">
            <div>
              <label htmlFor="name" className="text-xs uppercase tracking-[0.35em] text-zinc-400">
                Name
              </label>
              <input
                id="name"
                name="name"
                placeholder="Your full name"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/40"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs uppercase tracking-[0.35em] text-zinc-400">
                Email
              </label>
              <input
                id="email"
                name="email"
                placeholder="you@studio.com"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/40"
                type="email"
              />
            </div>
            <div>
              <label htmlFor="topic" className="text-xs uppercase tracking-[0.35em] text-zinc-400">
                Topic
              </label>
              <select
                id="topic"
                name="topic"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/40"
              >
                <option>Licensing</option>
                <option>Custom Commission</option>
                <option>Technical Support</option>
                <option>Partnership</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="text-xs uppercase tracking-[0.35em] text-zinc-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Share details about your project or request..."
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/40"
              />
            </div>
            <button
              type="submit"
              className="button-glow inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#6f7dff] to-[#8d5bff] px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:opacity-90"
            >
              Send Message
            </button>
            <p className="text-xs text-zinc-500">
              We use encrypted correspondence and respond within 24 hours. Attachments and project decks can be sent to{" "}
              <a href="mailto:hello@unboxify.art" className="text-accent-primary">
                hello@unboxify.art
              </a>
              .
            </p>
          </form>

          <div className="space-y-8 text-sm text-zinc-400">
            <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
              <h3 className="text-lg font-semibold text-white">Support Hub</h3>
              <p className="mt-3">
                View purchase history, download receipts, and manage vault access from your dashboard.
              </p>
              <a
                id="support"
                href="#"
                className="mt-5 inline-flex items-center justify-center rounded-full border border-accent-primary/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-accent-primary transition hover:border-accent-primary hover:text-white"
              >
                Visit Support
              </a>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
              <h3 className="text-lg font-semibold text-white">Studio Hours</h3>
              <p className="mt-3">Weekdays 9AM – 7PM GMT</p>
              <p>Virtual consultations scheduled upon request.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
              <h3 className="text-lg font-semibold text-white">Locations</h3>
              <p className="mt-3">Remote-first global studio with nodes in Berlin, Los Angeles, and Singapore.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
