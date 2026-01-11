import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Unboxify's privacy commitments for customer data, payment security, and file delivery.",
};

export default function PrivacyPage() {
  return (
    <div className="px-4 pb-24 pt-36 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-10 rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-zinc-400">
        <h1 className="text-3xl font-semibold text-white">Privacy Policy</h1>
        <p>
          Unboxify respects your privacy and treats data security as a core part of our premium experience. We collect only
          the information required to process payments, deliver digital files, and communicate with you about your purchases.
        </p>
        <div>
          <h2 className="text-xl font-semibold text-white">Data Collection</h2>
          <p className="mt-3">
            We store contact information, billing details, and download history in encrypted environments. We never sell or
            rent personal information and limit retention to the lifecycle of your projects.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white">Payment Security</h2>
          <p className="mt-3">
            Payments are processed through PCI-compliant providers. Unboxify does not handle raw credit card data, and all
            transactions are tokenized for your protection.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white">File Delivery</h2>
          <p className="mt-3">
            Download links are encrypted, expire after 48 hours by default, and can be regenerated via the support desk.
            Access logs are maintained for audit purposes and to help our clients comply with licensing terms.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white">Contact</h2>
          <p className="mt-3">
            To exercise your privacy rights or request data deletion, email{" "}
            <a href="mailto:privacy@unboxify.art" className="text-accent-primary">
              privacy@unboxify.art
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
