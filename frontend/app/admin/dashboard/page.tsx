"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [cars, setCars] = useState<Array<{ model: string; price: string; image: string }>>([]);
  const router = useRouter();

  useEffect(() => {
    // Auth check
    if (typeof window !== "undefined" && localStorage.getItem("admin-auth") !== "true") {
      router.push("/admin/auth");
    }
    // Load cars
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("cars");
      setCars(stored ? JSON.parse(stored) : []);
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCar = { model, price, image };
    const updatedCars = [...cars, newCar];
    setCars(updatedCars);
    if (typeof window !== "undefined") {
      localStorage.setItem("cars", JSON.stringify(updatedCars));
    }
    setModel("");
    setPrice("");
    setImage("");
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
          {cars.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400">No cars added yet.</p>
          ) : (
            <ul className="space-y-2">
              {cars.map((car, idx) => (
                <li key={idx} className="flex items-center gap-4 bg-gray-100 dark:bg-gray-700 rounded p-2">
                  <div className="w-16 h-12 bg-gray-200 dark:bg-gray-600 flex items-center justify-center rounded overflow-hidden">
                    {car.image ? (
                      <img src={car.image} alt={car.model} className="object-cover h-full w-full" />
                    ) : (
                      <span className="text-gray-400 dark:text-gray-500">No Image</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">{car.model}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">${car.price}</div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
