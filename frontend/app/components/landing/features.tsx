"use client";

export default function LandingFeatures() {
	 return (
		 <section className="w-full py-20 bg-transparent">
			 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				 <div className="text-center mb-16">
					<h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">Why Choose BuyAnyCar?</h2>
					<p className="max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
						We provide the best tools and services to help you find your dream car safely and quickly.
					</p>
				 </div>
				 
				 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					 <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-gray-100 dark:border-gray-700">
						 <div className="h-14 w-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
							<svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
						 </div>
						 <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Advanced Search</h3>
						 <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
							Quickly find your perfect car with powerful search, category, price, and build date filters designed for precision.
						 </p>
					 </div>

					 <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-gray-100 dark:border-gray-700">
						 <div className="h-14 w-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
							<svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
						 </div>
						 <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Trusted Listings</h3>
						 <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
							All cars are posted by verified admins, ensuring you see only genuine, vetted, and up-to-date offers you can trust.
						 </p>
					 </div>

					 <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-gray-100 dark:border-gray-700">
						 <div className="h-14 w-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
							<svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
						 </div>
						 <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Seamless Experience</h3>
						 <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
							Enjoy a fast, modern, and mobile-friendly interface for browsing cars on any device, anywhere, anytime.
						 </p>
					 </div>
				 </div>
			 </div>
		 </section>
	 );
}
