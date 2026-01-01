"use client";

export default function LandingFeatures() {
	return (
		<section className="w-full max-w-5xl mx-auto py-12 px-4">
			<h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-700 dark:text-blue-300 mb-8">Why Choose BuyAnyCar?</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 flex flex-col items-center text-center border border-blue-100 dark:border-gray-800">
					<span className="mb-4 text-4xl">🔍</span>
					<h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-200">Advanced Search & Filters</h3>
					<p className="text-gray-600 dark:text-gray-300">Quickly find your perfect car with powerful search, category, price, and build date filters.</p>
				</div>
				<div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 flex flex-col items-center text-center border border-blue-100 dark:border-gray-800">
					<span className="mb-4 text-4xl">🛡️</span>
					<h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-200">Trusted Listings</h3>
					<p className="text-gray-600 dark:text-gray-300">All cars are posted by verified admins, ensuring you see only genuine and up-to-date offers.</p>
				</div>
				<div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 flex flex-col items-center text-center border border-blue-100 dark:border-gray-800">
					<span className="mb-4 text-4xl">⚡</span>
					<h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-200">Seamless Experience</h3>
					<p className="text-gray-600 dark:text-gray-300">Enjoy a fast, modern, and mobile-friendly interface for browsing and managing cars.</p>
				</div>
			</div>
		</section>
	);
}
