export type Campaign = {
  id: string;
  title: string;
  purpose: string;
  goalUSD: number;
  raisedUSD: number;
  donorsCount: number;
  endsOn: string; // ISO
};

export const activeCampaign: Campaign = {
  id: "school-year-2026",
  title: "Send 200 children to school for the 2026/27 year",
  purpose:
    "Tuition, uniforms, books and one hot meal a day for 200 children across Lagos and Enugu.",
  goalUSD: 60000,
  raisedUSD: 41280,
  donorsCount: 1147,
  endsOn: "2026-08-31",
};

export type RecentDonor = {
  name: string;
  amount: number;
  when: string; // human-readable
  message?: string;
};

export const recentDonors: RecentDonor[] = [
  { name: "Anonymous", amount: 250, when: "2 minutes ago", message: "For the children of Enugu." },
  { name: "Sarah M.", amount: 50, when: "14 minutes ago" },
  { name: "Olumide A.", amount: 100, when: "38 minutes ago", message: "Monthly — keep going." },
  { name: "Anonymous", amount: 25, when: "1 hour ago" },
  { name: "Grace E.", amount: 500, when: "2 hours ago", message: "In memory of my mother, a teacher." },
  { name: "Daniel K.", amount: 30, when: "3 hours ago" },
  { name: "Chinwe O.", amount: 75, when: "5 hours ago" },
  { name: "Anonymous", amount: 1000, when: "Yesterday" },
];
