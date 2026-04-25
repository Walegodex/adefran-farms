"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppWidget() {
  // Replace with the actual WhatsApp number including country code (e.g., 2348000000000)
  const phoneNumber = "1234567890"; 
  const message = "Hello Adefran Farms! I would like to make an inquiry.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center group"
    >
      <div className="absolute right-full mr-4 bg-white dark:bg-zinc-800 px-4 py-2 rounded-xl shadow-lg border border-black/5 dark:border-white/5 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-300 w-32 text-center">
        <span className="text-sm font-semibold text-foreground">Chat with us!</span>
        <div className="absolute top-1/2 -mt-2 -right-2 w-4 h-4 bg-white dark:bg-zinc-800 rotate-45 border-r border-t border-black/5 dark:border-white/5"></div>
      </div>
      
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 hover:scale-110 transition-all duration-300 relative"
      >
        <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75"></span>
        <MessageCircle className="w-8 h-8" />
      </a>
    </motion.div>
  );
}
