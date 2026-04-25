"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  { id: 1, src: "/images/farm_landscape.png", alt: "Adefran Farms lush landscape", span: "md:col-span-2 md:row-span-2" },
  { id: 2, src: "/images/free_range.png", alt: "Healthy free-range chickens", span: "md:col-span-1 md:row-span-2" },
  { id: 3, src: "/images/Birds.jpg", alt: "Healthy flock of birds", span: "col-span-1 row-span-1" },
  { id: 4, src: "/images/Eggs.jpg", alt: "Freshly collected eggs", span: "col-span-1 row-span-1" },
  { id: 5, src: "/images/farm_worker.png", alt: "Farmer collecting fresh eggs", span: "md:col-span-2 row-span-1" },
  { id: 6, src: "/images/baby_chicks.png", alt: "Day-old baby chicks", span: "col-span-1 row-span-1" },
  { id: 7, src: "/images/Broliers.jpg", alt: "Premium broilers", span: "col-span-1 row-span-1" },
  { id: 8, src: "/images/Layers.jpg", alt: "Layers in clean environment", span: "md:col-span-4 row-span-1 md:h-[400px]" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-zinc-50 dark:bg-[#0f1610] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center md:max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">Our Farm Gallery</h2>
          <div className="h-1 w-24 bg-farm-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-foreground/70">
            Take a look inside Adefran Farms. We maintain the highest standards of hygiene and care to ensure the best for our birds and ultimately, for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300 px-4 text-center">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
