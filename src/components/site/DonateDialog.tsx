import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Heart, Shield, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const presets = [25, 50, 100, 250];

export const DonateDialog = ({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) => {
  const [amount, setAmount] = useState<number>(50);
  const [custom, setCustom] = useState("");
  const [frequency, setFrequency] = useState<"once" | "monthly">("monthly");
  const [submitted, setSubmitted] = useState(false);

  const final = custom ? Number(custom) : amount;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onOpenChange(false);
    }, 2400);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md p-0 overflow-hidden bg-card border-border">
        {submitted ? (
          <div className="p-10 text-center">
            <div className="h-14 w-14 rounded-full bg-primary/10 text-primary grid place-items-center mx-auto mb-4">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h3 className="font-display text-2xl">Thank you.</h3>
            <p className="text-muted-foreground mt-2 text-sm">
              Your gift of <strong className="text-foreground">${final}</strong> will reach the field.
            </p>
          </div>
        ) : (
          <>
            <div className="bg-gradient-forest text-primary-foreground p-6">
              <DialogHeader>
                <DialogTitle className="font-display text-2xl flex items-center gap-2">
                  <Heart className="h-5 w-5 fill-current text-accent" /> Make a donation
                </DialogTitle>
                <DialogDescription className="text-primary-foreground/75">
                  100% transparent.
                </DialogDescription>
              </DialogHeader>
            </div>

            <form onSubmit={submit} className="p-6 space-y-5">
              <div className="grid grid-cols-2 p-1 bg-secondary rounded-lg">
                {(["monthly", "once"] as const).map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFrequency(f)}
                    className={cn(
                      "py-2 text-sm font-medium rounded-md transition-all capitalize",
                      frequency === f ? "bg-card shadow-soft text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {f === "monthly" ? "Monthly" : "One-time"}
                  </button>
                ))}
              </div>

              <div>
                <div className="grid grid-cols-4 gap-2">
                  {presets.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => { setAmount(p); setCustom(""); }}
                      className={cn(
                        "py-3 rounded-lg border text-sm font-medium transition-all",
                        !custom && amount === p
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      ${p}
                    </button>
                  ))}
                </div>
                <div className="relative mt-3">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                  <input
                    inputMode="numeric"
                    value={custom}
                    onChange={(e) => setCustom(e.target.value.replace(/\D/g, ""))}
                    placeholder="Other amount"
                    className="w-full h-11 pl-7 pr-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="text-xs text-muted-foreground bg-secondary/60 rounded-lg p-3">
                <strong className="text-foreground">${final}</strong>{" "}
                {frequency === "monthly" ? "per month" : "today"} can fund{" "}
                <strong className="text-foreground">
                  {Math.max(1, Math.floor(final / 5))} school meals
                </strong>{" "}
                or{" "}
                <strong className="text-foreground">
                  {Math.max(1, Math.floor(final / 25))} learning kits
                </strong>.
              </div>

              <Button type="submit" variant="donate" size="lg" className="w-full">
                <Heart className="fill-current" /> Give ${final} {frequency === "monthly" && "/ month"}
              </Button>

              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Shield className="h-3.5 w-3.5" /> Secure checkout · Tax-deductible receipt
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
