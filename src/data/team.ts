export type TeamCategory = "Core Team" | "Leads" | "Volunteers";

export interface TeamMember {
  name: string;
  role: string;
  category: TeamCategory;
  photo?: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
  twitter?: string;
}

export const TEAM: TeamMember[] = [
  {
    name: "Kuldeep Lakhera",
    role: "Tech Lead",
    category: "Leads",
    photo: "/team/kuldeep-lakhera.jpg",
    linkedin: "https://www.linkedin.com/in/kuldeep-lakhera-a78373290/",
    github: "https://github.com/KuldeepLakhera9",
    instagram: "https://www.instagram.com/kuldeeplakhera_/",
  },
  {
    name: "Shravani Sanas",
    role: "Event Management Lead",
    category: "Leads",
    photo: "/team/shravani-sanas.jpg",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
  },
  {
    name: "Priyanka Pawar",
    role: "Content and Research Lead",
    category: "Leads",
    photo: "/team/priyanka-pawar.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Anand Kale",
    role: "PR Lead",
    category: "Leads",
    photo: "/team/anand-kale.jpg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Tejas Eklare",
    role: "Design and Marketing Lead",
    category: "Leads",
    photo: "/team/tejas-eklare.jpg",
    linkedin: "https://linkedin.com",
  },
];
