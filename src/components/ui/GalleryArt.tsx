import { getGradientHues, hashString } from "@/lib/gradient";
import { cn } from "@/lib/utils";

interface GalleryArtProps {
  seed: string;
  className?: string;
}

export default function GalleryArt({ seed, className }: GalleryArtProps) {
  const { hue1, hue2 } = getGradientHues(seed);
  const hash = hashString(seed);
  const blobX = 20 + (hash % 60);
  const blobY = 15 + ((hash >> 3) % 60);
  const blob2X = 100 - blobX;
  const blob2Y = 100 - blobY;

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ background: `linear-gradient(135deg, hsl(${hue1} 35% 9%), hsl(${hue2} 30% 6%))` }}
    >
      <div
        className="absolute h-2/3 w-2/3 rounded-full opacity-50 blur-3xl"
        style={{
          left: `${blobX}%`,
          top: `${blobY}%`,
          transform: "translate(-50%, -50%)",
          background: `hsl(${hue1} 75% 45%)`,
        }}
      />
      <div
        className="absolute h-1/2 w-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          left: `${blob2X}%`,
          top: `${blob2Y}%`,
          transform: "translate(-50%, -50%)",
          background: `hsl(${hue2} 75% 50%)`,
        }}
      />
      <div className="absolute inset-0 bg-noise opacity-[0.07]" />
    </div>
  );
}
