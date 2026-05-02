import { Link } from "react-router-dom";
import { Calendar, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { upcomingEvents, pastEvents, type EventItem } from "@/data/events";

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric", year: "numeric" });

const EventCard = ({ e, past }: { e: EventItem; past?: boolean }) => (
  <article className="bg-card border border-border rounded-2xl p-6 md:p-7 hover:shadow-soft transition-all">
    <div className="flex items-start gap-5">
      <div className="shrink-0 w-16 text-center bg-secondary rounded-xl py-3 border border-border">
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
          {new Date(e.date).toLocaleDateString(undefined, { month: "short" })}
        </div>
        <div className="font-display text-2xl text-primary">
          {new Date(e.date).getDate()}
        </div>
        <div className="text-[10px] text-muted-foreground">
          {new Date(e.date).getFullYear()}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-display text-xl md:text-2xl font-medium leading-snug">
          {e.title}
        </h3>
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" /> {fmt(e.date)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" /> {e.location}
          </span>
        </div>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{e.description}</p>
        {past && e.outcome && (
          <div className="mt-4 flex gap-2 bg-secondary/60 rounded-lg p-3 text-xs leading-relaxed">
            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <span><strong className="text-foreground">Outcome:</strong> {e.outcome}</span>
          </div>
        )}
        {!past && e.cta && (
          <div className="mt-4">
            <Button variant="soft" size="sm" asChild>
              <Link to={e.cta.href}>{e.cta.label} <ArrowRight /></Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  </article>
);

const EventsPage = () => {
  const upcoming = upcomingEvents();
  const past = pastEvents();

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Events"
        title={<>Where we're <span className="italic text-primary">showing up.</span></>}
        subtitle="Field days, donor roundtables, graduations — moments where the work becomes visible."
      />

      <section className="py-14">
        <div className="container">
          <h2 className="font-display text-3xl font-medium mb-8 flex items-center gap-3">
            Upcoming
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          </h2>
          {upcoming.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-5">
              {upcoming.map((e) => <EventCard key={e.id} e={e} />)}
            </div>
          ) : (
            <p className="text-muted-foreground">No upcoming events scheduled. Check back soon.</p>
          )}
        </div>
      </section>

      <section className="py-14 bg-secondary/40 border-t border-border/60">
        <div className="container">
          <h2 className="font-display text-3xl font-medium mb-8">Past events</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {past.map((e) => <EventCard key={e.id} e={e} past />)}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default EventsPage;
