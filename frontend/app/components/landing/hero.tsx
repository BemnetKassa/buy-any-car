"use client";

export default function LandingHero() {
	return (
		<section className="w-full flex flex-col items-center justify-center py-16 px-4 text-center bg-gradient-to-br from-blue-100/60 to-blue-200/40 dark:from-gray-900/60 dark:to-gray-800/40 rounded-2xl shadow mb-10">
			<h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 dark:text-blue-300 mb-4 drop-shadow-lg">Find Your Next Car</h1>
			<p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-2xl mx-auto">
				BuyAnyCar makes it easy to browse, compare, and buy the perfect car for you. Enjoy a seamless experience, advanced filters, and trusted listings.
			</p>
			<a href="/landingPage/cars" className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-bold text-lg shadow-lg hover:from-blue-700 hover:to-blue-900 transition">Browse Cars</a>
		</section>
	);
}
