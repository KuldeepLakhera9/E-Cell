import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface">
        <svg width="18" height="18" viewBox="0 0 64 64" fill="none">
          <defs>
            <linearGradient id="logo-g" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#E08A63" />
              <stop offset="1" stopColor="#9C4A2F" />
            </linearGradient>
          </defs>
          <path
            d="M20 44V20h20M20 32h14M20 44l16-16"
            stroke="url(#logo-g)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="font-display text-lg font-semibold leading-none tracking-tight text-foreground">
        E-Cell
        <span className="text-gradient"> VPKBIET</span>
      </span>
    </span>
  );
}
