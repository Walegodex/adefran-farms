"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, updateQuantity, removeFromCart, totalItems } = useCart();
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  // Automatically select all items by default whenever the cart opens or items change
  useEffect(() => {
    if (isOpen) {
      setSelectedIds(items.map(i => i.id));
    }
  }, [isOpen, items.length]);

  const toggleItem = (id: number) => {
    setSelectedIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  // Calculate stats strictly for selected items
  const selectedItems = items.filter(item => selectedIds.includes(item.id));
  const selectedCount = selectedItems.reduce((sum, item) => sum + item.quantity, 0);
  const selectedPrice = selectedItems.reduce((sum, item) => {
    const priceVal = parseFloat(item.price.replace(/[^0-9.-]+/g, "")) || 0;
    return sum + (priceVal * item.quantity);
  }, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Drawer Sidebar */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-md h-full bg-white dark:bg-zinc-900 shadow-2xl flex flex-col border-l border-black/5 dark:border-white/5"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-black/5 dark:border-white/5 bg-zinc-50 dark:bg-zinc-900/50">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h2 className="text-xl font-bold tracking-tight text-foreground">Your Cart</h2>
                <span className="bg-farm-primary/10 text-farm-primary text-xs font-bold px-2 py-1 rounded-full">
                  {totalItems} items
                </span>
              </div>
              <button 
                onClick={onClose}
                className="p-2 text-foreground/50 hover:text-foreground bg-foreground/5 hover:bg-foreground/10 transition-colors rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-70">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-zinc-300 dark:text-zinc-700 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <p className="text-xl font-semibold mb-2">Your cart is empty</p>
                  <p className="text-sm text-foreground/60 max-w-xs">Looks like you haven't added any premium farm products to your cart yet.</p>
                </div>
              ) : (
                items.map((item) => (
                  <div 
                    key={item.id} 
                    className={`flex gap-4 p-4 rounded-2xl relative group transition-all cursor-pointer ${
                      selectedIds.includes(item.id) 
                        ? 'bg-zinc-50 dark:bg-zinc-800 border-2 border-farm-primary shadow-sm' 
                        : 'bg-white dark:bg-zinc-900 border-2 border-transparent opacity-70 hover:opacity-100 grayscale-[0.5]'
                    }`}
                    onClick={() => toggleItem(item.id)}
                  >
                    {/* Checkbox */}
                    <div className="absolute top-4 left-4 z-10">
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                        selectedIds.includes(item.id) 
                          ? 'bg-farm-primary border-farm-primary text-white' 
                          : 'bg-white border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700'
                      }`}>
                        {selectedIds.includes(item.id) && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </div>

                    <button 
                      onClick={(e) => { e.stopPropagation(); removeFromCart(item.id); }}
                      className="absolute -top-2 -right-2 bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 p-1.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110 z-20"
                      title="Remove Item"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

                    <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-black/10 dark:border-white/10 bg-zinc-200 dark:bg-zinc-800">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <h4 className="font-semibold text-foreground text-sm leading-tight pr-4">{item.name}</h4>
                      <p className="text-farm-primary font-extrabold mt-1">{item.price}</p>
                      
                      <div className="mt-auto pt-2 flex items-center gap-3">
                        <div className="flex bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-lg overflow-hidden h-8">
                          <button 
                            onClick={(e) => { e.stopPropagation(); updateQuantity(item.id, -1); }}
                            className="px-2.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center font-medium"
                          >-</button>
                          <div className="px-2 flex items-center justify-center font-bold text-xs min-w-[32px] border-x border-black/5 dark:border-white/5">
                            {item.quantity}
                          </div>
                          <button 
                            onClick={(e) => { e.stopPropagation(); updateQuantity(item.id, 1); }}
                            className="px-2.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center font-medium"
                          >+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary */}
            {items.length > 0 && (
              <div className="p-6 border-t border-black/5 dark:border-white/5 bg-zinc-50 dark:bg-zinc-900/80">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-foreground/60 text-sm">Subtotal ({selectedCount} selected)</span>
                  <span className="font-extrabold text-lg tracking-tight">₦{selectedPrice.toLocaleString()}</span>
                </div>
                <p className="text-xs text-foreground/50 mb-6">Delivery details negotiated via WhatsApp upon checkout.</p>
                <button 
                  disabled={selectedIds.length === 0}
                  className="w-full py-4 bg-farm-primary hover:bg-farm-hover disabled:bg-zinc-300 dark:disabled:bg-zinc-700 disabled:cursor-not-allowed text-white rounded-xl font-bold transition-all shadow-xl shadow-farm-primary/25 hover:shadow-farm-primary/40 flex items-center justify-center gap-2"
                >
                  <span>{selectedIds.length === 0 ? 'Select items to checkout' : 'Checkout to WhatsApp'}</span>
                  {selectedIds.length > 0 && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
