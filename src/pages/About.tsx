import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { milestones } from "@/data/impact";

const values = [
  { title: "Honesty", body: "We publish what works and what doesn't. The hard stories too." },
  { title: "Local-first", body: "Our field staff live in the communities we serve. Always." },
  { title: "Patient", body: "We don't drop in and leave. The shortest commitment we make is a year." },
  { title: "Measured", body: "Every program has a number, a date, and a person responsible." },
];

const AboutPage = () => (
  <SiteLayout>
    <PageHeader
      eyebrow="About 360 DWAIF"
      title={<>A foundation built on <span className="italic text-primary">staying.</span></>}
      subtitle="360 Degrees What Am I Foundation has worked alongside underserved Nigerian communities since 2013 — quietly, transparently, and with patience."
    />

    {/* Story */}
    <section className="py-16 md:py-20">
      <div className="container max-w-3xl">
        <div className="text-xs uppercase tracking-[0.22em] text-accent font-medium mb-4">— Our story</div>
        <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
          <p>
            360 DWAIF began in 2013, in a single-room community hall in Enugu, with a question
            our founder kept hearing children ask: <em>"What am I?"</em>
          </p>
          <p>
            It was a question about possibility — about whether the world had a place for a
            child whose family couldn't pay school fees, whose neighborhood went un-counted,
            whose hopes were softened into politeness.
          </p>
          <p>
            Thirteen years later, we've worked with over 12,400 people across Lagos and Enugu.
            We've made promises we kept, and a few we publicly walked back. We've published every
            year's results — including the ones that didn't work.
          </p>
          <p>
            We are still small. That is on purpose. The work that matters most is
            local, slow, and accountable.
          </p>
        </div>
      </div>
    </section>

    {/* Mission · Vision · Values */}
    <section className="py-16 bg-secondary/40 border-y border-border/60">
      <div className="container grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-card border border-border rounded-2xl p-8">
          <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">Mission</div>
          <p className="font-display text-xl leading-snug">
            To walk alongside underserved Nigerian communities — providing education, livelihood
            and dignity until each can flourish on its own terms.
          </p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-8">
          <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">Vision</div>
          <p className="font-display text-xl leading-snug">
            A Nigeria where every child can answer the question <em>"What am I?"</em> with hope —
            and the resources to follow it.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-4">Values</div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v) => (
            <div key={v.title} className="bg-card border border-border rounded-xl p-6">
              <div className="font-display text-xl font-medium mb-2 text-primary">{v.title}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-20">
      <div className="container max-w-4xl">
        <div className="text-xs uppercase tracking-[0.22em] text-accent font-medium mb-4">— Growth over 13 years</div>
        <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight mb-10">
          A timeline of staying.
        </h2>
        <ol className="relative border-l-2 border-border ml-3 space-y-8">
          {milestones.map((m) => (
            <li key={m.year} className="pl-8 relative">
              <span className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-primary border-4 border-background" />
              <div className="font-display text-2xl text-primary">{m.year}</div>
              <p className="text-muted-foreground mt-1 leading-relaxed">{m.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20">
      <div className="container">
        <div className="bg-gradient-forest text-primary-foreground rounded-3xl p-10 md:p-14 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight max-w-2xl mx-auto">
            Curious to see the numbers behind the story?
          </h2>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button variant="donate" size="lg" asChild>
              <Link to="/impact">View our impact <ArrowRight /></Link>
            </Button>
            <Button variant="soft" size="lg" asChild>
              <Link to="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default AboutPage;
