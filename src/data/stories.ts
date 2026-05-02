import portrait from "@/assets/story-portrait.jpg";
import edu from "@/assets/program-education.jpg";
import skills from "@/assets/program-skills.jpg";
import community from "@/assets/program-community.jpg";
import hero from "@/assets/hero-children.jpg";

export type Story = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  category: "Education" | "Livelihoods" | "Community" | "Field Notes";
  date: string; // ISO
  author: string;
  readMinutes: number;
  content: string[]; // paragraphs
  featured?: boolean;
};

export const stories: Story[] = [
  {
    slug: "amaka-second-year-nursing",
    title: "Amaka is in her second year of nursing school",
    excerpt:
      "When her family could no longer pay her fees, Amaka almost dropped out. A scholarship — and a community that believed in her — changed the story.",
    cover: portrait,
    category: "Education",
    date: "2026-03-12",
    author: "Ifeoma Eze",
    readMinutes: 5,
    featured: true,
    content: [
      "The first time we met Amaka, she was sitting on the front step of her aunt's home in Enugu, holding a notebook she had been re-reading for two terms because new ones were a luxury.",
      "Her dream — to become a nurse — was already fading from possibility into politeness. The kind of dream you say out loud only when no one is asking you to be realistic.",
      "Three years later, Amaka is in her second year of nursing school. She tutors three younger girls in her old neighborhood every Saturday. She tells them what no one had told her: that wanting something is allowed.",
      "This is what your support funds. Not just tuition. Permission. The quiet, structural permission to imagine a different life.",
      "Amaka will graduate in 2027. We will be there. So, in a real way, will you.",
    ],
  },
  {
    slug: "lagos-skills-hub-first-cohort",
    title: "The first cohort of the Lagos Skills Hub graduated this month",
    excerpt:
      "Twenty-two women completed our six-month tailoring and digital literacy program. Eighteen are already earning.",
    cover: skills,
    category: "Livelihoods",
    date: "2026-02-28",
    author: "Tunde Adebayo",
    readMinutes: 4,
    content: [
      "On a Saturday morning in Yaba, twenty-two women stood in matching ankara, holding certificates that, on paper, are simple things.",
      "But behind each certificate is a six-month commitment: showing up four days a week, often before the city wakes, often with a child on the hip.",
      "Eighteen of the twenty-two graduates have already secured paid work — six in formal tailoring shops, four through online resale, and eight through commissions in their own neighborhoods.",
      "We are now planning cohort two. The waitlist is at 140 women.",
    ],
  },
  {
    slug: "feeding-program-reaches-10000",
    title: "Our feeding program crossed 10,000 meals served",
    excerpt:
      "A milestone four years in the making — and a reminder of how much remains to do.",
    cover: community,
    category: "Community",
    date: "2026-01-18",
    author: "Chiamaka Obi",
    readMinutes: 3,
    content: [
      "Ten thousand meals is a number that sounds enormous until you stand in front of one of our weekly distributions and count the queue.",
      "We started this program in 2022 with a simple promise: a hot meal, three days a week, no questions asked.",
      "Four years later, the program runs in three Lagos neighborhoods, supported entirely by recurring donors and a partnership with two local farms.",
      "We're now exploring how to add a fourth site in Enugu — pending funding for a kitchen and a coordinator.",
    ],
  },
  {
    slug: "why-we-stopped-giving-tablets",
    title: "Why we stopped giving out tablets",
    excerpt:
      "A field note on a program we discontinued — and what we learned about doing less, better.",
    cover: edu,
    category: "Field Notes",
    date: "2025-11-04",
    author: "Ifeoma Eze",
    readMinutes: 6,
    content: [
      "In 2023, we ran a pilot to distribute tablets pre-loaded with learning content to 60 students.",
      "It looked good in the photos. The data was less generous. After six months, only 22% of students were using the tablets weekly. Devices broke. Chargers disappeared. Two were sold.",
      "We discontinued the program in early 2024. We are publishing this not because it's a comfortable story to tell, but because transparency is part of the work.",
      "The lesson was not 'tech doesn't work in low-income contexts.' The lesson was that a device without a teacher, a charger, a safe place to study, and a parent who can read alongside is just an object.",
      "We've redirected those funds into our after-school tutoring program. Attendance is at 91%.",
    ],
  },
  {
    slug: "tree-planting-enugu",
    title: "1,200 trees, planted by 1,200 hands",
    excerpt:
      "Our community tree-planting day in Enugu brought together schools, elders, and a future the city hasn't fully imagined yet.",
    cover: hero,
    category: "Community",
    date: "2025-09-22",
    author: "Tunde Adebayo",
    readMinutes: 3,
    content: [
      "We planted 1,200 trees in a single Saturday. Not by us — by 1,200 people, each one putting one tree in the ground.",
      "Schools brought students. Elders brought stories about what the land used to look like. A local radio station broadcast live for four hours.",
      "We will return in six months to monitor survival rates. The early target is 80%.",
    ],
  },
  {
    slug: "monthly-donors-matter-most",
    title: "Why monthly donors are the quietest heroes",
    excerpt:
      "A look at the math behind recurring giving — and why it's the single biggest unlock for our planning.",
    cover: edu,
    category: "Field Notes",
    date: "2025-07-10",
    author: "Chiamaka Obi",
    readMinutes: 4,
    content: [
      "When you give once, you fund a moment. When you give monthly, you fund a plan.",
      "Recurring donations let us hire a coordinator on a one-year contract instead of a three-month one. They let us promise a child a full school year, not a single term.",
      "If you can give $10 a month, you are, in a very real sense, on the team.",
    ],
  },
];

export const getStoryBySlug = (slug: string) => stories.find((s) => s.slug === slug);
export const featuredStories = () => stories.filter((s) => s.featured);
export const recentStories = (n = 3) =>
  [...stories].sort((a, b) => +new Date(b.date) - +new Date(a.date)).slice(0, n);
