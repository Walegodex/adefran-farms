"use client";

import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-white dark:bg-[#050505] relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-farm-primary/10 text-farm-primary text-sm font-bold mb-4 tracking-wide uppercase">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Contact Adefran Farms
          </h2>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Have questions about our poultry or interested in wholesale partnerships? We'd love to hear from you. Send us a message and we'll respond promptly.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Contact Information Side */}
          <div className="w-full lg:w-1/3 flex flex-col">
            <div className="bg-zinc-50 dark:bg-zinc-900 p-8 md:p-10 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-sm h-full flex flex-col">
              <h3 className="text-3xl font-extrabold mb-10 text-zinc-900 dark:text-white ml-10">Contact Info</h3>
              
              <div className="flex flex-col justify-around flex-grow py-4">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full bg-farm-primary/10 flex items-center justify-center text-farm-primary shrink-0 transition-transform hover:scale-110 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-zinc-500 uppercase tracking-widest mb-1">Our Location</p>
                    <p className="text-zinc-900 dark:text-white font-semibold text-lg leading-snug">123 Poultry Lane,<br/>Agricultural District, NG</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full bg-farm-primary/10 flex items-center justify-center text-farm-primary shrink-0 transition-transform hover:scale-110 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-zinc-500 uppercase tracking-widest mb-1">Direct Email</p>
                    <p className="text-zinc-900 dark:text-white font-semibold text-base xl:text-lg whitespace-nowrap">adefran.farms@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full bg-farm-primary/10 flex items-center justify-center text-farm-primary shrink-0 transition-transform hover:scale-110 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-zinc-500 uppercase tracking-widest mb-1">Phone Line</p>
                    <p className="text-zinc-900 dark:text-white font-semibold text-lg">+234 (0) 800 123 4567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-2/3">
            {/* We're keeping it user-friendly with clear bold labels, extra padding, huge rounded corners and obvious focus states */}
            <form className="bg-white dark:bg-[#0a0a0a] p-8 md:p-12 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-2xl relative" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-extrabold text-zinc-700 dark:text-zinc-300 mb-3 tracking-wide">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-6 py-4 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-farm-primary focus:border-transparent transition-all shadow-inner"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-extrabold text-zinc-700 dark:text-zinc-300 mb-3 tracking-wide">Your Email</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-6 py-4 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-farm-primary focus:border-transparent transition-all shadow-inner"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-8">
                <label htmlFor="subject" className="block text-sm font-extrabold text-zinc-700 dark:text-zinc-300 mb-3 tracking-wide">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  required
                  className="w-full bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-6 py-4 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-farm-primary focus:border-transparent transition-all shadow-inner"
                  placeholder="How can we help you?"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-extrabold text-zinc-700 dark:text-zinc-300 mb-3 tracking-wide">Message</label>
                <textarea 
                  id="message"
                  rows={5}
                  required
                  className="w-full bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-6 py-4 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-farm-primary focus:border-transparent transition-all resize-none shadow-inner"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button type="submit" className="w-full py-5 bg-farm-primary hover:bg-farm-hover text-white rounded-2xl font-extrabold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(45,90,39,0.3)] hover:shadow-[0_0_30px_rgba(45,90,39,0.6)] flex justify-center items-center gap-3 group">
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
