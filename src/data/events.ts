export type EventStatus = "upcoming" | "past";
export type EventIcon = "rocket" | "mic" | "lightbulb" | "users" | "trending" | "trophy" | "sprint";

export interface EventItem {
  slug: string;
  title: string;
  status: EventStatus;
  featured?: boolean;
  month: string;
  day: string;
  year: string;
  time?: string;
  description: string;
  location: string;
  icon: EventIcon;
  registerUrl?: string;
}

export const EVENTS: EventItem[] = [
  {
    slug: "eureka-2k26",
    title: "EUREKA 2K26",
    status: "upcoming",
    featured: true,
    month: "AUG",
    day: "24",
    year: "2026",
    time: "9:00 AM onwards",
    description:
      "Our flagship innovation summit returns — a day of talks, workshops, and competitions bringing together students, mentors, and founders under one roof.",
    location: "Seminar Hall, VP SPCOEAI",
    icon: "rocket",
    registerUrl: "https://forms.gle/GdHV8QyhifBtvsDr5",
  },
  {
    slug: "pitch-perfect-6",
    title: "Pitch Perfect 6.0",
    status: "upcoming",
    month: "SEP",
    day: "12",
    year: "2026",
    description:
      "A high-stakes pitching competition where student teams compete for seed grants in front of a real investor panel.",
    location: "Innovation Lab, VPKBIET",
    icon: "mic",
  },
  {
    slug: "founder-talks-s4",
    title: "Founder Talks: Season 4",
    status: "upcoming",
    month: "OCT",
    day: "03",
    year: "2026",
    description:
      "An intimate fireside-chat series with alumni founders sharing the unfiltered story behind building their startups.",
    location: "E-Cell Community Hall",
    icon: "users",
  },
  {
    slug: "ideathon-baramati-2025",
    title: "Ideathon Baramati 2025",
    status: "past",
    month: "NOV",
    day: "08",
    year: "2025",
    description:
      "A 24-hour ideation marathon that drew 300+ participants across 40 colleges to solve real-world problem statements.",
    location: "VPKBIET Campus",
    icon: "lightbulb",
  },
  {
    slug: "bootcamp-zero-to-mvp",
    title: "Bootcamp: Zero to MVP",
    status: "past",
    month: "AUG",
    day: "22",
    year: "2025",
    description:
      "A hands-on weekend bootcamp teaching first-time founders how to validate and ship an MVP in under 30 days.",
    location: "Innovation Lab, VPKBIET",
    icon: "trending",
  },
  {
    slug: "investor-connect-meet",
    title: "Investor Connect Meet",
    status: "past",
    month: "MAY",
    day: "17",
    year: "2025",
    description:
      "Curated closed-door networking session pairing our top mentee startups with angel investors from across Maharashtra.",
    location: "VPKBIET Seminar Hall",
    icon: "trophy",
  },
  {
    slug: "design-sprint-weekend",
    title: "Design Sprint Weekend",
    status: "past",
    month: "FEB",
    day: "09",
    year: "2025",
    description:
      "A Google Ventures-style design sprint helping teams go from problem to tested prototype in five focused days.",
    location: "Innovation Lab, VPKBIET",
    icon: "sprint",
  },
];
