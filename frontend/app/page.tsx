
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 dark:from-gray-900 dark:to-gray-800 font-sans">
      <header className="w-full py-6 bg-white shadow-md dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-300">BuyAnyCar</h1>
          <nav>
            <a href="#cars" className="text-blue-700 dark:text-blue-200 font-medium hover:underline mr-6">Cars</a>
            <a href="/admin" className="text-blue-700 dark:text-blue-200 font-medium hover:underline">Admin</a>
          </nav>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-6 py-16 flex flex-col items-center">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Find Your Dream Car</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">Browse our collection of new and used cars. The best deals, all in one place.</p>
          <a href="#cars" className="inline-block px-8 py-3 bg-blue-700 text-white rounded-full font-semibold shadow hover:bg-blue-800 transition">Browse Cars</a>
        </section>
        <section id="cars" className="w-full">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Available Cars</h3>
          {/* Placeholder for car listings */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 flex flex-col items-center">
              <div className="w-full h-40 bg-gray-200 dark:bg-gray-700 rounded mb-4 flex items-center justify-center">
                <span className="text-gray-400 dark:text-gray-500">Car Image</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Car Model Name</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-2">$Price</p>
              <button className="mt-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">View Details</button>
            </div>
            {/* Add more car cards here dynamically later */}
          </div>
        </section>
      </main>
      <footer className="w-full py-6 mt-16 bg-white dark:bg-gray-900 text-center text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} BuyAnyCar. All rights reserved.
      </footer>
    </div>
  );
}
