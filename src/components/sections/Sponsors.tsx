"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/RevealOnScroll";
import { SPONSORS } from "@/data/sponsors";
import { cn } from "@/lib/utils";

export default function Sponsors() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-noise opacity-[0.05]" />
      <div className="relative mx-auto max-w-8xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Sponsors & Partners"
          title="Backed By Builders"
          description="The companies and platforms that fuel our events, mentorship programs, and startup grants."
        />

        <StaggerGroup
          staggerDelay={0.05}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {SPONSORS.map((sponsor) => (
            <StaggerItem key={sponsor.name} direction="scale">
              <div
                className={cn(
                  "group flex h-32 flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-surface px-6 text-center transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-accent-deep/40 hover:shadow-glow"
                )}
              >
                <span className="font-display text-lg font-bold text-foreground-subtle transition-all duration-300 group-hover:bg-accent-gradient group-hover:bg-clip-text group-hover:text-transparent sm:text-xl">
                  {sponsor.name}
                </span>
                <span className="text-[10px] font-medium uppercase tracking-wider text-foreground-subtle/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {sponsor.tier}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
