"use client";
import LandingHeader from "../../components/landing/header";
import LandingFooter from "../../components/landing/footer";

export default function LandingDashboardPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800 font-sans flex flex-col">
      <LandingHeader />
      <main className="flex-1 max-w-5xl mx-auto px-6 py-16 flex flex-col items-center w-full">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Welcome to BuyAnyCar</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center max-w-2xl">
          Browse our collection of new and used cars, filter by your preferences, and find the best deals. Use the navigation above to explore cars or access the admin panel if you are an administrator.
        </p>
        <a href="/landingPage/cars" className="inline-block px-8 py-3 bg-blue-700 text-white rounded-full font-semibold shadow hover:bg-blue-800 transition">Browse Cars</a>
      </main>
      <LandingFooter />
    </div>
  );
}
