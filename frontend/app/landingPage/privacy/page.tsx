import LandingHeader from "../../components/landing/header";
import LandingFooter from "../../components/landing/footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen font-sans flex flex-col">
      <LandingHeader />
      <main className="flex-1 w-full flex flex-col items-center bg-gradient-to-r from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 px-6 py-16">
        <section className="max-w-4xl w-full bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-8 md:p-12 border border-blue-100 dark:border-gray-800">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 dark:text-blue-300 mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-gray-700 dark:text-gray-200 text-lg mb-4">
            We respect your privacy and are committed to protecting your personal information when you use BuyAnyCar.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-3">
            Information you provide, such as contact details or preferences, is used only to operate and improve the platform, communicate with you, and keep your experience secure.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-3">
            We do not sell your data. Limited information may be shared with trusted service providers solely to support features like hosting, analytics, or security.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            As the platform evolves, this policy may be updated. When that happens, we’ll highlight the changes so you can review them easily.
          </p>
        </section>
      </main>
      <LandingFooter />
    </div>
  );
}
