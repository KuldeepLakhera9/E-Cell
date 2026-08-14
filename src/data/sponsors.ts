export interface Sponsor {
  name: string;
  tier: "Title Sponsor" | "Partner";
}

export const SPONSORS: Sponsor[] = [
  { name: "Razorpay", tier: "Title Sponsor" },
  { name: "AWS Activate", tier: "Title Sponsor" },
  { name: "Zerodha Varsity", tier: "Partner" },
  { name: "NASSCOM 10000 Startups", tier: "Partner" },
  { name: "Startup Maharashtra", tier: "Partner" },
  { name: "T-Hub", tier: "Partner" },
  { name: "Notion for Startups", tier: "Partner" },
  { name: "Postman", tier: "Partner" },
];
