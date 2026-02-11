"use client";

import { useState } from "react";

export type Car = { 
  model: string; 
  price: string; 
  image: string; 
  type?: string; 
  buildDate?: string 
};

interface CarCardProps {
  car: Car;
  isInWishlist: boolean;
  onToggleWishlist: (car: Car) => void;
}

export default function CarCard({ car, isInWishlist, onToggleWishlist }: CarCardProps) {
  return (
    <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 relative flex flex-col overflow-hidden">
      
      {/* Category Badge */}
      {car.type && (
        <span className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-gray-800 dark:text-gray-100 shadow-sm border border-gray-100 dark:border-gray-700">
          {car.type}
        </span>
      )}

      {/* Wishlist Button */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          onToggleWishlist(car);
        }}
        className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm hover:scale-110 transition-transform duration-200 group/btn"
        aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
      >
        {isInWishlist ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-500">
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 3 13.107 3 10.5 3 7.962 4.964 6 7.5 6A4.5 4.5 0 0112 8.1 4.5 4.5 0 0116.5 6C19.036 6 21 7.962 21 10.5c0 2.607-1.688 4.86-3.989 7.007a25.18 25.18 0 01-4.244 3.17 15.247 15.247 0 01-.383.218l-.022.012-.007.003-.003.002a.75.75 0 01-.682 0l-.003-.002z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 text-gray-400 group-hover/btn:text-red-500 transition-colors">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        )}
      </button>

      {/* Image Container */}
      <div className="relative aspect-[16/10] bg-gray-100 dark:bg-gray-800 overflow-hidden">
        {car.image ? (
          <img 
            src={car.image} 
            alt={car.model} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300 dark:text-gray-600">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-1" title={car.model}>
            {car.model}
          </h3>
          <p className="text-lg font-bold text-blue-600 dark:text-blue-400 shrink-0 ml-2">
            ${parseInt(car.price).toLocaleString()}
          </p>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
          {car.buildDate && (
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              <span>{car.buildDate}</span>
            </div>
          )}
          <div className="flex items-center gap-1.5">
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
             <span>Auto</span>
          </div>
        </div>

        <button className="mt-auto w-full py-2.5 px-4 bg-gray-50 dark:bg-gray-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 text-gray-900 dark:text-white text-sm font-semibold rounded-lg transition-colors border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-600">
          View Details
        </button>
      </div>
    </div>
  );
}
