
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "../../components/admin/shared/sidebar";
import AdminHeader from "../../components/admin/shared/header";
import { fetchCars, createCar, deleteCarApi, Car } from "../../utils/api";

export default function AdminDashboardPage() {
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [buildDate, setBuildDate] = useState("");
  const [cars, setCars] = useState<Car[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterPrice, setFilterPrice] = useState<[number, number]>([0, 100000]);
  const [filterBuildDate, setFilterBuildDate] = useState<[number, number]>([1990, new Date().getFullYear()]);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("admin-auth") !== "true") {
      router.push("/admin/auth");
    }
    
    // Load cars from API
    loadCars();
  }, [router]);

  const loadCars = async () => {
    try {
      const data = await fetchCars();
      setCars(data);
    } catch (err) {
      console.error("Failed to load cars", err);
      alert("Failed to load cars. Check console.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newCar = { 
        carModel: model, 
        price: Number(price), 
        image, 
        type, 
        buildDate 
      };
      
      await createCar(newCar);
      alert("Car added successfully!");
      
      // Reset form
      setModel("");
      setPrice("");
      setImage("");
      setType("");
      setBuildDate("");
      
      // Refresh list
      loadCars();
    } catch (err) {
      console.error("Failed to create car", err);
      alert("Error adding car. See console.");
    }
  };

  const deleteCar = async (id: string) => {
    if(confirm("Are you sure you want to delete this car?")) {
        try {
          await deleteCarApi(id);
          // Optimistic update or refresh
          setCars(prev => prev.filter(c => c._id !== id));
        } catch (err) {
          console.error("Failed to delete car", err);
          alert("Error deleting car.");
        }
    }
  };

  // Filtering logic
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

  const totalValue = cars.reduce((acc, car) => acc + (car.price || 0), 0);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-auto ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}>
        <AdminSidebar />
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 md:ml-64">
        {/* Header */}
        <AdminHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        {/* Content */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 flex items-center justify-between">
                <div>
                    <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider">Total Cars</h3>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white mt-1">{cars.length}</p>
                </div>
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 flex items-center justify-between">
                <div>
                    <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider">Total Inventory Value</h3>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white mt-1">${totalValue.toLocaleString()}</p>
                </div>
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 flex items-center justify-between">
                <div>
                    <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider">Most Common Type</h3>
                    <p className="text-xl font-bold text-gray-900 dark:text-white mt-1">
                        {cars.length > 0 ? (
                            Object.entries(cars.reduce((acc, car) => ({...acc, [car.type || 'Other']: (acc[car.type || 'Other'] || 0) + 1}), {} as Record<string, number>))
                            .sort((a, b) => b[1] - a[1])[0][0]
                        ) : 'N/A'}
                    </p>
                </div>
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-600 dark:text-purple-400">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Add Car Form - Takes 1/3 on large screens */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 h-fit sticky lg:top-8">
              <h2 className="text-lg font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                </span>
                Add New Car
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Car Model</label>
                  <input
                    type="text"
                    value={model}
                    onChange={e => setModel(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition-all"
                    placeholder="e.g. BMW M5 CS"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Type</label>
                        <select
                            value={type}
                            onChange={e => setType(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition-all"
                            required
                        >
                            <option value="">Select...</option>
                            <option value="Sedan">Sedan</option>
                            <option value="SUV">SUV</option>
                            <option value="Truck">Truck</option>
                            <option value="Coupe">Coupe</option>
                            <option value="Convertible">Convertible</option>
                            <option value="Hatchback">Hatchback</option>
                            <option value="Van">Van</option>
                        </select>
                    </div>
                    <div>
                         <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Year</label>
                        <input
                            type="number"
                            value={buildDate}
                            onChange={e => setBuildDate(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition-all"
                            min={1990}
                            max={new Date().getFullYear() + 1}
                            placeholder="2024"
                            required
                        />
                    </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Price ($)</label>
                  <input
                    type="number"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition-all"
                    placeholder="50000"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Image URL</label>
                  <input
                    type="url"
                    value={image}
                    onChange={e => setImage(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition-all"
                    placeholder="https://example.com/car.jpg"
                    required
                  />
                </div>
                
                <button type="submit" className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium shadow-sm hover:shadow-md mt-2">
                    Add to Inventory
                </button>
              </form>
            </div>

            {/* Car List - Takes 2/3 on large screens */}
            <div className="xl:col-span-2 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                  <h2 className="text-lg font-bold text-gray-800 dark:text-white">Inventory Management</h2>
                  
                  <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white w-full sm:w-auto"
                    />
                     <select
                        value={filterType}
                        onChange={e => setFilterType(e.target.value)}
                        className="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                      >
                        <option value="">All Types</option>
                        <option value="Sedan">Sedan</option>
                        <option value="SUV">SUV</option>
                        <option value="Truck">Truck</option>
                        <option value="Coupe">Coupe</option>
                        <option value="Convertible">Convertible</option>
                      </select>
                  </div>
              </div>

              {filteredCars.length === 0 ? (
                <div className="text-center py-12 text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-dashed border-gray-300 dark:border-gray-700">
                    <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                    <p>No cars found in inventory.</p>
                </div>
              ) : (
                <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
                  <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 dark:bg-gray-800 text-xs uppercase text-gray-500 dark:text-gray-400 font-semibold">
                            <th className="px-4 py-3">Image</th>
                            <th className="px-4 py-3">Model</th>
                            <th className="px-4 py-3">Type</th>
                            <th className="px-4 py-3">Price</th>
                            <th className="px-4 py-3">Year</th>
                            <th className="px-4 py-3 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                      {filteredCars.map((car, idx) => (
                        <tr key={car._id || idx} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                          <td className="px-4 py-3">
                            <div className="w-16 h-10 rounded overflow-hidden bg-gray-200 relative">
                                {car.image ? (
                                    <img src={car.image} alt={car.carModel} className="w-full h-full object-cover" />
                                ) : (
                                    <span className="text-[10px] text-gray-500 absolute inset-0 flex items-center justify-center">No Img</span>
                                )}
                            </div>
                          </td>
                          <td className="px-4 py-3">
                              <span className="font-medium text-gray-900 dark:text-white">{car.carModel}</span>
                          </td>
                          <td className="px-4 py-3">
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                {car.type || 'N/A'}
                              </span>
                          </td>
                          <td className="px-4 py-3 text-gray-600 dark:text-gray-300 font-medium">
                              ${car.price.toLocaleString()}
                          </td>
                          <td className="px-4 py-3 text-gray-500 dark:text-gray-400">
                              {car.buildDate || 'N/A'}
                          </td>
                          <td className="px-4 py-3 text-right">
                              <button 
                                onClick={() => car._id && deleteCar(car._id)}
                                className="text-red-600 hover:text-red-900 dark:hover:text-red-400 p-1 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors"
                                title="Delete Car"
                              >
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                              </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
