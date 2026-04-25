"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { motion } from "framer-motion";
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';

const shopProducts = [
  {
    id: 1,
    name: "Crate of Fresh Eggs",
    price: "₦3,500",
    unit: "per crate (30 eggs)",
    image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?auto=format&fit=crop&w=800&q=80",
    badge: "Bestseller"
  },
  {
    id: 2,
    name: "Live Broiler Chicken",
    price: "₦12,000",
    unit: "per bird (avg 2.5kg)",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Dressed Chicken (Frozen)",
    price: "₦13,500",
    unit: "per bird",
    image: "/images/Birds.jpg", // Using placeholder image from gallery
  },
  {
    id: 4,
    name: "Point of Lay Birds",
    price: "₦8,500",
    unit: "per bird (16 weeks old)",
    image: "/images/Layers.jpg",
  },
  {
    id: 5,
    name: "Organic Farm Manure",
    price: "₦2,000",
    unit: "per 50kg bag",
    image: "/images/Manure.png",
  },
  {
    id: 6,
    name: "Day-Old Broiler Chicks",
    price: "₦1,200",
    unit: "per chick",
    image: "/images/baby_chicks.png",
  }
];

export default function Shop() {
  const [quantities, setQuantities] = useState<Record<number, number>>(
    shopProducts.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {})
  );

  const { addToCart } = useCart();
  const { user, openAuthModal } = useAuth();

  const updateQuantity = (id: number, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta)
    }));
  };

  const handleAddToCart = (product: typeof shopProducts[0]) => {
    if (!user) {
      // Must be signed in to add to cart
      openAuthModal('signin');
      return;
    }

    const qty = quantities[product.id] || 1;
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: qty
    });

    // Reset local quantity back to 1 after adding
    setQuantities(prev => ({ ...prev, [product.id]: 1 }));
  };
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-farm-primary selection:text-white">
      <Header />
      
      {/* Shop Hero */}
      <div className="pt-32 pb-16 bg-zinc-50 dark:bg-[#0a0f0a] border-b border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">Adefran Shop</h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Place your order for farm-fresh, premium poultry products. Add items to your cart to request an instant quote and secure delivery.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Shop Grid */}
      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {shopProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-black/5 dark:border-white/5 group flex flex-col"
            >
              <div className="relative h-60 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <Image 
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {product.badge}
                  </div>
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-farm-primary transition-colors">{product.name}</h3>
                <div className="bg-zinc-100 dark:bg-zinc-800/50 inline-block px-3 py-1 rounded-lg w-max mb-6">
                  <span className="text-xl font-extrabold text-farm-primary">{product.price}</span>
                  <span className="text-sm text-foreground/60 ml-2">{product.unit}</span>
                </div>
                
                <div className="mt-auto pt-4 border-t border-black/5 dark:border-white/5 flex gap-3">
                  <div className="flex bg-zinc-100 dark:bg-zinc-800 rounded-xl overflow-hidden">
                    <button 
                      onClick={() => updateQuantity(product.id, -1)}
                      className="px-4 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-700 font-bold transition-colors select-none"
                    >
                      -
                    </button>
                    <div className="px-4 py-2 flex items-center justify-center font-bold text-sm min-w-[40px] select-none">
                      {quantities[product.id] || 1}
                    </div>
                    <button 
                      onClick={() => updateQuantity(product.id, 1)}
                      className="px-4 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-700 font-bold transition-colors select-none"
                    >
                      +
                    </button>
                  </div>
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 bg-farm-primary hover:bg-farm-hover text-white rounded-xl font-semibold transition-colors shadow-lg shadow-farm-primary/20 hover:shadow-farm-primary/40 text-sm active:scale-95"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
