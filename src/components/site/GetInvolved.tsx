import { HandHeart, Users, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ways = [
  {
    icon: HandHeart,
    title: "Donate",
    body: "Fund a scholarship, a meal, or a livelihood. Every contribution is tracked.",
    cta: "Give today",
    href: "/get-involved",
  },
  {
    icon: Users,
    title: "Volunteer",
    body: "Lend your time and skills to programs in Lagos, Enugu and beyond.",
    cta: "Apply to help",
    href: "/get-involved",
  },
  {
    icon: Mail,
    title: "Subscribe",
    body: "A short monthly note. Real updates from the communities you support.",
    cta: "Join the list",
    href: "#newsletter",
  },
];

export const GetInvolved = () => (
  <section id="involved" className="py-20 md:py-28">
    <div className="container">
      <div className="max-w-2xl mb-12">
        <div className="text-xs uppercase tracking-[0.22em] text-accent font-medium mb-4">
          — Get involved
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight">
          Three ways to <span className="italic text-primary">stand with us.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {ways.map((w) => (
          <div
            key={w.title}
            className="bg-card border border-border rounded-2xl p-7 hover:border-primary/30 hover:shadow-soft transition-all duration-300"
          >
            <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center mb-5">
              <w.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-2xl font-medium mb-2">{w.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">{w.body}</p>
            <Button variant="ghost" asChild className="px-0 hover:bg-transparent text-primary">
              {w.href.startsWith("#") ? (
                <a href={w.href}>{w.cta} <ArrowRight /></a>
              ) : (
                <Link to={w.href}>{w.cta} <ArrowRight /></Link>
              )}
            </Button>
          </div>
        ))}
      </div>

      {/* Newsletter */}
      <div id="newsletter" className="mt-16 bg-gradient-forest text-primary-foreground rounded-2xl p-8 md:p-12 shadow-elegant">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3">
            <h3 className="font-display text-2xl md:text-3xl font-medium leading-tight">
              A monthly letter from the field.
            </h3>
            <p className="mt-3 text-primary-foreground/75 max-w-lg">
              Honest updates, photos, and what your support made possible. No spam — ever.
            </p>
          </div>
          <form
            className="md:col-span-2 flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              form.reset();
              alert("Thank you — we'll be in touch.");
            }}
          >
            <input
              required
              type="email"
              placeholder="you@email.com"
              className="flex-1 h-12 px-4 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Button type="submit" variant="donate" size="lg">Subscribe</Button>
          </form>
        </div>
      </div>
    </div>
  </section>
);
