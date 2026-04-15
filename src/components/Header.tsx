"use client";

import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    
    if (isSearchOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when open
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSearchOpen]);

  return (
    <>
      <header className={`fixed top-0 w-full z-40 px-4 md:px-6 flex flex-row justify-between items-center transition-all duration-500 gap-4 overflow-x-auto ${isScrolled ? 'py-4 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 shadow-xl' : 'py-6 bg-transparent'}`}>
        {/* Brand */}
        <div className="text-xl md:text-2xl font-bold tracking-tighter text-white drop-shadow-md whitespace-nowrap shrink-0">
          Adefran<span className="text-farm-light">Farms</span>
        </div>
        
        {/* Nav Links */}
        <nav className="flex flex-row gap-4 md:gap-8 text-sm font-medium text-white/90 drop-shadow-md whitespace-nowrap shrink-0">
          <a href="#home" className="hover:text-farm-primary transition-colors duration-200">Home</a>
          <a href="#about" className="hover:text-farm-primary transition-colors duration-200">About</a>
          <a href="#services" className="hover:text-farm-primary transition-colors duration-200">Services</a>
          <a href="#contact" className="hover:text-farm-primary transition-colors duration-200">Contact Us</a>
        </nav>

        {/* Action Button */}
        <button 
          onClick={() => setIsSearchOpen(true)}
          className="px-5 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full text-sm font-semibold transition-all duration-300 shadow-lg group flex items-center gap-2 whitespace-nowrap shrink-0" 
          aria-label="Open Search"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          Search
        </button>
      </header>

      {/* Full Screen Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
          {/* Close Button */}
          <button 
            onClick={() => setIsSearchOpen(false)}
            className="absolute top-6 right-6 md:top-10 md:right-10 p-3 text-white/70 hover:text-white transition-colors group"
            aria-label="Close search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Search Box */}
          <div className="w-full max-w-3xl px-6 flex flex-col items-center">
            <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">Search Here</h2>
            <div className="relative flex items-center w-full bg-[#0f0f0f] rounded-full border border-zinc-800 shadow-2xl p-2 focus-within:border-farm-primary focus-within:ring-1 focus-within:ring-farm-primary transition-all duration-300">
              <input 
                type="text" 
                placeholder="Enter Keyword here" 
                autoFocus
                className="w-full bg-transparent py-4 pl-8 pr-4 text-xl md:text-2xl text-white placeholder-zinc-600 focus:outline-none"
              />
              <button 
                className="rounded-full bg-farm-primary hover:bg-farm-hover text-white px-8 md:px-12 py-4 transition-colors duration-300 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(45,90,39,0.5)] border border-white/10"
                aria-label="Submit Search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
