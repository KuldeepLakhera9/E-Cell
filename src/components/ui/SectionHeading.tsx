import { cn } from "@/lib/utils";
import RevealOnScroll from "./RevealOnScroll";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <RevealOnScroll direction="fade">
        <span
          className={cn(
            "inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-accent",
            align === "center" ? "justify-center" : "justify-start"
          )}
        >
          <span className="h-px w-6 bg-accent/50" />
          {eyebrow}
        </span>
      </RevealOnScroll>
      <RevealOnScroll direction="up" delay={0.1}>
        <h2 className="text-balance font-display text-display-md font-semibold text-foreground">
          {title}
        </h2>
      </RevealOnScroll>
      {description && (
        <RevealOnScroll direction="up" delay={0.2}>
          <p
            className={cn(
              "text-balance text-lg text-foreground-muted",
              align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
            )}
          >
            {description}
          </p>
        </RevealOnScroll>
      )}
    </div>
  );
}
