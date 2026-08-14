"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import GalleryArt from "./GalleryArt";
import type { GalleryItem } from "@/data/gallery";

interface LightboxProps {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const [loading, setLoading] = useState(true);
  const isOpen = index !== null;
  const item = index !== null ? items[index] : null;

  useEffect(() => {
    if (index === null) return;
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 260);
    return () => clearTimeout(t);
  }, [index]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && index !== null) {
        onNavigate((index - 1 + items.length) % items.length);
      }
      if (e.key === "ArrowRight" && index !== null) {
        onNavigate((index + 1) % items.length);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, index, items.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {isOpen && item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-background/95 p-4 backdrop-blur-xl sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${item.title} — ${item.event}`}
          onClick={onClose}
        >
          <button
            onClick={onClose}
            aria-label="Close lightbox"
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-accent-deep/40 hover:text-accent-deep"
          >
            <X size={18} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index! - 1 + items.length) % items.length);
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-accent/40 hover:text-accent sm:left-6"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index! + 1) % items.length);
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-accent/40 hover:text-accent sm:right-6"
          >
            <ChevronRight size={20} />
          </button>

          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-border"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40 sm:aspect-video">
              {loading ? (
                <div className="absolute inset-0 animate-pulse bg-surface-hover" />
              ) : item.image ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 80vw"
                  className="object-contain"
                  priority
                />
              ) : (
                <GalleryArt seed={item.id} className="absolute inset-0" />
              )}
            </div>
            <div className="glass flex items-center justify-between gap-4 px-6 py-4">
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-foreground-muted">{item.event}</p>
              </div>
              <span className="whitespace-nowrap text-xs text-foreground-subtle">
                {index! + 1} / {items.length}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
