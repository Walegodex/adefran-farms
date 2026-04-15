import React from 'react';

export default function Values() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-background relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-farm-primary/10 text-farm-primary text-sm font-bold mb-4 tracking-wide uppercase">
            What We Do
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Our Services & Values
          </h2>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Discover the comprehensive range of solutions we provide to ensure the highest quality poultry products from our farm to your table.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            {
              title: "Premium Pen Facilities",
              desc: "Housed in safe, spacious, and carefully monitored pens designed to prioritize the comfort, health, and well-being of every bird.",
              icon: "🏠"
            },
            {
              title: "Premium Quality Eggs",
              desc: "Rich, golden yolks packed with essential nutrients, collected fresh every morning for an unmatched farm-to-table experience.",
              icon: "🥚"
            },
            {
              title: "Ethical & Sustainable",
              desc: "Dedicated to the highest standards of animal welfare and environmentally conscious, sustainable poultry farming.",
              icon: "🌿"
            },
            {
              title: "Wholesale Distribution",
              desc: "Reliable bulk supplying for restaurants, grocery chains, and local businesses with guaranteed continuous delivery.",
              icon: "🚚"
            },
            {
              title: "Veterinary Assurance",
              desc: "Strict biosecurity measures and regular veterinary care to guarantee the superior health and vitality of our livestock.",
              icon: "🛡️"
            },
            {
              title: "Premium Hatchery",
              desc: "State-of-the-art hatchery services providing robust, high-quality day-old chicks for independent and commercial farmers.",
              icon: "🐣"
            }
          ].map((feature, i) => (
            <div 
              key={i} 
              className="group p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-farm-primary/10 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
