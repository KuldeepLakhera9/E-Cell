"use client";

import { useState } from "react";
import { Maximize2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GalleryArt from "@/components/ui/GalleryArt";
import Lightbox from "@/components/ui/Lightbox";
import { StaggerGroup, StaggerItem } from "@/components/ui/RevealOnScroll";
import { GALLERY, type GallerySize } from "@/data/gallery";

const SIZE_CLASSES: Record<GallerySize, string> = {
  large: "sm:col-span-2 sm:row-span-2",
  tall: "sm:col-span-1 sm:row-span-2",
  wide: "sm:col-span-2 sm:row-span-1",
  normal: "sm:col-span-1 sm:row-span-1",
};

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-noise opacity-[0.05]" />
      <div className="relative mx-auto max-w-8xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments From the Movement"
          description="A look inside our summits, sprints, and late-night build sessions — captured one event at a time."
        />

        <StaggerGroup
          staggerDelay={0.06}
          className="mt-14 grid grid-cols-2 gap-4 sm:auto-rows-[160px] sm:grid-cols-4"
        >
          {GALLERY.map((item, i) => (
            <StaggerItem
              key={item.id}
              direction="scale"
              className={`aspect-square sm:aspect-auto ${SIZE_CLASSES[item.size]}`}
            >
              <button
                onClick={() => setActiveIndex(i)}
                data-cursor-hover
                aria-label={`Open photo: ${item.title}`}
                className="group relative block h-full w-full overflow-hidden rounded-2xl border border-border"
              >
                <div className="absolute inset-0 transition-transform duration-700 ease-out-expo group-hover:scale-110">
                  <GalleryArt seed={item.id} className="h-full w-full" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
                <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-background/60 text-foreground opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                  <Maximize2 size={14} />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                  <p className="font-display text-sm font-semibold text-foreground sm:text-base">
                    {item.title}
                  </p>
                  <p className="text-xs text-foreground-muted">{item.event}</p>
                </div>
              </button>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      <Lightbox
        items={GALLERY}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  );
}
