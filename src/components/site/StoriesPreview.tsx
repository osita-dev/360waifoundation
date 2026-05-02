import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { recentStories } from "@/data/stories";

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });

export const StoriesPreview = () => {
  const items = recentStories(3);
  return (
    <section id="stories" className="py-20 md:py-28 bg-secondary/40">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.22em] text-accent font-medium mb-4">
              — From the field
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight">
              Stories that <span className="italic text-primary">drive the work.</span>
            </h2>
          </div>
          <Button variant="ghost" asChild className="self-start md:self-end text-primary">
            <Link to="/stories">All stories <ArrowRight /></Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((s) => (
            <Link
              to={`/stories/${s.slug}`}
              key={s.slug}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.cover}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-accent font-semibold mb-3">
                  <span>{s.category}</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span className="text-muted-foreground inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {fmt(s.date)}
                  </span>
                </div>
                <h3 className="font-display text-xl font-medium mb-2 leading-snug">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{s.excerpt}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Read story <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
