import LandingHeader from "../../components/landing/header";
import LandingFooter from "../../components/landing/footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen font-sans flex flex-col">
      <LandingHeader />
      <main className="flex-1 w-full flex flex-col items-center bg-gradient-to-r from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 px-6 py-16">
        <section className="max-w-4xl w-full bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-8 md:p-12 border border-blue-100 dark:border-gray-800">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700 dark:text-blue-300 mb-4 tracking-tight">
            Contact Us
          </h1>
          <a
            href="/landingPage/dashboard"
            className="inline-block mb-6 text-sm font-medium text-blue-700 dark:text-blue-300 hover:underline"
          >
            ← Back to dashboard
          </a>
          <p className="text-gray-700 dark:text-gray-200 text-lg mb-6">
            Have a question, suggestion, or need support? We’d love to hear from you.
          </p>
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <p>
              <span className="font-semibold">Email:</span> support@buyanycar.com
            </p>
            <p>
              <span className="font-semibold">Business hours:</span> Monday – Friday, 9:00 AM – 6:00 PM
            </p>
            <p>
              For urgent issues related to listings or account access, please include your registered email and any relevant details so we can assist you quickly.
            </p>
          </div>
        </section>
      </main>
      <LandingFooter />
    </div>
  );
}
