
import { useState } from "react";
import { useRouter } from "next/navigation";


	const [model, setModel] = useState("");
	const [price, setPrice] = useState("");
	const [image, setImage] = useState("");
	const router = useRouter();

	// Save car to localStorage and redirect to landing page
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const newCar = { model, price, image };
		let cars = [];
		if (typeof window !== "undefined") {
			const stored = localStorage.getItem("cars");
			cars = stored ? JSON.parse(stored) : [];
			cars.push(newCar);
			localStorage.setItem("cars", JSON.stringify(cars));
		}
		setModel("");
		setPrice("");
		setImage("");
		router.push("/landingPage");
	};

	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
			<div className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow p-8">
				<h1 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300">Admin Dashboard</h1>
				<form onSubmit={handleSubmit} className="space-y-4 mb-8">
					<div>
						<label className="block text-gray-700 dark:text-gray-200 mb-1">Car Model</label>
						<input
							type="text"
							value={model}
							onChange={e => setModel(e.target.value)}
							className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-700 dark:text-white"
							required
						/>
					</div>
					<div>
						<label className="block text-gray-700 dark:text-gray-200 mb-1">Price ($)</label>
						<input
							type="number"
							value={price}
							onChange={e => setPrice(e.target.value)}
							className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-700 dark:text-white"
							required
						/>
					</div>
					<div>
						<label className="block text-gray-700 dark:text-gray-200 mb-1">Image URL</label>
						<input
							type="url"
							value={image}
							onChange={e => setImage(e.target.value)}
							className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-700 dark:text-white"
							required
						/>
					</div>
					<button type="submit" className="w-full py-2 px-4 bg-blue-700 text-white rounded hover:bg-blue-800 transition font-semibold">Add Car</button>
				</form>
				<div>
					<h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Manage Cars</h2>
					<p className="text-gray-500 dark:text-gray-400">(Car management features coming soon...)</p>
				</div>
			</div>
		</div>
	);
}
