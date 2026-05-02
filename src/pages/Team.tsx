import { Link } from "react-router-dom";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { team } from "@/data/team";

const principles = [
  { k: "12", label: "Full-time staff" },
  { k: "47", label: "Field volunteers" },
  { k: "100%", label: "Nigerian-led" },
  { k: "13y", label: "Avg. tenure of leadership" },
];

const TeamPage = () => {
  const [lead, ...rest] = team;

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="The team"
        title={<>People doing <span className="italic text-primary">the work.</span></>}
        subtitle="A small, local team. Most of us live in the communities we serve. None of us is here for a CV line — we're here because the work matters and it's slow."
      />

      {/* Principles strip */}
      <section className="py-10 border-b border-border/60 bg-secondary/40">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-6">
          {principles.map((p) => (
            <div key={p.label}>
              <div className="font-display text-3xl md:text-4xl text-primary">{p.k}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{p.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 md:py-20">
        <div className="container max-w-5xl">
          <div className="text-xs uppercase tracking-[0.22em] text-accent font-medium mb-4">— Leadership</div>
          <div className="grid md:grid-cols-5 gap-8 items-start bg-card border border-border rounded-3xl p-8 md:p-10 shadow-soft">
            <div className="md:col-span-2">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-soft">
                <img
                  src={lead.image}
                  alt={lead.name}
                  width={768}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-3">
              <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">{lead.role}</div>
              <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight">{lead.name}</h2>
              <p className="mt-5 text-foreground/80 leading-relaxed">{lead.bio}</p>
              <div className="mt-6 flex gap-2">
                <a href="#" aria-label="Email" className="h-10 w-10 grid place-items-center rounded-full border border-border hover:bg-secondary transition-colors">
                  <Mail className="h-4 w-4" />
                </a>
                <a href="#" aria-label="LinkedIn" className="h-10 w-10 grid place-items-center rounded-full border border-border hover:bg-secondary transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of team */}
      <section className="py-16 bg-secondary/40 border-y border-border/60">
        <div className="container">
          <div className="text-xs uppercase tracking-[0.22em] text-accent font-medium mb-4">— Programs & operations</div>
          <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight mb-10">
            The hands behind every program.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((m) => (
              <div
                key={m.name}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-elegant hover:-translate-y-1 transition-all duration-500 flex flex-col"
              >
                <div className="aspect-[4/5] overflow-hidden bg-secondary">
                  <img
                    src={m.image}
                    alt={m.name}
                    width={768}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-[10px] uppercase tracking-widest text-accent font-semibold mb-2">
                    {m.role}
                  </div>
                  <div className="font-display text-2xl font-semibold leading-tight mb-3">
                    {m.name}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Field network */}
      <section className="py-20">
        <div className="container max-w-3xl text-center">
          <div className="text-xs uppercase tracking-[0.22em] text-accent font-medium mb-4">— And 47 more</div>
          <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight">
            Our field volunteers are the reason this works.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Teachers, tailors, nurses, students, retirees — the people who show up on a Tuesday
            morning when nobody is watching. We name them in our annual report, never on a banner.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container">
          <div className="bg-gradient-forest text-primary-foreground rounded-3xl p-10 md:p-14 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight max-w-2xl mx-auto">
              Want to join the team?
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
              We hire slowly and rarely. Volunteer roles open every quarter.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button variant="donate" size="lg" asChild>
                <Link to="/get-involved">Volunteer with us <ArrowRight /></Link>
              </Button>
              <Button variant="soft" size="lg" asChild>
                <Link to="/contact">Reach the team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default TeamPage;
