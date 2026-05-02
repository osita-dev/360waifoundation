import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export const DonateBanner = ({ onDonate }: { onDonate: () => void }) => (
  <section id="donate" className="py-20 md:py-28">
    <div className="container">
      <div className="relative overflow-hidden rounded-3xl bg-card border border-border p-8 md:p-16 text-center">
        <div className="absolute inset-0 bg-gradient-glow -z-0" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.22em] text-accent font-medium mb-5">
            — Take action
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-balance">
            A small gift can change <span className="italic text-primary">a whole life.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-xl mx-auto">
            $25 sends a child to school for a month. $100 funds a woman's first sewing machine.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button variant="donate" size="xl" onClick={onDonate}>
              <Heart className="fill-current" /> Donate now
            </Button>
            <Button variant="soft" size="xl" asChild>
              <a href="/get-involved">Other ways to help</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
