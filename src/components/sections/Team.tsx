"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/SocialIcons";
import SectionHeading from "@/components/ui/SectionHeading";
import Avatar from "@/components/ui/Avatar";
import FilterTabs from "@/components/ui/FilterTabs";
import { TEAM, type TeamCategory } from "@/data/team";

export default function Team() {
  const availableFilters = useMemo(() => {
    const categories = Array.from(new Set(TEAM.map((m) => m.category)));
    if (categories.length <= 1) return [] as string[];
    return ["All", ...categories];
  }, []);

  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredTeam = useMemo(
    () => (activeFilter === "All" ? TEAM : TEAM.filter((m) => m.category === activeFilter)),
    [activeFilter]
  );

  return (
    <section id="team" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-noise opacity-[0.05]" />
      <div className="relative mx-auto max-w-8xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Our Team"
          title="The People Behind the Movement"
          description="A student-run team of builders, organizers, and connectors driving E-Cell VPKBIET forward."
        />

        {availableFilters.length > 1 && (
          <div className="mt-12 flex justify-center">
            <FilterTabs
              options={availableFilters}
              active={activeFilter}
              onChange={setActiveFilter}
              layoutId="team-filter-pill"
            />
          </div>
        )}

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredTeam.map((member, i) => (
              <motion.div
                key={member.name}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="glass glass-hover group overflow-hidden rounded-2xl p-3"
              >
                <Avatar name={member.name} photo={member.photo} />
                <div className="px-1.5 pb-1 pt-4">
                  <h3 className="font-display text-base font-semibold text-foreground sm:text-lg">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-foreground-muted">{member.role}</p>
                  <div className="mt-3 flex items-center gap-3">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on LinkedIn`}
                        className="text-foreground-subtle transition-colors duration-300 hover:text-accent"
                      >
                        <LinkedinIcon size={16} />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on GitHub`}
                        className="text-foreground-subtle transition-colors duration-300 hover:text-foreground"
                      >
                        <GithubIcon size={16} />
                      </a>
                    )}
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on Instagram`}
                        className="text-foreground-subtle transition-colors duration-300 hover:text-accent-deep"
                      >
                        <InstagramIcon size={16} />
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on Twitter`}
                        className="text-foreground-subtle transition-colors duration-300 hover:text-accent-deep"
                      >
                        <TwitterIcon size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
