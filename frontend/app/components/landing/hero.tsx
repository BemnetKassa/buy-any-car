"use client";

export default function LandingHero() {
	return (
		<div className="w-full flex flex-col items-center justify-center text-center">
			<div className="w-full flex flex-col items-center justify-center animate-fade-in-up">
				<h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl tracking-tight">
					Find Your Dream Car
				</h1>
				<p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto drop-shadow-lg leading-relaxed">
					Experience the easiest way to buy cars. Browse thousands of trusted listings, compare prices, and drive away in your perfect match today.
				</p>
				<div className="flex flex-col sm:flex-row gap-4">
					<a href="/landingPage/cars" className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
						Browse Cars
					</a>
					<a href="/landingPage/about" className="px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
						Learn More
					</a>
				</div>
			</div>
		</div>
	);
}
