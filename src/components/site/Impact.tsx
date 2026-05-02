const stats = [
  { value: "12,400+", label: "Lives directly reached" },
  { value: "38", label: "Communities served" },
  { value: "94¢", label: "Of every $1 to programs" },
  { value: "13 yrs", label: "Of grounded fieldwork" },
];

export const Impact = () => (
  <section className="py-16 md:py-20 bg-primary text-primary-foreground">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
        {stats.map((s) => (
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
);
