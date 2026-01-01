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
        <div className="sticky top-0 z-10 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur rounded-lg shadow mb-8 flex flex-col md:flex-row md:items-end gap-4 p-6 border border-blue-100 dark:border-gray-800">
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">Search by Model</label>
            <input
              type="text"
              placeholder="e.g. Toyota Camry"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div className="flex flex-col gap-2 min-w-[180px]">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">Category</label>
            <div className="relative">
              <select
                value={filterType}
                onChange={e => setFilterType(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-700 dark:text-white appearance-none pr-8"
              >
                <option value="">All Types</option>
                <option value="Sedan">🚗 Sedan</option>
                <option value="SUV">🚙 SUV</option>
                <option value="Truck">🛻 Truck</option>
                <option value="Coupe">🏎️ Coupe</option>
                <option value="Convertible">🚘 Convertible</option>
                <option value="Hatchback">🚕 Hatchback</option>
                <option value="Van">🚐 Van</option>
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 min-w-[180px]">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">Price ($)</label>
            <div className="flex items-center gap-2">
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
          </div>
          <div className="flex flex-col gap-2 min-w-[180px]">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">Build Date</label>
            <div className="flex items-center gap-2">
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
              <div key={idx} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col items-center border border-blue-100 dark:border-gray-800 hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 relative">
                {/* Category badge */}
                {car.type && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 shadow">
                    {car.type === 'Sedan' && '🚗 Sedan'}
                    {car.type === 'SUV' && '🚙 SUV'}
                    {car.type === 'Truck' && '🛻 Truck'}
                    {car.type === 'Coupe' && '🏎️ Coupe'}
                    {car.type === 'Convertible' && '🚘 Convertible'}
                    {car.type === 'Hatchback' && '🚕 Hatchback'}
                    {car.type === 'Van' && '🚐 Van'}
                  </span>
                )}
                <div className="w-full h-40 bg-gray-200 dark:bg-gray-700 rounded mb-4 flex items-center justify-center overflow-hidden">
                  {car.image ? (
                    <img src={car.image} alt={car.model} className="object-cover h-full w-full" />
                  ) : (
                    <span className="text-gray-400 dark:text-gray-500">Car Image</span>
                  )}
                </div>
                <h4 className="text-lg font-bold mb-2 text-blue-700 dark:text-blue-300 tracking-wide">{car.model}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-2 text-base font-semibold">${car.price}</p>
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-2">
                  {car.buildDate && (
                    <span className="inline-flex items-center gap-1"><svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>Built: {car.buildDate}</span>
                  )}
                </div>
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
