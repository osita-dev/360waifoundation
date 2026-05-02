import { ReactNode, useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { DonateDialog } from "@/components/site/DonateDialog";

export const SiteLayout = ({ children }: { children: ReactNode }) => {
  const [donateOpen, setDonateOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar onDonate={() => setDonateOpen(true)} />
      <main className="flex-1">{children}</main>
      <Footer />
      <DonateDialog open={donateOpen} onOpenChange={setDonateOpen} />
    </div>
  );
};
