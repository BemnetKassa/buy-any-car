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
          <div className="relative order-1 lg:order-2 perspective-1000">
            {/* Decorative Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl opacity-30 blur-2xl animate-pulse"></div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-gray-700 bg-gray-900 group transform transition-all duration-500 hover:rotate-1 hover:shadow-blue-500/20">
                <video 
                    src="/cars.mp4" 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                
                {/* Showcase Badge/Text */}
                <div className="absolute bottom-6 left-6 pointer-events-none text-left z-10 transition-transform duration-500 group-hover:translate-x-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md text-white border border-white/30 uppercase tracking-wider mb-2 ring-1 ring-black/5">
                        <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
                        Live Preview
                    </span>
                    <h3 className="text-white text-2xl font-bold drop-shadow-lg">Experience Excellence</h3>
                    <p className="text-gray-200 text-sm mt-1 max-w-xs drop-shadow-md hidden sm:block">
                        Discover the quality and care put into every vehicle in our collection.
                    </p>
                </div>

                {/* Play Button Overlay (Decorative since it's autoplay) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                     <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-500">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                     </div>
                </div>
            </div>
          </div>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}
