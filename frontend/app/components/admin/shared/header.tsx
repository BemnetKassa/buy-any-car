"use client";

export default function AdminHeader({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <header className="h-16 bg-white dark:bg-gray-800 shadow flex items-center px-6 sticky top-0 z-10">
      {onMenuClick && (
        <button className="md:hidden mr-4" onClick={onMenuClick}>
          <span className="material-icons text-3xl">menu</span>
        </button>
      )}
      <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-300">Dashboard</h1>
    </header>
  );
}
