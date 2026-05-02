export type EventItem = {
  id: string;
  title: string;
  date: string; // ISO
  location: string;
  description: string;
  status: "upcoming" | "past";
  outcome?: string;
  cta?: { label: string; href: string };
};

const today = new Date("2026-05-01");

export const events: EventItem[] = [
  {
    id: "lagos-skills-hub-cohort-2",
    title: "Skills Hub — Cohort 2 Open Day",
    date: "2026-05-24",
    location: "Yaba Community Centre, Lagos",
    description:
      "An open day for women interested in joining cohort 2 of the Skills Hub. Meet alumni, tour the workshop, and apply on the spot.",
    status: "upcoming",
    cta: { label: "RSVP", href: "/contact" },
  },
  {
    id: "donor-roundtable-2026",
    title: "Annual Donor Roundtable",
    date: "2026-06-14",
    location: "The Wheatbaker, Ikoyi · and online",
    description:
      "We share the year's results — the wins, the misses, and where the next year's funding is going.",
    status: "upcoming",
    cta: { label: "Request invite", href: "/contact" },
  },
  {
    id: "enugu-tree-planting-2026",
    title: "Enugu Community Tree-Planting",
    date: "2026-08-09",
    location: "Independence Layout, Enugu",
    description:
      "Our second annual tree-planting day. Bring family, water, and a willingness to dig.",
    status: "upcoming",
    cta: { label: "Volunteer", href: "/get-involved" },
  },
  {
    id: "feeding-milestone-2026",
    title: "10,000 Meals Celebration",
    date: "2026-01-25",
    location: "Surulere, Lagos",
    description:
      "A small community evening to mark crossing 10,000 meals served through our weekly feeding program.",
    status: "past",
    outcome:
      "Over 180 community members attended. We launched the recurring-donor circle that has since added 64 monthly supporters.",
  },
  {
    id: "skills-hub-graduation-2026",
    title: "Skills Hub Cohort 1 Graduation",
    date: "2026-02-28",
    location: "Yaba Community Centre, Lagos",
    description:
      "Twenty-two women received their certificates after six months of tailoring and digital literacy training.",
    status: "past",
    outcome:
      "18 of 22 graduates secured paid work within 8 weeks of graduation.",
  },
  {
    id: "annual-report-launch-2025",
    title: "2025 Annual Report Launch",
    date: "2025-12-10",
    location: "Online",
    description:
      "We published our 2025 annual report and held an open Q&A with our board.",
    status: "past",
    outcome: "Annual report downloaded 2,400+ times in the first month.",
  },
];

export const upcomingEvents = () =>
  events
    .filter((e) => e.status === "upcoming" && new Date(e.date) >= today)
    .sort((a, b) => +new Date(a.date) - +new Date(b.date));

export const pastEvents = () =>
  events
    .filter((e) => e.status === "past" || new Date(e.date) < today)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
