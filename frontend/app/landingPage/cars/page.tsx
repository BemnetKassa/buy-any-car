"use client";
import { useEffect, useState } from "react";
import LandingHeader from "../../components/landing/header";
import LandingFooter from "../../components/landing/footer";

export default function BrowseCarsPage() {
  const [cars, setCars] = useState<Array<{ model: string; price: string; image: string; type?: string; buildDate?: string }>>([]);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterPrice, setFilterPrice] = useState<[number, number]>([0, 100000]);
  const [filterBuildDate, setFilterBuildDate] = useState<[number, number]>([1990, new Date().getFullYear()]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("cars");
      setCars(stored ? JSON.parse(stored) : []);
    }
  }, []);

  const filteredCars = cars.filter(car => {
    const matchesSearch =
      search === "" ||
      car.model.toLowerCase().includes(search.toLowerCase());
    const matchesType =
      !filterType || (car.type && car.type === filterType);
    const priceNum = Number(car.price);
    const matchesPrice =
      priceNum >= filterPrice[0] && priceNum <= filterPrice[1];
    const buildDateNum = Number(car.buildDate || 0);
    const matchesBuildDate =
      buildDateNum >= filterBuildDate[0] && buildDateNum <= filterBuildDate[1];
    return matchesSearch && matchesType && matchesPrice && matchesBuildDate;
  });

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800 font-sans flex flex-col">
      <LandingHeader />
      <main className="flex-1 max-w-5xl mx-auto px-6 py-16 flex flex-col items-center w-full">
        <div className="w-full flex items-center justify-between mb-6">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">Browse Cars</h2>
          <a href="/landingPage/dashboard" className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-blue-600 text-blue-700 dark:text-blue-300 rounded-full font-semibold shadow hover:bg-blue-50 dark:hover:bg-gray-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Dashboard
          </a>
        </div>
        <div className="sticky top-0 z-10 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur rounded-lg shadow mb-8 flex flex-col gap-4 p-4 border border-blue-100 dark:border-gray-800">
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
              <label className="text-gray-700 dark:text-gray-200">Build Date:</label>
              <input
                type="number"
                min={1990}
                max={new Date().getFullYear()}
                value={filterBuildDate[0]}
                onChange={e => setFilterBuildDate([Number(e.target.value), filterBuildDate[1]])}
                className="w-24 px-2 py-1 border rounded dark:bg-gray-700 dark:text-white"
              />
              <span>-</span>
              <input
                type="number"
                min={1990}
                max={new Date().getFullYear()}
                value={filterBuildDate[1]}
                onChange={e => setFilterBuildDate([filterBuildDate[0], Number(e.target.value)])}
                className="w-24 px-2 py-1 border rounded dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {filteredCars.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center py-16">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" className="w-16 h-16 text-blue-200 dark:text-gray-700 mb-4">
                <rect width="48" height="48" rx="12" fill="currentColor" />
                <path d="M16 32h16M20 20h8m-4 0v8" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="text-lg text-gray-500 dark:text-gray-400 mb-2">No cars available yet.</div>
              <div className="text-sm text-gray-400 dark:text-gray-600">Check back soon or contact us to list your car!</div>
            </div>
          ) : (
            filteredCars.map((car, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col items-center border border-blue-100 dark:border-gray-800 hover:shadow-2xl hover:-translate-y-1 transition-all duration-200">
                <div className="w-full h-40 bg-gray-200 dark:bg-gray-700 rounded mb-4 flex items-center justify-center overflow-hidden">
                  {car.image ? (
                    <img src={car.image} alt={car.model} className="object-cover h-full w-full" />
                  ) : (
                    <span className="text-gray-400 dark:text-gray-500">Car Image</span>
                  )}
                </div>
                <h4 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-300">{car.model}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-2 text-base font-medium">${car.price}</p>
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">{car.type} {car.buildDate && `| Built: ${car.buildDate}`}</div>
                <button className="mt-auto px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full font-semibold shadow hover:from-blue-600 hover:to-blue-800 transition">View Details</button>
              </div>
            ))
          )}
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}
