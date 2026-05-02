const stats = [
   { value: "12,400+", label: "Lives touched" },
  { value: "200+", label: "Communities reached" },
  { value: "13 yrs", label: "Years on the ground" },
  { value: "320", label: "Volunteers" },
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
