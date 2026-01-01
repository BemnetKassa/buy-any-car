"use client";

export default function LandingFooter() {
	return (
		<footer className="w-full py-6 mt-16 bg-white dark:bg-gray-900 text-center text-gray-500 dark:text-gray-400">
			&copy; {new Date().getFullYear()} BuyAnyCar. All rights reserved.
		</footer>
	);
}
