"use client";

import { Compass, HandCoins, Network, Presentation, Sparkles, Target } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import RevealOnScroll, { StaggerGroup, StaggerItem } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils";

const PILLARS = [
  {
    icon: Compass,
    title: "Mentorship",
    description:
      "1:1 guidance from founders and industry experts who've built and scaled real ventures.",
  },
  {
    icon: Presentation,
    title: "Workshops",
    description:
      "Hands-on sessions on ideation, validation, pitching, and growth — no theory-only fluff.",
  },
  {
    icon: Network,
    title: "Networking",
    description:
      "Direct access to alumni founders, investors, and a campus-wide community of builders.",
  },
  {
    icon: HandCoins,
    title: "Funding Guidance",
    description:
      "Structured support on grants, incubation pathways, and investor-ready pitch decks.",
  },
];

const MILESTONES = [
  {
    year: "2024",
    title: "E-Cell VPKBIET Founded",
    description:
      "Our journey began with a small group of students determined to build a culture of entrepreneurship on campus.",
  },
  {
    year: "2025",
    title: "EUREKA 2K25",
    description:
      "Our flagship event EUREKA made its debut, bringing ideation, mentorship, and competition to students across VPKBIET.",
  },
  {
    year: "2025",
    title: "24-Hour Hackathon",
    description:
      "A full day-and-night hackathon challenged teams to design, build, and pitch a working prototype in 24 hours.",
  },
  {
    year: "2025",
    title: "Many More Events",
    description:
      "Alongside our flagship events, we ran a growing calendar of workshops, speaker sessions, and networking meetups through the year.",
  },
  {
    year: "2026",
    title: "EUREKA 2K26",
    description:
      "Our flagship event returns bigger than before — happening now, marking the next chapter for E-Cell VPKBIET.",
    current: true,
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-mesh-gradient opacity-60" />
      <div className="absolute inset-0 bg-noise opacity-[0.05]" />

      <div className="relative mx-auto max-w-8xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="About Us"
          title="Turning Ambition Into Enterprise"
          description="E-Cell VPKBIET exists to close the gap between a student with an idea and a founder with a company. We do it through mentorship, capital access, and a community that pushes you to ship."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <RevealOnScroll direction="left">
            <div className="glass glass-hover h-full rounded-2xl p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gradient">
                <Target size={22} className="text-background" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground">Our Mission</h3>
              <p className="mt-3 text-foreground-muted">
                To identify, nurture, and launch student entrepreneurs by giving them the
                mentorship, resources, and network that founders usually only find after
                graduation — starting on day one of college instead.
              </p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll direction="right">
            <div className="glass glass-hover h-full rounded-2xl p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gradient">
                <Sparkles size={22} className="text-background" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground">Our Vision</h3>
              <p className="mt-3 text-foreground-muted">
                To make VPKBIET synonymous with student entrepreneurship in Maharashtra — a
                campus where building a startup is as normal a career path as taking a job
                offer.
              </p>
            </div>
          </RevealOnScroll>
        </div>

        <div className="mt-24">
          <RevealOnScroll direction="up">
            <h3 className="text-center font-display text-2xl font-semibold text-foreground sm:text-3xl">
              What We Do
            </h3>
          </RevealOnScroll>
          <StaggerGroup className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((pillar) => (
              <StaggerItem key={pillar.title}>
                <GlowCard className="h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-accent-cyan transition-colors duration-300 group-hover:border-accent-violet/40 group-hover:text-accent-violet">
                    <pillar.icon size={20} />
                  </div>
                  <h4 className="mt-5 font-display text-lg font-semibold text-foreground">
                    {pillar.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                    {pillar.description}
                  </p>
                </GlowCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <div className="mt-28">
          <RevealOnScroll direction="up">
            <h3 className="text-center font-display text-2xl font-semibold text-foreground sm:text-3xl">
              Our Journey
            </h3>
          </RevealOnScroll>

          <div className="relative mt-16">
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-accent-cyan/60 via-accent-violet/60 to-transparent sm:left-1/2 sm:-translate-x-1/2" />
            <div className="flex flex-col gap-10 sm:gap-4">
              {MILESTONES.map((milestone, i) => {
                const isEven = i % 2 === 0;
                return (
                  <div
                    key={milestone.title}
                    className="relative grid grid-cols-1 items-center gap-4 sm:grid-cols-2 sm:gap-10"
                  >
                    <div className="absolute left-4 top-1.5 -translate-x-1/2 sm:left-1/2">
                      {milestone.current && (
                        <span className="absolute inset-0 h-3 w-3 animate-ping rounded-full bg-accent-cyan/60" />
                      )}
                      <span className="relative block h-3 w-3 rounded-full bg-accent-gradient shadow-glow-sm" />
                    </div>
                    <RevealOnScroll
                      direction={isEven ? "left" : "right"}
                      className={cn(
                        "pl-12 sm:pl-0",
                        isEven ? "sm:col-start-1 sm:pr-14 sm:text-right" : "sm:col-start-2 sm:pl-14"
                      )}
                    >
                      <div
                        className={cn(
                          "glass glass-hover inline-block rounded-2xl px-6 py-5 text-left",
                          milestone.current && "border-accent-cyan/40"
                        )}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-gradient font-display text-sm font-bold tracking-wider">
                            {milestone.year}
                          </span>
                          {milestone.current && (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-cyan/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent-cyan">
                              <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
                              Happening Now
                            </span>
                          )}
                        </div>
                        <h4 className="mt-1 font-display text-lg font-semibold text-foreground">
                          {milestone.title}
                        </h4>
                        <p className="mt-1.5 text-sm text-foreground-muted">
                          {milestone.description}
                        </p>
                      </div>
                    </RevealOnScroll>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
