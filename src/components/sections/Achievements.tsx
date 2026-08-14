"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import LogoMarquee from "@/components/ui/LogoMarquee";
import Avatar from "@/components/ui/Avatar";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { STARTUP_LOGOS, PRESS_MENTIONS } from "@/data/logos";
import { TESTIMONIALS } from "@/data/testimonials";

export default function Achievements() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(t);
  }, [paused]);

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const active = TESTIMONIALS[index];

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-mesh-gradient opacity-40" />
      <div className="relative mx-auto max-w-8xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Impact"
          title="Proof, Not Promises"
          description="Startups we've helped launch, the press that noticed, and founders who'll say it better than we can."
        />

        <div className="mt-16 space-y-8">
          <RevealOnScroll direction="fade">
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-foreground-subtle">
              Startups Incubated
            </p>
            <LogoMarquee items={STARTUP_LOGOS} />
          </RevealOnScroll>
          <RevealOnScroll direction="fade" delay={0.1}>
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-foreground-subtle">
              As Featured In
            </p>
            <LogoMarquee items={PRESS_MENTIONS} reverse muted />
          </RevealOnScroll>
        </div>

        <RevealOnScroll direction="up" className="mt-24">
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="glass relative mx-auto max-w-3xl overflow-hidden rounded-3xl p-8 sm:p-12"
          >
            <Quote className="absolute right-8 top-8 text-accent-violet/20" size={64} strokeWidth={1.5} />

            <div className="relative min-h-[220px] sm:min-h-[180px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={index}
                  custom={direction}
                  initial={{ opacity: 0, x: 24 * direction }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 * direction }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="text-balance font-display text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
                    &ldquo;{active.quote}&rdquo;
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <Avatar name={active.name} className="h-12 w-12" rounded="full" />
                    <div>
                      <p className="font-semibold text-foreground">{active.name}</p>
                      <p className="text-sm text-foreground-muted">{active.role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative mt-8 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((t, i) => (
                  <button
                    key={t.name}
                    onClick={() => {
                      setDirection(i > index ? 1 : -1);
                      setIndex(i);
                    }}
                    aria-label={`Go to testimonial ${i + 1}`}
                    data-cursor-hover
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === index ? "w-6 bg-accent-gradient" : "w-1.5 bg-border hover:bg-border-hover"
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => go(-1)}
                  aria-label="Previous testimonial"
                  data-cursor-hover
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground-muted transition-colors hover:border-accent-cyan/40 hover:text-accent-cyan"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => go(1)}
                  aria-label="Next testimonial"
                  data-cursor-hover
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground-muted transition-colors hover:border-accent-cyan/40 hover:text-accent-cyan"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
