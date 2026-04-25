"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const products = [
  {
    id: 1,
    title: "Fresh Farm Eggs",
    description: "Premium quality eggs collected daily. Available in crates for bulk purchase or smaller packs for retail. Rich in nutrients and perfect for bakeries, restaurants, and home use.",
    image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Healthy Broilers",
    description: "Well-fed, robust broilers ready for the market. Raised in clean and hygienic conditions under strict veterinary supervision to ensure optimal health and taste.",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Point of Lay Birds",
    description: "Vaccinated and healthy birds guaranteed to provide a steady lay rate for your own farm. An excellent investment for starting or expanding your egg production.",
    image: "/images/Layers.jpg",
  },
  {
    id: 4,
    title: "Organic Farm Manure",
    description: "Rich, nutrient-dense organic manure perfect for agriculture and landscaping needs. Enhance your soil health and boost crop yields sustainably.",
    image: "/images/Manure.png",
  }
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

export default function Products() {
  return (
    <section id="products" className="py-24 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center md:max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">Our Premium Offerings</h2>
          <div className="h-1 w-24 bg-farm-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-foreground/70">
            We take pride in delivering the highest quality poultry products, ensuring sustainability, health, and freshness in every order.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="bg-white dark:bg-[#151f15] rounded-2xl overflow-hidden shadow-lg border border-black/5 dark:border-white/5 hover:shadow-2xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-56 sm:h-64 lg:h-52 w-full overflow-hidden">
                <Image 
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-farm-primary transition-colors">{product.title}</h3>
                <p className="text-foreground/70 mb-6 flex-1 text-sm leading-relaxed">{product.description}</p>
                <Link 
                  href="/shop" 
                  className="inline-block text-center w-full px-4 py-3 bg-farm-secondary/20 hover:bg-farm-primary text-farm-primary hover:text-white rounded-xl font-semibold transition-colors duration-300"
                >
                  Buy Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
