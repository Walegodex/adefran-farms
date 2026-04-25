"use client";

import React from 'react';
import { Send } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/5 py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a0f0a] text-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-extrabold text-farm-primary mb-4">Adefran Farms</h3>
            <p className="text-foreground/70 mb-6 text-sm leading-relaxed">
              Cultivating excellence in every egg. We provide premium quality poultry products with a absolute commitment to sustainability and health.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><Link href="/#home" className="hover:text-farm-primary transition-colors">Home</Link></li>
              <li><Link href="/#about" className="hover:text-farm-primary transition-colors">About Us</Link></li>
              <li><Link href="/#products" className="hover:text-farm-primary transition-colors">Products</Link></li>
              <li><Link href="/shop" className="hover:text-farm-primary transition-colors">Shop</Link></li>
              <li><Link href="/#contact" className="hover:text-farm-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Contact Info</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>adefran.farms@gmail.com</li>
              <li>+234 800 000 0000</li>
              <li>Lagos, Nigeria</li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h4 className="font-bold mb-4 text-foreground">Stock Alerts</h4>
            <p className="text-sm text-foreground/70 mb-4">Subscribe to receive notifications when we restock and get exclusive bulk offers.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 bg-zinc-100 dark:bg-zinc-900 border border-transparent focus:border-farm-primary outline-none rounded-l-xl text-sm"
                required
              />
              <button 
                type="submit" 
                className="bg-farm-primary hover:bg-farm-hover text-white px-4 py-2 rounded-r-xl transition-colors flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-black/5 dark:border-white/5 text-center text-sm text-foreground/50">
          <p>© {new Date().getFullYear()} Adefran Farms. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
