import { useState } from "react";
import { z } from "zod";
import { HandHeart, Handshake, Send, Heart, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { DonateDialog } from "@/components/site/DonateDialog";
import { cn } from "@/lib/utils";

const volunteerSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  location: z.string().trim().min(1, "Location is required").max(120),
  skills: z.string().trim().min(10, "Tell us a little more about what you bring").max(1000),
  availability: z.string().min(1),
});

const partnerSchema = z.object({
  organization: z.string().trim().min(1, "Organization name is required").max(120),
  contact: z.string().trim().min(1, "Contact person is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  partnershipType: z.string().min(1),
  message: z.string().trim().min(10, "Tell us a little more").max(2000),
});

type Tab = "volunteer" | "partner" | "donate";

const Tabs = ({ active, onChange }: { active: Tab; onChange: (t: Tab) => void }) => {
  const items: { key: Tab; label: string; icon: typeof HandHeart }[] = [
    { key: "donate", label: "Donate", icon: Heart },
    { key: "volunteer", label: "Volunteer", icon: HandHeart },
    { key: "partner", label: "Partner", icon: Handshake },
  ];
  return (
    <div className="grid grid-cols-3 p-1 bg-secondary rounded-xl max-w-xl">
      {items.map((i) => (
        <button
          key={i.key}
          onClick={() => onChange(i.key)}
          className={cn(
            "py-2.5 text-sm font-medium rounded-lg transition-all inline-flex items-center justify-center gap-2",
            active === i.key ? "bg-card shadow-soft text-foreground" : "text-muted-foreground hover:text-foreground"
          )}
        >
          <i.icon className="h-4 w-4" /> {i.label}
        </button>
      ))}
    </div>
  );
};

const Field = ({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) => (
  <div>
    <label className="text-sm font-medium block mb-1.5">{label}</label>
    {children}
    {error && <p className="text-xs text-destructive mt-1">{error}</p>}
  </div>
);

const baseInput =
  "w-full h-11 px-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm";

const VolunteerForm = () => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", location: "", skills: "", availability: "Weekends",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = volunteerSchema.safeParse(form);
    if (!parsed.success) {
      const f: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (f[i.path[0] as string] = i.message));
      setErrors(f);
      return;
    }
    setErrors({});
    setDone(true);
    toast({ title: "Application received.", description: "Blessing, our coordinator, will reach out within 5 working days." });
  };

  if (done) {
    return (
      <div className="bg-card border border-border rounded-2xl p-10 text-center">
        <div className="h-14 w-14 rounded-full bg-primary/10 text-primary grid place-items-center mx-auto mb-4">
          <Check className="h-7 w-7" />
        </div>
        <h3 className="font-display text-2xl">Thank you for stepping forward.</h3>
        <p className="text-muted-foreground mt-2 max-w-sm mx-auto">
          Our volunteer coordinator will reach out within 5 working days to match you with a program.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="bg-card border border-border rounded-2xl p-8 space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Full name" error={errors.name}>
          <input className={baseInput} maxLength={100} value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </Field>
        <Field label="Email" error={errors.email}>
          <input type="email" className={baseInput} maxLength={255} value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </Field>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Phone (optional)">
          <input className={baseInput} maxLength={40} value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        </Field>
        <Field label="Location (city / state)" error={errors.location}>
          <input className={baseInput} maxLength={120} value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })} />
        </Field>
      </div>
      <Field label="Availability">
        <select className={baseInput} value={form.availability}
          onChange={(e) => setForm({ ...form, availability: e.target.value })}>
          <option>Weekends</option>
          <option>Weekday evenings</option>
          <option>Full-time</option>
          <option>Remote / online only</option>
          <option>One-off events</option>
        </select>
      </Field>
      <Field label="What skills do you bring? What kind of help feels right?" error={errors.skills}>
        <textarea rows={5} maxLength={1000} value={form.skills}
          onChange={(e) => setForm({ ...form, skills: e.target.value })}
          className="w-full px-3 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-y" />
      </Field>
      <Button type="submit" variant="donate" size="lg"><Send /> Send application</Button>
    </form>
  );
};

const PartnerForm = () => {
  const [form, setForm] = useState({
    organization: "", contact: "", email: "", partnershipType: "Funding partner", message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = partnerSchema.safeParse(form);
    if (!parsed.success) {
      const f: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (f[i.path[0] as string] = i.message));
      setErrors(f);
      return;
    }
    setErrors({});
    setDone(true);
    toast({ title: "Inquiry received.", description: "Our partnerships team will respond within 5 working days." });
  };

  if (done) {
    return (
      <div className="bg-card border border-border rounded-2xl p-10 text-center">
        <div className="h-14 w-14 rounded-full bg-primary/10 text-primary grid place-items-center mx-auto mb-4">
          <Check className="h-7 w-7" />
        </div>
        <h3 className="font-display text-2xl">Thank you.</h3>
        <p className="text-muted-foreground mt-2 max-w-sm mx-auto">
          Our partnerships team will be in touch within 5 working days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="bg-card border border-border rounded-2xl p-8 space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Organization name" error={errors.organization}>
          <input className={baseInput} maxLength={120} value={form.organization}
            onChange={(e) => setForm({ ...form, organization: e.target.value })} />
        </Field>
        <Field label="Contact person" error={errors.contact}>
          <input className={baseInput} maxLength={100} value={form.contact}
            onChange={(e) => setForm({ ...form, contact: e.target.value })} />
        </Field>
      </div>
      <Field label="Email" error={errors.email}>
        <input type="email" className={baseInput} maxLength={255} value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })} />
      </Field>
      <Field label="Partnership type">
        <select className={baseInput} value={form.partnershipType}
          onChange={(e) => setForm({ ...form, partnershipType: e.target.value })}>
          <option>Funding partner</option>
          <option>Implementation partner</option>
          <option>Corporate sponsorship</option>
          <option>Media / storytelling</option>
          <option>Other</option>
        </select>
      </Field>
      <Field label="Tell us about the partnership you have in mind" error={errors.message}>
        <textarea rows={6} maxLength={2000} value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-3 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-y" />
      </Field>
      <Button type="submit" variant="donate" size="lg"><Send /> Send inquiry</Button>
    </form>
  );
};

const GetInvolvedPage = () => {
  const [tab, setTab] = useState<Tab>("donate");
  const [donateOpen, setDonateOpen] = useState(false);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Get involved"
        title={<>Three ways to <span className="italic text-primary">stand with us.</span></>}
        subtitle="Whatever you bring — money, time, or a partnership — we'll match it to where it lands hardest."
      />

      <section className="py-14">
        <div className="container">
          <Tabs active={tab} onChange={setTab} />

          <div className="mt-10 max-w-3xl">
            {tab === "donate" && (
              <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
                <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">Give</div>
                <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight mb-3">
                  The most useful thing you can do.
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                  94¢ of every dollar reaches our programs. Monthly donors fund our planning;
                  one-time gifts fund our momentum. Both matter.
                </p>
                <div className="grid sm:grid-cols-3 gap-3 mb-6">
                  {[
                    { amt: "$25", what: "5 school meals" },
                    { amt: "$100", what: "A month of tutoring" },
                    { amt: "$500", what: "A scholarship term" },
                  ].map((g) => (
                    <div key={g.amt} className="bg-secondary/60 rounded-xl p-4 text-center border border-border">
                      <div className="font-display text-2xl text-primary">{g.amt}</div>
                      <div className="text-xs text-muted-foreground mt-1">{g.what}</div>
                    </div>
                  ))}
                </div>
                <Button variant="donate" size="lg" onClick={() => setDonateOpen(true)}>
                  <Heart className="fill-current" /> Donate now
                </Button>
              </div>
            )}
            {tab === "volunteer" && <VolunteerForm />}
            {tab === "partner" && <PartnerForm />}
          </div>
        </div>
      </section>

      <DonateDialog open={donateOpen} onOpenChange={setDonateOpen} />
    </SiteLayout>
  );
};

export default GetInvolvedPage;
