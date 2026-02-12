"use client";
import React, { useEffect, useState } from "react";

export default function AdminHeader({ onMenuClick }: { onMenuClick?: () => void }) {
  const [username, setUsername] = useState("Admin");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("admin-username");
      if (storedUser) setUsername(storedUser);
    }
  }, []);

  return (
    <header className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6 sticky top-0 z-30 transition-colors duration-300">
      <div className="flex items-center gap-4">
        {onMenuClick && (
            <button 
                onClick={onMenuClick}
                className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
        )}
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">Overview</h1>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-gray-900"></span>
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-gray-800">
            <div className="flex flex-col items-end hidden sm:flex">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 capitalize">{username}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">Administrator</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold border-2 border-white dark:border-gray-800 shadow-sm">
                {username.charAt(0).toUpperCase()}
            </div>
        </div>
      </div>
    </header>
  );
}
