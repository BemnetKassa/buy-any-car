"use client";

import LandingHeader from "../../components/landing/header";
import LandingFooter from "../../components/landing/footer";
import LandingHero from "../../components/landing/hero";
import LandingFeatures from "../../components/landing/features";

export default function LandingDashboardPage() {
  return (
    <div className="min-h-screen font-sans flex flex-col bg-gray-50 dark:bg-gray-950">
      <LandingHeader />
      <main className="flex-1 w-full flex flex-col">
        {/* Hero Section with Background */}
        <div className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
             <img
              src="/cars.jpg"
              alt="Luxury Cars"
              className="w-full h-full object-cover"
            />
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <LandingHero />
          </div>
        </div>

        {/* Features Section */}
        <div className="w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
             <LandingFeatures />
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}
