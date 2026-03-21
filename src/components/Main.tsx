"use client";

import { AuroraHero } from "@/components/ui/futurastic-hero-section";
import { Navbar } from "@/components/ui/navbar";
import CountdownBanner from "@/components/ui/countdown-banner";

const Main = () => {
  return (
    <div className="min-h-screen bg-[#0a0a1e]">
      <div className="fixed top-0 left-0 right-0 z-[100]">
        <CountdownBanner />
        <Navbar />
      </div>
      <div className="pt-[120px]"> {/* Offset for fixed header */}
        <AuroraHero />
      </div>
    </div>
  );
};

export { Main };