"use client";
import { useEffect, useState } from "react";

export default function LandingPage() {
	const [cars, setCars] = useState<Array<{ model: string; price: string; image: string; type?: string; age?: string }>>([]);
	const [search, setSearch] = useState("");
	const [filterType, setFilterType] = useState("");
	const [filterPrice, setFilterPrice] = useState<[number, number]>([0, 100000]);
	const [filterAge, setFilterAge] = useState<[number, number]>([0, 30]);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const stored = localStorage.getItem("cars");
			setCars(stored ? JSON.parse(stored) : []);
		}
	}, []);

	// Filtering logic
	const filteredCars = cars.filter(car => {
		const matchesSearch =
			search === "" ||
			car.model.toLowerCase().includes(search.toLowerCase());
		const matchesType =
			!filterType || (car.type && car.type === filterType);
		const priceNum = Number(car.price);
		const matchesPrice =
			priceNum >= filterPrice[0] && priceNum <= filterPrice[1];
		const ageNum = Number(car.age || 0);
		const matchesAge =
			ageNum >= filterAge[0] && ageNum <= filterAge[1];
		return matchesSearch && matchesType && matchesPrice && matchesAge;
	});

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800 font-sans">
			<header className="w-full py-6 bg-white shadow-md dark:bg-gray-900">
				<div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
					<h1 className="text-2xl font-bold text-blue-700 dark:text-blue-300">BuyAnyCar</h1>
					<nav>
						<a href="#cars" className="text-blue-700 dark:text-blue-200 font-medium hover:underline mr-6">Cars</a>
						<a href="/admin" className="text-blue-700 dark:text-blue-200 font-medium hover:underline">Admin</a>
					</nav>
				</div>
			</header>
			<main className="max-w-5xl mx-auto px-6 py-16 flex flex-col items-center">
				<section className="text-center mb-16">
					<h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Find Your Dream Car</h2>
					<p className="text-lg text-gray-700 dark:text-gray-300 mb-8">Browse our collection of new and used cars. The best deals, all in one place.</p>
					<a href="#cars" className="inline-block px-8 py-3 bg-blue-700 text-white rounded-full font-semibold shadow hover:bg-blue-800 transition">Browse Cars</a>
				</section>
								<section id="cars" className="w-full">
									<h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Available Cars</h3>
									{/* Search and Filters */}
									<div className="mb-6 flex flex-col gap-4">
										<input
											type="text"
											placeholder="Search by model..."
											value={search}
											onChange={e => setSearch(e.target.value)}
											className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-700 dark:text-white"
										/>
										<div className="flex flex-wrap gap-4">
											<select
												value={filterType}
												onChange={e => setFilterType(e.target.value)}
												className="px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-700 dark:text-white"
											>
												<option value="">All Types</option>
												<option value="Sedan">Sedan</option>
												<option value="SUV">SUV</option>
												<option value="Truck">Truck</option>
												<option value="Coupe">Coupe</option>
												<option value="Convertible">Convertible</option>
												<option value="Hatchback">Hatchback</option>
												<option value="Van">Van</option>
											</select>
											<div className="flex items-center gap-2">
												<label className="text-gray-700 dark:text-gray-200">Price:</label>
												<input
													type="number"
													min={0}
													max={100000}
													value={filterPrice[0]}
													onChange={e => setFilterPrice([Number(e.target.value), filterPrice[1]])}
													className="w-20 px-2 py-1 border rounded dark:bg-gray-700 dark:text-white"
												/>
												<span>-</span>
												<input
													type="number"
													min={0}
													max={100000}
													value={filterPrice[1]}
													onChange={e => setFilterPrice([filterPrice[0], Number(e.target.value)])}
													className="w-20 px-2 py-1 border rounded dark:bg-gray-700 dark:text-white"
												/>
											</div>
											<div className="flex items-center gap-2">
												<label className="text-gray-700 dark:text-gray-200">Age:</label>
												<input
													type="number"
													min={0}
													max={30}
													value={filterAge[0]}
													onChange={e => setFilterAge([Number(e.target.value), filterAge[1]])}
													className="w-16 px-2 py-1 border rounded dark:bg-gray-700 dark:text-white"
												/>
												<span>-</span>
												<input
													type="number"
													min={0}
													max={30}
													value={filterAge[1]}
													onChange={e => setFilterAge([filterAge[0], Number(e.target.value)])}
													className="w-16 px-2 py-1 border rounded dark:bg-gray-700 dark:text-white"
												/>
											</div>
										</div>
									</div>
									<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
										{filteredCars.length === 0 ? (
											<div className="col-span-full text-gray-500 dark:text-gray-400">No cars available yet.</div>
										) : (
											filteredCars.map((car, idx) => (
												<div key={idx} className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 flex flex-col items-center">
													<div className="w-full h-40 bg-gray-200 dark:bg-gray-700 rounded mb-4 flex items-center justify-center overflow-hidden">
														{car.image ? (
															<img src={car.image} alt={car.model} className="object-cover h-full w-full" />
														) : (
															<span className="text-gray-400 dark:text-gray-500">Car Image</span>
														)}
													</div>
													<h4 className="text-lg font-semibold mb-2">{car.model}</h4>
													<p className="text-gray-600 dark:text-gray-300 mb-2">${car.price}</p>
													<div className="text-xs text-gray-500 dark:text-gray-400 mb-2">{car.type} {car.age && `| ${car.age} yrs`}</div>
													<button className="mt-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">View Details</button>
												</div>
											))
										)}
									</div>
								</section>
			</main>
			<footer className="w-full py-6 mt-16 bg-white dark:bg-gray-900 text-center text-gray-500 dark:text-gray-400">
				&copy; {new Date().getFullYear()} BuyAnyCar. All rights reserved.
			</footer>
		</div>
	);
}
