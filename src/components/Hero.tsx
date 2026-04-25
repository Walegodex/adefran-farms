"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const backgroundImages = [
  '/images/Birds.jpg',
  '/images/Broliers.jpg',
  '/images/Eggs.jpg',
  '/images/Layers.jpg',
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <main id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0 bg-black">
        {backgroundImages.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={`Farm landscape ${index + 1}`}
            fill
            className={`object-cover object-center scale-105 transition-all duration-[2000ms] ease-in-out ${
              index === currentImageIndex 
                ? 'opacity-100 brightness-75 md:blur-0' 
                : 'opacity-0 brightness-50 blur-sm'
            }`}
            priority={index === 0}
          />
        ))}
        {/* Gradients to blend into background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-background/90 z-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 animate-fade-in-up opacity-0 animation-delay-200">
          Cultivating <span className="text-transparent bg-clip-text bg-gradient-to-r from-farm-primary to-farm-light">Excellence</span> <br/> in Every Egg
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 font-light leading-relaxed animate-fade-in-up opacity-0 animation-delay-400">
          Adefran Farms represents the pinnacle of modern agriculture. We combine generational expertise with sustainable practices to bring the finest, freshest produce directly to your table.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0 animation-delay-600 w-full sm:w-auto px-4 sm:px-0">
          <Link href="/#products" className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-farm-primary hover:bg-farm-hover text-white rounded-full font-semibold transition-all duration-300 shadow-[0_0_40px_rgba(45,90,39,0.4)] hover:shadow-[0_0_60px_rgba(45,90,39,0.7)] hover:-translate-y-1">
            Explore Our Produce
          </Link>
          <a href="/#about" className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-transparent hover:bg-white/10 text-white border border-white/30 rounded-full font-semibold transition-all duration-300 hover:border-white backdrop-blur-sm">
            Discover Our Methods
          </a>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-3">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-500 ease-in-out ${
              index === currentImageIndex 
                ? 'w-10 bg-farm-primary shadow-[0_0_15px_rgba(45,90,39,0.8)]' 
                : 'w-2.5 bg-white/40 hover:bg-white/80 hover:scale-110'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </main>
  );
}
