import { ArrowUpRight } from "lucide-react";
import edu from "@/assets/program-education.jpg";
import skills from "@/assets/program-skills.jpg";
import community from "@/assets/program-community.jpg";

const programs = [
  {
    img: edu,
    tag: "Education",
    title: "Books & Bright Futures",
    body: "School supplies, scholarships and learning spaces for children whose families cannot afford the next term.",
  },
  {
    img: skills,
    tag: "Livelihoods",
    title: "Women's Skills Hub",
    body: "Tailoring, agribusiness and digital training that helps women build income on their own terms.",
  },
  {
    img: community,
    tag: "Community",
    title: "Roots & Relief",
    body: "Food distribution, tree planting and local mobilization that strengthens neighborhoods from within.",
  },
];

export const Programs = () => (
  <section id="programs" className="py-20 md:py-28">
    <div className="container">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.22em] text-accent font-medium mb-4">
            — What we do
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight">
            Three programs.
            <br />
            <span className="italic text-primary">One ripple effect.</span>
          </h2>
        </div>
        <p className="text-muted-foreground max-w-md">
          Each program is small enough to stay personal, and structured enough to
          create lasting change.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {programs.map((p) => (
          <article
            key={p.title}
            className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-elegant transition-all duration-500 hover:-translate-y-1"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                width={1200}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <div className="text-[10px] uppercase tracking-widest text-accent font-semibold mb-3">
                {p.tag}
              </div>
              <h3 className="font-display text-2xl font-medium mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.body}</p>
              <a
                href="#involved"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group/link"
              >
                Support this program
                <ArrowUpRight className="h-4 w-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
