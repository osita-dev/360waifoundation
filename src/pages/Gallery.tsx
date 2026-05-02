import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { galleryByYear } from "@/data/gallery";

const GalleryPage = () => {
  const grouped = galleryByYear();

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="13 years of impact"
        title={<>Moments from <span className="italic text-primary">the work.</span></>}
        subtitle="A visual record of community days, classrooms, kitchens, and quiet milestones — from 2013 to today."
      />

      <section className="py-12 md:py-16">
        <div className="container">
          {grouped.map(([year, items]) => (
            <div key={year} className="mb-16 last:mb-0">
              <div className="flex items-baseline gap-4 mb-6 sticky top-20 bg-background/80 backdrop-blur-sm py-3 z-10">
                <h2 className="font-display text-4xl md:text-5xl font-medium text-primary">{year}</h2>
                <div className="text-sm text-muted-foreground">
                  {items.length} {items.length === 1 ? "moment" : "moments"}
                </div>
                <div className="flex-1 h-px bg-border ml-4" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {items.map((item) => (
                  <figure
                    key={item.id}
                    className="group rounded-xl overflow-hidden bg-card border border-border hover:shadow-soft transition-all"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.caption}
                        loading="lazy"
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <figcaption className="p-3 text-xs text-muted-foreground leading-relaxed">
                      {item.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
};

export default GalleryPage;
