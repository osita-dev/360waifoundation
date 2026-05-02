import { ReactNode } from "react";

export const PageHeader = ({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}) => (
  <section className="pt-32 md:pt-40 pb-12 md:pb-16 bg-gradient-warm border-b border-border/60">
    <div className="container max-w-4xl">
      {eyebrow && (
        <div className="text-xs uppercase tracking-[0.22em] text-accent font-medium mb-4">
          — {eyebrow}
        </div>
      )}
      <h1 className="font-display text-4xl md:text-6xl font-medium leading-[1.05] text-balance">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
      {children && <div className="mt-8">{children}</div>}
    </div>
  </section>
);
