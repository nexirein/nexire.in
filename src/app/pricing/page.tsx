import { Navbar } from "@/components/ui/navbar";
import { PricingSection } from "@/components/ui/pricing-section";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-neutral-100">
      <div className="fixed top-0 left-0 right-0 z-[100]">
        <Navbar />
      </div>
      <div className="pt-[80px]">
        <PricingSection />
      </div>
    </div>
  );
}