import LandingHeader from "../../components/landing/header";
import LandingFooter from "../../components/landing/footer";

export default function PrivacyPage() {
  const lastUpdated = "February 10, 2026";

  return (
    <div className="min-h-screen font-sans flex flex-col bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <LandingHeader />
      
      <main className="flex-1 w-full">
         {/* Hero Section */}
        <section className="relative bg-blue-900 text-white py-24 px-6 text-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 z-0"
            style={{ 
              backgroundImage: "url('/cars7.jpg')", 
              backgroundPosition: "center", 
              backgroundSize: "cover" 
            }} 
          >
             <div className="absolute inset-0 bg-blue-900/90 dark:bg-black/90 backdrop-blur-sm"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
              Your privacy matters to us. This policy details how we handle your personal information and keep your experience secure.
            </p>
             <div className="inline-flex items-center text-sm font-medium text-blue-300 bg-blue-800/50 px-4 py-2 rounded-full border border-blue-700/50">
               <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
               Last Updated: {lastUpdated}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-4xl mx-auto px-6 py-16 -mt-10 relative z-20">
           <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-800">
               
               <div className="prose prose-blue dark:prose-invert max-w-none">
                   
                    <div className="flex items-start mb-8">
                       <div className="flex-shrink-0 mt-1">
                           <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                           </div>
                       </div>
                       <div className="ml-4">
                           <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Introduction</h2>
                           <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                               We respect your privacy and are committed to protecting your personal information when you use BuyAnyCar. 
                               This policy outlines our practices regarding data collection, use, and disclosure.
                           </p>
                       </div>
                    </div>

                    <hr className="border-gray-100 dark:border-gray-800 my-8"/>

                    <div className="flex items-start mb-8">
                       <div className="flex-shrink-0 mt-1">
                           <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300">
                               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                           </div>
                       </div>
                       <div className="ml-4">
                           <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Data Protection</h2>
                           <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                               Information you provide, such as contact details or preferences, is used only to operate and improve the platform, communicate with you, and keep your experience secure.
                           </p>
                           <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                               <li>We use industry-standard encryption to protect your data.</li>
                               <li>We perform regular security audits.</li>
                               <li>Access to personal data is restricted to authorized personnel.</li>
                           </ul>
                       </div>
                    </div>

                    <hr className="border-gray-100 dark:border-gray-800 my-8"/>

                    <div className="flex items-start mb-8">
                       <div className="flex-shrink-0 mt-1">
                           <div className="flex items-center justify-center h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300">
                               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
                           </div>
                       </div>
                       <div className="ml-4">
                           <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Third-Party Sharing</h2>
                           <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                               We do not sell your data. Limited information may be shared with trusted service providers solely to support features like hosting, analytics, or security. These partners are bound by strict confidentiality agreements.
                           </p>
                       </div>
                    </div>
                    
                     <hr className="border-gray-100 dark:border-gray-800 my-8"/>

                    <div className="flex items-start">
                       <div className="flex-shrink-0 mt-1">
                           <div className="flex items-center justify-center h-10 w-10 rounded-full bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300">
                               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                           </div>
                       </div>
                       <div className="ml-4">
                           <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Policy Updates</h2>
                           <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                               As the platform evolves, this policy may be updated. When that happens, we’ll highlight the changes so you can review them easily.
                           </p>
                       </div>
                    </div>

               </div>
               
               <div className="mt-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6 border border-blue-100 dark:border-blue-900">
                   <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">Have questions about your privacy?</h3>
                   <p className="text-blue-700 dark:text-blue-400 mb-6">If you have any questions or concerns about how we handle your data, please contact our Data Protection Officer.</p>
                   <a href="/landingPage/contact" className="inline-block px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm">
                       Contact Data Protection Team
                   </a>
               </div>

           </div>
        </section>

      </main>
      <LandingFooter />
    </div>
  );
}
