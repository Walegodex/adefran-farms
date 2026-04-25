import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white dark:bg-[#0a0a0a] relative z-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-farm-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-orange-500/5 blur-3xl" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* Image Side */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative h-[350px] sm:h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl group border border-zinc-200 dark:border-zinc-800">
            <Image
              src="/images/Birds.jpg"
              alt="Adefran Farms Poultry"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Elegant overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90" />
            
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4 shadow-xl">
              <div className="w-12 h-12 rounded-full bg-farm-primary flex items-center justify-center text-white font-bold text-xl">
                10+
              </div>
              <div className="text-white">
                <p className="text-xs font-bold tracking-widest uppercase text-white/80">Years of</p>
                <p className="font-extrabold text-xl">Excellence</p>
              </div>
            </div>
          </div>
        </div>

        {/* Text Side */}
        <div className="w-full lg:w-1/2">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-farm-primary/10 text-farm-primary text-sm font-bold mb-6 tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-farm-primary animate-pulse" />
            Our Story
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 text-zinc-900 dark:text-white leading-[1.1]">
            Rooted in Tradition, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-farm-primary to-orange-500">
              Driven by Quality.
            </span>
          </h2>
          
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
            At Adefran Farms, we believe that the best produce comes from environments where nature is respected and animals are cared for. As a premier agricultural establishment, we have dedicated ourselves to redefining poultry farming through innovation, ethics, and sustainability.
          </p>
          
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed border-l-4 border-farm-primary pl-4 italic">
            "From our state-of-the-art pen facilities to the rigorous health monitoring of our flocks, every step of our process is strictly designed to guarantee perfection."
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <button className="px-8 py-4 bg-farm-primary hover:bg-farm-hover text-white rounded-full font-bold transition-all duration-300 shadow-[0_0_20px_rgba(45,90,39,0.3)] hover:shadow-[0_0_30px_rgba(45,90,39,0.6)] hover:-translate-y-1 w-full sm:w-auto text-center">
              Discover More
            </button>
            <div className="flex items-center gap-4 px-2">
              <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-2xl shadow-inner">
                🏆
              </div>
              <div>
                <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Certified</p>
                <p className="font-extrabold text-zinc-900 dark:text-white text-lg">Premium Quality</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
