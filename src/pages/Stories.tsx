import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Calendar, Search, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { stories, type Story } from "@/data/stories";
import { cn } from "@/lib/utils";

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });

const categories = ["All", "Education", "Livelihoods", "Community", "Field Notes"] as const;

const StoriesPage = () => {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    let s: Story[] = [...stories].sort((a, b) => +new Date(b.date) - +new Date(a.date));
    if (cat !== "All") s = s.filter((x) => x.category === cat);
    if (q.trim()) {
      const needle = q.toLowerCase();
      s = s.filter(
        (x) =>
          x.title.toLowerCase().includes(needle) ||
          x.excerpt.toLowerCase().includes(needle) ||
          x.author.toLowerCase().includes(needle)
      );
    }
    return s;
  }, [q, cat]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Stories"
        title={<>Stories from <span className="italic text-primary">the field.</span></>}
        subtitle="Real updates from our programs — the wins, the lessons, and the lives behind the numbers."
      />

      <section className="py-10 md:py-14">
        <div className="container">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search stories..."
                className="w-full h-11 pl-10 pr-4 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={cn(
                    "px-4 h-11 rounded-lg text-sm font-medium border transition-all",
                    cat === c
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card border-border hover:border-primary/40"
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No stories match your search.
            </div>
          )}

          {/* Featured */}
          {featured && (
            <Link
              to={`/stories/${featured.slug}`}
              className="group grid lg:grid-cols-2 gap-8 mb-14 bg-card border border-border rounded-2xl overflow-hidden hover:shadow-elegant transition-all duration-500"
            >
              <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img
                  src={featured.cover}
                  alt={featured.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-accent font-semibold mb-4">
                  <span>Featured</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>{featured.category}</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight mb-4">
                  {featured.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-5">{featured.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" /> {fmt(featured.date)} · {featured.readMinutes} min read
                </div>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Read story <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          )}

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((s) => (
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
                    <span className="text-muted-foreground">{fmt(s.date)}</span>
                  </div>
                  <h3 className="font-display text-xl font-medium mb-2 leading-snug">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{s.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default StoriesPage;
