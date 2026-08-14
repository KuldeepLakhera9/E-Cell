import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const navbarOffset = 88;
  const top = el.getBoundingClientRect().top + window.scrollY - navbarOffset;
  window.scrollTo({ top, behavior: "smooth" });
}

export const SITE = {
  name: "E-Cell VPKBIET",
  fullName: "Entrepreneurship Cell, VPKBIET",
  college: "Vidya Pratisthan Kamalnayan Bajaj Institute of Engineering and Technology",
  collegeShort: "VPKBIET",
  tagline: "Where Ideas Become Ventures",
  description:
    "The Entrepreneurship Cell of VPKBIET builds India's next generation of founders through mentorship, workshops, funding guidance, and a community obsessed with building.",
  email: "ecell@vpkbiet.org",
  location: "VPKBIET Campus, Baramati, Maharashtra, India",
  social: {
    instagram: "https://instagram.com/ecell.vpkbiet",
    linkedin: "https://linkedin.com/company/ecell-vpkbiet",
    twitter: "https://twitter.com/ecell_vpkbiet",
    youtube: "https://youtube.com/@ecellvpkbiet",
  },
};
