import { Heart, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { activeCampaign, recentDonors } from "@/data/campaign";

export const CampaignCard = ({ onDonate }: { onDonate: () => void }) => {
  const c = activeCampaign;
  const pct = Math.min(100, Math.round((c.raisedUSD / c.goalUSD) * 100));
  const daysLeft = Math.max(
    0,
    Math.ceil((new Date(c.endsOn).getTime() - new Date("2026-05-01").getTime()) / (1000 * 60 * 60 * 24))
  );

  return (
    <section id="campaign" className="py-20 md:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Main campaign card */}
          <div className="lg:col-span-8 bg-card border border-border rounded-3xl p-8 md:p-10 shadow-soft">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-accent font-medium mb-4">
              <Sparkles className="h-3.5 w-3.5" /> Active campaign
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight mb-3">
              {c.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">{c.purpose}</p>

            {/* Progress */}
            <div className="mt-8">
              <div className="flex items-end justify-between mb-2">
                <div>
                  <div className="font-display text-3xl text-primary">
                    ${c.raisedUSD.toLocaleString()}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    raised of ${c.goalUSD.toLocaleString()} goal
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-display text-2xl">{pct}%</div>
                  <div className="text-xs text-muted-foreground">funded</div>
                </div>
              </div>
              <div className="h-3 w-full rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full bg-gradient-forest rounded-full transition-all duration-1000"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5 text-primary" />
                  {c.donorsCount.toLocaleString()} donors
                </span>
                <span>· {daysLeft} days left</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="donate" size="lg" onClick={onDonate}>
                <Heart className="fill-current" /> Give to this campaign
              </Button>
              <Button variant="soft" size="lg" onClick={onDonate}>Become a monthly donor</Button>
            </div>
          </div>

          {/* Recent donors social proof */}
          <div className="lg:col-span-4 bg-gradient-forest text-primary-foreground rounded-3xl p-7 shadow-elegant">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-accent font-medium mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" /> Recent donors
            </div>
            <ul className="space-y-3 max-h-[24rem] overflow-y-auto pr-1">
              {recentDonors.map((d, i) => (
                <li
                  key={i}
                  className="border-b border-primary-foreground/10 pb-3 last:border-0"
                >
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-sm">{d.name}</div>
                    <div className="text-accent font-semibold text-sm">${d.amount}</div>
                  </div>
                  <div className="text-[11px] text-primary-foreground/60 mt-0.5">{d.when}</div>
                  {d.message && (
                    <div className="text-xs text-primary-foreground/80 mt-1.5 italic leading-snug">
                      "{d.message}"
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
