import edu from "@/assets/program-education.jpg";
import skills from "@/assets/program-skills.jpg";
import community from "@/assets/program-community.jpg";
import hero from "@/assets/hero-children.jpg";
import portrait from "@/assets/story-portrait.jpg";

export type GalleryItem = {
  id: string;
  image: string;
  caption: string;
  year: number;
};

// 13 years of activity — mock data, varied across years
export const gallery: GalleryItem[] = [
  { id: "g-2013-1", image: community, caption: "The first community meeting in Enugu where the foundation was born.", year: 2013 },
  { id: "g-2013-2", image: edu, caption: "Our very first scholarship cohort: 8 children.", year: 2013 },
  { id: "g-2014-1", image: edu, caption: "After-school reading circle, Enugu.", year: 2014 },
  { id: "g-2015-1", image: community, caption: "Health drive in collaboration with a local clinic.", year: 2015 },
  { id: "g-2015-2", image: hero, caption: "First school-supplies distribution day.", year: 2015 },
  { id: "g-2016-1", image: skills, caption: "Pilot of the Women's Skills Hub: 12 participants.", year: 2016 },
  { id: "g-2017-1", image: community, caption: "Opened our second field site in Lagos.", year: 2017 },
  { id: "g-2018-1", image: edu, caption: "Scholarship recipients exceeded 100 for the first time.", year: 2018 },
  { id: "g-2018-2", image: hero, caption: "Saturday classes at the Surulere community hall.", year: 2018 },
  { id: "g-2019-1", image: skills, caption: "Skills Hub cohort 4 graduation.", year: 2019 },
  { id: "g-2020-1", image: community, caption: "Emergency food distribution during the pandemic lockdowns.", year: 2020 },
  { id: "g-2020-2", image: portrait, caption: "Volunteers packing care kits for vulnerable families.", year: 2020 },
  { id: "g-2021-1", image: edu, caption: "Re-opening of in-person tutoring after lockdown.", year: 2021 },
  { id: "g-2022-1", image: community, caption: "Launch of the weekly feeding program.", year: 2022 },
  { id: "g-2022-2", image: skills, caption: "Digital literacy added to the Skills Hub.", year: 2022 },
  { id: "g-2023-1", image: edu, caption: "Tablet pilot — later discontinued and shared as a public field note.", year: 2023 },
  { id: "g-2024-1", image: hero, caption: "Annual donor roundtable: open-books financials shared publicly.", year: 2024 },
  { id: "g-2024-2", image: portrait, caption: "Amaka receives her first nursing-school acceptance letter.", year: 2024 },
  { id: "g-2025-1", image: community, caption: "1,200 trees planted in a single day in Enugu.", year: 2025 },
  { id: "g-2025-2", image: skills, caption: "Skills Hub waitlist crosses 100 women.", year: 2025 },
  { id: "g-2026-1", image: community, caption: "10,000 meals milestone celebration in Surulere.", year: 2026 },
  { id: "g-2026-2", image: skills, caption: "Cohort 1 of 2026 graduates with 82% job-placement.", year: 2026 },
];

export const galleryByYear = () => {
  const grouped = new Map<number, GalleryItem[]>();
  for (const item of gallery) {
    if (!grouped.has(item.year)) grouped.set(item.year, []);
    grouped.get(item.year)!.push(item);
  }
  return Array.from(grouped.entries()).sort((a, b) => b[0] - a[0]);
};
