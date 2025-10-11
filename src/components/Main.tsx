"use client";

import { AuroraHero } from "@/components/ui/futurastic-hero-section";
import { Navbar } from "@/components/ui/navbar";

const Main = () => {
  return (
    <div className="min-h-screen bg-[#0a0a1e]">
      <Navbar />
      <AuroraHero />
    </div>
  );
};

export { Main };