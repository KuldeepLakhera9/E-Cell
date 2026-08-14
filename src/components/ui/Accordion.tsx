"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { FaqItem } from "@/data/faq";
import { cn } from "@/lib/utils";

export default function Accordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.question}
            className={cn(
              "glass overflow-hidden rounded-2xl transition-colors duration-300",
              isOpen && "border-accent-violet/30"
            )}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              data-cursor-hover
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span
                className={cn(
                  "font-display text-base font-semibold transition-colors duration-300 sm:text-lg",
                  isOpen ? "text-foreground" : "text-foreground-muted"
                )}
              >
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border",
                  isOpen ? "bg-accent-gradient text-background" : "text-foreground-muted"
                )}
              >
                <Plus size={16} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-foreground-muted">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
