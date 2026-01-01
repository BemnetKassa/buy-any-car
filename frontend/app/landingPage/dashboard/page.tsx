"use client";

import LandingHeader from "../../components/landing/header";
import LandingFooter from "../../components/landing/footer";
import LandingHero from "../../components/landing/hero";
import LandingFeatures from "../../components/landing/features";

export default function LandingDashboardPage() {
  return (
    <div className="min-h-screen font-sans flex flex-col">
      <LandingHeader />
      <main className="flex-1 w-full flex flex-col items-stretch">
        <div className="w-full shadow overflow-hidden min-h-[400px]" style={{position: 'relative', margin: 0, borderRadius: 0}}>
          <img
            src="/cars.jpg"
            alt="Cars background"
            className="absolute inset-0 w-full h-full object-cover z-0"
            style={{}}
          />
          <div className="relative z-10">
            <LandingHero />
          </div>
        </div>
        <div className="w-full shadow bg-blue-50 dark:bg-gray-900" style={{margin: 0, borderRadius: 0}}>
          <LandingFeatures />
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}
