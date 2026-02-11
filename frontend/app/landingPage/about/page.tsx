import LandingHeader from "../../components/landing/header";
import LandingFooter from "../../components/landing/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen font-sans flex flex-col bg-gray-50 dark:bg-gray-950">
      <LandingHeader />
      <main className="flex-1 w-full flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col space-y-6 order-2 lg:order-1 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Driving Trust,<br/>Delivering Dreams.
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              BuyAnyCar is a modern platform designed to make buying a car simple, transparent, and enjoyable. We bring together curated listings, powerful search tools, and a clean interface so you can focus on finding the right car.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Our goal is to give buyers confidence. All cars are managed by verified admins, and we focus on clear information, up-to-date listings, and an intuitive experience across desktop and mobile.
            </p>
            
            <div className="pt-4">
                 <a
                    href="/landingPage/dashboard"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-all hover:-translate-y-0.5"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    Back to Dashboard
                </a>
            </div>
          </div>

          {/* Video Section */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 order-1 lg:order-2 transform transition-transform hover:scale-[1.02] duration-500">
            <video 
                src="/cars.mp4" 
                controls 
                autoPlay 
                muted 
                loop 
                className="w-full h-auto object-cover bg-gray-900"
            />
          </div>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}
