import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export const Testimonials = () => (
  <section id="testimonials" className="py-20 md:py-28">
    <div className="container">
      <div className="max-w-2xl mb-14">
        <div className="text-xs uppercase tracking-[0.22em] text-accent font-medium mb-4">
          — What people say
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight">
          Voices from the <span className="italic text-primary">communities we serve.</span>
        </h2>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          We don't measure success in press clippings. We measure it in the words of the
          people who live the work — long after we've gone home.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="relative bg-card border border-border rounded-2xl p-7 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 flex flex-col"
          >
            <Quote className="h-7 w-7 text-accent/70 mb-4" />
            <blockquote className="font-display text-lg md:text-xl leading-snug text-foreground/90 flex-1">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-7 pt-6 border-t border-border/60 flex items-center gap-4">
              <img
                src={t.image}
                alt={t.name}
                width={640}
                height={640}
                loading="lazy"
                className="h-14 w-14 rounded-full object-cover shrink-0"
              />
              <div>
                <div className="font-display text-base font-medium leading-tight">{t.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  {t.role} · {t.location}
                </div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
