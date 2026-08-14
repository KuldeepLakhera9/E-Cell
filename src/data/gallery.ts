export type GallerySize = "large" | "tall" | "wide" | "normal";

export interface GalleryItem {
  id: string;
  title: string;
  event: string;
  image: string;
  size: GallerySize;
}

export const GALLERY: GalleryItem[] = [
  {
    id: "g1",
    title: "E-Cell VPKBIET Team 2025-26",
    event: "Official Team Induction",
    image: "/images/gallery/gallery-team-steps-1.jpg",
    size: "large",
  },
  {
    id: "g2",
    title: "Innovation & Prototyping Lab",
    event: "Quantum AI & 3D Printing Lab",
    image: "/images/gallery/gallery-quantum-lab.jpg",
    size: "tall",
  },
  {
    id: "g3",
    title: "VPKBIET Innovation Hub",
    event: "Center of Excellence",
    image: "/images/gallery/gallery-campus-wide.jpg",
    size: "tall",
  },
  {
    id: "g4",
    title: "Entrepreneurs in the Making",
    event: "Campus Assembly",
    image: "/images/gallery/gallery-team-steps-2.jpg",
    size: "wide",
  },
  {
    id: "g5",
    title: "Core Leads Cohort",
    event: "Leadership Meet",
    image: "/images/gallery/gallery-leads-outdoor.jpg",
    size: "wide",
  },
];
