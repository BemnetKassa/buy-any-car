"use client";

import LandingHeader from "../../components/landing/header";
import LandingFooter from "../../components/landing/footer";
import LandingHero from "../../components/landing/hero";
import LandingFeatures from "../../components/landing/features";

export default function LandingDashboardPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 font-sans flex flex-col">
      <LandingHeader />
      <main className="flex-1 max-w-5xl mx-auto px-6 py-16 flex flex-col items-center w-full">
        <div className="w-full rounded-2xl shadow mb-10 relative overflow-hidden min-h-[400px]">
          <img
            src="/app/components/pictures/cars.jpg"
            alt="Cars background"
            className="absolute inset-0 w-full h-full object-cover z-0"
            style={{ filter: "brightness(0.5) blur(2px)" }}
          />
          <div className="relative z-10">
            <LandingHero />
          </div>
        </div>
        <div className="w-full rounded-2xl shadow bg-blue-50 dark:bg-gray-900 p-8">
          <LandingFeatures />
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}
