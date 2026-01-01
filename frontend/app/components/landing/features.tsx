"use client";

export default function LandingFeatures() {
	 return (
		 <section className="w-full py-16 px-0 bg-gradient-to-r from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 animate-fadein">
			 <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-700 dark:text-blue-300 mb-12 tracking-tight">Why Choose BuyAnyCar?</h2>
			 <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
				 <div className="bg-white dark:bg-gray-900 shadow-lg p-8 flex flex-col items-center text-center border border-blue-100 dark:border-gray-800 rounded-2xl transition-transform duration-200 hover:scale-105 hover:shadow-xl">
					 <svg className="mb-4 h-12 w-12 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
					 <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-200">Advanced Search & Filters</h3>
					 <p className="text-gray-600 dark:text-gray-300">Quickly find your perfect car with powerful search, category, price, and build date filters.</p>
				 </div>
				 <div className="bg-white dark:bg-gray-900 shadow-lg p-8 flex flex-col items-center text-center border border-blue-100 dark:border-gray-800 rounded-2xl transition-transform duration-200 hover:scale-105 hover:shadow-xl">
					 <svg className="mb-4 h-12 w-12 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
					 <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-200">Trusted Listings</h3>
					 <p className="text-gray-600 dark:text-gray-300">All cars are posted by verified admins, ensuring you see only genuine and up-to-date offers.</p>
				 </div>
				 <div className="bg-white dark:bg-gray-900 shadow-lg p-8 flex flex-col items-center text-center border border-blue-100 dark:border-gray-800 rounded-2xl transition-transform duration-200 hover:scale-105 hover:shadow-xl">
					 <svg className="mb-4 h-12 w-12 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
					 <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-200">Seamless Experience</h3>
					 <p className="text-gray-600 dark:text-gray-300">Enjoy a fast, modern, and mobile-friendly interface for browsing and managing cars.</p>
				 </div>
			 </div>
		 </section>
	 );
}
