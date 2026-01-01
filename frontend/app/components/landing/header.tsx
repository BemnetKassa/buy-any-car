"use client";

export default function LandingHeader() {
	return (
		<header className="w-full py-4 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-shadow">
			<div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
				<div className="flex items-center gap-3">
					<img src="/logo.svg" alt="BuyAnyCar Logo" className="h-8 w-8 rounded-full shadow" />
					<h1 className="text-2xl font-extrabold text-blue-700 dark:text-blue-300 tracking-tight">BuyAnyCar</h1>
				</div>
				<nav className="flex gap-4">
					<a href="/landingPage/cars" className="px-4 py-2 rounded-lg text-blue-700 dark:text-blue-200 font-medium hover:bg-blue-50 dark:hover:bg-gray-800 hover:scale-105 transition-all duration-200">Cars</a>
					<a href="/admin" className="px-4 py-2 rounded-lg text-blue-700 dark:text-blue-200 font-medium hover:bg-blue-50 dark:hover:bg-gray-800 hover:scale-105 transition-all duration-200">Admin</a>
				</nav>
			</div>
		</header>
	);
}
