"use client";

export default function LandingHeader() {
	return (
		<header className="w-full py-6 bg-white shadow-md dark:bg-gray-900">
			<div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
				<h1 className="text-2xl font-bold text-blue-700 dark:text-blue-300">BuyAnyCar</h1>
				<nav>
					<a href="/landingPage/cars" className="text-blue-700 dark:text-blue-200 font-medium hover:underline mr-6">Cars</a>
					<a href="/admin" className="text-blue-700 dark:text-blue-200 font-medium hover:underline">Admin</a>
				</nav>
			</div>
		</header>
	);
}
