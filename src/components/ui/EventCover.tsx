import { Lightbulb, Mic2, Rocket, TrendingUp, Trophy, Users, Zap } from "lucide-react";
import type { EventIcon } from "@/data/events";
import { cn } from "@/lib/utils";
import { getGradientHues } from "@/lib/gradient";

const ICONS: Record<EventIcon, typeof Rocket> = {
  rocket: Rocket,
  mic: Mic2,
  lightbulb: Lightbulb,
  users: Users,
  trending: TrendingUp,
  trophy: Trophy,
  sprint: Zap,
};

interface EventCoverProps {
  title: string;
  icon: EventIcon;
  className?: string;
  iconSize?: number;
}

export default function EventCover({ title, icon, className, iconSize = 32 }: EventCoverProps) {
  const { hue1, hue2 } = getGradientHues(title);
  const Icon = ICONS[icon];

  return (
    <div
      className={cn("relative flex items-center justify-center overflow-hidden", className)}
      style={{
        background: `radial-gradient(circle at 25% 25%, hsl(${hue1} 70% 20%) 0%, hsl(${hue2} 60% 12%) 60%, #05060a 100%)`,
      }}
    >
      <div className="absolute inset-0 grid-texture opacity-30" />
      <div className="absolute inset-0 bg-noise opacity-[0.08]" />
      <div
        className="pointer-events-none absolute -inset-8 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(${hue2} 80% 55%) 0%, transparent 65%)`,
        }}
      />
      <Icon
        size={iconSize}
        strokeWidth={1.5}
        className="relative drop-shadow-glow"
        style={{ color: `hsl(${hue1} 85% 72%)` }}
      />
    </div>
  );
}
