"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FilterTabs from "@/components/ui/FilterTabs";
import EventCover from "@/components/ui/EventCover";
import MagneticButton from "@/components/ui/MagneticButton";
import { EVENTS, type EventStatus } from "@/data/events";

const FILTERS = ["Upcoming", "Past"] as const;

export default function Events() {
  const [activeFilter, setActiveFilter] = useState<(typeof FILTERS)[number]>("Upcoming");
  const status: EventStatus = activeFilter === "Upcoming" ? "upcoming" : "past";

  const events = useMemo(() => EVENTS.filter((e) => e.status === status), [status]);
  const featured = events.find((e) => e.featured);
  const rest = events.filter((e) => !e.featured);

  const counts = {
    Upcoming: EVENTS.filter((e) => e.status === "upcoming").length,
    Past: EVENTS.filter((e) => e.status === "past").length,
  };

  return (
    <section id="events" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-mesh-gradient opacity-50" />
      <div className="relative mx-auto max-w-8xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Events"
          title="Where Ideas Get Tested"
          description="From late-night ideathons to investor pitch rooms — our events are built for students who'd rather build than just listen."
        />

        <div className="mt-12 flex justify-center">
          <FilterTabs
            options={FILTERS}
            active={activeFilter}
            onChange={setActiveFilter}
            layoutId="events-filter-pill"
            counts={counts}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-14"
          >
            {featured && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="glass glass-hover group mb-6 grid overflow-hidden rounded-3xl sm:grid-cols-2"
              >
                <EventCover
                  title={featured.title}
                  icon={featured.icon}
                  iconSize={56}
                  className="min-h-[280px] transition-transform duration-700 ease-out-expo group-hover:scale-105 sm:min-h-full"
                />
                <div className="flex flex-col justify-center p-8 sm:p-10">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-flex items-center rounded-full bg-accent-gradient px-3 py-1 text-xs font-bold uppercase tracking-wider text-background">
                      Flagship Event
                    </span>
                    <span className="text-sm font-semibold text-foreground-subtle">
                      {featured.month} {featured.day}, {featured.year}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
                    {featured.title}
                  </h3>
                  <p className="mt-4 text-foreground-muted">{featured.description}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-sm text-foreground-subtle">
                    <MapPin size={14} />
                    {featured.location}
                  </div>
                  <div className="mt-8">
                    <MagneticButton>
                      {status === "upcoming" ? "Register Now" : "View Details"}
                      <ArrowRight size={16} />
                    </MagneticButton>
                  </div>
                </div>
              </motion.div>
            )}

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((event, i) => (
                <motion.div
                  key={event.slug}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="glass glass-hover group flex flex-col overflow-hidden rounded-2xl"
                >
                  <div className="relative">
                    <EventCover
                      title={event.title}
                      icon={event.icon}
                      className="h-44 transition-transform duration-700 ease-out-expo group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 flex flex-col items-center rounded-xl border border-border bg-background/80 px-3 py-1.5 backdrop-blur-md">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-accent-cyan">
                        {event.month}
                      </span>
                      <span className="font-display text-lg font-bold leading-none text-foreground">
                        {event.day}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {event.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground-muted">
                      {event.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-xs text-foreground-subtle">
                      <MapPin size={12} />
                      {event.location}
                    </div>
                    <button
                      data-cursor-hover
                      className="group/btn mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-accent-cyan transition-colors hover:text-accent-violet"
                    >
                      {status === "upcoming" ? "Register" : "View Details"}
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover/btn:translate-x-1"
                      />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
