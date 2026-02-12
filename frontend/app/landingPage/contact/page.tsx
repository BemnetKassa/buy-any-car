"use client";

import React, { useState } from "react";
import LandingHeader from "../../components/landing/header";
import LandingFooter from "../../components/landing/footer";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate network request
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <div className="min-h-screen font-sans flex flex-col bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <LandingHeader />
      

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="relative bg-blue-900 text-white py-28 px-6 text-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 z-0"
            style={{ 
              backgroundImage: "url('/cars6.jpg')", 
              backgroundPosition: "center", 
              backgroundSize: "cover" 
            }} 
          >
             <div className="absolute inset-0 bg-blue-900/80 dark:bg-black/60 backdrop-blur-sm"></div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-xl">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              We'd love to hear from you. Whether you have a question about features, pricing, or need a demo, our team is ready to answer all your questions.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-16 -mt-20 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Contact Info Card */}
            <div className="lg:col-span-1 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-400">Contact Information</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Fill up the form and our team will get back to you within 24 hours.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-blue-600 dark:text-blue-400 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-blue-600 dark:text-blue-400 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">Email</h3>
                      <p className="text-gray-600 dark:text-gray-400">support@buyanycar.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-blue-600 dark:text-blue-400 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">Address</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        123 Auto Drive Lane<br />
                        Car City, CA 90210
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                 <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-100 dark:border-blue-900">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-300 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Business Hours
                    </h4>
                    <p className="text-sm text-blue-700 dark:text-blue-400 mt-1 pl-7">
                        Mon - Fri: 9am - 6pm<br/>
                        Sat - Sun: Closed
                    </p>
                 </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Send us a Message</h2>
              
              {formStatus === "success" ? (
                <div className="flex flex-col items-center justify-center p-12 text-center h-full">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Thank you for reaching out. We will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setFormStatus("idle")}
                    className="mt-6 text-blue-600 font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                        <input
                        type="text"
                        id="firstName"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                        placeholder="John"
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                        <input
                        type="text"
                        id="lastName"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                        placeholder="Doe"
                        />
                    </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                        <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                        placeholder="john@example.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number (Optional)</label>
                        <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                        placeholder="+1 (555) 000-0000"
                        />
                    </div>
                    </div>

                    <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                    <select
                        id="subject"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    >
                        <option>General Inquiry</option>
                        <option>Support</option>
                        <option>Sales</option>
                        <option>Partnership</option>
                    </select>
                    </div>

                    <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                    <textarea
                        id="message"
                        rows={4}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                        placeholder="How can we help you?"
                    ></textarea>
                    </div>

                    <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={formStatus === "submitting"}
                        className={`px-8 py-3 rounded-lg font-semibold text-white transition-all shadow-md
                        ${formStatus === "submitting" 
                            ? "bg-blue-400 cursor-not-allowed" 
                            : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg active:transform active:scale-95"
                        }`}
                    >
                        {formStatus === "submitting" ? (
                            <span className="flex items-center gap-2">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </span>
                        ) : "Send Message"}
                    </button>
                    </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* FAQ Preview Section */}
        <section className="bg-gray-100 dark:bg-gray-900 py-20 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                     <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                        style={{ backgroundImage: "url('/cars8.jpg')" }}
                     ></div>
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                        <p className="text-white text-lg font-medium">"Smooth experience from start to finish."</p>
                     </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border-l-4 border-blue-600">
                            <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">How long does it take to get a response?</h3>
                            <p className="text-gray-600 dark:text-gray-300">We aim to respond to all inquiries within 24 hours during business days.</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border-l-4 border-blue-600">
                            <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Where are you located?</h3>
                            <p className="text-gray-600 dark:text-gray-300">Our headquarters are located in Car City, CA, but we serve customers nationwide.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      </main>
      <LandingFooter />
    </div>
  );
}
