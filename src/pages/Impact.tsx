import { Link } from "react-router-dom";
import { Download, CheckCircle2, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { impactNumbers, allocation, milestones, achievements } from "@/data/impact";

const ImpactPage = () => (
  <SiteLayout>
    <PageHeader
      eyebrow="Impact & Transparency"
      title={<>Open books. <span className="italic text-primary">Real numbers.</span></>}
      subtitle="We publish what we do, what it costs, and what we learn — every year, without exception."
    />

    {/* Numbers strip */}
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
          {impactNumbers.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="font-display text-4xl md:text-5xl font-medium">{s.value}</div>
              <div className="mt-2 text-sm text-primary-foreground/70 max-w-[12rem] mx-auto md:mx-0">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* How resources are used */}
    <section className="py-20">
      <div className="container grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <div className="text-xs uppercase tracking-[0.22em] text-accent font-medium mb-4">
            — Where every dollar goes
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight mb-4">
            94¢ of every dollar reaches our programs.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We keep overhead deliberately low. Field operations, fundraising and admin together
            account for less than a quarter of our spending — and every line is independently audited.
          </p>
          <Button variant="soft" asChild>
            <a href="#"><Download /> Download 2025 annual report</a>
          </Button>
        </div>

        <div className="lg:col-span-7 bg-card border border-border rounded-2xl p-8">
          <div className="space-y-5">
            {allocation.map((a) => (
              <div key={a.label}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">{a.label}</span>
                  <span className="text-muted-foreground">{a.percent}%</span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-secondary overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-1000"
                    style={{ width: `${a.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Achievements */}
    <section className="py-16 bg-secondary/40 border-y border-border/60">
      <div className="container max-w-4xl">
        <div className="text-xs uppercase tracking-[0.22em] text-accent font-medium mb-4">
          — Our commitments
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight mb-8">
          What we promise — and measure.
        </h2>
        <ul className="grid md:grid-cols-2 gap-5">
          {achievements.map((a) => (
            <li key={a} className="flex gap-3 bg-card border border-border rounded-xl p-5">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm leading-relaxed">{a}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-20">
      <div className="container max-w-4xl">
        <div className="text-xs uppercase tracking-[0.22em] text-accent font-medium mb-4">
          — Our journey
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight mb-10">
          13 years of grounded work.
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
            Want to help us extend this record into year 14?
          </h2>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button variant="donate" size="lg" asChild>
              <Link to="/get-involved">Get involved <ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default ImpactPage;
