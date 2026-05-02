import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Calendar, ArrowLeft, Heart, Share2, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { getStoryBySlug, recentStories } from "@/data/stories";
import { DonateDialog } from "@/components/site/DonateDialog";
import NotFound from "./NotFound";

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" });

const StoryDetail = () => {
  const { slug } = useParams();
  const story = slug ? getStoryBySlug(slug) : undefined;
  const [donateOpen, setDonateOpen] = useState(false);

  if (!story) return <NotFound />;

  const related = recentStories(6).filter((s) => s.slug !== story.slug).slice(0, 3);

  return (
    <SiteLayout>
      {/* Cover */}
      <section className="pt-32 md:pt-40">
        <div className="container max-w-4xl">
          <Link to="/stories" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="h-4 w-4" /> All stories
          </Link>
          <div className="text-xs uppercase tracking-[0.22em] text-accent font-semibold mb-4">
            {story.category}
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-balance">
            {story.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span>By {story.author}</span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" /> {fmt(story.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> {story.readMinutes} min read
            </span>
          </div>
        </div>
        <div className="container max-w-5xl mt-10">
          <img
            src={story.cover}
            alt={story.title}
            className="w-full aspect-[16/9] object-cover rounded-2xl shadow-elegant"
          />
        </div>
      </section>

      {/* Body */}
      <article className="py-14 md:py-20">
        <div className="container max-w-3xl">
          <div className="prose-content space-y-6">
            {story.content.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "font-display text-2xl md:text-3xl leading-snug text-foreground first-letter:font-display first-letter:text-5xl first-letter:font-medium first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:leading-none"
                    : "text-lg leading-relaxed text-foreground/85"
                }
              >
                {p}
              </p>
            ))}
          </div>

          {/* Story → action */}
          <div className="mt-14 p-8 md:p-10 rounded-2xl bg-gradient-forest text-primary-foreground shadow-elegant">
            <h3 className="font-display text-2xl md:text-3xl font-medium leading-tight">
              This story is funded by people like you.
            </h3>
            <p className="mt-3 text-primary-foreground/80 max-w-xl leading-relaxed">
              If this moved you, the most useful thing you can do is give — once or monthly. Every dollar is tracked.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="donate" size="lg" onClick={() => setDonateOpen(true)}>
                <Heart className="fill-current" /> Donate
              </Button>
              <Button variant="soft" size="lg" asChild>
                <Link to="/get-involved">Other ways to help</Link>
              </Button>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between text-sm">
            <div className="text-muted-foreground">Share this story</div>
            <Button variant="ghost" size="sm">
              <Share2 className="h-4 w-4" /> Copy link
            </Button>
          </div>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 bg-secondary/40 border-t border-border/60">
          <div className="container">
            <h2 className="font-display text-3xl font-medium mb-8">More stories</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((s) => (
                <Link
                  to={`/stories/${s.slug}`}
                  key={s.slug}
                  className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-elegant transition-all duration-500"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={s.cover} alt={s.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <div className="text-[10px] uppercase tracking-widest text-accent font-semibold mb-2">{s.category}</div>
                    <h3 className="font-display text-lg font-medium leading-snug">{s.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <DonateDialog open={donateOpen} onOpenChange={setDonateOpen} />
    </SiteLayout>
  );
};

export default StoryDetail;
