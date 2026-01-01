"use client";

export default function LandingFooter() {
	return (
		<footer className="w-full py-8 mt-16 bg-gradient-to-r from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 text-center text-gray-500 dark:text-gray-400">
			<hr className="mb-6 border-blue-100 dark:border-gray-800" />
			<div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 mb-4 gap-4">
				<div className="flex gap-4">
					<a href="#" aria-label="Twitter" className="hover:text-blue-500 transition"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37c-.83.5-1.75.87-2.72 1.07A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.1.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.83 1.92 3.61-.71-.02-1.38-.22-1.97-.54v.05c0 2.1 1.49 3.85 3.47 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.11 2.9 3.97 2.93A8.6 8.6 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.13 12.13 0 0 0 8.29 21c7.55 0 11.69-6.26 11.69-11.69 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22.46 6z"/></svg></a>
					<a href="#" aria-label="Facebook" className="hover:text-blue-700 transition"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.92.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.104C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0z"/></svg></a>
					<a href="#" aria-label="Instagram" className="hover:text-pink-500 transition"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.396 3.678 1.32c-.924.924-1.189 2.097-1.248 3.374C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.059 1.277.324 2.45 1.248 3.374.924.924 2.097 1.189 3.374 1.248C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.277-.059 2.45-.324 3.374-1.248.924-.924 1.189-2.097 1.248-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.277-.324-2.45-1.248-3.374-.924-.924-2.097-1.189-3.374-1.248C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg></a>
				</div>
				<div className="flex gap-6">
					<a href="#" className="hover:text-blue-700 transition">About</a>
					<a href="#" className="hover:text-blue-700 transition">Contact</a>
					<a href="#" className="hover:text-blue-700 transition">Privacy</a>
				</div>
			</div>
			<div className="text-sm">
				&copy; {new Date().getFullYear()} BuyAnyCar. All rights reserved.
			</div>
		</footer>
	);
}
