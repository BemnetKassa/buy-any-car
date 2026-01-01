
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "../../components/admin/shared/sidebar";
import AdminHeader from "../../components/admin/shared/header";

export default function AdminDashboard() {
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [cars, setCars] = useState<Array<{ model: string; price: string; image: string }>>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("admin-auth") !== "true") {
      router.push("/admin/auth");
    }
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
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <div className={`fixed md:static z-20 transition-transform duration-200 ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'} md:translate-x-0`}>
        <AdminSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen ml-0 md:ml">
        {/* Header */}
        <AdminHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        {/* Content */}
        <main className="flex-1 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Add Car Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">Add New Car</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
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
            </div>

            {/* Car List Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">Manage Cars</h2>
              {cars.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400">No cars added yet.</p>
              ) : (
                <ul className="space-y-4">
                  {cars.map((car, idx) => (
                    <li key={idx} className="flex items-center gap-4 bg-gray-100 dark:bg-gray-700 rounded p-3">
                      <div className="w-20 h-14 bg-gray-200 dark:bg-gray-600 flex items-center justify-center rounded overflow-hidden">
                        {car.image ? (
                          <img src={car.image} alt={car.model} className="object-cover h-full w-full" />
                        ) : (
                          <span className="text-gray-400 dark:text-gray-500">No Image</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-lg">{car.model}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">${car.price}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
