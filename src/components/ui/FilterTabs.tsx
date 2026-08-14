"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FilterTabsProps<T extends string> {
  options: readonly T[];
  active: T;
  onChange: (value: T) => void;
  layoutId: string;
  counts?: Partial<Record<T, number>>;
}

export default function FilterTabs<T extends string>({
  options,
  active,
  onChange,
  layoutId,
  counts,
}: FilterTabsProps<T>) {
  return (
    <div className="glass inline-flex flex-wrap justify-center gap-1 rounded-full p-1.5">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={cn(
            "relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300",
            active === option ? "text-background" : "text-foreground-muted hover:text-foreground"
          )}
        >
          {active === option && (
            <motion.span
              layoutId={layoutId}
              className="absolute inset-0 rounded-full bg-accent-gradient"
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
          )}
          <span className="relative">
            {option}
            {counts?.[option] !== undefined && (
              <span className="ml-1.5 opacity-70">({counts[option]})</span>
            )}
          </span>
        </button>
      ))}
    </div>
  );
}
