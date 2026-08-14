import { cn } from "@/lib/utils";

interface LogoMarqueeProps {
  items: string[];
  reverse?: boolean;
  muted?: boolean;
}

export default function LogoMarquee({ items, reverse = false, muted = false }: LogoMarqueeProps) {
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-32" />
      <div
        className={cn(
          "flex w-max items-center gap-10 sm:gap-16",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
      >
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={cn(
              "shrink-0 whitespace-nowrap font-display font-semibold tracking-tight",
              muted
                ? "text-base text-foreground-subtle sm:text-lg"
                : "text-xl text-foreground-muted transition-colors duration-300 hover:text-foreground sm:text-2xl"
            )}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
