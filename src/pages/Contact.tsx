import { useState } from "react";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";

const reasons = [
  "General question",
  "Partnership inquiry",
  "Press / media",
  "Volunteer interest",
  "Donation question",
];

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  reason: z.string().min(1, "Please select a reason"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
});

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", reason: reasons[0], message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (fieldErrors[i.path[0] as string] = i.message));
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSent(true);
    toast({ title: "Message sent.", description: "We'll get back to you within 2 working days." });
    setForm({ name: "", email: "", reason: reasons[0], message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact"
        title={<>Let's <span className="italic text-primary">talk.</span></>}
        subtitle="A real person reads every message. We respond within two working days."
      />

      <section className="py-14 md:py-20">
        <div className="container grid lg:grid-cols-12 gap-10">
          {/* Form */}
          <form onSubmit={submit} className="lg:col-span-7 bg-card border border-border rounded-2xl p-8 space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium block mb-1.5">Name</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  maxLength={100}
                  className="w-full h-11 px-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="text-sm font-medium block mb-1.5">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  maxLength={255}
                  className="w-full h-11 px-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium block mb-1.5">Reason for contact</label>
              <select
                value={form.reason}
                onChange={(e) => setForm({ ...form, reason: e.target.value })}
                className="w-full h-11 px-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              >
                {reasons.map((r) => <option key={r}>{r}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium block mb-1.5">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={6}
                maxLength={2000}
                className="w-full px-3 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-y"
              />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
            </div>
            <Button type="submit" variant="donate" size="lg" disabled={sent}>
              <Send /> {sent ? "Sent — thank you" : "Send message"}
            </Button>
          </form>

          {/* Contact info */}
          <aside className="lg:col-span-5 space-y-5">
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary grid place-items-center shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">Headquarters</div>
                  <div className="text-sm text-muted-foreground">
                    12 Awolowo Road<br />Ikoyi, Lagos, Nigeria
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary grid place-items-center shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <a href="mailto:hello@360dwaif.org" className="text-sm text-muted-foreground hover:text-primary">
                    hello@360dwaif.org
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary grid place-items-center shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-sm text-muted-foreground">+234 (0) 700 360 0000</div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-gradient-warm relative">
              <div className="absolute inset-0 grid place-items-center text-muted-foreground">
                <div className="text-center">
                  <MapPin className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-sm font-medium">Lagos · Ikoyi</div>
                  <div className="text-xs">Map preview</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_60%,hsl(var(--primary)/0.15),transparent_60%)]" />
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
};

export default ContactPage;
