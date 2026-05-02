import portrait from "@/assets/story-portrait.jpg";
import { Quote } from "lucide-react";

export const Story = () => (
  <section id="stories" className="py-20 md:py-28 bg-secondary/40">
    <div className="container grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
      <div className="lg:col-span-5 order-2 lg:order-1">
        <div className="relative">
          <img
            src={portrait}
            alt="Amaka, a scholarship recipient"
            width={1024}
            height={1280}
            loading="lazy"
            className="rounded-2xl shadow-elegant aspect-[4/5] object-cover w-full"
          />
          <div className="absolute -bottom-5 -right-5 bg-accent text-accent-foreground rounded-full h-20 w-20 grid place-items-center shadow-warm">
            <Quote className="h-8 w-8" />
          </div>
        </div>
      </div>

      <div className="lg:col-span-7 order-1 lg:order-2">
        <div className="text-xs uppercase tracking-[0.22em] text-accent font-medium mb-4">
          — A story from the field
        </div>
        <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-medium leading-snug text-balance">
          "I wanted to be a nurse, but my family could not pay school fees. 360
          DWAIF didn't just help me — they{" "}
          <span className="italic text-primary">believed I could</span>. Now I'm in
          my second year, and I want to come back and teach others."
        </blockquote>
        <div className="mt-6 flex items-center gap-3">
          <div>
            <div className="font-medium">Amaka, 19</div>
            <div className="text-sm text-muted-foreground">Scholarship recipient · Enugu</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
