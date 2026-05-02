import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import heroImg from "@/assets/hero-children.jpg";

export const Hero = ({ onDonate }: { onDonate: () => void }) => {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Soft warm wash */}
      <div className="absolute inset-0 bg-gradient-warm -z-10" />
      <div className="absolute -top-32 -right-32 w-[40rem] h-[40rem] rounded-full bg-gradient-glow blur-3xl -z-10" />

      <div className="container grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border/60 text-xs font-medium text-secondary-foreground mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            A Nigerian non-profit, building dignity
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] text-balance">
            Every life deserves
            <br />
            <span className="italic text-primary">a fair beginning.</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl text-balance leading-relaxed">
            360 DWAIF works alongside underserved communities in Nigeria — providing
            education, livelihoods and care that turn potential into possibility.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button size="xl" variant="donate" onClick={onDonate}>
              <Heart className="fill-current" />
              Donate now
            </Button>
            <Button size="xl" variant="soft" asChild>
              <a href="#programs">
                See our work <ArrowRight />
              </a>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <div>
              <div className="font-display text-2xl text-foreground">13 yrs</div>
              <div>of grounded fieldwork</div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <div className="font-display text-2xl text-foreground">12,400+</div>
              <div>lives reached since 2013</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative animate-scale-in">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elegant">
            <img
              src={heroImg}
              alt="Nigerian children learning together in a community classroom"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
          </div>

          {/* Floating impact card */}
          <div className="hidden md:block absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-soft max-w-[15rem]">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">This month</div>
            <div className="font-display text-2xl text-primary mt-1">427 meals</div>
            <div className="text-xs text-muted-foreground mt-1">delivered to Lagos shelters</div>
          </div>
          <div className="hidden md:block absolute -top-6 -right-4 bg-primary text-primary-foreground rounded-xl px-4 py-3 shadow-elegant rotate-2">
            <div className="text-[10px] uppercase tracking-widest opacity-80">Live</div>
            <div className="text-sm font-medium">3 active programs</div>
          </div>
        </div>
      </div>
    </section>
  );
};
