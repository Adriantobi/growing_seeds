'use client'

import CallToActionSection from "./sections/call-to-action";
import FeaturesSection from "./sections/features";
import HeroSection from "./sections/hero";
import PricingSection from "./sections/pricing";

export default function Home() {
  return (
    <main className='flex flex-col gap-40 max-w-screen-xl w-full h-full text-sm mx-auto px-6'>
      <HeroSection /> 
      <FeaturesSection />
      <PricingSection />
      <CallToActionSection />
    </main>
  );
}
