'use client'

import FeaturesSection from "./sections/features";
import HeroSection from "./sections/hero";
import PricingSection from "./sections/pricing";

export default function Home() {
  return (
    <main className='flex flex-col gap-40 max-w-screen-xl w-full h-full text-sm mx-auto lg:px-6 px-5'>
      <HeroSection /> 
      <FeaturesSection />
      <PricingSection />
    </main>
  );
}
