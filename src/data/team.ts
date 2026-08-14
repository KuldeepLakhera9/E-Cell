export type TeamCategory = "Core Team" | "Leads" | "Volunteers";

export interface TeamMember {
  name: string;
  role: string;
  category: TeamCategory;
  linkedin?: string;
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
    name: "Aditya Shinde",
    role: "Events Lead",
    category: "Leads",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
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
    name: "Ananya Rane",
    role: "Tech Lead",
    category: "Leads",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
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
