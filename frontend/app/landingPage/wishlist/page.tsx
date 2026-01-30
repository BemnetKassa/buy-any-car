"use client";

import { useEffect, useState } from "react";
import LandingHeader from "../../components/landing/header";
import LandingFooter from "../../components/landing/footer";

type Car = { model: string; price: string; image: string; type?: string; buildDate?: string };

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<Car[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedWishlist = localStorage.getItem("wishlistCars");
      setWishlist(storedWishlist ? JSON.parse(storedWishlist) : []);
    }
  }, []);

  const removeFromWishlist = (car: Car) => {
    setWishlist((prev) => {
      const next = prev.filter(
        (item) =>
          !(
            item.model === car.model &&
            item.price === car.price &&
            item.image === car.image &&
            item.type === car.type &&
            item.buildDate === car.buildDate
          )
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("wishlistCars", JSON.stringify(next));
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800 font-sans flex flex-col">
      <LandingHeader />
      <main className="flex-1 max-w-5xl mx-auto px-6 py-16 flex flex-col items-center w-full">
        <div className="w-full flex items-center justify-between mb-6">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">Wishlist</h2>
          <a
            href="/landingPage/cars"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-blue-600 text-blue-700 dark:text-blue-300 rounded-full font-semibold shadow hover:bg-blue-50 dark:hover:bg-gray-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Browse cars
          </a>
        </div>
        {wishlist.length === 0 ? (
          <div className="w-full flex flex-col items-center justify-center py-16">
            <div className="text-lg text-gray-500 dark:text-gray-400 mb-2">No cars in your wishlist yet.</div>
            <div className="text-sm text-gray-400 dark:text-gray-600">
              Browse cars and tap the heart icon to save them here.
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
            {wishlist.map((car, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col items-center border border-blue-100 dark:border-gray-800 hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 relative"
              >
                {car.type && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 shadow">
                    {car.type === "Sedan" && "🚗 Sedan"}
                    {car.type === "SUV" && "🚙 SUV"}
                    {car.type === "Truck" && "🛻 Truck"}
                    {car.type === "Coupe" && "🏎️ Coupe"}
                    {car.type === "Convertible" && "🚘 Convertible"}
                    {car.type === "Hatchback" && "🚕 Hatchback"}
                    {car.type === "Van" && "🚐 Van"}
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => removeFromWishlist(car)}
                  className="absolute top-3 right-3 rounded-full p-2 bg-white/80 dark:bg-gray-800/80 shadow hover:scale-110 transition"
                  aria-label="Remove from wishlist"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-red-500"
                  >
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 3 13.107 3 10.5 3 7.962 4.964 6 7.5 6A4.5 4.5 0 0112 8.1 4.5 4.5 0 0116.5 6C19.036 6 21 7.962 21 10.5c0 2.607-1.688 4.86-3.989 7.007a25.18 25.18 0 01-4.244 3.17 15.247 15.247 0 01-.383.218l-.022.012-.007.003-.003.002a.75.75 0 01-.682 0l-.003-.002z" />
                  </svg>
                </button>
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
                    <span className="inline-flex items-center gap-1">
                      <svg
                        className="w-4 h-4 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      Built: {car.buildDate}
                    </span>
                  )}
                </div>
                <button className="mt-auto px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full font-semibold shadow hover:from-blue-600 hover:to-blue-800 transition">
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
      <LandingFooter />
    </div>
  );
}
