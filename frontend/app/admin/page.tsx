"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const router = useRouter();

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();
		// Simple hardcoded check for demonstration
		if (username === "admin" && password === "admin123") {
			localStorage.setItem("admin-auth", "true");
			router.push("/admin/dashboard");
		} else {
			setError("Invalid username or password");
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
			<div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow p-8">
				<h1 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300">Admin Login</h1>
				<form onSubmit={handleLogin} className="space-y-4">
					<div>
						<label className="block text-gray-700 dark:text-gray-200 mb-1">Username</label>
						<input
							type="text"
							value={username}
							onChange={e => setUsername(e.target.value)}
							className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-700 dark:text-white"
							required
						/>
					</div>
					<div>
						<label className="block text-gray-700 dark:text-gray-200 mb-1">Password</label>
						<input
							type="password"
							value={password}
							onChange={e => setPassword(e.target.value)}
							className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-700 dark:text-white"
							required
						/>
					</div>
					{error && <div className="text-red-500 text-sm">{error}</div>}
					<button type="submit" className="w-full py-2 px-4 bg-blue-700 text-white rounded hover:bg-blue-800 transition font-semibold">Login</button>
				</form>
			</div>
		</div>
	);
}
