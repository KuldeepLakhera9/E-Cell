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
    name: "Aarav Deshmukh",
    role: "President",
    category: "Core Team",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Sanika Patil",
    role: "Vice President",
    category: "Core Team",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
  },
  {
    name: "Rohan Kulkarni",
    role: "General Secretary",
    category: "Core Team",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Ishita Bajaj",
    role: "Treasurer",
    category: "Core Team",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
  },
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
    name: "Meera Joshi",
    role: "Marketing Lead",
    category: "Leads",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Kabir Wagh",
    role: "Design Lead",
    category: "Leads",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
  },
  {
    name: "Yash Pawar",
    role: "Outreach Lead",
    category: "Leads",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
  },
  {
    name: "Diya Kapoor",
    role: "Content Volunteer",
    category: "Volunteers",
    instagram: "https://instagram.com",
  },
  {
    name: "Om Bhosale",
    role: "Operations Volunteer",
    category: "Volunteers",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Sara Iyer",
    role: "Design Volunteer",
    category: "Volunteers",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
  },
];
