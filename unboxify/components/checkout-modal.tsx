"use client";

import { Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";
import Link from "next/link";

type CheckoutModalProps = {
  open: boolean;
  onClose: () => void;
  product: Product;
};

export function CheckoutModal({ open, onClose, product }: CheckoutModalProps) {
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[999]" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 sm:p-8">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="glass-panel relative w-full max-w-2xl rounded-3xl px-6 py-8 sm:px-10 sm:py-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <Dialog.Title className="text-2xl font-semibold text-white">
                        {product.title}
                      </Dialog.Title>
                      <p className="mt-2 text-sm text-zinc-400">
                        Secure checkout with verified delivery links. Files become available instantly after purchase.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-accent-primary/40 px-4 py-3 text-right text-sm text-white">
                      <p className="text-xs uppercase tracking-[0.35em] text-zinc-400">
                        Total
                      </p>
                      <p className="text-xl font-semibold">${product.price}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-accent-primary">
                      Secure Delivery Formats
                    </p>
                    <div className="mt-4 grid gap-4">
                      {product.formats.map((format) => (
                        <div
                          key={format.label}
                          className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-zinc-300"
                        >
                          <div>
                            <p className="font-medium text-white">{format.label}</p>
                            <p className="text-xs text-zinc-400">{format.fileSize}</p>
                          </div>
                          <Link
                            href={format.url}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full border border-accent-primary/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-accent-primary transition hover:border-accent-primary hover:text-white"
                          >
                            Preview File
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    type="button"
                    className="button-glow flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#6f7dff] to-[#8d5bff] px-8 py-4 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:opacity-90"
                    whileTap={{ scale: 0.98 }}
                    onClick={onClose}
                  >
                    Complete Secure Checkout
                  </motion.button>

                  <p className="text-center text-[0.7rem] text-zinc-500">
                    By completing your purchase, encrypted download links will be delivered instantly and stored in your Unboxify Vault for 48 hours with checksum validation.
                  </p>
                </motion.div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
