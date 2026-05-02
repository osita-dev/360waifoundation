import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Mission } from "@/components/site/Mission";
import { Impact } from "@/components/site/Impact";
import { Programs } from "@/components/site/Programs";
import { CampaignCard } from "@/components/site/CampaignCard";
import { Story } from "@/components/site/Story";
import { StoriesPreview } from "@/components/site/StoriesPreview";
import { Testimonials } from "@/components/site/Testimonials";
import { GetInvolved } from "@/components/site/GetInvolved";
import { DonateBanner } from "@/components/site/DonateBanner";
import { Footer } from "@/components/site/Footer";
import { DonateDialog } from "@/components/site/DonateDialog";

const Index = () => {
  const [donateOpen, setDonateOpen] = useState(false);
  const openDonate = () => setDonateOpen(true);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onDonate={openDonate} />
      <main>
        <Hero onDonate={openDonate} />
        <Mission />
        <Impact />
        <Programs />
        <CampaignCard onDonate={openDonate} />
        <Story />
        <StoriesPreview />
        <Testimonials />
        <GetInvolved />
        <DonateBanner onDonate={openDonate} />
      </main>
      <Footer />
      <DonateDialog open={donateOpen} onOpenChange={setDonateOpen} />
    </div>
  );
};

export default Index;
