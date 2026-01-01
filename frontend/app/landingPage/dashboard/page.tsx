"use client";

import LandingHeader from "../../components/landing/header";
import LandingFooter from "../../components/landing/footer";
import LandingHero from "../../components/landing/hero";

export default function LandingDashboardPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800 font-sans flex flex-col">
      <LandingHeader />
      <main className="flex-1 max-w-5xl mx-auto px-6 py-16 flex flex-col items-center w-full">
        <LandingHero />
      </main>
      <LandingFooter />
    </div>
  );
}
