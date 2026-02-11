"use client";

export default function LandingHeader() {
	return (
		<header className="w-full py-4 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 transition-all">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
				<div className="flex items-center gap-2 md:gap-3">
					<div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">
						B
					</div>
					<h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">BuyAnyCar</h1>
				</div>
				<nav className="flex items-center gap-1 md:gap-2">
					<a href="/landingPage/cars" className="px-3 py-2 md:px-4 md:py-2 rounded-lg text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all">Browse Cars</a>
					<a href="/landingPage/wishlist" className="px-3 py-2 md:px-4 md:py-2 rounded-lg text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all">Wishlist</a>
					<a href="/admin" className="ml-2 px-4 py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:opacity-90 transition-all shadow-sm">Admin Access</a>
				</nav>
			</div>
		</header>
	);
}
