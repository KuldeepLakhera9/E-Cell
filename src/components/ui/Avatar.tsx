"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { getGradientHues } from "@/lib/gradient";

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase();
}

interface AvatarProps {
  name: string;
  photo?: string;
  className?: string;
  rounded?: "full" | "2xl";
}

export default function Avatar({ name, photo, className, rounded = "2xl" }: AvatarProps) {
  const { hue1, hue2 } = getGradientHues(name);
  const roundedClass = rounded === "full" ? "rounded-full" : "rounded-2xl";
  const [imageFailed, setImageFailed] = useState(false);

  if (photo && !imageFailed) {
    return (
      <div
        className={cn(
          "relative aspect-square w-full overflow-hidden",
          roundedClass,
          className
        )}
      >
        <Image
          src={photo}
          alt={name}
          fill
          sizes="(max-width: 640px) 50vw, 25vw"
          className="object-cover"
          onError={() => setImageFailed(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex aspect-square w-full items-center justify-center overflow-hidden",
        roundedClass,
        className
      )}
      style={{
        background: `linear-gradient(135deg, hsl(${hue1} 75% 22%) 0%, hsl(${hue2} 65% 16%) 100%)`,
      }}
    >
      <div
        className="absolute inset-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.5), transparent 45%)",
        }}
      />
      <div className="absolute inset-0 bg-noise opacity-[0.08]" />
      <span
        className="relative font-display text-3xl font-bold tracking-wide sm:text-4xl"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(${hue1} 90% 72%), hsl(${hue2} 90% 76%))`,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        {getInitials(name)}
      </span>
    </div>
  );
}
