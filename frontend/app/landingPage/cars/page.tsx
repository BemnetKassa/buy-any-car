"use client";
import { useEffect, useState } from "react";
import LandingHeader from "../../components/landing/header";
import LandingFooter from "../../components/landing/footer";
import CarCard from "../../components/landing/CarCard";
import { fetchCars, Car } from "../../utils/api";

export default function BrowseCarsPage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [wishlist, setWishlist] = useState<Car[]>([]);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterPrice, setFilterPrice] = useState<[number, number]>([0, 100000]);
  const [filterBuildDate, setFilterBuildDate] = useState<[number, number]>([1990, new Date().getFullYear()]);

  useEffect(() => {
    const loadCars = async () => {
      try {
        const data = await fetchCars();
        setCars(data);
      } catch (err) {
        console.error("Failed to load cars", err);
      }
    };
    loadCars();

    if (typeof window !== "undefined") {
      const storedWishlist = localStorage.getItem("wishlistCars");
      try {
        setWishlist(storedWishlist ? JSON.parse(storedWishlist) : []);
      } catch (e) {
        setWishlist([]);
      }
    }
  }, []);

  const isInWishlist = (car: Car) =>
    wishlist.some(item => 
      (item._id && car._id && item._id === car._id) || 
      (!item._id && !car._id && item.carModel === car.carModel) // Fallback for items without ID
    );

  const toggleWishlist = (car: Car) => {
    setWishlist(prev => {
      const exists = isInWishlist(car);
      const next = exists
        ? prev.filter(item => 
            (item._id && car._id ? item._id !== car._id : item.carModel !== car.carModel)
          )
        : [...prev, car];

      if (typeof window !== "undefined") {
        localStorage.setItem("wishlistCars", JSON.stringify(next));
      }

      return next;
    });
  };

  const filteredCars = cars.filter(car => {
    const matchesSearch =
      search === "" ||
      car.carModel.toLowerCase().includes(search.toLowerCase());
    const matchesType =
      !filterType || (car.type && car.type === filterType);
    const matchesPrice =
      car.price >= filterPrice[0] && car.price <= filterPrice[1];
    const buildDateNum = Number(car.buildDate || 0);
    const matchesBuildDate =
      buildDateNum >= filterBuildDate[0] && buildDateNum <= filterBuildDate[1];
    return matchesSearch && matchesType && matchesPrice && matchesBuildDate;
  });

  return (
    <div className="min-h-screen font-sans flex flex-col bg-gray-50 dark:bg-gray-950">
      <LandingHeader />
      
      <main className="flex-1 w-full flex flex-col items-center">
        {/* Page Header */}
        <div className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-2">Browse Inventory</h1>
              <p className="text-gray-500 dark:text-gray-400">Discover quality cars that match your lifestyle.</p>
            </div>
            <a href="/landingPage/dashboard" className="self-start md:self-center inline-flex items-center px-4 py-2 border border-blue-600 rounded-lg text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors font-medium text-sm">
               ← Back to Dashboard
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-72 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
                <h2 className="font-bold text-lg text-gray-900 dark:text-white">Filters</h2>
              </div>
              
              <div className="space-y-6">
                {/* Search */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Search</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search model..."
                      value={search}
                      onChange={e => setSearch(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:text-white"
                    />
                    <svg className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Body Type</label>
                  <div className="relative">
                    <select
                      value={filterType}
                      onChange={e => setFilterType(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none dark:text-white"
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
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">▼</div>
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Price Range
                  </label>
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">$</span>
                      <input
                        type="number"
                        min={0}
                        value={filterPrice[0]}
                        onChange={e => setFilterPrice([Number(e.target.value), filterPrice[1]])}
                        className="w-full pl-5 pr-2 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                      />
                    </div>
                    <span className="text-gray-400">-</span>
                    <div className="relative flex-1">
                      <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">$</span>
                      <input
                        type="number"
                        min={0}
                        value={filterPrice[1]}
                        onChange={e => setFilterPrice([filterPrice[0], Number(e.target.value)])}
                        className="w-full pl-5 pr-2 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Year Range */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Build Year</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min={1990}
                      value={filterBuildDate[0]}
                      onChange={e => setFilterBuildDate([Number(e.target.value), filterBuildDate[1]])}
                      className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                      placeholder="Min"
                    />
                    <span className="text-gray-400">-</span>
                    <input
                      type="number"
                      max={new Date().getFullYear()}
                      value={filterBuildDate[1]}
                      onChange={e => setFilterBuildDate([filterBuildDate[0], Number(e.target.value)])}
                      className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                      placeholder="Max"
                    />
                  </div>
                </div>
              </div>
            </aside>

            {/* Results Grid */}
            <div className="flex-1">
              {filteredCars.length === 0 ? (
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-12 text-center border border-gray-200 dark:border-gray-800 shadow-sm">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-500 mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">No cars found</h3>
                  <p className="text-gray-500 dark:text-gray-400">Try adjusting your filters or search criteria.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredCars.map((car, idx) => (
                    <CarCard 
                      key={car._id || idx} 
                      car={car} 
                      isInWishlist={isInWishlist(car)} 
                      onToggleWishlist={toggleWishlist} 
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}
