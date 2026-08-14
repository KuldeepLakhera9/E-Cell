import { SiInstagram, SiX, SiYoutube } from "@icons-pack/react-simple-icons";

interface IconProps {
  size?: number;
  className?: string;
}

export function LinkedinIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <title>LinkedIn</title>
      <circle cx="4.5" cy="4.75" r="2.25" />
      <rect x="2.5" y="9" width="4" height="12.5" />
      <path d="M10.25 9h3.9v1.9h.06c.55-1 1.9-2.1 3.9-2.1 4.15 0 4.9 2.6 4.9 6.05V21.5h-4.06v-6.1c0-1.45-.03-3.32-2.1-3.32-2.1 0-2.43 1.57-2.43 3.2v6.22h-4.07V9z" />
    </svg>
  );
}

export function InstagramIcon({ size = 16, className }: IconProps) {
  return <SiInstagram size={size} className={className} color="currentColor" />;
}

export function TwitterIcon({ size = 16, className }: IconProps) {
  return <SiX size={size} className={className} color="currentColor" />;
}

export function YoutubeIcon({ size = 16, className }: IconProps) {
  return <SiYoutube size={size} className={className} color="currentColor" />;
}
