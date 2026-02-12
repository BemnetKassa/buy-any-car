"use client";

import { useEffect, useState } from "react";
import LandingHeader from "../../components/landing/header";
import LandingFooter from "../../components/landing/footer";
import CarCard from "../../components/landing/CarCard";
import { Car } from "../../utils/api";

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<Car[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedWishlist = localStorage.getItem("wishlistCars");
      try {
        setWishlist(storedWishlist ? JSON.parse(storedWishlist) : []);
      } catch (e) {
        setWishlist([]);
      }
    }
  }, []);

  const removeFromWishlist = (car: Car) => {
    setWishlist((prev) => {
      const next = prev.filter(
        (item) => 
            (item._id && car._id ? item._id !== car._id : item.carModel !== car.carModel)
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("wishlistCars", JSON.stringify(next));
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen font-sans flex flex-col bg-gray-50 dark:bg-gray-950">
      <LandingHeader />
      
      <main className="flex-1 w-full flex flex-col items-center">
        {/* Page Header */}
        <div className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-2">My Wishlist</h1>
              <p className="text-gray-500 dark:text-gray-400">Your curated collection of favorite cars.</p>
            </div>
            <a href="/landingPage/cars" className="self-start md:self-center inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium text-sm shadow-sm">
               Browse More Cars
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
          {wishlist.length === 0 ? (
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-16 text-center border border-gray-200 dark:border-gray-800 shadow-sm max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-50 dark:bg-red-900/20 text-red-500 mb-6 animate-pulse">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Your wishlist is empty</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">
                Start exploring our collection and save your dream cars here to compare them later.
              </p>
              <a 
                href="/landingPage/cars" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 transition-colors"
              >
                Find Cars to Add
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlist.map((car, idx) => (
                <CarCard 
                  key={car._id || idx} 
                  car={car} 
                  isInWishlist={true} 
                  onToggleWishlist={() => removeFromWishlist(car)} 
                />
              ))}
            </div>
          )}
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}
