"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Users } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import StatCounter from "@/components/ui/StatCounter";
import { scrollToSection } from "@/lib/utils";

const ParticleField = dynamic(() => import("@/components/three/ParticleField"), {
  ssr: false,
});

const HEADLINE_LINE_1 = "Where Ideas".split(" ");
const HEADLINE_LINE_2 = "Become Ventures".split(" ");

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const word = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const STATS = [
  { value: 50, suffix: "+", label: "Startups Mentored" },
  { value: 200, suffix: "+", label: "Active Members" },
  { value: 10, suffix: "+", label: "Flagship Events" },
  { value: 75, prefix: "₹", suffix: "L+", label: "Funding Facilitated" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-mesh-gradient pt-24"
    >
      <div className="absolute inset-0 grid-texture mask-fade-bottom opacity-60" />
      <div className="absolute inset-0 bg-noise opacity-[0.06]" />
      <div className="absolute inset-0 -z-0">
        <ParticleField />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative z-10 mx-auto flex w-full max-w-8xl flex-col items-center px-6 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-foreground-muted backdrop-blur-md"
        >
          <Users size={14} className="text-accent-cyan" />
          Official Entrepreneurship Cell of VPKBIET
        </motion.div>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className="font-display text-display-xl font-semibold text-foreground"
        >
          <span className="flex flex-wrap justify-center gap-x-4">
            {HEADLINE_LINE_1.map((w) => (
              <motion.span key={w} variants={word} className="inline-block">
                {w}
              </motion.span>
            ))}
          </span>
          <span className="flex flex-wrap justify-center gap-x-4">
            {HEADLINE_LINE_2.map((w) => (
              <motion.span key={w} variants={word} className="text-gradient inline-block">
                {w}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-8 max-w-2xl text-balance text-lg text-foreground-muted sm:text-xl"
        >
          E-Cell VPKBIET builds Baramati&rsquo;s next generation of founders through mentorship,
          workshops, funding guidance, and a community obsessed with building.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <MagneticButton onClick={() => scrollToSection("events")}>
            Explore Events
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </MagneticButton>
          <MagneticButton variant="ghost" onClick={() => scrollToSection("team")}>
            Meet the Team
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="mt-20 grid w-full max-w-3xl grid-cols-2 gap-y-10 sm:grid-cols-4 sm:gap-y-0"
        >
          {STATS.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollToSection("about")}
        aria-label="Scroll to About section"
        data-cursor-hover
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-foreground-subtle transition-colors hover:text-foreground"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.span>
      </motion.button>
    </section>
  );
}
