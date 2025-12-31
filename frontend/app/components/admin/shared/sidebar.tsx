"use client";
import { useRouter } from "next/navigation";

export default function AdminSidebar() {
  const router = useRouter();
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg flex flex-col h-full min-h-screen">
      <div className="h-16 flex items-center justify-center border-b border-gray-200 dark:border-gray-700">
        <span className="text-xl font-bold text-blue-700 dark:text-blue-300">Admin Panel</span>
      </div>
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-4">
          <li>
            <a href="/admin/dashboard" className="block px-4 py-2 rounded text-blue-700 dark:text-blue-200 font-medium bg-blue-100 dark:bg-blue-900">Dashboard</a>
          </li>
          <li>
            <a href="/landingPage" className="block px-4 py-2 rounded text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">View Site</a>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button onClick={() => {
          localStorage.removeItem("admin-auth");
          router.push("/admin/auth");
        }} className="w-full py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700 transition font-semibold">Logout</button>
      </div>
    </aside>
  );
}
