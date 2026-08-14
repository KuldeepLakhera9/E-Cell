export type GallerySize = "large" | "tall" | "wide" | "normal";

export interface GalleryItem {
  id: string;
  title: string;
  event: string;
  size: GallerySize;
}

export const GALLERY: GalleryItem[] = [
  { id: "g1", title: "Opening Keynote", event: "Startup Summit 2025", size: "large" },
  { id: "g2", title: "Team Brainstorm", event: "Ideathon Baramati", size: "normal" },
  { id: "g3", title: "Investor Panel", event: "Startup Summit 2025", size: "tall" },
  { id: "g4", title: "Pitch in Progress", event: "Pitch Perfect 5.0", size: "normal" },
  { id: "g5", title: "Crowd Energy", event: "Startup Summit 2025", size: "wide" },
  { id: "g6", title: "Late Night Build", event: "Bootcamp: Zero to MVP", size: "normal" },
  { id: "g7", title: "Winners on Stage", event: "Pitch Perfect 5.0", size: "normal" },
  { id: "g8", title: "Fireside Chat", event: "Founder Talks S3", size: "tall" },
  { id: "g9", title: "Networking Break", event: "Investor Connect Meet", size: "normal" },
  { id: "g10", title: "Prototype Demo", event: "Design Sprint Weekend", size: "wide" },
  { id: "g11", title: "Team Huddle", event: "Ideathon Baramati", size: "normal" },
  { id: "g12", title: "Closing Ceremony", event: "Startup Summit 2025", size: "normal" },
  { id: "g13", title: "Whiteboard Session", event: "Bootcamp: Zero to MVP", size: "normal" },
  { id: "g14", title: "Founder Q&A", event: "Founder Talks S3", size: "normal" },
];
