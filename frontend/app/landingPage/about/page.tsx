import LandingHeader from "../../components/landing/header";
import LandingFooter from "../../components/landing/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen font-sans flex flex-col">
      <LandingHeader />
      <main className="flex-1 w-full flex flex-col items-center bg-gradient-to-r from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 px-6 py-16">
        <section className="max-w-4xl w-full bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-8 md:p-12 border border-blue-100 dark:border-gray-800">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 dark:text-blue-300 mb-4 tracking-tight">
            About BuyAnyCar
          </h1>
          <p className="text-gray-700 dark:text-gray-200 text-lg mb-4">
            BuyAnyCar is a modern platform designed to make buying a car simple, transparent, and enjoyable. We bring together curated listings, powerful search tools, and a clean interface so you can focus on finding the right car.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-3">
            Our goal is to give buyers confidence. All cars are managed by verified admins, and we focus on clear information, up-to-date listings, and an intuitive experience across desktop and mobile.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            As we grow, we will continue to add features that help you compare options, track favorites, and complete your purchase journey with ease.
          </p>
        </section>
      </main>
      <LandingFooter />
    </div>
  );
}
