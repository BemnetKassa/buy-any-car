"use client";

export default function LandingHero() {
	return (
		<section className="w-full flex flex-col items-center justify-center py-16 px-4 text-center rounded-2xl shadow mb-10 relative overflow-hidden min-h-[400px] bg-transparent">
			
			<div className="relative z-10 w-full flex flex-col items-center justify-center">
				<h1 className="text-5xl md:text-6xl font-extrabold text-blue-100 dark:text-blue-200 mb-4 drop-shadow-lg">Find Your Next Car</h1>
				<p className="text-xl md:text-2xl text-blue-50 dark:text-blue-100 mb-8 max-w-2xl mx-auto drop-shadow">
					BuyAnyCar makes it easy to browse, compare, and buy the perfect car for you. Enjoy a seamless experience, advanced filters, and trusted listings.
				</p>
				<a href="/landingPage/cars" className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-bold text-lg shadow-lg hover:from-blue-700 hover:to-blue-900 transition">Browse Cars</a>
			</div>
		</section>
	);
}
