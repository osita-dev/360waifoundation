import adaeze from "@/assets/team-adaeze.jpg";
import tunde from "@/assets/team-tunde.jpg";
import ifeoma from "@/assets/team-ifeoma.jpg";
import chiamaka from "@/assets/team-chiamaka.jpg";
import emeka from "@/assets/team-emeka.jpg";
import blessing from "@/assets/team-blessing.jpg";

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  image: string;
};

export const team: TeamMember[] = [
  {
    name: "Dr. Frances Oyaide",
    role: "Founder & Executive Director",
    bio: "A former public-health physician, Adaeze founded 360 DWAIF in 2013 after a decade of community work in Lagos. She still runs every Monday-morning field call.",
    initials: "FO",
    image: adaeze,
  },
  {
    name: "Tunde Adebayo",
    role: "Director of Programs",
    bio: "Tunde leads our Lagos operations. He believes the best programs are the ones that quietly become unnecessary.",
    initials: "TA",
    image: tunde,
  },
  {
    name: "Ifeoma Eze",
    role: "Head of Storytelling & Comms",
    bio: "Ifeoma is the reason every story you read on this site sounds like a person, not a press release.",
    initials: "IE",
    image: ifeoma,
  },
  {
    name: "Chiamaka Obi",
    role: "Finance & Transparency Lead",
    bio: "Chiamaka built our open-books reporting system. She publishes a monthly internal expense report nobody asked for, and everybody now reads.",
    initials: "CO",
    image: chiamaka,
  },
  {
    name: "Emeka Nwosu",
    role: "Skills Hub Lead",
    bio: "A master tailor and former cohort instructor, Emeka now runs the Skills Hub curriculum and mentor network.",
    initials: "EN",
    image: emeka,
  },
  {
    name: "Blessing Adekunle",
    role: "Volunteer Coordinator",
    bio: "Blessing matches every volunteer to the program where their skills will land hardest. She has never lost a match.",
    initials: "BA",
    image: blessing,
  },
];
